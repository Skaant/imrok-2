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
      title: (
        data.page.title
          ? data.page.title + ', '
          
          : '')
        + 'PAGE ' + data.page.index
        + ', ' + data.storyboard.title
        + ' | STORYBOARDS | '
        + data.title,
      content: `<div class="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="/">Accueil</a></li>
            <li class="breadcrumb-item">
              <a href="/storyboards">
                STORYBOARDS</a></li>
            <li class="breadcrumb-item">
              <a href="/storyboards/${ data.storyboard.id }">
                ${ data.storyboard.title }</a></li>
            <li class="breadcrumb-item active" aria-current="page">
              Page ${ data.page.index + 1 }.</li>
          </ol>
        </nav>
        <h1 class="main mb-5"
            style="text-align: center">
          ${ data.page.title
            || 'PAGE ' + data.page.index }
        </h1>
        ${ prevNextRow }
        ${
          data.page.images
            ? ('<div class="row justify-content-center">'
            
              + data.page.images.map(image =>
                
                data.page.index < data.storyboard.pages.length
                  ?
    `         <a href="/storyboards/${
                  data.storyboard.id }/${ data.page.index + 1 }">
                <img src="./${ image.split('/').pop() }"></a>`

                  : `<img src="./${ image.split('/').pop() }"/>`)

                .join('\n')

              + '</div>')

            : ''
        }
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