import layoutFragment from "../_fragments/layout/layout.fragment.js";

export default data => layoutFragment(
  data,
  {
    title: 'Le HUB CRÉATIF | ' + data.title,
    content: `<div class="container">
      <h1 class="main mb-5"
          style="text-align: center">
        Le HUB CRÉATIF
        <img class="ml-5"
          src="/assets/star-logo.svg"
          alt="a golden star standing as the IMROK website's logo"/>
      </h1>
      <p class="giant">Bienvenue !</p>
      <p class="giant">
        Je m'appelle Romaric Ruga, vous êtes sur mon site créatif.</p>
      <p>
        <i>Pour le freelance dévelopement web, rendez-vous sur
          <a href="https://www.malt.fr/profile/romaricruga">
            ma page Malt !</a></i></p>
      
      <h2>
        <a href="/articles">
          Articles</a>
      </h2>
      <ul style="list-style: none">
        ${
          data.articles.slice()
            .reverse()
            .map((article, index) => `
        <li>
          <span>${ data.articles.length - index }. </span>
          <a href="/articles/${ data.articles.length - index }">
            ${ article.title } (${ article.date })</a>
        </li>`)
            .join('')
        }
      </ul>

      <h2>
        <a href="/storyboards">
          Storyboards</a>
      </h2>
      <ul style="list-style: none">
        ${
          data.storyboards
            .map((storyboard, index) => `
        <li>
          <a href="/storyboards/${ storyboard.id }">
            ${ storyboard.title } (${
              storyboard.pages.length } pages)</a>
        </li>`)
            .join('')
        }
      </ul>
    </div>`
  })