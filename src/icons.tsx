import type { JSX } from 'solid-js'

type IconProps = {
  class?: string
  size?: 'sm' | 'md' | 'lg'
  style?: JSX.CSSProperties
}

function icClass(props: IconProps) {
  const sizeClass = props.size === 'sm' ? 'ic ic-sm' : props.size === 'lg' ? 'ic ic-lg' : 'ic'
  return `${sizeClass}${props.class ? ' ' + props.class : ''}`
}

export const IconPlus = (props: IconProps) => (
  <svg viewBox="0 0 16 16" class={icClass(props)} style={props.style}>
    <path d="M8 3v10M3 8h10" />
  </svg>
)

export const IconArrow = (props: IconProps) => (
  <svg viewBox="0 0 16 16" class={icClass(props)} style={props.style}>
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
)

export const IconArrowR = (props: IconProps) => (
  <svg viewBox="0 0 16 16" class={icClass(props)} style={props.style}>
    <path d="M5 4l4 4-4 4" />
  </svg>
)

export const IconCheck = (props: IconProps) => (
  <svg viewBox="0 0 16 16" class={icClass(props)} style={props.style}>
    <path d="M3 8.5l3.5 3.5L13 5" />
  </svg>
)

export const IconX = (props: IconProps) => (
  <svg viewBox="0 0 16 16" class={icClass(props)} style={props.style}>
    <path d="M4 4l8 8M12 4l-8 8" />
  </svg>
)

export const IconPlay = (props: IconProps) => (
  <svg viewBox="0 0 16 16" class={icClass(props)} style={props.style}>
    <path d="M5 3.5v9l7-4.5z" />
  </svg>
)

export const IconSearch = (props: IconProps) => (
  <svg viewBox="0 0 16 16" class={icClass(props)} style={props.style}>
    <circle cx="7" cy="7" r="4" />
    <path d="M10 10l3 3" />
  </svg>
)

export const IconBranch = (props: IconProps) => (
  <svg viewBox="0 0 16 16" class={icClass(props)} style={props.style}>
    <circle cx="4" cy="4" r="1.5" />
    <circle cx="4" cy="12" r="1.5" />
    <circle cx="12" cy="6" r="1.5" />
    <path d="M4 5.5v5M4 8c0-2 4-2 4-4" />
  </svg>
)

export const IconMR = (props: IconProps) => (
  <svg viewBox="0 0 16 16" class={icClass(props)} style={props.style}>
    <circle cx="4" cy="4" r="1.5" />
    <circle cx="4" cy="12" r="1.5" />
    <circle cx="12" cy="12" r="1.5" />
    <path d="M4 5.5v5M5.5 12H10.5" />
  </svg>
)

export const IconBug = (props: IconProps) => (
  <svg viewBox="0 0 16 16" class={icClass(props)} style={props.style}>
    <rect x="5" y="6" width="6" height="7" rx="3" />
    <path d="M5 9H2M11 9h3M5 12H2M11 12h3M6 6V4M10 6V4" />
  </svg>
)

export const IconFlow = (props: IconProps) => (
  <svg viewBox="0 0 16 16" class={icClass(props)} style={props.style}>
    <rect x="2" y="3" width="5" height="3" rx="1" />
    <rect x="9" y="10" width="5" height="3" rx="1" />
    <path d="M4.5 6v3.5h7" />
  </svg>
)

export const IconBell = (props: IconProps) => (
  <svg viewBox="0 0 16 16" class={icClass(props)} style={props.style}>
    <path d="M4 11V8a4 4 0 018 0v3l1 2H3l1-2zM6.5 13.5a2 2 0 003 0" />
  </svg>
)

export const IconInfo = (props: IconProps) => (
  <svg viewBox="0 0 16 16" class={icClass(props)} style={props.style}>
    <circle cx="8" cy="8" r="6" />
    <path d="M8 7v4M8 5v.5" />
  </svg>
)

export const IconWarn = (props: IconProps) => (
  <svg viewBox="0 0 16 16" class={icClass(props)} style={props.style}>
    <path d="M8 2.5l6 11H2l6-11zM8 7v3M8 11.5v.5" />
  </svg>
)

export const IconKeyboard = (props: IconProps) => (
  <svg viewBox="0 0 16 16" class={icClass(props)} style={props.style}>
    <rect x="2" y="4" width="12" height="8" rx="1.5" />
    <path d="M5 7h.5M8 7h.5M11 7h.5M5 10h6" />
  </svg>
)

export const IconSlack = (props: IconProps) => (
  <svg viewBox="0 0 16 16" class={icClass(props)} style={props.style}>
    <rect x="3" y="3" width="3" height="6" rx="1.5" />
    <rect x="7" y="3" width="6" height="3" rx="1.5" />
    <rect x="10" y="7" width="3" height="6" rx="1.5" />
    <rect x="3" y="10" width="6" height="3" rx="1.5" />
  </svg>
)
