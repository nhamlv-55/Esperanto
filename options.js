// Saves options to chrome.storage
function save_options() {
  var color = document.getElementById('color').value;
  var likesColor = document.getElementById('like').checked;
  chrome.storage.sync.set({
    favoriteColor: color,
    likesColor: likesColor
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
	wordset: []
  }, function(items) {
    document.getElementById('color').value = items.favoriteColor;
    document.getElementById('like').checked = items.likesColor;
	
  });
}
function add(){
	console.log("dasdsa")
	var div = document.createElement('div')
	var name = document.createElement("input")
	name.setAttribute("id", "name-0")
	name.setAttribute("style", "width: 100px; vertical-align: top;")
	name.setAttribute("value", "Name")
	
	var wordset = document.createElement("textarea")
	wordset.setAttribute("id", "wordset-0")
	wordset.setAttribute("cols", "80")
	wordset.setAttribute("rows", "15")
	wordset.textContent = "Words...."

	div.setAttribute("id", "0")
	div.appendChild(name)
	div.appendChild(wordset)
	var content = document.getElementById('content')
	content.appendChild(div);
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
document.getElementById('add').addEventListener('click',
    add);
