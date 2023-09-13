function Node(value) {
    return {
        value,
        next: null
    }
}

function linkedList(){
    let head = null;
    let tail = null;
    let length = 0;
    const append = (value) => {
        if (head === null){
            head = Node(value);
            tail = head;
        }
        else {
            tail.next = Node(value);
            tail = tail.next;
        }
        length++;
    }

    const prepend = (value) => {
        if (head === null){
            head = Node(value);
            tail = head;
        }
        else {
            let temp = Node(value);
            temp.next = head;
            head = temp;
        }
        length++;
    }

    const size = () => length;

    const front = () => (head === null) ? null : head.value;

    const back = () => (tail === null) ? null : tail.value;

    const at = (index) => {
        if (index >= length || index < 0)
            return null;
        let temp = head;
        while (index > 0){
            temp = temp.next;
            index--;
        }
        return temp.value;
    } 

    const pop = () => {
        if (head === null)
            return null;
        let temp = head;
        while (temp.next !== tail)
            temp = temp.next;
        let val = tail.value;
        tail = temp;
        tail.next = null;
        length--;
        return val;
    }

    const contains = (value) => {
        let temp = head;
        while (temp !== null){
            if (temp.value === value)
                return true;
            temp = temp.next;
        }
        return false;
    }

    const find = (value) => {
        let temp = head;
        let idx = 0;
        while (temp !== null){
            if (temp.value === value)
                return idx;
            temp = temp.next;
            idx++;
        }
        return null;
    }

    const insertAt = (index,value) => {
        if (index > length || index < 0)
            return null;
        if (index === 0){
            prepend(value);
            return;
        }
        if (index === length){
            append(value);
            return;
        }
        let temp = head;
        while (index > 1){
            temp = temp.next;
            index--;
        }
        let node = Node(value);
        node.next = temp.next;
        temp.next = node;
        length++;
    }

    const removeAt = (index) => {
        if (index >= length || index < 0)
            return null;
        if (index === 0){
            let val = head.value;
            head = head.next;
            length--;
            return val;
        }
        let temp = head;
        while (index > 1){
            temp = temp.next;
            index--;
        }
        let val = temp.next.value;
        temp.next = temp.next.next;
        length--;
        return val;
    }

    
    const toString = () => {
        let temp = head;
        let str = "";
        while (temp !== null){
            str += temp.value;
            str += " -> ";
            temp = temp.next;
        }
        str += "null";
        return str;
    }

    return {
        append,
        prepend,
        size,
        front,
        back,
        at,
        pop,
        contains,
        find,
        insertAt,
        removeAt,
        toString
    }

}


const list = linkedList();

list.append(1);
list.append(2);
list.prepend(0);
list.insertAt(2,5);
console.log(list.toString());
console.log(list.size());
list.pop();
console.log(list.toString());
console.log(list.front());
console.log(list.back());
console.log(list.at(1));
console.log(list.contains(50));
console.log(list.find(5));
list.removeAt(1);
console.log(list.toString());