function httpGet(url){
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send(null);
    return request.responseText;
};

const json_obj = JSON.parse(httpGet("https://api.randomuser.me/?results=10"));//transformando em um objeto json

const  tbody = document.createElement("tbody");

const  table = document.querySelector("table");

var nightModeIsActivate = false;

for(var i = 0; i < json_obj.results.length; i++){
    
    let line = document.createElement("tr");

    line.innerHTML += "<td>" + json_obj.results[i].name.title + " " + json_obj.results[i].name.first + "</td>";
    line.innerHTML += "<td>" + json_obj.results[i].name.last + "</td>";
    line.innerHTML += "<td>" + json_obj.results[i].dob.age + "</td>";
    line.innerHTML += "<td>" + json_obj.results[i].location.city + "</td>";
    line.innerHTML += "<td>" + "<img src = '" + json_obj.results[i].picture.thumbnail + "' alt = 'pictures'/>"+ "</td>";
    line.innerHTML += "</tr>";

    tbody.appendChild(line);
};

table.appendChild(tbody);


function nightMode(){
    const body = document.body;
    body.classList.toggle("dark-mode");
    nightModeIsActivate = true;
};
