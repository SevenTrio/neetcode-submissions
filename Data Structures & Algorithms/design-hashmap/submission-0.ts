class ListNode {
    key: number;
    next: ListNode | null;
    value: number;

    constructor(key: number, value: number) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class MyHashMap {
    map: ListNode[];

    constructor() {
        this.map = Array.from({ length: 10000 }, () => new ListNode(0, 0))
    }

    hash(key: number) {
        return key % this.map.length;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        let cur = this.map[this.hash(key)];

        while (cur.next) {
            if (cur.next.key === key) {
                cur.next.value = value;
                return;
            }

            cur = cur.next;
        }

        cur.next = new ListNode(key, value)
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        let cur = this.map[this.hash(key)];

        while (cur.next) {
            if (cur.next.key === key) {
                return cur.next.value;
            }

            cur = cur.next;
        }

        return -1;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key: number): void {
        let cur = this.map[this.hash(key)];

        while (cur.next) {
            if (cur.next.key === key) {
                cur.next = cur.next.next;
                return;
            }

            cur = cur.next;
        }
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
