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
      <ul class="list-unstyled">
        <li class="d-inline-block mt-2 mr-2">
          <a class="btn btn-warning rounded-pill px-4"
              href="/storyboards/${ data.storyboard.id }/1">
            <b>Commencer la lecture !
              <span class="badge badge-pill badge-light mt-1">
                1</span></b></a>
          </a>
        ${
          data.storyboard.pages.slice(1)
            .map((page, index) =>
`       <li class="d-inline-block mt-2">
          <a class="btn btn-light rounded-pill"
              href="/storyboards/${
                data.storyboard.id }/${ index + 2 }">
            ${ index + 2 }
          </a>
        </li>`)
            .join('\n')
        }
      </ul>
      <h3>
        Retour
        <a href="/storyboards">
          STORYBOARDS</a>
        /
        <a href="/">
          HUB (accueil)</a>
      </h3>
    </div>`
  })