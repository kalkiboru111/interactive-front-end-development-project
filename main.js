function getData(type, cb) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", "https://rest.coinapi.io/v1/exchangerate/BTC?apikey=2D2D1A7A-F554-4B2E-966A-F8585BB7A0EA");
    xhr.send();

}

function writeToDocument(type) {
    var el = document.getElementById("data");
    el.innerHTML = " ";

    getData(type, function(data) {
        data = data.results;

        data.forEach(function(item) {
            el.innerHTML += "<p>" + item.name + "</p>";
        });
    });
}
