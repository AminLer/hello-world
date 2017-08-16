var tree;

function setup() {
  createCanvas(600, 400);
  background(51);
  tree = new Tree();
  // tree.addValue(5);
  // tree.addValue(3);
  // tree.addValue(4);
  // tree.addValue(7);

  for(var i =0; i < 10; i++){
    tree.addValue(floor(random(0, 100)));
  }

  console.log(tree);
  tree.traves();
  console.log(tree.search(10));
}

function draw() {


}
