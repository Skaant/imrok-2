import layoutFragment from "../_fragments/layout/layout.fragment.js";
import storyboardsListItemFragment from "../_fragments/storyboardsListItem/storyboardsListItem.fragment.js";

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
      
        <ul class="list-unstyled">
        ${
          data.storyboards
            .sort((a, b) => 
            
            new Date(b.date) - new Date(a.date))
            .map(storyboard =>
              
              storyboardsListItemFragment({ storyboard }))
            .join('')
        }
      </ul>
      <h3>
        <a href="/">
          Retour HUB (accueil)</a>
      </h3>`
      })