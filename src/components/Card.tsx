import type { ParentProps } from "solid-js";

type CardVariant = "default" | "accent" | "sunken";

type CardProps = ParentProps<{
  variant?: CardVariant;
  class?: string;
  style?: string;
}>;

export function Card(props: CardProps) {
  const classes = () => {
    const parts = ["card"];
    if (props.variant === "accent") parts.push("card--accent");
    if (props.variant === "sunken") parts.push("card--sunken");
    if (props.class) parts.push(props.class);
    return parts.join(" ");
  };

  return (
    <div class={classes()} style={props.style}>
      {props.children}
    </div>
  );
}

type CardHeadProps = ParentProps<{ class?: string }>;
export function CardHead(props: CardHeadProps) {
  return (
    <div class={`card__head${props.class ? " " + props.class : ""}`}>
      {props.children}
    </div>
  );
}

type CardTitleProps = ParentProps<{}>;
export function CardTitle(props: CardTitleProps) {
  return <h3 class="card__title">{props.children}</h3>;
}

type CardSubProps = ParentProps<{}>;
export function CardSub(props: CardSubProps) {
  return (
    <p class="card__sub" style={{ margin: 0 }}>
      {props.children}
    </p>
  );
}
