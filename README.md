*[27 KAMIS](#kamis-glossary)
on 9/25/2020, 6:52:44 PM*

# imrok-2

> My CREATIVE HUB's sources.

![kami.js project pictogram](/_websites/default/_assets/star-logo.svg)

### Table of content

* [KAMIS glossary](#kamis-glossary)

## KAMIS' glossary
    
* [ARTICLE](#article) : Article
* [*-BOOK](#-book) : Book

  * [*-BOOK-EXTRACT](#-book-extract) : Extract, Fragment, Atom

  * [*-BOOK-IMAGE](#-book-image) : Image, Picture, Illustration, Scan

  * [*-BOOK-PAGE](#-book-page) : Page

  * [*-BOOK-SECTION](#-book-section) : Section, Chapter, Part
* [*-COMMAND](#-command) : Command
* [*-DOC](#-doc) : Documentation
* [*-FILE](#-file) : File
* [*-FOLDER](#-folder) : Folder
* [*-GET](#-get) : Accesser, Obtain, Hydrater
* [*-INSTANCE](#-instance) : Instance
* [*-KAMI](#-kami) : Concept, Idea, Word, Pattern, Spirit, God
* [*-LANG](#-lang) : Language
* [NOTEBOOK](#notebook) : Notebook
* [*-PANTHEON](#-pantheon) : Pantheon, Primordial shrine
* [*-PROP](#-prop) : Property, Characteristics, Attribute
* [*-README](#-readme) : README

  * [*-README-SECTION](#-readme-section) : Section
* [*-ШRᛏGHN](#-shrine) : Shrine
* [*-SPEC](#-spec) : Specification
* [STORYBOARD](#storyboard) : Storyboard
* [*-UTIL](#-util) : Utility
* [*-WAY](#-way) : Method, Action, Operation, Function
* [*-WEBSITE](#-website) : Website

  * [*-WEBSITE-PAGE](#-website-page) : Page, Website page
* [*-WIKI](#-wiki) : Wiki

## `article`

**ARTICLE** is a project specific KAMI.

It is known as :

* [en] Article,
* [fr] Article.

### Description

**WEBSITE ARTICLE**

An article is a titled and dated content,
with optional tags and meta-data.

## Occurences

Matching regular expression :

`/_data\/articles\/(.*)\/(.*).article.js/`.

* [`/_data/articles/1/1.article.js`](/_data/articles/1/1.article.js)
* [`/_data/articles/2/2.article.js`](/_data/articles/2/2.article.js)
* [`/_data/articles/3/3.article.js`](/_data/articles/3/3.article.js)
* [`/_data/articles/4/4.article.js`](/_data/articles/4/4.article.js)
* [`/_data/articles/5/5.article.js`](/_data/articles/5/5.article.js)
* [`/_data/articles/6/6.article.js`](/_data/articles/6/6.article.js)
* [`/_data/articles/7/7.article.js`](/_data/articles/7/7.article.js)
* [`/_data/articles/8/8.article.js`](/_data/articles/8/8.article.js)
* [`/_data/articles/9/9.article.js`](/_data/articles/9/9.article.js)


## `*-book`

**PANTHEON-BOOK** is a PANTHEON KAMI.

It is known as :

* [en] Book,
* [fr] Livre.

### Description

**ORDERED COLLECTION OF WRITINGS**

A BOOK content is made of smaller [KAMIS](#kami)/bricks :

* [BOOK-SECTIONS](#book-section),
  which split BOOK content in chapters or sub-sections;
  
* [BOOK-PAGES](#book-page),
  actually representing a scanned sheet of paper,
  but could also hold expected BOOK page outcome;
  
* [BOOK-EXTRACTS](#book-extract),
  which hold an atomic fragment of BOOK content.
  
**Note that BOOK is a top-level section
with just some specific meta-data.**


## `*-book-extract`

**PANTHEON-BOOK-EXTRACT** is a PANTHEON KAMI.

It is known as :

* [en] Extract, Fragment, Atom,
* [fr] Extrait, Fragment, Atome.

### Description

**BOOK EXTRACT**

A FRAGMENT is the smallest unit of [BOOK](#book) content.

It can be included inside a [SECTION](#section),
a [PAGE](#page) or directly on the BOOK root.

## Occurences

Matching regular expression :

`/\/_extracts\/(.*)\/(.*)\.extract\.js/`.

* [`/_data/notebooks/pensees-1/_extracts/1/1.extract.js`](/_data/notebooks/pensees-1/_extracts/1/1.extract.js)
* [`/_data/notebooks/pensees-1/_extracts/2/2.extract.js`](/_data/notebooks/pensees-1/_extracts/2/2.extract.js)
* [`/_data/notebooks/pensees-12/_extracts/1/1.extract.js`](/_data/notebooks/pensees-12/_extracts/1/1.extract.js)
* [`/_data/notebooks/pensees-12/_extracts/2/2.extract.js`](/_data/notebooks/pensees-12/_extracts/2/2.extract.js)
* [`/_data/notebooks/pensees-2/_extracts/1/1.extract.js`](/_data/notebooks/pensees-2/_extracts/1/1.extract.js)
* [`/_data/notebooks/pensees-2/_extracts/2/2.extract.js`](/_data/notebooks/pensees-2/_extracts/2/2.extract.js)
* [`/_data/notebooks/pensees-7/_extracts/1/1.extract.js`](/_data/notebooks/pensees-7/_extracts/1/1.extract.js)
* [`/_data/notebooks/pensees-7/_extracts/2/2.extract.js`](/_data/notebooks/pensees-7/_extracts/2/2.extract.js)
* [`/_data/notebooks/pensees-9/_extracts/1/1.extract.js`](/_data/notebooks/pensees-9/_extracts/1/1.extract.js)


## `*-book-image`

**PANTHEON-BOOK-IMAGE** is a PANTHEON KAMI.

It is known as :

* [en] Image, Picture, Illustration, Scan,
* [fr] Image, Illustration, Numérisation.

### Description

**VISUAL CONTENT**

## Occurences

Matching regular expression :

`/\.(png|jpg|svg)$/`.

* [`/kami.js/logo.svg`](/kami.js/logo.svg)
* [`/kami.js/_shrine/kami/kami.picto.svg`](/kami.js/_shrine/kami/kami.picto.svg)
* [`/kami.js/_shrine/lang/lang.picto.svg`](/kami.js/_shrine/lang/lang.picto.svg)
* [`/kami.js/_shrine/prop/prop.picto.svg`](/kami.js/_shrine/prop/prop.picto.svg)
* [`/kami.js/_shrine/readme/readme.picto.svg`](/kami.js/_shrine/readme/readme.picto.svg)
* [`/kami.js/_shrine/shrine/shrine.picto.svg`](/kami.js/_shrine/shrine/shrine.picto.svg)
* [`/kami.js/_shrine/util/util.picto.svg`](/kami.js/_shrine/util/util.picto.svg)
* [`/_build/assets/star-logo.svg`](/_build/assets/star-logo.svg)
* [`/_build/carnets/pensees-1/sens-observateurs/original.png`](/_build/carnets/pensees-1/sens-observateurs/original.png)
* [`/_build/carnets/pensees-1/violence-des-pensees/original.png`](/_build/carnets/pensees-1/violence-des-pensees/original.png)
* [`/_build/carnets/pensees-12/comment-bien-tousser/original.png`](/_build/carnets/pensees-12/comment-bien-tousser/original.png)
* [`/_build/carnets/pensees-12/le-confort-vallee-lac/original.png`](/_build/carnets/pensees-12/le-confort-vallee-lac/original.png)
* [`/_build/carnets/pensees-2/exprimer-message-divin/original.png`](/_build/carnets/pensees-2/exprimer-message-divin/original.png)
* [`/_build/carnets/pensees-2/illumination-se-dessine/original.jpg`](/_build/carnets/pensees-2/illumination-se-dessine/original.jpg)
* [`/_build/carnets/pensees-2/illumination-se-dessine/original.png`](/_build/carnets/pensees-2/illumination-se-dessine/original.png)
* [`/_build/carnets/pensees-7/corps-toute-conscience/original.png`](/_build/carnets/pensees-7/corps-toute-conscience/original.png)
* [`/_build/carnets/pensees-7/des-prophetes/original.png`](/_build/carnets/pensees-7/des-prophetes/original.png)
* [`/_build/carnets/pensees-9/jeunes-spontanes/original.png`](/_build/carnets/pensees-9/jeunes-spontanes/original.png)
* [`/_build/storyboards/absutrats-6-18/1/original.jpg`](/_build/storyboards/absutrats-6-18/1/original.jpg)
* [`/_build/storyboards/absutrats-6-18/10/original.jpg`](/_build/storyboards/absutrats-6-18/10/original.jpg)
* [`/_build/storyboards/absutrats-6-18/11/original.jpg`](/_build/storyboards/absutrats-6-18/11/original.jpg)
* [`/_build/storyboards/absutrats-6-18/12/original.jpg`](/_build/storyboards/absutrats-6-18/12/original.jpg)
* [`/_build/storyboards/absutrats-6-18/13/original.jpg`](/_build/storyboards/absutrats-6-18/13/original.jpg)
* [`/_build/storyboards/absutrats-6-18/14/original.jpg`](/_build/storyboards/absutrats-6-18/14/original.jpg)
* [`/_build/storyboards/absutrats-6-18/15/original.jpg`](/_build/storyboards/absutrats-6-18/15/original.jpg)
* [`/_build/storyboards/absutrats-6-18/2/original.jpg`](/_build/storyboards/absutrats-6-18/2/original.jpg)
* [`/_build/storyboards/absutrats-6-18/3/original.jpg`](/_build/storyboards/absutrats-6-18/3/original.jpg)
* [`/_build/storyboards/absutrats-6-18/4/original.jpg`](/_build/storyboards/absutrats-6-18/4/original.jpg)
* [`/_build/storyboards/absutrats-6-18/5/original.jpg`](/_build/storyboards/absutrats-6-18/5/original.jpg)
* [`/_build/storyboards/absutrats-6-18/6/original.jpg`](/_build/storyboards/absutrats-6-18/6/original.jpg)
* [`/_build/storyboards/absutrats-6-18/7/original.jpg`](/_build/storyboards/absutrats-6-18/7/original.jpg)
* [`/_build/storyboards/absutrats-6-18/8/original.jpg`](/_build/storyboards/absutrats-6-18/8/original.jpg)
* [`/_build/storyboards/absutrats-6-18/9/original.jpg`](/_build/storyboards/absutrats-6-18/9/original.jpg)
* [`/_build/storyboards/absutrats-jeu/1/original.jpg`](/_build/storyboards/absutrats-jeu/1/original.jpg)
* [`/_build/storyboards/absutrats-jeu/10/original.jpg`](/_build/storyboards/absutrats-jeu/10/original.jpg)
* [`/_build/storyboards/absutrats-jeu/11/original.jpg`](/_build/storyboards/absutrats-jeu/11/original.jpg)
* [`/_build/storyboards/absutrats-jeu/12/original.jpg`](/_build/storyboards/absutrats-jeu/12/original.jpg)
* [`/_build/storyboards/absutrats-jeu/2/original.jpg`](/_build/storyboards/absutrats-jeu/2/original.jpg)
* [`/_build/storyboards/absutrats-jeu/3/original.jpg`](/_build/storyboards/absutrats-jeu/3/original.jpg)
* [`/_build/storyboards/absutrats-jeu/4/original.jpg`](/_build/storyboards/absutrats-jeu/4/original.jpg)
* [`/_build/storyboards/absutrats-jeu/5/original.jpg`](/_build/storyboards/absutrats-jeu/5/original.jpg)
* [`/_build/storyboards/absutrats-jeu/6/original.jpg`](/_build/storyboards/absutrats-jeu/6/original.jpg)
* [`/_build/storyboards/absutrats-jeu/7/original.jpg`](/_build/storyboards/absutrats-jeu/7/original.jpg)
* [`/_build/storyboards/absutrats-jeu/8/original.jpg`](/_build/storyboards/absutrats-jeu/8/original.jpg)
* [`/_build/storyboards/absutrats-jeu/9/original.jpg`](/_build/storyboards/absutrats-jeu/9/original.jpg)
* [`/_build/storyboards/absutrats-vol1-v2/1/original.jpg`](/_build/storyboards/absutrats-vol1-v2/1/original.jpg)
* [`/_build/storyboards/absutrats-vol1-v2/10/original.jpg`](/_build/storyboards/absutrats-vol1-v2/10/original.jpg)
* [`/_build/storyboards/absutrats-vol1-v2/11/original.jpg`](/_build/storyboards/absutrats-vol1-v2/11/original.jpg)
* [`/_build/storyboards/absutrats-vol1-v2/12/original.jpg`](/_build/storyboards/absutrats-vol1-v2/12/original.jpg)
* [`/_build/storyboards/absutrats-vol1-v2/13/original.jpg`](/_build/storyboards/absutrats-vol1-v2/13/original.jpg)
* [`/_build/storyboards/absutrats-vol1-v2/2/original.jpg`](/_build/storyboards/absutrats-vol1-v2/2/original.jpg)
* [`/_build/storyboards/absutrats-vol1-v2/3/original.jpg`](/_build/storyboards/absutrats-vol1-v2/3/original.jpg)
* [`/_build/storyboards/absutrats-vol1-v2/4/original.jpg`](/_build/storyboards/absutrats-vol1-v2/4/original.jpg)
* [`/_build/storyboards/absutrats-vol1-v2/5/original.jpg`](/_build/storyboards/absutrats-vol1-v2/5/original.jpg)
* [`/_build/storyboards/absutrats-vol1-v2/6/original.jpg`](/_build/storyboards/absutrats-vol1-v2/6/original.jpg)
* [`/_build/storyboards/absutrats-vol1-v2/7/original.jpg`](/_build/storyboards/absutrats-vol1-v2/7/original.jpg)
* [`/_build/storyboards/absutrats-vol1-v2/8/original.jpg`](/_build/storyboards/absutrats-vol1-v2/8/original.jpg)
* [`/_build/storyboards/absutrats-vol1-v2/9/original.jpg`](/_build/storyboards/absutrats-vol1-v2/9/original.jpg)
* [`/_build/storyboards/highbs-bok/1/original.jpg`](/_build/storyboards/highbs-bok/1/original.jpg)
* [`/_build/storyboards/highbs-bok/10/original.jpg`](/_build/storyboards/highbs-bok/10/original.jpg)
* [`/_build/storyboards/highbs-bok/11/original.jpg`](/_build/storyboards/highbs-bok/11/original.jpg)
* [`/_build/storyboards/highbs-bok/12/original.jpg`](/_build/storyboards/highbs-bok/12/original.jpg)
* [`/_build/storyboards/highbs-bok/13/original.jpg`](/_build/storyboards/highbs-bok/13/original.jpg)
* [`/_build/storyboards/highbs-bok/14/original.jpg`](/_build/storyboards/highbs-bok/14/original.jpg)
* [`/_build/storyboards/highbs-bok/15/original.jpg`](/_build/storyboards/highbs-bok/15/original.jpg)
* [`/_build/storyboards/highbs-bok/16/original.jpg`](/_build/storyboards/highbs-bok/16/original.jpg)
* [`/_build/storyboards/highbs-bok/17/original.jpg`](/_build/storyboards/highbs-bok/17/original.jpg)
* [`/_build/storyboards/highbs-bok/18/original.jpg`](/_build/storyboards/highbs-bok/18/original.jpg)
* [`/_build/storyboards/highbs-bok/19/original.jpg`](/_build/storyboards/highbs-bok/19/original.jpg)
* [`/_build/storyboards/highbs-bok/2/original.jpg`](/_build/storyboards/highbs-bok/2/original.jpg)
* [`/_build/storyboards/highbs-bok/20/original.jpg`](/_build/storyboards/highbs-bok/20/original.jpg)
* [`/_build/storyboards/highbs-bok/21/original.jpg`](/_build/storyboards/highbs-bok/21/original.jpg)
* [`/_build/storyboards/highbs-bok/22/original.jpg`](/_build/storyboards/highbs-bok/22/original.jpg)
* [`/_build/storyboards/highbs-bok/23/original.jpg`](/_build/storyboards/highbs-bok/23/original.jpg)
* [`/_build/storyboards/highbs-bok/24/original.jpg`](/_build/storyboards/highbs-bok/24/original.jpg)
* [`/_build/storyboards/highbs-bok/25/original.jpg`](/_build/storyboards/highbs-bok/25/original.jpg)
* [`/_build/storyboards/highbs-bok/26/original.jpg`](/_build/storyboards/highbs-bok/26/original.jpg)
* [`/_build/storyboards/highbs-bok/27/original.jpg`](/_build/storyboards/highbs-bok/27/original.jpg)
* [`/_build/storyboards/highbs-bok/28/original.jpg`](/_build/storyboards/highbs-bok/28/original.jpg)
* [`/_build/storyboards/highbs-bok/29/original.jpg`](/_build/storyboards/highbs-bok/29/original.jpg)
* [`/_build/storyboards/highbs-bok/3/original.jpg`](/_build/storyboards/highbs-bok/3/original.jpg)
* [`/_build/storyboards/highbs-bok/30/original.jpg`](/_build/storyboards/highbs-bok/30/original.jpg)
* [`/_build/storyboards/highbs-bok/31/original.jpg`](/_build/storyboards/highbs-bok/31/original.jpg)
* [`/_build/storyboards/highbs-bok/32/original.jpg`](/_build/storyboards/highbs-bok/32/original.jpg)
* [`/_build/storyboards/highbs-bok/33/original.jpg`](/_build/storyboards/highbs-bok/33/original.jpg)
* [`/_build/storyboards/highbs-bok/34/original.jpg`](/_build/storyboards/highbs-bok/34/original.jpg)
* [`/_build/storyboards/highbs-bok/35/original.jpg`](/_build/storyboards/highbs-bok/35/original.jpg)
* [`/_build/storyboards/highbs-bok/36/original.jpg`](/_build/storyboards/highbs-bok/36/original.jpg)
* [`/_build/storyboards/highbs-bok/37/original.jpg`](/_build/storyboards/highbs-bok/37/original.jpg)
* [`/_build/storyboards/highbs-bok/38/original.jpg`](/_build/storyboards/highbs-bok/38/original.jpg)
* [`/_build/storyboards/highbs-bok/39/original.jpg`](/_build/storyboards/highbs-bok/39/original.jpg)
* [`/_build/storyboards/highbs-bok/4/original.jpg`](/_build/storyboards/highbs-bok/4/original.jpg)
* [`/_build/storyboards/highbs-bok/40/original.jpg`](/_build/storyboards/highbs-bok/40/original.jpg)
* [`/_build/storyboards/highbs-bok/41/original.jpg`](/_build/storyboards/highbs-bok/41/original.jpg)
* [`/_build/storyboards/highbs-bok/42/original.jpg`](/_build/storyboards/highbs-bok/42/original.jpg)
* [`/_build/storyboards/highbs-bok/5/original.jpg`](/_build/storyboards/highbs-bok/5/original.jpg)
* [`/_build/storyboards/highbs-bok/6/original.jpg`](/_build/storyboards/highbs-bok/6/original.jpg)
* [`/_build/storyboards/highbs-bok/7/original.jpg`](/_build/storyboards/highbs-bok/7/original.jpg)
* [`/_build/storyboards/highbs-bok/8/original.jpg`](/_build/storyboards/highbs-bok/8/original.jpg)
* [`/_build/storyboards/highbs-bok/9/original.jpg`](/_build/storyboards/highbs-bok/9/original.jpg)
* [`/_build/storyboards/psybok-vol0/1/original.jpg`](/_build/storyboards/psybok-vol0/1/original.jpg)
* [`/_build/storyboards/psybok-vol0/10/original.jpg`](/_build/storyboards/psybok-vol0/10/original.jpg)
* [`/_build/storyboards/psybok-vol0/11/original.jpg`](/_build/storyboards/psybok-vol0/11/original.jpg)
* [`/_build/storyboards/psybok-vol0/12/original.jpg`](/_build/storyboards/psybok-vol0/12/original.jpg)
* [`/_build/storyboards/psybok-vol0/13/original.jpg`](/_build/storyboards/psybok-vol0/13/original.jpg)
* [`/_build/storyboards/psybok-vol0/14/original.jpg`](/_build/storyboards/psybok-vol0/14/original.jpg)
* [`/_build/storyboards/psybok-vol0/15/original.jpg`](/_build/storyboards/psybok-vol0/15/original.jpg)
* [`/_build/storyboards/psybok-vol0/16/original.jpg`](/_build/storyboards/psybok-vol0/16/original.jpg)
* [`/_build/storyboards/psybok-vol0/17/original.jpg`](/_build/storyboards/psybok-vol0/17/original.jpg)
* [`/_build/storyboards/psybok-vol0/18/original.jpg`](/_build/storyboards/psybok-vol0/18/original.jpg)
* [`/_build/storyboards/psybok-vol0/19/original.jpg`](/_build/storyboards/psybok-vol0/19/original.jpg)
* [`/_build/storyboards/psybok-vol0/2/original.jpg`](/_build/storyboards/psybok-vol0/2/original.jpg)
* [`/_build/storyboards/psybok-vol0/20/original.jpg`](/_build/storyboards/psybok-vol0/20/original.jpg)
* [`/_build/storyboards/psybok-vol0/21/original.jpg`](/_build/storyboards/psybok-vol0/21/original.jpg)
* [`/_build/storyboards/psybok-vol0/22/original.jpg`](/_build/storyboards/psybok-vol0/22/original.jpg)
* [`/_build/storyboards/psybok-vol0/23/original.jpg`](/_build/storyboards/psybok-vol0/23/original.jpg)
* [`/_build/storyboards/psybok-vol0/24/original.jpg`](/_build/storyboards/psybok-vol0/24/original.jpg)
* [`/_build/storyboards/psybok-vol0/25/original.jpg`](/_build/storyboards/psybok-vol0/25/original.jpg)
* [`/_build/storyboards/psybok-vol0/26/original.jpg`](/_build/storyboards/psybok-vol0/26/original.jpg)
* [`/_build/storyboards/psybok-vol0/27/original.jpg`](/_build/storyboards/psybok-vol0/27/original.jpg)
* [`/_build/storyboards/psybok-vol0/28/original.jpg`](/_build/storyboards/psybok-vol0/28/original.jpg)
* [`/_build/storyboards/psybok-vol0/29/original.jpg`](/_build/storyboards/psybok-vol0/29/original.jpg)
* [`/_build/storyboards/psybok-vol0/3/original.jpg`](/_build/storyboards/psybok-vol0/3/original.jpg)
* [`/_build/storyboards/psybok-vol0/30/original.jpg`](/_build/storyboards/psybok-vol0/30/original.jpg)
* [`/_build/storyboards/psybok-vol0/31/original.jpg`](/_build/storyboards/psybok-vol0/31/original.jpg)
* [`/_build/storyboards/psybok-vol0/32/original.jpg`](/_build/storyboards/psybok-vol0/32/original.jpg)
* [`/_build/storyboards/psybok-vol0/33/original.jpg`](/_build/storyboards/psybok-vol0/33/original.jpg)
* [`/_build/storyboards/psybok-vol0/34/original.jpg`](/_build/storyboards/psybok-vol0/34/original.jpg)
* [`/_build/storyboards/psybok-vol0/35/original.jpg`](/_build/storyboards/psybok-vol0/35/original.jpg)
* [`/_build/storyboards/psybok-vol0/36/original.jpg`](/_build/storyboards/psybok-vol0/36/original.jpg)
* [`/_build/storyboards/psybok-vol0/37/original.jpg`](/_build/storyboards/psybok-vol0/37/original.jpg)
* [`/_build/storyboards/psybok-vol0/38/original.jpg`](/_build/storyboards/psybok-vol0/38/original.jpg)
* [`/_build/storyboards/psybok-vol0/39/original.jpg`](/_build/storyboards/psybok-vol0/39/original.jpg)
* [`/_build/storyboards/psybok-vol0/4/original.jpg`](/_build/storyboards/psybok-vol0/4/original.jpg)
* [`/_build/storyboards/psybok-vol0/40/original.jpg`](/_build/storyboards/psybok-vol0/40/original.jpg)
* [`/_build/storyboards/psybok-vol0/41/original.jpg`](/_build/storyboards/psybok-vol0/41/original.jpg)
* [`/_build/storyboards/psybok-vol0/42/original.jpg`](/_build/storyboards/psybok-vol0/42/original.jpg)
* [`/_build/storyboards/psybok-vol0/43/original.jpg`](/_build/storyboards/psybok-vol0/43/original.jpg)
* [`/_build/storyboards/psybok-vol0/44/original.jpg`](/_build/storyboards/psybok-vol0/44/original.jpg)
* [`/_build/storyboards/psybok-vol0/45/original.jpg`](/_build/storyboards/psybok-vol0/45/original.jpg)
* [`/_build/storyboards/psybok-vol0/46/original.jpg`](/_build/storyboards/psybok-vol0/46/original.jpg)
* [`/_build/storyboards/psybok-vol0/47/original.jpg`](/_build/storyboards/psybok-vol0/47/original.jpg)
* [`/_build/storyboards/psybok-vol0/48/original.jpg`](/_build/storyboards/psybok-vol0/48/original.jpg)
* [`/_build/storyboards/psybok-vol0/49/original.jpg`](/_build/storyboards/psybok-vol0/49/original.jpg)
* [`/_build/storyboards/psybok-vol0/5/original.jpg`](/_build/storyboards/psybok-vol0/5/original.jpg)
* [`/_build/storyboards/psybok-vol0/50/original.jpg`](/_build/storyboards/psybok-vol0/50/original.jpg)
* [`/_build/storyboards/psybok-vol0/51/original.jpg`](/_build/storyboards/psybok-vol0/51/original.jpg)
* [`/_build/storyboards/psybok-vol0/52/original.jpg`](/_build/storyboards/psybok-vol0/52/original.jpg)
* [`/_build/storyboards/psybok-vol0/53/original.jpg`](/_build/storyboards/psybok-vol0/53/original.jpg)
* [`/_build/storyboards/psybok-vol0/54/original.jpg`](/_build/storyboards/psybok-vol0/54/original.jpg)
* [`/_build/storyboards/psybok-vol0/55/original.jpg`](/_build/storyboards/psybok-vol0/55/original.jpg)
* [`/_build/storyboards/psybok-vol0/56/original.jpg`](/_build/storyboards/psybok-vol0/56/original.jpg)
* [`/_build/storyboards/psybok-vol0/57/original.jpg`](/_build/storyboards/psybok-vol0/57/original.jpg)
* [`/_build/storyboards/psybok-vol0/58/original.jpg`](/_build/storyboards/psybok-vol0/58/original.jpg)
* [`/_build/storyboards/psybok-vol0/6/original.jpg`](/_build/storyboards/psybok-vol0/6/original.jpg)
* [`/_build/storyboards/psybok-vol0/7/original.jpg`](/_build/storyboards/psybok-vol0/7/original.jpg)
* [`/_build/storyboards/psybok-vol0/8/original.jpg`](/_build/storyboards/psybok-vol0/8/original.jpg)
* [`/_build/storyboards/psybok-vol0/9/original.jpg`](/_build/storyboards/psybok-vol0/9/original.jpg)
* [`/_build/storyboards/psybok-vol1/1/original.jpg`](/_build/storyboards/psybok-vol1/1/original.jpg)
* [`/_build/storyboards/psybok-vol1/10/original.jpg`](/_build/storyboards/psybok-vol1/10/original.jpg)
* [`/_build/storyboards/psybok-vol1/11/original.jpg`](/_build/storyboards/psybok-vol1/11/original.jpg)
* [`/_build/storyboards/psybok-vol1/12/original.jpg`](/_build/storyboards/psybok-vol1/12/original.jpg)
* [`/_build/storyboards/psybok-vol1/13/original.jpg`](/_build/storyboards/psybok-vol1/13/original.jpg)
* [`/_build/storyboards/psybok-vol1/14/original.jpg`](/_build/storyboards/psybok-vol1/14/original.jpg)
* [`/_build/storyboards/psybok-vol1/15/original.jpg`](/_build/storyboards/psybok-vol1/15/original.jpg)
* [`/_build/storyboards/psybok-vol1/16/original.jpg`](/_build/storyboards/psybok-vol1/16/original.jpg)
* [`/_build/storyboards/psybok-vol1/17/original.jpg`](/_build/storyboards/psybok-vol1/17/original.jpg)
* [`/_build/storyboards/psybok-vol1/18/original.jpg`](/_build/storyboards/psybok-vol1/18/original.jpg)
* [`/_build/storyboards/psybok-vol1/19/original.jpg`](/_build/storyboards/psybok-vol1/19/original.jpg)
* [`/_build/storyboards/psybok-vol1/2/original.jpg`](/_build/storyboards/psybok-vol1/2/original.jpg)
* [`/_build/storyboards/psybok-vol1/20/original.jpg`](/_build/storyboards/psybok-vol1/20/original.jpg)
* [`/_build/storyboards/psybok-vol1/21/original.jpg`](/_build/storyboards/psybok-vol1/21/original.jpg)
* [`/_build/storyboards/psybok-vol1/22/original.jpg`](/_build/storyboards/psybok-vol1/22/original.jpg)
* [`/_build/storyboards/psybok-vol1/23/original.jpg`](/_build/storyboards/psybok-vol1/23/original.jpg)
* [`/_build/storyboards/psybok-vol1/24/original.jpg`](/_build/storyboards/psybok-vol1/24/original.jpg)
* [`/_build/storyboards/psybok-vol1/25/original.jpg`](/_build/storyboards/psybok-vol1/25/original.jpg)
* [`/_build/storyboards/psybok-vol1/26/original.jpg`](/_build/storyboards/psybok-vol1/26/original.jpg)
* [`/_build/storyboards/psybok-vol1/27/original.jpg`](/_build/storyboards/psybok-vol1/27/original.jpg)
* [`/_build/storyboards/psybok-vol1/28/original.jpg`](/_build/storyboards/psybok-vol1/28/original.jpg)
* [`/_build/storyboards/psybok-vol1/29/original.jpg`](/_build/storyboards/psybok-vol1/29/original.jpg)
* [`/_build/storyboards/psybok-vol1/3/original.jpg`](/_build/storyboards/psybok-vol1/3/original.jpg)
* [`/_build/storyboards/psybok-vol1/30/original.jpg`](/_build/storyboards/psybok-vol1/30/original.jpg)
* [`/_build/storyboards/psybok-vol1/31/original.jpg`](/_build/storyboards/psybok-vol1/31/original.jpg)
* [`/_build/storyboards/psybok-vol1/32/original.jpg`](/_build/storyboards/psybok-vol1/32/original.jpg)
* [`/_build/storyboards/psybok-vol1/33/original.jpg`](/_build/storyboards/psybok-vol1/33/original.jpg)
* [`/_build/storyboards/psybok-vol1/34/original.jpg`](/_build/storyboards/psybok-vol1/34/original.jpg)
* [`/_build/storyboards/psybok-vol1/35/original.jpg`](/_build/storyboards/psybok-vol1/35/original.jpg)
* [`/_build/storyboards/psybok-vol1/36/original.jpg`](/_build/storyboards/psybok-vol1/36/original.jpg)
* [`/_build/storyboards/psybok-vol1/37/original.jpg`](/_build/storyboards/psybok-vol1/37/original.jpg)
* [`/_build/storyboards/psybok-vol1/38/original.jpg`](/_build/storyboards/psybok-vol1/38/original.jpg)
* [`/_build/storyboards/psybok-vol1/39/original.jpg`](/_build/storyboards/psybok-vol1/39/original.jpg)
* [`/_build/storyboards/psybok-vol1/4/original.jpg`](/_build/storyboards/psybok-vol1/4/original.jpg)
* [`/_build/storyboards/psybok-vol1/40/original.jpg`](/_build/storyboards/psybok-vol1/40/original.jpg)
* [`/_build/storyboards/psybok-vol1/41/original.jpg`](/_build/storyboards/psybok-vol1/41/original.jpg)
* [`/_build/storyboards/psybok-vol1/42/original.jpg`](/_build/storyboards/psybok-vol1/42/original.jpg)
* [`/_build/storyboards/psybok-vol1/43/original.jpg`](/_build/storyboards/psybok-vol1/43/original.jpg)
* [`/_build/storyboards/psybok-vol1/44/original.jpg`](/_build/storyboards/psybok-vol1/44/original.jpg)
* [`/_build/storyboards/psybok-vol1/45/original.jpg`](/_build/storyboards/psybok-vol1/45/original.jpg)
* [`/_build/storyboards/psybok-vol1/46/original.jpg`](/_build/storyboards/psybok-vol1/46/original.jpg)
* [`/_build/storyboards/psybok-vol1/47/original.jpg`](/_build/storyboards/psybok-vol1/47/original.jpg)
* [`/_build/storyboards/psybok-vol1/48/original.jpg`](/_build/storyboards/psybok-vol1/48/original.jpg)
* [`/_build/storyboards/psybok-vol1/49/original.jpg`](/_build/storyboards/psybok-vol1/49/original.jpg)
* [`/_build/storyboards/psybok-vol1/5/original.jpg`](/_build/storyboards/psybok-vol1/5/original.jpg)
* [`/_build/storyboards/psybok-vol1/50/original.jpg`](/_build/storyboards/psybok-vol1/50/original.jpg)
* [`/_build/storyboards/psybok-vol1/51/original.jpg`](/_build/storyboards/psybok-vol1/51/original.jpg)
* [`/_build/storyboards/psybok-vol1/52/original.jpg`](/_build/storyboards/psybok-vol1/52/original.jpg)
* [`/_build/storyboards/psybok-vol1/53/original.jpg`](/_build/storyboards/psybok-vol1/53/original.jpg)
* [`/_build/storyboards/psybok-vol1/54/original.jpg`](/_build/storyboards/psybok-vol1/54/original.jpg)
* [`/_build/storyboards/psybok-vol1/55/original.jpg`](/_build/storyboards/psybok-vol1/55/original.jpg)
* [`/_build/storyboards/psybok-vol1/56/original.jpg`](/_build/storyboards/psybok-vol1/56/original.jpg)
* [`/_build/storyboards/psybok-vol1/57/original.jpg`](/_build/storyboards/psybok-vol1/57/original.jpg)
* [`/_build/storyboards/psybok-vol1/58/original.jpg`](/_build/storyboards/psybok-vol1/58/original.jpg)
* [`/_build/storyboards/psybok-vol1/59/original.jpg`](/_build/storyboards/psybok-vol1/59/original.jpg)
* [`/_build/storyboards/psybok-vol1/6/original.jpg`](/_build/storyboards/psybok-vol1/6/original.jpg)
* [`/_build/storyboards/psybok-vol1/60/original.jpg`](/_build/storyboards/psybok-vol1/60/original.jpg)
* [`/_build/storyboards/psybok-vol1/61/original.jpg`](/_build/storyboards/psybok-vol1/61/original.jpg)
* [`/_build/storyboards/psybok-vol1/62/original.jpg`](/_build/storyboards/psybok-vol1/62/original.jpg)
* [`/_build/storyboards/psybok-vol1/63/original.jpg`](/_build/storyboards/psybok-vol1/63/original.jpg)
* [`/_build/storyboards/psybok-vol1/64/original.jpg`](/_build/storyboards/psybok-vol1/64/original.jpg)
* [`/_build/storyboards/psybok-vol1/65/original.jpg`](/_build/storyboards/psybok-vol1/65/original.jpg)
* [`/_build/storyboards/psybok-vol1/66/original.jpg`](/_build/storyboards/psybok-vol1/66/original.jpg)
* [`/_build/storyboards/psybok-vol1/67/original.jpg`](/_build/storyboards/psybok-vol1/67/original.jpg)
* [`/_build/storyboards/psybok-vol1/68/original.jpg`](/_build/storyboards/psybok-vol1/68/original.jpg)
* [`/_build/storyboards/psybok-vol1/69/original.jpg`](/_build/storyboards/psybok-vol1/69/original.jpg)
* [`/_build/storyboards/psybok-vol1/7/original.jpg`](/_build/storyboards/psybok-vol1/7/original.jpg)
* [`/_build/storyboards/psybok-vol1/70/original.jpg`](/_build/storyboards/psybok-vol1/70/original.jpg)
* [`/_build/storyboards/psybok-vol1/71/original.jpg`](/_build/storyboards/psybok-vol1/71/original.jpg)
* [`/_build/storyboards/psybok-vol1/72/original.jpg`](/_build/storyboards/psybok-vol1/72/original.jpg)
* [`/_build/storyboards/psybok-vol1/73/original.jpg`](/_build/storyboards/psybok-vol1/73/original.jpg)
* [`/_build/storyboards/psybok-vol1/74/original.jpg`](/_build/storyboards/psybok-vol1/74/original.jpg)
* [`/_build/storyboards/psybok-vol1/75/original.jpg`](/_build/storyboards/psybok-vol1/75/original.jpg)
* [`/_build/storyboards/psybok-vol1/76/original.jpg`](/_build/storyboards/psybok-vol1/76/original.jpg)
* [`/_build/storyboards/psybok-vol1/77/original.jpg`](/_build/storyboards/psybok-vol1/77/original.jpg)
* [`/_build/storyboards/psybok-vol1/78/original.jpg`](/_build/storyboards/psybok-vol1/78/original.jpg)
* [`/_build/storyboards/psybok-vol1/79/original.jpg`](/_build/storyboards/psybok-vol1/79/original.jpg)
* [`/_build/storyboards/psybok-vol1/8/original.jpg`](/_build/storyboards/psybok-vol1/8/original.jpg)
* [`/_build/storyboards/psybok-vol1/80/original.jpg`](/_build/storyboards/psybok-vol1/80/original.jpg)
* [`/_build/storyboards/psybok-vol1/81/original.jpg`](/_build/storyboards/psybok-vol1/81/original.jpg)
* [`/_build/storyboards/psybok-vol1/82/original.jpg`](/_build/storyboards/psybok-vol1/82/original.jpg)
* [`/_build/storyboards/psybok-vol1/83/original.jpg`](/_build/storyboards/psybok-vol1/83/original.jpg)
* [`/_build/storyboards/psybok-vol1/84/original.jpg`](/_build/storyboards/psybok-vol1/84/original.jpg)
* [`/_build/storyboards/psybok-vol1/85/original.jpg`](/_build/storyboards/psybok-vol1/85/original.jpg)
* [`/_build/storyboards/psybok-vol1/9/original.jpg`](/_build/storyboards/psybok-vol1/9/original.jpg)
* [`/_data/notebooks/pensees-1/_extracts/1/original.png`](/_data/notebooks/pensees-1/_extracts/1/original.png)
* [`/_data/notebooks/pensees-1/_extracts/2/original.png`](/_data/notebooks/pensees-1/_extracts/2/original.png)
* [`/_data/notebooks/pensees-12/_extracts/1/original.png`](/_data/notebooks/pensees-12/_extracts/1/original.png)
* [`/_data/notebooks/pensees-12/_extracts/2/original.png`](/_data/notebooks/pensees-12/_extracts/2/original.png)
* [`/_data/notebooks/pensees-2/_extracts/1/original.png`](/_data/notebooks/pensees-2/_extracts/1/original.png)
* [`/_data/notebooks/pensees-2/_extracts/2/original.png`](/_data/notebooks/pensees-2/_extracts/2/original.png)
* [`/_data/notebooks/pensees-7/_extracts/1/original.png`](/_data/notebooks/pensees-7/_extracts/1/original.png)
* [`/_data/notebooks/pensees-7/_extracts/2/original.png`](/_data/notebooks/pensees-7/_extracts/2/original.png)
* [`/_data/notebooks/pensees-9/_extracts/1/original.png`](/_data/notebooks/pensees-9/_extracts/1/original.png)
* [`/_data/storyboards/absutrats-6-18/_pages/1/original.jpg`](/_data/storyboards/absutrats-6-18/_pages/1/original.jpg)
* [`/_data/storyboards/absutrats-6-18/_pages/10/original.jpg`](/_data/storyboards/absutrats-6-18/_pages/10/original.jpg)
* [`/_data/storyboards/absutrats-6-18/_pages/11/original.jpg`](/_data/storyboards/absutrats-6-18/_pages/11/original.jpg)
* [`/_data/storyboards/absutrats-6-18/_pages/12/original.jpg`](/_data/storyboards/absutrats-6-18/_pages/12/original.jpg)
* [`/_data/storyboards/absutrats-6-18/_pages/13/original.jpg`](/_data/storyboards/absutrats-6-18/_pages/13/original.jpg)
* [`/_data/storyboards/absutrats-6-18/_pages/14/original.jpg`](/_data/storyboards/absutrats-6-18/_pages/14/original.jpg)
* [`/_data/storyboards/absutrats-6-18/_pages/15/original.jpg`](/_data/storyboards/absutrats-6-18/_pages/15/original.jpg)
* [`/_data/storyboards/absutrats-6-18/_pages/2/original.jpg`](/_data/storyboards/absutrats-6-18/_pages/2/original.jpg)
* [`/_data/storyboards/absutrats-6-18/_pages/3/original.jpg`](/_data/storyboards/absutrats-6-18/_pages/3/original.jpg)
* [`/_data/storyboards/absutrats-6-18/_pages/4/original.jpg`](/_data/storyboards/absutrats-6-18/_pages/4/original.jpg)
* [`/_data/storyboards/absutrats-6-18/_pages/5/original.jpg`](/_data/storyboards/absutrats-6-18/_pages/5/original.jpg)
* [`/_data/storyboards/absutrats-6-18/_pages/6/original.jpg`](/_data/storyboards/absutrats-6-18/_pages/6/original.jpg)
* [`/_data/storyboards/absutrats-6-18/_pages/7/original.jpg`](/_data/storyboards/absutrats-6-18/_pages/7/original.jpg)
* [`/_data/storyboards/absutrats-6-18/_pages/8/original.jpg`](/_data/storyboards/absutrats-6-18/_pages/8/original.jpg)
* [`/_data/storyboards/absutrats-6-18/_pages/9/original.jpg`](/_data/storyboards/absutrats-6-18/_pages/9/original.jpg)
* [`/_data/storyboards/absutrats-jeu/_pages/1/original.jpg`](/_data/storyboards/absutrats-jeu/_pages/1/original.jpg)
* [`/_data/storyboards/absutrats-jeu/_pages/10/original.jpg`](/_data/storyboards/absutrats-jeu/_pages/10/original.jpg)
* [`/_data/storyboards/absutrats-jeu/_pages/11/original.jpg`](/_data/storyboards/absutrats-jeu/_pages/11/original.jpg)
* [`/_data/storyboards/absutrats-jeu/_pages/12/original.jpg`](/_data/storyboards/absutrats-jeu/_pages/12/original.jpg)
* [`/_data/storyboards/absutrats-jeu/_pages/2/original.jpg`](/_data/storyboards/absutrats-jeu/_pages/2/original.jpg)
* [`/_data/storyboards/absutrats-jeu/_pages/3/original.jpg`](/_data/storyboards/absutrats-jeu/_pages/3/original.jpg)
* [`/_data/storyboards/absutrats-jeu/_pages/4/original.jpg`](/_data/storyboards/absutrats-jeu/_pages/4/original.jpg)
* [`/_data/storyboards/absutrats-jeu/_pages/5/original.jpg`](/_data/storyboards/absutrats-jeu/_pages/5/original.jpg)
* [`/_data/storyboards/absutrats-jeu/_pages/6/original.jpg`](/_data/storyboards/absutrats-jeu/_pages/6/original.jpg)
* [`/_data/storyboards/absutrats-jeu/_pages/7/original.jpg`](/_data/storyboards/absutrats-jeu/_pages/7/original.jpg)
* [`/_data/storyboards/absutrats-jeu/_pages/8/original.jpg`](/_data/storyboards/absutrats-jeu/_pages/8/original.jpg)
* [`/_data/storyboards/absutrats-jeu/_pages/9/original.jpg`](/_data/storyboards/absutrats-jeu/_pages/9/original.jpg)
* [`/_data/storyboards/absutrats-vol1-v2/_pages/1/original.jpg`](/_data/storyboards/absutrats-vol1-v2/_pages/1/original.jpg)
* [`/_data/storyboards/absutrats-vol1-v2/_pages/10/original.jpg`](/_data/storyboards/absutrats-vol1-v2/_pages/10/original.jpg)
* [`/_data/storyboards/absutrats-vol1-v2/_pages/11/original.jpg`](/_data/storyboards/absutrats-vol1-v2/_pages/11/original.jpg)
* [`/_data/storyboards/absutrats-vol1-v2/_pages/12/original.jpg`](/_data/storyboards/absutrats-vol1-v2/_pages/12/original.jpg)
* [`/_data/storyboards/absutrats-vol1-v2/_pages/13/original.jpg`](/_data/storyboards/absutrats-vol1-v2/_pages/13/original.jpg)
* [`/_data/storyboards/absutrats-vol1-v2/_pages/2/original.jpg`](/_data/storyboards/absutrats-vol1-v2/_pages/2/original.jpg)
* [`/_data/storyboards/absutrats-vol1-v2/_pages/3/original.jpg`](/_data/storyboards/absutrats-vol1-v2/_pages/3/original.jpg)
* [`/_data/storyboards/absutrats-vol1-v2/_pages/4/original.jpg`](/_data/storyboards/absutrats-vol1-v2/_pages/4/original.jpg)
* [`/_data/storyboards/absutrats-vol1-v2/_pages/5/original.jpg`](/_data/storyboards/absutrats-vol1-v2/_pages/5/original.jpg)
* [`/_data/storyboards/absutrats-vol1-v2/_pages/6/original.jpg`](/_data/storyboards/absutrats-vol1-v2/_pages/6/original.jpg)
* [`/_data/storyboards/absutrats-vol1-v2/_pages/7/original.jpg`](/_data/storyboards/absutrats-vol1-v2/_pages/7/original.jpg)
* [`/_data/storyboards/absutrats-vol1-v2/_pages/8/original.jpg`](/_data/storyboards/absutrats-vol1-v2/_pages/8/original.jpg)
* [`/_data/storyboards/absutrats-vol1-v2/_pages/9/original.jpg`](/_data/storyboards/absutrats-vol1-v2/_pages/9/original.jpg)
* [`/_data/storyboards/highbs-bok/_pages/1/original.jpg`](/_data/storyboards/highbs-bok/_pages/1/original.jpg)
* [`/_data/storyboards/highbs-bok/_pages/10/original.jpg`](/_data/storyboards/highbs-bok/_pages/10/original.jpg)
* [`/_data/storyboards/highbs-bok/_pages/11/original.jpg`](/_data/storyboards/highbs-bok/_pages/11/original.jpg)
* [`/_data/storyboards/highbs-bok/_pages/12/original.jpg`](/_data/storyboards/highbs-bok/_pages/12/original.jpg)
* [`/_data/storyboards/highbs-bok/_pages/13/original.jpg`](/_data/storyboards/highbs-bok/_pages/13/original.jpg)
* [`/_data/storyboards/highbs-bok/_pages/14/original.jpg`](/_data/storyboards/highbs-bok/_pages/14/original.jpg)
* [`/_data/storyboards/highbs-bok/_pages/15/original.jpg`](/_data/storyboards/highbs-bok/_pages/15/original.jpg)
* [`/_data/storyboards/highbs-bok/_pages/16/original.jpg`](/_data/storyboards/highbs-bok/_pages/16/original.jpg)
* [`/_data/storyboards/highbs-bok/_pages/17/original.jpg`](/_data/storyboards/highbs-bok/_pages/17/original.jpg)
* [`/_data/storyboards/highbs-bok/_pages/18/original.jpg`](/_data/storyboards/highbs-bok/_pages/18/original.jpg)
* [`/_data/storyboards/highbs-bok/_pages/19/original.jpg`](/_data/storyboards/highbs-bok/_pages/19/original.jpg)
* [`/_data/storyboards/highbs-bok/_pages/2/original.jpg`](/_data/storyboards/highbs-bok/_pages/2/original.jpg)
* [`/_data/storyboards/highbs-bok/_pages/20/original.jpg`](/_data/storyboards/highbs-bok/_pages/20/original.jpg)
* [`/_data/storyboards/highbs-bok/_pages/21/original.jpg`](/_data/storyboards/highbs-bok/_pages/21/original.jpg)
* [`/_data/storyboards/highbs-bok/_pages/22/original.jpg`](/_data/storyboards/highbs-bok/_pages/22/original.jpg)
* [`/_data/storyboards/highbs-bok/_pages/23/original.jpg`](/_data/storyboards/highbs-bok/_pages/23/original.jpg)
* [`/_data/storyboards/highbs-bok/_pages/24/original.jpg`](/_data/storyboards/highbs-bok/_pages/24/original.jpg)
* [`/_data/storyboards/highbs-bok/_pages/25/original.jpg`](/_data/storyboards/highbs-bok/_pages/25/original.jpg)
* [`/_data/storyboards/highbs-bok/_pages/26/original.jpg`](/_data/storyboards/highbs-bok/_pages/26/original.jpg)
* [`/_data/storyboards/highbs-bok/_pages/27/original.jpg`](/_data/storyboards/highbs-bok/_pages/27/original.jpg)
* [`/_data/storyboards/highbs-bok/_pages/28/original.jpg`](/_data/storyboards/highbs-bok/_pages/28/original.jpg)
* [`/_data/storyboards/highbs-bok/_pages/29/original.jpg`](/_data/storyboards/highbs-bok/_pages/29/original.jpg)
* [`/_data/storyboards/highbs-bok/_pages/3/original.jpg`](/_data/storyboards/highbs-bok/_pages/3/original.jpg)
* [`/_data/storyboards/highbs-bok/_pages/30/original.jpg`](/_data/storyboards/highbs-bok/_pages/30/original.jpg)
* [`/_data/storyboards/highbs-bok/_pages/31/original.jpg`](/_data/storyboards/highbs-bok/_pages/31/original.jpg)
* [`/_data/storyboards/highbs-bok/_pages/32/original.jpg`](/_data/storyboards/highbs-bok/_pages/32/original.jpg)
* [`/_data/storyboards/highbs-bok/_pages/33/original.jpg`](/_data/storyboards/highbs-bok/_pages/33/original.jpg)
* [`/_data/storyboards/highbs-bok/_pages/34/original.jpg`](/_data/storyboards/highbs-bok/_pages/34/original.jpg)
* [`/_data/storyboards/highbs-bok/_pages/35/original.jpg`](/_data/storyboards/highbs-bok/_pages/35/original.jpg)
* [`/_data/storyboards/highbs-bok/_pages/36/original.jpg`](/_data/storyboards/highbs-bok/_pages/36/original.jpg)
* [`/_data/storyboards/highbs-bok/_pages/37/original.jpg`](/_data/storyboards/highbs-bok/_pages/37/original.jpg)
* [`/_data/storyboards/highbs-bok/_pages/38/original.jpg`](/_data/storyboards/highbs-bok/_pages/38/original.jpg)
* [`/_data/storyboards/highbs-bok/_pages/39/original.jpg`](/_data/storyboards/highbs-bok/_pages/39/original.jpg)
* [`/_data/storyboards/highbs-bok/_pages/4/original.jpg`](/_data/storyboards/highbs-bok/_pages/4/original.jpg)
* [`/_data/storyboards/highbs-bok/_pages/40/original.jpg`](/_data/storyboards/highbs-bok/_pages/40/original.jpg)
* [`/_data/storyboards/highbs-bok/_pages/41/original.jpg`](/_data/storyboards/highbs-bok/_pages/41/original.jpg)
* [`/_data/storyboards/highbs-bok/_pages/42/original.jpg`](/_data/storyboards/highbs-bok/_pages/42/original.jpg)
* [`/_data/storyboards/highbs-bok/_pages/5/original.jpg`](/_data/storyboards/highbs-bok/_pages/5/original.jpg)
* [`/_data/storyboards/highbs-bok/_pages/6/original.jpg`](/_data/storyboards/highbs-bok/_pages/6/original.jpg)
* [`/_data/storyboards/highbs-bok/_pages/7/original.jpg`](/_data/storyboards/highbs-bok/_pages/7/original.jpg)
* [`/_data/storyboards/highbs-bok/_pages/8/original.jpg`](/_data/storyboards/highbs-bok/_pages/8/original.jpg)
* [`/_data/storyboards/highbs-bok/_pages/9/original.jpg`](/_data/storyboards/highbs-bok/_pages/9/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/1/original.jpg`](/_data/storyboards/psybok-vol0/_pages/1/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/10/original.jpg`](/_data/storyboards/psybok-vol0/_pages/10/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/11/original.jpg`](/_data/storyboards/psybok-vol0/_pages/11/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/12/original.jpg`](/_data/storyboards/psybok-vol0/_pages/12/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/13/original.jpg`](/_data/storyboards/psybok-vol0/_pages/13/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/14/original.jpg`](/_data/storyboards/psybok-vol0/_pages/14/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/15/original.jpg`](/_data/storyboards/psybok-vol0/_pages/15/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/16/original.jpg`](/_data/storyboards/psybok-vol0/_pages/16/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/17/original.jpg`](/_data/storyboards/psybok-vol0/_pages/17/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/18/original.jpg`](/_data/storyboards/psybok-vol0/_pages/18/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/19/original.jpg`](/_data/storyboards/psybok-vol0/_pages/19/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/2/original.jpg`](/_data/storyboards/psybok-vol0/_pages/2/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/20/original.jpg`](/_data/storyboards/psybok-vol0/_pages/20/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/21/original.jpg`](/_data/storyboards/psybok-vol0/_pages/21/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/22/original.jpg`](/_data/storyboards/psybok-vol0/_pages/22/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/23/original.jpg`](/_data/storyboards/psybok-vol0/_pages/23/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/24/original.jpg`](/_data/storyboards/psybok-vol0/_pages/24/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/25/original.jpg`](/_data/storyboards/psybok-vol0/_pages/25/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/26/original.jpg`](/_data/storyboards/psybok-vol0/_pages/26/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/27/original.jpg`](/_data/storyboards/psybok-vol0/_pages/27/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/28/original.jpg`](/_data/storyboards/psybok-vol0/_pages/28/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/29/original.jpg`](/_data/storyboards/psybok-vol0/_pages/29/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/3/original.jpg`](/_data/storyboards/psybok-vol0/_pages/3/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/30/original.jpg`](/_data/storyboards/psybok-vol0/_pages/30/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/31/original.jpg`](/_data/storyboards/psybok-vol0/_pages/31/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/32/original.jpg`](/_data/storyboards/psybok-vol0/_pages/32/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/33/original.jpg`](/_data/storyboards/psybok-vol0/_pages/33/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/34/original.jpg`](/_data/storyboards/psybok-vol0/_pages/34/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/35/original.jpg`](/_data/storyboards/psybok-vol0/_pages/35/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/36/original.jpg`](/_data/storyboards/psybok-vol0/_pages/36/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/37/original.jpg`](/_data/storyboards/psybok-vol0/_pages/37/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/38/original.jpg`](/_data/storyboards/psybok-vol0/_pages/38/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/39/original.jpg`](/_data/storyboards/psybok-vol0/_pages/39/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/4/original.jpg`](/_data/storyboards/psybok-vol0/_pages/4/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/40/original.jpg`](/_data/storyboards/psybok-vol0/_pages/40/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/41/original.jpg`](/_data/storyboards/psybok-vol0/_pages/41/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/42/original.jpg`](/_data/storyboards/psybok-vol0/_pages/42/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/43/original.jpg`](/_data/storyboards/psybok-vol0/_pages/43/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/44/original.jpg`](/_data/storyboards/psybok-vol0/_pages/44/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/45/original.jpg`](/_data/storyboards/psybok-vol0/_pages/45/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/46/original.jpg`](/_data/storyboards/psybok-vol0/_pages/46/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/47/original.jpg`](/_data/storyboards/psybok-vol0/_pages/47/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/48/original.jpg`](/_data/storyboards/psybok-vol0/_pages/48/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/49/original.jpg`](/_data/storyboards/psybok-vol0/_pages/49/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/5/original.jpg`](/_data/storyboards/psybok-vol0/_pages/5/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/50/original.jpg`](/_data/storyboards/psybok-vol0/_pages/50/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/51/original.jpg`](/_data/storyboards/psybok-vol0/_pages/51/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/52/original.jpg`](/_data/storyboards/psybok-vol0/_pages/52/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/53/original.jpg`](/_data/storyboards/psybok-vol0/_pages/53/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/54/original.jpg`](/_data/storyboards/psybok-vol0/_pages/54/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/55/original.jpg`](/_data/storyboards/psybok-vol0/_pages/55/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/56/original.jpg`](/_data/storyboards/psybok-vol0/_pages/56/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/57/original.jpg`](/_data/storyboards/psybok-vol0/_pages/57/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/58/original.jpg`](/_data/storyboards/psybok-vol0/_pages/58/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/6/original.jpg`](/_data/storyboards/psybok-vol0/_pages/6/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/7/original.jpg`](/_data/storyboards/psybok-vol0/_pages/7/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/8/original.jpg`](/_data/storyboards/psybok-vol0/_pages/8/original.jpg)
* [`/_data/storyboards/psybok-vol0/_pages/9/original.jpg`](/_data/storyboards/psybok-vol0/_pages/9/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/1/original.jpg`](/_data/storyboards/psybok-vol1/_pages/1/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/10/original.jpg`](/_data/storyboards/psybok-vol1/_pages/10/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/11/original.jpg`](/_data/storyboards/psybok-vol1/_pages/11/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/12/original.jpg`](/_data/storyboards/psybok-vol1/_pages/12/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/13/original.jpg`](/_data/storyboards/psybok-vol1/_pages/13/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/14/original.jpg`](/_data/storyboards/psybok-vol1/_pages/14/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/15/original.jpg`](/_data/storyboards/psybok-vol1/_pages/15/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/16/original.jpg`](/_data/storyboards/psybok-vol1/_pages/16/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/17/original.jpg`](/_data/storyboards/psybok-vol1/_pages/17/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/18/original.jpg`](/_data/storyboards/psybok-vol1/_pages/18/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/19/original.jpg`](/_data/storyboards/psybok-vol1/_pages/19/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/2/original.jpg`](/_data/storyboards/psybok-vol1/_pages/2/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/20/original.jpg`](/_data/storyboards/psybok-vol1/_pages/20/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/21/original.jpg`](/_data/storyboards/psybok-vol1/_pages/21/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/22/original.jpg`](/_data/storyboards/psybok-vol1/_pages/22/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/23/original.jpg`](/_data/storyboards/psybok-vol1/_pages/23/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/24/original.jpg`](/_data/storyboards/psybok-vol1/_pages/24/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/25/original.jpg`](/_data/storyboards/psybok-vol1/_pages/25/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/26/original.jpg`](/_data/storyboards/psybok-vol1/_pages/26/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/27/original.jpg`](/_data/storyboards/psybok-vol1/_pages/27/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/28/original.jpg`](/_data/storyboards/psybok-vol1/_pages/28/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/29/original.jpg`](/_data/storyboards/psybok-vol1/_pages/29/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/3/original.jpg`](/_data/storyboards/psybok-vol1/_pages/3/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/30/original.jpg`](/_data/storyboards/psybok-vol1/_pages/30/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/31/original.jpg`](/_data/storyboards/psybok-vol1/_pages/31/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/32/original.jpg`](/_data/storyboards/psybok-vol1/_pages/32/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/33/original.jpg`](/_data/storyboards/psybok-vol1/_pages/33/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/34/original.jpg`](/_data/storyboards/psybok-vol1/_pages/34/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/35/original.jpg`](/_data/storyboards/psybok-vol1/_pages/35/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/36/original.jpg`](/_data/storyboards/psybok-vol1/_pages/36/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/37/original.jpg`](/_data/storyboards/psybok-vol1/_pages/37/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/38/original.jpg`](/_data/storyboards/psybok-vol1/_pages/38/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/39/original.jpg`](/_data/storyboards/psybok-vol1/_pages/39/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/4/original.jpg`](/_data/storyboards/psybok-vol1/_pages/4/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/40/original.jpg`](/_data/storyboards/psybok-vol1/_pages/40/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/41/original.jpg`](/_data/storyboards/psybok-vol1/_pages/41/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/42/original.jpg`](/_data/storyboards/psybok-vol1/_pages/42/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/43/original.jpg`](/_data/storyboards/psybok-vol1/_pages/43/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/44/original.jpg`](/_data/storyboards/psybok-vol1/_pages/44/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/45/original.jpg`](/_data/storyboards/psybok-vol1/_pages/45/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/46/original.jpg`](/_data/storyboards/psybok-vol1/_pages/46/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/47/original.jpg`](/_data/storyboards/psybok-vol1/_pages/47/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/48/original.jpg`](/_data/storyboards/psybok-vol1/_pages/48/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/49/original.jpg`](/_data/storyboards/psybok-vol1/_pages/49/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/5/original.jpg`](/_data/storyboards/psybok-vol1/_pages/5/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/50/original.jpg`](/_data/storyboards/psybok-vol1/_pages/50/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/51/original.jpg`](/_data/storyboards/psybok-vol1/_pages/51/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/52/original.jpg`](/_data/storyboards/psybok-vol1/_pages/52/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/53/original.jpg`](/_data/storyboards/psybok-vol1/_pages/53/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/54/original.jpg`](/_data/storyboards/psybok-vol1/_pages/54/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/55/original.jpg`](/_data/storyboards/psybok-vol1/_pages/55/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/56/original.jpg`](/_data/storyboards/psybok-vol1/_pages/56/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/57/original.jpg`](/_data/storyboards/psybok-vol1/_pages/57/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/58/original.jpg`](/_data/storyboards/psybok-vol1/_pages/58/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/59/original.jpg`](/_data/storyboards/psybok-vol1/_pages/59/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/6/original.jpg`](/_data/storyboards/psybok-vol1/_pages/6/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/60/original.jpg`](/_data/storyboards/psybok-vol1/_pages/60/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/61/original.jpg`](/_data/storyboards/psybok-vol1/_pages/61/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/62/original.jpg`](/_data/storyboards/psybok-vol1/_pages/62/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/63/original.jpg`](/_data/storyboards/psybok-vol1/_pages/63/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/64/original.jpg`](/_data/storyboards/psybok-vol1/_pages/64/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/65/original.jpg`](/_data/storyboards/psybok-vol1/_pages/65/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/66/original.jpg`](/_data/storyboards/psybok-vol1/_pages/66/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/67/original.jpg`](/_data/storyboards/psybok-vol1/_pages/67/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/68/original.jpg`](/_data/storyboards/psybok-vol1/_pages/68/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/69/original.jpg`](/_data/storyboards/psybok-vol1/_pages/69/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/7/original.jpg`](/_data/storyboards/psybok-vol1/_pages/7/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/70/original.jpg`](/_data/storyboards/psybok-vol1/_pages/70/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/71/original.jpg`](/_data/storyboards/psybok-vol1/_pages/71/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/72/original.jpg`](/_data/storyboards/psybok-vol1/_pages/72/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/73/original.jpg`](/_data/storyboards/psybok-vol1/_pages/73/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/74/original.jpg`](/_data/storyboards/psybok-vol1/_pages/74/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/75/original.jpg`](/_data/storyboards/psybok-vol1/_pages/75/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/76/original.jpg`](/_data/storyboards/psybok-vol1/_pages/76/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/77/original.jpg`](/_data/storyboards/psybok-vol1/_pages/77/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/78/original.jpg`](/_data/storyboards/psybok-vol1/_pages/78/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/79/original.jpg`](/_data/storyboards/psybok-vol1/_pages/79/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/8/original.jpg`](/_data/storyboards/psybok-vol1/_pages/8/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/80/original.jpg`](/_data/storyboards/psybok-vol1/_pages/80/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/81/original.jpg`](/_data/storyboards/psybok-vol1/_pages/81/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/82/original.jpg`](/_data/storyboards/psybok-vol1/_pages/82/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/83/original.jpg`](/_data/storyboards/psybok-vol1/_pages/83/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/84/original.jpg`](/_data/storyboards/psybok-vol1/_pages/84/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/85/original.jpg`](/_data/storyboards/psybok-vol1/_pages/85/original.jpg)
* [`/_data/storyboards/psybok-vol1/_pages/9/original.jpg`](/_data/storyboards/psybok-vol1/_pages/9/original.jpg)
* [`/_websites/default/_assets/star-logo.svg`](/_websites/default/_assets/star-logo.svg)


## `*-book-page`

**PANTHEON-BOOK-PAGE** is a PANTHEON KAMI.

It is known as :

* [en] Page,
* [fr] Page.

### Description

**PHYSICAL CONTENT FRAGMENT**

PAGE can hold [SECTIONS](#section)
and [EXTRACTS](#extracts).

## Occurences

Matching regular expression :

`/\/_pages\/(.*)\/(.*)\.page\.js/`.

* [`/_data/storyboards/absutrats-6-18/_pages/1/1.page.js`](/_data/storyboards/absutrats-6-18/_pages/1/1.page.js)
* [`/_data/storyboards/absutrats-6-18/_pages/10/10.page.js`](/_data/storyboards/absutrats-6-18/_pages/10/10.page.js)
* [`/_data/storyboards/absutrats-6-18/_pages/11/11.page.js`](/_data/storyboards/absutrats-6-18/_pages/11/11.page.js)
* [`/_data/storyboards/absutrats-6-18/_pages/12/12.page.js`](/_data/storyboards/absutrats-6-18/_pages/12/12.page.js)
* [`/_data/storyboards/absutrats-6-18/_pages/13/13.page.js`](/_data/storyboards/absutrats-6-18/_pages/13/13.page.js)
* [`/_data/storyboards/absutrats-6-18/_pages/14/14.page.js`](/_data/storyboards/absutrats-6-18/_pages/14/14.page.js)
* [`/_data/storyboards/absutrats-6-18/_pages/15/15.page.js`](/_data/storyboards/absutrats-6-18/_pages/15/15.page.js)
* [`/_data/storyboards/absutrats-6-18/_pages/2/2.page.js`](/_data/storyboards/absutrats-6-18/_pages/2/2.page.js)
* [`/_data/storyboards/absutrats-6-18/_pages/3/3.page.js`](/_data/storyboards/absutrats-6-18/_pages/3/3.page.js)
* [`/_data/storyboards/absutrats-6-18/_pages/4/4.page.js`](/_data/storyboards/absutrats-6-18/_pages/4/4.page.js)
* [`/_data/storyboards/absutrats-6-18/_pages/5/5.page.js`](/_data/storyboards/absutrats-6-18/_pages/5/5.page.js)
* [`/_data/storyboards/absutrats-6-18/_pages/6/6.page.js`](/_data/storyboards/absutrats-6-18/_pages/6/6.page.js)
* [`/_data/storyboards/absutrats-6-18/_pages/7/7.page.js`](/_data/storyboards/absutrats-6-18/_pages/7/7.page.js)
* [`/_data/storyboards/absutrats-6-18/_pages/8/8.page.js`](/_data/storyboards/absutrats-6-18/_pages/8/8.page.js)
* [`/_data/storyboards/absutrats-6-18/_pages/9/9.page.js`](/_data/storyboards/absutrats-6-18/_pages/9/9.page.js)
* [`/_data/storyboards/absutrats-jeu/_pages/1/1.page.js`](/_data/storyboards/absutrats-jeu/_pages/1/1.page.js)
* [`/_data/storyboards/absutrats-jeu/_pages/10/10.page.js`](/_data/storyboards/absutrats-jeu/_pages/10/10.page.js)
* [`/_data/storyboards/absutrats-jeu/_pages/11/11.page.js`](/_data/storyboards/absutrats-jeu/_pages/11/11.page.js)
* [`/_data/storyboards/absutrats-jeu/_pages/12/12.page.js`](/_data/storyboards/absutrats-jeu/_pages/12/12.page.js)
* [`/_data/storyboards/absutrats-jeu/_pages/2/2.page.js`](/_data/storyboards/absutrats-jeu/_pages/2/2.page.js)
* [`/_data/storyboards/absutrats-jeu/_pages/3/3.page.js`](/_data/storyboards/absutrats-jeu/_pages/3/3.page.js)
* [`/_data/storyboards/absutrats-jeu/_pages/4/4.page.js`](/_data/storyboards/absutrats-jeu/_pages/4/4.page.js)
* [`/_data/storyboards/absutrats-jeu/_pages/5/5.page.js`](/_data/storyboards/absutrats-jeu/_pages/5/5.page.js)
* [`/_data/storyboards/absutrats-jeu/_pages/6/6.page.js`](/_data/storyboards/absutrats-jeu/_pages/6/6.page.js)
* [`/_data/storyboards/absutrats-jeu/_pages/7/7.page.js`](/_data/storyboards/absutrats-jeu/_pages/7/7.page.js)
* [`/_data/storyboards/absutrats-jeu/_pages/8/8.page.js`](/_data/storyboards/absutrats-jeu/_pages/8/8.page.js)
* [`/_data/storyboards/absutrats-jeu/_pages/9/9.page.js`](/_data/storyboards/absutrats-jeu/_pages/9/9.page.js)
* [`/_data/storyboards/absutrats-vol1-v2/_pages/1/1.page.js`](/_data/storyboards/absutrats-vol1-v2/_pages/1/1.page.js)
* [`/_data/storyboards/absutrats-vol1-v2/_pages/10/10.page.js`](/_data/storyboards/absutrats-vol1-v2/_pages/10/10.page.js)
* [`/_data/storyboards/absutrats-vol1-v2/_pages/11/11.page.js`](/_data/storyboards/absutrats-vol1-v2/_pages/11/11.page.js)
* [`/_data/storyboards/absutrats-vol1-v2/_pages/12/12.page.js`](/_data/storyboards/absutrats-vol1-v2/_pages/12/12.page.js)
* [`/_data/storyboards/absutrats-vol1-v2/_pages/13/13.page.js`](/_data/storyboards/absutrats-vol1-v2/_pages/13/13.page.js)
* [`/_data/storyboards/absutrats-vol1-v2/_pages/2/2.page.js`](/_data/storyboards/absutrats-vol1-v2/_pages/2/2.page.js)
* [`/_data/storyboards/absutrats-vol1-v2/_pages/3/3.page.js`](/_data/storyboards/absutrats-vol1-v2/_pages/3/3.page.js)
* [`/_data/storyboards/absutrats-vol1-v2/_pages/4/4.page.js`](/_data/storyboards/absutrats-vol1-v2/_pages/4/4.page.js)
* [`/_data/storyboards/absutrats-vol1-v2/_pages/5/5.page.js`](/_data/storyboards/absutrats-vol1-v2/_pages/5/5.page.js)
* [`/_data/storyboards/absutrats-vol1-v2/_pages/6/6.page.js`](/_data/storyboards/absutrats-vol1-v2/_pages/6/6.page.js)
* [`/_data/storyboards/absutrats-vol1-v2/_pages/7/7.page.js`](/_data/storyboards/absutrats-vol1-v2/_pages/7/7.page.js)
* [`/_data/storyboards/absutrats-vol1-v2/_pages/8/8.page.js`](/_data/storyboards/absutrats-vol1-v2/_pages/8/8.page.js)
* [`/_data/storyboards/absutrats-vol1-v2/_pages/9/9.page.js`](/_data/storyboards/absutrats-vol1-v2/_pages/9/9.page.js)
* [`/_data/storyboards/highbs-bok/_pages/1/1.page.js`](/_data/storyboards/highbs-bok/_pages/1/1.page.js)
* [`/_data/storyboards/highbs-bok/_pages/10/10.page.js`](/_data/storyboards/highbs-bok/_pages/10/10.page.js)
* [`/_data/storyboards/highbs-bok/_pages/11/11.page.js`](/_data/storyboards/highbs-bok/_pages/11/11.page.js)
* [`/_data/storyboards/highbs-bok/_pages/12/12.page.js`](/_data/storyboards/highbs-bok/_pages/12/12.page.js)
* [`/_data/storyboards/highbs-bok/_pages/13/13.page.js`](/_data/storyboards/highbs-bok/_pages/13/13.page.js)
* [`/_data/storyboards/highbs-bok/_pages/14/14.page.js`](/_data/storyboards/highbs-bok/_pages/14/14.page.js)
* [`/_data/storyboards/highbs-bok/_pages/15/15.page.js`](/_data/storyboards/highbs-bok/_pages/15/15.page.js)
* [`/_data/storyboards/highbs-bok/_pages/16/16.page.js`](/_data/storyboards/highbs-bok/_pages/16/16.page.js)
* [`/_data/storyboards/highbs-bok/_pages/17/17.page.js`](/_data/storyboards/highbs-bok/_pages/17/17.page.js)
* [`/_data/storyboards/highbs-bok/_pages/18/18.page.js`](/_data/storyboards/highbs-bok/_pages/18/18.page.js)
* [`/_data/storyboards/highbs-bok/_pages/19/19.page.js`](/_data/storyboards/highbs-bok/_pages/19/19.page.js)
* [`/_data/storyboards/highbs-bok/_pages/2/2.page.js`](/_data/storyboards/highbs-bok/_pages/2/2.page.js)
* [`/_data/storyboards/highbs-bok/_pages/20/20.page.js`](/_data/storyboards/highbs-bok/_pages/20/20.page.js)
* [`/_data/storyboards/highbs-bok/_pages/21/21.page.js`](/_data/storyboards/highbs-bok/_pages/21/21.page.js)
* [`/_data/storyboards/highbs-bok/_pages/22/22.page.js`](/_data/storyboards/highbs-bok/_pages/22/22.page.js)
* [`/_data/storyboards/highbs-bok/_pages/23/23.page.js`](/_data/storyboards/highbs-bok/_pages/23/23.page.js)
* [`/_data/storyboards/highbs-bok/_pages/24/24.page.js`](/_data/storyboards/highbs-bok/_pages/24/24.page.js)
* [`/_data/storyboards/highbs-bok/_pages/25/25.page.js`](/_data/storyboards/highbs-bok/_pages/25/25.page.js)
* [`/_data/storyboards/highbs-bok/_pages/26/26.page.js`](/_data/storyboards/highbs-bok/_pages/26/26.page.js)
* [`/_data/storyboards/highbs-bok/_pages/27/27.page.js`](/_data/storyboards/highbs-bok/_pages/27/27.page.js)
* [`/_data/storyboards/highbs-bok/_pages/28/28.page.js`](/_data/storyboards/highbs-bok/_pages/28/28.page.js)
* [`/_data/storyboards/highbs-bok/_pages/29/29.page.js`](/_data/storyboards/highbs-bok/_pages/29/29.page.js)
* [`/_data/storyboards/highbs-bok/_pages/3/3.page.js`](/_data/storyboards/highbs-bok/_pages/3/3.page.js)
* [`/_data/storyboards/highbs-bok/_pages/30/30.page.js`](/_data/storyboards/highbs-bok/_pages/30/30.page.js)
* [`/_data/storyboards/highbs-bok/_pages/31/31.page.js`](/_data/storyboards/highbs-bok/_pages/31/31.page.js)
* [`/_data/storyboards/highbs-bok/_pages/32/32.page.js`](/_data/storyboards/highbs-bok/_pages/32/32.page.js)
* [`/_data/storyboards/highbs-bok/_pages/33/33.page.js`](/_data/storyboards/highbs-bok/_pages/33/33.page.js)
* [`/_data/storyboards/highbs-bok/_pages/34/34.page.js`](/_data/storyboards/highbs-bok/_pages/34/34.page.js)
* [`/_data/storyboards/highbs-bok/_pages/35/35.page.js`](/_data/storyboards/highbs-bok/_pages/35/35.page.js)
* [`/_data/storyboards/highbs-bok/_pages/36/36.page.js`](/_data/storyboards/highbs-bok/_pages/36/36.page.js)
* [`/_data/storyboards/highbs-bok/_pages/37/37.page.js`](/_data/storyboards/highbs-bok/_pages/37/37.page.js)
* [`/_data/storyboards/highbs-bok/_pages/38/38.page.js`](/_data/storyboards/highbs-bok/_pages/38/38.page.js)
* [`/_data/storyboards/highbs-bok/_pages/39/39.page.js`](/_data/storyboards/highbs-bok/_pages/39/39.page.js)
* [`/_data/storyboards/highbs-bok/_pages/4/4.page.js`](/_data/storyboards/highbs-bok/_pages/4/4.page.js)
* [`/_data/storyboards/highbs-bok/_pages/40/40.page.js`](/_data/storyboards/highbs-bok/_pages/40/40.page.js)
* [`/_data/storyboards/highbs-bok/_pages/41/41.page.js`](/_data/storyboards/highbs-bok/_pages/41/41.page.js)
* [`/_data/storyboards/highbs-bok/_pages/42/42.page.js`](/_data/storyboards/highbs-bok/_pages/42/42.page.js)
* [`/_data/storyboards/highbs-bok/_pages/5/5.page.js`](/_data/storyboards/highbs-bok/_pages/5/5.page.js)
* [`/_data/storyboards/highbs-bok/_pages/6/6.page.js`](/_data/storyboards/highbs-bok/_pages/6/6.page.js)
* [`/_data/storyboards/highbs-bok/_pages/7/7.page.js`](/_data/storyboards/highbs-bok/_pages/7/7.page.js)
* [`/_data/storyboards/highbs-bok/_pages/8/8.page.js`](/_data/storyboards/highbs-bok/_pages/8/8.page.js)
* [`/_data/storyboards/highbs-bok/_pages/9/9.page.js`](/_data/storyboards/highbs-bok/_pages/9/9.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/1/1.page.js`](/_data/storyboards/psybok-vol0/_pages/1/1.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/10/10.page.js`](/_data/storyboards/psybok-vol0/_pages/10/10.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/11/11.page.js`](/_data/storyboards/psybok-vol0/_pages/11/11.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/12/12.page.js`](/_data/storyboards/psybok-vol0/_pages/12/12.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/13/13.page.js`](/_data/storyboards/psybok-vol0/_pages/13/13.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/14/14.page.js`](/_data/storyboards/psybok-vol0/_pages/14/14.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/15/15.page.js`](/_data/storyboards/psybok-vol0/_pages/15/15.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/16/16.page.js`](/_data/storyboards/psybok-vol0/_pages/16/16.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/17/17.page.js`](/_data/storyboards/psybok-vol0/_pages/17/17.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/18/18.page.js`](/_data/storyboards/psybok-vol0/_pages/18/18.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/19/19.page.js`](/_data/storyboards/psybok-vol0/_pages/19/19.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/2/2.page.js`](/_data/storyboards/psybok-vol0/_pages/2/2.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/20/20.page.js`](/_data/storyboards/psybok-vol0/_pages/20/20.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/21/21.page.js`](/_data/storyboards/psybok-vol0/_pages/21/21.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/22/22.page.js`](/_data/storyboards/psybok-vol0/_pages/22/22.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/23/23.page.js`](/_data/storyboards/psybok-vol0/_pages/23/23.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/24/24.page.js`](/_data/storyboards/psybok-vol0/_pages/24/24.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/25/25.page.js`](/_data/storyboards/psybok-vol0/_pages/25/25.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/26/26.page.js`](/_data/storyboards/psybok-vol0/_pages/26/26.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/27/27.page.js`](/_data/storyboards/psybok-vol0/_pages/27/27.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/28/28.page.js`](/_data/storyboards/psybok-vol0/_pages/28/28.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/29/29.page.js`](/_data/storyboards/psybok-vol0/_pages/29/29.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/3/3.page.js`](/_data/storyboards/psybok-vol0/_pages/3/3.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/30/30.page.js`](/_data/storyboards/psybok-vol0/_pages/30/30.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/31/31.page.js`](/_data/storyboards/psybok-vol0/_pages/31/31.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/32/32.page.js`](/_data/storyboards/psybok-vol0/_pages/32/32.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/33/33.page.js`](/_data/storyboards/psybok-vol0/_pages/33/33.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/34/34.page.js`](/_data/storyboards/psybok-vol0/_pages/34/34.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/35/35.page.js`](/_data/storyboards/psybok-vol0/_pages/35/35.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/36/36.page.js`](/_data/storyboards/psybok-vol0/_pages/36/36.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/37/37.page.js`](/_data/storyboards/psybok-vol0/_pages/37/37.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/38/38.page.js`](/_data/storyboards/psybok-vol0/_pages/38/38.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/39/39.page.js`](/_data/storyboards/psybok-vol0/_pages/39/39.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/4/4.page.js`](/_data/storyboards/psybok-vol0/_pages/4/4.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/40/40.page.js`](/_data/storyboards/psybok-vol0/_pages/40/40.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/41/41.page.js`](/_data/storyboards/psybok-vol0/_pages/41/41.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/42/42.page.js`](/_data/storyboards/psybok-vol0/_pages/42/42.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/43/43.page.js`](/_data/storyboards/psybok-vol0/_pages/43/43.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/44/44.page.js`](/_data/storyboards/psybok-vol0/_pages/44/44.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/45/45.page.js`](/_data/storyboards/psybok-vol0/_pages/45/45.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/46/46.page.js`](/_data/storyboards/psybok-vol0/_pages/46/46.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/47/47.page.js`](/_data/storyboards/psybok-vol0/_pages/47/47.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/48/48.page.js`](/_data/storyboards/psybok-vol0/_pages/48/48.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/49/49.page.js`](/_data/storyboards/psybok-vol0/_pages/49/49.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/5/5.page.js`](/_data/storyboards/psybok-vol0/_pages/5/5.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/50/50.page.js`](/_data/storyboards/psybok-vol0/_pages/50/50.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/51/51.page.js`](/_data/storyboards/psybok-vol0/_pages/51/51.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/52/52.page.js`](/_data/storyboards/psybok-vol0/_pages/52/52.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/53/53.page.js`](/_data/storyboards/psybok-vol0/_pages/53/53.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/54/54.page.js`](/_data/storyboards/psybok-vol0/_pages/54/54.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/55/55.page.js`](/_data/storyboards/psybok-vol0/_pages/55/55.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/56/56.page.js`](/_data/storyboards/psybok-vol0/_pages/56/56.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/57/57.page.js`](/_data/storyboards/psybok-vol0/_pages/57/57.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/58/58.page.js`](/_data/storyboards/psybok-vol0/_pages/58/58.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/6/6.page.js`](/_data/storyboards/psybok-vol0/_pages/6/6.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/7/7.page.js`](/_data/storyboards/psybok-vol0/_pages/7/7.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/8/8.page.js`](/_data/storyboards/psybok-vol0/_pages/8/8.page.js)
* [`/_data/storyboards/psybok-vol0/_pages/9/9.page.js`](/_data/storyboards/psybok-vol0/_pages/9/9.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/1/1.page.js`](/_data/storyboards/psybok-vol1/_pages/1/1.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/10/10.page.js`](/_data/storyboards/psybok-vol1/_pages/10/10.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/11/11.page.js`](/_data/storyboards/psybok-vol1/_pages/11/11.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/12/12.page.js`](/_data/storyboards/psybok-vol1/_pages/12/12.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/13/13.page.js`](/_data/storyboards/psybok-vol1/_pages/13/13.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/14/14.page.js`](/_data/storyboards/psybok-vol1/_pages/14/14.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/15/15.page.js`](/_data/storyboards/psybok-vol1/_pages/15/15.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/16/16.page.js`](/_data/storyboards/psybok-vol1/_pages/16/16.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/17/17.page.js`](/_data/storyboards/psybok-vol1/_pages/17/17.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/18/18.page.js`](/_data/storyboards/psybok-vol1/_pages/18/18.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/19/19.page.js`](/_data/storyboards/psybok-vol1/_pages/19/19.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/2/2.page.js`](/_data/storyboards/psybok-vol1/_pages/2/2.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/20/20.page.js`](/_data/storyboards/psybok-vol1/_pages/20/20.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/21/21.page.js`](/_data/storyboards/psybok-vol1/_pages/21/21.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/22/22.page.js`](/_data/storyboards/psybok-vol1/_pages/22/22.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/23/23.page.js`](/_data/storyboards/psybok-vol1/_pages/23/23.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/24/24.page.js`](/_data/storyboards/psybok-vol1/_pages/24/24.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/25/25.page.js`](/_data/storyboards/psybok-vol1/_pages/25/25.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/26/26.page.js`](/_data/storyboards/psybok-vol1/_pages/26/26.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/27/27.page.js`](/_data/storyboards/psybok-vol1/_pages/27/27.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/28/28.page.js`](/_data/storyboards/psybok-vol1/_pages/28/28.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/29/29.page.js`](/_data/storyboards/psybok-vol1/_pages/29/29.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/3/3.page.js`](/_data/storyboards/psybok-vol1/_pages/3/3.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/30/30.page.js`](/_data/storyboards/psybok-vol1/_pages/30/30.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/31/31.page.js`](/_data/storyboards/psybok-vol1/_pages/31/31.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/32/32.page.js`](/_data/storyboards/psybok-vol1/_pages/32/32.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/33/33.page.js`](/_data/storyboards/psybok-vol1/_pages/33/33.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/34/34.page.js`](/_data/storyboards/psybok-vol1/_pages/34/34.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/35/35.page.js`](/_data/storyboards/psybok-vol1/_pages/35/35.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/36/36.page.js`](/_data/storyboards/psybok-vol1/_pages/36/36.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/37/37.page.js`](/_data/storyboards/psybok-vol1/_pages/37/37.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/38/38.page.js`](/_data/storyboards/psybok-vol1/_pages/38/38.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/39/39.page.js`](/_data/storyboards/psybok-vol1/_pages/39/39.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/4/4.page.js`](/_data/storyboards/psybok-vol1/_pages/4/4.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/40/40.page.js`](/_data/storyboards/psybok-vol1/_pages/40/40.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/41/41.page.js`](/_data/storyboards/psybok-vol1/_pages/41/41.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/42/42.page.js`](/_data/storyboards/psybok-vol1/_pages/42/42.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/43/43.page.js`](/_data/storyboards/psybok-vol1/_pages/43/43.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/44/44.page.js`](/_data/storyboards/psybok-vol1/_pages/44/44.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/45/45.page.js`](/_data/storyboards/psybok-vol1/_pages/45/45.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/46/46.page.js`](/_data/storyboards/psybok-vol1/_pages/46/46.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/47/47.page.js`](/_data/storyboards/psybok-vol1/_pages/47/47.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/48/48.page.js`](/_data/storyboards/psybok-vol1/_pages/48/48.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/49/49.page.js`](/_data/storyboards/psybok-vol1/_pages/49/49.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/5/5.page.js`](/_data/storyboards/psybok-vol1/_pages/5/5.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/50/50.page.js`](/_data/storyboards/psybok-vol1/_pages/50/50.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/51/51.page.js`](/_data/storyboards/psybok-vol1/_pages/51/51.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/52/52.page.js`](/_data/storyboards/psybok-vol1/_pages/52/52.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/53/53.page.js`](/_data/storyboards/psybok-vol1/_pages/53/53.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/54/54.page.js`](/_data/storyboards/psybok-vol1/_pages/54/54.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/55/55.page.js`](/_data/storyboards/psybok-vol1/_pages/55/55.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/56/56.page.js`](/_data/storyboards/psybok-vol1/_pages/56/56.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/57/57.page.js`](/_data/storyboards/psybok-vol1/_pages/57/57.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/58/58.page.js`](/_data/storyboards/psybok-vol1/_pages/58/58.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/59/59.page.js`](/_data/storyboards/psybok-vol1/_pages/59/59.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/6/6.page.js`](/_data/storyboards/psybok-vol1/_pages/6/6.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/60/60.page.js`](/_data/storyboards/psybok-vol1/_pages/60/60.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/61/61.page.js`](/_data/storyboards/psybok-vol1/_pages/61/61.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/62/62.page.js`](/_data/storyboards/psybok-vol1/_pages/62/62.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/63/63.page.js`](/_data/storyboards/psybok-vol1/_pages/63/63.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/64/64.page.js`](/_data/storyboards/psybok-vol1/_pages/64/64.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/65/65.page.js`](/_data/storyboards/psybok-vol1/_pages/65/65.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/66/66.page.js`](/_data/storyboards/psybok-vol1/_pages/66/66.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/67/67.page.js`](/_data/storyboards/psybok-vol1/_pages/67/67.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/68/68.page.js`](/_data/storyboards/psybok-vol1/_pages/68/68.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/69/69.page.js`](/_data/storyboards/psybok-vol1/_pages/69/69.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/7/7.page.js`](/_data/storyboards/psybok-vol1/_pages/7/7.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/70/70.page.js`](/_data/storyboards/psybok-vol1/_pages/70/70.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/71/71.page.js`](/_data/storyboards/psybok-vol1/_pages/71/71.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/72/72.page.js`](/_data/storyboards/psybok-vol1/_pages/72/72.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/73/73.page.js`](/_data/storyboards/psybok-vol1/_pages/73/73.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/74/74.page.js`](/_data/storyboards/psybok-vol1/_pages/74/74.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/75/75.page.js`](/_data/storyboards/psybok-vol1/_pages/75/75.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/76/76.page.js`](/_data/storyboards/psybok-vol1/_pages/76/76.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/77/77.page.js`](/_data/storyboards/psybok-vol1/_pages/77/77.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/78/78.page.js`](/_data/storyboards/psybok-vol1/_pages/78/78.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/79/79.page.js`](/_data/storyboards/psybok-vol1/_pages/79/79.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/8/8.page.js`](/_data/storyboards/psybok-vol1/_pages/8/8.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/80/80.page.js`](/_data/storyboards/psybok-vol1/_pages/80/80.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/81/81.page.js`](/_data/storyboards/psybok-vol1/_pages/81/81.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/82/82.page.js`](/_data/storyboards/psybok-vol1/_pages/82/82.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/83/83.page.js`](/_data/storyboards/psybok-vol1/_pages/83/83.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/84/84.page.js`](/_data/storyboards/psybok-vol1/_pages/84/84.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/85/85.page.js`](/_data/storyboards/psybok-vol1/_pages/85/85.page.js)
* [`/_data/storyboards/psybok-vol1/_pages/9/9.page.js`](/_data/storyboards/psybok-vol1/_pages/9/9.page.js)


## `*-book-section`

**PANTHEON-BOOK-SECTION** is a PANTHEON KAMI.

It is known as :

* [en] Section, Chapter, Part,
* [fr] Section, Chapitre, Partie.

### Description

**BOOK SUB-DIVISION**

## Occurences

Matching regular expression :

`/^\/_data\/(.*)\/_sections\/(.*)\/(.*)\.section\.js/`.




## `*-command`

**PANTHEON-COMMAND** is a PANTHEON KAMI.

It is known as :

* [en] Command,
* [fr] Commande.

### Description

**KAMI WAYS CLI INTERFACE**

Basically, a command bind a [`way`](#way) method
to match [`KAMI`](#kami) CLI entrypoint syntax.

## Occurences

Matching regular expression :

`/(.*)\/_shrine\/(.*)\/_props\/_commands\/(.*)\/(.*).command.js/`.

* [`/kami.js/_shrine/kami/_props/_commands/create/create.command.js`](/kami.js/_shrine/kami/_props/_commands/create/create.command.js)
* [`/kami.js/_shrine/kami/_props/_commands/test/test.command.js`](/kami.js/_shrine/kami/_props/_commands/test/test.command.js)
* [`/kami.js/_shrine/readme/_props/_commands/build/build.command.js`](/kami.js/_shrine/readme/_props/_commands/build/build.command.js)
* [`/kami.js/_shrine/website/_props/_commands/build/build.command.js`](/kami.js/_shrine/website/_props/_commands/build/build.command.js)


## `*-doc`

**PANTHEON-DOC** is a PANTHEON KAMI.

It is known as :

* [en] Documentation,
* [fr] Documentation.

### Description

**TOP-LEVEL DOCUMENTATION KAMI**

DOC is composed of few sub-KAMIS :
* [README](#readme),
* [WIKI](#wiki),
* [WEBSITE](#website).


## `*-file`

**PANTHEON-FILE** is a PANTHEON KAMI.

It is known as :

* [en] File,
* [fr] Fichier.

### Description

**File meta-data**

*Pattern should later be extended depending on
the file extension.*


## `*-folder`

**PANTHEON-FOLDER** is a PANTHEON KAMI.

It is known as :

* [en] Folder,
* [fr] Dossier.

### Description

**Folder meta-data**

Folder is represented by :
* Its `scope`, the path between project root
  and desired folder location,
* Its `name`, an unique identifier in its scope,
* Its `tree`, an object representing folders and
  files hierarchy inside top-level folder
  (a complex concept to define).



## `*-get`

**PANTHEON-GET** is a PANTHEON KAMI.

It is known as :

* [en] Accesser, Obtain, Hydrater,
* [fr] Accesseur, Obtenir, Hydrateur.

### Description

**INSTANCE ACCESSERS**

GET is currently an abstract pattern
which may be implemented on sufficent
occurence rate and generic logics.

GET can declined on KAMI's occurences purposes :
* Access and update folders and files content,
* Import ESM modules,
* Access and update data from databases.

In any case, an object instance is created to
represent the actual occurence.

In the case of folders and files,
a regular expression is used for matching.


## Occurences

Matching regular expression :

`/(.*)\/_shrine\/(.*)\/_ways\/get\/get.way.js/`.

* [`/kami.js/_shrine/book/_ways/get/get.way.js`](/kami.js/_shrine/book/_ways/get/get.way.js)
* [`/kami.js/_shrine/file/_ways/get/get.way.js`](/kami.js/_shrine/file/_ways/get/get.way.js)
* [`/kami.js/_shrine/instance/_ways/get/get.way.js`](/kami.js/_shrine/instance/_ways/get/get.way.js)
* [`/kami.js/_shrine/kami/_ways/get/get.way.js`](/kami.js/_shrine/kami/_ways/get/get.way.js)
* [`/kami.js/_shrine/readme/_ways/get/get.way.js`](/kami.js/_shrine/readme/_ways/get/get.way.js)
* [`/_shrine/article/_ways/get/get.way.js`](/_shrine/article/_ways/get/get.way.js)
* [`/_shrine/notebook/_ways/get/get.way.js`](/_shrine/notebook/_ways/get/get.way.js)
* [`/_shrine/storyboard/_ways/get/get.way.js`](/_shrine/storyboard/_ways/get/get.way.js)


## `*-instance`

**PANTHEON-INSTANCE** is a PANTHEON KAMI.

It is known as :

* [en] Instance,
* [fr] Instance.

### Description

**INDIVIDUAL OF ONE OR MULTIPLE KAMIS**

Instances are occurence of a [KAMI](#kami) (pattern).

They usually :
* Can be retrieved through [`<kami>.get`] way,
* Can be created through [`<kami>.create`] way,
* Can be tested through [`<kami>.test`] way,
* *(Not implemented) Can get updated and deleted*.

[KAMIS](#kami) (`<...>.kami.js`) are instances of KAMI-KAMI.

**KAMI-KAMI is an instance of itself !**


## `*-kami`

**PANTHEON-KAMI** is a PANTHEON KAMI.

It is known as :

* [en] Concept, Idea, Word, Pattern, Spirit, God,
* [fr] Concept, Idée, Mot, Motif, Esprit, Dieu.

### Description

**The KAMI of KAMIS.**

Kami are "enlived" patterns, making them
not only **generative** but also **evolutive**
in a similar way classes and objects are.

## Occurences

Matching regular expression :

`/(.*)\/_shrine\/(.*)\/(.*).kami.js/`.

* [`/kami.js/_shrine/book/book.kami.js`](/kami.js/_shrine/book/book.kami.js)
* [`/kami.js/_shrine/book/_shrine/extract/extract.kami.js`](/kami.js/_shrine/book/_shrine/extract/extract.kami.js)
* [`/kami.js/_shrine/book/_shrine/image/image.kami.js`](/kami.js/_shrine/book/_shrine/image/image.kami.js)
* [`/kami.js/_shrine/book/_shrine/page/page.kami.js`](/kami.js/_shrine/book/_shrine/page/page.kami.js)
* [`/kami.js/_shrine/book/_shrine/section/section.kami.js`](/kami.js/_shrine/book/_shrine/section/section.kami.js)
* [`/kami.js/_shrine/command/command.kami.js`](/kami.js/_shrine/command/command.kami.js)
* [`/kami.js/_shrine/doc/doc.kami.js`](/kami.js/_shrine/doc/doc.kami.js)
* [`/kami.js/_shrine/file/file.kami.js`](/kami.js/_shrine/file/file.kami.js)
* [`/kami.js/_shrine/folder/folder.kami.js`](/kami.js/_shrine/folder/folder.kami.js)
* [`/kami.js/_shrine/get/get.kami.js`](/kami.js/_shrine/get/get.kami.js)
* [`/kami.js/_shrine/instance/instance.kami.js`](/kami.js/_shrine/instance/instance.kami.js)
* [`/kami.js/_shrine/kami/kami.kami.js`](/kami.js/_shrine/kami/kami.kami.js)
* [`/kami.js/_shrine/lang/lang.kami.js`](/kami.js/_shrine/lang/lang.kami.js)
* [`/kami.js/_shrine/pantheon/pantheon.kami.js`](/kami.js/_shrine/pantheon/pantheon.kami.js)
* [`/kami.js/_shrine/prop/prop.kami.js`](/kami.js/_shrine/prop/prop.kami.js)
* [`/kami.js/_shrine/readme/readme.kami.js`](/kami.js/_shrine/readme/readme.kami.js)
* [`/kami.js/_shrine/readme/_shrine/section/section.kami.js`](/kami.js/_shrine/readme/_shrine/section/section.kami.js)
* [`/kami.js/_shrine/shrine/shrine.kami.js`](/kami.js/_shrine/shrine/shrine.kami.js)
* [`/kami.js/_shrine/spec/spec.kami.js`](/kami.js/_shrine/spec/spec.kami.js)
* [`/kami.js/_shrine/util/util.kami.js`](/kami.js/_shrine/util/util.kami.js)
* [`/kami.js/_shrine/way/way.kami.js`](/kami.js/_shrine/way/way.kami.js)
* [`/kami.js/_shrine/website/website.kami.js`](/kami.js/_shrine/website/website.kami.js)
* [`/kami.js/_shrine/website/_shrine/page/page.kami.js`](/kami.js/_shrine/website/_shrine/page/page.kami.js)
* [`/kami.js/_shrine/wiki/wiki.kami.js`](/kami.js/_shrine/wiki/wiki.kami.js)
* [`/_shrine/article/article.kami.js`](/_shrine/article/article.kami.js)
* [`/_shrine/notebook/notebook.kami.js`](/_shrine/notebook/notebook.kami.js)
* [`/_shrine/storyboard/storyboard.kami.js`](/_shrine/storyboard/storyboard.kami.js)

### Flavour

At the very beginning,
KAMI-KAMI **said itself**, to be
brought to existence.

Soon after, it started to speak out other KAMIS,
which were instantly brought to existence too, following
a pure nodal self-organization.

For the generation to proceed, KAMI-KAMI first had to
split itself in two : the KAMI concept and the
KAMI individual. The class and the instance.

It was also about genericity and specificity.
And, at the end, dualism.

KAMI-KAMI had to become a KAMI like the others KAMIS.
It needed to be processed the same way to ensure
genericity.

But its specifity, the secrets of its generative powers, remained
absent of other KAMIS. This was the key of peace.

By doing so, KAMI-KAMI shared the same common nature,
**the pattern**, to all of its creations [the kamis],
letting them freely **extend and implement** its
highly abstract powers.


## `*-lang`

**PANTHEON-LANG** is a PANTHEON KAMI.

It is known as :

* [en] Language,
* [fr] Langage.


## `notebook`

**NOTEBOOK** is a project specific KAMI.

It is known as :

* [en] Notebook,
* [fr] Carnet.

### Description

**A COLLECTION OF
THOUGHTS AND SKETCHES**

It is usually driven by [BOOK-EXTRACTS](#book-extract),
eventually [BOOK-SECTIONS](#book-section),
instead of [BOOK-PAGES](#book-pages)
like [STORYBOARD](#storyboard).

## Occurences

Matching regular expression :

`/_data\/notebooks\/(.*)\/(.*).notebook.js/`.

* [`/_data/notebooks/pensees-1/pensees-1.notebook.js`](/_data/notebooks/pensees-1/pensees-1.notebook.js)
* [`/_data/notebooks/pensees-12/pensees-12.notebook.js`](/_data/notebooks/pensees-12/pensees-12.notebook.js)
* [`/_data/notebooks/pensees-2/pensees-2.notebook.js`](/_data/notebooks/pensees-2/pensees-2.notebook.js)
* [`/_data/notebooks/pensees-7/pensees-7.notebook.js`](/_data/notebooks/pensees-7/pensees-7.notebook.js)
* [`/_data/notebooks/pensees-9/pensees-9.notebook.js`](/_data/notebooks/pensees-9/pensees-9.notebook.js)


## `*-pantheon`

**PANTHEON-PANTHEON** is a PANTHEON KAMI.

It is known as :

* [en] Pantheon, Primordial shrine,
* [fr] Panthéon, Sanctuaire primordial.

### Description

**SHRINE OF PRIMORDIAL KAMIS**


## `*-prop`

**PANTHEON-PROP** is a PANTHEON KAMI.

It is known as :

* [en] Property, Characteristics, Attribute,
* [fr] Propriété, Caractéristque, Attribut.

### Description

`_props` folders contains
[kami](#kami)'s properties content.


## `*-readme`

**PANTHEON-README** is a PANTHEON KAMI.

It is known as :

* [en] README,
* [fr] README.

### Description

**KAMI.JS' GITHUB README**

README is a component of [DOC](#doc).


## `*-readme-section`

**PANTHEON-README-SECTION** is a PANTHEON KAMI.

It is known as :

* [en] Section,
* [fr] Section.

### Description

**README SECTION**

SECTIONS are made of :
* Text content,
* Imbricated SECTIONS.

In fact, README is the top-level SECTION.

## Occurences

Matching regular expression :

`/^\/_readme\/_sections\/(.*)\/(.*)\.section.js/,/\/_shrine\/readme\/_sections\/(.*)\/(.*)\.section.js/`.

* [`/kami.js/_shrine/readme/_sections/kami/kami.section.js`](/kami.js/_shrine/readme/_sections/kami/kami.section.js)
* [`/kami.js/_shrine/readme/_sections/kamis_glossary/kamis_glossary.section.js`](/kami.js/_shrine/readme/_sections/kamis_glossary/kamis_glossary.section.js)
* [`/_readme/_sections/1_intro/intro.section.js`](/_readme/_sections/1_intro/intro.section.js)


## `*-shrine`

**PANTHEON-ШRᛏGHN** is a PANTHEON KAMI.

It is known as :

* [en] Shrine,
* [fr] Sanctuaire.

## Occurences

Matching regular expression :

`/(.*)\/_shrine$/`.

* [`/kami.js/_shrine`](/kami.js/_shrine)
* [`/kami.js/_shrine/book/_shrine`](/kami.js/_shrine/book/_shrine)
* [`/kami.js/_shrine/readme/_shrine`](/kami.js/_shrine/readme/_shrine)
* [`/kami.js/_shrine/website/_shrine`](/kami.js/_shrine/website/_shrine)
* [`/_shrine`](/_shrine)


## `*-spec`

**PANTHEON-SPEC** is a PANTHEON KAMI.

It is known as :

* [en] Specification,
* [fr] Spécification.

### Description

**KAMIS' TEST MATERIAL**

In `kami.js` we currently distinguish two
categories of specifications :

* **Instances SPECS**, which target every
  instances of a KAMI (hold by the KAMI),
* **Specific SPECS**, which target a single
  instance of a KAMI (hold by the instance).

## Occurences

Matching regular expression :

`/(.*)\/(.*)\/_props\/(_specs|specs)\/(.*)\/(.*).spec.js/`.

* [`/kami.js/_shrine/kami/_props/specs/props/props.spec.js`](/kami.js/_shrine/kami/_props/specs/props/props.spec.js)
* [`/kami.js/_shrine/website/_props/_specs/regExp/regExp.spec.js`](/kami.js/_shrine/website/_props/_specs/regExp/regExp.spec.js)


## `storyboard`

**STORYBOARD** is a project specific KAMI.

It is known as :

* [en] Storyboard,
* [fr] Storyboard.

### Description

**A BOOK STORY DRAFT**

It's a kind of preparatory work
for book writing.

It features a story
or a composed set of poems,
so it naturally implements [BOOK](#book).

It is usually driven by [BOOK-SECTIONS](#book-section)
and [BOOK-PAGES](#book-page),
instead of directly [BOOK-EXTRACTS](#book-extract)
like [NOTEBOOK](#notebook).

## Occurences

Matching regular expression :

`/_data\/storyboards\/(.*)\/(.*).storyboard.js/`.

* [`/_data/storyboards/absutrats-6-18/absutrats-6-18.storyboard.js`](/_data/storyboards/absutrats-6-18/absutrats-6-18.storyboard.js)
* [`/_data/storyboards/absutrats-jeu/absutrats-jeu.storyboard.js`](/_data/storyboards/absutrats-jeu/absutrats-jeu.storyboard.js)
* [`/_data/storyboards/absutrats-vol1-v2/absutrats-vol1-v2.storyboard.js`](/_data/storyboards/absutrats-vol1-v2/absutrats-vol1-v2.storyboard.js)
* [`/_data/storyboards/highbs-bok/highbs-bok.storyboard.js`](/_data/storyboards/highbs-bok/highbs-bok.storyboard.js)
* [`/_data/storyboards/psybok-vol0/psybok-vol0.storyboard.js`](/_data/storyboards/psybok-vol0/psybok-vol0.storyboard.js)
* [`/_data/storyboards/psybok-vol1/psybok-vol1.storyboard.js`](/_data/storyboards/psybok-vol1/psybok-vol1.storyboard.js)


## `*-util`

**PANTHEON-UTIL** is a PANTHEON KAMI.

It is known as :

* [en] Utility,
* [fr] Utilitaire.

### Description

`_utils` folders are nothing more than
the place very specific snippets of code are put.

Utility are usually consumed by same scope-level modules.


## `*-way`

**PANTHEON-WAY** is a PANTHEON KAMI.

It is known as :

* [en] Method, Action, Operation, Function,
* [fr] Méthode, Action, Opération, Fonction.

### Description

**KAMI POWERS**

Ways are KAMI's methods
(... actions, functions, operations).

It differs with [prop](#prop) in its type,
which is necessarely `function`.


## `*-website`

**PANTHEON-WEBSITE** is a PANTHEON KAMI.

It is known as :

* [en] Website,
* [fr] Site internet.

### Description

**KAMI.JS DOCUMENTATION WEBSITE**

WEBSITE is a [DOC](#doc) component.

## Occurences

Matching regular expression :

`/^\/_websites\/(.*)\/(.*).website.js/`.

* [`/_websites/default/default.website.js`](/_websites/default/default.website.js)


## `*-website-page`

**PANTHEON-WEBSITE-PAGE** is a PANTHEON KAMI.

It is known as :

* [en] Page, Website page,
* [fr] Page, Page de site internet.

### Description

TEMPLATE x DATA x URL

A page binds the following three elements :
* A template which render conditionnaly
  on specific data,
* Data to be consumed by the template,
* An path to be render
  (which will in time be used as its url).



## `*-wiki`

**PANTHEON-WIKI** is a PANTHEON KAMI.

It is known as :

* [en] Wiki,
* [fr] Wiki.

### Description

**KAMI.JS' GITHUB WIKI**

WIKI is a component of [DOC](#doc).
