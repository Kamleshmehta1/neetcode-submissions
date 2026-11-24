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

    middleNode(head) {
        let slow = head;
        let fast = head;

        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }

    reverse(head) {
        let curr = head;
        let prev = null;

        while (curr !== null) {
            let next = curr.next;
            curr.next = prev;

            prev = curr;
            curr = next;
        }

        return prev;
    }

    reorderList(head) {
        let middleNode = this.middleNode(head);

        let curr = head;

        if (head === null || head.next === null) return;

        while (curr.next !== middleNode) {
            curr = curr.next;
        }

        curr.next = null;

        const reversedNode = this.reverse(middleNode);

        let left = head;
        let right = reversedNode;

        let dummyNode = new ListNode(-1);
        let tail = dummyNode;

        while (left !== null && right !== null) {
            tail.next = left;

            left = left.next;
            tail = tail.next;

            tail.next = right;

            right = right.next;
            tail = tail.next;
        }

        tail.next = left !== null ? left : right;

        return dummyNode.next;
    }
}
