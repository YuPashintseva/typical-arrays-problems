
exports.min = function min (array) {
	  if (!Array.isArray(array)) {
	    return 0;
	  }
	  var minVal = '';
	  for (var i=0; i < array.length; i++) {
	    if (i === 0){
	      minVal = array[i];
	    }
	    if (array[i] < minVal) {
	      minVal = array[i];
	    }
	  } 
	  return minVal;
}

exports.max = function max (array) {
  	  if (!Array.isArray(array)) {
	    return 0;
	  }
	  var maxVal = '';
	  for (var i=0; i < array.length; i++) {
	    if (i === 0){
	      maxVal = array[i];
	    }
	    if (array[i] > maxVal) {
	      maxVal = array[i];
	    }
	  } 
	  return maxVal;
}

exports.avg = function avg (array) {
	  if (!Array.isArray(array)||(array.length === 0)) {
	  	return 0;
	  }

	  var sum = 0;
	  for (var i=0; i < array.length; i++) {
	  	sum+=array[i];
	  }

	  return sum/array.length;
}
