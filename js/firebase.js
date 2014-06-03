
// Set up new Firebase
var myDataRef = new Firebase('https://popping-fire-2015.firebaseio.com/wines');


// Trigger events when "Submit" button is clicked
$('#add-wine-form').on('submit', function(e){
// Prevent default action
	e.preventDefault();

// Save form values as object properties
	var photo = $('#wine-photo').val();
	var name = $('#winery-name').val();
	var type = $('#wine-type').val();
	var year = $('#wine-year').val();
	var source = $('#wine-source').val();
	var rating = $("input[name=wine-rating]:checked").val();
	var comments = $('#wine-comments').val();
	myDataRef.push().set({
		name: name,
		type: type,
		year: year,
		source: source,
		rating: rating,
		comments: comments
// Show error or success pop up message
	}, function(error) {
		if (error) {
			alert('Data could not be saved.' + error);
		} else {
			alert('Your wine has been added!');
		}
	}
	);

	return false;
});


// $( document ).on( "mobileinit" , function () {
myDataRef.on('value', function(snapshot) {
	//console.log(snapshot);
	snapshot.forEach(function(childSnapshot) {
		var data = childSnapshot.val();
		var photo = childSnapshot.child('photo').val();
		var name = childSnapshot.child('name').val();
		var type = childSnapshot.child('type').val();
		var year = childSnapshot.child('year').val();
		var source = childSnapshot.child('source').val();
		var rating = childSnapshot.child('rating').val();
		var comments = childSnapshot.child('comments').val();
			var string = "";
			string = string + "<div class = \"form-body winelist-body\">";
	    	string = string + "<img src=\"img/wine_bottle_default.jpg\" class=\"wine_image\" />";
	    	string = string + "<p><strong>Winery: </strong> " + name +"</p>";
	    	string = string + "<p><strong>Grape Type: </strong> " + type +"</p>";
	    	string = string  + "<p><strong>Year: </strong> " + year +"</p>";
	    	string = string + "<p><strong>Source: </strong> " + source +"</p>";
	    	string = string + "<p><strong>Rating: </strong>" + rating +"</p>";
	    	string = string + "<p><strong>Comments: </strong>" + comments + "</p>";
	    	string = string + "</div>"
	    

	$('#personal-wine-list').append(string); 
	$('.personal-winelist').append(string);   

	
	// $('#personal-wine-list').html(string);
	});
	
});

// myDataRef.on('child_added', function(childSnapshot) {
// 	var data = childSnapshot.val();
// 		var photo = childSnapshot.child('photo').val();
// 		var name = childSnapshot.child('name').val();
// 		var type = childSnapshot.child('type').val();
// 		var year = childSnapshot.child('year').val();
// 		var source = childSnapshot.child('source').val();
// 		var rating = childSnapshot.child('rating').val();
// 		var comments = childSnapshot.child('comments').val();
// 			var string = "";
// 			string = string + "<div class = \"form-body winelist-body\">";
// 	    	string = string + "<img src=\"img/wine_bottle_default.jpg\" class=\"wine_image\" />";
// 	    	string = string + "<p><strong>Winery: </strong> " + name +"</p>";
// 	    	string = string + "<p><strong>Grape Type: </strong> " + type +"</p>";
// 	    	string = string  + "<p><strong>Year: </strong> " + year +"</p>";
// 	    	string = string + "<p><strong>Source: </strong> " + source +"</p>";
// 	    	string = string + "<p><strong>Rating: </strong>" + rating +"</p>";
// 	    	string = string + "<p><strong>Comments: </strong>" + comments + "</p>";
// 	    	string = string + "</div>"
// 	    console.log(string);

// 	$('#personal-wine-list').append(string); 
// 	$('.personal-winelist').append(string);   
// });



    	
    // console.log(string);
   


	

// });

	
// Prevent default action
	
