class Nod {
  constructor(val, next = null, random = null) {
      this.val = val;
      this.next = next;
      this.random = random;
  }
}

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let pointer = head
        const hs = new Map()
        let copy = null
        let prev = null
        while(pointer) {
            const node = new Nod(pointer.val)
            if(!copy) copy = node
            if(prev) {
                prev.next = node
                prev = node
            } else {
                prev = node
            }
            hs.set(pointer,node)
            pointer = pointer.next
        }
        pointer = head
        let copyPointer = copy
        while(pointer) {
            copyPointer.random = hs.get(pointer.random)
            copyPointer = copyPointer.next
            pointer = pointer.next
        }
        return copy
    }
}
