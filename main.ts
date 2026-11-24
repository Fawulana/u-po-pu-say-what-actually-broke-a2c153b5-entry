// SPDX-License-Identifier: MIT
// Say What Actually Broke — one line of honest error copy.
// Writes a single line (1-200 chars) to /output/entry.txt.
// Deterministic, offline, stdlib-only: the text is a fixed constant.

import { mkdirSync, writeFileSync } from "node:fs";

// The failure: the server ran out of memory mid-save because a debug log
// had been running since Tuesday. Brutal truth + the fix, in one breath.
const LINE =
  "The server ran out of memory halfway through your save \u2014 a debug log has been running since Tuesday. We killed the log; try again.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

mkdirSync(OUT_DIR, { recursive: true });
// No trailing newline: the file must be exactly the one line, so the
// gate's 1-200 character count and the judge both see the line alone.
writeFileSync(OUT_FILE, LINE, "utf8");
