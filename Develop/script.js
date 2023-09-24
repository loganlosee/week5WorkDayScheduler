$(document).ready(function () {

     // Get the current hour using dayjs
    var currentHour = 12 //dayjs().hour();
  
    // Select the time block container by class
    var timeBlockContainer = document.querySelector(".container-lg.px-5");
  
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
  
      // Create the HTML structure for the time block (copied from starter code)
      timeBlock.innerHTML = `
        <div class="col-2 col-md-1 hour text-center py-3">${hour}AM</div>
        <textarea class="col-8 col-md-10 description" rows="3"></textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
      `;
  
      // Append the time block to the container
      timeBlockContainer.appendChild(timeBlock);
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

  
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  
  
  // TODO: Add code to display the current date in the header of the page.



