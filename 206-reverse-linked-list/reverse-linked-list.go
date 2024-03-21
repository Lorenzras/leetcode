/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func reverseList(head *ListNode) *ListNode {
    var prev, current, nextNode *ListNode
    current = head

    for current != nil {
        nextNode = current.Next // Save the next node
        current.Next = prev // Reverse the link
        prev = current // Move pointers to one position ahead
        current = nextNode
    }

    // prev now points to the new head of the reversed list
    return prev
}