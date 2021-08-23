function onformsubmit() {
  getvalues();
  resetform();
}

function getvalues() {
  var obj = {};
  obj["firstname"] = document.getElementById("firstname").value;
  obj["lastname"] = document.getElementById("lastname").value;
  obj["address"] = document.getElementById("address").value;
  obj["pincode"] = document.getElementById("pincode").value;

  if (document.getElementById("male").checked) {
    obj["gender"] = document.getElementById("male").value;
  }
  if (document.getElementById("female").checked) {
    obj["gender"] = document.getElementById("female").value;
  }

  obj["food"] = [];

  var count = 0;
  if (document.getElementById("food1").checked) {
    count = count + 1;
    const fod1 = document.getElementById("food1").value;
    obj["food"].push(fod1);
  }
  if (document.getElementById("food2").checked) {
    count = count + 1;
    const fod2 = document.getElementById("food2").value;
    obj["food"].push(fod2);
  }
  if (document.getElementById("food3").checked) {
    count = count + 1;
    const fod3 = document.getElementById("food3").value;
    obj["food"].push(fod3);
  }
  if (document.getElementById("food4").checked) {
    count = count + 1;
    const fod4 = document.getElementById("food4").value;
    obj["food"].push(fod4);
  }
  if (document.getElementById("food5").checked) {
    count = count + 1;
    const fod5 = document.getElementById("food5").value;
    obj["food"].push(fod5);
  }

  obj["state"] = document.getElementById("state").value;
  obj["country"] = document.getElementById("country").value;

  console.log(obj);
  if (count < 2) {
    window.alert("Please select atleast 2 food options");
  } else {
    tablelayout(obj);
    return obj;
  }
}

function resetform() {
  document.getElementById("firstname").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("address").value = "";
  document.getElementById("pincode").value = "";
  document.getElementById("male").checked = false;
  document.getElementById("female").checked = false;
  document.getElementById("food1").checked = false;
  document.getElementById("food2").checked = false;
  document.getElementById("food3").checked = false;
  document.getElementById("food4").checked = false;
  document.getElementById("food5").checked = false;
  document.getElementById("state").value = "";
  document.getElementById("country").value = "";
}

function tablelayout(x) {
  var table = document.getElementById("myTable");
  var row = table.insertRow(table.length);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);
  var cell8 = row.insertCell(7);
  var cell9 = row.insertCell(8);

  cell1.innerHTML = `${x["firstname"]}`;
  cell2.innerHTML = `${x["lastname"]}`;
  cell3.innerHTML = `${x["address"]}`;
  cell4.innerHTML = `${x["pincode"]}`;
  cell5.innerHTML = `${x["gender"]}`;
  const fooditm = x["food"].join(",");
  cell6.innerHTML = `${fooditm}`;
  cell7.innerHTML = `${x["state"]}`;
  cell8.innerHTML = `${x["country"]}`;
  cell9.innerHTML = `<a onclick="deleteitem(this)">Delete</a>`;
}

function deleteitem(x) {
  if (confirm("Are you sure to Delete this?")) {
    var row = x.parentElement.parentElement;
    document.getElementById("myTable").deleteRow(row.rowIndex);
    resetform();
  }
}
