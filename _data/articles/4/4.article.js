export default {
  id: '4',
  title: 'PERMA-DATA - Travailler avec différents types de sources',
  date: '04/05/2020',
  tags: [ 'archi', 'design', 'permadata.net' ],
  content: `
Bien entendu,
pour une base de données,
tout l'enjeu réside dans le contenu :
la pertinence, l'exhaustivité, l'unicité ...

Beaucoup de facteurs à observer
pour garantir une donnée de qualité

Le remplissage la base la question cruciale

## 1 Des atomes littéraires

En 2017, je feuilletais de nombreux livres de permaculture en regrettant que toute l'information soit dispersées entre tant d'ouvrages.

Il m'a semblé à l'époque que PERMA-DATA devait "compiler, synthétiser puis afficher" des atomes de données glanés dans tout ces livres.

### Atome de donnée

Un atome serait un fragment de donnée, résumé à sa plus simple expression en un triplé :

\`data = plante, propriété, valeur\`

C'est un peu entre le [triplé du standard RDF](https://www.canal-u.tv/video/inria/modele_de_triplets_et_de_graphes_1.20289) et [les propriétés OWL](https://www.canal-u.tv/video/inria/caracterisation_des_proprietes.20361) où :
* le sujet est nécessairement la plante,
* le prédicat, la propriété,
* l'objet, la valeur que prend la propriété.

A cela, il me fallait rajouter un autre triplé pour sourcer l'information :

\data (objet), a pour source (prédicat), extract (objet)\`

Aujourd'hui la formation des atomes de données n'a pas trop changé, bien que stocké dans une forme moins abstraite :

\`\`\`json
{
  "t": "<le type de la propriété, voir avec tags>",
  "v": "<la valeur de la propriété>",
  "p": [ "<le tableau des ids de plantes (taxo) concernées>" ],
  "s": [ "<le tableau des sources qui cite cette propriété>" ]
}
\`\`\`

### problématiques

Bref, pour en revenir à la saisie de ces atomes, après en avoir entré plusieurs dizaines il m'a semblé évident que :
* je ne pourrais pas remplir tout ça tout seul,
* la fluidité du processus était primordiale pour l'engagement et le maintien de l'intérêt du contributeur.

C'est pourquoi j'ai commencé à imaginer PERMA-DATA comme un jeu.

Sur la roadmap, une tribu sera dédiée à la saisie de la donnée atomique et à l'ajout de nouvelles sources.

## 2 Des atomes communautaires

Ensuite, il m'a semblé très intéressant de rajouter le feedback d'indivdus, représentant alors des données spatiales précises, donc des conditions de culture très spécifiques et ainsi une palette de référence plus exhaustif encore.

### Problématiques

Évidemment, chaque individu a :
* son intérêt à collecter seulement des fragments d'information (non-exhaustivité),
* sa façon de collecter ces fragments.

Je devais effectivement trouver un format standard pour stocker l'information tout en garantissant au contributeur une saisie la plus adaptée à ses pratiques.

C'est d'ailleurs cette question sous-jacente du format qui m'a amené à me poser d'avantage de questions sur les référentiels (# section 3).

Toutefois, cette source d'information est non-négligeable puisqu'elle apporte de la diversité donc aussi bien dans les conditions auxquelles ont été soumises les plantes, mais également dans les caractéristiques observées par tel ou tel jardinier.

Dans la roadmap, une tribu permettra de collecter les observations des utilisateurs, les associant donc à leurs données spatiales, météorologiques, etc.

## 3 des constellations de référentiels

J'utilise [Pl@ntNet](http://plantnet.org/), l'application de reconnaissance de plantes, depuis un certain temps. 

Un jour en transfert à Paris, gare de l'Est, je pris en photo une plante qui poussait dans la rue. Wikipédia ne fournissant les données qui m'intéressaient, pour la première fois je cliquais sur l'onglet "i".

Dans la liste des informations, je me rendis sur gbif.org pour découvrir : ce que je croyais inventer avec PERMA-DATA.

Mais la surprise fut de courte durée.

Peu de temps après, je découvrais également [Tela Botanica](https://www.tela-botanica.org/) (qui au passage est l'un des porteurs du projet Pl@ntNet), dont je note ici l'extraordinaire travail.

Mais loin de me décourager, je pensais que : tout en voulant accomplir des objectifs similaires, nos manières d'y arriver peuvent être différente ET complémentaire.

### Échanger de la donnée

Depuis, j'ai pu trouvé une dizaine d'autres référentiels conséquents traitant des plantes, de leur bibliographie et décrivant certaines de leurs propriétés.

Aujourd'hui, je pense que loin d'être concurrencente, nos approches respectives se nourrissent les unes-les autres.

**En effet** PERMA-DATA **a la double identité base de données - jeu**, en plus de vouloir être un outil d'apprentissage et de recherche, sur les plantes et la permaculture.

Tout cet enjeu de la ludification (*gamification*) est un des perspectives majeurs du siècle, et il me plaît dans tous les cas de l'illustrer pour peut-être orienter ma carrière professionnelle en ce sens.

De plus, pour des questions éthiques, l'usage des services proposés par les autres acteurs de l'environnement doit faire l'objet d'une rémunération juste, à la mesure des échelles sur lesquelles nous évoluons.

La monnaie principale que j'entrevois pour échanger de la donnée semble simplement être : une autre donnée.

### Problématiques

Vouloir échanger de la donnée signifie parler le même langage, donc : comprendre la donnée que l'on consomme et documenter la façon de consommer la notre.

Le format des données fait déjà l'objet de certains standards, dont je me dis présentement que j'aurais du les stocker quelque part. J'en reparlerais précisément plus tard.

A chaque flux, sa problématique :
* Pour la consommation de données externes, c'est la stratégie de rafraîchissement et de contrôle des données,
* Pour l'exposition de données internes, c'est le contrôle des accès et des quotas.

Dans la roadmap, une tribu sera dédiée à ces tâches, avec un niveau d'interaction assez bas (proche du code).

## Prochainement

Je travaille sur le maquettage (mobile) du début de l'histoire et de l'introduction aux outils.
  `
}