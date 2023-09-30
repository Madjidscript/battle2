let boutonConnexion = document.querySelector("#connexion");
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let bdUser = JSON.parse(localStorage.getItem("yaya"));

  let resultat;
  bdUser.forEach((user) => {
    console.log("user");
    if (
      document.querySelector("#email").value === user.email &&
      document.querySelector("#password").value === user.password
    ) {
      //   console.log("passserrrrr verif");
      resultat = user;
      console.log(resultat);
    }

    if (typeof resultat !== "undefined") {
      //   console.log("passserrrrr");
      window.location.href = "./index.html";
      let sesion = sessionStorage.setItem("sesion", JSON.stringify(resultat));
      console.log(sesion);
    } else {
      window.location.reload();
    }
  });
});
