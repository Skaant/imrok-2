import layoutFragment from "../_fragments/layout/layout.fragment.js";

export default data => layoutFragment(
  data,
  {
    title: 'STORYBOARDS | ' + data.title,
    content: `<div class="container">
      <h1 class="main">
        STORYBOARDS</h1>
      <p class="mb-5">
        Fragment d'histoires,<br/>
        Ou ébauches de soutras ...<br/
        <br/>
        Images et images d'images.</p>
      <ul style="list-style: none">
        ${
          data.storyboards
            .map(storyboard => `
        <li>
          <a href="/storyboards/${ storyboard.id }">
            ${ storyboard.title } (${
              storyboard.pages.length } pages)</a>
        </li>`)
            .join('\n')
        }
      </ul>
      <h2>
        <a href="/">
          Retour HUB (accueil)</a>
      </h2>`
      })