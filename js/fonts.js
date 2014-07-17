/*!
 * Color Fonts
 *
 * fonts.js loads (random) fonts using googles web font loader
 * and assigns to useable variable!
 */

var fontOptions = [
  {
    "name": "Open Sans",
    "creator": "Steve Matteson"
  },
  {
    "name": "Roboto",
    "creator": "Christian Robertson"
  },
  {
    "name": "Oswald",
    "creator": "Vernon Adams"
  },
  {
    "name": "Lato",
    "creator": "Łukasz Dziedzic"
  },
  {
    "name": "Droid Sans",
    "creator": "Steve Matteson"
  },
  {
    "name": "PT Sans",
    "creator": "ParaType"
  },
  {
    "name": "Open Sans Condensed",
    "creator": "Steve Matteson"
  },
  {
    "name": "Roboto Condensed",
    "creator": "Christian Robertson"
  },
  {
    "name": "Source Sans Pro",
    "creator": "Paul D. Hunt"
  },
  {
    "name": "Droid Serif",
    "creator": "Steve Matteson"
  },
  {
    "name": "Ubuntu",
    "creator": "Dalton Maag"
  },
  {
    "name": "Raleway",
    "creator": "Multiple Designers"
  },
  {
    "name": "Montserrat",
    "creator": "Julieta Ulanovsky"
  },
  {
    "name": "PT Sans Narrow",
    "creator": "ParaType"
  },
  {
    "name": "Roboto Slab",
    "creator": "Christian Robertson"
  },
  {
    "name": "Yanone Kaffeesatz",
    "creator": "Yanone"
  },
  {
    "name": "Lobster",
    "creator": "Pablo Impallari"
  },
  {
    "name": "Arimo",
    "creator": "Steve Matteson"
  },
  {
    "name": "Merriweather",
    "creator": "Eben Sorkin"
  },
  {
    "name": "Lora",
    "creator": "Cyreal"
  },
  {
    "name": "Arvo",
    "creator": "Anton Koovit"
  },
  {
    "name": "Bitter",
    "creator": "Huerta Tipográfica"
  },
  {
    "name": "Francois One",
    "creator": "Vernon Adams"
  },
  {
    "name": "Oxygen",
    "creator": "Vernon Adams"
  },
  {
    "name": "PT Serif",
    "creator": "ParaType"
  },
  {
    "name": "Dosis",
    "creator": "Pablo Impallari"
  },
  {
    "name": "Shadows Into Light",
    "creator": "Kimberly Geswein"
  },
  {
    "name": "Titillium Web",
    "creator": "Multiple Designers"
  },
  {
    "name": "Noto Sans",
    "creator": "Google"
  },
  {
    "name": "Indie Flower",
    "creator": "Kimberly Geswein"
  },
  {
    "name": "Cabin",
    "creator": "Pablo Impallari"
  },
  {
    "name": "Signika",
    "creator": "Anna Giedryś"
  },
  {
    "name": "Archivo Narrow",
    "creator": "Omnibus-Type"
  },
  {
    "name": "Fjalla One",
    "creator": "Sorkin Type"
  },
  {
    "name": "Ubuntu Condensed",
    "creator": "Dalton Maag"
  },
  {
    "name": "Inconsolata",
    "creator": "Raph Levien"
  },
  {
    "name": "Play",
    "creator": "Jonas Hecksher"
  },
  {
    "name": "Abel",
    "creator": "MADType"
  },
  {
    "name": "Muli",
    "creator": "Vernon Adams"
  },
  {
    "name": "Nunito",
    "creator": "Vernon Adams"
  },
  {
    "name": "Playfair Display",
    "creator": "Claus Eggers Sørensen"
  },
  {
    "name": "Cuprum",
    "creator": "Jovanny Lemonad"
  },
  {
    "name": "Varela Round",
    "creator": "Joe Prince"
  },
  {
    "name": "Rokkitt",
    "creator": "Vernon Adams"
  },
  {
    "name": "Anton",
    "creator": "Vernon Adams"
  },
  {
    "name": "Libre Baskerville",
    "creator": "Impallari Type"
  },
  {
    "name": "Maven Pro",
    "creator": "Joe Prince"
  },
  {
    "name": "Hammersmith One",
    "creator": "Sorkin Type"
  },
  {
    "name": "Pacifico",
    "creator": "Vernon Adams"
  },
  {
    "name": "Bree Serif",
    "creator": "TypeTogether"
  },
  {
    "name": "Asap",
    "creator": "Omnibus-Type"
  },
  {
    "name": "Audiowide",
    "creator": "Astigmatic"
  },
  {
    "name": "Josefin Sans",
    "creator": "Santiago Orozco"
  },
  {
    "name": "Gloria Hallelujah",
    "creator": "Kimberly Geswein"
  },
  {
    "name": "Vollkorn",
    "creator": "Friedrich Althausen"
  },
  {
    "name": "Merriweather Sans",
    "creator": "Eben Sorkin"
  },
  {
    "name": "Armata",
    "creator": "Viktoriya Grabowska"
  },
  {
    "name": "Dancing Script",
    "creator": "Pablo Impallari"
  },
  {
    "name": "Droid Sans Mono",
    "creator": "Steve Matteson"
  },
  {
    "name": "Questrial",
    "creator": "Joe Prince"
  },
  {
    "name": "Noto Serif",
    "creator": "Google"
  },
  {
    "name": "Quicksand",
    "creator": "Andrew Paglinawan"
  },
  {
    "name": "PT Sans Caption",
    "creator": "ParaType"
  },
  {
    "name": "Karla",
    "creator": "Jonny Pinhorn"
  },
  {
    "name": "Alegreya",
    "creator": "Huerta Tipográfica"
  },
  {
    "name": "Quattrocento Sans",
    "creator": "Pablo Impallari"
  },
  {
    "name": "Playfair Display SC",
    "creator": "Claus Eggers Sørensen"
  },
  {
    "name": "News Cycle",
    "creator": "Nathan Willis"
  },
  {
    "name": "Poiret One",
    "creator": "Denis Masharov"
  },
  {
    "name": "Coming Soon",
    "creator": "Open Window"
  },
  {
    "name": "Exo",
    "creator": "Natanael Gama"
  },
  {
    "name": "Ubuntu Mono",
    "creator": "Dalton Maag"
  },
  {
    "name": "Changa One",
    "creator": "Eduardo Tunni"
  },
  {
    "name": "Nobile",
    "creator": "Vernon Adams"
  },
  {
    "name": "Cabin Condensed",
    "creator": "Pablo Impallari"
  },
  {
    "name": "Ropa Sans",
    "creator": "Botio Nikoltchev"
  },
  {
    "name": "Crafty Girls",
    "creator": "Tart Workshop"
  },
  {
    "name": "Pathway Gothic One",
    "creator": "Eduardo Tunni"
  },
  {
    "name": "Pontano Sans",
    "creator": "Vernon Adams"
  },
  {
    "name": "Monda",
    "creator": "Vernon Adams"
  },
  {
    "name": "Gudea",
    "creator": "Agustina Mingote"
  },
  {
    "name": "Sanchez",
    "creator": "Daniel Hernandez"
  },
  {
    "name": "Istok Web",
    "creator": "Andrey V. Panov"
  },
  {
    "name": "Special Elite",
    "creator": "Astigmatic"
  },
  {
    "name": "Squada One",
    "creator": "Joe Prince"
  },
  {
    "name": "Kreon",
    "creator": "Julia Petretta"
  },
  {
    "name": "Noticia Text",
    "creator": "JM Solé"
  },
  {
    "name": "Playball",
    "creator": "TypeSETit"
  },
  {
    "name": "Permanent Marker",
    "creator": "Font Diner"
  },
  {
    "name": "Philosopher",
    "creator": "Jovanny Lemonad"
  },
  {
    "name": "Bubblegum Sans",
    "creator": "Sudtipos"
  },
  {
    "name": "Cantarell",
    "creator": "Dave Crossland"
  },
  {
    "name": "Chewy",
    "creator": "Sideshow"
  },
  {
    "name": "Crimson Text",
    "creator": "Sebastian Kosch"
  },
  {
    "name": "Old Standard TT",
    "creator": "Alexey Kryukov"
  },
  {
    "name": "Crete Round",
    "creator": "TypeTogether"
  },
  {
    "name": "Patua One",
    "creator": "LatinoType"
  },
  {
    "name": "Josefin Slab",
    "creator": "Santiago Orozco"
  },
  {
    "name": "Righteous",
    "creator": "Astigmatic"
  },
  {
    "name": "Rock Salt",
    "creator": "Sideshow"
  },
  {
    "name": "Varela",
    "creator": "Joe Prince"
  },
  {
    "name": "Shadows Into Light Two",
    "creator": "Kimberly Geswein"
  },
  {
    "name": "Rambla",
    "creator": "Martin Sommaruga"
  },
  {
    "name": "Vidaloka",
    "creator": "Cyreal"
  },
  {
    "name": "BenchNine",
    "creator": "Vernon Adams"
  },
  {
    "name": "Economica",
    "creator": "Vicente Lamónaca"
  },
  {
    "name": "Lemon",
    "creator": "Eduardo Tunni"
  },
  {
    "name": "Tinos",
    "creator": "Steve Matteson"
  },
  {
    "name": "Black Ops One",
    "creator": "James Grieshaber"
  },
  {
    "name": "Luckiest Guy",
    "creator": "Astigmatic"
  },
  {
    "name": "Comfortaa",
    "creator": "Johan Aakerlund"
  },
  {
    "name": "Actor",
    "creator": "Thomas Junold"
  },
  {
    "name": "Lobster Two",
    "creator": "Pablo Impallari"
  },
  {
    "name": "Amatic SC",
    "creator": "Vernon Adams"
  },
  {
    "name": "Oleo Script",
    "creator": "soytutype fonts"
  },
  {
    "name": "Bangers",
    "creator": "Vernon Adams"
  },
  {
    "name": "Lusitana",
    "creator": "Ana Paula Megda"
  },
  {
    "name": "Marck Script",
    "creator": "Denis Masharov"
  },
  {
    "name": "Cinzel",
    "creator": "Natanael Gama"
  },
  {
    "name": "Bevan",
    "creator": "Vernon Adams"
  },
  {
    "name": "EB Garamond",
    "creator": "Georg Duffner"
  },
  {
    "name": "Handlee",
    "creator": "Joe Prince"
  },
  {
    "name": "Montserrat Alternates",
    "creator": "Julieta Ulanovsky"
  },
  {
    "name": "Fredoka One",
    "creator": "Milena Brandao"
  },
  {
    "name": "Paytone One",
    "creator": "Vernon Adams"
  },
  {
    "name": "Alfa Slab One",
    "creator": "JM Solé"
  },
  {
    "name": "Source Code Pro",
    "creator": "Paul D. Hunt"
  },
  {
    "name": "Voltaire",
    "creator": "Yvonne Schüttler"
  },
  {
    "name": "Glegoo",
    "creator": "Eduardo Tunni"
  },
  {
    "name": "Calligraffitti",
    "creator": "Open Window"
  },
  {
    "name": "Cardo",
    "creator": "David Perry"
  },
  {
    "name": "Orbitron",
    "creator": "Matt McInerney"
  },
  {
    "name": "Passion One",
    "creator": "Fontstage"
  },
  {
    "name": "Amaranth",
    "creator": "Gesine Todt"
  },
  {
    "name": "Didact Gothic",
    "creator": "Daniel Johnson"
  },
  {
    "name": "Yellowtail",
    "creator": "Astigmatic"
  },
  {
    "name": "Antic Slab",
    "creator": "Santiago Orozco"
  },
  {
    "name": "Molengo",
    "creator": "Denis Jacquerye"
  },
  {
    "name": "Archivo Black",
    "creator": "Omnibus-Type"
  },
  {
    "name": "Quattrocento",
    "creator": "Pablo Impallari"
  },
  {
    "name": "Satisfy",
    "creator": "Sideshow"
  },
  {
    "name": "Jockey One",
    "creator": "TypeTogether"
  },
  {
    "name": "Marvel",
    "creator": "Carolina Trebol"
  },
  {
    "name": "Scada",
    "creator": "Jovanny Lemonad"
  },
  {
    "name": "Exo 2",
    "creator": "Natanael Gama"
  },
  {
    "name": "Architects Daughter",
    "creator": "Kimberly Geswein"
  },
  {
    "name": "Unkempt",
    "creator": "Sideshow"
  },
  {
    "name": "Gentium Book Basic",
    "creator": "Victor Gaultney"
  },
  {
    "name": "Pinyon Script",
    "creator": "Nicole Fally"
  },
  {
    "name": "Copse",
    "creator": "Dan Rhatigan"
  },
  {
    "name": "Domine",
    "creator": "Impallari Type"
  },
  {
    "name": "Enriqueta",
    "creator": "FontFuror"
  },
  {
    "name": "Kaushan Script",
    "creator": "Pablo Impallari"
  },
  {
    "name": "Syncopate",
    "creator": "Astigmatic"
  },
  {
    "name": "Signika Negative",
    "creator": "Anna Giedryś"
  },
  {
    "name": "Waiting for the Sunrise",
    "creator": "Kimberly Geswein"
  },
  {
    "name": "Sintony",
    "creator": "Eduardo Rodriguez Tunni"
  },
  {
    "name": "Cherry Cream Soda",
    "creator": "Font Diner"
  },
  {
    "name": "Coda",
    "creator": "Vernon Adams"
  },
  {
    "name": "Reenie Beanie",
    "creator": "James Grieshaber"
  },
  {
    "name": "Patrick Hand",
    "creator": "Patrick Wagesreiter"
  },
  {
    "name": "Chivo",
    "creator": "Omnibus-Type"
  },
  {
    "name": "Covered By Your Grace",
    "creator": "Kimberly Geswein"
  },
  {
    "name": "Overlock",
    "creator": "Dario Manuel Muhafara"
  },
  {
    "name": "Tangerine",
    "creator": "Toshi Omagari"
  },
  {
    "name": "Russo One",
    "creator": "Jovanny Lemonad"
  },
  {
    "name": "Sorts Mill Goudy",
    "creator": "Barry Schwartz"
  },
  {
    "name": "Michroma",
    "creator": "Vernon Adams"
  },
  {
    "name": "Love Ya Like A Sister",
    "creator": "Kimberly Geswein"
  },
  {
    "name": "Carme",
    "creator": "Rubén Prol"
  },
  {
    "name": "Rancho",
    "creator": "Sideshow"
  },
  {
    "name": "Neuton",
    "creator": "Brian Zick"
  },
  {
    "name": "Courgette",
    "creator": "Karolina Lach"
  },
  {
    "name": "Allerta",
    "creator": "Matt McInerney"
  },
  {
    "name": "Damion",
    "creator": "Vernon Adams"
  },
  {
    "name": "Gochi Hand",
    "creator": "Huerta Tipográfica"
  },
  {
    "name": "Jura",
    "creator": "Daniel Johnson"
  },
  {
    "name": "Carrois Gothic",
    "creator": "Ralph du Carrois"
  },
  {
    "name": "Doppio One",
    "creator": "Szymon Celej"
  },
  {
    "name": "Sigmar One",
    "creator": "Vernon Adams"
  },
  {
    "name": "Goudy Bookletter 1911",
    "creator": "Barry Schwartz"
  },
  {
    "name": "Cantata One",
    "creator": "Joana Correia da Silva"
  },
  {
    "name": "Berkshire Swash",
    "creator": "Astigmatic"
  },
  {
    "name": "Niconne",
    "creator": "Vernon Adams"
  },
  {
    "name": "Fauna One",
    "creator": "Eduardo Tunni"
  },
  {
    "name": "Kameron",
    "creator": "Vernon Adams"
  },
  {
    "name": "Walter Turncoat",
    "creator": "Sideshow"
  },
  {
    "name": "Strait",
    "creator": "Eduardo Tunni"
  },
  {
    "name": "Electrolize",
    "creator": "Gaslight"
  },
  {
    "name": "Marmelad",
    "creator": "Cyreal"
  },
  {
    "name": "Just Another Hand",
    "creator": "Astigmatic"
  },
  {
    "name": "Viga",
    "creator": "Fontstage"
  },
  {
    "name": "Neucha",
    "creator": "Jovanny Lemonad"
  },
  {
    "name": "Great Vibes",
    "creator": "TypeSETit"
  },
  {
    "name": "Aldrich",
    "creator": "MADType"
  },
  {
    "name": "ABeeZee",
    "creator": "Anja Meiners"
  },
  {
    "name": "Spinnaker",
    "creator": "Elena Albertoni"
  },
  {
    "name": "Telex",
    "creator": "Huerta Tipográfica"
  },
  {
    "name": "Bad Script",
    "creator": "Gaslight"
  },
  {
    "name": "Alegreya Sans",
    "creator": "Juan Pablo del Peral"
  },
  {
    "name": "Rosario",
    "creator": "Omnibus-Type"
  },
  {
    "name": "Share",
    "creator": "Ralph du Carrois"
  },
  {
    "name": "Nothing You Could Do",
    "creator": "Kimberly Geswein"
  },
  {
    "name": "Just Me Again Down Here",
    "creator": "Kimberly Geswein"
  },
  {
    "name": "Limelight",
    "creator": "Sorkin Type"
  },
  {
    "name": "Julius Sans One",
    "creator": "Luciano Vergara"
  },
  {
    "name": "Schoolbell",
    "creator": "Font Diner"
  },
  {
    "name": "Volkhov",
    "creator": "Cyreal"
  },
  {
    "name": "Belleza",
    "creator": "Eduardo Tunni"
  },
  {
    "name": "Gentium Basic",
    "creator": "Victor Gaultney"
  },
  {
    "name": "Nova Square",
    "creator": "Wojciech Kalinowski"
  },
  {
    "name": "Judson",
    "creator": "Daniel Johnson"
  },
  {
    "name": "Prata",
    "creator": "Cyreal"
  },
  {
    "name": "Rochester",
    "creator": "Sideshow"
  },
  {
    "name": "Coda Caption",
    "creator": "Vernon Adams"
  },
  {
    "name": "Fugaz One",
    "creator": "LatinoType"
  },
  {
    "name": "Allerta Stencil",
    "creator": "Matt McInerney"
  },
  {
    "name": "Coustard",
    "creator": "Vernon Adams"
  },
  {
    "name": "Abril Fatface",
    "creator": "TypeTogether"
  },
  {
    "name": "Orienta",
    "creator": "Eduardo Tunni"
  },
  {
    "name": "Aclonica",
    "creator": "Astigmatic"
  },
  {
    "name": "Trocchi",
    "creator": "Vernon Adams"
  },
  {
    "name": "Homemade Apple",
    "creator": "Font Diner"
  },
  {
    "name": "Candal",
    "creator": "Vernon Adams"
  },
  {
    "name": "Advent Pro",
    "creator": "Andreas Kalpakidis"
  },
  {
    "name": "Racing Sans One",
    "creator": "Impallari Type"
  },
  {
    "name": "Ruda",
    "creator": "Multiple Designers"
  },
  {
    "name": "Tauri",
    "creator": "Yvonne Schüttler"
  },
  {
    "name": "Nixie One",
    "creator": "Jovanny Lemonad"
  },
  {
    "name": "Sansita One",
    "creator": "Omnibus-Type"
  },
  {
    "name": "Mako",
    "creator": "Vernon Adams"
  },
  {
    "name": "Convergence",
    "creator": "Multiple Designers"
  },
  {
    "name": "Cutive",
    "creator": "Vernon Adams"
  },
  {
    "name": "Arbutus Slab",
    "creator": "Karolina Lach"
  },
  {
    "name": "Radley",
    "creator": "Vernon Adams"
  },
  {
    "name": "Sacramento",
    "creator": "Astigmatic"
  },
  {
    "name": "Alike",
    "creator": "Cyreal"
  },
  {
    "name": "PT Serif Caption",
    "creator": "ParaType"
  },
  {
    "name": "Cookie",
    "creator": "Ania Kruk"
  },
  {
    "name": "Spirax",
    "creator": "Brenda Gallo"
  },
  {
    "name": "Griffy",
    "creator": "Neapolitan"
  },
  {
    "name": "Boogaloo",
    "creator": "John Vargas Beltrán"
  },
  {
    "name": "Six Caps",
    "creator": "Vernon Adams"
  },
  {
    "name": "Contrail One",
    "creator": "Riccardo De Franceschi"
  },
  {
    "name": "Inder",
    "creator": "Sorkin Type"
  },
  {
    "name": "Duru Sans",
    "creator": "Onur Yazıcıgil"
  },
  {
    "name": "Arapey",
    "creator": "Eduardo Tunni"
  },
  {
    "name": "Merienda One",
    "creator": "Eduardo Tunni"
  },
  {
    "name": "Fontdiner Swanky",
    "creator": "Font Diner"
  },
  {
    "name": "The Girl Next Door",
    "creator": "Kimberly Geswein"
  },
  {
    "name": "Homenaje",
    "creator": "Multiple Designers"
  },
  {
    "name": "Cabin Sketch",
    "creator": "Pablo Impallari"
  },
  {
    "name": "Parisienne",
    "creator": "Astigmatic"
  },
  {
    "name": "Puritan",
    "creator": "Ben Weiner"
  },
  {
    "name": "Caudex",
    "creator": "Nidud"
  },
  {
    "name": "Alice",
    "creator": "Cyreal"
  },
  {
    "name": "Allura",
    "creator": "TypeSETit"
  },
  {
    "name": "Iceland",
    "creator": "Cyreal"
  },
  {
    "name": "Metrophobic",
    "creator": "Vernon Adams"
  },
  {
    "name": "Fanwood Text",
    "creator": "Barry Schwartz"
  },
  {
    "name": "Adamina",
    "creator": "Cyreal"
  },
  {
    "name": "Basic",
    "creator": "Magnus Gaarde"
  },
  {
    "name": "Fredericka the Great",
    "creator": "Tart Workshop"
  },
  {
    "name": "Crushed",
    "creator": "Astigmatic"
  },
  {
    "name": "Anaheim",
    "creator": "Vernon Adams"
  },
  {
    "name": "Lustria",
    "creator": "MADType"
  },
  {
    "name": "Lily Script One",
    "creator": "Julia Petretta"
  },
  {
    "name": "Alegreya Sans SC",
    "creator": "Juan Pablo del Peral"
  },
  {
    "name": "IM Fell English",
    "creator": "Igino Marini"
  },
  {
    "name": "Tenor Sans",
    "creator": "Denis Masharov"
  },
  {
    "name": "Lekton",
    "creator": "Multiple Designers"
  },
  {
    "name": "Ultra",
    "creator": "Astigmatic"
  },
  {
    "name": "Cousine",
    "creator": "Steve Matteson"
  },
  {
    "name": "Slackey",
    "creator": "Sideshow"
  },
  {
    "name": "Grand Hotel",
    "creator": "Astigmatic"
  },
  {
    "name": "Gruppo",
    "creator": "Vernon Adams"
  },
  {
    "name": "Brawler",
    "creator": "Cyreal"
  },
  {
    "name": "Average Sans",
    "creator": "Eduardo Tunni"
  },
  {
    "name": "Frijole",
    "creator": "Sideshow"
  },
  {
    "name": "Leckerli One",
    "creator": "Gesine Todt"
  },
  {
    "name": "Days One",
    "creator": "Jovanny Lemonad"
  },
  {
    "name": "Sancreek",
    "creator": "Vernon Adams"
  },
  {
    "name": "Yesteryear",
    "creator": "Astigmatic"
  },
  {
    "name": "Kristi",
    "creator": "Birgit Pulk"
  },
  {
    "name": "Ovo",
    "creator": "Nicole Fally"
  },
  {
    "name": "Kranky",
    "creator": "Sideshow"
  },
  {
    "name": "Shanti",
    "creator": "Vernon Adams"
  },
  {
    "name": "Imprima",
    "creator": "Eduardo Tunni"
  },
  {
    "name": "Alef",
    "creator": "Hagilda"
  },
  {
    "name": "Tienne",
    "creator": "Vernon Adams"
  },
  {
    "name": "Sue Ellen Francisco",
    "creator": "Kimberly Geswein"
  },
  {
    "name": "Forum",
    "creator": "Denis Masharov"
  },
  {
    "name": "Petit Formal Script",
    "creator": "Impallari Type"
  },
  {
    "name": "Montez",
    "creator": "Astigmatic"
  },
  {
    "name": "Pompiere",
    "creator": "Karolina Lach"
  },
  {
    "name": "Loved by the King",
    "creator": "Kimberly Geswein"
  },
  {
    "name": "Magra",
    "creator": "FontFuror"
  },
  {
    "name": "Anonymous Pro",
    "creator": "Mark Simonson"
  },
  {
    "name": "Carrois Gothic SC",
    "creator": "Ralph du Carrois"
  },
  {
    "name": "Federo",
    "creator": "Cyreal"
  },
  {
    "name": "Delius",
    "creator": "Natalia Raices"
  },
  {
    "name": "Alex Brush",
    "creator": "TypeSETit"
  },
  {
    "name": "Bentham",
    "creator": "Ben Weiner"
  },
  {
    "name": "Lilita One",
    "creator": "Juan Montoreano"
  },
  {
    "name": "Kavoon",
    "creator": "Viktoriya Grabowska"
  },
  {
    "name": "Englebert",
    "creator": "Astigmatic"
  },
  {
    "name": "Simonetta",
    "creator": "Brownfox"
  },
  {
    "name": "Quando",
    "creator": "Joana Correia da Silva"
  },
  {
    "name": "Yeseva One",
    "creator": "Jovanny Lemonad"
  },
  {
    "name": "Allan",
    "creator": "Anton Koovit"
  },
  {
    "name": "Share Tech",
    "creator": "Ralph du Carrois"
  },
  {
    "name": "Fenix",
    "creator": "Fernando Díaz"
  },
  {
    "name": "Andada",
    "creator": "Huerta Tipográfica"
  },
  {
    "name": "Andika",
    "creator": "Annie Olsen"
  },
  {
    "name": "Podkova",
    "creator": "Cyreal"
  },
  {
    "name": "Marcellus SC",
    "creator": "Astigmatic"
  },
  {
    "name": "Acme",
    "creator": "Huerta Tipográfica"
  },
  {
    "name": "La Belle Aurore",
    "creator": "Kimberly Geswein"
  },
  {
    "name": "Kotta One",
    "creator": "Ania Kruk"
  },
  {
    "name": "Annie Use Your Telescope",
    "creator": "Kimberly Geswein"
  },
  {
    "name": "Alegreya SC",
    "creator": "Huerta Tipográfica"
  },
  {
    "name": "Wire One",
    "creator": "Cyreal"
  },
  {
    "name": "Corben",
    "creator": "Vernon Adams"
  },
  {
    "name": "Headland One",
    "creator": "Gary Lonergan"
  },
  {
    "name": "Kelly Slab",
    "creator": "Denis Masharov"
  },
  {
    "name": "Merienda",
    "creator": "Eduardo Tunni"
  },
  {
    "name": "Carter One",
    "creator": "Vernon Adams"
  },
  {
    "name": "Metamorphous",
    "creator": "James Grieshaber"
  },
  {
    "name": "Cinzel Decorative",
    "creator": "Natanael Gama"
  },
  {
    "name": "Capriola",
    "creator": "Viktoriya Grabowska"
  },
  {
    "name": "IM Fell DW Pica",
    "creator": "Igino Marini"
  },
  {
    "name": "Mountains of Christmas",
    "creator": "Tart Workshop"
  },
  {
    "name": "Wendy One",
    "creator": "Alejandro Inler"
  },
  {
    "name": "Give You Glory",
    "creator": "Kimberly Geswein"
  },
  {
    "name": "Codystar",
    "creator": "Neapolitan"
  },
  {
    "name": "Sunshiney",
    "creator": "Sideshow"
  },
  {
    "name": "Gafata",
    "creator": "Lautaro Hourcade"
  },
  {
    "name": "Chau Philomene One",
    "creator": "Vicente Lamonaca"
  },
  {
    "name": "Short Stack",
    "creator": "James Grieshaber"
  },
  {
    "name": "Oranienbaum",
    "creator": "Multiple Designers"
  },
  {
    "name": "Over the Rainbow",
    "creator": "Kimberly Geswein"
  },
  {
    "name": "Holtwood One SC",
    "creator": "Vernon Adams"
  },
  {
    "name": "Bowlby One",
    "creator": "Vernon Adams"
  },
  {
    "name": "Graduate",
    "creator": "Eduardo Tunni"
  },
  {
    "name": "Antic",
    "creator": "Santiago Orozco"
  },
  {
    "name": "Salsa",
    "creator": "John Vargas Beltrán"
  },
  {
    "name": "Quantico",
    "creator": "MADType"
  },
  {
    "name": "Marcellus",
    "creator": "Astigmatic"
  },
  {
    "name": "Expletus Sans",
    "creator": "Jasper de Waard"
  },
  {
    "name": "Cantora One",
    "creator": "Impallari Type"
  },
  {
    "name": "IM Fell DW Pica SC",
    "creator": "Igino Marini"
  },
  {
    "name": "UnifrakturMaguntia",
    "creator": "j. 'mach' wust"
  },
  {
    "name": "Chelsea Market",
    "creator": "Tart Workshop"
  },
  {
    "name": "Denk One",
    "creator": "Sorkin Type"
  },
  {
    "name": "Dawning of a New Day",
    "creator": "Kimberly Geswein"
  },
  {
    "name": "Patrick Hand SC",
    "creator": "Patrick Wagesreiter"
  },
  {
    "name": "Stardos Stencil",
    "creator": "Vernon Adams"
  },
  {
    "name": "Tulpen One",
    "creator": "Naima Ben Ayed"
  },
  {
    "name": "Cedarville Cursive",
    "creator": "Kimberly Geswein"
  },
  {
    "name": "Maiden Orange",
    "creator": "Astigmatic"
  }
];

var usedFonts = [];
var totalFontOptions = 5;
var i = 0;
for( i; i < totalFontOptions; i++ ) {
	usedFonts.push( fontOptions[ Math.floor( Math.random() * fontOptions.length ) ] );
}

var WebFontConfig = {
    google: {
        families: ["Annie Use Your Telescope", "Didact Gothic", "Varela", "Basic", "Quando"] ,
        text: 'Ag' // Only need those two letters!
    }
};