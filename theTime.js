// Displays time in military time that also acts as a hexidecimal code
function displayTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // Adds zero to left of numbers
    if (hours <= 9) hours = '0' + hours;
    if (minutes <= 9) minutes = '0' + minutes;
    if (seconds <= 9) seconds = '0' + seconds;
    
    const color = "#" + hours + minutes + seconds;
    
    document.body.style.background = color;
    document.getElementById("hex").innerHTML = color;
    
    setTimeout(displayTime, 1000);
}

displayTime();
