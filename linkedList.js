/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
    let head = null;
    let tail = null;

    function getHead(){
        return head
    }
    
    function getTail(){
        return tail
    }
    
    function add(entry){
        let newNode = {
            value:entry,
            next:null
        }
        if(head === null){
            head = newNode;
            tail = newNode
        }else{
            tail.next = newNode
            tail = newNode
        }
        return tail
    }

    function get(num){
        // console.log(head)
        // console.log(num)
        let currentNode = head;
        let count = 0;
        if(num === 0){
            return head
        }
        while(currentNode){
            currentNode = currentNode.next
            count++
            if(currentNode === null){
                return false
            }
            if(count === num){
                return currentNode
            } 
        }
        
        
    }

    function remove(num){
        // console.log(num)
        // console.log(head)
        let deleteMe = get(num);
        let prevNode = get(num-1);
        let nextNode = get(num+1)
        
        if(deleteMe.next === null){
            prevNode.next = null
           tail = prevNode
        }else if(num === 0){
            head = nextNode
        }else if(deleteMe === false){
            return false
        }
        prevNode.next = nextNode
    }

    function insert(entry,num){
        console.log(num)
        console.log(head)
        let prevNode = get(num-1);
        let next = get(num)
        let newNode = {
            value:entry,
            next:null
        }
        if(num === 0){
            newNode.next=next;
            head = newNode
        }
        else if(next !== false){
            newNode.next = next
            prevNode.next = newNode
        }else if(prevNode === false){
            return false
        }

    }

    return{
        getHead,
        getTail,
        add,
        get,
        remove,
        insert

    }
}