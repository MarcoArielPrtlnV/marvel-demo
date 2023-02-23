const marvel = {
    render:() => {
       

      const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=56bf6517db1cfe5f6274c2a9968186c0&hash=c2261ce3d51eb28c6cef5db1369eff40';
      const container = document.querySelector('#marvel-row');
      let contentHTML = '';


      fetch(urlAPI) 
      .then(res => res.json())
      .then((json) => {

        /* console.log(json, 'RES.JSON'); */
        for(const hero of json.data.results) {

           let urlHero = hero.urls[0].url;
           contentHTML+= `

           <div class="col-md-4">

               <a href="${urlHero}" target="_blank">
                  <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
               </a>
               <h3 class="title">${hero.name}</h3>
       </div>`;
        } 

        container.innerHTML = contentHTML;
      })
    }
};

marvel.render();