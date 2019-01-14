/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
    let linked = {};
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
            next:null
        }
        if(head === null){
            head = newNode;
            tail = newNode
        }else{
            tail.next = newNode;
            tail = newNode
        }
        return  tail
    }

    function get(num){
        let count = 0;
        let currentNode = head
      while(currentNode){
          if(num === count){
              return currentNode
          }
          count++
          currentNode = currentNode.next
      }
      return false
        
    }

    function remove(num){
      let prevNode = get(num-1);
      let nextNode = get(num+1)
      let removeMe = get(num)
      let currentNode = head;
      if(num === 0){
          head = nextNode
      }else if(removeMe.next === null){
          prevNode.next = null
      }
      
      prevNode.next=nextNode;
     
      }

    function insert(value,number){

    }
    
    return {
        getHead,
        getTail,
        add,
        remove,
        get,
        insert
    }
}