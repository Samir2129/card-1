
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.category-item button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Logic for opening the template editor
            alert('Redirecting to card editor...');
        });
    });
});
