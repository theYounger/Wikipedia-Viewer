$(document).ready(function onReady(){
   function loadResults(results) {
      var pageResults = results.query.pages;
      for (var page in pageResults) {
         var link = $("<a></a>").attr("href", "http://en.wikipedia.org/?curid=" + pageResults[page].pageid).html(pageResults[page].title + "<br>").append(pageResults[page].extract);
         $("<div></div>").addClass("selection").html(link).appendTo(".search-results");
      }
    }

   function clickSearch(done) {
      var searchVal = $("#search").val();
      $(".search-box").css({
         "transition-property": "margin-top",
         "transition-duration": "0.6s",
         "margin-top": "0px"
      }).trigger("transitioned");
   }

   function transitioned() {
      console.log("hello world");
      $.ajax({
          type: "GET",
          url: "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&list=&generator=allpages&exlimit=10&exintro=1&explaintext=1&gapfrom=" + searchVal + "&callback=?",
          dataType: "json",
          success: loadResults
      });
   }

   $("#search-btn").click(clickSearch);
   $(".search-box").on("transitioned", transitioned, true);
});
