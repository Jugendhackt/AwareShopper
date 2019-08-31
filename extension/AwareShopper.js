document.body.style.border = "5px solid green";
current_url = location.host;

file = 'file:///C:/Users/koder/Desktop/Jugendhackt_2019/AwareShopper/extension/Webseiten.csv';
function printFile(file) {
  var reader = new FileReader();
  reader.onload = function(evt) {
    console.log(evt.target.result);
  };
  reader.readAsText(file);
}

function processData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = [];

    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        if (data.length == headers.length) {

            var tarr = [];
            for (var j=0; j<headers.length; j++) {
                tarr.push(headers[j]+":"+data[j]);
            }
            lines.push(tarr);
        }
    }
    // alert(lines);
}

if(current_url == "www.amazon.de"){
  document.body.style.border = "5px gradient red";
}
