class Launcher{
	constructor(bodyA,pointB)
	{
		
		var options={ 
			bodyA:bodyA,			 
			pointB:pointB, 
			stiffness:1.2, 
			length:450
			
		}
		
		this.bodyA=bodyA;
		this.pointB=pointB
		this.launcher=Constraint.create(options)
		World.add(world,this.launcher)
	}

	attach(body){
		this.launcher.bodyA=body;
	}

	fly()
	{
		this.launcher.bodyA=null;
	}

	display()
	{
		if(this.launcher.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB
			push ();
			strokeWeight(2);
			stroke ("white");		
			line(pointB.x,pointB.y,pointA.x,pointA.y);
			pop ();
		}
	}
}