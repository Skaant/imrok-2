import layoutFragment from "../_fragments/layout/layout.fragment.js";
import showdown from 'showdown'

export default data => layoutFragment(
  data,
  {
    title: data.notebook.title
      + ' | CARNET | '
      + data.title,
    content: `<div class="container">
      <h1 class="main">
        ${ data.notebook.title }</h1>
      <ul>
        ${
          data.notebook.extracts.map(extract =>
`       <li>
          <a href="/carnets/${
              data.notebook.id }/${ extract.id }">
            ${ extract.title }
          </a>
        </li>`)
            .join('\n')
        }
      </ul>
      <h3
        Retour
        <a href="/carnets">
          CARNETS</a>
        /
        <a href="/">
          HUB (accueil)</a>
      </h3>
  </body>
</html>`
  })