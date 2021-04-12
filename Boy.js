
class Boy 
{
    constructor(x,y)
    {
        var options = {
      'restitution':1,
      'friction':0,
      'density':0.8
        }
   this.body = Bodies.rectangle(x,y,50,80,options);
   this.width=50;
   this.height=80;
   World.add(world,this.body);
    }

display()
    {  
    fill("red");
    rect(this.body.position.x,this.body.position.y,this.width,this.height);

    }
}