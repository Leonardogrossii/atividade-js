function converterCelsiusParaFahrenheit(temperaturaCelsius) {
    let temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;
    return temperaturaFahrenheit;
  }
  
  let temperaturaCelsius = parseFloat(prompt("Digite a temperatura em graus Celsius:"));
  
  if (!isNaN(temperaturaCelsius)) {
    let temperaturaFahrenheit = converterCelsiusParaFahrenheit(temperaturaCelsius);
    alert("A temperatura em Fahrenheit é: " + temperaturaFahrenheit.toFixed(2));
  } else {
    alert("Por favor, insira um valor numérico válido.");
  }
  
  