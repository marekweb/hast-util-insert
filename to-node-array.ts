import { Content, ElementContent, Root, Text } from "hast";

type HastNode = Root | Content;

/**
 * Wrap into a node list.
 *
 * Allowed values:
 * - string: wrap it in a text node
 * - node: wrap it in an array as [node]
 * - root: extract the children
 * - array: keep it as-is (assuming it's an array of nodes)
 */
export function toNodeArray(
  input: string | Root | Content | Content[],
): ElementContent[] {
  if (typeof input === "string") {
    return [{ type: "text", value: input }];
  } else if (Array.isArray(input)) {
    return getElementContent(input);
  } else if (!input) {
    return [];
  } else if (isRoot(input)) {
    input;
    const children = input.children;
    return getElementContentFromRoot(input);
  }
  return getElementContent([input]);
}

function isRoot(node: HastNode): node is Root {
  return node.type === "root";
}

function getElementContentFromRoot(root: Root): ElementContent[] {
  return getElementContent(root.children);
}

function getElementContent(content: Content[]): ElementContent[] {
  return content.filter(isElementContent);
}

function isElementContent(content: Content): content is ElementContent {
  return (
    content.type === "element" ||
    content.type === "text" ||
    content.type === "comment"
  );
}
