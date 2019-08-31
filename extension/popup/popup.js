

function getCurrentURL(){
	browser.tabs.query({currentWindow: true,  active: true})
		.then((tabs) => {
		document.getElementById("ranking").innerHTML = (tabs[0].url); 
	})
}

getCurrentURL()
