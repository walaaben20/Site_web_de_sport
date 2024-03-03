
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
// Sélectionner tous les liens de la barre de navigation
var navLinks = document.querySelectorAll('nav ul li a');

// Ajouter un gestionnaire d'événement pour chaque lien
navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        // Supprimer la classe 'active' de tous les liens
        navLinks.forEach(function(link) {
            link.classList.remove('active');
        });
        // Ajouter la classe 'active' au lien cliqué
        link.classList.add('active');
    });
});
// Sélectionner le champ de recherche
var searchInput = document.getElementById('searchInput');

// Ajouter un écouteur d'événement pour détecter le clic sur la barre de recherche
searchInput.addEventListener('click', function(event) {
    // Empêcher la propagation de l'événement pour ne pas fermer la barre de recherche
    event.stopPropagation();
});
