// The Best Meal You Ever Had (pangg7) — gate 1-200 chars, one sentence only.
// The entry is a single sentence, nothing else. The reasoning lives in these
// comments and the PREPPED doc, NOT in entry.txt.
// Board check this session (2785 submissions, 2026-11-27 ~12:05 CST): the
// first draft (gas-station burrito at 2am) COLLIDED — two real entries are
// already 2 a.m. gas-station burritos, and the board is flooded with
// gas-station-at-2am and grandma's-rendang entries. So the hook was swapped
// to the same structure with a fresh premise: a specific place nobody on the
// board used (a laundromat vending machine, 0 hits in 2785 titles and in the
// 100 most recent entry texts) + a specific food (a lukewarm empanada, 0
// hits) + a surprising contrast (eaten in Paris since, still thinks about
// the empanada). Two beats, short close — per winner-study.md: concrete
// object, personal, worth remembering. No grandma, no wonton, no burrito.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "A lukewarm empanada from the laundromat vending machine at midnight, and I have eaten in Paris since, but I still think about that empanada.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(line);
console.log(`chars: ${[...line].length}`);
