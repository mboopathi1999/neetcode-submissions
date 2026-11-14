
//   class ListNode {
//       constructor(val = 0, next = null) {
//           this.val = val;
//           this.next = next;
//       }
//   }

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let n1 = ''
        let n2 = ''
        while(l1) {
            n1 = n1.concat(l1.val)
            l1 = l1.next
        }
        while(l2) {
            n2 = n2.concat(l2.val)
            l2 = l2.next
        }
        n1 = BigInt([...n1].reverse().join(''))
        n2 = BigInt([...n2].reverse().join(''))
        let sum = n1+n2
        let list = null
        let curr = null
        if(sum === 0n) {
            list = new ListNode(0)
            return list
        }
        while(sum > 0) {
            const rem = sum%10n
            const node = new ListNode(rem)
            if(!list) {
                list = node
                curr = node
            } else {
                curr.next = node
                curr = curr.next
            }
            sum = (sum/10n)
        }
        return list
    }
}
