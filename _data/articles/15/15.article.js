export default {
  id: '15',
  title: "J'extrait des commentaires YouTube",
  date: "27/12/2020",
  tags: [ 'dev', 'youtube', 'motifs-js' ],
  content: `Bonjour,
  
Dans cet article, j'explique comment j'ai récupéré
les commentaires des vidéos que je vais supprimer sur ma
chaîne YouTube.

## Récupérer les données

Dans le studio YouTube, je selectionne ma vidéo
"comment faire des choses (partie 2)", ongle Commentaires.
Dans l'onglet Réseau des outils développeur de Firefox,
une requête AJAX \`comment_service_ajax\` est émise pour
récupérer les commentaires.

**Problème : l'objet retourné est très complexe.**

Il va falloir développer un script pour parser l'objet
réponse vers un format utilisable dans [le code du site \`imrok\`.](https://github.com/Skaant/imrok-2).

## Stockage des commentaires

Dans le dossier \`/data\`, je stocke la réponse de la
requête sous forme brute.

Pour l'instant, même si je n'ai pas ajouté le motif
YOUTUBE_VIDEO, les commentaires seront stockés sous le
chemin : \`/data/youtube-videos/<id>.data.js\`.

## Parser la réponse

On cherche à mettre au point un petit script pour
transformer l'objet complexe retourné en un nouvel
objet aux propriétés plus simples.

Le résultat est [consultable ici (GitHub)](https://github.com/Skaant/imrok-2/blob/master/_motifs/youtube-comment/extract/extract.js).

À la sortie, on obtient une liste de commentaires,
qui contiennent à leur tour des réponses.

## Autres méta-données des anciennes vidéos

On cherche également à préserver certaines autres données
sur les précédentes vidéos :

* Le nombre de vues,
* Le nombre de likes/dislikes,
* La date de publication initiale.

Pour cela, on crée dans le fichier \`.video.js\`
la propriété \`inherited\` avec les sous-propriétés pertinentes.
On remplit manuellement ces champs depuis YouTube

Résultat : [\`_data/youtube-videos/comment-faire-des-choses/comment-faire-des-choses.video.js\` (GitHub)](https://github.com/Skaant/imrok-2/blob/master/_data/youtube-videos/comment-faire-des-choses/comment-faire-des-choses.video.js).

## Affichage, finalisation

Maintenant, il ne reste plus qu'à insérer
l'extraction dans le processus de construction du site.

Côté motifs, on a ajouté :
* [\`_motifs/youtube-comment\`](https://github.com/Skaant/imrok-2/tree/master/_motifs/youtube-comment),
  qui porte la réponse brute d'une vidéo,
* [\`_motifs/youtube-video\`](https://github.com/Skaant/imrok-2/tree/master/_motifs/youtube-video),
  nécessaire pour associer des commentaires de vidéos précédentes
  à la version recyclée.

Dans [le provisionneur du site "default" de \`imrok-2\` (GitHub)](https://github.com/Skaant/imrok-2/blob/master/_websites/default/_utils/_provision/provision.util.js)
on rajoute le getter des vidéos YouTube :

\`\`\`javascript
Promise.all([
  ARTICLE.get(),
  STORYBOARD.get(),
  NOTEBOOK.get(),
  YOUTUBE_VIDEO.get()
])
\`\`\`

On crée ensuite les templates et fragments de template
nécessaires pour le rendu des pages vidéos et liens :

* [\`video.template.js\` (GitHub)](https://github.com/Skaant/imrok-2/blob/master/_websites/_templates/video/video.template.js), page d'une vidéo,
* [\`videosList.template.js\` (GitHub)](https://github.com/Skaant/imrok-2/blob/master/_websites/_templates/videosList/videosList.template.js), page listant toutes les vidéos,
* [\`videosListItem.fragment.js\` (GitHub)](https://github.com/Skaant/imrok-2/blob/master/_websites/_templates/_fragments/videosListItem/videosListItem.fragment.js), composant de
  template contenant les liens vers toutes les vidéos.

Enfin, on rajoute associe données et templates dans
le fichier [\`mapping.js\`](https://github.com/Skaant/imrok-2/blob/master/_websites/default/_utils/_mapping/mapping.util.js) :

\`\`\`javascript
/** /videos */
  FOLDER.create(
    scope,
    'videos',
    folderScope => ([
      /** /videos/ */
      WEBSITE_PAGE.create(
        videosListTemplate,
        data,
        folderScope,
        options
      ),
      /** /video/:id */
      ...data.videos.map(video =>
        
        FOLDER.create(
          folderScope,
          video.id,
          folderScope => ([
            WEBSITE_PAGE.create(
              videoTemplate,
              {
                ...data,
                video
              },
              folderScope,
              options
            )
          ])
        ))
    ])
  )
\`\`\`

Voilà.

Un petit \`npm run website\` et
le site est regénéré.

Je déploie et c'est bon !
Merci d'avoir suivi cet article :)`,
}