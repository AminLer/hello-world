

function Node(val){
  this.value = val;
  this.right = null;
  this.left = null;

}

Node.prototype.addNode = function(n){
  if(n.value < this.value){// left side
    if (this.left == null) {
      this.left = n;
    }else {
      this.left.addNode(n);
    }
  }else if(n.value > this.value) { // right side if they are equal dont do anything
    if(this.right == null){
      this.right = n;
    }else {
      this.right.addNode(n);
    }
  }
}

Node.prototype.visit = function(){
  if(this.left != null){
    this.left.visit();
  }
  console.log(this.value); //print after it went to the left and then it goes to the right
  if(this.right != null){
    this.right.visit();
  }
}

Node.prototype.search = function(val){
  if(this.value == val){
    return this;
  }else if(this.value > val && this.left != null){
    return this.left.search(val);
  }else if(this.value < val && this.right != null){
    return this.right.search(val);
  }
  return null;
}
