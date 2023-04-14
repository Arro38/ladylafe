const cardListElement = document.querySelector(".cardList");

fetch("https://ladylafe-api.formaterz.fr/api/articles")
  .then((response) => response.json())
  .then((data) => {
    let arrayArticles = data["hydra:member"];
    console.log(arrayArticles);
    arrayArticles.slice(0, 12).forEach((article) => {
      cardListElement.innerHTML += `
      <div class="card">
      <img
        src="https://picsum.photos/300/300?random=${Math.floor(
          Math.random() * 1000
        )}"
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
