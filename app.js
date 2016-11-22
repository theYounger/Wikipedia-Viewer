$(document).ready(function onReady() {
   // when filling search bar, we can use an html form element -- alternatives?
   $("#searchbar")

   // autocomplete features ... perhaps have the inner html self complete based on what is chosen in the drop-down menu. Have the search bar show in gray the rest of the word, and upon a key press it will complete that word. require to listen to tab key clicks. Also up and down arrow for perusing through search dropdown.

   // when search button is clicked
   function getWikiData(url) {
      $.get(url, wikiData).
   }

});
