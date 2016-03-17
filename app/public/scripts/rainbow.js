 $(function() {
		 var colorChange = function(){
		 var randomR = getRandomArbitrary(0,255);
		 var randomG = getRandomArbitrary(0,255);
		 var randomB = getRandomArbitrary(0,255);
		 var newColor = "rgb("+ randomR+ "," + randomG+ "," +randomB+ ")";
		 $( "h3" ).animate({
          color: newColor,
        }, 90 );
		}

		function getRandomArbitrary(min, max) {
		  return Math.floor(Math.random() * (max - min) + min);
		}

		function rainbow(){
			setInterval(colorChange, 90);
		}
		rainbow();
});
