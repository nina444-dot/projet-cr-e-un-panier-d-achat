// boutons ajouter
const boutonsAjouter = document.querySelectorAll(".add-btn");
const listePanier = document.getElementById("cart-list");
const totalTexte = document.getElementById("total");
let total = 0;

boutonsAjouter.forEach((bouton) => {
  bouton.addEventListener("click", () => {
    const nomProduit = bouton.dataset.name;
    const prixProduit = Number(bouton.dataset.price);

    // carte pareil que à gauche
    const article = document.createElement("div");
    article.className = "product in-panier";

    const titre = document.createElement("h3");
    titre.textContent = nomProduit;

    const prix = document.createElement("p");
    prix.textContent = "Prix : " + prixProduit + "€";

    const btn = document.createElement("button");
    btn.textContent = "Retirer";
    btn.className = "remove-btn";

    btn.addEventListener("click", () => {
      article.remove();
      total -= prixProduit;
      totalTexte.textContent = "Total : " + total + "€";
    });

    article.appendChild(titre);
    article.appendChild(prix);
    article.appendChild(btn);

    listePanier.appendChild(article);

    total += prixProduit;
    totalTexte.textContent = "Total : " + total + "€";
  });
});
