$(document).ready(function readyDocument(){
   function transitionendSearch() {
      var searchVal = $("#search").val();
      $.ajax({
          type: "GET",
          url: "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&list=&generator=allpages&exlimit=10&exintro=1&explaintext=1&gapfrom=" + searchVal + "&callback=?",
          dataType: "json",
          success: loadResults
      });
   }

   function clickSearch() {
      $(".search-box").addClass("slide-up");
   }

   function loadResults(results) {
      var pageResults = results.query.pages;
      for (var page in pageResults) {
         var link = "http://en.wikipedia.org/?curid=" + pageResults[page].pageid;
         var title = $("<h3></h3>").html(pageResults[page].title);
         var elemA = $("<a></a>").attr("href", link);
         var elemDiv = $("<div></div>")
                        .addClass("article")
                        .hover(function onHover() {
                           $(this).css("background-color", "rgb(232, 29, 130, 0.5)");
                        });
         var extract;

         if(pageResults[page].extract == false) {
            extract = $("<p></p>").html("Description unavailable").css("font-style", "italic");
         } else {
            extract = $("<p></p>").html(pageResults[page].extract);
         }

         title.appendTo(elemDiv);
         extract.appendTo(elemDiv);
         elemDiv.appendTo(elemA);
         elemA.appendTo(".search-results");
      }
    }

   function onMouseEnter() {
      var randoFeels = $.makeArray($(".feels-randoview").children());
      var randomNum = Math.random();
      var sq = ASQ();

      randoFeels.forEach(function(ele, ind, arr) {
         sq.then(function(done) {
            $(arr[ind + 1]).on("transitionend", function() {
               done();
            });

            if($(ele).attr("class") === "the-one") {
               $(ele).removeClass("the-one")
                  .addClass("all-else")
               ;

               $(arr[ind + 1]).removeClass("all-else")
                  .addClass("the-one")
               ;
            }
         });
      });
   }

   $("#search-btn").click(clickSearch);
   $(".search-box").on("transitionend", transitionendSearch);
   $(".feels-randoview").mouseenter(onMouseEnter);
});
