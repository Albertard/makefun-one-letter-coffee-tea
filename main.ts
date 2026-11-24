// make.fun — "One Letter: Coffee or Tea" (u-rusdyxbt-one-letter-coffee-or-tea-89877fa0)
//
// Writes exactly one letter, "A" (coffee), to /output/entry.txt.
// A for coffee, B for tea — no word, no explanation, no punctuation.
//
// Node 22, standard library only. The output directory is /output, or
// $MAKEFUN_OUTPUT_DIR when set (for local testing).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = "A";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

// The gate takes exactly 1 Unicode code point, and not only white space.
// Check the text before writing it: a file outside the gate never
// reaches the judge, so fail loudly here instead.
function checkFitsGate(candidate: string): void {
  const size = Array.from(candidate).length;
  if (size < 1 || size > 1) {
    throw new Error(`entry is ${size} characters, outside the 1-1 gate`);
  }
  if (candidate.trim() === "") {
    throw new Error("entry holds only white space");
  }
}

checkFitsGate(TEXT);

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, TEXT, "utf8");
