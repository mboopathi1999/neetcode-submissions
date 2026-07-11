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
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null
        let curr = head
        let next = null
        if(head === null) {
            return head
        }
        while(curr.next) {
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        curr.next = prev
        head = curr
        return head
    }
}
