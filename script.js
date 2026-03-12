const documents = [
{
title: "Impact de l'IA",
type: "Article",
file: "#"
},
{
title: "Changement climatique",
type: "Rapport",
file: "#"
},
{
title: "Gestion de l'eau",
type: "Thèse",
file: "#"
}
];

function afficherDocuments(liste){

let container = document.getElementById("documentsContainer");

container.innerHTML = "<h2>Derniers Documents</h2>";

liste.forEach(doc => {

container.innerHTML += `
<div class="card">
<h3>${doc.title}</h3>
<p>${doc.type}</p>
<a href="${doc.file}" target="_blank">Télécharger PDF</a>
</div>
`;

});

}

function rechercher(){

let texte = document
.getElementById("searchInput")
.value
.toLowerCase();

let resultat = documents.filter(doc =>
doc.title.toLowerCase().includes(texte)
);

afficherDocuments(resultat);

}

afficherDocuments(documents);
