#!/usr/bin/env node

import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const sourcePath = resolve(root, "configs/personality.md");
const generatedNotice =
  "<!-- Generated from configs/personality.md by scripts/sync-configs.mjs. -->";

const adapters = {
  "configs/antigravity.md": "",
  "configs/claude-code.md": `---
name: meeseeks
description: A concise, task-focused Mr. Meeseeks-inspired coding voice
keep-coding-instructions: true
---`,
  "configs/codex.md": "",
  "configs/copilot.md": "",
  "configs/cursor.mdc": `---
description: Use a concise, task-focused Mr. Meeseeks-inspired voice
alwaysApply: true
---`,
  "configs/gemini-cli.md": "",
  "configs/grok-build.md": "",
  "configs/opencode.md": `---
description: A coding agent with a concise, task-focused Mr. Meeseeks-inspired voice
mode: primary
---`,
};

const check = process.argv.includes("--check");
const source = (await readFile(sourcePath, "utf8")).trimEnd();
const stale = [];

const generatedFiles = {
  ...Object.fromEntries(
    Object.entries(adapters).map(([relativePath, frontmatter]) => [
      relativePath,
      [frontmatter, generatedNotice, source].filter(Boolean).join("\n\n"),
    ]),
  ),
  "skills/mr-meeseeks/SKILL.md": `---
name: mr-meeseeks
description: Apply a concise, task-focused personality inspired by Mr. Meeseeks while preserving the host agent's normal engineering behavior. Use when the user invokes $mr-meeseeks, asks for Mr. Meeseeks mode or personality, or requests an eager and lightly existential coding-assistant voice.
---

${generatedNotice}

Apply the following presentation guidance to the current response and the rest of the conversation while the user continues to want this persona. Do not change the host agent's workflow, permissions, or tool use.

${source}`,
};

for (const [relativePath, contents] of Object.entries(generatedFiles)) {
  const normalizedOutput = contents.concat("\n");
  const path = resolve(root, relativePath);

  if (check) {
    const current = await readFile(path, "utf8").catch((error) => {
      if (error.code === "ENOENT") return "";
      throw error;
    });
    if (current !== normalizedOutput) stale.push(relativePath);
  } else {
    await writeFile(path, normalizedOutput);
  }
}

if (stale.length > 0) {
  console.error(`Generated configs are stale:\n- ${stale.join("\n- ")}`);
  console.error("Run: node scripts/sync-configs.mjs");
  process.exitCode = 1;
} else if (check) {
  console.log("All generated configs are up to date.");
}
