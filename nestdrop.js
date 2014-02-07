var express = require('express');
var app = express();


app.listen(3000);

app.get('/getProducts', function (req, res) {
    var jsonObj = {
        status: "6000",
        action: "getProducts",
        categories: [{
            "name": "beer",
            "iconUrl": "www.icon.com",
            "products": []
        }, {
            "name": "beer",
            "iconUrl": "www.icon.com",
            "products": []
        }, {
            "name": "beer",
            "iconUrl": "www.icon.com",
            "products": []
        }]
    }
    for (var i = 0; i < jsonObj.categories.length; i++) {
        for (var j = 0; j < 10; j++) {
            var newObj = {
                "imageProfileUrl": "www.google.com",
                "imageUrl": "www.google.com",
                "largeImageUrl": "www.google.com",
                "name": "ABSOLUTBLUE",
                "subtitle": "VODKA AHUS, SKANE,INSOUTHERNSWEDEN",
                "description": "this is some decent vodka",
                "qtyAvailable": 55,
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
            jsonObj.categories[i].products.push(newObj);
        }
    }
    res.json(jsonObj);

});
