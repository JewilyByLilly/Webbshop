// Enkel funktion för att visa en alert när användaren klickar på en knapp
function showAlert(productName) {
    alert(`Tack för att du är intresserad av ${productName}!`);
}

// Kopplar en knapp till funktionen
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.getAttribute('data-product');
            showAlert(product);
        });
    });
});
