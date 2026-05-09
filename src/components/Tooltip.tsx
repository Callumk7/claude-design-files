import type { JSX, ParentProps } from 'solid-js'

type TooltipProps = ParentProps<{
  content: JSX.Element
  kbd?: string
}>

export function Tooltip(props: TooltipProps) {
  return (
    <div class="tip-host">
      <div class="tip">
        {props.content}
        {props.kbd && <span class="kbd">{props.kbd}</span>}
      </div>
      {props.children}
    </div>
  )
}

type KbdProps = ParentProps<{ style?: JSX.CSSProperties | string }>
export function Kbd(props: KbdProps) {
  return <span class="kbd" style={props.style as any}>{props.children}</span>
}
