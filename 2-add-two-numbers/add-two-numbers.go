/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	s1 := big.NewInt(0)
	s2 := big.NewInt(0)
	mul := big.NewInt(1)
    ten := big.NewInt(10)

	endCount := 0

	for {
		endCount = 0

		if l1 != nil {
            val := big.NewInt(int64(l1.Val))
			s1 = new(big.Int).Add(s1, new(big.Int).Mul(val, mul))
			l1 = l1.Next

		} else {
			endCount++
		}

		if l2 != nil {
            val := big.NewInt(int64(l2.Val))
            s2 = new(big.Int).Add(s2, new(big.Int).Mul(val, mul))
			l2 = l2.Next
		} else {
			endCount++
		}

		if endCount == 2 {
			break
		}

		mul.Mul(mul, ten)
	}

	sum := new(big.Int).Add(s1, s2)

	remainder := new(big.Int).Mod(sum, ten)
	head := &ListNode{Val: int(remainder.Int64())}
	curr := head

	sum.Sub(sum, remainder)
	sum.Div(sum, big.NewInt(10))

	for {
		if sum.Cmp(big.NewInt(0)) == 0 {
			break
		}
		remainder := new(big.Int).Mod(sum, ten)
		curr.Next = &ListNode{Val: int(remainder.Int64())}
		curr = curr.Next

		sum.Sub(sum, remainder)
	    sum.Div(sum, big.NewInt(10))

	}

	return head
}