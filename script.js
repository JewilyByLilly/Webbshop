// Funktion som visar ett meddelande när användaren klickar på en knapp
function showAlert(productName) {
    alert(`Tack för att du är intresserad av ${productName}!`);
}

// Lägg till händelser på alla knappar när sidan har laddats
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.getAttribute('data-product'); // Hämta produktens namn
            showAlert(product);
        });
    });
});
