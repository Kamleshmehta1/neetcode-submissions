// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */


    copyRandomList(head) {
        let map = new Map();

        let curr = head;

        while (curr !== null) {
            map.set(curr, new ListNode(curr.val));
            curr = curr.next;
        }

        let dummyNode = new ListNode(-1);
        let tail = dummyNode;

        curr = head;

        while (curr !== null) {
            const copyNode = map.get(curr);
            copyNode.random = map.get(curr.random) || null;

            tail.next = copyNode;
            tail = tail.next;

            curr = curr.next;
        }

        return dummyNode.next;
    }
}
