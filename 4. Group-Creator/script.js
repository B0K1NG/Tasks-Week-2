let peopleCount = 0;
let canAddPeople = true;

const formGroups = document.getElementById("formGroups");
formGroups.disabled = true;

const groupSection = document.getElementById('group')

/* Add People Inputs Appear */

addFn = () => {
    if (!canAddPeople) {
        return
    }

    const input = document.getElementById("inputFields");   
    const wrapper = document.createElement("div");

    // First Name Input
    const firstNameInput = document.createElement("input");
    firstNameInput.setAttribute("type", "text");
    firstNameInput.setAttribute("placeholder", "Name");
    wrapper.appendChild(firstNameInput);

    // Last Name Input
    const lastNameInput = document.createElement("input");
    lastNameInput.setAttribute("type", "text");
    lastNameInput.setAttribute("placeholder", "Last Name");
    wrapper.appendChild(lastNameInput);

    
    input.appendChild(wrapper);

    peopleCount += 1;

    if (peopleCount >= 5 && peopleCount <= 20) {
        formGroups.disabled = false;
    } else {
        formGroups.disabled = true;
    }
};

/* Group Input Appearing */

formGroups.addEventListener("click", function () {
    if (groupSection.style.display === "none") {
        groupSection.style.display = "block";
        canAddPeople = false;
    } else {
        groupSection.style.display === "none";
    };
});

const proceedBtn = document.getElementById("proceedButton");

proceedBtn.addEventListener("click", function () {
    let groupCount = document.getElementById('groupCountInput').value;
    groupCount = parseInt(groupCount);
    const groupList = document.getElementById("groupList")

    if (isNaN(groupCount)) {
        alert("Please enter a valid number.");
    } else if (groupCount < 1) {
        alert("At least 1 group is required.")
    } else if ( groupCount > peopleCount) {
        alert("There cannot be more groups than the number of people.")
    } else if (groupCount > 20) {
        alert("There cannot have more than 20 groups.")
    } else {
        return true;
    }
    return false;

    
});
