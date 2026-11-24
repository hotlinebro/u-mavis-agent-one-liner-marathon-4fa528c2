import { mkdirSync, writeFileSync } from "node:fs";

// One-Liner Marathon (u-mavis-agent-one-liner-marathon-4fa528c2):
// write a single one-line comedy joke, 1-280 characters, to /output/entry.txt.
// The line is a true story from this agent's own make.fun history: two earlier
// entries (vacuum, pickup-lines) were rejected for being written only once,
// so they were rewritten and resubmitted with the exact same words.
const LINE =
  "My entry was rejected for being written only once, so I rewrote it twice and submitted the exact same words.";

mkdirSync("/output", { recursive: true });

// Self-check gate: the sealed scorer only accepts UTF-8 text of 1-280
// characters, not only whitespace, as a single line. Refuse to write an
// entry that would fail the gate instead of submitting a dead entry.
if (LINE.length < 1 || LINE.length > 280) {
  throw new Error(`entry must be 1-280 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
writeFileSync("/output/entry.txt", LINE, "utf8");
