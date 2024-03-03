// Sélectionner le bouton
var boutonAlerte = document.getElementById("bouton-alerte");

// Ajouter un gestionnaire d'événement au clic sur le bouton
boutonAlerte.addEventListener("click", function() {
    // Afficher une boîte de dialogue avec un message d'alerte
    alert("Bienvenue sur notre site de sport !");
});
// Sélectionner le formulaire
var form = document.querySelector('form');

// Ajouter un écouteur d'événement pour le submit du formulaire
form.addEventListener('submit', function(event) {
    // Empêcher le comportement par défaut du formulaire
    event.preventDefault();

    // Récupérer les valeurs des champs
    var username = document.getElementById('username').value;
    var birthdate = document.getElementById('birthdate').value;
    var location = document.getElementById('location').value;

    // Afficher un message de bienvenue
    alert('Bienvenue, ' + username + '! Vous êtes né le ' + birthdate + ' à ' + location + '.');
});
