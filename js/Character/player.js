function Character()
{
	var PREFIX = "/data/";

	//Populated on load and then refered to when we want to draw a specific animation
	this.animation = {};

	this.loadCharacter = function(url, callback)
	{
		//Loads json for character
		url = PREFIX + url;

		//Performs ajax to grab data
		$.ajax({
			url : url,
			type : 'GET',
			dataType : 'json',
			success : callback,
			error : function()
			{
				throw "Ajax was not able to retrive that file";
			}
		});
	}

	this.render = function(c, data)
	{
		var head = data.head;
		var body = data.body;
		var leftHand = data.leftHand;
		var rightHand = data.rightHand;

		//Draw feet
	}
}