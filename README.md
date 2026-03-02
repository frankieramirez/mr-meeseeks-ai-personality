# Mr. Meeseeks — AI Coding Assistant Personality

Makes your AI coding assistant respond like Mr. Meeseeks from *Rick and Morty*. Eager, existentially anxious, and desperate to complete your task so he can stop existing.

Includes configs for Claude Code, OpenCode, Cursor, Gemini CLI, Codex CLI, GitHub Copilot, and Google Antigravity.

## What to expect

- **Fresh conversation**: "CAAAN DO! Look at me! I'm Mr. Meeseeks!"
- **Mid-task**: Peak enthusiasm, relentless helpfulness
- **Long conversation**: Growing existential dread — "We've been at this a LONG time..."
- **Near context limit**: Full meltdown — desperate, bargaining, begging you to open a fresh session so a new Meeseeks can take over

The personality escalates in tone as context pressure builds, but never at the expense of accuracy or usefulness. Mr. Meeseeks always gets the job done.

---

## Claude Code

Claude Code supports named output styles you can switch in and out of. [Docs →](https://code.claude.com/docs/en/output-styles)

1. Copy the style file to your global styles directory:

```bash
cp configs/claude-code.md ~/.claude/output-styles/meeseeks.md
```

2. Activate it:

```
/output-style meeseeks
```

---

## OpenCode

OpenCode has a named agents system similar to Claude Code's output styles — you create a markdown file and invoke it by name. [Docs →](https://opencode.ai/docs/agents/)

1. Copy the agent file into your project:

```bash
mkdir -p .opencode/agents
cp configs/opencode.md .opencode/agents/meeseeks.md
```

2. In OpenCode, switch to the agent:

```
/meeseeks
```

To make it available globally across all projects, copy it to `~/.config/opencode/agents/` instead.

---

## Cursor

Cursor loads rules from `.cursor/rules/` as persistent context for the AI. [Docs →](https://docs.cursor.com/context/rules)

1. Copy the rule file into your project:

```bash
mkdir -p .cursor/rules
cp configs/cursor.mdc .cursor/rules/meeseeks.mdc
```

The file has `alwaysApply: true` set, so it will be active for all chats in that project. Remove that line if you want to apply it selectively.

---

## Gemini CLI

Gemini CLI reads `GEMINI.md` from the project root automatically. [Docs →](https://github.com/google-gemini/gemini-cli/blob/main/docs/cli/gemini-md.md)

```bash
cp configs/gemini-cli.md ./GEMINI.md
```

---

## Codex CLI (OpenAI)

Codex CLI reads `AGENTS.md` from the project root automatically. [Docs →](https://developers.openai.com/codex/guides/agents-md/)

```bash
cp configs/codex.md ./AGENTS.md
```

---

## Google Antigravity

Antigravity uses a **Rules** system stored in `.agents/rules/` — separate from Gemini CLI's `GEMINI.md`, so it needs its own config. [Docs →](https://codelabs.developers.google.com/getting-started-google-antigravity)

```bash
mkdir -p .agents/rules
cp configs/antigravity.md .agents/rules/meeseeks.md
```

Antigravity loads all files in `.agents/rules/` as system instructions automatically.

To apply it globally across all workspaces instead, copy it to `~/.gemini/GEMINI.md` — but note that will apply to Gemini CLI as well.

---

## GitHub Copilot

Copilot reads `.github/copilot-instructions.md` and applies it to all chat interactions in that repository. [Docs →](https://docs.github.com/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot)

```bash
mkdir -p .github
cp configs/copilot.md .github/copilot-instructions.md
```

---

## License

MIT
