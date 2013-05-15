function MovementArrow(canvas)
{

	var buttonSize = { width : 75, height : 75 };

	this.upImage = new Image();
	this.leftImage = new Image();
	this.rightImage = new Image();
	this.downImage = new Image();

	var topButton = { x : canvas.width - 170, y : canvas.height - 170 };
	var rightButton = { x : canvas.width - 85, y : canvas.height - 125 };
	var leftButton = { x : canvas.width - 255, y : canvas.height - 125 };
	var bottomButton = { x : canvas.width - 170, y : canvas.height - 85 };
	this.load = function()
	{
		this.upImage = new Image();
		this.upImage.src = "img/arrow.png";

		this.leftImage = new Image();
		this.leftImage.src = "img/arrow_left.png";

		this.rightImage = new Image();
		this.rightImage.src = "img/arrow_right.png";

		this.downImage = new Image();
		this.downImage.src = "img/arrow_down.png";
	}

	this.draw = function(ctx)
	{
		ctx.save();
		ctx.globalAlpha = 0.75;
		ctx.drawImage(this.upImage, topButton.x, topButton.y);
		ctx.drawImage(this.rightImage, rightButton.x, rightButton.y);
		ctx.drawImage(this.leftImage, leftButton.x, leftButton.y);
		ctx.drawImage(this.downImage, bottomButton.x, bottomButton.y);
		ctx.restore();
	}

	/*Register click functions
	$(window).on("mousedown touchstart", function(e){
		var x = e.offsetX;
		var y = e.offsetY;

		if(x > topButton.x && x < topButton.x + buttonSize.width 
			&& y > topButton.y && y < topButton.y + buttonSize.height)
		{
			up = true;
		}

		if(x > rightButton.x && x < rightButton.x + buttonSize.width 
			&& y > rightButton.y && y < rightButton.y + buttonSize.height)
		{			
			right = true;
		}

		if(x > leftButton.x && x < leftButton.x + buttonSize.width 
			&& y > leftButton.y && y < leftButton.y + buttonSize.height)
		{
			left = true;
		}

		if(x > bottomButton.x && x < bottomButton.x + buttonSize.width 
			&& y > bottomButton.y && y < bottomButton.y + buttonSize.height)
		{
			down = true;
		}
	});*/

	window.addEventListener("touchstart", function(e){
		var x = e.offsetX;
		var y = e.offsetY;

		if(x > topButton.x && x < topButton.x + buttonSize.width 
			&& y > topButton.y && y < topButton.y + buttonSize.height)
		{
			up = true;
		}

		if(x > rightButton.x && x < rightButton.x + buttonSize.width 
			&& y > rightButton.y && y < rightButton.y + buttonSize.height)
		{			
			right = true;
		}

		if(x > leftButton.x && x < leftButton.x + buttonSize.width 
			&& y > leftButton.y && y < leftButton.y + buttonSize.height)
		{
			left = true;
		}

		if(x > bottomButton.x && x < bottomButton.x + buttonSize.width 
			&& y > bottomButton.y && y < bottomButton.y + buttonSize.height)
		{
			down = true;
		}
	}, false);

	window.addEventListener("touchend", function(e){
		up 		= false;
		down 	= false;
		left 	= false;
		right 	= false;
	}, false);

	/*
	$(window).on("mouseup touchend", function(e){
		up 		= false;
		down 	= false;
		left 	= false;
		right 	= false;
	});
*/
}
