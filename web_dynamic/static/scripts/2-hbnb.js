$(document).ready(function () {
  // Function to update API status
  function updateApiStatus() {
    // Make a GET request to check the API status
    $.get("http://0.0.0.0:5001/api/v1/status/", function (data) {
	// Check if the status 
      if (data.status === "OK") {
        // Add the class 'available' to div#api_status
        $("#api_status").addClass("available");
      } else {
        // Remove the class 'available' from div#api_status
        $("#api_status").removeClass("available");
      }
    });
  }

  // Call the updateApiStatus function initially
  updateApiStatus();

  // Set an interval to check the API status every 5 seconds
  setInterval(updateApiStatus, 5000);

  // Checkbox click event handler
  $('input[type=checkbox]').click(function () {
    const myListName = [];
    const myId = [];
    $('input[type=checkbox]:checked').each(function () {
      myListName.push($(this).attr('data-name'));
      myId.push($(this).attr('data-id'));
    });
    if (myListName.length === 0) {
      $('.amenities h4').html('&nbsp;');
    } else {
      $('.amenities h4').text(myListName.join(', '));
    }
    console.log(myId);
  });
}); 
