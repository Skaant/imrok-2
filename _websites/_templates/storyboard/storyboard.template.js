import layoutFragment from "../_fragments/layout/layout.fragment.js";
import showdown from 'showdown'

export default data => layoutFragment(
  data,
  {
    title: data.storyboard.title
      + ' | STORYBOARDS | '
      + data.title,
    content: `<div class="container">
      <h1 class="main">
        ${ data.storyboard.title }</h1>
      <ul>
        ${
          data.storyboard.pages.map((page, index) =>
`       <li>
          <a href="/storyboards/${
              data.storyboard.id }/${ index + 1 }">
            Page ${ index + 1}
          </a>
        </li>`)
            .join('\n')
        }
      </ul>
      <h2>
        Retour
        <a href="/storyboards">
          STORYBOARDS</a>
        /
        <a href="/">
          Retour HUB (accueil)</a>
      </h2>
    </div>`
  })