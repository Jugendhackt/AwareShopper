

function getCurrentURL(){
	browser.tabs.query({currentWindow: true,  active: true})
		.then((tabs) => {
		document.getElementById("p1").innerHTML = (tabs[0].url); 
	})
}

getCurrentURL()
