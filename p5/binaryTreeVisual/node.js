

function Node(val, x, y){
  this.value = val;
  this.right = null;
  this.left = null;
  this.x = x;
  this.y = y;
}

Node.prototype.addNode = function(n){
  if(n.value < this.value){// left side
    if (this.left == null) {
      this.left = n;
      this.left.x = this.x - 50;
      this.left.y = this.y + 40;
    }else {
      this.left.addNode(n);
    }

  }else if(n.value > this.value) { // right side if they are equal dont do anything
    if(this.right == null){
      this.right = n;
      this.right.x = this.x + 50;
      this.right.y = this.y + 40;
    }else {
      this.right.addNode(n);
    }

  }
}

Node.prototype.visit = function(parent){
  if(this.left != null){
    this.left.visit(this);
  }
  console.log(this.value); //print after it went to the left and then it goes to the right
  this.showNode(this.x, this.y);

  line(parent.x+10, parent.y+5, this.x+10, this.y-20); //draw a line to connect them
  if(this.right != null){
    this.right.visit(this);
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

Node.prototype.showNode = function(x, y){
  fill(255);
  textAlign(CENTER);
  text(this.value, x, y);
  noFill();
  ellipse(x, y-5, 20, 20);

}
