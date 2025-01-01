/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Next *Node
 *     Random *Node
 * }
 */

 func copyRandomList(head *Node) *Node {
    nodes:=make([]*Node,0)
		indexes:=make(map[*Node]int)
		current:=head
		for current!=nil{
			nodes=append(nodes,current)
			indexes[current]=len(nodes)-1
			current=current.Next
		}
		newNodes:=make([]*Node,len(nodes))
		for i:=0;i<len(nodes);i++{
			newNodes[i]=&Node{Val:nodes[i].Val}
		}
		for i:=0;i<len(nodes);i++{
			if i==len(nodes)-1{
				newNodes[i].Next=nil
			}else{
				newNodes[i].Next=newNodes[i+1]
			}
			if nodes[i].Random==nil{
				newNodes[i].Random=nil
			}else{
				newNodes[i].Random=newNodes[indexes[nodes[i].Random]]
			}
		}
		return newNodes[0]
}
	