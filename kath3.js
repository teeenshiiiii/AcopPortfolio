document.querySelectorAll('.photo-grid img').forEach(function (img) {
    img.addEventListener('click', function () {
        const repoLink = img.getAttribute('data-link');
        if (repoLink) {
            window.open(repoLink, '_blank'); // Open the repository link in a new tab
        }
    });
});