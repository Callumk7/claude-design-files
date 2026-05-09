import type { JSX } from 'solid-js'
import { createSignal, Show } from 'solid-js'
import { IconCheck, IconX, IconInfo, IconWarn } from '../icons'
import { Button } from './Button'

export type ToastType = 'success' | 'error' | 'info' | 'warn'

type ToastProps = {
  type: ToastType
  title: JSX.Element
  body?: JSX.Element
  action?: { label: string; onClick?: () => void }
  dismissible?: boolean
  onDismiss?: () => void
}

const icons: Record<ToastType, () => JSX.Element> = {
  success: () => <IconCheck />,
  error:   () => <IconX />,
  info:    () => <IconInfo />,
  warn:    () => <IconWarn />,
}

export function Toast(props: ToastProps) {
  const [dismissed, setDismissed] = createSignal(false)

  const dismiss = () => {
    setDismissed(true)
    props.onDismiss?.()
  }

  return (
    <Show when={!dismissed()}>
      <div class={`toast toast--${props.type}`}>
        <div class="toast__icon">{icons[props.type]()}</div>
        <div>
          <div class="toast__title">{props.title}</div>
          <Show when={props.body}>
            <div class="toast__body">{props.body}</div>
          </Show>
        </div>
        <Show
          when={props.action}
          fallback={
            <Show when={props.dismissible ?? true}>
              <Button variant="ghost" size="sm" iconOnly aria-label="dismiss" onClick={dismiss}>
                <IconX size="sm" />
              </Button>
            </Show>
          }
        >
          <Button variant="secondary" size="sm" onClick={() => { props.action?.onClick?.(); dismiss() }}>
            {props.action!.label}
          </Button>
        </Show>
      </div>
    </Show>
  )
}
