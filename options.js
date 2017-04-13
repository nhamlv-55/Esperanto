// Saves options to chrome.storage
function save_options() {
  wordsets = []
  for(var i=0; i< counter; i++){
    name = document.getElementById("name-"+i).value
    wordset = document.getElementById("wordset-"+i).value
    entry = {"name": name, "wordset": wordset}
    wordsets.push(entry)
  }
  
  chrome.storage.sync.set({
    wordsets: wordsets,
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    favoriteColor: 'red',
    likesColor: true,
	wordsets: []
  }, function(items) {
    console.log(items)
    counter = items.wordsets.length
    for(var i=0; i< counter; i++){
      console.log(i)
      var div = document.createElement('div')
      var name = document.createElement("input")
      name.setAttribute("id", "name-"+i)
      name.setAttribute("style", "width: 100px; vertical-align: top;")
      name.setAttribute("value", items.wordsets[i]["name"])
      
      var wordset = document.createElement("textarea")
      wordset.setAttribute("id", "wordset-"+i)
      wordset.setAttribute("cols", "80")
      wordset.setAttribute("rows", "15")
      wordset.textContent = items.wordsets[i]["wordset"]

      div.setAttribute("id", "0")
      div.appendChild(name)
      div.appendChild(wordset)
      var content = document.getElementById('content')
      content.appendChild(div);
    }
    document.getElementById('color').value = items.favoriteColor;
    document.getElementById('like').checked = items.likesColor;
	
  });
}
function add(){
	console.log("call add")
	var div = document.createElement('div')
	var name = document.createElement("input")
	name.setAttribute("id", "name-"+counter)
	name.setAttribute("style", "width: 100px; vertical-align: top;")
	name.setAttribute("value", "Name")
	
	var wordset = document.createElement("textarea")
	wordset.setAttribute("id", "wordset-"+counter)
	wordset.setAttribute("cols", "80")
	wordset.setAttribute("rows", "15")
	wordset.textContent = "Words...."

	div.setAttribute("id", "0")
	div.appendChild(name)
	div.appendChild(wordset)
	var content = document.getElementById('content')
	content.appendChild(div);
  counter = counter+1
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
document.getElementById('add').addEventListener('click',
    add);
