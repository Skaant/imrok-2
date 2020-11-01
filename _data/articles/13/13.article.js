export default {
  id: '13',
  title: "Ce que je n'aime pas à propos de kami.js",
  date: "01/11/2020",
  tags: [ 'dev', 'abs', 'design', 'kami.js' ],
  content: `
Comme dans tous projets,
informatiques ou non,
**à un moment il faut y aller**.

On ne peut pas réfléchir mille ans,
essayer de tracer le parcours complet point-à-point ou
chercher à anticiper toutes les difficultés;
mais laisser le projet non-matérialisé.

\`kami.js\` est l'expression brute de
**mes idées sur mes besoins** :
un développement orienté motif pour
construire des sites web statiques.

Aujourd'hui mes besoins sont élargis.

J'ai ajouté des fonctionnalités au framework mais
toujours de nouvelles sont demandées.
Et puis il y a le besoin d'abstraire ce qui peut l'être.

**En ajoutant des fonctionnalités on ajoute aussi
du besoin en factorisation**.

**En utilisant, simplement, on ajoute aussi du besoin en factorisation**.

Bref, il y a :
* Ajouter des fonctionnalités,
* Refactorer pour intégrer les nouvelles fonctionnalités,
* Refactorer pour améliorer les fonctionnalités existantes.

Passons au sujet de l'article.

## Axes d'améliorations

### 1. Nom du framework

Je n'aime **plus** que les *patterns* s'appellent "kamis".

Je ne voudrais pas non plus que les *patterns* s'appellent ainsi,
à cause de la consonance masculine du terme.

L'idée est de **[re-\*]venir au terme : motif**.
\*Le terme était utilisé dans le prédécesseur de \`kami.js\`,
\`motif.js\` ([voir le projet GitHub](https://github.com/Skaant/_motif-js_0.2)).

À voir sur le *repo* principal du projet :
[L'issue concernant le renommage](https://github.com/Skaant/kami.js/issues/25).

### 2. Ré-inventer la roue
> “Don’t reinvent the wheel, just realign it.”

J'ai l'impression de **ré-inventer certains concepts de programmation** bien établis,
et **déjà implémentés de nombreuses fois** (dans une quantité de frameworks),
tels que :
  
* Les classes,
* Le *file-system* de Node.js,
* Les namespaces,
* La standardisation des relations,
* Les bases-de-données.
  
**Même si le langage utilisé agit comme un parti pris** avec lequel composer,
peut-être que le projet \`motifs\` ne devrait faire qu'exposer une interface.
**Un ensemble d'abord conceptuel avant d'être une implémentation**.

En étant à la plus proche source du langage,
moins les partis pris de TypeScript, de Lodash ou autres,
on ouvre plus de possibilités ?

### 3. Le classement des motifs ne peut se contenter de la représentation dossiers-fichiers

On préfèrerait un outil qui se base sur les relations,
ou au moins sur les mot-clé.

En fait, dans la volonté de lisser le niveau de
tous les motifs à la même liste-racine,
**la représentation devient rapidement illisible**.

Dans un monde où les fonctionnalités sont sponsorisées :

* On ajoute un raccourci dans l'IDE qui permet de taper le nom d'un motif,
  * Voir plusieurs, pour créer une recherche en servant d'eux comme mot-clé.
* On a une application Node locale couplée à une autre sur navigateur pour proposer une UI avec d'avantage de potentiels en terme d'ergonomie / UX.
  * Toutes les deux puisent leurs motifs dans le même bassin (la bibliothèque de motif fournie avec le framework).

**Il faudrait d'ores et déjà réfléchir avec cette perspective en tête pour
ne pas rester prisonnier des contraintes du dossier-fichier.**

### 4. Devoir créer manuellement le dossier _readme par défaut

Je pense que ça devrait être fourni avec le motif README.

### 5. Devoir créer manuellement le serveur de dev pour WEBSITE

Pareil, WEBSITE devrait fournir son micro-serveur de dev,
Simplement bon à simuler le fonctionnement d'un serveur Apache.

Idéalement on voudrait se passer du framework Express pour une si petite tâche.

### 6. Ne toujours pas avoir de site pour la bibliothèque

Idée : **L'application locale utilise la vue du site,
mais avec les données spécifiques locales.**

J'aimerais une belle UI pour exposer l'ensemble des
fonctionnalités, méthodes, propriétés.

Le site pourrait être construit localement et
accédé sans connexion internet.
**C'est bien plus économique.**

### 7. Une création de site plus ciblée

C'est vrai que c'est pratique :
\`npm run website\` et tout est construit.

La commande blackboxée est :
\`npm start -- -k website -force -log build default\`

C'est le "tout" qui est problématique,
car toutes les opérations de copie de fichiers,
de transformation en JavaScript, etc ...
on un coût bien plus important qu'elles ne devraient.

Je pense à une option de différentiel.
Comment la réaliser ?

### 8. Intégration du déploiement à une pipeline CI
  `
}