import HomeEcran from "./ecrans/homeEcran.js";
import ProductEcran from "./ecrans/productEcran.js";
import { parseRequestUrl } from "./utils.js";
import Error404Ecran from "./ecrans/error404Ecran.js";
//create routes as route:screen object for home screen//
const routes = {
    '/': HomeEcran,
    '/product/:id': ProductEcran,
};

/*const router = () => {
    const request = parseRequestUrl ();
    //en parsant l'url je peux comparer ses valeurs avec les key de la const routes//
    const parseUrl = (request.resource ? ` / ${request.resource}`: '/') + 
    // if request id exist pass /:id, otherwise pas empty string//
    (request.id ? `/:id` : ' ') + 
    //concatenate the last part = the verv//
    (request.verb ? ` / ${request.verb}`: '');
    
    const ecran = routes[parseUrl]? routes[parseUrl] : Error404Ecran;
    const main = document.getElementById("mainContainer");
    main.innerHTML = ecran.render();
};*/

const router = () => {
    const request = parseRequestUrl();
    const parseUrl =  (request.resource ? `/${request.resource}` : '/') +
      (request.id ? '/:id' : '') +
      (request.verb ? `/${request.verb}` : '');
    const screen = routes[parseUrl] ? routes[parseUrl] : Error404Ecran;
  
    const main = document.getElementById('mainContainer');
    main.innerHTML = screen.render();
  };
  window.addEventListener('load', router);
  window.addEventListener('hashchange', router);

