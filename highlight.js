wordset = wordset.split(" ")
var len = wordset.length
var i = 0
var nextFunc = function() {
  if(i == len){
  	alert("Done highlighting!");
    return
  }
  $("body").mark(wordset[i], {
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
