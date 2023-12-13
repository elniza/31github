// declaring variables, accessing them in HTML
var songGallery = document.getElementById("songGallery"); // gallery
var searchBar = document.getElementById("searchBar"); // search bar
var searchButton = document.getElementById("searchButton"); // button

// searchbar keyup event
searchBar.addEventListener("keyup", function (event) {
  // if we click enter,
  if (event.key === "Enter") {
    // search for the artist
    searchForArtist();
  }
});
// this one is for a button, click the button
searchButton.addEventListener("click", function (event) {
  // search for the artist
  searchForArtist();
});

// function searchForArtist
function searchForArtist() {
  // declare variable artist, equal to value of searchbar
  var artist = searchBar.value;
  console.log("artist", artist);
  // if the artist is too short, just return nothing
  if (artist.length <= 1) return null;

  // make the request
  fetch(
    // Add the artist name to the query, so we can search for that artist
    `https://youtube-music1.p.rapidapi.com/v2/search?query=${artist}`,
    options
  )
    .then((response) => response.json()) // change the data to JSON format
    .then((response) => processResponse(response)) // show that we do something with the data
    .catch((err) => console.error(err)); // in case there is an error
}

// variable options
var options = {
  method: "GET", // kind of request
  headers: {
    "X-RapidAPI-Key": "13029dee2cmsheb89a1257b4dbdep15d8d2jsna4b21b69486a", // rapid api data access
    "X-RapidAPI-Host": "youtube-music1.p.rapidapi.com", // (I'm not sure)
  },
};

// function
function processResponse(response) {
  //   console.log(response.result);
  // result = the result of the response
  var result = response.result;
  // store the songs and videos for easy use
  var songs = result.songs;
  var videos = result.videos;

  //   for loop! go through all the songs
  for (var song of songs) {
    console.log(song.album.name);
    console.log(song.title);
    console.log(song.thumbnail);
    console.log(song.artists[0].name);

    // variable will display a chunk of HTML, using a template literal, we can put the data inside the HTML
    var galleryItem = `
        <div class="galleryItem">
            <img src="${song.thumbnail}" alt="" />
            <p>${song.title}</p>
            <p>${song.album.name}</p>
            <p>${song.artists[0].name}</p>
        </div>
    `;
    // songGallery div, add the chunk of HTML to the page
    songGallery.innerHTML += galleryItem;
  }
}