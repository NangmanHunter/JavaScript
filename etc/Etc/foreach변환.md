Array.from(document.getElementsByClassName("ClassType")).forEach((item) => {
    item.innerHTML = 1;
});



[...document.getElementsByClassName("ClassType")].forEach((item) => {
    item.innerHTML = 1;
});