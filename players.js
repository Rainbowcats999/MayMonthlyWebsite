const players = [
  {
    firstName: "Aleksander",
    lastName: "Barkov",
    position: "Center",
    age: "29",
    photo: "imgs/aleksander-barkov.png",
  },

  {
    firstName: "Evan",
    lastName: " Rodrigues",
    position: "Center",
    age: "31",
    photo: "imgs/evan-rodrigues.png",
  },

  {
    firstName: "Sam",
    lastName: "Bennett",
    position: "Center",
    age: "28",
    photo: "imgs/sam-bennett.png",
  },

  {
    firstName: "Niko",
    lastName: "Mikkola",
    position: "Defenseman",
    age: "29",
    photo: "imgs/niko-mikkola.png",
  },

  {
    firstName: "Jonah",
    lastName: "Gadjovich",
    position: "Left wing",
    age: "26",
    photo: "imgs/jonah-gadjovich.png",
  },

  {
    firstName: "Mackie",
    lastName: "Samoskevich",
    position: "Center",
    age: "22",
    photo: "imgs/mackie-samoskeich.png",
  },

  {
    firstName: "Olli",
    lastName: "Jokinen",
    position: "Center",
    age: "46",
    photo: "imgs/olli-jokinen.png",
  },

  {
    firstName: "Nikita",
    lastName: "Gusev",
    position: "Left wing",
    age: "32",
    photo: "imgs/nikita-gusev.png",
  },

  {
    firstName: "Scott",
    lastName: "Mellanby",
    position: "Right wing",
    age: "58",
    photo: "imgs/licensed-image.jpg",
  },

  {
    firstName: "Todd",
    lastName: "Bertuzzi",
    position: "Right wing",
    age: "50",
    photo: "imgs/todd-bertuzzi.png",
  },

  {
    firstName: "Gustav",
    lastName: "Forsling",
    position: "defenceman",
    age: "28",
    photo: "imgs/gustav-forsling.png",
  },

  {
    firstName: "Pavel",
    lastName: "Bure",
    position: "Right wing",
    age: "54",
    photo: "imgs/bure_2018-10-27.jpg",
  },

  {
    firstName: "Radek",
    lastName: "Dvorak",
    position: "Right wing",
    age: "48",
    photo: "imgs/radek-dvorak.png",
  },

  {
    firstName: "Joshua",
    lastName: "Brown",
    position: "Defense",
    age: "31",
    photo: "imgs/joshua-brown.jpg",
  },

  {
    firstName: "Ed",
    lastName: "Belfour",
    position: "Goaltender",
    age: "60",
    photo: "imgs/ed-belfour.jpg",
  },

  {
    firstName: "Krys",
    lastName: "Barch",
    position: "Right wing",
    age: "45",
    photo: "imgs/krys-barch.webp",
  },

  {
    firstName: "Nick",
    lastName: "Bjugstad",
    position: "Right wing",
    age: "32",
    photo: "imgs/nick-bjugstad.png",
  },

  {
    firstName: "Steve",
    lastName: "Bernier",
    position: "Right wing",
    age: "40",
    photo: "imgs/steve-bernier.png",
  },

  {
    firstName: "Christian",
    lastName: "Berglund",
    position: "Left wing",
    age: "45",
    photo: "imgs/christian-berglund.jpg",
  },

  {
    firstName: "Brian",
    lastName: "Boyle",
    position: "Center",
    age: "40",
    photo: "imgs/brian-boyle.png",
  },

  {
    firstName: "Byron",
    lastName: "Bitz",
    position: "3rd or 4th line forward",
    age: "40",
    photo: "imgs/byron-bitz.png",
  },

  {
    firstName: "Aaron",
    lastName: "Ekblad",
    position: "Defenseman",
    age: "29",
    photo: "imgs/aaron-ekblad.png",
  },

  {
    firstName: "Sam",
    lastName: "Reinhart",
    position: "Right wing",
    age: "29",
    photo: "imgs/sam-reinhart.png",
  },

  {
    firstName: "Matthew",
    lastName: "Tkachuk",
    position: "Left wing",
    age: "27",
    photo: "https://picsum.photos/200/300",
  },

  {
    firstName: "Uvis",
    lastName: "Balinskis",
    position: "Defenseman",
    age: "28",
    photo: "https://picsum.photos/200/300",
  },

  {
    firstName: "Stephen",
    lastName: "Weiss",
    position: "Center",
    age: "42",
    photo: "https://picsum.photos/200/300",
  },

  {
    firstName: "Troy",
    lastName: "Brouwer",
    position: "Right wing",
    age: "39",
    photo: "https://picsum.photos/200/300",
  },

  {
    firstName: "Johanthan",
    lastName: "Hurberdeau",
    position: "Left wing",
    age: "31",
    photo: "https://picsum.photos/200/300",
  },

  {
    firstName: "Bobby",
    lastName: "Butler",
    position: "Right wing",
    age: "38",
    photo: "https://picsum.photos/200/300",
  },

  {
    firstName: "Connor",
    lastName: "Brickley",
    position: "Right wing",
    age: "50",
    photo: "https://picsum.photos/200/300",
  },

  {
    firstName: "David",
    lastName: "Booth",
    position: "Right wing",
    age: "50",
    photo: "https://picsum.photos/200/300",
  },

  {
    firstName: "Nick",
    lastName: "Boynton",
    position: "Right wing",
    age: "50",
    photo: "https://picsum.photos/200/300",
  },

  {
    firstName: "T.J.",
    lastName: "Brennan",
    position: "Right wing",
    age: "50",
    photo: "https://picsum.photos/200/300",
  },

  {
    firstName: "Dave",
    lastName: "Bolland",
    position: "Right wing",
    age: "50",
    photo: "https://picsum.photos/200/300",
  },

  {
    firstName: "Keith",
    lastName: "Ballard",
    position: "Right wing",
    age: "50",
    photo: "https://picsum.photos/200/300",
  },

  {
    firstName: "David",
    lastName: "Brine",
    position: "Right wing",
    age: "50",
    photo: "https://picsum.photos/200/300",
  },

  {
    firstName: "Niclas",
    lastName: "Bergfors",
    position: "Right wing",
    age: "50",
    photo: "https://picsum.photos/200/300",
  },

  {
    firstName: "Dmitry",
    lastName: "Kulikov",
    position: "Right wing",
    age: "50",
    photo: "https://picsum.photos/200/300",
  },

  {
    firstName: "Anton",
    lastName: "Lundell",
    position: "Right wing",
    age: "50",
    photo: "https://picsum.photos/200/300",
  },

  {
    firstName: "Eetu",
    lastName: "Luostarinen",
    position: "Right wing",
    age: "50",
    photo: "https://picsum.photos/200/300",
  },

  {
    firstName: "Sergei",
    lastName: "Bobrovosky",
    position: "Right wing",
    age: "50",
    photo: "https://picsum.photos/200/300",
  },

  {
    firstName: "Reto",
    lastName: "Berra",
    position: "Right wing",
    age: "50",
    photo: "https://picsum.photos/200/300",
  },

  {
    firstName: "Ed",
    lastName: "Jovanovski",
    position: "Right wing",
    age: "50",
    photo: "https://picsum.photos/200/300",
  },

  {
    firstName: "Sean",
    lastName: "Bergenheim",
    position: "Right wing",
    age: "50",
    photo: "https://picsum.photos/200/300",
  },

  {
    firstName: "Chase",
    lastName: "Balisy",
    position: "Right wing",
    age: "50",
    photo: "https://picsum.photos/200/300",
  },

  {
    firstName: "Henrik",
    lastName: "Borgstrom",
    position: "Right wing",
    age: "50",
    photo: "https://picsum.photos/200/300",
  },

  {
    firstName: "Derick",
    lastName: "Brassard",
    position: "Right wing",
    age: "50",
    photo: "https://picsum.photos/200/300",
  },

  {
    firstName: "Jay",
    lastName: "Bouwmeester",
    position: "Right wing",
    age: "50",
    photo: "https://picsum.photos/200/300",
  },

  {
    firstName: "Wade",
    lastName: "Belak",
    position: "Right wing",
    age: "50",
    photo: "https://picsum.photos/200/300",
  },

  {
    firstName: "Dan",
    lastName: "Boyle",
    position: "Right wing",
    age: "50",
    photo: "https://picsum.photos/200/300",
  },

  {
    firstName: "Brad",
    lastName: "Boyes",
    position: "Right wing",
    age: "50",
    photo: "https://picsum.photos/200/300",
  },

  {
    firstName: "Jonathan",
    lastName: "Marchessault",
    position: "Right wing",
    age: "50",
    photo: "https://picsum.photos/200/300",
  },

  {
    firstName: "Paul",
    lastName: "Maurice",
    position: "Coach",
    age: "58",
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

function type(arc, cont) {
  let string = arc.split("");
  for (let i = 0; i < string.length; i++) {
    setTimeout(
      () => {
        cont.append(string[i]);
      },
      i * 60,
      string[i]
    );
  }
}
