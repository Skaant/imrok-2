export default ({ notebook }) =>

`<li>
  <a href="/carnets/${ notebook.id }">
    <b>${ notebook.title }</b></a>
  <span class="badge badge-pill badge-light">
    ${ notebook.period }</span>
  <span class="badge badge-pill badge-info">
    ${ notebook.extracts.length } extraits</span>
</li>`