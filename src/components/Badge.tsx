import type { ParentProps } from 'solid-js'

export type BadgeStatus =
  | 'default'
  | 'draft'
  | 'running'
  | 'passed'
  | 'failed'
  | 'review'
  | 'merged'
  | 'queued'
  | 'hero'

type BadgeProps = ParentProps<{
  status?: BadgeStatus
  showDot?: boolean
  class?: string
}>

const statusClass: Record<BadgeStatus, string> = {
  'default': '',
  'draft':   'badge--draft',
  'running': 'badge--running',
  'passed':  'badge--passed',
  'failed':  'badge--failed',
  'review':  'badge--review',
  'merged':  'badge--merged',
  'queued':  'badge--queued',
  'hero':    'badge--hero',
}

export function Badge(props: BadgeProps) {
  const classes = () => {
    const parts = ['badge']
    const s = props.status ?? 'default'
    if (statusClass[s]) parts.push(statusClass[s])
    if (props.class) parts.push(props.class)
    return parts.join(' ')
  }

  return (
    <span class={classes()}>
      {(props.showDot ?? true) && <span class="dot" />}
      {props.children}
    </span>
  )
}
