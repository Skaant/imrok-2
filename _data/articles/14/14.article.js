export default {
  id: '14',
  title: "Actus | motifs-js : le rework de kami.js en V1, YouTube RETRO et HIGHBS-BOK",
  date: "18/12/2020",
  tags: [ 'actus', 'dev', 'kamis.js', 'motifs-js', 'refactoring', 'patterns',
    'tests', 'highbs-bok.art' ],
  content: `Bonjour,

Un mot pour indiquer que le framework sur lesquels
sont construits mes trois sites :

* [celui-ci](/),
* [rimarok.com](https://rimarok.com), mon site pro,
* et [highbs-bok.art](https://highbs-bok.art).

En effet, je viens de faire un important
rework, notamment sémantique, sur \`kami.js\`.

**Le framework est renommé [\`motifs-js\`](https://github.com/Skaant/motifs-js),
un terme plus neutre.**

## SPEC

À côté de ça, le système de SPEC a été
finalement désaxé des MOTIFS.

Deux catégories coexistent actuellement :
* SPEC:INSTANCE(suffixe \`.speci.js\`),
  des tests à passer sur chaque
  instance d'un motif,
* SPEC:BLIND (suffixe \`.spec.js\`),
  permet maintenant d'executer
  des tests n'importe où dans l'arborescence.

*Note : tous les tests unitaires n'ont
pas encore été récupérés.

Les fichiers à mettre à jour portent
maintenant le suffixe \`.specold.js\`.

## Roadmap court terme

1. La première étape est le lancement du
projet RETRO, avec la publication de la version
"remasterisée" de la vidéo "comment faire des choses"
de Décembre 2016 (ma seconde vidéo publique sur
la chaîne, voir [la première](https://www.youtube.com/watch?v=6f8r5btlYPA)).

  * La vidéo a été jump-cutée,
    il faut lui mettre une intro
    puis la publier,

  * Ensuite, **je veux importer les commentaires
    de la vidéo sur ce site à partir d'un fichier JSON,
    qu'il faudrait d'abord rafiner**.

  * Puis, capture de la suppression,

  * Enfin, montage de la vidéo d'intro
    au projet RETRO.

2. **Mettre le paquet sur l'HIGHBS-BOK :**

  *  Supprimer les pages de contenu
    (brouillon, incohérent avec le contenu
    du livre lui-même),

  * Refaire l'accueil, mettre un extrait en 
    téléchargement, une page à propos,
    *le [script analytique](https://github.com/Skaant/nalytimk) et les mentions légales,
    et une page "acheter" avec les trois options :
    
    - NB fait maison, le moins cher; le côté "brut" peut plaire,
    - NB imprimeur, plus qualitatif mais un peu plus cher,
    - Couleurs imprimeur, forcément le plus cher mais aussi le plus joli !

3. 
  `
}