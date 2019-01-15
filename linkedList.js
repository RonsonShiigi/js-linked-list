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
            value: entry,
            next: null
        }
        if(!head){
            head = newNode;
            tail=newNode
        }
        else{
            tail.next=newNode;
            tail=newNode
        }
        return tail
    }

    function get(num){
        let count = 0;
        let currentNode = head;
        while(currentNode){
            if(num===count){
                return currentNode
            }
            count = count + 1;
            currentNode = currentNode.next

        }
        return false
    }
    
    function remove(num){
        let deleteMe = get(num);
        let prevNode = get(num-1)
        let nextNode = get(num+1)
    //    console.log(head)
        if(num === 0){
            head = nextNode
        }
        else if(head === null){
            return false
        }
        else if(deleteMe === false){
            return false
        }else if(deleteMe.next === null){
            prevNode.next = null;
            tail = prevNode
        }else{
            prevNode.next=nextNode
        }
        
        // console.log(head)
        
        
    }

    function insert(entry,num){
        console.log(head)
        console.log(num)
        let nextNode = get(num);
        let insertAfter = get(num-1);
           
            
         if(num === 0){
            let newNode = {
                value:entry,
                next:nextNode
            }
            head = newNode
            console.log(newNode)
            
        }
        else if(insertAfter === false){
            return false
        }
        else{
            let newNode = {
                value:entry,
                next:nextNode
            }
            insertAfter.next = newNode;
           
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