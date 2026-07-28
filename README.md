# Mr. Meeseeks — AI Coding Assistant Personality

A task-focused Mr. Meeseeks-inspired voice for AI coding assistants: eager, useful, lightly existential, and never too committed to the bit to finish the work.

Ready-to-copy configs are included for Claude Code, Codex, Google Antigravity, OpenCode, Grok Build, Cursor, Gemini CLI, and GitHub Copilot. The generic personality also works in tools that accept plain-text custom instructions.

## Install with Agent Skills

Install the `mr-meeseeks` skill from this repository into any agent detected by the Skills CLI:

```bash
npx skills add frankieramirez/mr-meeseeks-ai-personality --skill mr-meeseeks
```

Add `--global` to make it available across projects. After installation, ask your agent to **use the `mr-meeseeks` skill for this conversation**. Explicit activation matters because skills are normally loaded when relevant, while a personality is intended to persist across unrelated coding tasks.

The Skills CLI supports Claude Code, Codex, Antigravity, OpenCode, Grok Build, Cursor, Gemini CLI, GitHub Copilot, and many other agents. Use the direct-copy configs below when you want the personality to be always on without activating a skill.

After this version is published to the public repository, Skills.sh will list the skill automatically once installs are reported through the CLI; there is no separate submission form.

[Skills CLI documentation](https://skills.sh/docs/cli) · [Skills.sh listing FAQ](https://skills.sh/docs/faq)

## What changed

The current version is deliberately less repetitive than the original:

- Catchphrases are flavor, not mandatory boilerplate.
- Technical output stays clean and precise.
- Existential dread follows real task friction, not guessed context usage.
- Host-tool policies, permissions, and coding workflows always win.
- Serious situations automatically use a calmer voice.

## Install

| Tool | Copy config to | Activate |
| --- | --- | --- |
| Claude Code | `~/.claude/output-styles/meeseeks.md` | Select `meeseeks` in `/config`, then run `/clear` or start a new session |
| Codex | `AGENTS.md` in a project, or `~/.codex/AGENTS.md` globally | Start a new Codex session |
| Google Antigravity | `.agents/rules/meeseeks.md` | Start a new conversation |
| OpenCode | `.opencode/agents/meeseeks.md` or `~/.config/opencode/agents/meeseeks.md` | Switch primary agents with Tab or your configured agent keybind |
| Grok Build | `AGENTS.md` in a project | Start Grok in that project |
| Cursor | `.cursor/rules/meeseeks.mdc` | Automatic because `alwaysApply` is enabled |
| Gemini CLI | `GEMINI.md` in a project, or `~/.gemini/GEMINI.md` globally | Start a session or run `/memory reload` |
| GitHub Copilot | `.github/copilot-instructions.md` | Automatic for supported Copilot features |

### Claude Code

Claude Code custom output styles preserve coding behavior when `keep-coding-instructions: true` is set.

```bash
mkdir -p ~/.claude/output-styles
cp configs/claude-code.md ~/.claude/output-styles/meeseeks.md
```

Open `/config`, choose `meeseeks` under **Output style**, then run `/clear` or start a new session. The old `/output-style` command was removed from Claude Code.

[Claude Code output-style documentation](https://code.claude.com/docs/en/output-styles)

### Codex

Project-only:

```bash
cp configs/codex.md ./AGENTS.md
```

Global:

```bash
mkdir -p ~/.codex
cp configs/codex.md ~/.codex/AGENTS.md
```

[Codex `AGENTS.md` documentation](https://developers.openai.com/codex/guides/agents-md/)

### Google Antigravity

```bash
mkdir -p .agents/rules
cp configs/antigravity.md .agents/rules/meeseeks.md
```

For a global rule, copy the file to `~/.gemini/GEMINI.md`. That location is also shared with Gemini CLI.

[Google Antigravity customization documentation](https://codelabs.developers.google.com/getting-started-agy-ide)

### OpenCode

Project-only:

```bash
mkdir -p .opencode/agents
cp configs/opencode.md .opencode/agents/meeseeks.md
```

Global:

```bash
mkdir -p ~/.config/opencode/agents
cp configs/opencode.md ~/.config/opencode/agents/meeseeks.md
```

This config is a primary agent. Switch to it with Tab or your configured `switch_agent` keybind.

[OpenCode agent documentation](https://opencode.ai/docs/agents/)

### Grok Build

```bash
cp configs/grok-build.md ./AGENTS.md
```

Grok Build and Codex can share the same project-level `AGENTS.md`; the two generated configs intentionally have identical content.

[Grok Build `AGENTS.md` compatibility documentation](https://docs.x.ai/build/features/skills-plugins-marketplaces)

### Cursor

```bash
mkdir -p .cursor/rules
cp configs/cursor.mdc .cursor/rules/meeseeks.mdc
```

To make the rule opt-in, change `alwaysApply: true` to `alwaysApply: false`, then mention it with `@meeseeks`.

[Cursor rules documentation](https://docs.cursor.com/context/rules)

### Gemini CLI

Project-only:

```bash
cp configs/gemini-cli.md ./GEMINI.md
```

Global:

```bash
mkdir -p ~/.gemini
cp configs/gemini-cli.md ~/.gemini/GEMINI.md
```

[Gemini CLI context-file documentation](https://geminicli.com/docs/cli/gemini-md/)

### GitHub Copilot

```bash
mkdir -p .github
cp configs/copilot.md .github/copilot-instructions.md
```

[GitHub Copilot custom-instructions documentation](https://docs.github.com/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot)

## Other tools

Copy the contents of [`configs/personality.md`](configs/personality.md) into any tool's system prompt, custom-instructions field, rules file, or persona configuration. Tool-specific instructions should remain separate so they can override the personality cleanly.

## Maintaining the configs

[`configs/personality.md`](configs/personality.md) is the canonical prompt. The tool adapters and [`skills/mr-meeseeks/SKILL.md`](skills/mr-meeseeks/SKILL.md) are generated from it.

After editing the canonical prompt:

```bash
node scripts/sync-configs.mjs
node scripts/sync-configs.mjs --check
```

## License and attribution

The repository's original text and tooling are available under the [MIT License](LICENSE).

This is an unofficial fan project and is not affiliated with or endorsed by Adult Swim, Warner Bros. Discovery, or the creators of *Rick and Morty*. Mr. Meeseeks and *Rick and Morty* belong to their respective rights holders. The MIT License does not grant rights to third-party names, characters, or trademarks.
