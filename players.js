const players = [
  {
    firstName: "Aleksander",
    lastName: "Barkov",
    position: "Center",
    age: "29",
    photo: "imgs/aleksander-barkov.png",
    pic: "imgs/puck.avif", //insert new immage
    photoALT: "", //insert new immage
    fact: "insert the fact here",
    status: true,
  },

  {
    firstName: "Evan",
    lastName: " Rodrigues",
    position: "Center",
    age: "31",
    photo: "imgs/evan-rodrigues.png",
    pic: "imgs/wade-belak.png", //insert new immage
    photoALT: "imgs/wade-belak.png", //insert new immage
    fact: "insert the fact here",
    status: true,
  },

  {
    firstName: "Sam",
    lastName: "Bennett",
    position: "Center",
    age: "28",
    photo: "imgs/sam-bennett.png",
    pic: "imgs/wade-belak.png", //insert new immage
    photoALT: "imgs/wade-belak.png", //insert new immage
    fact: "insert the fact here",
    status: true,
  },

  {
    firstName: "Niko",
    lastName: "Mikkola",
    position: "Forward",
    age: "29",
    photo: "imgs/niko-mikkola.png",
    pic: "imgs/wade-belak.png", //insert new immage
    photoALT: "imgs/wade-belak.png", //insert new immage
    fact: "insert the fact here",
    status: true,
  },

  {
    firstName: "Jonah",
    lastName: "Gadjovich",
    position: "Left wing",
    age: "26",
    photo: "imgs/jonah-gadjovich.png",
    pic: "imgs/wade-belak.png", //insert new immage
    photoALT: "imgs/wade-belak.png", //insert new immage
    fact: "insert the fact here",
    status: true,
  },

  {
    firstName: "Mackie",
    lastName: "Samoskevich",
    position: "Center",
    age: "22",
    photo: "imgs/mackie-samoskeich.png",
    pic: "imgs/wade-belak.png", //insert new immage
    photoALT: "imgs/wade-belak.png", //insert new immage
    fact: "insert the fact here",
    status: true,
  },

  {
    firstName: "Olli",
    lastName: "Jokinen",
    position: "Center",
    age: "46",
    photo: "imgs/olli-jokinen.png",
    pic: "imgs/wade-belak.png", //insert new immage
    photoALT: "imgs/wade-belak.png", //insert new immage
    fact: "insert the fact here",
    status: true,
  },

  {
    firstName: "Nikita",
    lastName: "Gusev",
    position: "Left wing",
    age: "32",
    photo: "imgs/nikita-gusev.png",
    pic: "imgs/wade-belak.png", //insert new immage
    photoALT: "imgs/wade-belak.png", //insert new immage
    fact: "insert the fact here",
    status: true,
  },

  {
    firstName: "Scott",
    lastName: "Mellanby",
    position: "Right wing",
    age: "58",
    photo: "imgs/licensed-image.jpg",
    pic: "imgs/wade-belak.png", //insert new immage
    photoALT: "imgs/wade-belak.png", //insert new immage
    fact: "insert the fact here",
    status: false,
  },

  {
    firstName: "Todd",
    lastName: "Bertuzzi",
    position: "Right wing",
    age: "50",
    photo: "imgs/todd-bertuzzi.png",
    pic: "imgs/wade-belak.png", //insert new immage
    photoALT: "imgs/wade-belak.png", //insert new immage
    fact: "insert the fact here",
    status: false,
  },

  {
    firstName: "Gustav",
    lastName: "Forsling",
    position: "defenceman",
    age: "28",
    photo: "imgs/gustav-forsling.png",
    pic: "imgs/wade-belak.png", //insert new immage
    photoALT: "imgs/wade-belak.png", //insert new immage
    fact: "insert the fact here",
    status: true,
  },

  {
    firstName: "Pavel",
    lastName: "Bure",
    position: "Right wing",
    age: "54",
    photo: "imgs/bure_2018-10-27.jpg",
    pic: "imgs/wade-belak.png", //insert new immage
    photoALT: "imgs/wade-belak.png", //insert new immage
    fact: "insert the fact here",
    status: false,
  },

  {
    firstName: "Radek",
    lastName: "Dvorak",
    position: "Right wing",
    age: "48",
    photo: "imgs/radek-dvorak.png",
    pic: "imgs/wade-belak.png", //insert new immage
    photoALT: "imgs/wade-belak.png", //insert new immage
    fact: "insert the fact here",
    status: true,
  },

  {
    firstName: "Joshua",
    lastName: "Brown",
    position: "Defense",
    age: "31",
    photo: "imgs/joshua-brown.jpg",
    pic: "imgs/wade-belak.png", //insert new immage
    photoALT: "imgs/wade-belak.png", //insert new immage
    fact: "insert the fact here",
    status: true,
  },

  {
    firstName: "Ed",
    lastName: "Belfour",
    position: "Goaltender",
    age: "60",
    photo: "imgs/ed-belfour.jpg",
    pic: "imgs/wade-belak.png", //insert new immage
    photoALT: "imgs/wade-belak.png", //insert new immage
    fact: "insert the fact here",
    status: false,
  },

  {
    firstName: "Krys",
    lastName: "Barch",
    position: "Right wing",
    age: "45",
    photo: "imgs/krys-barch.webp",
    pic: "imgs/wade-belak.png", //insert new immage
    photoALT: "imgs/wade-belak.png", //insert new immage
    fact: "insert the fact here",
    status: true,
  },

  {
    firstName: "Nick",
    lastName: "Bjugstad",
    position: "Right wing",
    age: "32",
    photo: "imgs/nick-bjugstad.png",
    pic: "imgs/wade-belak.png", //insert new immage
    photoALT: "imgs/wade-belak.png", //insert new immage
    fact: "insert the fact here",
    status: true,
  },

  {
    firstName: "Steve",
    lastName: "Bernier",
    position: "Right wing",
    age: "40",
    photo: "imgs/steve-bernier.png",
    pic: "imgs/wade-belak.png", //insert new immage
    photoALT: "imgs/wade-belak.png", //insert new immage
    fact: "insert the fact here",
    status: true,
  },

  {
    firstName: "Christian",
    lastName: "Berglund",
    position: "Left wing",
    age: "45",
    photo: "imgs/christian-berglund.jpg",
    pic: "imgs/wade-belak.png", //insert new immage
    photoALT: "imgs/wade-belak.png", //insert new immage
    fact: "insert the fact here",
    status: true,
  },

  {
    firstName: "Brian",
    lastName: "Boyle",
    position: "Center",
    age: "40",
    photo: "imgs/brian-boyle.png",
    pic: "imgs/wade-belak.png", //insert new immage
    photoALT: "imgs/wade-belak.png", //insert new immage
    fact: "insert the fact here",
    status: true,
  },

  {
    firstName: "Byron",
    lastName: "Bitz",
    position: "forward",
    age: "40",
    photo: "imgs/byron-bitz.png",
    pic: "imgs/wade-belak.png", //insert new immage
    photoALT: "imgs/wade-belak.png", //insert new immage
    fact: "insert the fact here",
    status: true,
  },

  {
    firstName: "Aaron",
    lastName: "Ekblad",
    position: "Defenseman",
    age: "29",
    photo: "imgs/aaron-ekblad.png",
    pic: "imgs/wade-belak.png", //insert new immage
    photoALT: "imgs/wade-belak.png", //insert new immage
    fact: "insert the fact here",
    status: true,
  },

  {
    firstName: "Sam",
    lastName: "Reinhart",
    position: "Right wing",
    age: "29",
    photo: "imgs/sam-reinhart.png",
    pic: "imgs/wade-belak.png", //insert new immage
    photoALT: "imgs/wade-belak.png", //insert new immage
    fact: "insert the fact here",
    status: true,
  },

  {
    firstName: "Matthew",
    lastName: "Tkachuk",
    position: "Left wing",
    age: "27",
    photo: "imgs/matthew-tkachuk.png",
    pic: "imgs/wade-belak.png", //insert new immage
    photoALT: "imgs/wade-belak.png", //insert new immage
    fact: "insert the fact here",
    status: true,
  },

  {
    firstName: "Uvis",
    lastName: "Balinskis",
    position: "Defenseman",
    age: "28",
    photo: "imgs/uvis-balinskis.png",
    pic: "imgs/wade-belak.png", //insert new immage
    photoALT: "imgs/wade-belak.png", //insert new immage
    fact: "insert the fact here",
    status: true,
  },

  {
    firstName: "Stephen",
    lastName: "Weiss",
    position: "Center",
    age: "42",
    photo: "imgs/stephen-weiss.png",
    pic: "imgs/wade-belak.png", //insert new immage
    photoALT: "imgs/wade-belak.png", //insert new immage
    fact: "insert the fact here",
    status: true,
  },

  {
    firstName: "Troy",
    lastName: "Brouwer",
    position: "Right wing",
    age: "39",
    photo: "imgs/troy-brouwer.png",
    pic: "imgs/wade-belak.png", //insert new immage
    photoALT: "imgs/wade-belak.png", //insert new immage
    fact: "insert the fact here",
    status: true,
  },

  {
    firstName: "Johanthan",
    lastName: "Hurberdeau",
    position: "Left wing",
    age: "31",
    photo: "imgs/jonathan-hurberdeau.png",
    pic: "imgs/wade-belak.png", //insert new immage
    photoALT: "imgs/wade-belak.png", //insert new immage
    fact: "insert the fact here",
    status: true,
  },

  {
    firstName: "Bobby",
    lastName: "Butler",
    position: "Right wing",
    age: "38",
    photo: "imgs/bobby-butler.jpg",
    pic: "imgs/wade-belak.png", //insert new immage
    photoALT: "imgs/wade-belak.png", //insert new immage
    fact: "insert the fact here",
    status: true,
  },

  {
    firstName: "Connor",
    lastName: "Brickley",
    position: "Right wing",
    age: "50",
    photo: "imgs/connor-brickley.png",
    pic: "imgs/wade-belak.png", //insert new immage
    photoALT: "imgs/wade-belak.png", //insert new immage
    fact: "insert the fact here",
    status: false,
  },

  {
    firstName: "David",
    lastName: "Booth",
    position: "Right wing",
    age: "50",
    photo: "imgs/david-booth.png",
    pic: "imgs/wade-belak.png", //insert new immage
    photoALT: "imgs/wade-belak.png", //insert new immage
    fact: "insert the fact here",
    status: false,
  },

  {
    firstName: "Nick",
    lastName: "Boynton",
    position: "Right wing",
    age: "50",
    photo: "imgs/nick-boynton.png",
    pic: "imgs/wade-belak.png", //insert new immage
    photoALT: "imgs/wade-belak.png", //insert new immage
    fact: "insert the fact here",
    status: false,
  },

  {
    firstName: "T.J.",
    lastName: "Brennan",
    position: "Right wing",
    age: "50",
    photo: "imgs/T.J. Brennan.png",
    pic: "imgs/wade-belak.png", //insert new immage
    photoALT: "imgs/wade-belak.png", //insert new immage
    fact: "insert the fact here",
    status: false,
  },

  {
    firstName: "Dave",
    lastName: "Bolland",
    position: "Right wing",
    age: "50",
    photo: "imgs/dave-bolland.webp",
    pic: "imgs/wade-belak.png", //insert new immage
    photoALT: "imgs/wade-belak.png", //insert new immage
    fact: "insert the fact here",
    status: false,
  },

  {
    firstName: "Keith",
    lastName: "Ballard",
    position: "Right wing",
    age: "50",
    photo: "imgs/keith ballard.png",
    pic: "imgs/wade-belak.png", //insert new immage
    photoALT: "imgs/wade-belak.png", //insert new immage
    fact: "insert the fact here",
    status: false,
  },

  {
    firstName: "David",
    lastName: "Brine",
    position: "Right wing",
    age: "50",
    photo: "imgs/david-brine.jpg",
    pic: "imgs/wade-belak.png", //insert new immage
    photoALT: "imgs/wade-belak.png", //insert new immage
    fact: "insert the fact here",
    status: false,
  },

  {
    firstName: "Niclas",
    lastName: "Bergfors",
    position: "Right wing",
    age: "50",
    photo: "imgs/niclas-bergfors.png",
    pic: "imgs/wade-belak.png", //insert new immage
    photoALT: "imgs/wade-belak.png", //insert new immage
    fact: "insert the fact here",
    status: false,
  },

  {
    firstName: "Dmitry",
    lastName: "Kulikov",
    position: "Right wing",
    age: "50",
    photo: "imgs/dmitry-kulikov.png",
    pic: "imgs/wade-belak.png", //insert new immage
    photoALT: "imgs/wade-belak.png", //insert new immage
    fact: "insert the fact here",
    status: false,
  },

  {
    firstName: "Anton",
    lastName: "Lundell",
    position: "Right wing",
    age: "50",
    photo: "imgs/anton lundell.png",
    pic: "imgs/wade-belak.png", //insert new immage
    photoALT: "imgs/wade-belak.png", //insert new immage
    fact: "insert the fact here",
    status: false,
  },

  {
    firstName: "Eetu",
    lastName: "Luostarinen",
    position: "Right wing",
    age: "50",
    photo: "imgs/eetu-luostarinen.png",
    pic: "imgs/wade-belak.png", //insert new immage
    photoALT: "imgs/wade-belak.png", //insert new immage
    fact: "insert the fact here",
    status: false,
  },

  {
    firstName: "Sergei",
    lastName: "Bobrovosky",
    position: "Right wing",
    age: "50",
    photo: "imgs/sergei-bobrovosky.png",
    pic: "imgs/wade-belak.png", //insert new immage
    photoALT: "imgs/wade-belak.png", //insert new immage
    fact: "insert the fact here",
    status: false,
  },

  {
    firstName: "Reto",
    lastName: "Berra",
    position: "Right wing",
    age: "50",
    photo: "imgs/reto-berra.png",
    pic: "imgs/wade-belak.png", //insert new immage
    photoALT: "imgs/wade-belak.png", //insert new immage
    fact: "insert the fact here",
    status: false,
  },

  {
    firstName: "Ed",
    lastName: "Jovanovski",
    position: "Right wing",
    age: "50",
    photo: "imgs/ed jovanovski.png",
    pic: "imgs/wade-belak.png", //insert new immage
    photoALT: "imgs/wade-belak.png", //insert new immage
    fact: "insert the fact here",
    status: false,
  },

  {
    firstName: "Sean",
    lastName: "Bergenheim",
    position: "Right wing",
    age: "50",
    photo: "imgs/sean-bergenhiem.png",
    pic: "imgs/wade-belak.png", //insert new immage
    photoALT: "imgs/wade-belak.png", //insert new immage
    fact: "insert the fact here",
    status: false,
  },

  {
    firstName: "Chase",
    lastName: "Balisy",
    position: "Right wing",
    age: "50",
    photo: "imgs/chase-balisy.jpg",
    pic: "imgs/wade-belak.png", //insert new immage
    photoALT: "imgs/wade-belak.png", //insert new immage
    fact: "insert the fact here",
    status: false,
  },

  {
    firstName: "Henrik",
    lastName: "Borgstrom",
    position: "Right wing",
    age: "50",
    photo: "imgs/henrik-borgstrom.png",
    pic: "imgs/wade-belak.png", //insert new immage
    photoALT: "imgs/wade-belak.png", //insert new immage
    fact: "insert the fact here",
    status: false,
    debut: 2018,
  },

  {
    firstName: "Derick",
    lastName: "Brassard",
    position: "Right wing",
    age: "50",
    photo: "imgs/derick brassard.png",
    pic: "imgs/wade-belak.png", //insert new immage
    photoALT: "imgs/wade-belak.png", //insert new immage
    fact: "insert the fact here",
    status: false,
    debut: 2019,
  },

  {
    firstName: "Jay",
    lastName: "Bouwmeester",
    position: "Right wing",
    age: "50",
    photo: "imgs/jay-bouwmeester.png",
    pic: "imgs/wade-belak.png", //insert new immage
    photoALT: "imgs/wade-belak.png", //insert new immage
    fact: "insert the fact here",
    status: false,
    debut: 2002,
  },

  {
    firstName: "Wade",
    lastName: "Belak",
    position: "Right wing",
    age: "50",
    photo: "imgs/wade-belak.png",
    pic: "imgs/wade-belak.png", //insert new immage
    photoALT: "imgs/wade-belak.png", //insert new immage
    fact: "insert the fact here",
    status: false,
    debut: 2008,
  },

  {
    firstName: "Dan",
    lastName: "Boyle",
    position: "Right wing",
    age: "50",
    photo: "imgs/dan boyle.png",
    pic: "imgs/wade-belak.png", //insert new immage
    photoALT: "imgs/wade-belak.png", //insert new immage
    fact: "insert the fact here",
    status: false,
    debut: 1998,
  },

  {
    firstName: "Brad",
    lastName: "Boyes",
    position: "Right wing",
    age: "43",
    photo: "imgs/brad boyes.png",
    pic: "imgs/wade-belak.png", //insert new immage
    photoALT: "imgs/wade-belak.png", //insert new immage
    fact: "insert the fact here",
    status: false,
    debut: 2003,
  },

  {
    firstName: "Jonathan",
    lastName: "Marchessault",
    position: "Right wing",
    age: "34",
    photo: "imgs/jonathan marchessault.png",
    pic: "imgs/wade-belak.png", //insert new immage
    photoALT: "imgs/wade-belak.png", //insert new immage
    fact: "insert the fact here",
    status: true,
    debut: 2016,
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
    case "index.html":
      destination = "i1";
      text = `The Florida Panthers are an NHL hockey team established in 1993, named after the Florida panther, a critically endangered subspecies of cougar. They are the southernmost team in the league and play their home games at the Amerant Bank Arena in Sunrise, Florida. The team has a unique history, including their first Stanley Cup win in 2024, and a team culture featuring traditions like fans throwing rubber rats on the ice. 
Historical Context:
Panther as Symbol:
The team's name and logo are a direct reference to the Florida panther, a symbol of Florida's natural beauty and conservation efforts. 
Hockey History:
The Panthers were founded as one of two expansion teams in 1993, and have since achieved significant milestones, including reaching the Stanley Cup Finals three times. 
Unique traditions:
The team is known for their fan traditions, including the practice of throwing rubber rats on the ice, which originated from a locker room incident involving a rat and forward Scott Mellanby. 
Conservation Efforts:
The Panthers support conservation efforts for the Florida panther, recognizing the importance of protecting this endangered species. 
Recent Accomplishments:
2024 Stanley Cup Win:
.
In 2024, the Panthers achieved their first Stanley Cup victory, defeating the Edmonton Oilers in a seven-game series.
Playoff Runs:
.
They have made three consecutive appearances in the Stanley Cup Finals, showcasing their growth and competitiveness.
Team Culture:
.
The Panthers have developed a strong team culture, fostering a sense of community and pride within the team and among their fans. 
In summary, the Florida Panthers are an NHL team with a strong connection to the endangered Florida panther, a history marked by both challenges and triumphs, and a unique team culture that sets them apart in the league.`;
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
