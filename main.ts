// The 3AM Commit Message — make.fun entry
// Writes one original commit-message line to /output/entry.txt.
// Deterministic: no randomness, no network, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "fix: it works now and I have no idea why, do not touch it, do not ask, it is 3am and my own code scares me";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
