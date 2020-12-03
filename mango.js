class mango
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0,
			friction:1,
			
			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("Images/mango.png");
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var mangopos=this.body.position;		

			push()
			translate(mangopos.x, mangopos.y);
			rotate(this.body.angle) 
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r*2, this.r*2)
			//ellipse(0,0,this.r, this.r);
			pop()
			
	}

}