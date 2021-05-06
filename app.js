function httpGet(url){
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send(null);
    return request.responseText;
};

const jsonOjbect = JSON.parse(httpGet("https://api.randomuser.me/?results=10"));//transformando em um objeto json

const  tbody = document.createElement("tbody");

const  table = document.querySelector("table");

var nightModeIsActivate = false;

for(let person of jsonOjbect.results){
    
    let line = document.createElement("tr");

    line.innerHTML += "<td>" + person.name.title + " " + person.name.first + "</td>";
    line.innerHTML += "<td>" + person.name.last + "</td>";
    line.innerHTML += "<td>" + person.dob.age + "</td>";
    line.innerHTML += "<td>" + person.location.city + "</td>";
    line.innerHTML += "<td>" + "<img src = '" + person.picture.thumbnail + "' alt = 'pictures'/>"+ "</td>";
    line.innerHTML += "</tr>";

    tbody.appendChild(line);
};

table.appendChild(tbody);


function nightMode(){
    const body = document.body;
    body.classList.toggle("dark-mode");
    nightModeIsActivate = true;
};
