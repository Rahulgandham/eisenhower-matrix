document.addEventListener('DOMContentLoaded', function() {
    const quadrants = document.querySelectorAll('.quadrant');

    quadrants.forEach(quadrant => {
        quadrant.addEventListener('click', function() {
            const quadrantId = this.id;
            alert(`You clicked on quadrant: ${quadrantId}`);
        });
    });
});
