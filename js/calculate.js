// Calculate Button Validition Check
let calculateBtnClicked = false;

//Player Expenses Calculate area start here
document
  .getElementById("calculate-per-player-btn")
  .addEventListener("click", function () {
    //Get Player List Length From the slected player list.
    let listLength = document.getElementsByTagName("li");
    let totalListItems = listLength.length;

    if (totalListItems === 0) {
      alert("Please Select Your Player..!!");
      return;
    }

    //Get Data From Player Price Input Field By Function Call
    const perPlayerPrice = getTextElementById("per-player-price-field");

    // Calcutale Button Clicked
    calculateBtnClicked = true;

    // Input Validition Check
    if (isNaN(perPlayerPrice)) {
      alert("Please Enter Valid Player Price..!!");
      return;
    }
    if (perPlayerPrice < 0) {
      alert("Please Enter Positive Price..!!");
      return;
    }
    //Calculate Player Expenses
    const perPlayerCalculate = perPlayerPrice * totalListItems;

    //now set this value on Player Expenses text
    const perPlayerPriceText = document.getElementById("per-player-price-text");
    perPlayerPriceText.innerText = perPlayerCalculate.toFixed(2);
  });
//Player Expenses Calculate area end here

// Calculate Total Price Area Start Here
document
  .getElementById("calculate-total-price-btn")
  .addEventListener("click", function () {
    // Manager Price Input Area
    const managerPrice = getTextElementById("manager-price-field");
    //calculate Button Click Validiton Check
    if (calculateBtnClicked === false) {
      alert("Calculate Player Expence First..!!");
      return;
    }

    // Manager Input Validation Check
    if (isNaN(managerPrice)) {
      alert("Please Enter Valid Manager Price..!!");
      return;
    }
    if (managerPrice < 0) {
      alert("Please Enter Positive Manager Price..!!");
      return;
    }
    // Manager Input Validation Check

    //Coach Price Input Area
    const coachPrice = getTextElementById("coach-price-field");
    // Coach Input Validation Check
    if (isNaN(coachPrice)) {
      alert("Please Enter Valid Coach Price..!!");
      return;
    }
    if (coachPrice < 0) {
      alert("Please Enter Positive Coach Price..!!");
      return;
    }
    // Coach Input Validation Check

    //Get Value From Per Player Expenses
    const perPlayerExpenxeElement = document.getElementById(
      "per-player-price-text"
    );
    const perPlayerExpenxeElementString = perPlayerExpenxeElement.innerText;
    const perPlayerExpenxe = parseFloat(perPlayerExpenxeElementString);

    //Now Calculate Total Price
    const totalPrice = perPlayerExpenxe + managerPrice + coachPrice;

    // Now Set This value On Total Price Text
    const totalPriceText = document.getElementById("total-price-text");
    totalPriceText.innerText = totalPrice.toFixed(2);
  });
// Calculate Total Price Area End Here
