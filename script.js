const documents = [
{
title: "Impact de l'IA",
type: "Article",
file: "pdf/ia.pdf"
},
{
title: "Changement climatique",
type: "Rapport",
file: "pdf/climat.pdf"
},
{
title: "Gestion de l'eau",
type: "Thèse",
file: "pdf/eau.pdf"
}
]

function afficherDocuments(liste){

let container = document.querySelector(".documents")

container.innerHTML = "<h2>Derniers Documents</h2>"

liste.forEach(doc => {

container.innerHTML += `
<div class="card">
<h3>${doc.title}</h3>
<p>${doc.type}</p>
<button onclick="ouvrirPDF('${doc.file}')">
Télécharger PDF
</button>
</div>
`

})

}

function ouvrirPDF(fichier){

window.open(fichier, "_blank")

}

function rechercher(){

let input = document
.getElementById("searchInput")
.value
.toLowerCase()

let resultat = documents.filter(doc =>
doc.title.toLowerCase().includes(input)
)

afficherDocuments(resultat)

}

afficherDocuments(documents)
