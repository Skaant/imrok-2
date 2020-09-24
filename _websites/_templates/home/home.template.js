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

      <h2>Mon réseau de sites et projets</h2>
      <ul>
        <li>
          <a href="https://highbs-bok.art">HIGHBS-BOK</a>
          <span> : Le livre absolu des motifs, un site-livre philosophique, spirituel et ésotérique qui s'expose comme une parabole avec l'histoire des ZUMS, ces singes futuristes parti à la conquête des bords de l'univers.</span></li>
        <li><a href="https://github.com/Skaant/kami.js">[GitHub] KAMI.JS</a><span> : Un framework Javascript pour créer et gérer des concepts générateurs de code (generative patterns).</span></li>
        <li><a href="https://poke-team.net">POKÉ TEAM</a><span> : Choisissez votre version et composez votre équipe pour identifier ses forces et ses faiblesses.</span></li>
        <li><a href="https://permadata.net" disabled>PERMA-DATA</a><span> : Base-de-données ludique sur les plantes (désactivé pour rework éco).</span></li>
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

      <h2>
        <a href="/carnets">
          Carnets</a>
      </h2>
      <ul style="list-style: none">
        ${
          data.notebooks
            .map((notebook, index) => `
        <li>
          <a href="/carnets/${ notebook.id }">
            ${ notebook.title } (${
              notebook.extracts.length } extraits)</a>
        </li>`)
            .join('')
        }
      </ul>

      <h2>Mes autres canaux</h2>
      <ul>
        <li><a href="https://www.youtube.com/channel/UCOLV7nm8pSSDWEzPRFogyTw">Ma chaîne YouTube</a><span> : Philosophie, jardinage, (mes) actualités ...</span></li>
        <li><a href="https://www.instagram.com/imrok.le.bleu/">Mon fil Instagram</a> : Plutôt jardinage, nature, art, chat.</li>
        <li><a href="https://medium.com/@OhmWang">Mon fil Medium (EN)</a><span> : Articles plutôt anglophones sur le développement web</span></li>
        <li><a href="https://imrokleraarr.tumblr.com/">Mon fil Tumblr</a><span> : Scans de dessins, de carnets, poèmes, extraits de créativité</span></li>
        <li><a href="https://github.com/Skaant">Mon profil GitHub</a>, pour voir ce que je code.</li>
      </ul>

      <h2>Bibliographie</h2>
      <p>Ce que j'ai lu et conseillerai.</p>
      <ul>
        <li><a href="https://fr.wikipedia.org/wiki/Dao_de_jing">Le Tao Te King, Lao Tseu</a><p>Le classique du taoïsme, une philosophie qui a inspiré par Bill Mollison dans son travail sur la permaculture ainsi que Georges Lucas dans la mythique série Star Wars.</p></li>
        <li><a href="https://fr.wikipedia.org/wiki/Bhagavad-Gita">La Bhagavad-Gita, commenté par A. C. Bhaktivedanta Swami Prabhupada</a><p>Texte transcendant sur le Yoga, dans sa forme spirituelle; sur l'Absolu, l'Unité, la voie du héros ...</p></li>
        <li><a href="https://fr.wikipedia.org/wiki/David_Holmgren#cite_ref-4">Permaculture : Principes et pistes d’action pour un mode de vie soutenable, David Holmgren</a><p>La permaculture dans sa nature conceptuelle, la théorie accompagnée de nombreux exemples pour saisir les abstractions dont l'auteur est le maître.</p></li>
        <li><a href="https://fr.wikipedia.org/wiki/A_Pattern_Language">A pattern language, Christopher Alexander</a><p>On comprend que ce livre ait inspiré le canon "Design Patterns: Elements of Reusable Object-Oriented Software"; ainsi que les non moins audacieux "Edible Forest Gardens 1 &amp; 2".</p></li>
        <li><a href="https://fr.wikipedia.org/wiki/Le_chant_de_l%27imm%C3%A9diat_satori">Le Shodoka: Le chant de l'immédiat satori, Yoka Daishi</a></li>
        <li><a href="https://www.albin-michel.fr/ouvrages/lenseignement-de-ramakrishna-9782226159069">L'enseignement de Râmakrishna, traduit par Jean Herbert</a></li>
        <li><a href="https://fr.wikipedia.org/wiki/Manuel_du_guerrier_de_la_lumi%C3%A8re">Le manuel du guerrier de la lumière, Paulo Cohelo</a></li>
        <li><a href="https://fr.wikipedia.org/wiki/Lie_Zi">Traité du vide parfait, Lie Tseu</a></li>
        <li><a href="https://www.pearson.com/us/higher-education/program/Martin-Agile-Software-Development-Principles-Patterns-and-Practices/PGM272869.html">Agile Software Development, Principles, Patterns, and Practices</a></li>
        <li><a href="https://fr.wikipedia.org/wiki/Ainsi_parlait_Zarathoustra">Ainsi parlait Zarathoustra, Friedrich Nietzche</a></li>
        <li><a href="https://fr.wikipedia.org/wiki/Tchouang-tseu">Oeuvres complètes, Tchouang-tseu</a></li>
        <li><a href="https://fr.wikipedia.org/wiki/Djal%C3%A2l_ad-D%C3%AEn_R%C3%BBm%C3%AE#L'%C5%93uvre_de_R%C3%BBm%C3%AE">Le Livre du Dedans, Rûmî</a></li>
        <li><a href="https://www.eyrolles.com/Informatique/Livre/methodes-de-design-ux-9782212673982/">Méthodes de design UX: 30 méthodes fondamentales pour concevoir et évaluer les systèmes interactifs, Carine Lallemand et Guillaume Gronier</a></li>
        <li><a href="https://fr.wikipedia.org/wiki/Gathas">Les Gathas : Le livre sublime de Zarathoustra</a></li>
        <li><a href="https://fr.wikipedia.org/wiki/Sh%C5%8Db%C5%8Dgenz%C5%8D">Le Shobogenzo, Dôgen</a></li>
      </ul>
    </div>`
  })