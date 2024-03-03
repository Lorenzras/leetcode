func removeNthFromEnd(head *ListNode, n int) *ListNode {
    res := &ListNode{0, head}

    lead := res
    for i := 0; i <= n; i++ {
        lead = lead.Next

    }

    fmt.Printf("Lead %v", lead)


    cur := res

    

    for lead != nil {
        fmt.Printf("cur %v\n", cur)
        
        cur = cur.Next
        lead = lead.Next
    }

    cur.Next = cur.Next.Next
    return res.Next
}