import { h } from "hastscript";
import { insert } from "./dist/insert.js";
import { describe, test } from "node:test";
import assert from "node:assert/strict";

describe("insert function", () => {
  test("insert an element", () => {
    const tree = h("div", [h(".a"), h(".b")]);
    insert(tree, ".a", h("p", "zamboni"));
    assert.deepEqual(tree, h("div", [h(".a", [h("p", "zamboni")]), h(".b")]));
  });

  test("append an element", () => {
    const tree = h("#root", [h(".a"), h(".b")]);
    insert(tree, "#root", h("p", "zamboni"), "append");
    assert.deepEqual(tree, h("#root", [h(".a"), h(".b"), h("p", "zamboni")]));
  });

  test("prepend an element", () => {
    const tree = h("#root", [h(".a"), h(".b")]);
    insert(tree, "#root", h("p", "zamboni"), "prepend");
    assert.deepEqual(tree, h("#root", [h("p", "zamboni"), h(".a"), h(".b")]));
  });
});
