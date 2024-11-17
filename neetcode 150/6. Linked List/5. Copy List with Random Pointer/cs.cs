/*
public class Node {
    public int val;
    public Node next;
    public Node random;
    
    public Node(int _val) {
        val = _val;
        next = null;
        random = null;
    }
}
*/

public class Solution {
    public Node CopyRandomList(Node head) {
        if (head == null) {
            return null;
        }
        List<Node> nodes = new ();
        Dictionary<Node, int> nodeToIndex = new ();
        Node current = head;
        int index = 0;
        while (current != null) {
            nodes.Add(current);
            nodeToIndex[current] = index;
            index++;
            current = current.next;
        }
        List<Node> newNodes = new();
        foreach (Node node in nodes) {
            newNodes.Add(new Node(node.val));
        }
        for (int i = 0; i < nodes.Count; i++) {
            var node = newNodes[i];
            var nextNode = i == nodes.Count - 1 ? null : newNodes[i + 1];
            node.next = nextNode;
            var oldNode = nodes[i];
            var randomNode = oldNode.random;
            if(randomNode != null) {
                var randomIndex = nodeToIndex[randomNode];
                node.random = newNodes[randomIndex];
            }
        }
        return newNodes[0];
    }
}
