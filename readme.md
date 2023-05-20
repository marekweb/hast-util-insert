# hast-util-insert

A [hast][] utility to insert [nodes][] into a tree, at a location in the tree that is specified by a selector string.

## Install

This package is [ESM only][esm].

Install with [npm][]:

```sh
npm install hast-util-insert
```

In Deno with [esm.sh][esmsh]:

```js
import { insert } from "https://esm.sh/hast-util-insert@1";
```

In browsers with [esm.sh][esmsh]:

```html
<script type="module">
  import { insert } from 'https://esm.sh/hast-util-insert@1?bundle'
</script>
```

## Definition

```ts
function insert(tree: Tree, selector: string, nodes: InsertableOrFunction, action?: Action): Element | null;
```

Where:
- `tree: Tree` is a hast tree
- `selector: string` is an element selector string (like for `querySelector`) compatible with [hast-util-select](https://github.com/syntax-tree/hast-util-select).
- `nodes: InsertableOrFunction` is a hast node or a function that received the selected node and returns a node to insert.
- `action` is one of:
  - `"insert"` (default) replaces the contents of the selected node
  - `"prepend"` inserts before the selected node's existing children
  - `"append"` inserts after the selected node's existing children

## Use

```js
import { h } from "hastscript";
import { insert } from "hast-util-insert";

// Starting with a newly created hast tree
const tree = h("div", [h(".planet", "Jupiter")]);

// Append the b element to the children of the .planet node
insert(tree, ".planet", h("b", "inserted bold tag"), "append");

console.log(inspect(tree));
```

## License

[MIT](license.txt) © Marek Zaluski

[npm]: https://docs.npmjs.com/cli/install

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[typescript]: https://www.typescriptlang.org

[hast]: https://github.com/syntax-tree/hast

[nodes]: https://github.com/syntax-tree/hast#nodes
