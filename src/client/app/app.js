/*

Author: Isaac Wisniewski
Course: INFT 2202
Date 2/12/2025
Description: app.js creates a listener on html load that appends current date to copyright id



*/

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("copyright").append(new Date().getFullYear());
})



// let counter = 0;



// document.addEventListener("click", function () {
//     counter = counter + 1;
//     console.log(counter)
//     if (counter == 5) {
//         console.log("Clicked 5 times");
//     };

// });
