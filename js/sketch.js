$(document).ready(function(){
	$('body').prepend('<button type="button">Reset</button>')
	for(var x = 0; x < 64; x++){
		for(var y = 0; y < 64; y++){
			var unit = $("<div class='unit'></div>");
			unit.appendTo('#container');
		}
	}
	$('.unit').hover(function(){
		$(this).css('background-color','black');
		$(this).css('opacity','1');
	})
	$('button').click(function(){
		var x = prompt("how wide should the grid be?")
		var y = prompt("how tall should the grid be?")
		$("#container").empty();
		for(var i = 0; i < x; i++){
		for(var j = 0; j < y; j++){
			var unit = $("<div class='unit'></div>");
			unit.appendTo('#container');
				}
			}
			$('.unit').hover(function(){
				$(this).css('background-color','black');
				$(this).css('opacity','1');
				})

		})
});