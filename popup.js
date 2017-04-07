


chrome.runtime.onMessage.addListener(function(request, sender) {
  if (request.action == "getSource") {
    message.innerText = request.source;
  }
});

document.addEventListener('DOMContentLoaded', function() {
	    var highlight = document.getElementById('highlight');
	    // onClick's logic below:
	    highlight.addEventListener('click', function() {
	    	console.log("called highlight")
	        chrome.tabs.executeScript(null, {
	        	file: "highlight.js"
	        	}, function() {
	        	// If you try and inject into an extensions page or the webstore/NTP you'll get an error
	        	if (chrome.runtime.lastError) {
	        	  console.log('There was an error injecting script : \n' + chrome.runtime.lastError.message);
	        	}
	        });
	    });
	});



