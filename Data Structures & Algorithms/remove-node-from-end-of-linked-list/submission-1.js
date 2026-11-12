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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let length = 0
        let pointer = head
        while(pointer) {
            length++
            pointer = pointer.next
        }
        pointer = head
        let prev = head
        length = length - n
        while(length >= 0) {
            if(length === 0) {
                if(pointer === head) {
                    head = prev.next
                } else {
                    prev.next = pointer.next
                }
            } else {
                prev = pointer
                pointer = pointer.next
            }
            length--
        }
        return head
    }
}
