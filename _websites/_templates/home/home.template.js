import layoutFragment from "../_fragments/layout/layout.fragment.js";
import articlesListItemFragment from "../_fragments/articlesListItem/articlesListItem.fragment.js";
import storyboardsListItemFragment from "../_fragments/storyboardsListItem/storyboardsListItem.fragment.js";
import notebooksListItemFragment from "../_fragments/notebooksListItem/notebooksListItem.fragment.js";
import videosListItemFragment from "../_fragments/videosListItem/videosListItem.fragment.js";

export default data => layoutFragment(
  data,
  {
    title: 'Le HUB CRÉATIF | ' + data.title,
    description: 'Les actualités sur mon réseau de sites internet et mes créations. Mes archives artistiques, carnets de pensée, SAGA des ZUMS et autres storyboards ...',
    content: `<div class="container">
      <h1 class="main mb-5"
          style="text-align: center; font-size: 3.5rem">
        Le HUB CRÉATIF
        <img class="ml-5"
          src="/assets/star-logo.svg"
          alt="a golden star standing as the IMROK website's logo"/>
      </h1>
      <p class="giant">Bienvenue !</p>
      <p class="giant">
        Je m'appelle Romaric Ruga, vous êtes sur mon site créatif.</p>
      <p class="mt-4">
        <i>Pour le freelance dévelopement web, rendez-vous sur
          <a href="https://www.malt.fr/profile/romaricruga">
            ma page Malt !</a></i></p>
      
      <h2 class="mb-3">
        <a href="/articles">
          Articles</a>
      </h2>
      <ul class="list-unstyled">
        ${
          data.articles
            .sort((a, b) =>
              parseInt(b.id) - parseInt(a.id))
            .slice(0, 5)
            .map((article, index) =>
            
              articlesListItemFragment({
                article,
                articles: data.articles,
                index
              }))
            .join('')
        }
        <li class='mt-3 font-weight-bold'>
          <a href="/articles">
            ... ${ data.articles.length - 5 } autres articles.</a>
        </li>
      </ul>

      <h2 class="mb-3">
        Mon réseau de sites et projets</h2>
      <ul class="list-unstyled">
        <li>
          <a href="https://highbs-bok.art"><b>HIGHBS-BOK</b></a>
          <span> : Le livre absolu des motifs, un site-livre philosophique, spirituel et ésotérique qui s'expose comme une parabole avec l'histoire des ZUMS, ces singes futuristes parti à la conquête des bords de l'univers.</span></li>
        <li><a href="https://github.com/Skaant/motifs-js">
          [GitHub] <b>motifs-js</b></a><span> : Un framework Javascript pour créer et gérer des concepts générateurs de code (generative patterns).</span></li>
        <li>
          <a href="https://poke-team.net"><b>POKÉ TEAM</b></a><span> : Choisissez votre version et composez votre équipe pour identifier ses forces et ses faiblesses.</span></li>
        <li><a href="https://permadata.net" disabled><b>PERMA-DATA</b></a><span> : Base-de-données ludique sur les plantes (désactivé pour rework éco).</span></li>
      </ul>

      <h2 class="mb-3">
        <a href="/videos">
          Vidéos</a>
      </h2>
      <ul class="list-unstyled">
        ${
          data.videos
            .sort((a, b) => 
            
              new Date(b.date) - new Date(a.date))
            .map(video =>
              
              videosListItemFragment({ video }))
        }
      </ul>

      <h2 class="mb-3">
        <a href="/storyboards">
          Storyboards</a>
      </h2>
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

      <h2 class="mb-3">
        <a href="/carnets">
          Carnets</a>
      </h2>
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

      <h2 class="mb-3">
        Mes autres canaux</h2>
      <ul class="list-unstyled">
        <li>
          <a href="https://www.youtube.com/channel/UCOLV7nm8pSSDWEzPRFogyTw">
            <b>Ma chaîne YouTube</b></a>
          : philosophie, jardinage, (mes) actualités ...
        </li>
        <li>
          <a href="https://www.instagram.com/imrok.le.bleu/">
            <b>Mon fil Instagram</b></a>
          : plutôt jardinage, nature, art, chat
        </li>
        <li>
          <a href="https://medium.com/@OhmWang">
            <b>Mon fil Medium [EN]</b></a>
          : articles majoritairement anglophones sur le développement web
        </li>
        <li>
          <a href="https://imrokleraarr.tumblr.com/">
            <b>Mon fil Tumblr</b></a>
          : scans de dessins, de carnets, poèmes, extraits de créativité</li>
        <li>
          <a href="https://github.com/Skaant">
            <b>Mon profil GitHub</b></a>
          : pour voir ce que je code.</li>
      </ul>

      <h2 class="mb-3">
        Bibliographie</h2>
      <p>Ce que j'ai lu et conseillerai.</p>
      <ul class="list-unstyled">
        <li>
          <a href="https://fr.wikipedia.org/wiki/Dao_de_jing">
            <b>Le Tao Te King</b>, Lao Tseu</a><p>Le classique du taoïsme, une philosophie qui a inspiré par Bill Mollison dans son travail sur la permaculture ainsi que Georges Lucas dans la mythique série Star Wars.</p></li>
        <li>
          <a href="https://fr.wikipedia.org/wiki/Bhagavad-Gita">
            <b>La Bhagavad-Gita</b>, commenté par A. C. Bhaktivedanta Swami Prabhupada</a><p>Texte transcendant sur le Yoga, dans sa forme spirituelle; sur l'Absolu, l'Unité, la voie du héros ...</p></li>
        <li>
          <a href="https://fr.wikipedia.org/wiki/David_Holmgren#cite_ref-4">
            <b>Permaculture : Principes et pistes d’action pour un mode de vie soutenable,</b> David Holmgren</a><p>La permaculture dans sa nature conceptuelle, la théorie accompagnée de nombreux exemples pour saisir les abstractions dont l'auteur est le maître.</p></li>
        <li>
          <a href="https://fr.wikipedia.org/wiki/A_Pattern_Language">
            <b>A pattern language</b>, Christopher Alexander</a><p>On comprend que ce livre ait inspiré le canon "Design Patterns: Elements of Reusable Object-Oriented Software"; ainsi que les non moins audacieux "Edible Forest Gardens 1 &amp; 2".</p></li>
        <li>
          <a href="https://fr.wikipedia.org/wiki/Le_chant_de_l%27imm%C3%A9diat_satori">
            <b>Le Shodoka: Le chant de l'immédiat satori</b>, Yoka Daishi</a></li>
        <li>
          <a href="https://www.albin-michel.fr/ouvrages/lenseignement-de-ramakrishna-9782226159069">
            <b>L'enseignement de Râmakrishna</b>, traduit par Jean Herbert</a></li>
        <li>
          <a href="https://fr.wikipedia.org/wiki/Manuel_du_guerrier_de_la_lumi%C3%A8re">
            <b>Le manuel du guerrier de la lumière</b>, Paulo Cohelo</a></li>
        <li>
          <a href="https://fr.wikipedia.org/wiki/Lie_Zi">
            <b>Traité du vide parfait</b>, Lie Tseu</a></li>
        <li>
          <a href="https://www.pearson.com/us/higher-education/program/Martin-Agile-Software-Development-Principles-Patterns-and-Practices/PGM272869.html">
            <b>Agile Software Development, Principles, Patterns, and Practices</b></a></li>
        <li>
          <a href="https://fr.wikipedia.org/wiki/Ainsi_parlait_Zarathoustra">
            <b>Ainsi parlait Zarathoustra</b>, Friedrich Nietzche</a></li>
        <li>
          <a href="https://fr.wikipedia.org/wiki/Tchouang-tseu">
            <b>Oeuvres complètes</b>, Tchouang-tseu</a></li>
        <li>
          <a href="https://fr.wikipedia.org/wiki/Djal%C3%A2l_ad-D%C3%AEn_R%C3%BBm%C3%AE#L'%C5%93uvre_de_R%C3%BBm%C3%AE">
            <b>Le Livre du Dedans</b>, Rûmî</a></li>
        <li>
          <a href="https://www.eyrolles.com/Informatique/Livre/methodes-de-design-ux-9782212673982/">
            <b>Méthodes de design UX: 30 méthodes fondamentales pour concevoir et évaluer les systèmes interactifs</b>, Carine Lallemand et Guillaume Gronier</a></li>
        <li>
          <a href="https://fr.wikipedia.org/wiki/Gathas">
            <b>Les Gathas : Le livre sublime de Zarathoustra</b></a></li>
        <li>
          <a href="https://fr.wikipedia.org/wiki/Sh%C5%8Db%C5%8Dgenz%C5%8D">
            <b>Le Shobogenzo</b>, Dôgen</a></li>
      </ul>
    </div>`
  })