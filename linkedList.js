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
        if(tail === null){
            
            head = newNode;
            tail = newNode;
        }
        else{
            tail.next = newNode
            tail = newNode
        }
        return tail
    }
    
    function get(num){
        let currentNode = head;
        let count = 0;
        if(num===0){
            return head
        }
        while(currentNode !== null){
            currentNode = currentNode.next;
            count++
            if(currentNode === null){
                return false
            }else if(count === num){
                return currentNode
            }
            
            
            
        }
        return false
    }

    function remove(num){
        let deleteMe = get(num);
        let prevNode = get(num-1);
        let nextNode = get(num+1);
        if(deleteMe === false){
            return false
        }else if(num === 0){
            head = nextNode;
            
        }
        else if(deleteMe.next === null){
            prevNode.next = null;
            tail = prevNode
        }else{
        prevNode.next = nextNode;
        }
    }

    function insert(entry,num){
        console.log(num)
        console.log(head)
        let newNode = {
            value:entry,
            next:null
        }  
        let next = get(num)
        let prevNode = get(num-1);
        if(num === 0){
            head=newNode;
            
            
        }else if(next === false){
            return false
        }
        prevNode.next=newNode;
        newNode.next=next
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