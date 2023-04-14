const cardListElement = document.querySelector(".cardList");

fetch("https://ladylafe-api.formaterz.fr/api/articles")
  .then((response) => response.json())
  .then((data) => {
    let arrayArticles = data["hydra:member"];
    console.log(arrayArticles);
    arrayArticles.forEach((article) => {
      cardListElement.innerHTML += `
      <div class="card">
      <img
        src="https://source.unsplash.com/random/300x300/?people"
        }
        alt="gossip"
      />
      <span class="title">${article.title}</span>
      <span class="body"
        >${article.body}
      </span>
      <button>Lire la suite</button>
    </div>`;
    });
  });
