export default {
  id: '15',
  title: "J'extrait des commentaires YouTube",
  date: "26/12/2020",
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
chemin : \`/data/youtube-videos/<id>_old.data.js\`.

## Parser la réponse

On cherche à mettre au point `
}