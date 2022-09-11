//Common Function Create for All player Select
function selectPlayerById(elementId) {
  // // Get value From The Player Name
  const playerNameElement = document.getElementById(elementId);
  const playerName = playerNameElement.innerText;

  // Now add this value On the Player List
  const playerList = document.getElementById("selected-player");
  const li = document.createElement("li");
  li.innerText = playerName;

  //now add it on the child &
  let lisItems = document.getElementsByTagName("li");
  let totalListItems = lisItems.length;

  //disable after button clicked & create selected list.
  if (totalListItems != 5) {
    //set value on how many player are selected.
    const selectedCount = document.getElementById('selected-count');
    selectedCount.innerText = totalListItems + 1;
    playerList.appendChild(li);

  } else {
    alert("Congratulations !! You Selected Best Five Player..!!! ");
    const buttonEnable = this.classList;
    const classListValue = this.classList;
    classListValue.add("enabled");
  }

}
//Common Function Create for All player Select

//Get Calculate Input Feild value by Function Start Here
function getTextElementById(elementId) {
  const priceFieldElement = document.getElementById(elementId);
  const priceFieldElementString = priceFieldElement.value;
  if (isNaN(priceFieldElementString)) {
    return;
  }
  const priceField = parseFloat(priceFieldElementString);
  return priceField;
}
//Get Calculate Input Feild value by Function Start Here
