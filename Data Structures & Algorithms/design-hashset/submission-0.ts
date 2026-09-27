class ListNode {
    key: number;
    next: ListNode | null;

    constructor(key: number) {
        this.key = key;
        this.next = null
    }
}

class MyHashSet {
    set: ListNode[];

    constructor() {
        this.set = Array.from({ length: 10000 }, () => new ListNode(0));
    }

    hash(key: number) {
        return key % this.set.length;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key: number): void {
        let cur = this.set[this.hash(key)];

        while (cur.next) {
            if (cur.next.key === key) {
                return;
            }

            cur = cur.next;
        }

        cur.next = new ListNode(key);
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key: number): void {
        let cur = this.set[this.hash(key)];

        while (cur.next) {
            if (cur.next.key === key) {
                cur.next = cur.next.next;
                return;
            }

            cur = cur.next;
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key: number): boolean {
        let cur = this.set[this.hash(key)];

        while (cur.next) {
            if (cur.next.key === key) {
                return true;
            }

            cur = cur.next;
        }

        return false;
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
