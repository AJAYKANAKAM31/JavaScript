var obj = [
  {
    eventno: "Event 1",
    image: "IMG/img1.jpg",
    eventdate: "23-May-2020",
    seats: "Seats available: 23",
    available: "Book Now",
  },
  {
    eventno: "Event 2",
    image: "IMG/img2.jpg",
    eventdate: "23-May-2020",
    seats: "Seats available: 23",
    available: "Book Now",
  },
  {
    eventno: "Event 3",
    image: "IMG/img3.jpg",
    eventdate: "23-May-2020",
    seats: "Seats available: 0",
    available: "Sold out",
  },
  {
    eventno: "Event 4",
    image: "IMG/img4.jpg",
    eventdate: "23-May-2020",
    seats: "Seats available: 23",
    available: "Book Now",
  },
  {
    eventno: "Event 5",
    image: "IMG/img5.jpg",
    eventdate: "23-May-2020",
    seats: "Seats available: 23",
    available: "Book Now",
  },
  {
    eventno: "Event 6",
    image: "IMG/img6.jpg",
    eventdate: "23-May-2020",
    seats: "Seats available: 0",
    available: "Sold out",
  },
  {
    eventno: "Event 7",
    image: "IMG/img7.jpg",
    eventdate: "23-May-2020",
    seats: "Seats available: 23",
    available: "Book Now",
  },
  {
    eventno: "Event 8",
    image: "IMG/img8.jpg",
    eventdate: "23-May-2020",
    seats: "Seats available: 23",
    available: "Book Now",
  },
  {
    eventno: "Event 9",
    image: "IMG/img9.jfif",
    eventdate: "23-May-2020",
    seats: "Seats available: 23",
    available: "Book Now",
  },

  {
    eventno: "Event 10",
    image: "IMG/img10.jpg",
    eventdate: "23-May-2020",
    seats: "Seats available: 23",
    available: "Book Now",
  },

  {
    eventno: "Event 11",
    image: "IMG/img11.jpg",
    eventdate: "23-May-2020",
    seats: "Seats available: 0",
    available: "Sold Out",
  },

  {
    eventno: "Event 12",
    image: "IMG/img12.jpg",
    eventdate: "23-May-2020",
    seats: "Seats available: 23",
    available: "Book Now",
  },
];
// console.log(obj[0].eventno);

var block = document.createElement("div");
block.id = "main-container";
document.body.append(block);

for (let i = 0; i < obj.length; i++) {
  var container = document.createElement("div");
  container.className = "container";
  block.append(container);

  var eventno = document.createElement("h3");
  eventno.innerHTML = `${obj[i].eventno}`;
  container.append(eventno);

  var imgblock = document.createElement("div");
  imgblock.className = "block";
  container.append(imgblock);

  var main = document.createElement("div");
  main.className = "main";
  main.innerHTML = `
  <img src=${obj[i].image} alt="" />`;
  imgblock.append(main);

  var content = document.createElement("div");
  content.className = "content";
  content.innerHTML = `
  <p>${obj[i].eventdate}</p>
  <p>${obj[i].seats}</p>
  <button>${obj[i].available}</button>`;
  imgblock.append(content);
}
