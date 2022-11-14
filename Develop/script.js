
// Display current date in the header
// https://day.js.org/docs/en/get-set/date
const currentDayEl = $("#currentDay");
const date = new Date();
let day = dayjs().date();
let month = dayjs().month() + 1;
let year = dayjs().year();
let currentDate = `${month}/${day}/${year}`;
currentDayEl.text(currentDate);

let hour = dayjs().hour();

// Change background for past/present/future
function changeBackground () {
  $(".time-block").each(function () {
    // turns ID string into a number
    let hourBlock = parseInt($(this).attr("id"));

    if (hourBlock < hour) {
      $(this).addClass("past");
    } else if (hourBlock === hour) {
      $(this).addClass("present");
    } else if (hourBlock > hour) {
      $(this).addClass("future");
    };

  });
};

changeBackground ();

// Grab the button's sibling on each hour block and
// adds user input to local storage
$("button").click(function () {
  // https://api.jquery.com/siblings/
  let description = $(this).siblings(".description").val();
  // https://api.jquery.com/parent/#parent-selector
  let descriptionTime = $(this).parent().attr("id");
  localStorage.setItem(descriptionTime, description);
});

// TODO: create function that grabs local storage items
// and displays it in the correct time block


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
