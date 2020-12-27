import layoutFragment from "../_fragments/layout/layout.fragment.js";

export default data => layoutFragment(
  data,
  {
    title: data.video.title
      + ' | VIDÉO | '
      + data.title,
    content: `<div class="container">
      <h1 class="main">
        ${ data.video.title }</h1>
      <div class="row justify-content-center pt-5">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/${ data.video.v }" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      ${
        data.video.comments
          && data.video.comments.length
          && `
      <h2>Données historisées*</h2>
      <dl class="row">
        <div class="col-12 col-md-4">
          <dt>Nombre de vues</dt>
          <dd>${ data.video.inherited.views }</dd>
        </div>
        <div class="col-12 col-md-4">
          <dt>J'aime / j'aime pas</dt>
          <dd>
            ${ data.video.inherited.likes }
            / ${ data.video.inherited.dislikes }</dd>
        </div>
        <div class="col-12 col-md-4">
          <dt>Date de publication</dt>
          <dd>${ data.video.inherited.date }</dd>
        </div>
      </dl>
      <h2>Commentaires historisés*</h2>
      <ul>
        ${
          data.video.comments.map(comment =>
`       <li>
          <b>
            <a href="${ comment.author.endpoint }">
              ${ comment.author.text }</a> : </b> 
            ${ comment.content.join('<br/>') }
            ${
              comment.replies
                && comment.replies.length
                && `
            <ul>
              ${ comment.replies.map(reply =>
                `
              <li>
                <b>
                  <a href="${ reply.author.endpoint }">
                    ${ reply.author.text }</a> : </b> 
                  ${ reply.content.join('') }</li>`) }
            </ul>
                ` }
        </li>`)
            .join('\n')
        }
      </ul>
      <p class="mt-5"><i>* Données et commentaires issus de la version
        précédente de la vidéo</i></p>
`
      }
      <h3
        Retour
        <a href="/videos">
          VIDÉOS</a>
        /
        <a href="/">
          HUB (accueil)</a>
      </h3>
  </body>
</html>`
  })