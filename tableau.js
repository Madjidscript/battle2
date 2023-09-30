let bdDonner = JSON.parse(localStorage.getItem("info")) || [];
let sesion = JSON.parse(sessionStorage.getItem("sesion")) || [];

console.log(bdDonner);

function afficheDataCont() {
  let html = "";
  bdDonner.find((element, index) => {
    if (element.userid === sesion.email) {
      html += `
      <tr>
        <td>${element.metier} </td>
        <td>${element.age} </td>
        <td>${element.salaire}</td>

        
        
        
      </tr>`;
    }
  });

  document.querySelector("#insert").innerHTML = html;
  console.log(html);
}
function supprimer(sup) {
  let bdDonne = JSON.parse(localStorage.getItem("info")) || [];
  bdDonne.slice(sup, 1);
  localStorage.setItem("info", JSON.stringify(bdDonne));
}

document.onload = afficheDataCont();

// let messagePaiement = JSON.parse(localStorage.getItem("paiement")) || [];

// function afficheDataPaiement() {
//   let date = "";
//   messagePaiement.forEach((element) => {
//     date += ` <p>${element.dates} </p>

//     `;
//   });

//   document.querySelector(".date").innerHTML = date;
// }

// document.onload = afficheDataPaiement();

// function afficheDataMontant() {
//   let montant = "";
//   messagePaiement.forEach((element) => {
//     montant += ` <p>${element.montants} </p> `;
//   });

//   document.querySelector(".valeur").innerHTML = montant;
// }

// document.onload = afficheDataMontant();
