import HomeEcran from "./ecrans/homeEcran.js";

const router = () => {
    const main = document.getElementById("mainContainer");
    main.innerHTML = HomeEcran.render();
};

window.addEventListener("load", router);