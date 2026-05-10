import { createSignal, onMount, onCleanup, For, Show } from "solid-js";
import { Button } from "./components/Button";
import { Badge } from "./components/Badge";
import { Card, CardHead, CardTitle, CardSub } from "./components/Card";
import {
  Input,
  Select,
  Textarea,
  InputGroup,
  Checkbox,
  Radio,
  Toggle,
} from "./components/Input";
import { InlineCode, CodeBlock, DiffView } from "./components/Code";
import { Progress, Pipeline } from "./components/Progress";
import { Toast } from "./components/Toast";
import { Tooltip, Kbd } from "./components/Tooltip";
import {
  IconPlus,
  IconArrow,
  IconCheck,
  IconX,
  IconPlay,
  IconSearch,
  IconBranch,
  IconMR,
  IconBug,
  IconFlow,
  IconInfo,
  IconWarn,
  IconSlack,
} from "./icons";

// ── Helpers ──────────────────────────────────────────────────────────────────

function Section(props: {
  id: string;
  num: string;
  title: string;
  desc: string;
  children: any;
}) {
  return (
    <section id={props.id} class="ds-section">
      <header>
        <span class="num">{props.num}</span>
        <div>
          <h2>{props.title}</h2>
          <p>{props.desc}</p>
        </div>
      </header>
      {props.children}
    </section>
  );
}

function Demo(props: { tight?: boolean; style?: string; children: any }) {
  return (
    <div class={`demo${props.tight ? " demo--tight" : ""}`} style={props.style}>
      {props.children}
    </div>
  );
}

function Label(props: { children: any }) {
  return <div class="label">{props.children}</div>;
}

function Row(props: { style?: string; children: any }) {
  return (
    <div class="flex flex-wrap gap-3 items-center" style={props.style}>
      {props.children}
    </div>
  );
}

function Divider() {
  return <hr />;
}

// ── Section components ────────────────────────────────────────────────────────

function ColorSection() {
  return (
    <Section
      id="color"
      num="01"
      title="Color"
      desc="Five brand colors do most of the work. Neon-ice is reserved for hero moments; tea-green is exclusively success."
    >
      <div class="ds-subsection">
        <h3>Brand</h3>
        <p class="lead">
          The provided palette, with the role each color plays in product UI.
        </p>
        <div class="grid grid-cols-5 gap-3" style={{ "--tw-cols": "5" }}>
          {[
            {
              bg: "var(--jet-black)",
              name: "Jet Black",
              role: "canvas / surface-1",
              hex: "#202a25",
            },
            {
              bg: "var(--violet-twilight)",
              name: "Violet Twilight",
              role: "primary brand · CTAs",
              hex: "#5f4bb6",
            },
            {
              bg: "var(--wisteria-blue)",
              name: "Wisteria Blue",
              role: "info · running states",
              hex: "#86a5d9",
            },
            {
              bg: "var(--neon-ice)",
              name: "Neon Ice",
              role: "hero accent · sparingly",
              hex: "#26f0f1",
            },
            {
              bg: "var(--tea-green)",
              name: "Tea Green",
              role: "success · merged · passing",
              hex: "#c4ebc8",
            },
          ].map((s) => (
            <div
              class="rounded-r4 overflow-hidden border border-white/[.07]"
              style={{ background: "var(--surface-1)" }}
            >
              <div
                style={{
                  height: "110px",
                  background: s.bg,
                  "border-bottom": "1px solid var(--border)",
                }}
              />
              <div class="p-3 pb-4">
                <div
                  style={{
                    font: "600 13px/1.2 var(--font-sans)",
                    "margin-bottom": "2px",
                  }}
                >
                  {s.name}
                </div>
                <div class="meta-text" style={{ "margin-bottom": "8px" }}>
                  {s.role}
                </div>
                <div class="meta-text">{s.hex}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div class="ds-subsection">
        <h3>Neutrals — Ink scale</h3>
        <p class="lead">
          An 11-step ramp derived from{" "}
          <InlineCode>hsl(150, 14%, x%)</InlineCode> — the same hue as
          jet-black.
        </p>
        <div class="flex rounded-r3 overflow-hidden border border-white/[.07]">
          {[
            { bg: "#0e1411", label: "50", dark: false },
            { bg: "#161d19", label: "100", dark: false },
            { bg: "#202a25", label: "200", dark: false },
            { bg: "#283330", label: "300", dark: false },
            { bg: "#313d38", label: "400", dark: false },
            { bg: "#4f6258", label: "500", dark: false },
            { bg: "#8aa092", label: "600", dark: true },
            { bg: "#a8baad", label: "700", dark: true },
            { bg: "#c8d4cb", label: "800", dark: true },
            { bg: "#e3eae5", label: "900", dark: true },
            { bg: "#f1f4f2", label: "950", dark: true },
          ].map((step) => (
            <div
              class="flex-1 aspect-square flex items-end p-1.5 text-[11px] font-mono"
              style={{
                background: step.bg,
                color: step.dark ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.7)",
              }}
            >
              {step.label}
            </div>
          ))}
        </div>
      </div>

      <div class="ds-subsection">
        <h3>Semantic tokens</h3>
        <p class="lead">All UI references these — never raw hex.</p>
        <table class="semtable">
          <thead>
            <tr>
              <th style={{ width: "30%" }}>Token</th>
              <th style={{ width: "30%" }}>Value</th>
              <th>Use</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                bg: "var(--bg)",
                token: "--bg",
                val: "ink-100 (#161d19)",
                use: "App background — slightly darker than surface-1 to let cards float.",
              },
              {
                bg: "var(--surface-1)",
                token: "--surface-1",
                val: "jet-black (#202a25)",
                use: "Default card / row surface.",
              },
              {
                bg: "var(--surface-2)",
                token: "--surface-2",
                val: "ink-300 (#283330)",
                use: "Raised surface (modals, popovers, table headers).",
              },
              {
                bg: "var(--surface-3)",
                token: "--surface-3",
                val: "ink-400 (#313d38)",
                use: "Hover / active state on surfaces.",
              },
              {
                bg: "var(--primary)",
                token: "--primary",
                val: "violet-twilight",
                use: "Primary buttons, selection, focus ring.",
              },
              {
                bg: "var(--info)",
                token: "--info",
                val: "wisteria-blue",
                use: "Running/in-progress states, links, info toasts.",
              },
              {
                bg: "var(--success)",
                token: "--success",
                val: "tea-green",
                use: "Passing tests, merged, additions in diff.",
              },
              {
                bg: "var(--warning)",
                token: "--warning",
                val: "#f5b860",
                use: "Needs attention, review requested. Custom — outside the brand 5.",
              },
              {
                bg: "var(--danger)",
                token: "--danger",
                val: "#ef6a6a",
                use: "Failed tests, destructive, deletions. Custom — outside the brand 5.",
              },
              {
                bg: "var(--hero)",
                token: "--hero",
                val: "neon-ice",
                use: 'Hero moments only — onboarding, AI suggestions, "live" indicators. Never a CTA.',
              },
            ].map((row) => (
              <tr>
                <td>
                  <span class="dot" style={{ background: row.bg }} />
                  <code>{row.token}</code>
                </td>
                <td>
                  <code>{row.val}</code>
                </td>
                <td
                  style={{
                    color: "var(--text-secondary)",
                    "font-size": "13px",
                  }}
                >
                  {row.use}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

function TypographySection() {
  return (
    <Section
      id="typography"
      num="02"
      title="Typography"
      desc="Inter for everything human. JetBrains Mono for everything computed — paths, hashes, code, identifiers."
    >
      <Demo>
        {[
          {
            role: "Display",
            style: { font: "var(--t-display)", "letter-spacing": "-0.02em" },
            text: "Ship the diff.",
            meta: "Inter 700 · 44 / 1.1",
          },
          {
            role: "H1",
            style: { font: "var(--t-h1)", "letter-spacing": "-0.015em" },
            text: "Open MRs awaiting review",
            meta: "Inter 600 · 32 / 1.2",
          },
          {
            role: "H2",
            style: { font: "var(--t-h2)", "letter-spacing": "-0.01em" },
            text: "Pipeline · feature/auth-rewrite",
            meta: "Inter 600 · 22 / 1.3",
          },
          {
            role: "H3",
            style: { font: "var(--t-h3)" },
            text: "Failed — 3 tests",
            meta: "Inter 600 · 16 / 1.4",
          },
          {
            role: "Body L",
            style: { font: "var(--t-body-l)" },
            text: "Forge connects to your repo, your CI, and the channels your team already lives in.",
            meta: "Inter 400 · 15 / 1.55",
          },
          {
            role: "Body",
            style: { font: "var(--t-body)" },
            text: "Default reading size for most product copy and list rows.",
            meta: "Inter 400 · 14 / 1.55",
          },
          {
            role: "Caption",
            style: { font: "var(--t-caption)", color: "var(--text-secondary)" },
            text: "Updated 4 minutes ago by maya",
            meta: "Inter 500 · 12 / 1.4",
          },
          {
            role: "Mono",
            style: { font: "var(--t-mono)", "font-family": "var(--font-mono)" },
            text: "git checkout -b feat/forge-tokens",
            meta: "JetBrains 400 · 13 / 1.6",
          },
          {
            role: "Eyebrow",
            style: {
              font: "var(--t-eyebrow)",
              "font-family": "var(--font-mono)",
              color: "var(--text-tertiary)",
              "letter-spacing": "0.08em",
              "text-transform": "uppercase" as const,
            },
            text: "PIPELINE · STAGE 3 OF 5",
            meta: "JetBrains 600 · 11 / 1",
          },
        ].map((row) => (
          <div
            style={{
              display: "grid",
              "grid-template-columns": "140px 1fr 220px",
              gap: "24px",
              "align-items": "baseline",
              padding: "16px 0",
              "border-bottom": "1px solid var(--divider)",
            }}
          >
            <div
              class="meta-text"
              style={{
                "font-family": "var(--font-mono)",
                color: "var(--text-tertiary)",
                "text-transform": "uppercase",
                "letter-spacing": "0.08em",
                "font-size": "11px",
                "font-weight": "600",
              }}
            >
              {row.role}
            </div>
            <div style={row.style as any}>{row.text}</div>
            <div class="meta-text">{row.meta}</div>
          </div>
        ))}
      </Demo>
    </Section>
  );
}

function SpacingSection() {
  const steps = [
    { token: "--s-1", px: "4px", w: 4 },
    { token: "--s-2", px: "8px", w: 8 },
    { token: "--s-3", px: "12px", w: 12 },
    { token: "--s-4", px: "16px", w: 16 },
    { token: "--s-5", px: "20px", w: 20 },
    { token: "--s-6", px: "24px", w: 24 },
    { token: "--s-8", px: "32px", w: 32 },
    { token: "--s-10", px: "40px", w: 40 },
    { token: "--s-12", px: "48px", w: 48 },
    { token: "--s-16", px: "64px", w: 64 },
    { token: "--s-20", px: "80px", w: 80 },
  ];
  return (
    <Section
      id="spacing"
      num="03"
      title="Spacing &amp; layout"
      desc="4-pixel grid. Comfortable Linear-style density — air between rows, breathing room around code."
    >
      <Demo>
        <div class="grid gap-3">
          {steps.map((s) => (
            <div
              style={{
                display: "grid",
                "grid-template-columns": "80px 80px 1fr",
                "align-items": "center",
                gap: "16px",
              }}
            >
              <code class="meta-text">{s.token}</code>
              <span class="meta-text">{s.px}</span>
              <div
                style={{
                  width: `${s.w}px`,
                  height: "14px",
                  background: "var(--primary)",
                  "border-radius": "3px",
                  opacity: "0.85",
                }}
              />
            </div>
          ))}
        </div>
      </Demo>
    </Section>
  );
}

function RadiusSection() {
  const radii = [
    { token: "r-1", val: "4", r: "4px" },
    { token: "r-2", val: "6", r: "6px" },
    { token: "r-3", val: "8", r: "8px" },
    { token: "r-4", val: "10", r: "10px" },
    { token: "r-5", val: "12", r: "12px" },
    { token: "r-6", val: "16", r: "16px" },
    { token: "pill", val: "pill", r: "999px" },
  ];
  return (
    <Section
      id="radius"
      num="04"
      title="Radius"
      desc="Soft 8–12px on cards and modals. Sharper 4–6px for chips and inputs. Pills for status."
    >
      <Demo>
        <div
          style={{
            display: "grid",
            "grid-template-columns": "repeat(7, 1fr)",
            gap: "12px",
          }}
        >
          {radii.map((r) => (
            <div
              style={{
                "aspect-ratio": "1",
                background: "var(--surface-2)",
                border: "1px solid var(--border)",
                display: "grid",
                "align-content": "end",
                padding: "10px",
                "border-radius": r.r,
                font: "var(--t-mono-s)",
                "font-family": "var(--font-mono)",
                color: "var(--text-secondary)",
              }}
            >
              {r.val} · {r.token}
            </div>
          ))}
        </div>
      </Demo>
    </Section>
  );
}

function ElevationSection() {
  const levels = [
    { label: "Sunken", name: "surface-sunken", cls: "sunken" },
    { label: "Level 1", name: "surface-1", cls: "" },
    { label: "Level 2", name: "surface-2", cls: "lvl-2" },
    { label: "Level 3 · hover", name: "surface-3", cls: "lvl-3" },
  ];
  return (
    <Section
      id="elevation"
      num="05"
      title="Elevation"
      desc="Tints, not shadows. Shadows are reserved for popovers, toasts and modals."
    >
      <Demo>
        <div
          style={{
            display: "grid",
            "grid-template-columns": "repeat(4, 1fr)",
            gap: "16px",
          }}
        >
          {levels.map((lv) => (
            <div
              style={{
                background:
                  lv.cls === "sunken"
                    ? "var(--surface-sunken)"
                    : lv.cls === "lvl-2"
                      ? "var(--surface-2)"
                      : lv.cls === "lvl-3"
                        ? "var(--surface-3)"
                        : "var(--surface-1)",
                border: `1px solid ${lv.cls === "sunken" ? "rgba(0,0,0,0.4)" : "var(--border)"}`,
                "border-radius": "10px",
                padding: "20px",
                height: "110px",
                display: "flex",
                "flex-direction": "column",
                "justify-content": "space-between",
                "box-shadow":
                  lv.cls === "sunken"
                    ? "inset 0 1px 0 rgba(0,0,0,0.4)"
                    : "none",
              }}
            >
              <div class="meta-text">{lv.label}</div>
              <div style={{ font: "600 13px/1 var(--font-sans)" }}>
                {lv.name}
              </div>
            </div>
          ))}
        </div>
      </Demo>
    </Section>
  );
}

function ButtonsSection() {
  return (
    <Section
      id="buttons"
      num="06"
      title="Buttons"
      desc="Five intents: primary, secondary, ghost, danger, hero. Three sizes. Hero is for one moment — never two on one screen."
    >
      <Demo>
        <Label>Intent</Label>
        <Row>
          <Button variant="primary">
            Open MR <IconArrow />
          </Button>
          <Button variant="secondary">Run tests</Button>
          <Button variant="ghost">Cancel</Button>
          <Button variant="danger">Close PR</Button>
          <Button variant="danger-solid">Delete branch</Button>
          <Button variant="hero">
            <IconPlay /> Try AI rebase
          </Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
        </Row>

        <Divider />

        <Label>Size</Label>
        <Row>
          <Button variant="primary" size="sm">
            Small
          </Button>
          <Button variant="primary">Medium</Button>
          <Button variant="primary" size="lg">
            Large
          </Button>
          <Button variant="secondary" iconOnly aria-label="Add">
            <IconPlus />
          </Button>
          <Button variant="ghost" iconOnly aria-label="Search">
            <IconSearch />
          </Button>
        </Row>

        <Divider />

        <Label>In context</Label>
        <Row>
          <Button variant="primary">
            <IconMR /> Create MR <Kbd>⌘ ⏎</Kbd>
          </Button>
          <Button variant="secondary">
            <IconSlack /> Post to #eng
          </Button>
          <Button variant="ghost">
            <IconPlay /> Re-run failed
          </Button>
        </Row>
      </Demo>
    </Section>
  );
}

function InputsSection() {
  return (
    <Section
      id="inputs"
      num="07"
      title="Form inputs"
      desc="Inputs sit on surface-2 so they read as interactive against surface-1 cards. Focus ring is the violet primary."
    >
      <Demo>
        <div
          style={{
            display: "grid",
            "grid-template-columns": "repeat(2, 1fr)",
            gap: "16px",
          }}
        >
          <div class="field" style={{ "max-width": "none" }}>
            <label for="i1">Branch name</label>
            <input id="i1" class="input" value="feat/forge-tokens" />
            <div
              class="help"
              style={{
                font: "var(--t-caption)",
                color: "var(--text-tertiary)",
              }}
            >
              Lowercase, hyphenated. Will be created from{" "}
              <InlineCode>main</InlineCode>.
            </div>
          </div>

          <div class="field" style={{ "max-width": "none" }}>
            <label for="i2">Reviewer</label>
            <select id="i2" class="forge-select">
              <option>maya@team</option>
              <option>jordan@team</option>
              <option>priya@team</option>
            </select>
          </div>

          <div class="field" style={{ "max-width": "none" }}>
            <label for="i3">PR URL</label>
            <div class="input-group">
              <span class="addon">github.com/</span>
              <input id="i3" class="input" placeholder="org/repo/pull/123" />
            </div>
          </div>

          <div class="field" style={{ "max-width": "none" }}>
            <label for="i4">Slack channel</label>
            <div class="input-group">
              <span class="addon">#</span>
              <input id="i4" class="input" value="eng-platform" />
              <span class="addon right">⌘K</span>
            </div>
          </div>

          <div
            class="field"
            style={{ "max-width": "none", "grid-column": "1 / -1" }}
          >
            <label for="i5">MR description</label>
            <textarea
              id="i5"
              class="forge-textarea"
              placeholder="Summary of the change, why it matters, what to look for in review…"
            />
            <div
              class="help"
              style={{
                font: "var(--t-caption)",
                color: "var(--text-tertiary)",
              }}
            >
              Markdown supported. AI draft available with <Kbd>⌘ G</Kbd>.
            </div>
          </div>

          <div class="field" style={{ "max-width": "none" }}>
            <label for="i6">Coverage threshold</label>
            <input id="i6" class="input is-error" value="ninety" />
            <div
              class="err"
              style={{ font: "var(--t-caption)", color: "var(--danger)" }}
            >
              Must be a number between 0 and 100.
            </div>
          </div>

          <div class="field" style={{ "max-width": "none" }}>
            <label for="i7">Rate limit</label>
            <input id="i7" class="input" disabled value="100 req / min" />
            <div
              class="help"
              style={{
                font: "var(--t-caption)",
                color: "var(--text-tertiary)",
              }}
            >
              Managed by your workspace plan.
            </div>
          </div>
        </div>

        <Divider />

        <Label>Toggles &amp; choice</Label>
        <div class="flex flex-wrap gap-6 items-start">
          <Checkbox checked>Run tests on push</Checkbox>
          <Checkbox>Notify Slack on failure</Checkbox>
          <Checkbox checked>Auto-merge on green</Checkbox>
          <Toggle checked>Dark mode</Toggle>
          <Toggle>AI suggestions</Toggle>
        </div>

        <Divider />

        <Label>Radio group · Test runner</Label>
        <Row>
          <Radio name="runner" checked>
            Vitest
          </Radio>
          <Radio name="runner">Jest</Radio>
          <Radio name="runner">Playwright</Radio>
          <Radio name="runner">Custom command</Radio>
        </Row>
      </Demo>
    </Section>
  );
}

function CardsSection() {
  return (
    <Section
      id="cards"
      num="08"
      title="Cards &amp; surfaces"
      desc="Three flavors: default, accent (violet outline) for selected/featured, and sunken for code-adjacent reading."
    >
      <Demo style="background: var(--bg); padding: var(--s-6);">
        <div
          style={{
            display: "grid",
            "grid-template-columns": "repeat(3, 1fr)",
            gap: "16px",
          }}
        >
          <Card>
            <CardHead>
              <CardTitle>Open MRs</CardTitle>
              <Badge status="running">Live</Badge>
            </CardHead>
            <div
              style={{ font: "var(--t-display)", "letter-spacing": "-0.02em" }}
            >
              12
            </div>
            <CardSub>3 awaiting your review</CardSub>
          </Card>

          <Card variant="accent">
            <CardHead>
              <CardTitle>Selected workflow</CardTitle>
              <span class="badge">
                <span class="dot" style={{ background: "var(--primary)" }} />
                Active
              </span>
            </CardHead>
            <CardSub>
              Run tests → post results to <InlineCode>#eng-platform</InlineCode>{" "}
              → if green, auto-merge.
            </CardSub>
            <Row>
              <Button variant="primary" size="sm">
                Edit
              </Button>
              <Button variant="ghost" size="sm">
                Disable
              </Button>
            </Row>
          </Card>

          <Card variant="sunken">
            <CardHead>
              <CardTitle>Last commit</CardTitle>
              <span class="meta-text">2m ago</span>
            </CardHead>
            <div
              style={{
                font: "var(--t-mono)",
                "font-family": "var(--font-mono)",
                color: "var(--text-primary)",
              }}
            >
              a3f1c0e
            </div>
            <CardSub>refactor(auth): drop legacy session middleware</CardSub>
          </Card>
        </div>
      </Demo>
    </Section>
  );
}

function BadgesSection() {
  return (
    <Section
      id="badges"
      num="09"
      title="Status badges"
      desc="The vocabulary of states across MRs, runs, tasks. Soft-tinted backgrounds to read at a glance."
    >
      <Demo>
        <Row>
          <Badge status="draft">Draft</Badge>
          <Badge status="queued">Queued</Badge>
          <Badge status="running">Running</Badge>
          <Badge status="review">Review requested</Badge>
          <Badge status="passed">Passed</Badge>
          <Badge status="merged">Merged</Badge>
          <Badge status="failed">Failed</Badge>
          <Badge status="hero">
            <span
              class="dot"
              style={{ background: "var(--hero-fg)", opacity: "0.6" }}
            />{" "}
            Live
          </Badge>
        </Row>

        <Divider />

        <Label>In context</Label>
        <div class="flex flex-wrap gap-4">
          <div
            class="flex items-center gap-2.5"
            style={{
              font: "var(--t-body-s)",
              "font-family": "var(--font-sans)",
            }}
          >
            <Badge status="running">Running</Badge>
            <span style={{ color: "var(--text-secondary)" }}>
              CI · stage 3 of 5
            </span>
          </div>
          <div
            class="flex items-center gap-2.5"
            style={{
              font: "var(--t-body-s)",
              "font-family": "var(--font-sans)",
            }}
          >
            <Badge status="passed">Passed</Badge>
            <span style={{ color: "var(--text-secondary)" }}>
              142 tests in 38s
            </span>
          </div>
          <div
            class="flex items-center gap-2.5"
            style={{
              font: "var(--t-body-s)",
              "font-family": "var(--font-sans)",
            }}
          >
            <Badge status="failed">Failed</Badge>
            <span style={{ color: "var(--text-secondary)" }}>
              auth.spec.ts · 3 assertions
            </span>
          </div>
        </div>
      </Demo>
    </Section>
  );
}

function CodeSection() {
  return (
    <Section
      id="code"
      num="10"
      title="Code &amp; diff"
      desc="Sunken background, mono everything. Tea-green for additions, danger-red for deletions."
    >
      <Demo>
        <Label>Inline</Label>
        <p
          style={{
            font: "var(--t-body)",
            "font-family": "var(--font-sans)",
            margin: 0,
          }}
        >
          Use <InlineCode>forge run</InlineCode> from the workspace root, or
          pass <InlineCode>--watch</InlineCode> to keep the test runner
          attached. Set <InlineCode>FORGE_TOKEN</InlineCode> in your environment
          first.
        </p>

        <Divider />

        <Label>Block</Label>
        <CodeBlock
          filename="src/workflows/post-mr.ts"
          lang="ts"
          meta="32 lines · 1.2 KB"
        >
          <span class="tok-c">{"// Post MR summary to Slack channel"}</span>
          {"\n"}
          <span class="tok-k">export async function</span>{" "}
          <span class="tok-f">postMr</span>
          <span class="tok-p">{"(mr: "}</span>
          <span class="tok-f">PullRequest</span>
          <span class="tok-p">{")"}</span> {"{"}
          {"\n"}
          {"  "}
          <span class="tok-k">const</span>
          {" channel = "}
          <span class="tok-s">"#eng-platform"</span>;{"\n"}
          {"  "}
          <span class="tok-k">await</span>
          {" slack."}
          <span class="tok-f">post</span>
          <span class="tok-p">{"({"}</span>
          {"\n"}
          {"    channel,\n"}
          {"    text: "}
          <span class="tok-s">{"`New MR by ${mr.author}: ${mr.title}`"}</span>,
          {"\n"}
          {"    attachments: [{ color: "}
          <span class="tok-s">"#5f4bb6"</span>
          {", ts: "}
          <span class="tok-n">Date.now()</span>
          {" }],\n"}
          {"  "}
          <span class="tok-p">{"}"}</span>;{"\n"}
          {"}"}
        </CodeBlock>

        <Divider />

        <Label>Diff</Label>
        <DiffView
          filename="src/workflows/post-mr.ts"
          stats="+4 −2"
          rows={[
            {
              type: "context",
              oldLine: 12,
              newLine: 12,
              code: "export async function postMr(mr: PullRequest) {",
            },
            {
              type: "del",
              oldLine: 13,
              newLine: null as any,
              code: '  const channel = "#general";',
            },
            {
              type: "del",
              oldLine: 14,
              newLine: null as any,
              code: "  await slack.post({ channel, text: mr.title });",
            },
            {
              type: "add",
              oldLine: null as any,
              newLine: 13,
              code: '  const channel = mr.config.slackChannel ?? "#eng-platform";',
            },
            {
              type: "add",
              oldLine: null as any,
              newLine: 14,
              code: "  const text = `New MR by ${mr.author}: ${mr.title}`;",
            },
            {
              type: "add",
              oldLine: null as any,
              newLine: 15,
              code: "  const attachments = [{ color: brand.primary }];",
            },
            {
              type: "add",
              oldLine: null as any,
              newLine: 16,
              code: "  await slack.post({ channel, text, attachments });",
            },
            { type: "context", oldLine: 15, newLine: 17, code: "}" },
          ]}
        />
      </Demo>
    </Section>
  );
}

function ToastsSection() {
  return (
    <Section
      id="toasts"
      num="11"
      title="Toasts"
      desc="Stacked top-right. Auto-dismiss after 6s; persist if action is required."
    >
      <Demo>
        <div class="grid gap-3" style={{ "max-width": "460px" }}>
          <Toast
            type="success"
            title={
              <>
                MR #482 merged into <InlineCode>main</InlineCode>
              </>
            }
            body="Posted to #eng-platform · auto-deploy queued."
          />
          <Toast
            type="info"
            title={
              <>
                Tests running on <InlineCode>feat/auth</InlineCode>
              </>
            }
            body="142 of 380 complete · ~22s remaining."
          />
          <Toast
            type="warn"
            title="2 reviews requested on your MRs"
            body="Oldest waiting 2 days · jordan · maya assigned."
            action={{ label: "View" }}
          />
          <Toast
            type="error"
            title={
              <>
                Pipeline failed at stage <InlineCode>e2e</InlineCode>
              </>
            }
            body={
              <>
                3 assertions in <InlineCode>auth.spec.ts</InlineCode> · click
                for logs.
              </>
            }
            action={{ label: "Re-run" }}
          />
        </div>
      </Demo>
    </Section>
  );
}

function ModalSection() {
  return (
    <Section
      id="modal"
      num="12"
      title="Modal"
      desc="Used sparingly — for confirmation, focused composition, or destructive actions."
    >
      <div class="modal-stage">
        <div class="modal">
          <div class="modal__head">
            <div class="modal__title">Open merge request?</div>
            <p class="modal__sub">
              This will open MR{" "}
              <InlineCode>feat/forge-tokens → main</InlineCode>, request review
              from <strong>maya</strong>, and post to{" "}
              <InlineCode>#eng-platform</InlineCode>.
            </p>
          </div>
          <div class="modal__body">
            <div class="field" style={{ "max-width": "none" }}>
              <label>Title</label>
              <input
                class="input"
                value="feat(design-system): introduce Forge tokens"
              />
            </div>
            <div style={{ height: "12px" }} />
            <div class="field" style={{ "max-width": "none" }}>
              <label>Reviewers</label>
              <Row style="gap: 6px;">
                <span class="badge">
                  <span
                    class="avatar"
                    style={{
                      width: "14px",
                      height: "14px",
                      "font-size": "8px",
                    }}
                  >
                    M
                  </span>
                  maya
                </span>
                <span class="badge">
                  <span
                    class="avatar"
                    style={{
                      width: "14px",
                      height: "14px",
                      "font-size": "8px",
                    }}
                  >
                    J
                  </span>
                  jordan
                </span>
                <Button variant="ghost" size="sm">
                  + Add
                </Button>
              </Row>
            </div>
          </div>
          <div class="modal__foot">
            <Button variant="ghost">
              Cancel <Kbd style={{ "margin-left": "4px" }}>Esc</Kbd>
            </Button>
            <Button variant="primary">
              Open MR <Kbd style={{ "margin-left": "4px" }}>⌘ ⏎</Kbd>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

function NavSection() {
  return (
    <Section
      id="nav"
      num="13"
      title="Navigation"
      desc="Sidebar, breadcrumbs, and tabs. The active sidebar item gets a violet rail and soft tint."
    >
      <Demo tight style="padding: 0;">
        <div
          style={{
            display: "grid",
            "grid-template-columns": "220px 1fr",
            border: "1px solid var(--border)",
            "border-radius": "12px",
            overflow: "hidden",
            "min-height": "280px",
            background: "var(--surface-1)",
          }}
        >
          {/* Sidebar */}
          <div
            style={{
              background: "var(--surface-sunken)",
              "border-right": "1px solid var(--border)",
              padding: "16px",
              display: "flex",
              "flex-direction": "column",
              gap: "8px",
            }}
          >
            <div
              style={{
                display: "flex",
                "align-items": "center",
                gap: "10px",
                padding: "6px 8px",
                "margin-bottom": "12px",
              }}
            >
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  "border-radius": "6px",
                  background: "var(--primary)",
                  display: "grid",
                  "place-items": "center",
                  color: "white",
                  font: "700 11px/1 var(--font-mono)",
                }}
              >
                F
              </div>
              <div style={{ font: "600 13px/1 var(--font-sans)" }}>Forge</div>
            </div>
            {[
              {
                icon: <IconFlow />,
                label: "Overview",
                count: null,
                active: false,
              },
              {
                icon: <IconMR />,
                label: "Merge requests",
                count: "12",
                active: true,
              },
              { icon: <IconBug />, label: "Tasks", count: "5", active: false },
              {
                icon: <IconPlay />,
                label: "Pipelines",
                count: null,
                active: false,
              },
              {
                icon: <IconSlack />,
                label: "Channels",
                count: null,
                active: false,
              },
            ].map((item) => (
              <div class={`nav-item${item.active ? " is-active" : ""}`}>
                {item.icon}
                {item.label}
                {item.count && <span class="count">{item.count}</span>}
              </div>
            ))}
            <div
              style={{
                font: "var(--t-eyebrow)",
                "font-family": "var(--font-mono)",
                color: "var(--text-tertiary)",
                padding: "10px 10px 4px",
                "letter-spacing": "0.08em",
                "text-transform": "uppercase",
              }}
            >
              Workflows
            </div>
            {["Auto-merge on green", "Slack on failure", "AI MR draft"].map(
              (wf) => (
                <div class="nav-item">
                  <IconFlow /> {wf}
                </div>
              ),
            )}
          </div>

          {/* Pane */}
          <div style={{ padding: "20px" }}>
            <div
              class="flex items-center gap-2"
              style={{
                font: "var(--t-body-s)",
                "font-family": "var(--font-sans)",
                color: "var(--text-secondary)",
                "margin-bottom": "16px",
              }}
            >
              <span>Workspace</span>
              <span style={{ color: "var(--text-tertiary)" }}>/</span>
              <span>backend</span>
              <span style={{ color: "var(--text-tertiary)" }}>/</span>
              <span style={{ color: "var(--text-primary)" }}>
                Merge requests
              </span>
            </div>
            <div
              class="flex gap-0.5 border-b border-white/[.07]"
              style={{ "margin-bottom": "16px" }}
            >
              {[
                { label: "Open", count: "12", active: true },
                { label: "Drafts", count: "3", active: false },
                { label: "Awaiting me", count: "3", active: false },
                { label: "Merged this week", count: null, active: false },
              ].map((tab) => (
                <div class={`tab${tab.active ? " is-active" : ""}`}>
                  {tab.label}
                  {tab.count && (
                    <span class="meta-text" style={{ "margin-left": "6px" }}>
                      {tab.count}
                    </span>
                  )}
                </div>
              ))}
            </div>
            <div class="flex items-center gap-2.5">
              <input
                class="input"
                placeholder="Search MRs, branches, authors…"
                style={{ "max-width": "320px" }}
              />
              <Button variant="ghost" size="sm">
                Filter
              </Button>
              <Button variant="ghost" size="sm">
                Sort: Newest
              </Button>
              <span class="meta-text" style={{ "margin-left": "auto" }}>
                Showing 12 of 12
              </span>
            </div>
          </div>
        </div>
      </Demo>
    </Section>
  );
}

function RowsSection() {
  const rows = [
    {
      iconColor: "var(--info)",
      icon: <IconMR />,
      title: "feat(auth): rotate refresh tokens on every issue",
      branch: "feat/rotate-tokens → main",
      author: "maya",
      stats: "+248 −31",
      time: "3h ago",
      status: "running" as const,
      avatars: ["M", "J"],
    },
    {
      iconColor: "var(--warning)",
      icon: <IconMR />,
      title: "refactor(billing): drop legacy invoice path",
      branch: "chore/billing-legacy → main",
      author: "jordan",
      stats: "+12 −418",
      time: "1d ago",
      status: "review" as const,
      avatars: ["YOU"],
    },
    {
      iconColor: "var(--success)",
      icon: <IconCheck />,
      title: "fix(api): handle empty cursor in pagination util",
      branch: "fix/empty-cursor → main",
      author: "priya",
      stats: "+8 −2",
      time: "4h ago",
      status: "merged" as const,
      avatars: ["P"],
    },
    {
      iconColor: "var(--danger)",
      icon: <IconX />,
      title: "feat(search): introduce hybrid ranking",
      branch: "feat/hybrid-ranking → main",
      author: "sam",
      stats: "+612 −104",
      time: "2d ago",
      status: "failed" as const,
      avatars: ["S"],
    },
    {
      iconColor: undefined,
      icon: <IconBug />,
      title: "Investigate flaky workflow-runner.spec.ts",
      branch: "FORGE-204",
      author: "maya",
      stats: "linked to MR #482",
      time: "today",
      status: "draft" as const,
      avatars: ["M"],
    },
  ];

  return (
    <Section
      id="rows"
      num="14"
      title="Task &amp; MR rows"
      desc="The bread and butter of Forge — every list of work uses this row pattern."
    >
      <div class="rows">
        {rows.map((row) => (
          <div class="rows__row">
            <div class="ico" style={{ color: row.iconColor }}>
              {row.icon}
            </div>
            <div>
              <div class="title">{row.title}</div>
              <div class="meta-row">
                <span>
                  <IconBranch
                    class="ic ic-sm"
                    style={{ display: "inline", "vertical-align": "-2px" }}
                  />{" "}
                  {row.branch}
                </span>
                <span class="author">{row.author}</span>
                <span>{row.stats}</span>
                <span>{row.time}</span>
              </div>
            </div>
            <Badge status={row.status}>
              {row.status === "running"
                ? "Running"
                : row.status === "review"
                  ? "Review requested"
                  : row.status === "merged"
                    ? "Merged"
                    : row.status === "failed"
                      ? "Failed"
                      : "In progress"}
            </Badge>
            <div class="flex" style={{ gap: "-4px" }}>
              {row.avatars.map((a, i) => (
                <span
                  class="avatar"
                  style={{ "margin-left": i > 0 ? "-6px" : "0" }}
                >
                  {a}
                </span>
              ))}
            </div>
            <span class="meta-text">{row.time.split(" ")[0]}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

function TablesSection() {
  const rows = [
    {
      suite: "auth",
      path: "apps/api/src/auth",
      status: "passed" as const,
      tests: "48 / 48",
      dur: "2.4s",
      cov: "94.1%",
    },
    {
      suite: "billing",
      path: "apps/api/src/billing",
      status: "passed" as const,
      tests: "112 / 112",
      dur: "7.1s",
      cov: "88.2%",
    },
    {
      suite: "workflows",
      path: "apps/api/src/workflows",
      status: "running" as const,
      tests: "62 / 80",
      dur: "—",
      cov: "—",
    },
    {
      suite: "e2e",
      path: "tests/e2e/auth.spec.ts",
      status: "failed" as const,
      tests: "9 / 12",
      dur: "14.2s",
      cov: "—",
    },
    {
      suite: "ui",
      path: "apps/web/src",
      status: "queued" as const,
      tests: "—",
      dur: "—",
      cov: "—",
    },
  ];
  return (
    <Section
      id="tables"
      num="15"
      title="Tables"
      desc="For dense tabular data — test results, coverage, runs over time. Right-align numbers in mono."
    >
      <Demo tight style="padding: 0;">
        <table class="forge-table">
          <thead>
            <tr>
              <th>Suite</th>
              <th>Status</th>
              <th>Tests</th>
              <th class="right">Duration</th>
              <th class="right">Coverage</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr>
                <td>
                  <strong>{row.suite}</strong> ·{" "}
                  <InlineCode>{row.path}</InlineCode>
                </td>
                <td>
                  <Badge status={row.status}>
                    {row.status.charAt(0).toUpperCase() + row.status.slice(1)}
                  </Badge>
                </td>
                <td>{row.tests}</td>
                <td class="right">{row.dur}</td>
                <td class="right">{row.cov}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Demo>
    </Section>
  );
}

function ProgressSection() {
  return (
    <Section
      id="progress"
      num="16"
      title="Progress &amp; pipelines"
      desc="Linear bars for determinate progress, pipeline strips for CI stage state."
    >
      <Demo>
        <div
          style={{
            display: "grid",
            "grid-template-columns": "1fr 1fr",
            gap: "24px",
          }}
        >
          <Progress
            label="Test run · workflows"
            value={78}
            maxLabel="62 / 80"
            meta="~ 14s remaining"
          />
          <Progress
            label="Coverage"
            value={88.2}
            maxLabel="88.2%"
            meta="Threshold 85% · OK"
            variant="success"
          />
          <Progress
            label="Build · web"
            value={100}
            maxLabel="100%"
            meta="2.1 MB · 38s"
            variant="success"
          />
          <Progress
            label="e2e · auth"
            value={75}
            maxLabel="3 failures"
            meta="9 of 12 passed"
            variant="danger"
            labelRight={
              <span style={{ color: "var(--danger)" }}>3 failures</span>
            }
          />
        </div>

        <Divider />

        <Label>CI pipeline</Label>
        <div class="grid gap-3">
          <Pipeline
            stages={[
              { label: "Install", status: "done" },
              { label: "Lint", status: "done" },
              { label: "Build", status: "done" },
              { label: "Test · 62/80", status: "running" },
              { label: "Deploy", status: "pending", index: 5 },
            ]}
          />
          <Pipeline
            stages={[
              { label: "Install", status: "done" },
              { label: "Lint", status: "done" },
              { label: "Build", status: "done" },
              { label: "Test · 3 failed", status: "failed" },
              { label: "Deploy", status: "pending", index: 5 },
            ]}
          />
        </div>
      </Demo>
    </Section>
  );
}

function TooltipsSection() {
  return (
    <Section
      id="tooltips"
      num="17"
      title="Tooltips &amp; keyboard shortcuts"
      desc="Tooltips for explanation, never for primary content. Pair every common action with a shortcut chip."
    >
      <Demo>
        <div
          class="flex flex-wrap gap-8 items-end"
          style={{ "padding-top": "48px" }}
        >
          <Tooltip content="Re-run failed tests" kbd="⌘ R">
            <Button variant="secondary" iconOnly aria-label="Re-run">
              <IconPlay />
            </Button>
          </Tooltip>
          <Tooltip content="Open MR" kbd="⌘ ⏎">
            <Button variant="primary">
              <IconMR /> Open MR
            </Button>
          </Tooltip>
          <Tooltip content="Post to channel" kbd="⌘ K">
            <Button variant="ghost" iconOnly aria-label="Slack">
              <IconSlack />
            </Button>
          </Tooltip>
        </div>

        <Divider />

        <Label>Shortcut palette</Label>
        <div
          class="flex flex-wrap gap-4"
          style={{
            font: "var(--t-body-s)",
            "font-family": "var(--font-sans)",
            color: "var(--text-secondary)",
          }}
        >
          <div>
            <Kbd>⌘ K</Kbd> &nbsp; Command bar
          </div>
          <div>
            <Kbd>G</Kbd> <Kbd>M</Kbd> &nbsp; Go to Merge requests
          </div>
          <div>
            <Kbd>G</Kbd> <Kbd>T</Kbd> &nbsp; Go to Tasks
          </div>
          <div>
            <Kbd>⌘ ⏎</Kbd> &nbsp; Submit / open MR
          </div>
          <div>
            <Kbd>R</Kbd> &nbsp; Re-run last pipeline
          </div>
          <div>
            <Kbd>⌘ /</Kbd> &nbsp; Toggle keyboard help
          </div>
        </div>
      </Demo>
    </Section>
  );
}

function PrinciplesSection() {
  const principles = [
    {
      title: "Calm by default",
      num: "01",
      body: "Dark canvas, low chroma, soft tints. The interface stays out of the way so the work — code, runs, conversations — is what reads first.",
    },
    {
      title: "Spend neon-ice carefully",
      num: "02",
      body: (
        <>
          Hero accents lose meaning when overused. Reserve{" "}
          <InlineCode>--hero</InlineCode> for one moment per screen — the AI
          suggestion, the live tail, the celebration.
        </>
      ),
    },
    {
      title: "Tea-green = success only",
      num: "03",
      body: "Never a decorative tint, never a brand surface. If it's green, it passed, merged, or was added. Anything else uses violet or wisteria.",
    },
    {
      title: "Mono for the computed",
      num: "04",
      body: "Branches, hashes, paths, identifiers, channel names — anything a machine produced — set in JetBrains Mono. Inter is only for prose written by a human.",
    },
  ];

  return (
    <Section
      id="principles"
      num="18"
      title="Principles"
      desc="Five rules to keep the system honest as it grows."
    >
      <Demo>
        <div
          style={{
            display: "grid",
            "grid-template-columns": "repeat(2, 1fr)",
            gap: "16px",
          }}
        >
          {principles.map((p) => (
            <Card>
              <CardHead>
                <CardTitle>{p.title}</CardTitle>
                <span class="meta-text">{p.num}</span>
              </CardHead>
              <CardSub>{p.body}</CardSub>
            </Card>
          ))}
          <Card class="card" style="grid-column: 1 / -1;">
            <CardHead>
              <CardTitle>Tints over shadows</CardTitle>
              <span class="meta-text">05</span>
            </CardHead>
            <CardSub>
              Elevation in dark UI is communicated by surface lightness, not
              glow. Reserve real shadows for popovers, toasts and modals — the
              things that genuinely float over content.
            </CardSub>
          </Card>
        </div>
      </Demo>
    </Section>
  );
}

// ── TOC ───────────────────────────────────────────────────────────────────────

const tocLinks = [
  {
    group: "Foundations",
    items: [
      { id: "color", label: "Color" },
      { id: "typography", label: "Typography" },
      { id: "spacing", label: "Spacing & layout" },
      { id: "radius", label: "Radius" },
      { id: "elevation", label: "Elevation" },
    ],
  },
  {
    group: "Components",
    items: [
      { id: "buttons", label: "Buttons" },
      { id: "inputs", label: "Form inputs" },
      { id: "cards", label: "Cards & surfaces" },
      { id: "badges", label: "Status badges" },
      { id: "code", label: "Code & diff" },
      { id: "toasts", label: "Toasts" },
      { id: "modal", label: "Modal" },
      { id: "nav", label: "Navigation" },
      { id: "rows", label: "Task / MR rows" },
      { id: "tables", label: "Tables" },
      { id: "progress", label: "Progress & pipelines" },
      { id: "tooltips", label: "Tooltips & shortcuts" },
    ],
  },
  { group: "Principles", items: [{ id: "principles", label: "Principles" }] },
];

// ── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  const [activeSection, setActiveSection] = createSignal("color");

  onMount(() => {
    const sectionIds = tocLinks.flatMap((g) => g.items.map((i) => i.id));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-10% 0px -80% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });

    onCleanup(() => observers.forEach((o) => o.disconnect()));
  });

  return (
    <div class="ds-layout">
      {/* Table of Contents */}
      <aside class="ds-toc">
        <div class="ds-toc__brand">
          <div class="mark">F</div>
          <div>
            <div class="name">Forge</div>
            <div class="ver">design system · v0.1</div>
          </div>
        </div>

        {tocLinks.map((group) => (
          <div class="ds-toc__group">
            <h4>{group.group}</h4>
            {group.items.map((item) => (
              <a
                href={`#${item.id}`}
                class={activeSection() === item.id ? "active" : ""}
              >
                {item.label}
              </a>
            ))}
          </div>
        ))}
      </aside>

      {/* Main content */}
      <main class="ds-main">
        {/* Hero */}
        <header
          style={{
            "margin-bottom": "48px",
            "padding-bottom": "40px",
            "border-bottom": "1px solid var(--divider)",
          }}
        >
          <div class="label" style={{ "margin-bottom": "12px" }}>
            FORGE · v0.1 · DARK-FIRST
          </div>
          <h1
            style={{
              font: "var(--t-display)",
              "font-family": "var(--font-sans)",
              margin: "0 0 12px",
              "letter-spacing": "-0.02em",
            }}
          >
            Tools that feel like the terminal,
            <br />
            <span
              style={{ color: "var(--text-secondary)", "font-weight": "500" }}
            >
              interfaces that don't.
            </span>
          </h1>
          <p
            style={{
              "max-width": "60ch",
              color: "var(--text-secondary)",
              font: "var(--t-body-l)",
              "font-family": "var(--font-sans)",
              margin: 0,
            }}
          >
            Forge is the design system for our programming workflow manager — a
            place to ship MRs, run tests, post to Slack and track work without
            leaving the keyboard. Calm, dense-when-it-matters, and built around
            five core colors.
          </p>
          <div class="flex items-center gap-3" style={{ "margin-top": "24px" }}>
            <div class="accent-strip">
              <span style={{ background: "var(--jet-black)" }} />
              <span style={{ background: "var(--violet-twilight)" }} />
              <span style={{ background: "var(--wisteria-blue)" }} />
              <span style={{ background: "var(--neon-ice)" }} />
              <span style={{ background: "var(--tea-green)" }} />
            </div>
            <span class="meta-text" style={{ "margin-left": "12px" }}>
              5 core · 11-step neutral · 4 semantic
            </span>
          </div>
        </header>

        <ColorSection />
        <TypographySection />
        <SpacingSection />
        <RadiusSection />
        <ElevationSection />
        <ButtonsSection />
        <InputsSection />
        <CardsSection />
        <BadgesSection />
        <CodeSection />
        <ToastsSection />
        <ModalSection />
        <NavSection />
        <RowsSection />
        <TablesSection />
        <ProgressSection />
        <TooltipsSection />
        <PrinciplesSection />

        <footer
          style={{
            "margin-top": "64px",
            "padding-top": "24px",
            "border-top": "1px solid var(--divider)",
            display: "flex",
            "justify-content": "space-between",
            "align-items": "center",
            color: "var(--text-tertiary)",
            font: "var(--t-mono-s)",
            "font-family": "var(--font-mono)",
          }}
        >
          <div>
            FORGE · v0.1 · designed for the programming workflow manager
          </div>
          <div>built with Inter + JetBrains Mono on a 4-px grid</div>
        </footer>
      </main>
    </div>
  );
}
