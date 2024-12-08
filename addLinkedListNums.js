// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order,
//  and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function addTwoNumbers(l1, l2) {
    const dummy = new ListNode(0);
    let tail = dummy;
    let carry = 0;


    while (l1 !== null || l2 !== null || carry !== 0) {
        const x = l1 ? l1.val : 0;
        const y = l2 ? l2.val : 0;

        const sum = x + y + carry;
        carry = Math.floor(sum / 10); //sets carry value 
        const digit = sum % 10; //sets digit to be inserted into node 

        tail.next = new ListNode(digit); //enters digit into constructor establishing node with value 
        tail = tail.next; //moves tail forward so that it's pointing to the new last node 

        if (l1) l1 = l1.next; //shifts l1 to the next node if pointer is not null
        if (l2) l2 = l2.next; // shifts l2 to the next node if pointer is not null
    }

    return dummy.next;
}