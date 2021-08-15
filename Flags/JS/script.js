var linkurl = "https://restcountries.eu/rest/v2/all";
var t;
var xhr = new XMLHttpRequest();
xhr.open("GET", linkurl);
xhr.onload = function () {
  t = JSON.parse(this.response);
  console.log(t);

  var a = document.createElement("div");
  a.className = "main";
  document.body.append(a);

  for (let i = 0; i < t.length; i++) {
    var b = document.createElement("div");
    b.className = "container";
    a.append(b);

    var c = document.createElement("img");
    c.src = `${t[i].flag}`;
    b.append(c);

    var div_ins = document.createElement("div");
    div_ins.id = "inside";
    div_ins.innerHTML = `
    <h1>${t[i].name}</h1>
    <p><b>Capital:</b>${t[i].capital}</p>
    <p><b>Area:</b>${t[i].area}</p>
    <p><b>Population:</b>${t[i].population}</p>
    `;
    b.append(div_ins);
  }
};
xhr.onerror = function () {
  console.log(this.statusText);
};
xhr.send();
