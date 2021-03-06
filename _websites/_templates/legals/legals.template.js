import layoutFragment from "../_fragments/layout/layout.fragment.js";

export default data => layoutFragment(
  data,
  {
    title: 'Mentions légales | ' + data.title,
    content: `<div class="container">
      <h1 class="main">
        Mentions légales</h1>
      
        <div class="row">
        <div class="container">
          <h2 class="mb-4">Identification</h2>
          <dl>
            <dt>Contact</dt>
            <dd>romaric.ruga@gmail.com</dd>
            <dt>Hébèrgement du site</dt>
            <dd>OVH (2 Rue KELLERMANN, 59100 ROUBAIX), +33-8-203-203-63</dd>
            <dt>Hébèrgement des données</dt>
            <dd>Firebase (188 King ST, San Francisco, CA 94107, United States), https://firebase.google.com/</dd>
          </dl>
        </div>
      </div>
      <div class="row bg-blue">
        <div class="container">
          <h2 class="mb-4">Identifiant de navigation et usage des données personnelles</h2>
          <p>Je cherche à améliorer l'expérience utilisateur de mon site,
            et pour cela je dois pouvoir mesurer l'affluence,
            les pages les plus fréquentées et le taux de rétention de vous, utilisateurs.
            <b>À cette fin, un script analytique que j'ai développé moi-même
            envoie les informations de navigation des utilisateurs : url et date,
            et, si vous l'autorisez, identifiant de navigation et adresse IP.</b></p>
          <p>Toutefois, je ne vous force pas la main : l'utilisation d'un identifiant
            et l'enregistrement de l'adresse IP sont désactivés par défaut. De plus,
            ni l'un ni l'autre ne sont requis pour le bon fonctionnement du site.
            C'est un petit plus pour m'aider à améliorer ce projet.</p>
          <div class="row pt-5 px-0">
            <div class="col-12 col-md-6">
              <h3>Identifiant de navigation</h3>
              <p><b>Usage : </b>Je vous attribue un identifiant anonyme
                que je stocke dans le localStorage et que j'envoie sur l'appel
                à l'API analytique. Cela me permet d'enregistrer la succession de
                pages auxquelles vous accédez,
                pour comprendre l'usage qui est fait de mon site.</b></p>
              <p>Ce n'est pas Google Analytics, et je ne vends ni ne partage
                ces données avec un tiers.</p>
              <button id="imrok-nalytimk-id"
                  class="btn rounded-pill btn-light my-4"
                  disabled>
                Identifiant de navigation
              </button>
            </div>
            <div class="col-12 col-md-6">
              <h3>Adresse IP</h3>
              <p><b>Usage : </b>L'enregistrement de votre adresse IP
                me sert à la même chose que l'identifiant de navigation et le
                fiabilise ou le remplace.</p>
              <button id="imrok-nalytimk-ip"
                  class="btn rounded-pill btn-light my-4"
                  disabled>
                Enregistrement de l'adresse IP
              </button>
            </div>
          </div>
        </div>
      </div>
      <h3>
        Retour 
        <a href="/">
          HUB (accueil)</a>
      </h3>
      <script src="/assets/legals.js"></script>`
      })