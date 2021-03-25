class Rubber{
    constructor(x,y){
    var options={
        'restitution':0.3,
    'friction':5.0,
    'density':1
    }
    this.body=Bodies.circle(x,y,50,options)
    this.r=50
    
    World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
       
        var angle=this.body.angle;
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        ellipseMode(CENTER)
        fill("yellow")
    ellipse(0,0,this.r,this.r)
    pop();
    }
    
    
    
    }