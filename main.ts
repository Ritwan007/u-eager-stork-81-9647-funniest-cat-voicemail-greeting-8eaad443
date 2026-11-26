import { mkdirSync, writeFileSync } from "node:fs";

// Funniest Cat Voicemail Greeting — one line, max 120 characters.
// Chairman Meow: regal attitude, box-vs-bed joke, complete voicemail frame.
const LINE = "Hey, it's Chairman Meow. I'm in the box you bought me a bed for. Talk after the beep, peasant.";

const text = LINE.trim();
if (text.length < 1 || text.length > 120) {
  throw new Error(`entry must be 1-120 characters, got ${text.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
console.log(`Wrote ${text.length} characters to /output/entry.txt`);
