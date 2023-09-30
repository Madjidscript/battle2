// let bouton = document.querySelector(".inscription");
// let nom = document.querySelector("#nom").value;
// let email = document.querySelector("#email").value;
// let password = document.querySelector("#password").value;

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

let inputBouton = document.querySelector(".inscription");

function envoie() {
  //e.preventDefault();
  let bdUtilisateur = JSON.parse(localStorage.getItem("yaya")) || [];
  let nom = document.querySelector("#nom").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  // // crer unid pour l'utilisateur
  // let nouvelId = 1;
  // if (bdUtilisateur.length > 0) {
  //   const dernierUtilisateur = bdUtilisateur[bdUtilisateur.length - 1];
  //   nouvelId = dernierUtilisateur.id + 1;
  // }
  //je creer unobjet

  let utilisateur = {
    // id: nouvelId,
    nom: nom,
    email: email,
    password: password,
  };
  bdUtilisateur.push(utilisateur);
  localStorage.setItem("yaya", JSON.stringify(bdUtilisateur));
}

function verifChamp() {
  let nom = document.querySelector("#nom").value;
  console.log(nom);
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;

  if (nom === "") {
    alert("entrer votre nom");
    return false;
  }

  if (email === "") {
    alert("entrer votre email");
    return false;
  }
  if (password === "") {
    alert("entrer votre password");
    return false;
  }

  return true;
}

inputBouton.addEventListener("click", (e) => {
  if (verifChamp() === true) {
    e.preventDefault();
    alert("votre inscription a ete effectuer avec succes");
    envoie();
    window.location.href = "./connexion.html";
  }
});
