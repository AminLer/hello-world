

function Tree(){

  this.root = null;
}

Tree.prototype.addValue = function (val) {
    var n = new Node(val);
    if(this.root == null){
      this.root = n;
      this.root.x = width/2; // starting position
      this.root.y = 40;
    }else {
      this.root.addNode(n);
    }
}

Tree.prototype.traves = function(){
  this.root.visit(this.root);
}

Tree.prototype.search = function(val){
  var found = this.root.search(val);
  return found;
}
