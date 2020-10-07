export default {
  id: '5',
  title: 'POKÉ TEAM - UX design et release',
  date: '29/05/2020',
  tags: [ 'ux', 'design', 'poke-team.net' ],
  content: `
## Un projet de recherche

Afin de développer ma capacité à industrialiser des sites et à couvrir différents types d'usage,
  il me fallait un troisième site (avec [ce site](https://imrok.fr) et [PERMA-DATA](https://permadata.net)).

Voilà, c'est avec fierté et excitation que je publie la première version [POKE-TEAM](https://poke-team.net) !

Dans cette application "portfolio", j'adresse les aspects de gestion suivant :

* D'import et d'aggrégation de données depuis des sources externes
* De data-visualization, de rendu digeste des données

Je souhaite placer l'application à un haut niveau d'usabilité,
  mais c'est d'abord la publication de ses fonctionnalités critiques que je souhaite
  implémenter en priorité.

Ce petit *side-project* est également l'occasion de mettre en pratique des concepts
  d'**expérience utilisateur** que je glane depuis plusieurs mois.

A ce sujet, et au long de ces *releases*, je formulerais les résultats de mes
  recherches et développements au sujet de l'application.

## Répondre à un besoin

Contexte : *Depuis une dizaine d'années que j'ai redécouvert Pokémon au moyen d'émulateurs mobiles,
  et jusqu'à acheter une console pour jouer à la 5ème et 6ème génération, je suis toujours confronté à la même problématique ...*

> Comment composer mon équipe idéale ?

*A ces fins j'ai parcouru les wikis spécialisés ([Bulbapedia](https://bulbapedia.bulbagarden.net), [Poképédia](https://pokepedia.fr)
à la recherche des meilleures combinaisons possibles.*

*Je remarquais toutefois certains points de patinage :*

* Pas de liste combinant : les pokémons spécifiques d'une version, les types (pour les deux premiers :
  [List of Pokémon by <Kalos> Pokédex number](https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_Kalos_Pok%C3%A9dex_number)
  et [List of Pokémon by base stats (Generation <VI>)](https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_base_stats_(Generation_VI))),

* L'accès aux tables de resistance et de statistiques n'est pas instantanément visible, il faut le chercher,

* Il n'y a pas d'outil pour composer son équipe (comme en jeu), pour sommer leurs resistances et statistiques,

* L'explication sur la signification de ces informations et surtout les mesures à prendre pour y remédier sont
  cryptiques ou éparses.

En conséquence, vu le temps consacré à chiner sur les pages des Wiki (plus qu'à jouer, très certainement),
  j'estimais qu'il était rentable de concevoir et développer mon propre outil.

Et au passage, pourquoi pas le partager sur internet : [POKÉ TEAM](https://poke-team.net).

## Processus conceptuel

Voici comment j'évaluais initialement les différentes étapes et leur ordre
  pour répondre de façon naturelle et efficace au besoin.

1. Choisir un jeu (ex: y, bleu, épée) dans la liste
  * Éventuellement combiner plusieurs jeux (disponibles pour échanges)

2. (Chargement la liste des pokemons du jeu)

3. Affichage : types & stats
  * Sprite
  * Nom (fr/en)
  * Type(s)
  * Résistances / vulnérabilités
  * Total stats
  * Stats 1/2/3/4/5/6

4. Selectionner l'équipe

5. Affichage du résumé de l'équipe :
  * Type défensif (vulnérable/resistant)
  * Type offensif (peu efficace/super efficace)
  * Statistiques avec indicateur du pourcentage du max (de la version)

## Première experience map

Parcourons ensemble les fonctionnalités, à la lumière du concept de l'expérience utilisateur.

1. A quel jeu jouez-vous ?

Proposition de la liste des "versions" du jeu.

2. Affichage des six emplacements de l'équipe

Vides, des poke-balls sont affichées avec le message : "Encore six emplacement libres"
dans une seule colonne (blank slate).

3. Chargement de la liste des pokémons du (ou des) jeu(x)

4. Affichage de la liste des pokémons à sélectionner avec :

  * Recherche par nom
  * Filtres sur type
  * Tris sur stats

5. Sélection et mise à jour de l'emplacement de l'équipe

  * Affichage des résistances et vulnérabilités (défensives) individuelles
  * Affichage des statistiques sur jauge (stat du pokémon / max stat de la version)

6. Possibilité de supprimer une sélection

7. OBJECTIF 1 : Affichage résumé sur les types (+/-) et les statistiques

  * Occurences totales
  * Résistances, vulnérabilités (offensives et défensives) totales
  * Statistiques moyennes

8. BACKLOG - OBJECTIF 2 : Indicateurs et avertisements (et diagnostic) sur résumé

9. BACKLOG - OBJECTIF 3 : Conseils pour rétablir, suggestion de filtres et tris sur la liste

## Première release

Après un sprint d'une semaine, la première version de [POKÉ TEAM](https://poke-team.net) ([patch-note version 1](https://poke-team.net/releases/1)) est disponible en ligne.
Bien que son UI laisse encore à désirer, le processus cognitif peut déjà être éprouvé.

Dans ma rotation de projets, je reviendrais pour des modifications futures dans les prochaines semaines.

La liste des fonctionnalités envisagées est disponible sur la page [Roadmap](https://poke-team.net/roadmap).

Merci et à bientôt !
  `
}