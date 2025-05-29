// .....dom input one ........
let errorM_One = document.querySelector(".errorM_One");
let input_one = document.querySelector(".input_one");
let button_one = document.querySelector(".button_one");
let outPut_one = document.querySelector(".outPut_one");
let i = 0;
outPut_one.innerHTML = i;
//........first div event . ..........
button_one.addEventListener("click", () => {
  if (!input_one.value) {
    outPut_one.innerHTML = "";
    errorM_One.innerHTML = "Empty input can't be counted.";
  } else if (input_one.value <= 0) {
    outPut_one.innerHTML = "";
    errorM_One.innerHTML = "The minimum required value is 1.";
    input_one.value = "";
  } else {
    errorM_One.innerHTML = "";
    let myFun = () => {
      i++;
      if (i == input_one.value) {
        clearInterval(mySet);
      }
      outPut_one.innerHTML = i;
    };
    let mySet = setInterval(() => {
      myFun();
    }, 400);
    // input_one.value = "";
  }
});

// .....dom input two ........
let errorM_two = document.querySelector(".errorM_two");
let input_two = document.querySelector(".input_two");
let button_two = document.querySelector(".button_two");
let outPut_two = document.querySelector(".outPut_two");
let j = 0;

outPut_two.innerHTML = j;

//........second div event . ..........
button_two.addEventListener("click", () => {
  if (!input_two.value) {
    outPut_two.innerHTML = "";
    errorM_two.innerHTML = "Empty input can't be counted.";
  } else if (input_two.value <= 0) {
    outPut_two.innerHTML = "";
    errorM_two.innerHTML = "The minimum required value is 1.";
    input_two.value = "";
  } else {
    errorM_two.innerHTML = "";
    let myFunTwo = () => {
      j++;
      if (j == input_two.value) {
        clearInterval(mySetTwo);
      }

      outPut_two.innerHTML = j;
    };
    let mySetTwo = setInterval(myFunTwo, 400);
  }
});

// .....dom input three ........
let errorM_three = document.querySelector(".errorM_three");
let input_three = document.querySelector(".input_three");
let button_three = document.querySelector(".button_three");
let outPut_three = document.querySelector(".outPut_three");
let k = 0;
outPut_three.innerHTML = k;
button_three.addEventListener("click", () => {
  if (!input_three.value) {
    outPut_three.innerHTML = "";
    errorM_three.innerHTML = "Empty input can't be counted.";
  } else if (input_three.value <= 0) {
    outPut_three.innerHTML = "";
    errorM_three.innerHTML = "The minimum required value is 1.";
    input_three.value = "";
  } else {
    errorM_three.innerHTML = "";
    let myFunThree = () => {
      k++;
      if (k == input_three.value) {
        clearInterval(mySetThree);
      }
      outPut_three.innerHTML = k;
    };
    let mySetThree = setInterval(myFunThree, 400);
  }
});

// .....dom input four ........
let errorM_four = document.querySelector(".errorM_four");
let input_four = document.querySelector(".input_four");
let button_four = document.querySelector(".button_four");
let outPut_four = document.querySelector(".outPut_four");
let l = 0;

outPut_four.innerHTML = l;
button_four.addEventListener("click", () => {
  if (!input_four.value) {
    outPut_four.innerHTML = "";
    errorM_four.innerHTML = "Empty input can't be counted.";
  } else if (input_four.value <= 0) {
    outPut_four.innerHTML = "";
    errorM_four.innerHTML = "The minimum required value is 1.";
    input_four.value = "";
  } else {
    errorM_four.innerHTML = "";

    let myFunFour = () => {
      l++;
      if (input_four.value == l) {
        clearInterval(mySetFour);
      }
      outPut_four.innerHTML = l;
    };
    let mySetFour = setInterval(myFunFour, 400);
  }
});
