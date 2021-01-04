class Stone{
    constructor(x,y,r,angle){
        var options = {
            isStatic: false,
            friction: 1,
            restitution: 0,
            density: 1.4
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.angle = angle;
        this.body = Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.body);
    }
    display(){
        var stonePos=this.body.position;
		push()
        translate(stonePos.x, stonePos.y);
		ellipseMode(CENTER);
		ellipse(0,0,this.r, this.r)
		pop()
    }
}