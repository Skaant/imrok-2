export default ({ video }) =>

`<li>
  <a href="/videos/${ video.id }">
    <b>${ video.title }</b></a>
  <span class="badge badge-pill badge-light">
    ${ video.date }</span>
</li>`