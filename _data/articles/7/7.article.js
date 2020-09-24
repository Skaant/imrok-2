export default {
  title: "L'exponentialité dans le développement informatique",
  date: '15/07/2020',
  tags: [ 'dev', 'abs' ],
  content: `
## La source de l'exponentialité

Si l'on croise deux itérateurs,
On multiplie le nombre d'itérations.

De ce fait,
À chaque fois que l'on rajoute un élément à l'index de l'un des itérateurs,
On augmente le nombre d'itérations de la taille de l'autre itérateur.

À chaque fois que l'on rajoute un itérateur,
On multiplie son nombre d'itérations par le produit croisé des précédents itérateurs.

**On atteint rapidement des chiffres vertigineux !**

### La quête de linéarisation

L'exponentialité s'exprime de façon positive dans des principes,
Tel que le DRY (don't repeat yourself),
Mais c'est généralement toujours quelque chose à éviter, voir bannir.

Ce que l'on cherche à susciter, au contraire,
C'est la linéarisation des concepts du projet,
Au moins au statut de noeuds quoiqu'alors il s'agisse plutôt d'une "nodalisation".

## Exemples et conséquences négatives

Autour des deux composants de l'exponentialité :
* Les itérateurs (les axes, les facteurs, les listes),
* Les itérations (le produit, les instances).

### Itérateurs courants

De moins point de vue,
Voici une liste de certaines des itérateurs que je rencontre fréquemment :
* Les opérations de tableaux (\`.map()\`, \`.reduce()\` ...),
* Les boucles (\`foreach\`, \`while\` ...),
* Les éléments répétitifs du workflow (étapes de formulaire, processus alternatifs ...),
* Les environnements de déploiement,
* Les pages (le HTML, mais aussi tout le reste : style, application ...),
* Les projets ...

### Itérations courantes

Et, de l'autre côté,
La liste de certaines des produits négatifs de l'itération par le croisement de certains itérateurs entre eux :
* Les bugs,
* Le temps de déploiement,
* Le temps de refactoring,
* Le temps d'acquisition par un nouveau collaborateur,
* Le volume de code,
* Le volume de modifications enregistrées par le versioning et sa consultation par le biais d'interfaces ...

## Conclusion

En combinant plusieurs axes,
on tend à l'exponentialité.

D'un côté ça nous sauve de la répétition,
D'un autre, nous pouvons nous laisser submerger
Par le volume et la complexité générés.
  `
}