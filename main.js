function getData(type, cb) {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://min-api.cryptocompare.com/data/histohour?fsym=BTC&tsym=USD&limit=10&api_key={d2b45d5710fc09775ad795e0636b58145f76f195cc96def94c38b842c49138d2}")
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText))
        }
    };
}

function getTableHeadhers(obj){
     var tableHeaders = []
     
     Object.keys(obj).forEach(function(key){
          tableHeaders.push(`<td>${key}</td>`);
            })
            
    return `<tr>${tableHeaders}</tr>`;
    
}

function writeToDocument(type){
    var tableRows = [];
     
    var el = document.getElementById("data");
        el.innerHTML = "";
    
    getData(type, function(data){
        data = data.Data
        console.dir(data);
        var tableHeaders = getTableHeadhers(data[0]);

        data.forEach(function(item){
            var dataRow = [];

            Object.keys(item).forEach(function(key){
                dataRow.push(`<td>${item[key]}</td>`);
            })
            
            tableRows.push(`<tr>${dataRow}</tr>`);
            
            // document.getElementById("data").innerHTML += "<p>" + item.time + "</p>";
            el.innerHTML = `<table>${tableHeaders}${tableRows}</table>`.replace(/,/g, "");
            
        })
        
        
    })
   
    
}



