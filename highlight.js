wordset = wordset.split(" ")
function compare(a, b) {
  if (a.length <= b.length) {
    return 1;
  }
  if (a.length > b.length) {
    return -1;
  }
  // a must be equal to b
  return 0;
}
var markInstance = new Mark(document.querySelector("body"));

wordset = wordset.sort(compare)
var len = wordset.length
var i = 0
var nextFunc = function() {
  if(i == len){
  	alert("Done highlighting!");
    return
  }
  markInstance.mark(wordset[i], {
      	"separateWordSearch": false
  });
  i++;

  if (i % 10 ==0)
    // Request the next visible frame to continue
    requestAnimationFrame(nextFunc); 
  else
    nextFunc();
}

// Start it off
nextFunc();
