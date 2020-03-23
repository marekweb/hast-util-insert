const h = require("hastscript");
const insert = require(".");

test("insert an element", () => {
  const tree = h("div", [h(".a"), h(".b")]);
  insert(tree, ".a", h("p", "zamboni"));
  expect(tree).toStrictEqual(h("div", [h(".a", [h("p", "zamboni")]), h(".b")]));
});

test("append an element", () => {
  const tree = h("#root", [h(".a"), h(".b")]);
  insert(tree, "#root", h("p", "zamboni"), "append");
  expect(tree).toStrictEqual(h("#root", [h(".a"), h(".b"), h("p", "zamboni")]));
});

test("prepend an element", () => {
  const tree = h("#root", [h(".a"), h(".b")]);
  insert(tree, "#root", h("p", "zamboni"), "prepend");
  expect(tree).toStrictEqual(h("#root", [h("p", "zamboni"), h(".a"), h(".b")]));
});
