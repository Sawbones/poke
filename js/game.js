function Game()
{
	var canvas = document.getElementById("game");
	var c = canvas.getContext("2d");

	var mapBuilder = new MapBuilder(),
		map;

	var arrows = new MovementArrow(canvas);
	arrows.load();


	mapBuilder.loadMap('test2', function(mapObject){
		map = mapObject;
	});

	//Sets basic things
	c.fillStyle = "#333";
	this.render = function(delta)
	{
		c.clearRect(0, 0, canvas.width, canvas.height);

		if(typeof map != 'undefined')
		{
			map.draw(c);
		}

		//Draws character in the middle of the screen
		c.fillStyle = "#FFF";
		c.fillRect(canvas.width/2 - (32/2), canvas.height/2 - (64/2), 32, 64);

		//c.strokeStyle = "#000";
		//c.strokeRect(canvas.width/2 - (32/2), canvas.height/2 - (64/2), 32, 64);
		//Endof prototype character

		arrows.draw(c);
	}
}