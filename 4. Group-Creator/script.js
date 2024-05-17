let peopleCount = 0;
let canAddPeople = true;
let people = [];

const formGroupsBtn = document.getElementById("formGroups");
formGroupsBtn.disabled = true;

const groupSection = document.getElementById('group');
const groupList = document.querySelector(".groupList");

/* Add People Inputs Appear */

const addFn = () => {
    if (!canAddPeople) {
        return;
    }

    const input = document.getElementById("inputFields");   
    const wrapper = document.createElement("div");
    wrapper.classList.add("person-block");

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
        formGroupsBtn.disabled = false;
        formGroupsBtn.style.display = "block";
    } else {
        formGroupsBtn.disabled = true;
        formGroupsBtn.style.display = "none";
    }

    const addButton = document.createElement("button");
    addButton.textContent = "Add";
    wrapper.appendChild(addButton);

    addButton.addEventListener("click", function () {
        const firstName = firstNameInput.value.trim();
        const lastName = lastNameInput.value.trim();

        if (firstName && lastName) {
            people.push({ firstName, lastName });
            const personBlock = document.createElement("div");
            personBlock.textContent = `${firstName} ${lastName}`;
            document.body.appendChild(personBlock);
            wrapper.remove();
            alert("Successfully added.")
        } else {
            alert("Please enter both first and last names.");
        }
    });
};

/* Group Input Appearing */

formGroupsBtn.addEventListener("click", function () {
    if (groupSection.style.display === "none") {
        groupSection.style.display = "block";
        canAddPeople = false;
    } else {
        groupSection.style.display = "none";
    };
});

const proceedBtn = document.getElementById("proceedButton");

proceedBtn.addEventListener("click", function () {
    let groupCount = document.getElementById('groupCountInput').value;
    groupCount = parseInt(groupCount);
    const groupList = document.querySelector(".groupList");

    if (isNaN(groupCount)) {
        alert("Please enter a valid number.");
    } else if (groupCount < 1) {
        alert("At least 1 group is required.");
    } else if (groupCount > peopleCount) {
        alert("There cannot be more groups than the number of people.");
    } else if (groupCount > 20) {
        alert("There cannot have more than 20 groups.");
    } else {
        displayGroups(groupCount);
    }
});

function displayGroups(groupCount) {
    // Shuffle the people array
    for (let i = people.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [people[i], people[j]] = [people[j], people[i]];
    }

    groupList.innerHTML = ''; // Clear previous groups

    for (let i = 0; i < groupCount; i++) {
        const li = document.createElement("li");
        li.innerText = `Group ${i + 1}`;
        const ul = document.createElement("ul");
        ul.classList.add("sub-group");

        groupList.appendChild(li);
        li.appendChild(ul);
    }

    people.forEach((person, index) => {
        const groupIndex = index % groupCount;
        const groupUl = groupList.querySelectorAll("ul")[groupIndex];

        const personLi = document.createElement("li");
        personLi.innerText = `${person.firstName} ${person.lastName}`;
        groupUl.appendChild(personLi);
    });

    groupList.style.display = "block";
}