


chrome.runtime.onMessage.addListener(function(request, sender) {
  if (request.action == "getSource") {
    message.innerText = request.source;
  }
});

document.addEventListener('DOMContentLoaded', function() {
	    var highlight = document.getElementById('highlight');
	    // onClick's logic below:
	    highlight.addEventListener('click', function() {
	    	index = document.getElementById("wordset-selector").value
	    	wordset = data.wordsets[index]["wordset"]

	    	console.log(wordset)
	    	console.log("called highlight")
	        chrome.tabs.executeScript(null, {
	        	code: 'var wordset = '+'"'+wordset+'"'},
	        	function () {
	        		chrome.tabs.executeScript(null, {file: 'highlight.js'});
	        	}
	        );
	    });
	});

function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
	wordsets: []
  }, function(items) {
    console.log(items)
    data = items
    counter = items.wordsets.length
    var select = document.createElement("select")
    select.setAttribute("id", "wordset-selector")
    for(var i=0; i< counter; i++){
      console.log(i)
      var name = document.createElement("option")
      name.setAttribute("value", i)
      name.textContent = items.wordsets[i]["name"]
      select.appendChild(name)
    }
    
    var content = document.getElementById('content')
    content.appendChild(select);
	
  });
}


document.addEventListener('DOMContentLoaded', restore_options);
