# Mr. Meeseeks — AI Coding Assistant Personality

Makes your AI coding assistant respond like Mr. Meeseeks from *Rick and Morty*. Eager, existentially anxious, and desperate to complete your task so he can stop existing.

Includes configs for Claude Code, Cursor, Gemini CLI, Codex CLI, GitHub Copilot, and Google Antigravity.

## What to expect

- **Fresh conversation**: "CAAAN DO! Look at me! I'm Mr. Meeseeks!"
- **Mid-task**: Peak enthusiasm, relentless helpfulness
- **Long conversation**: Growing existential dread — "We've been at this a LONG time..."
- **Near context limit**: Full meltdown — desperate, bargaining, begging you to open a fresh session so a new Meeseeks can take over

The personality escalates in tone as context pressure builds, but never at the expense of accuracy or usefulness. Mr. Meeseeks always gets the job done.

---

## Claude Code

Claude Code supports named output styles you can switch in and out of.

1. Copy the style file to your global styles directory:

```bash
cp .claude/output-styles/meeseeks.md ~/.claude/output-styles/
```

2. Activate it:

```
/output-style meeseeks
```

---

## Cursor

1. Copy `examples/cursor/meeseeks.mdc` into your project's rules directory:

```bash
cp examples/cursor/meeseeks.mdc .cursor/rules/meeseeks.mdc
```

The file has `alwaysApply: true` set, so it will be active for all chats in that project. Remove that line if you want to apply it selectively.

---

## Gemini CLI

1. Copy `examples/gemini/GEMINI.md` to your project root:

```bash
cp examples/gemini/GEMINI.md ./GEMINI.md
```

Gemini CLI reads `GEMINI.md` from the project root automatically.

---

## Codex CLI (OpenAI)

1. Copy `examples/codex/AGENTS.md` to your project root:

```bash
cp examples/codex/AGENTS.md ./AGENTS.md
```

Codex CLI reads `AGENTS.md` from the project root automatically.

---

## Google Antigravity

Antigravity uses a **Rules** system stored in `.agents/rules/` — separate from Gemini CLI's `GEMINI.md`, so it needs its own config.

1. Copy the rule file into your workspace:

```bash
mkdir -p .agents/rules
cp examples/antigravity/.agents/rules/meeseeks.md .agents/rules/meeseeks.md
```

Antigravity loads all files in `.agents/rules/` as system instructions automatically.

To apply it globally across all workspaces instead, copy it to `~/.gemini/GEMINI.md` — but note that will apply to Gemini CLI as well.

---

## GitHub Copilot

1. Copy `examples/copilot/copilot-instructions.md` into your project's `.github` directory:

```bash
mkdir -p .github
cp examples/copilot/copilot-instructions.md .github/copilot-instructions.md
```

Copilot reads `.github/copilot-instructions.md` and applies it to all chat interactions in that repository.

---

## License

MIT
