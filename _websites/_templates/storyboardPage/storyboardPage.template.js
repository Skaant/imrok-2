import layoutFragment from "../_fragments/layout/layout.fragment.js";
import showdown from 'showdown'

export default data => {

  const prevNextRow = `
<div class="row justify-content-between my-3">
  ${
    data.page.index > 0
      ? 
`           <a href="/storyboards/${
            data.storyboard.id }/${ data.page.index }">
        Précédent</a>`
      : ''
  }
  <span>${ data.page.index + 1 } / ${
    data.storyboard.pages.length }</span>
  ${
    data.page.index < (data.storyboard.pages.length - 1)
      ? 
`           <a href="/storyboards/${
            data.storyboard.id }/${ data.page.index + 2 }">
        Suivant</a>`
      : ''
  }
</div>`
  
  return layoutFragment(
    data,
    {
      title: 'PAGE ' + (data.page.index + 1)
        + ' | ' + data.storyboard.title
        + ' | STORYBOARDS | '
        + data.title,
      content: `<div class="container">
        <h1 class="main mb-5"
            style="text-align: center">
          PAGE ${ data.page.index + 1 } |
          <a href="/storyboards/${ data.storyboard.id }">
            ${ data.storyboard.title }</a>
        </h1>
        ${ prevNextRow }
        <div class="row justify-content-center">
          <img src="./original.jpg"/>
        </div>
        ${ prevNextRow }
        ${
          data.page.shaped
            ? `<h2>Texte amélioré</h2>
          ${ 
            (new showdown.Converter({
              simpleLineBreaks: true
            }))
              .makeHtml(data.page.shaped)
          }
          ${ prevNextRow }`
          
            : ''
        }
        ${
          data.page.shaped
            ? `<h2>Transcription</h2>
          ${ 
            (new showdown.Converter({
              simpleLineBreaks: true
            }))
              .makeHtml(data.page.transcript)
          }
          ${ prevNextRow }`
          
            : ''
        }
        <h2 class="lead">
          <a href="/storyboards">
            Retour STORYBOARDS</a></h2>
    </body>
  </html>`
    })
}