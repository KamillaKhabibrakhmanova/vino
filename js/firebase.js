$( document ).ready(function() {
// Function to get picture for wine color
var getPhoto = function(wineColor) {
    if (wineColor === "red") {
        return "img/red.jpg";
    } else if (wineColor === "white") {
        return "img/white.jpg";
    } else if (wineColor === "rose") {
        return "img/rose.jpg";
    } else {
        return "img/wine_bottle_default";
    }
};


// Set up new Firebase
var myDataRef = new Firebase('https://popping-fire-2015.firebaseio.com/wines2');


// Trigger events when "Submit" button is clicked
$('#add-wine-form').on('submit', function(e) {
    // Prevent default action
    e.preventDefault();
 


    // Save form values as object properties
    var color = $("input[name=wine-color]:checked").val();
    var name = $('#winery-name').val();
    var type = $('#wine-type').val();
    var year = $('#wine-year').val();
    var source = $('#wine-source').val();
    var rating = $("input[name=wine-rating]:checked").val();
    var comments = $('#wine-comments').val();
    var price = $('#wine-price').val();
    myDataRef.push().set({
        name: name,
        type: type,
        year: year,
        source: source,
        rating: rating,
        comments: comments,
        color: color,
        price: price
        // Show error or success pop up message
    }, function(error) {
        if (error) {
            alert('Data could not be saved.' + error);
        } else {
            alert('Your wine has been added!');
        }
    });



    return false;


    
});








var retreivedData; 

// $( document ).on( "mobileinit" , function () {
myDataRef.on('value', function(snapshot) {
    //console.log(snapshot);

	retreivedData= Object.create(snapshot.val());

    snapshot.forEach(function(childSnapshot) {
        var data = childSnapshot.val();
        var color = childSnapshot.child('color').val();
        var colorPicture = getPhoto(color);
        var name = childSnapshot.child('name').val();
        var type = childSnapshot.child('type').val();
        var year = childSnapshot.child('year').val();
        var source = childSnapshot.child('source').val();
        var rating = childSnapshot.child('rating').val();
        var comments = childSnapshot.child('comments').val();
        var price = childSnapshot.child('price').val();
        var string = "";
        string = string + "<div class = \"form-body winelist-body\">";
        string = string + "<img src=" + colorPicture + " class=\"wine_image\" />";
        string = string + "<p><strong>Winery: </strong> " + name + "</p>";
        string = string + "<p><strong>Grape Type: </strong> " + type + "</p>";
        string = string + "<p><strong>Year: </strong> " + year + "</p>";
        string = string + "<p><strong>Source: </strong> " + source + "</p>";
        string = string + "<p><span class=\"winePrice\"><strong>Price Range: </strong> " + price + "</p>";
        string = string + "<p><strong>Rating: </strong>" + rating + "</p>";
        string = string + "<p><strong>Comments: </strong>" + comments + "</p>";
        string = string + "</div>"


        $('#personal-wine-list').append(string);
        $('.personal-winelist').append(string);


        // $('#personal-wine-list').html(string);
    });

});


// Deliver search results
$('#search-wine-form').on('submit', function(f) {

    f.preventDefault();
    var searchedPrice = $("#sort-wine-price").val();
    var searchedColor = $("#sort-wine-color").val();



	for(var key in retreivedData) {
		var color = retreivedData[key].color;
        var colorPicture = getPhoto(color);
        var name = retreivedData[key].name;
        var type = retreivedData[key].type;
        var year = retreivedData[key].year;
        var source = retreivedData[key].source;
        var rating = retreivedData[key].rating;
        var comments = retreivedData[key].comments;
        var price = retreivedData[key].price;
        if(searchedPrice === retreivedData[key].price) {
        	console.log("Prices match");
        }

        if (searchedColor === retreivedData[key].color) {
        	console.log("colors match");
        }
		// console.log(retreivedData[key]);
		if(searchedPrice === retreivedData[key].price && (searchedColor === retreivedData[key].color)) {
		    console.log(searchedPrice, retreivedData[key].price);
			console.log("its the same");


	        var string = "";
	        string = string + "<div class = \"form-body winelist-body\">";
	        string = string + "<img src=" + colorPicture + " class=\"wine_image\" />";
	        string = string + "<p><strong>Winery: </strong> " + name + "</p>";
	        string = string + "<p><strong>Grape Type: </strong> " + type + "</p>";
	        string = string + "<p><strong>Year: </strong> " + year + "</p>";
	        string = string + "<p><strong>Source: </strong> " + source + "</p>";
	        string = string + "<p><span class=\"winePrice\"><strong>Price Range: </strong> " + price + "</p>";
	        string = string + "<p><strong>Rating: </strong>" + rating + "</p>";
	        string = string + "<p><strong>Comments: </strong>" + comments + "</p>";
	        string = string + "</div>"
	        console.log(string);



	        $('.results-wine-list').append(string);

		}

		else if (searchedPrice === retreivedData[key].price && searchedColor == "I'm feeling lucky") {
			var string = "";
	        string = string + "<div class = \"form-body winelist-body\">";
	        string = string + "<img src=" + colorPicture + " class=\"wine_image\" />";
	        string = string + "<p><strong>Winery: </strong> " + name + "</p>";
	        string = string + "<p><strong>Grape Type: </strong> " + type + "</p>";
	        string = string + "<p><strong>Year: </strong> " + year + "</p>";
	        string = string + "<p><strong>Source: </strong> " + source + "</p>";
	        string = string + "<p><span class=\"winePrice\"><strong>Price Range: </strong> " + price + "</p>";
	        string = string + "<p><strong>Rating: </strong>" + rating + "</p>";
	        string = string + "<p><strong>Comments: </strong>" + comments + "</p>";
	        string = string + "</div>"
	        console.log(string);



	        $('.results-wine-list').append(string);
		}

		else if (searchedPrice == "It don't matter" && searchedColor === retreivedData[key].color) {
			var string = "";
	        string = string + "<div class = \"form-body winelist-body\">";
	        string = string + "<img src=" + colorPicture + " class=\"wine_image\" />";
	        string = string + "<p><strong>Winery: </strong> " + name + "</p>";
	        string = string + "<p><strong>Grape Type: </strong> " + type + "</p>";
	        string = string + "<p><strong>Year: </strong> " + year + "</p>";
	        string = string + "<p><strong>Source: </strong> " + source + "</p>";
	        string = string + "<p><span class=\"winePrice\"><strong>Price Range: </strong> " + price + "</p>";
	        string = string + "<p><strong>Rating: </strong>" + rating + "</p>";
	        string = string + "<p><strong>Comments: </strong>" + comments + "</p>";
	        string = string + "</div>"
	        console.log(string);



	        $('.results-wine-list').append(string);
	    }

	    else {
	    	console.log("Something's not right");
	    }
	}



        return false; 

    });




        // console.log(string);





        // });
});

        // Prevent default action


        // Prevent default action