/*export const parseRequestUrl = () => {
    const url = document.location.hash.toLowerCase();
    const request = url.split('/');
    return {
      resource: request[1], // accès à "/product/" in app.js//
      id: request[2], // accès à ".../:id" in app.js//
      action: request[3], 
    };
  };
 */
  export const parseRequestUrl = () => {
    const url = document.location.hash.toLowerCase();
    const request = url.split('/');
    return {
      resource: request[1],
      id: request[2],
      action: request[3],
    };
  };
  