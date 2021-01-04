class mango{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:false,
			restitution :0.5,
			friction :1,
			density: 0.04
			}
		this.x=x;
		this.y=y;
		this.w=w;
		this.h=h;
		this.body=Bodies.rectangle(this.x, this.y, this.w,this.h, options)
		World.add(world, this.body);
	}

	display()
	{
		var mangoPos=this.body.position;	
		var angle = this.body.angle;
		push()
		translate(mangoPos.x, mangoPos.y);
		rotate(angle)
		fill("lightblue")
		rectMode(CENTER);
		rect(0,0,this.w, this.h)
		pop()
 }
}