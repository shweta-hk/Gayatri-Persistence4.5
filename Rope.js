class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.2,
            length:800
     
        }
       this.pointB=pointB;
       this.bodyA=bodyA;
       this.rope=Constraint.create(options);
       World.add(world,this.rope);
        
    }

      // function to reduce constraint length to move the boy up
      reduceLength()
      {
          
          this.rope.length = this.rope.length -30;
          console.log(this.rope.length)
  
          if(this.rope.length<30 ){
              console.log(this.rope.length);
            gameState ="finish"
            console.log(gameState);
          }
  
      }
  
      // function to reduce constraint length to move the boy down
      increaseLength()
      {
          console.log(this.rope.length)
          if(this.rope.length<780 ){
          this.rope.length = this.rope.length + 30;
          }
      }

    fly(){
        this.rope.bodyA=null;
    }
 
    display(){
        if(this.rope.bodyA){
           var pointA=this.rope.bodyA.position
           var pointB=this.pointB
 
        push()
        //stroke("white");
        //strokeWeight(1);
       // line (pointB.x,pointB.y,pointA.x,pointA.y);
        pop();
    }
}
    
}