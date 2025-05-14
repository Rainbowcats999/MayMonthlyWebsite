const players = [
  {
    firstName: "Aleksander",
    lastName: "Barkov",
    position: "Center",
    age: "29",
    photo: "https://picsum.photos/200/300",
  },
  {
    firstName: "Evan",
    lastName: " Rodrigues",
    position: "Center",
    age: "31",
    photo: "https://picsum.photos/200/300",
  },
  {
    firstName: "Sam",
    lastName: "Bennett",
    position: "Center",
    age: "28",
    photo: "https://picsum.photos/200/300",
  },
  {
    firstName: "Niko",
    lastName: "Mikkola",
    position: "Defenseman",
    age: "29",
    photo: "https://picsum.photos/200/300",
  },
  {
    firstName: "Jonah",
    lastName: "Gadjovich",
    position: "Left wing",
    age: "26",
    photo: "https://picsum.photos/200/300",
  },
  {
    firstName: "Mackie",
    lastName: "Samoskevich",
    position: "Center",
    age: "22",
    photo: "https://picsum.photos/200/300",
  },
  {
    firstName: "Todd",
    lastName: "Bertuzzi",
    position: "Right wing",
    age: "50",
    photo: "https://picsum.photos/200/300",
  },
  {
    firstName: "Olli",
    lastName: "Jokinen",
    position: "Center",
    age: "46",
    photo: "https://picsum.photos/200/300",
  },
  {
    firstName: "Nikita",
    lastName: "Gusev",
    position: "Left wing",
    age: "32",
    photo: "https://picsum.photos/200/300",
  },
  {
    firstName: "Scott",
    lastName: "Mellanby",
    position: "Right wing",
    age: "58",
    photo: "https://picsum.photos/200/300",
  },
  {
    firstName: "Todd",
    lastName: "Bertuzzi",
    position: "Right wing",
    age: "50",
    photo: "https://picsum.photos/200/300",
  },
  {
    firstName: "Todd",
    lastName: "Bertuzzi",
    position: "Right wing",
    age: "50",
    photo: "https://picsum.photos/200/300",
  },
  {
    firstName: "Todd",
    lastName: "Bertuzzi",
    position: "Right wing",
    age: "50",
    photo: "https://picsum.photos/200/300",
  },
  {
    firstName: "Todd",
    lastName: "Bertuzzi",
    position: "Right wing",
    age: "50",
    photo: "https://picsum.photos/200/300",
  },
  {
    firstName: "Todd",
    lastName: "Bertuzzi",
    position: "Right wing",
    age: "50",
    photo: "https://picsum.photos/200/300",
  },
  {
    firstName: "Todd",
    lastName: "Bertuzzi",
    position: "Right wing",
    age: "50",
    photo: "https://picsum.photos/200/300",
  },
  {
    firstName: "Todd",
    lastName: "Bertuzzi",
    position: "Right wing",
    age: "50",
    photo: "https://picsum.photos/200/300",
  },
  {
    firstName: "Todd",
    lastName: "Bertuzzi",
    position: "Right wing",
    age: "50",
    photo: "https://picsum.photos/200/300",
  },
  {
    firstName: "Todd",
    lastName: "Bertuzzi",
    position: "Right wing",
    age: "50",
    photo: "https://picsum.photos/200/300",
  },
  {
    firstName: "Todd",
    lastName: "Bertuzzi",
    position: "Right wing",
    age: "50",
    photo: "https://picsum.photos/200/300",
  },
  {
    firstName: "Todd",
    lastName: "Bertuzzi",
    position: "Right wing",
    age: "50",
    photo: "https://picsum.photos/200/300",
  },
  {
    firstName: "Todd",
    lastName: "Bertuzzi",
    position: "Right wing",
    age: "50",
    photo: "https://picsum.photos/200/300",
  },
  {
    firstName: "Todd",
    lastName: "Bertuzzi",
    position: "Right wing",
    age: "50",
    photo: "https://picsum.photos/200/300",
  },
  {
    firstName: "Todd",
    lastName: "Bertuzzi",
    position: "Right wing",
    age: "50",
    photo: "https://picsum.photos/200/300",
  },
  {
    firstName: "Todd",
    lastName: "Bertuzzi",
    position: "Right wing",
    age: "50",
    photo: "https://picsum.photos/200/300",
  },
  {
    firstName: "Todd",
    lastName: "Bertuzzi",
    position: "Right wing",
    age: "50",
    photo: "https://picsum.photos/200/300",
  },
  {
    firstName: "Todd",
    lastName: "Bertuzzi",
    position: "Right wing",
    age: "50",
    photo: "https://picsum.photos/200/300",
  },
  {
    firstName: "Todd",
    lastName: "Bertuzzi",
    position: "Right wing",
    age: "50",
    photo: "https://picsum.photos/200/300",
  },
  {
    firstName: "Todd",
    lastName: "Bertuzzi",
    position: "Right wing",
    age: "50",
    photo: "https://picsum.photos/200/300",
  },
];

window.onload = function () {
  let url = window.location.toString().split("/");
  url = url[url.length - 1];
  console.log(url);
  let destination;
  let text;
  switch (url) {
    case "index.html":
      destination = "i0";
      text = `Florida panthers`;
      break;
  }

  type(text, document.getElementById(destination));
};
