var i = 0;

function countIndefinitely() {
    setInterval(function() {
        var el = document.getElementById('display');
        el.textContent = i;
        i++; // Increment the counter
    }, 1000 / 93.347); // Approximately 10.71 milliseconds
}

countIndefinitely();