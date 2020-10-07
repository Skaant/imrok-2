import layoutFragment from "../_fragments/layout/layout.fragment.js";
import showdown from 'showdown'

export default data => layoutFragment(
  data,
  {
    title: data.article.title
      + ' | ARTICLE ' + data.article.index
      + ' | ' + data.title,
    content: `<div class="container">
      <h1 class="main">
        ${ data.article.title }</h1>
      ${
        (new showdown.Converter({
          simpleLineBreaks: true
        }))
          .makeHtml(data.article.content)
      }
      <h3>
        Retour
        <a href="/articles">ARTICLES</a>
        /
        <a href="/">HUB (accueil)</a>
      </h3>
    </div>`
  })