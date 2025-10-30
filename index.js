// On récupère tous les boutons "Ajouter"
const boutonsAjouter = document.querySelectorAll(".add-btn");

// On récupère la liste du panier et le total
const listePanier = document.getElementById("cart-list");
const totalTexte = document.getElementById("total");

// Variable pour garder le total
let total = 0;

// Pour chaque bouton "Ajouter"
boutonsAjouter.forEach(function (bouton) {
  bouton.addEventListener("click", function () {
    // On récupère le nom et le prix du produit
    const nomProduit = bouton.dataset.name;
    const prixProduit = Number(bouton.dataset.price);

    // On crée un nouvel élément <li> pour afficher dans le panier
    const nouvelElement = document.createElement("li");
    nouvelElement.textContent = nomProduit + " - " + prixProduit + "€";

    // On ajoute cet élément à la liste du panier
    listePanier.appendChild(nouvelElement);

    // On met à jour le total
    total = total + prixProduit;
    totalTexte.textContent = "Total : " + total + "€";
  });
});
