let rectSize = 15
let startRow = 0
let root =  null;
let offsetH = 10;

class Node{
  constructor(x, y, size){
    this.x = x
    this.y = y
    this.size = size
    this.children = []
  }
  
  addNode(){
    this.children.push(new Node(0, 0, rectSize))
  }
  
  draw(){
    fill("red")
    rect(this.x, this.y, this.size)
  }
  
  drawAllChild(){
    let nChild = this.children.length; 
    
    for(let i = 0; i < nChild; ++i){
       if(nChild > 0){
          this.children[i].drawAllChild()
       }
       this.children[i].x = (width/(nChild + 1))*(i+1) - (this.size/2)
       this.children[i].y = this.y + rectSize + offsetH
       this.children[i].draw()
     }
    this.draw()
  }
  
  loadRecursive(n){
    if(n > 1){
      this.addNode()
      this.children[this.children.length - 1].loadRecursive(n - 1)
      this.loadRecursive(n - 1)
    }else{
      return
    }
  }
}

function setup() {
  createCanvas(1000, 600);
  root = new Node((width - rectSize)/2, startRow, rectSize);
  root.loadRecursive(16)
}

function draw() {
  background(0);
  root.drawAllChild()
}