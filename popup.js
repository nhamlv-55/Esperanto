piece_size = 2048
no_piece = 50

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
	    	wordset = wordsets[index]["wordset"]

	    	console.log(index)
	    	console.log("called highlight")
	        chrome.tabs.executeScript(null, {
	        	code: 'var wordset = '+'"'+wordset+'"'},
	        	function () {
	        		console.log(wordset)

	        		chrome.tabs.executeScript(null, {file: 'highlight.js'});
	        	}
	        );
	    });
	    var options = document.getElementById('go-to-options');
	    options.addEventListener('click', function(){
	    	chrome.runtime.openOptionsPage();
	    })
	});
function restore_options() {
  chrome.storage.sync.get(
	  null
  , function(items) {
    if(Object.keys(items).length === 0 && items.constructor === Object){
      counter = 0;
    }else{
      data_string = ""
      for(var i = 0; i<no_piece; i++){
        data_string = data_string + items[i]
      }
      wordsets = JSON.parse(data_string)
      counter = wordsets.length

      var select = document.createElement("select")
      select.setAttribute("id", "wordset-selector")

      for(var i=0; i< counter; i++){
      	var name = document.createElement("option")
      	name.setAttribute("value", i)
      	name.textContent = wordsets[i]["name"]
      	select.appendChild(name)
      }

      var content = document.getElementById('content')
      content.appendChild(select);
    }
  })
};



// function restore_options() {
//   chrome.storage.sync.get({
// 	wordsets: []
//   }, function(items) {
//     console.log(items)
//     data = items
//     counter = items.wordsets.length
//     var select = document.createElement("select")
//     select.setAttribute("id", "wordset-selector")
//     for(var i=0; i< counter; i++){
//       console.log(i)
//       var name = document.createElement("option")
//       name.setAttribute("value", i)
//       name.textContent = items.wordsets[i]["name"]
//       select.appendChild(name)
//     }
    
//     var content = document.getElementById('content')
//     content.appendChild(select);
	
//   });
// }


document.addEventListener('DOMContentLoaded', restore_options);
