function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function Tree(){

    this.root = null;
    
    this.buildTree = function(arr) {
        arr = [...new Set(arr)].sort((a,b) => a - b);
        this.root = build(arr,0,arr.length -1);
    }

    function build(arr,left,right) {
        if (left > right)
            return null;
        let mid = Math.floor((left+right) / 2);
        let node = new Node(arr[mid]);
        node.left = build(arr,left,mid-1);
        node.right = build(arr,mid+1,right);
        return node;
    }

    this.insert = function (value){
        this.root = insert(this.root,value);
    }

    function insert(root,value){
        if (!root)
            return new Node(value);
        if (value < root.data)
            root.left = insert(root.left,value);
        else if (value > root.data)
            root.right = insert(root.right,value);
        return root;
    }

    this.print = function(){
        print(this.root);
    }

    this.delete = function(value){
        this.root = deleteNode(this.root,value);
    }



    function deleteNode(root,value) {
        if (!root)
            return null;
        if (value < root.data)
            root.left = deleteNode(root.left,value);
        else if (value > root.data)
            root.right = deleteNode(root.right,value);
        else {
            if (!root.left && !root.right){
                delete root;
                root = null;
            }
            else if (!root.left){
                let temp = root;
                root = root.right;
                delete temp;
            }
            else if (!root.right){
                let temp = root;
                root = root.left;
                delete temp;
            }
            else {
                let temp = root.right;
                while (temp.left)
                    temp = temp.left;
                root.data = temp.data;
                root.right = deleteNode(root.right,temp.data);
            }
        }
        return root;
    }    
    
    function print(root, prefix = "", isLeft = true) {
      if (!root)
        return;
      if (root.right) 
        print(root.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
      console.log(`${prefix}${isLeft ? "└── " : "┌── "}${root.data}`);
      if (root.left)
        print(root.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }

    this.find = function(value){
        return find(this.root,value);
    }
    
    function find(root,value){
          if (!root)
            return null;
        if (value < root.data)
            return find(root.left,value);
        if (value > root.data)
            return find(root.right,value);
        return root;
    }



    this.preOrder = function(callback){
        preOrder(this.root,callback);
    }

    function preOrder(root,callback) {
        if (!root)
            return;
        callback(root.data);
        this.preOrder(root.left);
        this.preOrder(root.right);
    }

    this.inOrder = function(callback){
        inOrder(this.root,callback);
    }

    function inOrder(root,callback) {
        if (!root)
            return;
        this.inOrder(root.left);
        callback(root.data);
        this.inOrder(root.right);
    }

    this.postOrder = function(callback){
        postOrder(this.root,callback);
    }

    function postOrder(root,callback) {
        if (!root)
            return;
        this.postOrder(root.left);
        this.postOrder(root.right);
        callback(root.data);
    }

    this.height = function(node){
        return height(node);
    }

    function height(node){
        if (!node)
            return 0;
        return 1 + Math.max(height(node.left),height(node.right));
    }

    this.depth = function(value){
        return depth(this.root,value);
    }


    function depth(root,value){
        if (!root)
            return 0;
        if (value < root.data)
            return 1 + depth(root.left,value);
        if (value > root.data)
            return 1 + depth(root.right,value);
        return 0;
    }

    this.isBalanced = function(){
        return isBalanced(this.root);
    }

    function isBalanced(root){
        if (!root)
            return true;
        let leftHeight = height(root.left);
        let rightHeight = height(root.right);
        return Math.abs(leftHeight - rightHeight) <= 1 && isBalanced(root.left) && isBalanced(root.right);
    }


    this.rebalance = function(){
        this.root = rebalance(this.root);
    }

    function rebalance(root){
        let arr = [];
        inOrder(root,arr);
        return build(arr,0,arr.length -1);
    }    

}
