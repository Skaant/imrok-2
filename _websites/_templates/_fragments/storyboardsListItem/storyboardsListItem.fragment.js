export default ({ storyboard }) =>

`<li>
  <a href="/storyboards/${ storyboard.id }">
    <b>${ storyboard.title }</b></a>
  <span class="badge badge-pill badge-light">
    ${ storyboard.period }</span>
  <span class="badge badge-pill badge-info">
    ${ storyboard.pages.length } pages</span>
</li>`