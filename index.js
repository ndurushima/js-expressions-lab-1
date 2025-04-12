//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)

const day1TempF = 32;
const day2TempC = 25;
const day3TempF = 70;
const day4TempC = 18;
const day5TempF = 80;
const day6TempC = 15;
const day7TempF = 72;
const day8TempC = 28;
const day9TempF = 68;
const day10TempC = 20;
const day11TempF = 75;
const day12TempC = 23;
const day13TempF = 82;
const day14TempC = 30;
const day15TempF = 65;
const day16TempC = 22;
const day17TempF = 77;
const day18TempC = 26;
const day19TempF = 78;
const day20TempC = 24;
const day21TempF = 73;
const day22TempC = 21;
const day23TempF = 79;
const day24TempC = 27;
const day25TempF = 71;
const day26TempC = 19;
const day27TempF = 74;
const day28TempC = 17;
const day29TempF = 76;
const day30TempC = 29;

function celsiusToFahrenheit(tempInCelsius) {
    let fahrenheit = (tempInCelsius * 9/5) + 32;
    return fahrenheit;
}

function fahrenheitToCelsius(tempInFahrenheit) {
    let celsius = (tempInFahrenheit - 32) * 5/9;
    return celsius;
}

const day1TempC = fahrenheitToCelsius(32);
const day2TempF = celsiusToFahrenheit(25);
const day3TempC = fahrenheitToCelsius(70);
const day4TempF = celsiusToFahrenheit(18);
const day5TempC = fahrenheitToCelsius(80);
const day6TempF = celsiusToFahrenheit(15);
const day7TempC = fahrenheitToCelsius(72);
const day8TempF = celsiusToFahrenheit(28);
const day9TempC = fahrenheitToCelsius(68);
const day10TempF = celsiusToFahrenheit(20);
const day11TempC = fahrenheitToCelsius(75);
const day12TempF = celsiusToFahrenheit(23);
const day13TempC = fahrenheitToCelsius(82);
const day14TempF = celsiusToFahrenheit(30);
const day15TempC = fahrenheitToCelsius(65);
const day16TempF = celsiusToFahrenheit(22);
const day17TempC = fahrenheitToCelsius(77);
const day18TempF = celsiusToFahrenheit(26);
const day19TempC = fahrenheitToCelsius(78);
const day20TempF = celsiusToFahrenheit(24);
const day21TempC = fahrenheitToCelsius(73);
const day22TempF = celsiusToFahrenheit(21);
const day23TempC = fahrenheitToCelsius(79);
const day24TempF = celsiusToFahrenheit(27);
const day25TempC = fahrenheitToCelsius(71);
const day26TempF = celsiusToFahrenheit(19);
const day27TempC = fahrenheitToCelsius(74);
const day28TempF = celsiusToFahrenheit(17);
const day29TempC = fahrenheitToCelsius(76);
const day30TempF = celsiusToFahrenheit(29);

//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

const tot_temperature_in_fahrenheit = day1TempF + day2TempF + day3TempF + day4TempF + day5TempF + day6TempF + day7TempF + day8TempF + day9TempF + day10TempF + day11TempF + day12TempF + day13TempF + day14TempF + day15TempF + day16TempF + day17TempF + day18TempF + day19TempF + day20TempF + day21TempF + day22TempF + day23TempF + day24TempF + day25TempF + day26TempF + day27TempF + day28TempF + day29TempF + day30TempF;
const tot_temperature_in_celsius = day1TempC + day2TempC + day3TempC + day4TempC + day5TempC + day6TempC + day7TempC + day8TempC + day9TempC + day10TempC + day11TempC + day12TempC + day13TempC + day14TempC + day15TempC + day16TempC + day17TempC + day18TempC + day19TempC + day20TempC + day21TempC + day22TempC + day23TempC + day24TempC + day25TempC + day26TempC + day27TempC + day28TempC + day29TempC + day30TempC;

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30;
const avg_temperature_in_celsius = tot_temperature_in_celsius / 30;

//! Console.log the results for your own inspection if you'd like

console.log(tot_temperature_in_fahrenheit);
console.log(tot_temperature_in_celsius);
console.log(avg_temperature_in_fahrenheit);
console.log(avg_temperature_in_celsius);

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius,
};