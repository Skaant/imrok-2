import layoutFragment from "../_fragments/layout/layout.fragment.js";
import showdown from 'showdown'

export default data => {

  const prevNextRow = `
<div class="row justify-content-between my-3">
  ${
    data.extract.index > 0
      ? 
`           <a href="/carnets/${
            data.notebook.id }/${
            data.notebook.extracts[data.extract.index - 1].id }">
        Précédent</a>`
      : ''
  }
  <span>${ data.extract.index + 1 } / ${
    data.notebook.extracts.length }</span>
  ${
    data.extract.index < (data.notebook.extracts.length - 1)
      ? 
`           <a href="/carnets/${
            data.notebook.id }/${
              data.notebook.extracts[data.extract.index + 1].id }">
        Suivant</a>`
      : ''
  }
</div>`
  
  return layoutFragment(
    data,
    {
      title: data.extract.title
        + ' | ' + data.notebook.title
        + ' | NOTEBOOKS | '
        + data.title,
      content: `<div class="container">
        <h1 class="main mb-5"
            style="text-align: center">
          ${ data.extract.title } |
          <a href="/carnets/${ data.notebook.id }">
            ${ data.notebook.title }</a>
        </h1>
        ${ prevNextRow }
        <div class="row justify-content-center">
          ${
            data.extract.index < (data.notebook.extracts.length - 1)
              ? 
`         <a href="/carnets/${
              data.notebook.id }/${
              data.notebook.extracts[data.extract.index + 1].id }">
            <img src="./original.png"/></a>`
              
              : '<img src="./original.png"/>'
          }
        </div>
        ${ prevNextRow }
        ${
          data.extract.shaped
            ? `<h2>Texte amélioré</h2>
          ${ 
            (new showdown.Converter({
              simpleLineBreaks: true
            }))
              .makeHtml(data.extract.shaped)
          }
          ${ prevNextRow }`
          
            : ''
        }
        ${
          data.extract.shaped
            ? `<h2>Transcription</h2>
          ${ 
            (new showdown.Converter({
              simpleLineBreaks: true
            }))
              .makeHtml(data.extract.transcript)
          }
          ${ prevNextRow }`
          
            : ''
        }
        <h3>
          Retour <a href="/carnets/${ data.notebook.id }">
            ${ data.notebook.title }</a>
          /
          <a href="/carnets">
            CARNETS</a>
          /
          <a href="/">
            Retour HUB (accueil)</a>
        </h3>
    </body>
  </html>`
    })
}