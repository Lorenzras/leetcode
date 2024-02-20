/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
import (
    "fmt"
)

func deleteDuplicates(head *ListNode) *ListNode {
    for node := head; node != nil; node = node.Next {
        fmt.Println(node.Val)
        nextNode := node.Next;
        if(nextNode != nil) {
            fmt.Println("next %d", nextNode.Val)

        }
        for node.Next != nil && node.Val == node.Next.Val {
            
            node.Next = node.Next.Next
        }
    }

    return head
}