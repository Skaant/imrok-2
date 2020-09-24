import layoutFragment from "../_fragments/layout/layout.fragment.js";

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
      <ul style="list-style: none">
        ${
          data.notebooks
            .map(notebook => `
        <li>
          <a href="/carnets/${ notebook.id }">
            ${ notebook.title } (${
              notebook.extracts.length } extraits)</a>
        </li>`)
            .join('\n')
        }
      </ul>`
      })