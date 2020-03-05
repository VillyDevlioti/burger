// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-status").on("click", function(event) {
    var id = $(this).data("id");

    var newEatState = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEatState
    }).then(
      function() {
        console.log("changed burger to", devouredState);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#burg").val().trim(),
  
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

/*   //DELETE CAT
  $(".delete-cat").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var id = $(this).data("id");

    // Send the POST request.
    $.ajax("/api/cats/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted the cat", id);
        // Reload the page to get the updated list
        location.reload();
      });
  });  */ 


});
