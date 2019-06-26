// Retrieiving data form URL and logging to console

function getData(cb) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           // cb(JSON.parse(this.responseText));
           cb(JSON.parse(xhr.responseText));
        }
    };

    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos");
    xhr.send();
    xhr.addEventListener("load", function(response){
        console.log(response);
    });
}


// Writing API data to "data" div

/* getData(writeToDocument);

 function writeToDocument(data) {
   
    var el = document.getElementById("data");
    el.innerHTML = " ";
    
        data.forEach(function(item) {
            el.innerHTML += "<p>" + item.title + "</p>";
        });
    
} */
