"use strict";

const students = [
    {
        id:1,
        firstName: "Jonas",
        lastName: "Jonaitis",
        group: "JS24",
        results: {
            'db': 7.5,
            'js': 8,
            'Linux': 6
        }
    },
    {
        id:2,
        firstName: "Petras",
        lastName: "Petraitis",
        group: "JS24",
        results: {
            'db': 5.5,
            'js': 4,
            'Linux': 9
        }
    },
    {
        id:3,
        firstName: "Vardenis",
        lastName: "Pavardenis",
        group: "JS24",
        results: {
            'db': 4.5,
            'js': 8,
            'Linux': 6
        }
    },
    {
        id:4,
        firstName: "Tomas",
        lastName: "Tomaitis",
        group: "JS24",
        results: {
            'db': 9.5,
            'js': 4,
            'Linux': 6
        }
    },
    {
        id:5,
        firstName: "Ieva",
        lastName: "Ievaite",
        group: "JS24",
        results: {
            'db': 9.5,
            'js': 8,
            'Linux': 9
        }
    }
];

const studentsBody = document.getElementById("studentsBody");

const displayStudents = students => {
    studentsBody.innerHTML = '';

students.forEach(item => {
    let row = document.createElement("tr");

    let idCell = document.createElement("td");
    idCell.textContent = item.id;
    row.appendChild(idCell);

    let firstNameCell = document.createElement("td");
    firstNameCell.textContent = item.firstName;
    row.appendChild(firstNameCell);

    let lastNameCell = document.createElement("td");
    lastNameCell.textContent = item.lastName;
    row.appendChild(lastNameCell);

    let groupCell = document.createElement("td");
    groupCell.textContent = item.group;
    row.appendChild(groupCell);

    let resultsCell = document.createElement("td");
    resultsCell.textContent = `db: ${item.results.db}, js: ${item.results.js}, linux: ${item.results.Linux}`;
    row.appendChild(resultsCell);

    studentsBody.appendChild(row);

    });
    document.getElementById("filterName").addEventListener("click", filterByName);
    document.getElementById("filterABC").addEventListener("click", filterByAlphabet);
    document.getElementById("filterGrade").addEventListener("click", filterByGrade);
   
};

    const filterByName = () => {
        const filtered = students.filter(student => student.firstName.length <= 5);
        displayStudents(filtered)
    };

    const filterByAlphabet = () => {
        const sorted = students.sort((a,b) => a.lastName.localeCompare(b.lastName));
        displayStudents(sorted);
    };

    const filterByGrade = () => {
        const minimumGrade = 7;
        const filtered = students.filter(student => {
            const average = (student.results.db + student.results.js + student.results.Linux) / 3;
            return average > minimumGrade;
        });
    
        displayStudents(filtered)
    };

    displayStudents(students);