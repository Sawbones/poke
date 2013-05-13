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
		for(var y = 0; y < map.data.length; y++)
		{
			for(var x = 0; x < map.data[0].length; x++)
			{
				var textures = map.textures;
				var textureName = map.data[x][y];

				ctx.drawImage(images[textureName], x * map.width, y * map.height);
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

		//console.log(map);
	}
}