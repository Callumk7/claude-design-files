import type { JSX, ParentProps } from 'solid-js'
import { splitProps, Show } from 'solid-js'

/* ── Text Input ── */
type InputProps = {
  label?: string
  id?: string
  value?: string
  placeholder?: string
  help?: JSX.Element
  error?: string
  disabled?: boolean
  class?: string
  onInput?: JSX.EventHandlerUnion<HTMLInputElement, InputEvent>
}

export function Input(props: InputProps) {
  const inputClass = () => {
    const parts = ['input']
    if (props.error) parts.push('is-error')
    if (props.class) parts.push(props.class)
    return parts.join(' ')
  }

  return (
    <div class="field" style={{ 'max-width': 'none' }}>
      <Show when={props.label}>
        <label for={props.id}>{props.label}</label>
      </Show>
      <input
        id={props.id}
        class={inputClass()}
        value={props.value ?? ''}
        placeholder={props.placeholder}
        disabled={props.disabled}
        onInput={props.onInput}
      />
      <Show when={props.error}>
        <div class="err" style={{ font: 'var(--t-caption)', color: 'var(--danger)' }}>{props.error}</div>
      </Show>
      <Show when={props.help && !props.error}>
        <div class="help" style={{ font: 'var(--t-caption)', color: 'var(--text-tertiary)' }}>{props.help}</div>
      </Show>
    </div>
  )
}

/* ── Select ── */
type SelectProps = ParentProps<{
  label?: string
  id?: string
  class?: string
}>

export function Select(props: SelectProps) {
  return (
    <div class="field" style={{ 'max-width': 'none' }}>
      <Show when={props.label}>
        <label for={props.id}>{props.label}</label>
      </Show>
      <select id={props.id} class={`forge-select${props.class ? ' ' + props.class : ''}`}>
        {props.children}
      </select>
    </div>
  )
}

/* ── Textarea ── */
type TextareaProps = {
  label?: string
  id?: string
  placeholder?: string
  help?: JSX.Element
  value?: string
  rows?: number
}

export function Textarea(props: TextareaProps) {
  return (
    <div class="field" style={{ 'max-width': 'none' }}>
      <Show when={props.label}>
        <label for={props.id}>{props.label}</label>
      </Show>
      <textarea
        id={props.id}
        class="forge-textarea"
        placeholder={props.placeholder}
        rows={props.rows ?? 4}
        value={props.value ?? ''}
      />
      <Show when={props.help}>
        <div class="help" style={{ font: 'var(--t-caption)', color: 'var(--text-tertiary)' }}>{props.help}</div>
      </Show>
    </div>
  )
}

/* ── Input Group (with addon) ── */
type InputGroupProps = {
  label?: string
  id?: string
  placeholder?: string
  value?: string
  addonLeft?: string
  addonRight?: string
}

export function InputGroup(props: InputGroupProps) {
  return (
    <div class="field" style={{ 'max-width': 'none' }}>
      <Show when={props.label}>
        <label for={props.id}>{props.label}</label>
      </Show>
      <div class="input-group">
        <Show when={props.addonLeft}>
          <span class="addon">{props.addonLeft}</span>
        </Show>
        <input
          id={props.id}
          class="input"
          placeholder={props.placeholder}
          value={props.value ?? ''}
        />
        <Show when={props.addonRight}>
          <span class="addon right">{props.addonRight}</span>
        </Show>
      </div>
    </div>
  )
}

/* ── Checkbox ── */
type CheckboxProps = ParentProps<{
  checked?: boolean
  onChange?: JSX.EventHandlerUnion<HTMLInputElement, Event>
}>

export function Checkbox(props: CheckboxProps) {
  return (
    <label class="forge-checkbox">
      <input type="checkbox" checked={props.checked} onChange={props.onChange} />
      {props.children}
    </label>
  )
}

/* ── Radio ── */
type RadioProps = ParentProps<{
  name?: string
  checked?: boolean
  value?: string
}>

export function Radio(props: RadioProps) {
  return (
    <label class="forge-radio">
      <input type="radio" name={props.name} checked={props.checked} value={props.value} />
      {props.children}
    </label>
  )
}

/* ── Toggle ── */
type ToggleProps = ParentProps<{
  checked?: boolean
  onChange?: JSX.EventHandlerUnion<HTMLInputElement, Event>
}>

export function Toggle(props: ToggleProps) {
  return (
    <span style={{ display: 'inline-flex', 'align-items': 'center', gap: '8px', font: 'var(--t-body-s)', color: 'var(--text-secondary)' }}>
      {props.children}
      <input class="forge-toggle" type="checkbox" checked={props.checked} onChange={props.onChange} />
    </span>
  )
}
