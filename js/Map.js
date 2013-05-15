/*
	Used to load maps
*/
function MapBuilder()
{
	var PREFIX = "data/maps/";
	var TEXTURES_URI = "data/textures.json";
	var EXT = ".json";

	this.loadMap = function(mapName, callback)
	{
		var url = PREFIX + mapName + EXT;
		$.ajax({
			url : url,
			type: 'GET',
			dataType : 'json',
			success : function(mapData){
				//Get textures associated with map
				$.getJSON(TEXTURES_URI, function(textures){
					//If those textures don't exist then we have a problem
					if(mapName in textures)
					{
						mapData.textures = textures[mapName];
						var map = new Map(mapData);
						callback(map);
					}
					else
					{
						var errorMessage = "No textures associated with map";
						throw errorMessage;
						callback({output : errorMessage, success : false});
					}
				}, function(data){
					console.log(data);
				});
			},
			error : function(data, error)
			{
				throw "Could not load the map file";
			}
		});
	} //loadMap
}
function Map(map)
{
	var images = {};

	//Loads needed textures
	for(tex in map.textures)
	{
		var texture = map.textures[tex];
		images[tex] = new Image(texture);
		images[tex].src = texture;
	}

	this.draw = function(ctx)
	{
		/*
			Checks to see which variables are true, if they are then they will move the offset
		*/

		if(up)
		{
			yOffset += offsetVelocity;
		}
		else if(left)
		{
			xOffset += offsetVelocity;
		}
		else if(right)
		{
			xOffset -= offsetVelocity;
		}
		else if(down) //down
		{
			yOffset -= offsetVelocity;
		}

		//Calculates where to start drawing and where to stop
		var startX = Math.floor(Math.abs(xOffset) / map.width);
		var startY = Math.floor(Math.abs(yOffset) / map.height);

		var endX = Math.floor((canvas.width / map.width) + startX + 2);
		var endY = Math.floor((canvas.height / map.height) + startY + 2);

		for(var y = startY; y < endY; y++)
		{
			for(var x = startX; x < endX; x++)
			{
				var textures = map.textures;
				var textureName = map.data[x][y];

				ctx.drawImage(images[textureName], (x * map.width) + xOffset, (y * map.height) + yOffset);
			}

		}
	}
}

function MapGenerator()
{
	var defaultWidth = 200;
	var defaultHeight = 200;

	var blocks = ['dirt', 'grass', 'stone'];

	var map = {
		name : 'test2',
		ext : '.json',
		width : 101,
		height : 80,
		data : new Array()
	};
	this.makeMap = function()
	{
		for(var y = 0; y < defaultHeight; y++)
		{
			map.data[y] = new Array();
			for(var x = 0; x < defaultWidth; x++)
			{
				var random = Math.floor(Math.random() * blocks.length);
				map.data[y][x] = blocks[random];
			}
		}
	}
}