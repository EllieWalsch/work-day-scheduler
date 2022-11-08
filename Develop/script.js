
// Display current date in the header
// https://www.freecodecamp.org/news/javascript-get-current-date-todays-date-in-js/
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

// TODO: add class to change background color


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
