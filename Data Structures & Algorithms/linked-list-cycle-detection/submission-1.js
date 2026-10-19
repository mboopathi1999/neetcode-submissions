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
     * @return {boolean}
     */
    hasCycle(head) {
        let slow = head
        let fast = head?.next
        while(slow && slow.next && fast?.next?.next) {
            if(fast.next === slow) {
                return true
            }
            slow = slow.next
            fast = fast?.next?.next
        }
        if(slow === null || slow.next === null || !fast.next || !fast.next.next) {
            return false
        }
    }
}
