// let bouton = document.querySelector(".inscription");
// letmetier = document.querySelector("#nom").value;
// let age = document.querySelector("#age").value;
// let salaire = document.querySelector("#password").value;

// bouton.addEventListener("click", (e) => {
//   e.preventDefault;
//   let bd = JSON.parse(localStorage.getItem("battle")) || [];

//   let user = {
//     nom: nom,
//     email: email,
//     password: password,
//   };
//   bd.push(user);
//   localStorage.setItem("battle", JSON.stringify(bd));
//   console.log(bd);
// });

let inputBouton = document.querySelector(".submit");

function envoie() {
  //e.preventDefault();
  let bdUtilisateur = JSON.parse(localStorage.getItem("info")) || [];
  let sesion = JSON.parse(sessionStorage.getItem("sesion")) || [];
  console.log(sesion);
  let metier = document.querySelector("#metier").value;
  let age = document.querySelector("#age").value;
  let salaire = document.querySelector("#salaire").value;
  console.log(salaire);

  let utilisateur = {
    metier: metier,
    age: age,
    salaire: salaire,
    userid:sesion.email
  };
  bdUtilisateur.push(utilisateur);
  localStorage.setItem("info", JSON.stringify(bdUtilisateur));
}

function verifChamp() {
  let metier = document.querySelector("#metier").value;
  console.log(metier);
  let age = document.querySelector("#age").value;
  let salaire = document.querySelector("#salaire").value;

  if (metier === "") {
    alert("entrer votre metier");
    return false;
  }

  if (age === "") {
    alert("entrer votre age");
    return false;
  }
  if (salaire === "") {
    alert("entrer votre salaire");
    return false;
  }

  return true;
}

inputBouton.addEventListener("click", (e) => {
  if (verifChamp() === true) {
    e.preventDefault();
    alert("votre iinfo  a ete enregistrer avec succes");
    envoie();
    window.location.reload();
  }
});
