// function createCalendar(year, month) {
//     const calendar = document.getElementById("calendar");
//     calendar.innerHTML = ""; // Clear existing calendar

//     // Days of the week header
//     const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//     days.forEach(day => {
//         const header = document.createElement("div");
//         header.className = "header";
//         header.innerText = day;
//         calendar.appendChild(header);
//     });

//     const firstDay = new Date(year, month, 1).getDay();
//     const daysInMonth = new Date(year, month + 1, 0).getDate();

//     // Blank cells for days before the start of the month
//     for (let i = 0; i < firstDay; i++) {
//         const emptyCell = document.createElement("div");
//         calendar.appendChild(emptyCell);
//     }

//     // Calendar days
//     for (let day = 1; day <= daysInMonth; day++) {
//         const cell = document.createElement("div");
//         cell.innerText = day;
//         calendar.appendChild(cell);
//     }
// }

// // Example: Display current month's calendar
// const today = new Date();
// createCalendar(today.getFullYear(), today.getMonth());
