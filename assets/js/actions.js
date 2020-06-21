/**
 * JSON Data
 * contains strings of songs, films, recipes and colors
 */
const dataObject = loadJSON("assets/data.json");

// ready event function
$(document).ready(function () {
  $(document).on("click", "input[type=radio]", function () {
    const id = $(this).attr("id");
    apply(id);
  });
});

/**
 * Function used to load JSON file
 * 
 * @param {string} file 
 */
function loadJSON(file) {
  const request = new XMLHttpRequest();
  request.open("GET", file, false);
  request.send(null);
  if (request.status == "200") {
    return JSON.parse(request.responseText);
  }
}

/**
 * function used to select and group elements according to mood
 * elements are sent to the assigned html div
 *
 * @param {string} mood
 */
function apply(mood) {
  //get color - this is not an element, but gives color to it according to the mood
  const colorCode = getColors(mood);
  const divColor = document.getElementById("divColor");
  divColor.style.backgroundColor = colorCode;

  //get list of songs
  const songList = getMusic(mood);
  updateElement("divMusic", songList, colorCode);

  //get list of films
  const filmList = getFilms(mood);
  updateElement("divFilm", filmList, colorCode);

  //get list of recipes
  const recipeList = getRecipes(mood);
  updateElement("divFood", recipeList, colorCode);
}

/**
 * function used to update elements with recommended music, films and recipes, as well as color
 *
 * @param {string} elementId
 * @param {array} objectList
 * @param {string} colorCode
 */
function updateElement(elementId, objectList, colorCode) {
  const element = document.getElementById(elementId);
  clearElementChildren(element);
  const elementDl = createElementDL(objectList, colorCode);
  element.appendChild(elementDl);
}

/**
 * function used to create lists of elements from a list of objects
 * and changing text color based on the color code
 *
 * @param {array} listObjects
 * @param {string} listObjects[].url
 * @param {string} listObjects[].text
 * @param {string} colorCode
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
}

/**
 * function used to clear element children from element
 *
 * @param {any} element
 */
function clearElementChildren(element) {
  const elementChildren = element.childNodes || [];
  for (let i = 0; i < elementChildren.length; i++) {
    element.removeChild(elementChildren[i]);
  }
}

/**
 * music recommendation function
 * iterates through the songs list and returns the recommendations for the selected mood
 *
 * @param {string} mood
 */
function getMusic(mood) {
  const result = [];
  for (let i = 0; i < dataObject.songs.length; i++) {
    const songData = dataObject.songs[i];
    //if mood matches the users' selection, the function returns the song title and the artist as text and underneath a YouTube link (root + YT Id)
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
}

/**
 * film recommendation function
 * iterates through the films list and returns the recommendations for the selected mood
 *
 * @param {string} mood
 */
function getFilms(mood) {
  const result = [];
  for (let i = 0; i < dataObject.films.length; i++) {
    const filmData = dataObject.films[i];
    //if mood matches the users' selection, the function returns the film title as text and underneath a Rotten Tomatoes link (root + RT Id)
    if (filmData.mood === mood) {
      const filmUrl = `https://www.rottentomatoes.com${filmData.id}`;
      result.push({
        url: filmUrl,
        text: filmData.film,
      });
    }
  }
  return result;
}

/**
 * food recommendation function
 * iterates through the recipes list and returns the recommendations for the selected mood
 *
 * @param {string} mood
 */
function getRecipes(mood) {
  const result = [];
  for (let i = 0; i < dataObject.recipes.length; i++) {
    const recipeData = dataObject.recipes[i];
    //if mood matches the users' selection, the function returns the recipe name as text and underneath a BBCGoodFood link (root + BBCGF Id)
    if (recipeData.mood === mood) {
      const recipeUrl = `https://www.bbcgoodfood.com/recipes/${recipeData.id}`;
      result.push({
        url: recipeUrl,
        text: recipeData.recipe,
      });
    }
  }
  return result;
}

/**
 * function used to return the color for the selected mood
 *
 * @param {string} mood
 */
function getColors(mood) {
  for (let i = 0; i < dataObject.colors.length; i++) {
    const colorData = dataObject.colors[i];
    if (colorData.mood === mood) {
      return colorData.code;
    }
  }
  return "#fff";
}
