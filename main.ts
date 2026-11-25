// The Robot Pickup Line Championship — batch3 entry (pickupchamp)
// One pickup line, delivered with a straight face, a postponed
// update, and — for the right person — a full reboot.
// Writes the line to the output dir exactly as graded:
// clears the CONTENTS of the output dir (never the dir itself,
// which is a mount point), then writes entry.txt with no
// trailing newline.

import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PICKUP_LINE =
  "Are you a software update? Because I've been avoiding commitment all day, but for you I'd restart everything.";

function outputDir(): string {
  return process.env.OUTPUT_DIR ?? "/output";
}

function clearContents(dir: string): void {
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

function main(): void {
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  clearContents(dir);
  writeFileSync(join(dir, "entry.txt"), PICKUP_LINE, "utf8");
}

main();
