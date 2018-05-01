$(function() {
  $(".eat-button").on("click", function(event) {
    var id = $(this).data("id");
    var newEatenState = $(this).data("devoured");

    var newEatenState = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEatenState
    }).then(
      function() {
        console.log("changed eaten state to", newEatenState);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
   
    event.preventDefault();

    var newBurger = {
      burger_name: $("#ca").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});