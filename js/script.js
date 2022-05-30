let customPct = document.getElementById("customPct"); 
let billInput = document.querySelector(".bill-input");
let peopleInput = document.querySelector(".people-input");

let resetButton = document.querySelector(".reset-button");

let tipAmount = document.querySelector(".tip-amount"); 
let totalAmount = document.querySelector(".total-amount"); 

let tipBtnGrp = document.querySelectorAll(".tip"); 


let tip; // somehow get the tip value if either 1 of the 5-50% btns are pressed or a custom percent is inputted, and put it into this var. 

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
    console.log(tip);
  })
}


let billInputVal;
let customPctVal;
let peopleInputVal;

// get bill input value. 
billInput.addEventListener('keyup', function(e) {
  billInputVal = e.target.value;
  console.log(billInputVal);
})

// get custom percent value. 
customPct.addEventListener('keyup', function(e) {
  customPctVal = e.target.value;
  console.log(customPctVal);
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
window.onload = function(){
  // your code here
  if ((billInput.value == true) && (peopleInput.value == true)) {
    tipPP = ((Number(billInput.value)) / Number(peopleInput.value) * (tip / 100)).toFixed(2);  
    totalPP = ((Number(billInput.value)) / Number(peopleInput.value) + Number(tipPP)).toFixed(2);
  
    tipAmount.innerText = '$' + tipPP; 
    totalAmount.innerText = '$' + totalPP; 
  }
  
};




// reset button 
resetButton.addEventListener('click', function() {
  billInput.value = ''; 
  customPct.value = '';
  peopleInput.value = '';
})



/*
THE tipPP and totalPP EQUATIONS ARE CORRECT, I JUST DON'T THINK IT GETS UPDATED IMMEDIATELY WHEN ASSIGNING IT TO A VARIABLE. IDK. 
 - so the text inside the if statement is correct, I just need it to execute. 


Learning notes: 
for the 6 child elements of tip buttons group, the 5 buttons have a type of submit and the custom input has a type of number, this way we can change the bg of only the 5 buttons without touchign the 6 child (the custom input);

*/