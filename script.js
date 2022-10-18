"use strict";

//These variables are only used for the foot to decimal calculation button

const toFeet = document.querySelector(".calculateButton");
var userFeet = document.querySelector(".Feet");
var userInch = document.querySelector(".Inches");
var userNumer = document.querySelector(".FractionInchNum");
var userDenom = document.querySelector(".FractionInchDenom");

//These variables are used to do the decimal to foot button press 

var decToFoot = document.querySelector(".decToFeetBtn")


var userOutput = document.querySelector(`.userOutput`);
let transform = [
  ["1/16", 0.0625],
  ["1/8", 0.125],
  ["3/16", 0.1875],
  ["1/4", 0.25],
  ["5/16", 0.3125],
  ["3/8", 0.375],
  ["7/16", 0.4375],
  ["1/2", 0.5],
  ["9/16", 0.5625],
  ["5/8", 0.625],
  ["11/16", 0.6875],
  ["3/4", 0.75],
  ["13/16", 0.8125],
  ["7/8", 0.875],
  ["15/16", 0.9375],
];

// Function Section. This contains all the funtions used throughout the rest of the program

function quotient(numerator, devisor) {
  return (numerator - (numerator % devisor)) / devisor;
}

function InchToDecimalFeet(input) {
  return input / 12;
}

// Button events. This is what happens after someone clicks one of the buttons that is found on the page 

toFeet.addEventListener("click", () => {
  var inchdec = InchToDecimalFeet(Number(userNumer.value / userDenom.value));
  var workFeet = Number(userFeet.value);
  var total = workFeet + inchdec + Number(InchToDecimalFeet(userInch.value));

  try {
    userOutput.textContent = total;
  } catch {
    // add text to the error tag on the HTML. That way the user has a way to change the input. 
  }
  
// Decimal to feet button press event. This handles the calulations that change a decimal foot number to 
// the closest possible foot, inch, and fractional inch measuremnt that can be made given the input number.

toFeet.addEventListener("click", () => {


}

});
