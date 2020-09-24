import layoutFragment from "../_fragments/layout/layout.fragment.js";
import notebooksListItemFragment from "../_fragments/notebooksListItem/notebooksListItem.fragment.js";

export default data => layoutFragment(
  data,
  {
    title: 'CARNETS | ' + data.title,
    content: `<div class="container">
      <h1 class="main">
        CARNETS</h1>
      <p class="mb-5">
        Jamais le flot des pensées ne s'arrête<br/>
        Je ne peux que le regarder passer<br/>
        Sans toutefois m'y plonger.<br/<
        <br/>
        Oh, mais maintenant que je suis de<br/>
        Retour sur terre,<br/>
        Où sont passées toutes mes jolies idées ?<br/>
        <br/>
        Non je dois les fixer<br/>
        Voir les matérialiser.</p>
        <ul class="list-unstyled">
        ${
          data.notebooks
            .sort((a, b) => 
            
            new Date(b.date) - new Date(a.date))
            .map(notebook =>
              
              notebooksListItemFragment({ notebook }))
            .join('')
        }
      </ul>
      <h3>
        Retour 
        <a href="/">HUB (accueil)</a>
      </h3>
    </div>`
      })