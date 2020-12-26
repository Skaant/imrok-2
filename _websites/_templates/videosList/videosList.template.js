import layoutFragment from "../_fragments/layout/layout.fragment.js";
import videosListItemFragment from "../_fragments/videosListItem/videosListItem.fragment.js";

export default data => layoutFragment(
  data,
  {
    title: 'VIDÉOS | ' + data.title,
    content: `<div class="container">
      <h1 class="main">
        VIDÉOS</h1>
      <p class="mb-5">
        Index de mes vidéos sur YouTube</p>
      <ul class="list-unstyled">
        ${
          data.videos
            .map(video =>
              
              videosListItemFragment({ video }))
            .join('')
        }
      </ul>
      <h3>
        Retour 
        <a href="/">HUB (accueil)</a>
      </h3>
    </div>`
      })