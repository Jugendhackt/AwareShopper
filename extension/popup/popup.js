

function getCurrentURL(){
	return browser.tabs.query({currentWindow: true,  active: true})
		.then((tabs) => {
		return (tabs[0].url);
	})
}


datenbank=[{"domain": "wish.com", "fairtrade": "2", "arbeitsbed": "1", "lohn": "1", "fairtradeg": "hat Sweatshops in Asien", "arbeitsbedg": "sind fast Sklaven", "lohng": "unter Existenzminimum", "link": "https://sites.psu.edu/psy533wheeler/2017/04/21/psy-533-u05-shopping-on-wish-com-who-is-ethically-responsible/", "score": "1"}, {"domain": "amazon.de", "fairtrade": "1", "arbeitsbed": "3", "lohn": "3", "fairtradeg": "stellt eine Monopolie her", "arbeitsbedg": "m\u00fcssen in Hitze arbeiten, werden nicht beachtet", "lohng": "Mindestlohn", "link": "https://en.wikipedia.org/wiki/Criticism_of_Amazon", "score": "2"}, {"domain": "amazon.com", "fairtrade": "1", "arbeitsbed": "3", "lohn": "3", "fairtradeg": "stellt eine Monopolie her", "arbeitsbedg": "m\u00fcssen in Hitze arbeiten, werden nicht beachtet", "lohng": "Mindestlohn", "link": "https://en.wikipedia.org/wiki/Criticism_of_Amazon", "score": "2"}, {"domain": "amazon.org", "fairtrade": "1", "arbeitsbed": "3", "lohn": "3", "fairtradeg": "stellt eine Monopolie her", "arbeitsbedg": "m\u00fcssen in Hitze arbeiten, werden nicht beachtet", "lohng": "Mindestlohn", "link": "https://en.wikipedia.org/wiki/Criticism_of_Amazon", "score": "2"}, {"domain": "amazon.net", "fairtrade": "1", "arbeitsbed": "3", "lohn": "3", "fairtradeg": "stellt eine Monopolie her", "arbeitsbedg": "m\u00fcssen in Hitze arbeiten, werden nicht beachtet", "lohng": "Mindestlohn", "link": "https://en.wikipedia.org/wiki/Criticism_of_Amazon", "score": "2"}, {"domain": "ebay.com", "fairtrade": "7", "arbeitsbed": "5", "lohn": "7", "fairtradeg": "bef\u00f6rdert privaten Verkauf", "arbeitsbedg": "arbeiten hobbym\u00e4ssig da", "lohng": "Verkaufspreis minus Lieferung", "link": "", "score": "6"}, {"domain": "ebay.ch", "fairtrade": "7", "arbeitsbed": "5", "lohn": "7", "fairtradeg": "bef\u00f6rdert privaten Verkauf", "arbeitsbedg": "arbeiten hobbym\u00e4ssig da", "lohng": "Verkaufspreis minus Lieferung", "link": "", "score": "6"}, {"domain": "ebay.de", "fairtrade": "7", "arbeitsbed": "5", "lohn": "7", "fairtradeg": "bef\u00f6rdert privaten Verkauf", "arbeitsbedg": "arbeiten hobbym\u00e4ssig da", "lohng": "Verkaufspreis minus Lieferung", "link": "", "score": "6"}, {"domain": "aliexpress.com", "fairtrade": "3", "arbeitsbed": "1", "lohn": "2", "fairtradeg": "hat Sweatshops in Asien, aber verkauft direkt an Kunden", "arbeitsbedg": "sind fast Sklaven", "lohng": "Existenzminimum", "link": "", "score": "2"}, {"domain": "aliexpress.de", "fairtrade": "3", "arbeitsbed": "1", "lohn": "2", "fairtradeg": "hat Sweatshops in Asien, aber verkauft direkt an Kunden", "arbeitsbedg": "sind fast Sklaven", "lohng": "Existenzminimum", "link": "", "score": "2"}, {"domain": "ricardo.ch", "fairtrade": "8", "arbeitsbed": "8", "lohn": "7", "fairtradeg": "verkauft nur lokal", "arbeitsbedg": "arbeiten hobbym\u00e4ssig da, und m\u00fcssen nur innerhalb der Schweiz versenden", "lohng": "Verkaufspreis minus Lieferung", "link": "", "score": "8"}, {"domain": "zalando.ch", "fairtrade": "7", "arbeitsbed": "8", "lohn": "8", "fairtradeg": "verkauft lokale und importierte G\u00fcter", "arbeitsbedg": "werden gut behandelt", "lohng": "viel", "link": "", "score": "8"}, {"domain": "fust.ch", "fairtrade": "5", "arbeitsbed": "7", "lohn": "6", "fairtradeg": "verkauft G\u00fcter as aller Welt", "arbeitsbedg": "werden respektvoll behandelt", "lohng": "gen\u00fcgend", "link": "", "score": "6"}, {"domain": "coop.ch", "fairtrade": "8", "arbeitsbed": "9", "lohn": "7", "fairtradeg": "verkaufen haupts\u00e4chlich lokale G\u00fcter", "arbeitsbedg": "werden sehr repektvoll behandelt", "lohng": "ausreichend", "link": "", "score": "8"}, {"domain": "intersport.de", "fairtrade": "5", "arbeitsbed": "8", "lohn": "4", "fairtradeg": "verkauft G\u00fcter as aller Welt", "arbeitsbedg": "werden gut behandelt", "lohng": "karg", "link": "", "score": "6"}, {"domain": "intersport.ch", "fairtrade": "5", "arbeitsbed": "8", "lohn": "4", "fairtradeg": "verkauft G\u00fcter as aller Welt", "arbeitsbedg": "werden gut behandelt", "lohng": "karg", "link": "", "score": "7"}, {"domain": "deichmann.de", "fairtrade": "5", "arbeitsbed": "3", "lohn": "9", "fairtradeg": "verkauft G\u00fcter as aller Welt", "arbeitsbedg": "werden sehr schlecht behandelt", "lohng": "sehr grossz\u00fcgig", "link": "", "score": "6"}, {"domain": "deichmann.ch", "fairtrade": "5", "arbeitsbed": "3", "lohn": "9", "fairtradeg": "verkauft G\u00fcter as aller Welt", "arbeitsbedg": "werden sehr schlecht behandelt", "lohng": "sehr grossz\u00fcgig", "link": "", "score": "6"}, {"domain": "obi.de", "fairtrade": "7", "arbeitsbed": "10", "lohn": "7", "fairtradeg": "verkauft lokale und importierte G\u00fcter", "arbeitsbedg": "werden vor fast allen anderen Priorit\u00e4ten gesetzt", "lohng": "ausreichend", "link": "", "score": "8"}, {"domain": "ikea.com", "fairtrade": "3", "arbeitsbed": "9", "lohn": "7", "fairtradeg": "holzen viel ab", "arbeitsbedg": "werden sehr freundlich behandelt", "lohng": "ausreichend", "link": "", "score": "6"}, {"domain": "fressnapf.de", "fairtrade": "3", "arbeitsbed": "2", "lohn": "4", "fairtradeg": "importieren ihr Napf aus armen L\u00e4ndern", "arbeitsbedg": "werden unmenschlich behandelt", "lohng": "karg", "link": "", "score": "3"}, {"domain": "zalando.de", "fairtrade": "7", "arbeitsbed": "8", "lohn": "8", "fairtradeg": "verkauft lokale und importierte G\u00fcter", "arbeitsbedg": "werden gut behandelt", "lohng": "viel", "link": "", "score": "8"}, {"domain": "coop.de", "fairtrade": "8", "arbeitsbed": "9", "lohn": "7", "fairtradeg": "verkaufen haupts\u00e4chlich lokale G\u00fcter", "arbeitsbedg": "werden sehr repektvoll behandelt", "lohng": "ausreichend", "link": "", "score": "8"}, {"domain": "tutti.ch", "fairtrade": "8", "arbeitsbed": "8", "lohn": "7", "fairtradeg": "verkauft nur lokal", "arbeitsbedg": "arbeiten hobbym\u00e4ssig da, und m\u00fcssen nur innerhalb der Schweiz versenden", "lohng": "Verkaufspreis minus Lieferung", "link": "", "score": "8"}, {"domain": "mediamarkt.de", "fairtrade": "5", "arbeitsbed": "6", "lohn": "7", "fairtradeg": "verkauft G\u00fcter as aller Welt", "arbeitsbedg": "werden ok behandelt", "lohng": "ausreichend", "link": "", "score": "6"}, {"domain": "mediamarkt.ch", "fairtrade": "5", "arbeitsbed": "6", "lohn": "7", "fairtradeg": "verkauft G\u00fcter as aller Welt", "arbeitsbedg": "werden ok behandelt", "lohng": "ausreichend", "link": "", "score": "6"}, {"domain": "digitec.ch", "fairtrade": "5", "arbeitsbed": "8", "lohn": "8", "fairtradeg": "verkauft G\u00fcter as aller Welt", "arbeitsbedg": "werden gut behandelt", "lohng": "viel", "link": "", "score": "7"}, {"domain": "galaxus.de", "fairtrade": "5", "arbeitsbed": "7", "lohn": "6", "fairtradeg": "verkauft G\u00fcter as aller Welt", "arbeitsbedg": "werden respektvoll behandelt", "lohng": "gen\u00fcgend", "link": "", "score": "6"}, {"domain": "galaxus.ch", "fairtrade": "5", "arbeitsbed": "7", "lohn": "6", "fairtradeg": "verkauft G\u00fcter as aller Welt", "arbeitsbedg": "werden respektvoll behandelt", "lohng": "gen\u00fcgend", "link": "", "score": "6"}, {"domain": "galaxus.com", "fairtrade": "5", "arbeitsbed": "7", "lohn": "6", "fairtradeg": "verkauft G\u00fcter as aller Welt", "arbeitsbedg": "werden respektvoll behandelt", "lohng": "gen\u00fcgend", "link": "", "score": "6"}, {"domain": "store.nike.com", "fairtrade": "2", "arbeitsbed": "1", "lohn": "1", "fairtradeg": "hat sweatshops in Asien", "arbeitsbedg": "sind fast Sklaven", "lohng": "unter Existenzminimum", "link": "", "score": "1"}, {"domain": "jugendhackt.org", "fairtrade": "10", "arbeitsbed": "10", "lohn": "10", "fairtradeg": "hat Locations in Deutschland und der Schweiz", "arbeitsbedg": "sind freie Menschen", "lohng": "absolut perfekt", "link": "https://sites.psu.edu/psy533wheeler/2017/04/21/psy-533-u05-shopping-on-wish-com-who-is-ethically-responsible/", "score": "10"}];

(async function(){


current_url = await getCurrentURL();

for(entry of datenbank){
	if(current_url.includes(entry["domain"])){
		let scoreText = entry["domain"] + " " + entry["fairtradeg"] + ", die Arbeiter " + entry["arbeitsbedg"] + " und werden " + entry["lohng"] + " bezahlt.";

		document.getElementById("score-text").innerHTML = scoreText;
		document.getElementById("score").innerHTML = "AwareShopper-Score: " + entry["score"];
		document.getElementById("points1").innerHTML = "Fairtrade: " + entry["fairtrade"] + "/10";
		document.getElementById("points2").innerHTML = "Arbeitsbedingungen: " + entry["arbeitsbed"] + "/10";
		document.getElementById("points3").innerHTML = "Arbeiterlohn: " + entry["lohn"] + "/10";

		let background = document.querySelector("#background");

		switch (true) {
			case entry["score"]<3:
				background.style.backgroundImage = "linear-gradient(to bottom, #F00000, #F86969)";
				break;
			case entry["score"]<5:
				background.style.backgroundImage = "linear-gradient(to bottom, #F06900, #F99E69)";
				break;
			case entry["score"]<7:
				background.style.backgroundImage = "linear-gradient(to bottom, #FAC800, #FFE069)";
				break;
			case entry["score"]<9:
				background.style.backgroundImage = "linear-gradient(to bottom, #69FA00, #69FA69)";
				break;
			case entry["score"]<=10:
				background.style.backgroundImage = "linear-gradient(to bottom, #40E0D0, #FF8C00, #FF0080)";
				break;
			default:
				break;

		}

	}
}
})()
