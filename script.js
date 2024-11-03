const screen = document.getElementById("screen");

let num1 = 0;
let num2 = 0;
let res = 0;
let operator = "";

window.addEventListener("load", () => {
  console.log("LOADED !!!");

  document.getElementById("minus").addEventListener("click", () => {
    const num = Number(screen.innerHTML);
    screen.innerHTML = num < 0 ? Math.abs(num) : -num;
  });

  document.getElementById("bckspc").addEventListener("click", () => {
    console.log("BUTTON PRESSED !!!");
    const num = Number(screen.innerHTML);
    let newNum = Math.abs(num) > 0 ? Math.floor(Math.abs(num) / 10) : 0;
    if (num < 0) newNum = -newNum;
    screen.innerHTML = newNum;
  });

  Array.from(document.getElementsByClassName("digit")).forEach((d) => {
    d.addEventListener("click", function (e) {
      if (screen.innerHTML === "0") screen.innerHTML = e.target.innerHTML;
      else screen.innerHTML += e.target.innerHTML;
    });
  });

  Array.from(document.getElementsByClassName("special")).forEach((s) => {
    s.addEventListener("click", function (e) {
      const num = Number(screen.innerHTML);

      switch (e.target.innerHTML) {
        case "1/x":
          screen.innerHTML = 1.0 / num;
          break;
        case "x^2":
          screen.innerHTML = num * num;
          break;
        case "sqrt(x)":
          screen.innerHTML = Math.sqrt(num);
          break;
      }
    });
  });

  Array.from(document.getElementsByClassName("operator")).forEach((o) => {
    o.addEventListener("click", function (e) {
      if (operator === "") {
        operator = e.target.innerHTML;
        num1 = Number(screen.innerHTML);
        screen.innerHTML = 0;
      }
    });
  });

  document.getElementById("equals").addEventListener("click", () => {
    if (num1 === 0) return;
    if (operator === "") return;

    num2 = Number(screen.innerHTML);
    res = 0;

    switch (operator) {
      case "+":
        res = num1 + num2;
        break;
      case "-":
        res = num1 - num2;
        break;
      case "*":
        res = num1 * num2;
        break;
      case "/":
        res = num1 / num2;
        break;
    }

    screen.innerHTML = res;
    num1 = res;
    operator = "";
  });
});
