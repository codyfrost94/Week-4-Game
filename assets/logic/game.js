//for whatever reason, it won't create or append anything
	//i tried it when there was no code for anything except 1. creating an img and 2. appending the img
	//i tried it outside of the function
	//i tried it outside of a for loop
	//there is a fundamental blind spot in my ability to troubleshoot this error
	//im just turning it in now because continuing to watch this do nothing for what seems to be no reason makes me want to swallow magnets and take an MRI
	//hopefully you can figure it out 

	
	var counter=0
	var wins=0
	var losses=0
	var targetScore = Math.floor(Math.random() * 111 + 9 )
	var randCrystalValue = Math.floor(Math.random() * 11 + 1 )


	$("#target-score").text(targetScore);
	console.log(targetScore)

	var imageArray = ["assets/images/crystal1.png","assets/images/crystal2.png", "assets/images/crystal3.png", "assets/images/crystal4.png"]

	
	var randomizeCrystals = function() {

		for (i=0; i<imageArray.length; i++) {
			var crystal = $("<img>");
			crystal.addClass("crystal-image");
			crystal.attr("src", imageArray[i]);
			randCrystalValue = Math.floor(Math.random() * 11 + 1 )
			crystal.attr("data-crystalvalue", randCrystalValue);			
			$("#crystal-buttons").append(crystal);
			console.log(imageArray[i]);
			console.log(randCrystalValue);
		}
	}

	randomizeCrystals();

	$(".crystal-image").on("click", function() {

		var crystalValue = ($(this).attr("data-crystalvalue"));
		crystalValue = parseInt(crystalValue);
		counter += crystalValue;
    	$("#display-score").text(counter);

    	if (counter === targetScore) {
	      wins++;
	      $("#wins").text(wins)
	      targetScore = Math.floor(Math.random() * 111 + 9);
	      $("#number-to-guess").text(targetScore);
	      counter = 0;
	      $("#current-score").text(counter);
	      randomizeCrystals();
	    }

	    else if (counter >= targetScore) {
	      losses++;
	      $("#losses").text(losses)
	      targetScore = Math.floor(Math.random() * 111 + 9);
	      $("#number-to-guess").text(targetScore);
	      counter = 0;
	      $("#current-score").text(counter);
	      randomizeCrystals();

	    }

  });
