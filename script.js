"use strict";

const toFeet = document.querySelector(".calculateButton");
var userFeet = document.querySelector(".Feet");
var userInch = document.querySelector(".Inches");
var userNumer = document.querySelector(".FractionInchNum");
var userDenom = document.querySelector(".FractionInchDenom");

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

function quotient(numerator, devisor) {
  return (numerator - (numerator % devisor)) / devisor;
}

function InchToDecimalFeet(input) {
  return input / 12;
}

toFeet.addEventListener("click", () => {
  var inchdec = InchToDecimalFeet(Number(userNumer.value / userDenom.value));
  var workFeet = Number(userFeet.value);
  var total = workFeet + inchdec + Number(InchToDecimalFeet(userInch.value));

  try {
    userOutput.textContent = total;
  } catch {}
});