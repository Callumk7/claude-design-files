import type { JSX, ParentProps } from 'solid-js'
import { For } from 'solid-js'
import { IconMR } from '../icons'

/* ── Inline code ── */
export function InlineCode(props: ParentProps) {
  return <code class="inline-code">{props.children}</code>
}

/* ── Code block ── */
type CodeBlockProps = {
  filename?: string
  lang?: string
  meta?: string
  children: JSX.Element
}

export function CodeBlock(props: CodeBlockProps) {
  return (
    <div class="codeblock">
      <div class="codeblock__head">
        <span>
          {props.lang && <span class="lang">{props.lang}</span>}
          {props.lang && '  '}
          {props.filename}
        </span>
        {props.meta && <span>{props.meta}</span>}
      </div>
      <div class="codeblock__body">
        <pre>{props.children}</pre>
      </div>
    </div>
  )
}

/* ── Diff viewer ── */
export type DiffLine =
  | { type: 'context'; oldLine: number; newLine: number; code: string }
  | { type: 'add';     oldLine?: null;  newLine: number; code: string }
  | { type: 'del';     oldLine: number; newLine?: null;  code: string }

type DiffViewProps = {
  filename: string
  stats?: string
  rows: DiffLine[]
}

export function DiffView(props: DiffViewProps) {
  return (
    <div class="diff">
      <div class="diff__head">
        <IconMR />
        {props.filename}
        {props.stats && (
          <span style={{ color: 'var(--text-tertiary)' }}>· {props.stats}</span>
        )}
      </div>
      <For each={props.rows}>
        {(row) => (
          <div
            class={`diff__row${row.type === 'add' ? ' add' : row.type === 'del' ? ' del' : ''}`}
          >
            <span class="ln">{row.type !== 'add' && row.oldLine}</span>
            <span class="ln">{row.type !== 'del' && row.newLine}</span>
            <span class="code">{row.code}</span>
          </div>
        )}
      </For>
    </div>
  )
}
