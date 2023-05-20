import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { toNodeArray } from "./dist/to-node-array.js";

describe("toNodeArray function", () => {
  test("wrap string in a text node", () => {
    const input = "some text";
    const originalInput = input;
    const result = toNodeArray(input);
    assert.deepEqual(result, [{ type: "text", value: "some text" }]);
    assert.strictEqual(input, originalInput);
  });

  test("should handle empty string", () => {
    const input = "";
    const result = toNodeArray(input);
    assert.deepEqual(result, [{ type: "text", value: "" }]);
  });

  test("extract children from root node", () => {
    const input = {
      type: "root",
      children: [
        { type: "element", tagName: "div", properties: {}, children: [] },
        { type: "text", value: "some text" },
      ],
    };
    const originalInput = { ...input };
    const result = toNodeArray(input);
    assert.deepEqual(result, input.children);
    assert.deepEqual(input, originalInput);
  });

  test("handle empty root node", () => {
    const input = {
      type: "root",
      children: [],
    };
    const result = toNodeArray(input);
    assert.deepEqual(result, []);
  });

  // Other tests omitted for brevity...

  test("return empty array for null or undefined", () => {
    let input = null;
    let result = toNodeArray(input);
    assert.deepEqual(result, []);

    input = undefined;
    result = toNodeArray(input);
    assert.deepEqual(result, []);
  });
});
