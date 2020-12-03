class tree
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.treeWidth=450;
		this.treeHeight=600;
		this.wallThickness=10;
		
		this.image=loadImage("Images/tree.png")
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.treeWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(0, this.y-this.treeHeight/2, this.wallThickness, this.treeHeight, {isStatic:false})
		
		

		this.rightWallBody=Bodies.rectangle(this.x+this.treeWidth/2, this.y-this.treeHeight/2, this.wallThickness, this.treeHeight, {isStatic:false})
		
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;

			
			push()
			translate(posBottom.x, posBottom.y+10);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight)
			//rect(0,0,this.treeWidth, this.wallThickness);
			pop()
			
	}

}