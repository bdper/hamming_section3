var compute;
//compute the hamming distance between two DNA strands and returns an integer representing distance
compute = function(s1, s2){ //strand1 & strand2
	
	//if the strands are NOT the same length
	if (s1.length !== s2.length){
		//throw an error
		throw new Error('DNA strands must be of equal length.');
	}
	//initialize distance variable
	//defaults to zero, i.e. strands are the same
	var distance = 0; 
	//compute the difference
	//loop over every character in the two strands
	for(var i = 0; i < s1.length; i+= 1) {
		//if the i'th character in s1 is NOT equal to the i'th character in s2
		//if (s1[i] !== s2[i]) { or
		if (s1.charAt(i) !==s2.charAt(i)) {	
			distance = distance + 1; //or distance += 1;
		}
	} //return the distance
	return distance;
	};



	module.exports = {
		compute: compute
	};






	//http://stackoverflow.com/questions/26641088/exercism-javascript-hamming-exercise-getting-undefined-is-not-a-function