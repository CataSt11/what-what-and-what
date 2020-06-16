// ready event function
$(document).ready(function () {
  $(document).on("click", "input[type=radio]", function () {
    const id = $(this).attr("id");
    apply(id);
  });
});


/**
 * list of songs that will be iterated
 * the recommendations for the users will be made according to the answer/mood picked in the form
 * the users will be redirected to YouTube 
*/
const songs = [
  {
    artist: "Phil Harris, Bruce Reitherman",
    title: "The Bare Necessities",
    id: "08NlhjpVFsU",
    mood: "happy",
  },
  {
    artist: "James Brown",
    title: "I Feel Good",
    id: "iSLwVaebsJg",
    mood: "happy",
  },
  {
    artist: "Los Del Rio",
    title: "Macarena",
    id: "zWaymcVmJ-A",
    mood: "happy",
  },
  {
    artist: "PSY",
    title: "GANGNAM STYLE",
    id: "9bZkp7q19f0",
    mood: "happy",
  },
  {
    artist: "Gusttavo Lima",
    title: "Balada Boa",
    id: "5NNi4JIwsCo",
    mood: "happy",
  },
  {
    artist: "Natiruts",
    title: "Reggae Power / Esperar o Sol",
    id: "NtV94qNRaTY",
    mood: "meh",
  },
  {
    artist: 'Damian "Jr. Gong" Marley',
    title: "Speak Life",
    id: "ebfeumBDymc",
    mood: "meh",
  },
  {
    artist: "Buena Vista Social Club",
    title: "Chan Chan (Official Audio)",
    id: "o5cELP06Mik",
    mood: "meh",
  },
  {
    artist: "A.CHAL",
    title: "Love N Hennessy",
    id: "Tg9sEZNkjDU",
    mood: "meh",
  },
  {
    artist: "Arlissa",
    title: "Devil and The Deep",
    id: "s4Bo7x4V3Is",
    mood: "meh",
  },
  {
    artist: "Paula Fernandes, Marcus Viana",
    title: "Quando A Chuva Passar",
    id: "pnipW5naaFo",
    mood: "low",
  },
  {
    artist: "Florence and the Machine",
    title: "Wish That You Were Here",
    id: "dsWDUvuF0Xc",
    mood: "low",
  },
  {
    artist: "Carla Morrison",
    title: "Todo Pasa",
    id: "MYUVH4fflc8",
    mood: "low",
  },
  {
    artist: "Sara Bareilles",
    title: "Gravity",
    id: "rEXhAMtbaec",
    mood: "low",
  },
  {
    artist: "Jacob Banks ",
    title: "Unknown (To You)",
    id: "RsadnWrUY84",
    mood: "low",
  },
];


/**
 * list of films that will be iterated
 * the recommendations for the users will be made according to the answer/mood picked in the form
 * the users will be redirected to Rotten Tomatoes 
 */
const films = [
  {
    film: "INSIDE OUT",
    id: "/m/inside_out_2015",
    mood: "happy",
  },
  {
    film: "NEVER HAVE I EVER",
    id: "/tv/never_have_i_ever",
    mood: "happy",
  },
  {
    film: "AMÉLIE",
    id: "/m/amelie",
    mood: "happy",
  },
  {
    film: "SPIRITED AWAY",
    id: "/m/spirited_away",
    mood: "happy",
  },
  {
    film: "MY NEIGHBOR TOTORO",
    id: "/m/my_neighbor_totoro",
    mood: "happy",
  },
  {
    film: "RUSSIAN DOLL",
    id: "/tv/russian_doll",
    mood: "meh",
  },
  {
    film: "DEAD TO ME",
    id: "/tv/dead_to_me",
    mood: "meh",
  },
  {
    film: "HOTEL TRANSYLVANIA",
    id: "/m/hotel_transylvania",
    mood: "meh",
  },
  {
    film: "GLOW",
    id: "/tv/g_l_o_w_",
    mood: "meh",
  },
  {
    film: "CASTLEVANIA",
    id: "/tv/castlevania",
    mood: "meh",
  },
  {
    film: "JOHN WICK",
    id: "/m/john_wick",
    mood: "low",
  },
  {
    film: "ATYPICAL",
    id: "/tv/atypical",
    mood: "low",
  },
  {
    film: "TIM BURTON S CORPSE BRIDE",
    id: "/m/corpse_bride",
    mood: "low",
  },
  {
    film: "VANILLA SKY",
    id: "/m/vanilla_sky",
    mood: "low",
  },
  {
    film: "THE BREAKFAST CLUB",
    id: "/m/breakfast_club",
    mood: "low",
  },
];


/**
 * list of recipes that will be iterated
 * the recommendations for the users will be made according to the answer/mood picked in the form
 * the users will be redirected to BBCGoodFood
 */
const recipes = [
  {
    recipe: "Carrot cake",
    id: "carrot-cake",
    mood: "happy",
  },
  {
    recipe: "Frying pan pizza w/ aubergine, ricotta & mint",
    id: "frying-pan-pizza-aubergine-ricotta-mint",
    mood: "happy",
  },
  {
    recipe: "Huevos rancheros",
    id: "easy-huevos-rancheros",
    mood: "happy",
  },
  {
    recipe: "Cherry soup with whipped mascarpone & caramelised almonds",
    id: "cherry-soup-whipped-mascarpone-caramelised-almonds",
    mood: "happy",
  },
  {
    recipe: "Chicken stuffed with herby mascarpone",
    id: "chicken-stuffed-herby-mascarpone",
    mood: "happy",
  },
  {
    recipe: "Sweet & sour chicken",
    id: "easy-sweet-sour-chicken",
    mood: "meh",
  },
  {
    recipe: "Millionaire’s shortbread",
    id: "easy-millionaires-shortbread",
    mood: "meh",
  },
  {
    recipe: "Ultimate chorizo ciabatta",
    id: "ultimate-chorizo-ciabatta",
    mood: "meh",
  },
  {
    recipe: "Fennel & lemon risotto",
    id: "fennel-lemon-risotto",
    mood: "meh",
  },
  {
    recipe: "Passion fruit cream",
    id: "passion-fruit-cream",
    mood: "meh",
  },
  {
    recipe: "Chicken fajitas",
    id: "easy-chicken-fajitas",
    mood: "low",
  },
  {
    recipe: "Chocolate molten cakes",
    id: "easy-chocolate-molten-cakes",
    mood: "low",
  },
  {
    recipe: "Hearty pasta soup",
    id: "hearty-pasta-soup",
    mood: "low",
  },
  {
    recipe: "Lime possets with raspberries",
    id: "lime-possets-raspberries",
    mood: "low",
  },
  {
    recipe: "Fried coconut bananas",
    id: "fried-coconut-bananas",
    mood: "low",
  },
];


/**
 * colors for mood
 */
const colors = [
  {
    code: "#ffa7a5",
    mood: "happy",
  },
  {
    code: "#0b5859",
    mood: "meh",
  },
  {
    code: "#5f4c7a",
    mood: "low",
  },
];


/**
 * function used to select and group items according to mood
 * elements sent to the assigned html div
 *
 * @param {string} mood
 */
function apply(mood) {
  // 'const colorCode' put here as it needs prior initialisation in order to run properly 
  const colorCode = getColor(mood);

  // get list of songs
  const songList = getMusic(mood);
  updateElement("divMusic", songList, colorCode);

  //get list of films
  const filmList = getFilms(mood);
  updateElement("divFilm", filmList, colorCode);

  //get list of recipes
  const recipeList = getRecipes(mood);
  updateElement("divFood", recipeList, colorCode);

  //get color - see 'const colorCode' initialised at the top of this function
  const divColor = document.getElementById("divColor");
  divColor.style.backgroundColor = colorCode;
};


/**
 * function used to update recommended music, films and recipes, as well as color
 * 
 * @param {string} elementId 
 * @param {object} objectList 
 * @param {hex code} colorCode 
 */
function updateElement(elementId, objectList, colorCode) {
  const element = document.getElementById(elementId);
  clearElementChildren(element);
  const elementDl = createElementDL(objectList, colorCode);
  element.appendChild(elementDl);
};


/**
 * function used to create list of recommendations according to the mood
 * returns text for description and links for accessing the information 
 * font color is changed according to the mood 
 * 
 * @param {string} listObjects 
 * @param {hex code} colorCode 
 */
function createElementDL(listObjects, colorCode) {
  const elementDl = document.createElement("dl");
  for (let i = 0; i < listObjects.length; i++) {
    const listObject = listObjects[i];
    const elementA = document.createElement("a");
    elementA.href = listObject.url;
    elementA.target = "_blank";
    elementA.style.color = colorCode || "black";
    const linkText = document.createTextNode(listObject.text);
    elementA.appendChild(linkText);
    const elementDd = document.createElement("dd");
    elementDd.appendChild(elementA);
    elementDl.appendChild(elementDd);
  }
  return elementDl;
};


/**
 * function used to clear previously recommended music, films and recipes, in case of change of mood 
 * 
 * @param {any} element 
 */ 
function clearElementChildren(element) {
  const elementChildren = element.childNodes || [];
  for (let i = 0; i < elementChildren.length; i++) {
    element.removeChild(elementChildren[i]);
  }
};


/**
 * music recommendation function
 * iterates through the song list and returns the recommendations for the mood
 * 
 * @param {string} mood 
 */ 
function getMusic(mood) {
  const result = [];
  for (let i = 0; i < songs.length; i++) {
    const songData = songs[i];
    if (songData.mood === mood) {
      const youtubeUrl = `https://www.youtube.com/watch?v=${songData.id}`;
      const youtubeTitle = `${songData.artist} - ${songData.title}`;
      result.push({
        url: youtubeUrl,
        text: youtubeTitle,
      });
    }
  }
  return result;
};


/**
 * film recommendation function
 * iterates through the films list and returns the recommendations for the mood
 * 
 * @param {string} mood 
 */
function getFilms(mood) {
  const result = [];
  for (let i = 0; i < films.length; i++) {
    const filmData = films[i];
    if (filmData.mood === mood) {
      const filmUrl = `https://www.rottentomatoes.com${filmData.id}`;
      result.push({
        url: filmUrl,
        text: filmData.film,
      });
    }
  }
  return result;
};


/**
 * food recommendation function
 * iterates through the recipes list and returns the recommendations for the mood
 * 
 * @param {string} mood 
 */
function getRecipes(mood) {
  const result = [];
  for (let i = 0; i < recipes.length; i++) {
    const recipeData = recipes[i];
    if (recipeData.mood === mood) {
      const recipeUrl = `https://www.bbcgoodfood.com/recipes/${recipeData.id}`;
      result.push({
        url: recipeUrl,
        text: recipeData.recipe,
      });
    }
  }
  return result;
};


/**
 * function used to return the color according to the mood
 * 
 * @param {string} mood 
 */
function getColor(mood) {
  for (let i = 0; i < colors.length; i++) {
    const colorData = colors[i];
    if (colorData.mood === mood) {
      return colorData.code;
    }
  }
  return "#fff";
};
