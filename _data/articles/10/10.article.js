export default {
  id: '10',
  title: 'Recherches sur le site HIGHBS-BOK',
  date: '07/10/2020',
  tags: [ 'ux', 'patterns', 'dev', 'kami.js', 'highbs-bok.art' ],
  content: `
Depuis quelques mois, je réfléchis à construire un framework implémentant
librement le concept de [*generative design patterns*](https://www.researchgate.net/publication/3981737_Generative_design_patterns).

J'ai donc mis au point un module nommé [\`kami.js\`](https://github.com/Skaant/kami.js), qui,
humblement, commence à aggréger un certain nombre de motifs,
de *patterns*, récurrents dans mes projets.

Mes cas d'utilisation principaux sont trois sites statiques :

* [imrok.fr](https://imrok.fr),
* [higbhbs-bok.art](https://highbs-bok.art),
* Le futur site de documentation de \`kami.js\`.

Je profite du passage du second,
l'HIGHBS-BOK,
sur ce nouveau framework,
et de la migration des données qui s'en suit
pour présenter le résultat de mes recherches sur ce projet artistique.

## Structure de l'HIGHBS-BOK

**L'HIGHBS-BOK c'est le Livre de l'Illumination.**
Il contient les motifs primordiaux,
Comme toutes choses,
Mais il les exteriorise et fixe radicalement.

En tant que livre,
Je voudrais que la sensation de parcourir ce site
Soit comme tourner des pages,
La navigation (et autres features ?) en plus.

Ayant travaillé à de nombreux storyboards sur le sujet,
dont [certains sur ce site](/storyboards),
j'imaginais bien le volume du contenu de ce livre.

Pour le nombre de pages que je voulais intégrer,
J'ai choisi de décomposer le livre en trois
niveaux de [BOOK-SECTION](https://github.com/Skaant/kami.js#book-section),
Le [KAMI](https://github.com/Skaant/kami.js#kami) (motif) qui décrit ... les sections d'un livre.

La hierarchie de l'HIGHBS-BOK doit faire l'objet
d'une formalisation sous forme de KAMIS.

\`section: era -->* section: chapter -->* page\`

## Une expérience utilisateur à la hauteur

En fait, je pense que l'HIGHBS-BOK peut
devenir assez complexe à utiliser à cause :

* De l'ABS-LANG, les mots en majuscules,
* Des différents niveaux de SECTION (voir plus haut),
* Des idées futuristes et subversives qui s'y trouvent.

L'UX du site, doit absolument être pensé
pour proposer un lecture fluide, gratifiante, ... ludique ?

Et ces légers désavantages ajoutent un handicap à
ce processus de design.

### La civilisation de la page

On dit souvent civilisation du livre.

Je pense que c'est une expression malvoyée
Car en fait, elle fait plus référence à la civilisation qui
Porte l'écrit, et par lequel se structure sa connaissance et son organisation.

La civilisation du livre
C'est ceux qui utilisent du matériel pour
exterioriser de la connaissance,
en acquérir de la nouvelle, en stocker hors de soi.

La page c'est l'unité en dessous du livre,
Au niveau physique.

Je précise car dans le niveau conceptuel,
On sait que l'on a trois couches de SECTION.

C'est, toujours dans ce niveau conceptuel,
l'unité la plus basse du livre, juste avant le contenu,
**Et surtout, celui sur lequel se base le système d'URL.**

Passer d'une page à l'autre,
Avancer, revenir, contempler les tables des matières,
Ceci doit se faire d'un mouvement,
avec des contrôles simples et idéalement d'un animation smooth.

Mais bon features = temps = budget.
Je pense qu'il faudrait commencer par là.

### Le sens de l'histoire

Il s'agit de placer des **précédent** et **suivant**
subtils qui permettent de passer d'un niveau à l'autre.

Je voudrais que la dernière page du
Chapitre 1 de l'ERA ?? mène à
la page de l'ERA 1
car c'est ce qui suit dans l'ordre chronologique.

À partir d'une ERA :

* On présente son contenu,
* Puis le bouton suivant (page du Chapitre 1),
* Puis la liste des chapitres.

Ce genre de schéma se répète pour les chapitres.

Pour les pages, ça passe simplement
à la suivante ou ça passe au suivant du
niveau supérieur (chapitre) ou encore au-dessus (ERA).

Pour le suivi de l'avancement,
J'ai commencé par mettre un *breadcrumb* de Bootstrap,
mais j'aimerais plutôt avoir une jauge ou des
pictos explicitant ma **progression** dans le livre.

## Des images

À propos de \`kami.js\`,
Il y a un côté frustrant à penser que,
d'une certaine manière,
**je ne ferais que ré-inventé le système de classe etc.
proposé par TypeScript.**

Je me dois de reprendre brique-par-brique,
pour moi, pour bien comprendre,
en partant de mes besoins concrets.

C'est le cas des images.
Une des limites actuelles de la génération de
[WEBSITE](https://github.com/Skaant/kami.js#website),
le KAMI générateur de site internet.

Je dois tout programmer.

Mon use case :
Lorsque je crée une page dans le *mapping* de mon site,
J'aimerais que toutes les images soient copiées dans le
répertoire de création de la page.

Pour le projet [imrok-2](https://github.com/Skaant/imrok-2),
Les originaux (scans) sont copiés
individuellement, en donnant leur nom précis.

C'est très lourd.

Et dans le cas de l'HIGHBS-BOK,
C'est un gros frein pour l'intégration des
nombreuses images d'archives (storyboards, artworks, notes)
que j'ai envie d'intégrer sur les pages.

## Enfin

Ces éléments sont clairement dans la [roadmap](https://highbs-bok.art#roadmap),
et devraient être livrés sous peu :

* Boutons "précédent" / "suivant" intelligent
  `
}
