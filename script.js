let mainBg = document.querySelector("main");
let resultBg = document.querySelector(".calc-result-wrapper");
let buttonHolderBg = document.querySelector(".calc-buttons-wrapper");

let header = document.querySelector("h1");
let span = document.querySelectorAll("span");

let themeOne = document.getElementById("themeOne");
let themeTwo = document.getElementById("themeTwo");
let themeThree = document.getElementById("themeThree");
let switchBg = document.querySelector(".switch-wrapper");

let buttonsNum = document.querySelectorAll(".number");

let buttonsOperator = document.querySelectorAll(".operator");

let decimal = document.getElementById("decimal");

let deleteBtn = document.getElementById("delete");
let resetBtn = document.getElementById("reset");
let equalBtn = document.getElementById("equal");

let result = document.getElementById("result");

let add = document.getElementById("addition");
let subtract = document.getElementById("subtraction");
let divide = document.getElementById("division");
let multiply = document.getElementById("multiplication");

decimal.addEventListener("click", () => {
  let deci = decimal.innerHTML;
  result.textContent += deci;
});

add.addEventListener("click", () => {
  let addition = add.innerHTML;
  result.textContent += addition;
});

subtract.addEventListener("click", () => {
  let subtraction = subtract.innerHTML;
  result.textContent += subtraction;
});

divide.addEventListener("click", () => {
  let division = divide.innerHTML;
  result.textContent += division;
});

multiply.addEventListener("click", () => {
  let multiplication = multiply.value;
  result.textContent += multiplication;
  console.log(multiplication);
});

buttonsNum.forEach((num) => {
  num.addEventListener("click", () => {
    let nums = parseFloat(num.textContent);
    result.innerHTML += nums;
  });
});

resetBtn.addEventListener("click", () => {
  result.innerHTML = "";
});

deleteBtn.addEventListener("click", () => {
  result.innerHTML = result.innerHTML.slice(0, -1);
});

equalBtn.addEventListener("click", () => {
  result.textContent = eval(result.textContent);
});

// THEME LOCAL STORAGE

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "one") {
  switchToThemeOne();
} else if (savedTheme === "two") {
  switchToThemeTwo();
} else {
  switchToThemeThree();
}

// THEME LOCAL STORAGE

// THEME ONE //
function switchToThemeOne() {
  mainBg.style.backgroundColor = "hsl(222, 26%, 31%)";
  resultBg.style.backgroundColor = "hsl(224, 36%, 15%)";
  buttonHolderBg.style.backgroundColor = "hsl(223,31%,20%)";
  switchBg.style.backgroundColor = "hsl(223, 31%, 20%)";
  result.style.color = "hsl(0, 0%, 100%)";
  header.style.color = "hsl(0, 0%, 100%)";

  themeOne.style.opacity = "1";
  themeOne.style.backgroundColor = "hsl(6, 63%, 50%)";
  themeTwo.style.opacity = "0";
  themeThree.style.opacity = "0";

  buttonsNum.forEach((btn) => {
    btn.addEventListener("mouseover", () => {
      btn.style.backgroundColor = "white";
    });

    btn.addEventListener("mouseout", () => {
      btn.style.backgroundColor = "hsl(30, 25%, 89%)";
    });

    btn.style.backgroundColor = "hsl(30, 25%, 89%)";
    btn.style.boxShadow = "0px 4px 0px 0px hsl(28, 16%, 65%)";
    btn.style.color = "hsl(221, 14%, 31%)";
  });

  buttonsOperator.forEach((btn2) => {
    btn2.addEventListener("mouseover", () => {
      btn2.style.backgroundColor = "white";
    });

    btn2.addEventListener("mouseout", () => {
      btn2.style.backgroundColor = "hsl(30, 25%, 89%)";
    });

    btn2.style.backgroundColor = "hsl(30, 25%, 89%)";
    btn2.style.boxShadow = "0px 4px 0px 0px hsl(28, 16%, 65%)";
    btn2.style.color = "hsl(221, 14%, 31%)";
  });

  span.forEach((spn) => {
    spn.style.color = "hsl(0, 0%, 100%)";
  });

  // DECIMAL HOVER EFFECT //

  decimal.addEventListener("mouseover", () => {
    decimal.style.backgroundColor = "white";
  });

  decimal.addEventListener("mouseout", () => {
    decimal.style.backgroundColor = "hsl(30, 25%, 89%)";
  });

  // DECIMAL HOVER EFFECT //

  // DELETE HOVER EFFECT //

  deleteBtn.addEventListener("mouseover", () => {
    deleteBtn.style.backgroundColor = " hsl(225, 31%, 59%)";
  });

  deleteBtn.addEventListener("mouseout", () => {
    deleteBtn.style.backgroundColor = "hsl(225, 21%, 49%)";
  });

  // DELETE HOVER EFFECT //

  // RESET HOVER EFFECT //

  resetBtn.addEventListener("mouseover", () => {
    resetBtn.style.backgroundColor = " hsl(225, 31%, 59%)";
  });

  resetBtn.addEventListener("mouseout", () => {
    resetBtn.style.backgroundColor = "hsl(225, 21%, 49%)";
  });

  // RESET HOVER EFFECT //

  // EQUAL HOVER EFFECT //

  equalBtn.addEventListener("mouseover", () => {
    equalBtn.style.backgroundColor = "hsl(6, 91%, 66%)";
  });

  equalBtn.addEventListener("mouseout", () => {
    equalBtn.style.backgroundColor = "hsl(6, 63%, 50%)";
  });

  // EQUAL HOVER EFFECT //

  decimal.style.backgroundColor = "hsl(30, 25%, 89%)";
  decimal.style.boxShadow = "0px 4px 0px 0px hsl(28, 16%, 65%)";
  decimal.style.color = "hsl(221, 14%, 31%)";

  deleteBtn.style.backgroundColor = "hsl(225, 21%, 49%)";
  deleteBtn.style.boxShadow = "0px 4px 0px 0px hsl(224, 28%, 35%)";

  resetBtn.style.backgroundColor = "hsl(225, 21%, 49%)";
  resetBtn.style.boxShadow = "0px 4px 0px 0px hsl(224, 28%, 35%)";

  equalBtn.style.backgroundColor = "hsl(6, 63%, 50%)";
  equalBtn.style.boxShadow = "0px 4px 0px 0px hsl(6, 70%, 34%)";
  equalBtn.style.color = " hsl(0, 0%, 100%)";

  localStorage.setItem("theme", "one");
}

// THEME ONE //

// THEME TWO //
function switchToThemeTwo() {
  mainBg.style.backgroundColor = "hsl(0, 0%, 90%)";
  resultBg.style.backgroundColor = "hsl(0, 0%, 93%)";
  buttonHolderBg.style.backgroundColor = "hsl(0, 5%, 81%)";
  switchBg.style.backgroundColor = "hsl(0, 5%, 81%)";

  themeOne.style.opacity = "0";
  themeTwo.style.opacity = "1";
  themeTwo.style.backgroundColor = "hsl(25, 98%, 40%)";
  themeThree.style.opacity = "0";

  result.style.color = " hsl(60, 10%, 19%)";
  header.style.color = " hsl(60, 10%, 19%)";

  span.forEach((spn) => {
    spn.style.color = " hsl(60, 10%, 19%)";
  });

  buttonsNum.forEach((btn) => {
    btn.addEventListener("mouseover", () => {
      btn.style.backgroundColor = "white";
    });

    btn.addEventListener("mouseout", () => {
      btn.style.backgroundColor = "hsl(45, 7%, 89%)";
    });

    btn.style.backgroundColor = "hsl(45, 7%, 89%)";
    btn.style.boxShadow = "0px 4px 0px 0px hsl(35, 11%, 61%)";
    btn.style.color = "hsl(60, 10%, 19%)";
  });

  buttonsOperator.forEach((btn2) => {
    btn2.addEventListener("mouseover", () => {
      btn2.style.backgroundColor = "white";
    });

    btn2.addEventListener("mouseout", () => {
      btn2.style.backgroundColor = "hsl(45, 7%, 89%)";
    });

    btn2.style.backgroundColor = "hsl(45, 7%, 89%)";
    btn2.style.boxShadow = "0px 4px 0px 0px hsl(35, 11%, 61%)";
    btn2.style.color = "hsl(60, 10%, 19%)";
  });

  // DECIMAL HOVER EFFECT //
  decimal.addEventListener("mouseover", () => {
    decimal.style.backgroundColor = "white";
  });

  decimal.addEventListener("mouseout", () => {
    decimal.style.backgroundColor = "hsl(45, 7%, 89%)";
  });

  // DECIMAL HOVER EFFECT //

  // DELETE HOVER EFFECT //

  deleteBtn.addEventListener("mouseover", () => {
    deleteBtn.style.backgroundColor = " hsl(176, 100%, 34%)";
  });

  deleteBtn.addEventListener("mouseout", () => {
    deleteBtn.style.backgroundColor = "hsl(185, 42%, 37%)";
  });

  // DELETE HOVER EFFECT //

  // RESET HOVER EFFECT //

  resetBtn.addEventListener("mouseover", () => {
    resetBtn.style.backgroundColor = " hsl(176, 100%, 34%)";
  });

  resetBtn.addEventListener("mouseout", () => {
    resetBtn.style.backgroundColor = "hsl(185, 42%, 37%)";
  });

  // RESET HOVER EFFECT //

  // EQUAL HOVER EFFECT //

  equalBtn.addEventListener("mouseover", () => {
    equalBtn.style.backgroundColor = "hsl(25, 98%, 50%)";
  });

  equalBtn.addEventListener("mouseout", () => {
    equalBtn.style.backgroundColor = "hsl(25, 98%, 40%)";
  });

  // EQUAL HOVER EFFECT //

  decimal.style.backgroundColor = "hsl(45, 7%, 89%)";
  decimal.style.boxShadow = "0px 4px 0px 0px hsl(35, 11%, 61%)";
  decimal.style.color = "hsl(60, 10%, 19%)";

  deleteBtn.style.backgroundColor = "hsl(185, 42%, 37%)";
  deleteBtn.style.boxShadow = "0px 4px 0px 0px hsl(185, 58%, 25%)";

  resetBtn.style.backgroundColor = "hsl(185, 42%, 37%)";
  resetBtn.style.boxShadow = "0px 4px 0px 0px hsl(185, 58%, 25%)";

  equalBtn.style.backgroundColor = " hsl(25, 98%, 40%)";
  equalBtn.style.boxShadow = " 0px 4px 0px 0px hsl(25, 99%, 27%)";
  equalBtn.style.color = " hsl(0, 0%, 100%)";

  localStorage.setItem("theme", "two");
}

// THEME TWO //

// THEME THREE //
function switchToThemeThree() {
  mainBg.style.backgroundColor = "hsl(268, 75%, 9%)";
  resultBg.style.backgroundColor = "hsl( 268, 71%, 12%)";
  buttonHolderBg.style.backgroundColor = "hsl( 268, 71%, 12%)";
  switchBg.style.backgroundColor = "hsl( 268, 71%, 12%)";
  themeOne.style.opacity = "0";
  themeTwo.style.opacity = "0";
  themeThree.style.opacity = "1";
  themeThree.style.backgroundColor = "hsl(176, 100%, 44%)";

  result.style.color = " hsl(52, 100%, 62%)";
  header.style.color = " hsl(52, 100%, 62%)";

  span.forEach((spn) => {
    spn.style.color = "hsl(52, 100%, 62%)";
  });

  buttonsNum.forEach((btn) => {
    btn.addEventListener("mouseover", () => {
      btn.style.backgroundColor = "hsl(290, 70%, 36%)";
    });

    btn.addEventListener("mouseout", () => {
      btn.style.backgroundColor = "hsl(268, 47%, 21%)";
    });
    btn.style.backgroundColor = "hsl(268, 47%, 21%)";
    btn.style.boxShadow = "0px 4px 0px 0px hsl(290, 70%, 36%)";
    btn.style.color = "hsl(52, 100%, 62%)";
  });

  buttonsOperator.forEach((btn2) => {
    btn2.addEventListener("mouseover", () => {
      btn2.style.backgroundColor = "hsl(290, 70%, 36%)";
    });

    btn2.addEventListener("mouseout", () => {
      btn2.style.backgroundColor = "hsl(268, 47%, 21%)";
    });
    btn2.style.backgroundColor = "hsl(268, 47%, 21%)";
    btn2.style.boxShadow = "0px 4px 0px 0px hsl(290, 70%, 36%)";
    btn2.style.color = "hsl(52, 100%, 62%)";
  });

  // DECIMAL HOVER EFFECT //
  decimal.addEventListener("mouseover", () => {
    decimal.style.backgroundColor = "hsl(290, 70%, 36%)";
  });

  decimal.addEventListener("mouseout", () => {
    decimal.style.backgroundColor = "hsl(268, 47%, 21%)";
  });

  // DECIMAL HOVER EFFECT //

  // DELETE HOVER EFFECT //

  deleteBtn.addEventListener("mouseover", () => {
    deleteBtn.style.backgroundColor = "hsl(290, 70%, 36%)";
  });

  deleteBtn.addEventListener("mouseout", () => {
    deleteBtn.style.backgroundColor = "hsl(281, 89%, 26%)";
  });

  // DELETE HOVER EFFECT //

  // RESET HOVER EFFECT //

  resetBtn.addEventListener("mouseover", () => {
    resetBtn.style.backgroundColor = "hsl(290, 70%, 36%)";
  });

  resetBtn.addEventListener("mouseout", () => {
    resetBtn.style.backgroundColor = "hsl(281, 89%, 26%)";
  });

  // RESET HOVER EFFECT //

  // EQUAL HOVER EFFECT //

  equalBtn.addEventListener("mouseover", () => {
    equalBtn.style.backgroundColor = "hsl(177, 92%, 70%)";
  });

  equalBtn.addEventListener("mouseout", () => {
    equalBtn.style.backgroundColor = "hsl(176, 100%, 44%)";
  });

  // EQUAL HOVER EFFECT //

  decimal.style.backgroundColor = "hsl(268, 47%, 21%)";
  decimal.style.boxShadow = "0px 4px 0px 0px hsl(290, 70%, 36%)";
  decimal.style.color = "hsl(52, 100%, 62%)";

  deleteBtn.style.backgroundColor = "hsl(281, 89%, 26%)";
  deleteBtn.style.boxShadow = "0px 4px 0px 0px hsl(285, 91%, 52%)";

  resetBtn.style.backgroundColor = "hsl(281, 89%, 26%)";
  resetBtn.style.boxShadow = "0px 4px 0px 0px hsl(285, 91%, 52%)";

  equalBtn.style.backgroundColor = "hsl(176, 100%, 44%)";
  equalBtn.style.boxShadow = "0px 4px 0px 0px hsl(177, 92%, 70%)";
  equalBtn.style.color = "hsl(198, 20%, 13%)";

  localStorage.setItem("theme", "three");
}

// THEME THREE //

// THEME EVENT LISTENER //
themeOne.addEventListener("click", () => {
  switchToThemeOne();
});

themeTwo.addEventListener("click", () => {
  switchToThemeTwo();
});

themeThree.addEventListener("click", () => {
  switchToThemeThree();
});

// THEME EVENT LISTENER //
