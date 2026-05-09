import type { JSX, ParentProps } from 'solid-js'
import { splitProps } from 'solid-js'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger' | 'danger-solid' | 'hero'
export type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonProps = ParentProps<{
  variant?: ButtonVariant
  size?: ButtonSize
  iconOnly?: boolean
  disabled?: boolean
  class?: string
  onClick?: JSX.EventHandlerUnion<HTMLButtonElement, MouseEvent>
  type?: 'button' | 'submit' | 'reset'
  'aria-label'?: string
}>

const variantClass: Record<ButtonVariant, string> = {
  'primary':      'btn--primary',
  'secondary':    'btn--secondary',
  'ghost':        'btn--ghost',
  'danger':       'btn--danger',
  'danger-solid': 'btn--danger-solid',
  'hero':         'btn--hero',
}

const sizeClass: Record<ButtonSize, string> = {
  'sm': 'btn--sm',
  'md': '',
  'lg': 'btn--lg',
}

export function Button(props: ButtonProps) {
  const [local, rest] = splitProps(props, [
    'variant', 'size', 'iconOnly', 'disabled', 'class', 'children',
  ])

  const classes = () => {
    const parts = ['btn']
    if (local.variant) parts.push(variantClass[local.variant])
    if (local.size && local.size !== 'md') parts.push(sizeClass[local.size])
    if (local.iconOnly) parts.push('btn--icon')
    if (local.class) parts.push(local.class)
    return parts.join(' ')
  }

  return (
    <button class={classes()} disabled={local.disabled} type="button" {...rest}>
      {local.children}
    </button>
  )
}
