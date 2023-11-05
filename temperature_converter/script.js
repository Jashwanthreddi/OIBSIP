document.addEventListener("DOMContentLoaded", function () {
    const temperatureInput = document.getElementById("temperature");
    const unitSelect = document.getElementById("unit");
    const convertButton = document.getElementById("convert");
    const convertedTemperatureDisplay = document.getElementById("convertedTemperature");
    const convertedUnitDisplay = document.getElementById("convertedUnit");

    convertButton.addEventListener("click", function () {
        const temperature = parseFloat(temperatureInput.value);
        const unit = unitSelect.value;

        if (isNaN(temperature)) {
            alert("Please enter a valid number for the temperature.");
            return;
        }

        let convertedTemperature;
        let convertedUnit;

        if (unit === "celsius") {
            convertedTemperature = temperature;
            convertedUnit = "Celsius";
        } else if (unit === "fahrenheit") {
            convertedTemperature = (temperature - 32) * (5/9);
            convertedUnit = "Celsius";
        } else if (unit === "kelvin") {
            convertedTemperature = temperature - 273.15;
            convertedUnit = "Celsius";
        }

        convertedTemperatureDisplay.textContent = convertedTemperature.toFixed(2);
        convertedUnitDisplay.textContent = convertedUnit;
    });
});
