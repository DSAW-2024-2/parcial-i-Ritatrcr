const shareButton = document.getElementById('shareButton');
const shareOptions = document.getElementById('shareOptions');

shareButton.addEventListener('click', function() {
    if (shareOptions.style.display === 'none' || shareOptions.style.display === '') {
        shareOptions.style.display = 'flex';
        shareButton.classList.add('active-button'); 
    } else {
        shareOptions.style.display = 'none';
        shareButton.classList.remove('active-button');
    }
});
