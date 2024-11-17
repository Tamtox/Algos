/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 * 
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */


class _Node {
  val: number
  next: _Node | null
  random: _Node | null
  constructor(val?: number, next?: _Node, random?: _Node) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
      this.random = (random===undefined ? null : random)
  }
}


function copyRandomList(head: _Node | null): _Node | null {
  const nodes: _Node[] = [];
  const indexMap: Map<_Node, number> = new Map();
  let curr = head;
  let index = 0;
  while(curr) {
    nodes.push(curr);
    indexMap.set(curr, index);
    curr = curr.next;
    index++;
  }
  const newNodes: _Node[] = nodes.map(node => new _Node(node.val));
  for(let i = 0; i < newNodes.length; i++) {
    const newNode = newNodes[i];
    const nextNewNode = newNodes[i + 1];
    const existingNode = nodes[i];
    const existingRandomNode = existingNode.random;
    newNode.next = nextNewNode ? nextNewNode : null;
    if(existingRandomNode) {
      const randomIndex = indexMap.get(existingRandomNode);
      if(randomIndex !== undefined) {
        newNode.random = newNodes[randomIndex];
      }
    }
  }
  return newNodes[0];
};