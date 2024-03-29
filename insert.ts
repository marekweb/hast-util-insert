import { select as hastUtilSelect } from "hast-util-select";
import { Content, Root, Element } from "hast";
import { toNodeArray } from "./to-node-array.js";

export type Action = "insert" | "append" | "prepend";
export type Insertable = string | Root | Content | Content[];
export type InsertableOrFunction = Insertable | ((node: Element) => Insertable);
export type Tree = Root | Content;

/**
 * Insert nodes into a tree.
 */
export function insert(
  tree: Tree,
  selector: string,
  nodes: InsertableOrFunction,
  action: Action = "insert",
) {
  const foundNode = hastUtilSelect(selector, tree);
  let n = nodes;
  if (foundNode) {
    if (typeof n === "function") {
      n = n.call(tree, foundNode);
    }
    const nodeArray = toNodeArray(n);
    if (action === "append") {
      foundNode.children = foundNode.children.concat(nodeArray);
    } else if (action === "prepend") {
      foundNode.children = nodeArray.concat(foundNode.children);
    } else if (action === "insert") {
      // replace the children with a (shallow) clone of the nodes to insert.
      foundNode.children = nodeArray.slice();
    } else {
      throw new Error(`hast-util-insert: Unknown action "${action}"`);
    }
  }
  return foundNode;
}
