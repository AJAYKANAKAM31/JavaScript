// Default displaying 50 pokemons
pokemon(50);
var noofpoke;

// Used to specify custom number of pokemons
function showNoOfPoke() {
  noofpoke = document.getElementById("number").value;
  console.log(noofpoke);
  if (noofpoke < 0) {
    window.alert("Enter positive number");
    resetinput();
  } else if (noofpoke == 0) {
    window.alert("Please Enter any number greater than ZERO!!");
    resetinput();
  } else {
    contai.innerHTML = "";
    pokemon(noofpoke);
  }
  resetinput();
}

// On reset we need to have default 50 pokemons
function defaultPoke() {
  contai.innerHTML = "";
  pokemon(50);
  resetinput();
}

// Reseting input once submit
function resetinput() {
  document.getElementById("number").value = "";
}

// Creating main container
var contai = document.createElement("div");
contai.innerHTML = "";
contai.className = "container";
document.body.append(contai);

// Fetching main API
async function pokemon(x) {
  let pok_api = [];
  try {
    pok_api = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${x}`);
  } catch (err) {
    alert(err); // TypeError: failed to fetch
  }
  const data = await pok_api.json();
  // console.log(data);

  let rslt_len = [];
  rslt_len = data["results"];
  // console.log(rslt_len);
  // indiv_pokemon(rslt_len[0]);
  for (let i = 0; i < rslt_len.length; i++) {
    const a = rslt_len[i];
    indiv_pokemon(a);
  }
}

// Taking individual pokemons data from the API
async function indiv_pokemon(a) {
  var img;
  var abili_arr = [];
  var movesofpokemon = [];
  var char_name = a.name;
  var char_toupper = char_name.toUpperCase();
  // console.log(char_name);

  // Taking abilitiles from another URL
  const url = a.url;
  let data = [];
  data = await fetch(url);
  let data_json = [];
  data_json = await data.json();
  img = data_json["sprites"]["other"]["dream_world"]["front_default"];
  // console.log("AJ", data_json);
  // console.log("AJ", img);

  // Used to add abilities to list
  abilities(data_json.abilities);
  // Used to add moves to list
  moves_poke(data_json.moves);

  // Creating HTML elements and giving JSON values
  var pokem_indi = document.createElement("div");
  pokem_indi.className = "poke";
  pokem_indi.innerHTML = `
  <p>${char_toupper}</p>
  <div class="img"><img src="${img}" /></div>
  <p>ABILITIES</p>`;
  contai.append(pokem_indi);

  var unord_lst_ability = document.createElement("ul");
  unord_lst_ability.className = "unordered-list-ability";
  pokem_indi.append(unord_lst_ability);

  var para2 = document.createElement("p");
  para2.innerText = "MOVES";
  pokem_indi.append(para2);

  var unord_lst_moves = document.createElement("ul");
  unord_lst_moves.className = "unordered-list-moves";
  pokem_indi.append(unord_lst_moves);

  abili_arr.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    unord_lst_ability.appendChild(li);
  });

  const size = 5;
  const movesofpokemon_5 = movesofpokemon.slice(0, size);

  movesofpokemon_5.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    unord_lst_moves.appendChild(li);
  });

  var weight = document.createElement("h4");
  weight.innerHTML = `<p>Weight</p> ${data_json.weight}`;
  pokem_indi.append(weight);

  function abilities(x) {
    for (i = 0; i < x.length; i++) {
      const abili = x[i].ability;
      abili_arr.push(abili.name);
    }
    // console.log(abili_arr);
  }

  function moves_poke(x) {
    for (let i = 0; i < x.length; i++) {
      var a = x[i].move;
      movesofpokemon.push(a.name);
    }
    // console.log(movesofpokemon);
  }
}
