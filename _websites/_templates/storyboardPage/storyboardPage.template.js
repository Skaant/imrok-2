import layoutFragment from "../_fragments/layout/layout.fragment.js";
import showdown from 'showdown'

export default data => {

  const prevNextRow = `
<div class="row justify-content-between my-3">
  ${
    data.page.index > 1
      ? 
`           <a href="/storyboards/${
            data.storyboard.id }/${ data.page.index - 1 }">
        Précédent</a>`
      : ''
  }
  <span>${ data.page.index } / ${
    data.storyboard.pages.length }</span>
  ${
    data.page.index < data.storyboard.pages.length
      ? 
`           <a href="/storyboards/${
            data.storyboard.id }/${ data.page.index + 1 }">
        Suivant</a>`
      : ''
  }
</div>`
  
  return layoutFragment(
    data,
    {
      title: 'PAGE ' + data.page.index
        + ' | ' + data.storyboard.title
        + ' | STORYBOARDS | '
        + data.title,
      content: `<div class="container">
        <h1 class="main mb-5"
            style="text-align: center">
          PAGE ${ data.page.index } |
          <a href="/storyboards/${ data.storyboard.id }">
            ${ data.storyboard.title }</a>
        </h1>
        ${ prevNextRow }
        <div class="row justify-content-center">
          ${
            data.page.index < data.storyboard.pages.length
              ? 
`         <a href="/storyboards/${
              data.storyboard.id }/${ data.page.index + 1 }">
            <img src="./original.jpg"/></a>`

              : '<img src="./original.jpg"/>'
          }
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
          data.page.transcript
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
        <h3>
          Retour
          <a href="/storyboards/${ data.storyboard.id }">
            ${ data.storyboard.title }</a>
          /
          <a href="/storyboards">
            STORYBOARDS</a>
          /
          <a href="/">
            HUB (accueil)</a>
        </h3>`
    })
}