function convertToFahrenheit() {
  var celsiusInput = document.getElementById("celsius");
  var celsius = parseFloat(celsiusInput.value);

  if (!isNaN(celsius)) {
    var fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById("result").textContent = celsius + "°C = " + fahrenheit.toFixed(2) + "°F";
  } else {
    document.getElementById("result").textContent = "Invalid input. Please enter a valid temperature in Celsius.";
  }
}

function convertToCelsius() {
  var fahrenheitInput = document.getElementById("celsius");
  var fahrenheit = parseFloat(fahrenheitInput.value);

  if (!isNaN(fahrenheit)) {
    var celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById("result").textContent = fahrenheit + "°F = " + celsius.toFixed(2) + "°C";
  } else {
    document.getElementById("result").textContent = "Invalid input. Please enter a valid temperature in Fahrenheit.";
  }
}
