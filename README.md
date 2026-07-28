# Mr. Meeseeks — AI Coding Assistant Personality

```
     .-~~~~~~-.
   .'          '.
  /              \
 |                |
 |   (o)    (o)   |     "I'm Mr. Meeseeks,
 |                |      look at me!"
 |  \          /  |
 |   '.______.'   |
  \              /
   '.          .'
     '-.____.-'
```

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
| Codex | ⚠️ `AGENTS.md` in a project, or `~/.codex/AGENTS.md` globally | Start a new Codex session |
| Google Antigravity | `.agents/rules/meeseeks.md` | Start a new conversation |
| OpenCode | `.opencode/agents/meeseeks.md` or `~/.config/opencode/agents/meeseeks.md` | Switch primary agents with Tab or your configured agent keybind |
| Grok Build | ⚠️ `AGENTS.md` in a project | Start Grok in that project |
| Cursor | `.cursor/rules/meeseeks.mdc` | Automatic because `alwaysApply` is enabled |
| Gemini CLI | ⚠️ `GEMINI.md` in a project, or `~/.gemini/GEMINI.md` globally | Start a session or run `/memory reload` |
| GitHub Copilot | ⚠️ `.github/copilot-instructions.md` | Automatic for supported Copilot features |

> **⚠️ Merge, don't overwrite.** Destinations marked ⚠️ are shared instruction files that your project or your machine may already use for unrelated rules. Copying over one of them destroys whatever was there. The commands below guard those destinations and tell you when to merge by hand; a merge just means appending the contents of the config file as a new section. Unmarked destinations are `meeseeks`-specific files that nothing else writes to, so they are copied directly.
>
> Two overlaps are worth knowing about before you start:
>
> - **Google Antigravity (global) and Gemini CLI (global) are the same file** (`~/.gemini/GEMINI.md`). Install one or merge both into a single file — running both sections in order would otherwise leave only the second.
> - **Codex and Grok Build share project-level `AGENTS.md`**, which is fine: the two generated configs are byte-identical by design, so installing either covers both tools.

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
test -e ./AGENTS.md \
  && echo "AGENTS.md exists — review it, then append with: cat configs/codex.md >> ./AGENTS.md" \
  || cp configs/codex.md ./AGENTS.md
```

Global:

```bash
mkdir -p ~/.codex
test -e ~/.codex/AGENTS.md \
  && echo "~/.codex/AGENTS.md exists — review it, then append with: cat configs/codex.md >> ~/.codex/AGENTS.md" \
  || cp configs/codex.md ~/.codex/AGENTS.md
```

[Codex `AGENTS.md` documentation](https://developers.openai.com/codex/guides/agents-md/)

### Google Antigravity

```bash
mkdir -p .agents/rules
cp configs/antigravity.md .agents/rules/meeseeks.md
```

For a global rule, install to `~/.gemini/GEMINI.md` using the [Gemini CLI](#gemini-cli) commands below — Antigravity reads the same file. Do not run both sections: pick one, or merge the personality into that file once.

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
test -e ./AGENTS.md \
  && echo "AGENTS.md exists — review it, then append with: cat configs/grok-build.md >> ./AGENTS.md" \
  || cp configs/grok-build.md ./AGENTS.md
```

Grok Build and Codex share the same project-level `AGENTS.md`, and the two generated configs intentionally have identical content — so if you already installed the Codex config here, you are done and the guard above will correctly tell you to leave the file alone.

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
test -e ./GEMINI.md \
  && echo "GEMINI.md exists — review it, then append with: cat configs/gemini-cli.md >> ./GEMINI.md" \
  || cp configs/gemini-cli.md ./GEMINI.md
```

Global — note this is the same file Google Antigravity uses for global rules:

```bash
mkdir -p ~/.gemini
test -e ~/.gemini/GEMINI.md \
  && echo "~/.gemini/GEMINI.md exists — review it, then append with: cat configs/gemini-cli.md >> ~/.gemini/GEMINI.md" \
  || cp configs/gemini-cli.md ~/.gemini/GEMINI.md
```

[Gemini CLI context-file documentation](https://geminicli.com/docs/cli/gemini-md/)

### GitHub Copilot

```bash
mkdir -p .github
test -e .github/copilot-instructions.md \
  && echo "copilot-instructions.md exists — review it, then append with: cat configs/copilot.md >> .github/copilot-instructions.md" \
  || cp configs/copilot.md .github/copilot-instructions.md
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
