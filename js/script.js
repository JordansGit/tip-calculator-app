/* if reset button, reset = true, then change colour of reset button. leave reset = true by default. which happens when it shows $0.00 on form. 
- for tip amount buttons, if they are active, change colour. 
- automatically update the number each time bill, tip amount, and no of ppl are changed. 

- when reset, the calculation number changes to 0, form fields = empty, and the tip amount buttons are not active. + reset button changes colour. 
  if reset = false (aka it's @ 0.00) reset button curser = default. when true cursor = pointer. 
  
  remove active class background on color (h1 and .reset), instead change it to the above. i.e when selected. 

  refactor css. 
*/ 