/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let slow = head
        let fast = head
        if(slow.next === null || slow.next.next === null) return
        while(fast && fast.next) {
            slow = slow.next
            fast = fast.next.next
        }
        console.log(slow.val)
        let reverse = slow.next
        let curr = reverse.next
        reverse.next = null
        slow.next = null
        while(curr) {
            let temp = curr.next
            curr.next = reverse
            reverse = curr
            curr = temp
        }

        let first = head
        let second = reverse
        while(first && second) {
            let temp1 = first.next
            let temp2 = second.next
            first.next = second
            second.next = temp1
            first = temp1
            second = temp2
        }
    }
}


