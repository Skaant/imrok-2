import layoutFragment from "../_fragments/layout/layout.fragment.js";
import articlesListItemFragment from "../_fragments/articlesListItem/articlesListItem.fragment.js";

export default data => layoutFragment(
  data,
  {
    title: 'ARTICLES | ' + data.title,
    content: `<div class="container">
      <h1 class="main">
        ARTICLES</h1>
      <p class="mb-5">
        Pourquoi j'écris ?<br>
        C'est un pense-bête pour plus tard,<br>
        Une lettre ouverte aussi<br>
        Et l'invitation à l'échange.<br>
        <br>
        C'est pour notifier d'une mise-à-jour,<br>
        D'un site, d'un projet, d'une idée.</p>
        <ul class="list-unstyled">
        ${
          data.articles.slice()
            .reverse()
            .map((article, index) =>
            
              articlesListItemFragment({
                article,
                articles: data.articles,
                index
              }))
            .join('')
        }
      </ul>
      <h3>
        Retour 
        <a href="/">
          HUB (accueil)</a>
      </h3>`
      })