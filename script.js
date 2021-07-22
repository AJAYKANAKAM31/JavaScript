var obj = [
    { person: "Name 1", age: "2", company: "GUVI" },
    { person: "Name 2", age: "5", company: "GUVI geek" },
    { person: "Name 3", age: "8", company: "GUVI geek network" },
]

for (i = 0; i < obj.length; i++) {
    var objref = obj[i];
    for (var prop in objref) {
        console.log(prop + '=>' + objref[prop]);
    }
}


for (var prop of obj) {
    console.log(prop);
}

obj.forEach(element => console.log(element))
