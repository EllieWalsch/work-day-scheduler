
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

    // compares current hour to ID hour
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

// Take local storage input and change description value
function displayInput () {
  let nineAM = localStorage.getItem("9");
  $("#9 .description").val(nineAM);
  let tenAM = localStorage.getItem("10");
  $("#10 .description").val(tenAM);
  let elevenAM = localStorage.getItem("11");
  $("#11 .description").val(elevenAM);
  let twelvePM = localStorage.getItem("12");
  $("#12 .description").val(twelvePM);
  let onePM = localStorage.getItem("13");
  $("#13 .description").val(onePM);
  let twoPM = localStorage.getItem("14");
  $("#14 .description").val(twoPM);
  let threePM = localStorage.getItem("15");
  $("#15 .description").val(threePM);
  let fourPM = localStorage.getItem("16");
  $("#16 .description").val(fourPM);
  let fivePM = localStorage.getItem("17");
  $("#17 .description").val(fivePM);
};

displayInput ();
