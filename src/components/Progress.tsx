import type { JSX, ParentProps } from 'solid-js'
import { For } from 'solid-js'
import { IconCheck, IconX } from '../icons'

/* ── Progress bar ── */
type ProgressProps = {
  label: string
  value: number   // 0–100 percentage
  maxLabel?: string
  meta?: string
  variant?: 'default' | 'success' | 'danger'
  labelRight?: JSX.Element
}

export function Progress(props: ProgressProps) {
  const fillClass = () => {
    if (props.variant === 'success') return 'progress__fill success'
    if (props.variant === 'danger')  return 'progress__fill danger'
    return 'progress__fill'
  }

  return (
    <div class="progress">
      <div class="progress__head">
        <span>{props.label}</span>
        <span class="pct">{props.maxLabel ?? `${props.value}%`}</span>
      </div>
      <div class="progress__bar">
        <div class={fillClass()} style={{ right: `${100 - props.value}%` }} />
      </div>
      {props.meta && <div class="meta-text">{props.meta}</div>}
    </div>
  )
}

/* ── Pipeline ── */
export type PipelineStage = {
  label: string
  status: 'done' | 'running' | 'failed' | 'pending'
  index?: number
}

type PipelineProps = {
  stages: PipelineStage[]
}

export function Pipeline(props: PipelineProps) {
  return (
    <div class="pipeline">
      <For each={props.stages}>
        {(stage, i) => (
          <>
            {i() > 0 && <span class="arrow" style={{ color: 'var(--text-tertiary)' }}>›</span>}
            <div
              class={`stage${stage.status === 'done' ? ' done' : stage.status === 'running' ? ' run' : stage.status === 'failed' ? ' fail' : ''}`}
            >
              <span class="ico">
                {stage.status === 'done' && <IconCheck size="sm" />}
                {stage.status === 'failed' && <IconX size="sm" />}
                {stage.status === 'pending' && (i() + 1)}
              </span>
              {stage.label}
            </div>
          </>
        )}
      </For>
    </div>
  )
}
