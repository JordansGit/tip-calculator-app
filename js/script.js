let customPct = document.getElementById("customPct"); 
let billInput = document.querySelector(".bill-input");
let peopleInput = document.querySelector(".people-input");

let resetButton = document.querySelector(".reset-button");

let tipAmount = document.querySelector(".tip-amount"); 
let totalAmount = document.querySelector(".total-amount"); 

let tipBtnGrp = document.querySelectorAll(".tip"); 


let tip = 0;  

// get the tip value;
for (var i = 0; i < tipBtnGrp.length; i++) {
  tipBtnGrp[i].addEventListener('click', function(e) {
    tip = Number(e.target.value); 

    // change bg color of tip buttons when selected (except for the last input) 
    var current = document.getElementsByClassName('active'); 

    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", ""); /* remove active class */ 
    }
    if (this.type === 'submit') {
      this.className += " active";
    }
    console.log("tip: " + tip);
  })
  tipBtnGrp[i].addEventListener('click', calculate);
}

// get custom percent value. 
customPct.addEventListener('keyup', function(e) {
  tip = Number(e.target.value);
  console.log("tip: " + tip);
})

let billInputVal;
let peopleInputVal;

// get bill input value. 
billInput.addEventListener('keydown', function(e) {
  billInputVal = e.target.value;
})



// get no. of ppl input value
peopleInput.addEventListener('keyup', function(e) {
  peopleInputVal = this.value;
  let error = document.querySelector(".right");

  // display "can't be zero" text if no. of ppl = 0. 
  if (peopleInputVal == 0) {
    error.style.display = 'block';
  } else {
    error.style.display = 'none';
  }
})



/* function to update cost */ 
let tipPP;
let totalPP;
function calculate() {
  if ((billInput.value != '' || billInput.value != 0) && (peopleInput.value != '' || peopleInput.value != 0)) {
    tipPP = (Number(billInput.value)) / Number(peopleInput.value) * (tip / 100);  
    totalPP = (Number(billInput.value)) / Number(peopleInput.value) + Number(tipPP);

    tipAmount.innerText = '$' + tipPP.toFixed(2); 
    totalAmount.innerText = '$' + totalPP.toFixed(2); 

    // if number of people = 0, just leave result as 0.00 instead of it showing NaN. 
    if (isNaN(tipPP) || tipPP === Infinity) {
      tipAmount.innerText = '$0.00'; 
      totalAmount.innerText = '$0.00'; 
    }
    resetButton.classList.add('active'); 
  }
  
}

// run function when the 3 input fields are triggered. 
customPct.addEventListener('keyup', calculate); // input might be the wrong 
billInput.addEventListener('keyup', calculate); 
peopleInput.addEventListener('keyup', calculate);


// reset button 
resetButton.addEventListener('click', function() {
  billInput.value = ''; 
  customPct.value = '';
  peopleInput.value = '';
  tipAmount.innerText = '$0.00'; 
  totalAmount.innerText = '$0.00'; 
  this.classList.remove('active')
})



/*
THE tipPP and totalPP EQUATIONS ARE CORRECT, I JUST DON'T THINK IT GETS UPDATED IMMEDIATELY WHEN ASSIGNING IT TO A VARIABLE. IDK. 
 - so the text inside the if statement is correct, I just need it to execute. 


Learning notes: 
for the 6 child elements of tip buttons group, the 5 buttons have a type of submit and the custom input has a type of number, this way we can change the bg of only the 5 buttons without touchign the 6 child (the custom input);

*/