var express = require('express');
var app = express();


app.listen(3000);

app.get('/getProducts', function(req,res) {
	var jsonObj = {
		status: "6000",
		action: "getProducts",
		categories: {
			beer: [
			],
			wine: [
			
			],
			liquor: [
			
			]
		}
	}


	for( var i = 0; i < 10; i++ ) {
		var newObj =             {
                	"image-profile-url": "www.google.com",
                	"image-url": "www.google.com",
                	"large-image-url": "www.google.com",
                	"name": "ABSOLUTBLUE",
                	"subtitle": "VODKA AHUS, SKANE,INSOUTHERNSWEDEN",
                	"description": "thisissomedecentvodka  Icouldgoforsomerightnow",
                	"qty-available": 55,
                	"size": 750,
                	"unit": "ml",
                	"type": "vodka",
                	"keywords": [
                    	"vodka",
                    	"potatoes",
                    	"clear"
                	],
                	"origin": "Sweden",
                	"price": 16.75
            	}
		jsonObj.categories.beer.push( newObj );

		var newObj2 =  {
                	"image-profile-url": "www.google.com",
                	"image-url": "www.google.com",
                	"large-image-url": "www.google.com",
                	"name": "ABSOLUTBLUE",
                	"subtitle": "VODKA AHUS, SKANE,INSOUTHERNSWEDEN",
                	"description": "thisissomedecentvodka  Icouldgoforsomerightnow",
                	"qty-available": 55,
                	"volume": "750ml",
                	"type": "vodka",
                	"keywords": [
                    	"vodka",
                    	"potatoes",
                    	"clear"
                	],
                	"origin": "Sweden",
                	"price": 16.75
            	}
		jsonObj.categories.wine.push( newObj2 );

		var newObj3 =  {
                	"image-profile-url": "www.google.com",
                	"image-url": "www.google.com",
                	"large-image-url": "www.google.com",
                	"name": "ABSOLUTBLUE",
                	"subtitle": "VODKA AHUS, SKANE,INSOUTHERNSWEDEN",
                	"description": "thisissomedecentvodka  Icouldgoforsomerightnow",
                	"qty-available": 55,
                	"volume": "750ml",
                	"type": "vodka",
                	"keywords": [
                    		"vodka",
                    		"potatoes",
                    		"clear"
                	],
                	"origin": "Sweden",
                	"price": 16.75
            	}
		jsonObj.categories.liquor.push(newObj3);
	}
	res.json( jsonObj );
			
});