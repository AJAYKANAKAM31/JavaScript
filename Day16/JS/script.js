let obj = [
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg",
    name: "India",
    population: "1,380,004,385",
    region: "Asia",
    capital: "Delhi",
  },

  {
    img: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Vermin_Supreme_USA_flag.svg",
    name: "USA",
    population: "331,449,281",
    region: "North America",
    capital: "Washington, D.C.",
  },

  {
    img: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg",
    name: "RUSSIA",
    population: "145,934,462",
    region: "northern Eurasia",
    capital: "Moscow",
  },

  {
    img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
    name: "CHINA",
    population: "1,439,323,776",
    region: "Asia",
    capital: "Beijing",
  },

  {
    img: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg",
    name: "JAPAN",
    population: "126,476,461",
    region: "Asia",
    capital: "Tokyo",
  },

  {
    img: "https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg",
    name: "AUSTRALIA",
    population: "25,694,393",
    region: "Oceania",
    capital: "Canberra",
  },

  {
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931958%29.svg",
    name: "FRANCE",
    population: "65,273,511",
    region: "Europe",
    capital: "Paris",
  },

  {
    img: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg",
    name: "BRAZIL",
    population: "212,559,417",
    region: "South America",
    capital: "Brasilia",
  },
];

const mainheader = document.createElement("h1");
mainheader.innerHTML = "Countries and Details";
document.body.appendChild(mainheader);

const startcont = document.createElement("div");
startcont.setAttribute("id", "main-div");
document.body.appendChild(startcont);

function flagsFun(obj) {
  const container = document.createElement("div");
  container.setAttribute("class", "main-container");
  startcont.appendChild(container);

  const flag = document.createElement("img");
  flag.setAttribute("class", "img");
  flag.setAttribute("src", obj.img);
  container.appendChild(flag);

  const country = document.createElement("div");
  country.setAttribute("id", "country");
  container.appendChild(country);

  const header = document.createElement("h3");
  header.innerHTML = obj.name;
  country.appendChild(header);

  const para1 = document.createElement("p");
  para1.innerHTML = `<b>Population: </b>` + obj.population;
  country.appendChild(para1);

  const para2 = document.createElement("p");
  para2.innerHTML = `<b>Region: </b>` + obj.region;
  country.appendChild(para2);

  const para3 = document.createElement("p");
  para3.innerHTML = `<b>Capital: </b>` + obj.capital;
  country.appendChild(para3);
}

for (let i = 0; i < obj.length; i++) {
  flagsFun(obj[i]);
}
