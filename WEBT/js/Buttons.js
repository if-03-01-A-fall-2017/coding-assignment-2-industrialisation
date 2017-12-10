var links = document.querySelectorAll("button.links"); 

for (var i = 0; i < links.length; i++) { 
	links[i].onclick = function(){ 
		this.classList.toggle("active"); 
		this.nextElementSibling.classList.toggle("show"); 
	} 
}