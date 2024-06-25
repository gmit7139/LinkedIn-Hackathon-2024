document.getElementById('current-image').addEventListener('click', function() {
    var img = document.getElementById('current-image');
    var currentSrc = img.src.split('/').pop(); // Get the filename only

    if (currentSrc === 'Home.png') {
        img.src = 'CareerJourney.png';
    } else {
        img.src = 'Home.png';
    }
});
