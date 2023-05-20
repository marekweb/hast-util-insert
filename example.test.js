import { h } from "hastscript";
import { insert } from "./dist/insert.js";
import { inspect } from "unist-util-inspect";
import assert from "node:assert/strict";

const tree = h("div", [h(".planet", "Jupiter")]);

insert(tree, ".planet", h("b", "inserted bold tag"), "append");

// console.log(inspect(tree));

const output = inspect(tree);

const expectedOutput =
  '\u001b[1melement\u001b[22m<div>\u001b[2m[\u001b[22m\u001b[33m1\u001b[39m\u001b[2m]\u001b[22m\n\u001b[2m│\u001b[22m properties\u001b[2m:\u001b[22m {}\n\u001b[2m└─0\u001b[22m \u001b[1melement\u001b[22m<div>\u001b[2m[\u001b[22m\u001b[33m2\u001b[39m\u001b[2m]\u001b[22m\n    \u001b[2m│\u001b[22m properties\u001b[2m:\u001b[22m {"className":["planet"]}\n    \u001b[2m├─0\u001b[22m \u001b[1mtext\u001b[22m \u001b[32m"Jupiter"\u001b[39m\n    \u001b[2m└─1\u001b[22m \u001b[1melement\u001b[22m<b>\u001b[2m[\u001b[22m\u001b[33m1\u001b[39m\u001b[2m]\u001b[22m\n        \u001b[2m│\u001b[22m properties\u001b[2m:\u001b[22m {}\n        \u001b[2m└─0\u001b[22m \u001b[1mtext\u001b[22m \u001b[32m"inserted bold tag"\u001b[39m';

assert.equal(output, expectedOutput);
