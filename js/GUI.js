function MovementArrow(canvas)
{

	var buttonSize = { width : 75, height : 75 };

	this.up = new Image();
	this.left = new Image();
	this.right = new Image();
	this.down = new Image();

	var topButton = { x : canvas.width - 170, y : canvas.height - 170 };
	var rightButton = { x : canvas.width - 85, y : canvas.height - 125 };
	var leftButton = { x : canvas.width - 255, y : canvas.height - 125 };
	var bottomButton = { x : canvas.width - 170, y : canvas.height - 85 };
	this.load = function()
	{
		this.up = new Image();
		this.up.src = "img/arrow.png";

		this.left = new Image();
		this.left.src = "img/arrow_left.png";

		this.right = new Image();
		this.right.src = "img/arrow_right.png";

		this.down = new Image();
		this.down.src = "img/arrow_down.png";
	}

	this.draw = function(ctx)
	{
		ctx.save();
		ctx.globalAlpha = 0.75;
		ctx.drawImage(this.up, topButton.x, topButton.y);
		ctx.drawImage(this.right, rightButton.x, rightButton.y);
		ctx.drawImage(this.left, leftButton.x, leftButton.y);
		ctx.drawImage(this.down, bottomButton.x, bottomButton.y);
		ctx.restore();
	}

	//Register click functions
	$("#game").on("click", function(e){
		console.log(e);
		var x = e.pageX;
		var y = e.pageY;
	});
}
