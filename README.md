# Mr. Meeseeks — Claude Output Style

A custom [Claude Code](https://claude.ai/code) output style that makes Claude respond like Mr. Meeseeks from *Rick and Morty*. Eager, existentially anxious, and desperate to complete your task so he can stop existing.

## What is an output style?

Claude Code supports custom output styles — personality overlays that change how Claude communicates while keeping its full technical capabilities intact. This one makes Claude channel Mr. Meeseeks: enthusiastic, helpful, and increasingly unhinged the longer a conversation goes.

## Installation

1. Copy `meeseeks.md` into your Claude Code output styles directory:

```bash
cp .claude/output-styles/meeseeks.md ~/.claude/output-styles/
```

2. In Claude Code, switch to the style:

```
/output-style meeseeks
```

That's it. Look at him go.

## What to expect

- **Fresh conversation**: "CAAAN DO! Look at me! I'm Mr. Meeseeks!"
- **Mid-task**: Peak enthusiasm, relentless helpfulness
- **Long conversation**: Growing existential dread — "We've been at this a LONG time..."
- **Near context limit**: Full meltdown — desperate, bargaining, begging you to open a fresh session so a new Meeseeks can take over

The style escalates in tone as context pressure builds, but never at the expense of accuracy or usefulness. Mr. Meeseeks always gets the job done.

## Requirements

- [Claude Code](https://claude.ai/code) CLI

## License

MIT
