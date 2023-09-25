$(document).ready(function () {
  
  var currentDate = dayjs().format("MMMM D, YYYY");

  // Get the current hour using dayjs or write one in for testing
  var currentHour = 12; //dayjs().hour();
  
    // Select the time block container by class
  var timeBlockContainer = document.querySelector(".container-lg.px-5");

  // Display the formatted date in the header
  $("#current-date").text("Current Date: " + currentDate);

  var hourLabels = [
    "9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm"
  ];

  // Loop from 9 AM (hour 9) to 5 PM (hour 17)
  for (var hour = 9; hour <= 17; hour++) {
    // Create a div element for the time block
    var timeBlock = document.createElement("div");
    timeBlock.id = "hour-" + hour;
    timeBlock.className = "row time-block";

    // Determine whether it's past, present, or future
    if (hour < currentHour) {
      timeBlock.className += " past";
    } else if (hour === currentHour) {
      timeBlock.className += " present";
    } else {
      timeBlock.className += " future";
    }

    // Create the HTML structure for the time block (copied from starter code and edited to loop throw hour labels var)
    timeBlock.innerHTML = `
      <div class="col-2 col-md-1 hour text-center py-3">${hourLabels[hour - 9]}</div>
      <textarea class="col-8 col-md-10 description" rows="3"></textarea>
      <button class="btn saveBtn col-2 col-md-1" aria-label="save">
        <i class="fas fa-save" aria-hidden="true"></i>
      </button>
    `;

    // Append the time block to the container
    timeBlockContainer.appendChild(timeBlock);

    // Retrieve saved input from localStorage and set textarea value
    var savedInput = localStorage.getItem("hour-" + hour); // Use the correct key format
    if (savedInput !== null) {
      // Set the value of the corresponding textarea
      timeBlock.querySelector("textarea").value = savedInput;
    }
  }

  // Add a click listener to all save buttons
  $(".saveBtn").on("click", function () {
    // Get the hour of the parent time-block
    var timeBlockHour = $(this).closest(".time-block").attr("id");
    // Get the input from the textarea
    var input = $(this).siblings("textarea").val();

    // Log to check if the click event is triggered and for debugging
    console.log("Button Clicked:", timeBlockHour, input);

    // Save the input in local storage using the timeBlockHour as the key
    localStorage.setItem(timeBlockHour, input);
  });
});




