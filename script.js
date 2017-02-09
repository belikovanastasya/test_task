function getPalindrome (){
	var arr = [];
	var diff;
	var mult;


for (var i=100; i<1000; i++){     //loop for search all of numbers made from the product of 3-digit numbers
    for(var j=100; j<1000; j++){   
       mult =i*j;
       
   function revnum(mult){         // function for get revers all of found numbers
		mult = mult + "";
	return mult.split("").reverse().join("");
}

		var reversemult = revnum(mult); 

      	 diff = mult - reversemult; // get difference between numbers and revers numbers


if (diff==0){

	arr.push(mult);  // get array all of palindromes
	var max = Math.max.apply(null, arr);  // find max value
	
}

}

}
document.getElementById("answer").innerHTML = max;

}


