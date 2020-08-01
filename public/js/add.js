// Code here handles what happens when a user submits a new character on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.

// when user clicks add-btn
$("#add-btn").on("click", function(event) {
    event.preventDefault();
  
    // make a newCharacter obj
    var newEntry = {
      // name from name input
      name: $("#name").val().trim(),
      // role from role input
      airline: $("#airline").val().trim(),
      // age from age input
      hotel: $("#hotel").val().trim(),
      // points from force-points input
      pointofInterest: $("#point-of-interest").val().trim()
    };
  
    // send an AJAX POST-request with jQuery
    $.post("/api/new", newEntry)
      // on success, run this callback
      .then(function(data) {
        // log the data we found
        console.log(data);
        // tell the user we're adding a character with an alert window
        alert("Adding character...");
      });
  
    // empty each input box by replacing the value with an empty string
    $("#name").val("");
    $("#airline").val("");
    $("#hotel").val("");
    $("#point-of-interest").val("");
  
  });
  