/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function linkedListToArray(head: ListNode) {
    const arr = [];
    let curr = head;

    while (curr !== null) {
        arr.push(curr.val);
        curr = curr.next;
    }

    return arr;
}

function arrayToLinkedList(arr: number[]): ListNode | null {
    let head: ListNode | null = null;

    for (let i = arr.length - 1; i >= 0; i--) {
        head = new ListNode(arr[i], head);
    }

    return head;
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const numL1 = BigInt(linkedListToArray(l1).reverse().join(""));
    const numL2 = BigInt(linkedListToArray(l2).reverse().join(""));

    const sum = (numL1 + numL2);

    return arrayToLinkedList(String((numL1 + numL2).toLocaleString('fullwide', { useGrouping: false })).split("").map(item => Number(item)).reverse());
};
