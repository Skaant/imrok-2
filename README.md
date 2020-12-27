*[38 KAMIS](#kamis-glossary)
on 12/26/2020, 10:39:42 AM*

# imrok-2

> My CREATIVE HUB's sources.

![HOL-project pictogram](/_websites/default/_assets/star-logo.svg)

### Table of content

* [MOTIFS glossary](#motifs-glossary)

## MOTIFS' glossary
    
* [`article`](#article) : Article
* = [`assertion`](#assertion) : Assertion
* ▥ [`book`](#book) : Book
* [`book-extract`](#book-extract) : Extract, Fragment, Atom
* [`book-image`](#book-image) : Image, Picture, Illustration, Scan
* [`book-page`](#book-page) : Page
* [`book-section`](#book-section) : Section, Chapter, Part
* ⌿ [`command`](#command) : Command
* ▼ [`description`](#description) : Description
* ⎊ [`doc`](#doc) : Documentation
* ▤ [`file`](#file) : File
* ◰ [`folder`](#folder) : Folder
* [`folder-scope`](#folder-scope) : Scope, Perimeter
* ⤶ [`get`](#get) : Accesser, Obtain, Hydrater
* ⯎ [`global`](#global) : Identifier, instance name
* ⚲ [`id`](#id) : Identifier, instance name
* ⧇ [`instance`](#instance) : Instance
* ἀ [`lang`](#lang) : Language
* ⚇ [`motif`](#motif) : Concept, Idea, Word, Pattern, Spirit, God, Angel, Deva
* [`notebook`](#notebook) : Notebook
* ʯ [`occurence`](#occurence) : Occurence
* [`pantheon`](#pantheon) : Pantheon, Primordial shrine, Valhalla, Mount Olympus, Acropolis, Heaven
* Ω [`project`](#project) : Project
* ⁖ [`prop`](#prop) : Property, Characteristics, Attribute
* ⬙ [`readme`](#readme) : README
* ⬥ [`readme-section`](#readme-section) : Section
* [`shrine`](#shrine) : Shrine
* Ѭ [`spec`](#spec) : Specification
* Ѫ [`spec-section`](#spec-section) : Specification section
* [`storyboard`](#storyboard) : Storyboard
* ⬫ [`util`](#util) : Utility
* [`way`](#way) : Method, Action, Operation, Function
* [`webapp`](#webapp) : Web application
* Ʋ [`website`](#website) : Website
* [`website-page`](#website-page) : Page, Website page
* [`wiki`](#wiki) : Wiki
* [`youtube-comment`](#youtube-comment) : YouTube comment
* [`youtube-video`](#youtube-video) : YouTube video

# `article`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**[id] article**, also known as :

* [en] Article,
* [fr] Article.

**WEBSITE ARTICLE**

An article is a titled and dated content,
with optional tags and meta-data.

## Properties

* `motif` : motif
* `path` : /_motifs/article/article.motif.js
* `id` : article
* `scope` : 
* `folder` : article
* `filePath` : /_motifs/article/article.motif.js
* `names`
* `occurences`
* `get`

## Instances

**Count : 15.**

### Matching mechanims

* `/_data\/articles\/(.*)\/(.*).article.js/`.

### Instances list

* [`_data/articles/1/1.article.js`](_data/articles/1/1.article.js)
* [`_data/articles/10/10.article.js`](_data/articles/10/10.article.js)
* [`_data/articles/11/11.article.js`](_data/articles/11/11.article.js)
* [`_data/articles/12/12.article.js`](_data/articles/12/12.article.js)
* [`_data/articles/13/13.article.js`](_data/articles/13/13.article.js)
* [`_data/articles/14/14.article.js`](_data/articles/14/14.article.js)
* [`_data/articles/15/15.article.js`](_data/articles/15/15.article.js)
* [`_data/articles/2/2.article.js`](_data/articles/2/2.article.js)
* [`_data/articles/3/3.article.js`](_data/articles/3/3.article.js)
* [`_data/articles/4/4.article.js`](_data/articles/4/4.article.js)
* [`_data/articles/5/5.article.js`](_data/articles/5/5.article.js)
* [`_data/articles/6/6.article.js`](_data/articles/6/6.article.js)
* [`_data/articles/7/7.article.js`](_data/articles/7/7.article.js)
* [`_data/articles/8/8.article.js`](_data/articles/8/8.article.js)
* [`_data/articles/9/9.article.js`](_data/articles/9/9.article.js)


# `assertion`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**= [id] assertion**, also known as :

* [en] Assertion,
* [fr] Assertion.

SPEC unit

```javascript
{
  label: 'string',
  test: 'Promise'
}
```

## Properties

* `motif` : motif
* `path` : /motifs-js/_motifs/assertion/assertion.motif.js
* `id` : assertion
* `scope` : /motifs-js
* `folder` : assertion
* `filePath` : /motifs-js/_motifs/assertion/assertion.motif.js
* `symbol` : =
* `names`


# `book`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**▥ [id] book**, also known as :

* [en] Book,
* [fr] Livre.

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

## Properties

* `motif` : motif
* `path` : /motifs-js/_motifs/book/book.motif.js
* `id` : book
* `scope` : /motifs-js
* `folder` : book
* `filePath` : /motifs-js/_motifs/book/book.motif.js
* `symbol` : ▥
* `names`
* `occurences`
* `get`
* `provision`

## Instances

**Count : 0.**

### Matching mechanims

* `/^\/_data(.*)\/([\w|\-]*)\/([\w|\-]*)\.book\.js/`.

### Instances list




# `book-extract`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**[id] book-extract**, also known as :

* [en] Extract, Fragment, Atom,
* [fr] Extrait, Fragment, Atome.

A small piece of BOOK

A FRAGMENT is the smallest unit of [BOOK](#book) content.

It can be included inside a [SECTION](#section),
a [PAGE](#page) or directly on the BOOK root.

## Properties

* `motif` : motif
* `path` : /motifs-js/_motifs/book-extract/book-extract.motif.js
* `id` : book-extract
* `scope` : /motifs-js
* `folder` : book-extract
* `filePath` : /motifs-js/_motifs/book-extract/book-extract.motif.js
* `names`
* `occurences`

## Instances

**Count : 9.**

### Matching mechanims

* `/(.*)\/_extracts\/([\w|\-]*)\/([\w|\-]*)\.extract\.js/`.

### Instances list

* [`/_data/notebooks/pensees-1/_extracts/1/1.extract.js`](/_data/notebooks/pensees-1/_extracts/1/1.extract.js)
* [`/_data/notebooks/pensees-1/_extracts/2/2.extract.js`](/_data/notebooks/pensees-1/_extracts/2/2.extract.js)
* [`/_data/notebooks/pensees-12/_extracts/1/1.extract.js`](/_data/notebooks/pensees-12/_extracts/1/1.extract.js)
* [`/_data/notebooks/pensees-12/_extracts/2/2.extract.js`](/_data/notebooks/pensees-12/_extracts/2/2.extract.js)
* [`/_data/notebooks/pensees-2/_extracts/1/1.extract.js`](/_data/notebooks/pensees-2/_extracts/1/1.extract.js)
* [`/_data/notebooks/pensees-2/_extracts/2/2.extract.js`](/_data/notebooks/pensees-2/_extracts/2/2.extract.js)
* [`/_data/notebooks/pensees-7/_extracts/1/1.extract.js`](/_data/notebooks/pensees-7/_extracts/1/1.extract.js)
* [`/_data/notebooks/pensees-7/_extracts/2/2.extract.js`](/_data/notebooks/pensees-7/_extracts/2/2.extract.js)
* [`/_data/notebooks/pensees-9/_extracts/1/1.extract.js`](/_data/notebooks/pensees-9/_extracts/1/1.extract.js)


# `book-image`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**[id] book-image**, also known as :

* [en] Image, Picture, Illustration, Scan,
* [fr] Image, Illustration, Numérisation.

**BOOK VISUAL CONTENT**

Usually bound to a [WEBSITE-PAGE](#website-page) page,
BOOK-IMAGES are given in a [BOOK-SECTION](#book-section),
a [BOOK-EXTRACT](#book-extract) or in a [BOOK-PAGE](#book-page).

When the BOOK-PAGE, BOOK-EXTRACT or BOOK-SECTION is retrieved,
scoped BOOK-IMAGES are copied to the destination WEBSITE-PAGE folder.

## Properties

* `motif` : motif
* `path` : /motifs-js/_motifs/book-image/book-image.motif.js
* `id` : book-image
* `scope` : /motifs-js
* `folder` : book-image
* `filePath` : /motifs-js/_motifs/book-image/book-image.motif.js
* `names`
* `occurences`
* `copy`

## Instances

**Count : 248.**

### Matching mechanims

* `/\/_data\/(.*)\/([\w|\-]*)\.(png|jpg|svg)$/`.

### Instances list

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
* [`/_data/storyboards/hol-adin-des-zums-2020/_images/cover.png`](/_data/storyboards/hol-adin-des-zums-2020/_images/cover.png)
* [`/_data/storyboards/hol-adin-des-zums-2020/_pages/1/original_recto.jpg`](/_data/storyboards/hol-adin-des-zums-2020/_pages/1/original_recto.jpg)
* [`/_data/storyboards/hol-adin-des-zums-2020/_pages/1/original_verso.jpg`](/_data/storyboards/hol-adin-des-zums-2020/_pages/1/original_verso.jpg)
* [`/_data/storyboards/hol-adin-des-zums-2020/_pages/2/original.jpg`](/_data/storyboards/hol-adin-des-zums-2020/_pages/2/original.jpg)
* [`/_data/storyboards/hol-adin-des-zums-2020/_pages/3/original_recto.jpg`](/_data/storyboards/hol-adin-des-zums-2020/_pages/3/original_recto.jpg)
* [`/_data/storyboards/hol-adin-des-zums-2020/_pages/3/original_verso.jpg`](/_data/storyboards/hol-adin-des-zums-2020/_pages/3/original_verso.jpg)
* [`/_data/storyboards/hol-adin-des-zums-2020/_pages/4/original_recto.jpg`](/_data/storyboards/hol-adin-des-zums-2020/_pages/4/original_recto.jpg)
* [`/_data/storyboards/hol-adin-des-zums-2020/_pages/4/original_verso.jpg`](/_data/storyboards/hol-adin-des-zums-2020/_pages/4/original_verso.jpg)
* [`/_data/storyboards/hol-adin-des-zums-2020/_pages/5/original_recto.jpg`](/_data/storyboards/hol-adin-des-zums-2020/_pages/5/original_recto.jpg)
* [`/_data/storyboards/hol-adin-des-zums-2020/_pages/5/original_verso.jpg`](/_data/storyboards/hol-adin-des-zums-2020/_pages/5/original_verso.jpg)
* [`/_data/storyboards/hol-adin-des-zums-2020/_pages/6/original_recto.jpg`](/_data/storyboards/hol-adin-des-zums-2020/_pages/6/original_recto.jpg)
* [`/_data/storyboards/hol-adin-des-zums-2020/_pages/6/original_verso.jpg`](/_data/storyboards/hol-adin-des-zums-2020/_pages/6/original_verso.jpg)
* [`/_data/storyboards/hol-adin-des-zums-2020/_pages/7/original_recto.jpg`](/_data/storyboards/hol-adin-des-zums-2020/_pages/7/original_recto.jpg)
* [`/_data/storyboards/hol-adin-des-zums-2020/_pages/7/original_verso.jpg`](/_data/storyboards/hol-adin-des-zums-2020/_pages/7/original_verso.jpg)
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


# `book-page`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**[id] book-page**, also known as :

* [en] Page,
* [fr] Page.

**PHYSICAL CONTENT FRAGMENT**

PAGE can hold [SECTIONS](#section)
and [EXTRACTS](#extracts).

## Properties

* `motif` : motif
* `path` : /motifs-js/_motifs/book-page/book-page.motif.js
* `id` : book-page
* `scope` : /motifs-js
* `folder` : book-page
* `filePath` : /motifs-js/_motifs/book-page/book-page.motif.js
* `names`
* `occurences`
* `get`
* `provision`

## Instances

**Count : 232.**

### Matching mechanims

* `/(.*)\/_pages\/([\w|\-]*)\/([\w|\-]*)\.page\.js/`.

### Instances list

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
* [`/_data/storyboards/hol-adin-des-zums-2020/_pages/1/1.page.js`](/_data/storyboards/hol-adin-des-zums-2020/_pages/1/1.page.js)
* [`/_data/storyboards/hol-adin-des-zums-2020/_pages/2/2.page.js`](/_data/storyboards/hol-adin-des-zums-2020/_pages/2/2.page.js)
* [`/_data/storyboards/hol-adin-des-zums-2020/_pages/3/3.page.js`](/_data/storyboards/hol-adin-des-zums-2020/_pages/3/3.page.js)
* [`/_data/storyboards/hol-adin-des-zums-2020/_pages/4/4.page.js`](/_data/storyboards/hol-adin-des-zums-2020/_pages/4/4.page.js)
* [`/_data/storyboards/hol-adin-des-zums-2020/_pages/5/5.page.js`](/_data/storyboards/hol-adin-des-zums-2020/_pages/5/5.page.js)
* [`/_data/storyboards/hol-adin-des-zums-2020/_pages/6/6.page.js`](/_data/storyboards/hol-adin-des-zums-2020/_pages/6/6.page.js)
* [`/_data/storyboards/hol-adin-des-zums-2020/_pages/7/7.page.js`](/_data/storyboards/hol-adin-des-zums-2020/_pages/7/7.page.js)
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


# `book-section`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**[id] book-section**, also known as :

* [en] Section, Chapter, Part,
* [fr] Section, Chapitre, Partie.

**BOOK SUB-DIVISION**

## Properties

* `motif` : motif
* `path` : /motifs-js/_motifs/book-section/book-section.motif.js
* `id` : book-section
* `scope` : /motifs-js
* `folder` : book-section
* `filePath` : /motifs-js/_motifs/book-section/book-section.motif.js
* `names`
* `occurences`
* `get`
* `provision`

## Instances

**Count : 0.**

### Matching mechanims

.

### Instances list




# `command`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**⌿ [id] command**, also known as :

* [en] Command,
* [fr] Commande.

MOTIF CLI interface action

Basically, a command **binds a method to match a MOTIF [entrypoint syntax](#entrypoint-syntax)**.

At the moment, CLI is only accessible as a single line command prompt;
but we'd like to present it as a interactive, staying alive, dialog.

### Entrypoint syntax

In the `./dev-start` file you can find the following call :

```javascript
KAMI.cli(
  process.argv.slice(3),
  {
    log: true
  })
```

**From the CLI side**, when you write a command, note that **the three first words are ignored**.
Use the following syntax to call a COMMAND.

```bash
node dev-start.js -- <args>
npm start -- <args>
```

**In the code side**, the signature for a COMMAND function is
quite similar to the top-level `KAMI.cli()` method :

```javascript
export default (args: [], options: {}) =>
```

## Properties

* `motif` : motif
* `path` : /motifs-js/_motifs/command/command.motif.js
* `id` : command
* `scope` : /motifs-js
* `folder` : command
* `filePath` : /motifs-js/_motifs/command/command.motif.js
* `symbol` : ⌿
* `names`
* `occurences`

## Instances

**Count : 0.**

### Matching mechanims

* `/(.*)\/_shrine\/(.*)\/_props\/_commands\/(.*)\/(.*).command.js/`.

### Instances list




# `description`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**▼ [id] description**, also known as :

* [en] Description,
* [fr] Description.

Textual data

Should treat LANG dimension.

Experimental :
```bash
<motifId>
+-- description
|   +-- en.description.js
|   +-- fr.description.js
+-- <motifId>.motif.js
```

## Properties

* `motif` : motif
* `path` : /motifs-js/_motifs/description/description.motif.js
* `id` : description
* `scope` : /motifs-js
* `folder` : description
* `filePath` : /motifs-js/_motifs/description/description.motif.js
* `symbol` : ▼
* `names`
* `occurences`

## Instances

**Count : 11.**

### Matching mechanims

* `/(.*)\/([\w|\-]*)\/description\/description\.md$/`.

### Instances list

* [`undefined`](undefined)
* [`undefined`](undefined)
* [`undefined`](undefined)
* [`undefined`](undefined)
* [`undefined`](undefined)
* [`undefined`](undefined)
* [`undefined`](undefined)
* [`undefined`](undefined)
* [`undefined`](undefined)
* [`undefined`](undefined)
* [`undefined`](undefined)


# `doc`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**⎊ [id] doc**, also known as :

* [en] Documentation,
* [fr] Documentation.

General documentation ressources

DOC is composed of few sub-[MOTIFS](#motif) :
* [README](#readme),
* [WIKI](#wiki),
* [WEBSITE](#website).

## Properties

* `motif` : motif
* `path` : /motifs-js/_motifs/doc/doc.motif.js
* `id` : doc
* `scope` : /motifs-js
* `folder` : doc
* `filePath` : /motifs-js/_motifs/doc/doc.motif.js
* `symbol` : ⎊
* `names`


# `file`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**▤ [id] file**, also known as :

* [en] File,
* [fr] Fichier.

File meta-data

*Pattern should later be extended depending on
the file extension.*

## Properties

* `motif` : motif
* `path` : /motifs-js/_motifs/file/file.motif.js
* `id` : file
* `scope` : /motifs-js
* `folder` : file
* `filePath` : /motifs-js/_motifs/file/file.motif.js
* `symbol` : ▤
* `names`
* `create`
* `get`
* `copy`


# `folder`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**◰ [id] folder**, also known as :

* [en] Folder,
* [fr] Dossier.

File explorer node

Folder is represented by :
* Its `scope`, the path between project root
  and desired folder location,
* Its `name`, an unique identifier in its scope,
* Its `tree`, an object representing folders and
  files hierarchy inside top-level folder
  (a complex concept to define).


## Properties

* `motif` : motif
* `path` : /motifs-js/_motifs/folder/folder.motif.js
* `id` : folder
* `scope` : /motifs-js
* `folder` : folder
* `filePath` : /motifs-js/_motifs/folder/folder.motif.js
* `symbol` : ◰
* `names`
* `create`
* `copy`
* `clear`
* `_specs`


# `folder-scope`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**[id] folder-scope**, also known as :

* [en] Scope, Perimeter,
* [fr] Portée, Périmètre.

SUB-FOLDER TREE

In a FS representation, the scope
is the root folder, or a sub-folder.

## Properties

* `motif` : motif
* `path` : /motifs-js/_motifs/folder-scope/folder-scope.motif.js
* `id` : folder-scope
* `scope` : /motifs-js
* `folder` : folder-scope
* `filePath` : /motifs-js/_motifs/folder-scope/folder-scope.motif.js
* `names`


# `get`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**⤶ [id] get**, also known as :

* [en] Accesser, Obtain, Hydrater,
* [fr] Accesseur, Obtenir, Hydrateur.

The MOTIF'S INSTANCES accessers

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

### GET ONE and GET ALL

get(:id) and get()
`

## Properties

* `motif` : motif
* `path` : /motifs-js/_motifs/get/get.motif.js
* `id` : get
* `scope` : /motifs-js
* `folder` : get
* `filePath` : /motifs-js/_motifs/get/get.motif.js
* `symbol` : ⤶
* `names`
* `regExp`


# `global`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**⯎ [id] global**, also known as :

* [en] Identifier, instance name,
* [fr] Identifieur, nom d'instance.

Global variables to be accessed application-wide

## Properties

* `motif` : motif
* `path` : /motifs-js/_motifs/global/global.motif.js
* `id` : global
* `scope` : /motifs-js
* `folder` : global
* `filePath` : /motifs-js/_motifs/global/global.motif.js
* `symbol` : ⯎
* `names`


# `id`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**⚲ [id] id**, also known as :

* [en] Identifier, instance name,
* [fr] Identifieur, nom d'instance.

INSTANCE NAME

For a given MOTIF and given SCOPE,
the ID is the unique name of an instance.

It is usually a PROP.

## Properties

* `motif` : motif
* `path` : /motifs-js/_motifs/id/id.motif.js
* `id` : id
* `scope` : /motifs-js
* `folder` : id
* `filePath` : /motifs-js/_motifs/id/id.motif.js
* `symbol` : ⚲
* `names`


# `instance`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**⧇ [id] instance**, also known as :

* [en] Instance,
* [fr] Instance.

INDIVIDUAL OF ONE OR MULTIPLE MOTIFS

Instances are occurence of a [MOTIF](#motif).

They should conform to the following specifications :

* Can be retrieved through [`<motif>.get`] way,
* Can be created through [`<motif>.create`] way,
* Can be tested through [`<motif>.test`] way,
* *(Not implemented) Can get updated and deleted*.

[MOTIF](#motif) (`<...>.motif.js`) are instances of the MOTIF MOTIF.

Note that **MOTIF MOTIF is an instance of itself !**

## Properties

* `motif` : motif
* `path` : /motifs-js/_motifs/instance/instance.motif.js
* `id` : instance
* `scope` : /motifs-js
* `folder` : instance
* `filePath` : /motifs-js/_motifs/instance/instance.motif.js
* `symbol` : ⧇
* `names`
* `get`


# `lang`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**ἀ [id] lang**, also known as :

* [en] Language,
* [fr] Langage.

## Properties

* `motif` : motif
* `path` : /motifs-js/_motifs/lang/lang.motif.js
* `id` : lang
* `scope` : /motifs-js
* `folder` : lang
* `filePath` : /motifs-js/_motifs/lang/lang.motif.js
* `symbol` : ἀ
* `names`


# `motif`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**⚇ [id] motif**, also known as :

* [en] Concept, Idea, Word, Pattern, Spirit, God, Angel, Deva,
* [fr] Concept, Idée, Mot, Motif, Esprit, Dieu, Ange, Deva.

MOTIF of all MOTIFS

### What is a MOTIF ?

Motif, also known as *pattern*,
is the generic concept that **bind instances together under the same name**.
In programmation, patterns / motifs aim to
solve recurring problems with generic / abstract answers.

As stated in the book [*A Pattern Language*](https://en.wikipedia.org/wiki/A_Pattern_Language),
**motifs also has the property to act as words**, forming sentences (and more) under certains rules.
But, as now stated in the publication [*Generative Design Patterns*](https://www.researchgate.net/publication/3981737_Generative_design_patterns),
*design patterns* in computer science also has the counterpart of being too abstract.
They do not provide implemention and cannot be used straight as operational code.

To address this void, MOTIFS provides both a library of numerous inedite and differently scaling motifs
and an implementation that **makes these motifs not only descriptive, but also generative**.

### About naming files

MOTIF starts living in a `<motifId>` folder,
just right with its `<motifId>.motif.js` file.

Every MOTIFS has its own rules for naming.

Naming basically bind a **whose ?** (an `<id>.*`, or a [folder scope](/folder-scope))
and a **what ?** (the `*.<motif>.*` it implements).

It remains simple while there is only one *whose* and only one *what*.

But since the are some transversal MOTIFS,
their INSTANCES will potentialy have multiple :

* **whose** : `[ id* ].`,
* **what** : `.[ motif* ].`.



## Properties

* `motif` : motif
* `path` : /motifs-js/_motifs/motif/motif.motif.js
* `id` : motif
* `scope` : /motifs-js
* `folder` : motif
* `filePath` : /motifs-js/_motifs/motif/motif.motif.js
* `symbol` : ⚇
* `names`
* `occurences`
* `init`
* `flavour` : At the very beginning,
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
* `_commands`
* `create`
* `get`
* `cli`
* `test`

## Instances

**Count : 38.**

### Matching mechanims

* `/(.*)\/_motifs\/(.*)\/(.*).motif.js/`.

### Instances list

* [`/motifs-js/_motifs/assertion/assertion.motif.js`](/motifs-js/_motifs/assertion/assertion.motif.js)
* [`/motifs-js/_motifs/book/book.motif.js`](/motifs-js/_motifs/book/book.motif.js)
* [`/motifs-js/_motifs/book-extract/book-extract.motif.js`](/motifs-js/_motifs/book-extract/book-extract.motif.js)
* [`/motifs-js/_motifs/book-image/book-image.motif.js`](/motifs-js/_motifs/book-image/book-image.motif.js)
* [`/motifs-js/_motifs/book-page/book-page.motif.js`](/motifs-js/_motifs/book-page/book-page.motif.js)
* [`/motifs-js/_motifs/book-section/book-section.motif.js`](/motifs-js/_motifs/book-section/book-section.motif.js)
* [`/motifs-js/_motifs/command/command.motif.js`](/motifs-js/_motifs/command/command.motif.js)
* [`/motifs-js/_motifs/description/description.motif.js`](/motifs-js/_motifs/description/description.motif.js)
* [`/motifs-js/_motifs/doc/doc.motif.js`](/motifs-js/_motifs/doc/doc.motif.js)
* [`/motifs-js/_motifs/file/file.motif.js`](/motifs-js/_motifs/file/file.motif.js)
* [`/motifs-js/_motifs/folder/folder.motif.js`](/motifs-js/_motifs/folder/folder.motif.js)
* [`/motifs-js/_motifs/folder-scope/folder-scope.motif.js`](/motifs-js/_motifs/folder-scope/folder-scope.motif.js)
* [`/motifs-js/_motifs/get/get.motif.js`](/motifs-js/_motifs/get/get.motif.js)
* [`/motifs-js/_motifs/global/global.motif.js`](/motifs-js/_motifs/global/global.motif.js)
* [`/motifs-js/_motifs/id/id.motif.js`](/motifs-js/_motifs/id/id.motif.js)
* [`/motifs-js/_motifs/instance/instance.motif.js`](/motifs-js/_motifs/instance/instance.motif.js)
* [`/motifs-js/_motifs/lang/lang.motif.js`](/motifs-js/_motifs/lang/lang.motif.js)
* [`/motifs-js/_motifs/motif/motif.motif.js`](/motifs-js/_motifs/motif/motif.motif.js)
* [`/motifs-js/_motifs/occurence/occurence.motif.js`](/motifs-js/_motifs/occurence/occurence.motif.js)
* [`/motifs-js/_motifs/pantheon/pantheon.motif.js`](/motifs-js/_motifs/pantheon/pantheon.motif.js)
* [`/motifs-js/_motifs/project/project.motif.js`](/motifs-js/_motifs/project/project.motif.js)
* [`/motifs-js/_motifs/prop/prop.motif.js`](/motifs-js/_motifs/prop/prop.motif.js)
* [`/motifs-js/_motifs/readme/readme.motif.js`](/motifs-js/_motifs/readme/readme.motif.js)
* [`/motifs-js/_motifs/readme-section/readme-section.motif.js`](/motifs-js/_motifs/readme-section/readme-section.motif.js)
* [`/motifs-js/_motifs/shrine/shrine.motif.js`](/motifs-js/_motifs/shrine/shrine.motif.js)
* [`/motifs-js/_motifs/spec/spec.motif.js`](/motifs-js/_motifs/spec/spec.motif.js)
* [`/motifs-js/_motifs/spec-section/spec-section.motif.js`](/motifs-js/_motifs/spec-section/spec-section.motif.js)
* [`/motifs-js/_motifs/util/util.motif.js`](/motifs-js/_motifs/util/util.motif.js)
* [`/motifs-js/_motifs/way/way.motif.js`](/motifs-js/_motifs/way/way.motif.js)
* [`/motifs-js/_motifs/webapp/webapp.motif.js`](/motifs-js/_motifs/webapp/webapp.motif.js)
* [`/motifs-js/_motifs/website/website.motif.js`](/motifs-js/_motifs/website/website.motif.js)
* [`/motifs-js/_motifs/website-page/website-page.motif.js`](/motifs-js/_motifs/website-page/website-page.motif.js)
* [`/motifs-js/_motifs/wiki/wiki.motif.js`](/motifs-js/_motifs/wiki/wiki.motif.js)
* [`/_motifs/article/article.motif.js`](/_motifs/article/article.motif.js)
* [`/_motifs/notebook/notebook.motif.js`](/_motifs/notebook/notebook.motif.js)
* [`/_motifs/storyboard/storyboard.motif.js`](/_motifs/storyboard/storyboard.motif.js)
* [`/_motifs/youtube-comment/youtube-comment.motif.js`](/_motifs/youtube-comment/youtube-comment.motif.js)
* [`/_motifs/youtube-video/youtube-video.motif.js`](/_motifs/youtube-video/youtube-video.motif.js)

## Flavour

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


# `notebook`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**[id] notebook**, also known as :

* [en] Notebook,
* [fr] Carnet.

**A COLLECTION OF
THOUGHTS AND SKETCHES**

It is usually driven by [BOOK-EXTRACTS](#book-extract),
eventually [BOOK-SECTIONS](#book-section),
instead of [BOOK-PAGES](#book-pages)
like [STORYBOARD](#storyboard).

## Properties

* `motif` : motif
* `path` : /_motifs/notebook/notebook.motif.js
* `id` : notebook
* `scope` : 
* `folder` : notebook
* `filePath` : /_motifs/notebook/notebook.motif.js
* `names`
* `occurences`
* `get`

## Instances

**Count : 5.**

### Matching mechanims

* `/_data\/notebooks\/(.*)\/(.*).notebook.js/`.

### Instances list

* [`_data/notebooks/pensees-1/pensees-1.notebook.js`](_data/notebooks/pensees-1/pensees-1.notebook.js)
* [`_data/notebooks/pensees-12/pensees-12.notebook.js`](_data/notebooks/pensees-12/pensees-12.notebook.js)
* [`_data/notebooks/pensees-2/pensees-2.notebook.js`](_data/notebooks/pensees-2/pensees-2.notebook.js)
* [`_data/notebooks/pensees-7/pensees-7.notebook.js`](_data/notebooks/pensees-7/pensees-7.notebook.js)
* [`_data/notebooks/pensees-9/pensees-9.notebook.js`](_data/notebooks/pensees-9/pensees-9.notebook.js)


# `occurence`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**ʯ [id] occurence**, also known as :

* [en] Occurence,
* [fr] Occurence.

WHERE INSTANCES HAPPEN

OCCURENCE is made of two aspects :

1. The **matching rule(s)** define(s) the lexical conditions
   required for a MOTIF'S INSTANCE to appear,

2. The **transformations**, returned by applying the
   `transform` method to every rules matching results.

Experimental :
```javascript
occurences: [
  {
    level: //,
    regExp: /(.*)\/_motifs\/(.*)\/(.*).motif.js/,
    folderMatch: //,
    fileMatch: //,
    propMatch: //,
    transform: ([ scope, folderName, fileName ]) => ({
      scope,
      folderName,
      fileName
    })
  }
]
```

## Properties

* `motif` : motif
* `path` : /motifs-js/_motifs/occurence/occurence.motif.js
* `id` : occurence
* `scope` : /motifs-js
* `folder` : occurence
* `filePath` : /motifs-js/_motifs/occurence/occurence.motif.js
* `symbol` : ʯ
* `names`
* `get`


# `pantheon`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**[id] pantheon**, also known as :

* [en] Pantheon, Primordial shrine, Valhalla, Mount Olympus, Acropolis, Heaven,
* [fr] Panthéon, Sanctuaire primordial, Valhalla, Mont Olympe, Acropole, Paradis.

Primordial MOTIFS' package

This is a *legendary* concept.

There lies the most abstract and/or transverse [MOTIFS](#motif),
the angels and last steps upon the One.

## Properties

* `motif` : motif
* `path` : /motifs-js/_motifs/pantheon/pantheon.motif.js
* `id` : pantheon
* `scope` : /motifs-js
* `folder` : pantheon
* `filePath` : /motifs-js/_motifs/pantheon/pantheon.motif.js
* `names`
* `regExp`


# `project`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**Ω [id] project**, also known as :

* [en] Project,
* [fr] Projet.

Hold whole's meta-data and config

PROJECT agregates different concepts and files related to 
the codebase considered as a whole.

A non-exhaustive list of its components :

* Global DESCRIPTION,
* ENVIRONMENT variables,
* The set of project-related files :
  * `package.json`,
  * `.gitignore`;
* And by extension, all folder and files contained in it.

## Properties

* `motif` : motif
* `path` : /motifs-js/_motifs/project/project.motif.js
* `id` : project
* `scope` : /motifs-js
* `folder` : project
* `filePath` : /motifs-js/_motifs/project/project.motif.js
* `symbol` : Ω
* `names`


# `prop`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**⁖ [id] prop**, also known as :

* [en] Property, Characteristics, Attribute,
* [fr] Propriété, Caractéristque, Attribut.

Properties of an instance

PROPS can be hard-bounded in `.motif.js` file
or dynamically bound in `MOTIF.get()` method.

*(historical) `_props` folders contains
[kami](#kami)'s properties content.*

## Properties

* `motif` : motif
* `path` : /motifs-js/_motifs/prop/prop.motif.js
* `id` : prop
* `scope` : /motifs-js
* `folder` : prop
* `filePath` : /motifs-js/_motifs/prop/prop.motif.js
* `symbol` : ⁖
* `names`


# `readme`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**⬙ [id] readme**, also known as :

* [en] README,
* [fr] README.

**GITHUB README**

README instance occurs once by [PROJECT](#project),
in the `/_readme folder`.

Specific PROJECT's README [SECTIONS](#sections) are
located in `/_readme/_sections`,
genercis are located in `/kami.js/_shrine/readme/_sections`.

README is a component of [DOC](#-doc).

## Properties

* `motif` : motif
* `path` : /motifs-js/_motifs/readme/readme.motif.js
* `id` : readme
* `scope` : /motifs-js
* `folder` : readme
* `filePath` : /motifs-js/_motifs/readme/readme.motif.js
* `symbol` : ⬙
* `names`
* `get`
* `build`
* `_commands`


# `readme-section`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**⬥ [id] readme-section**, also known as :

* [en] Section,
* [fr] Section.

**README SECTION**

SECTIONS are made of :
* Text content,
* Imbricated SECTIONS.

In fact, README is the top-level SECTION.

## Properties

* `motif` : motif
* `path` : /motifs-js/_motifs/readme-section/readme-section.motif.js
* `id` : readme-section
* `scope` : /motifs-js
* `folder` : readme-section
* `filePath` : /motifs-js/_motifs/readme-section/readme-section.motif.js
* `symbol` : ⬥
* `names`
* `regExp`
* `create`


# `shrine`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**[id] shrine**, also known as :

* [en] Shrine,
* [fr] Sanctuaire.

(historical) A MOTIFS' node

## Properties

* `motif` : motif
* `path` : /motifs-js/_motifs/shrine/shrine.motif.js
* `id` : shrine
* `scope` : /motifs-js
* `folder` : shrine
* `filePath` : /motifs-js/_motifs/shrine/shrine.motif.js
* `names`
* `regExp`


# `spec`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**Ѭ [id] spec**, also known as :

* [en] Specification,
* [fr] Spécification.

MOTIFS' TEST MATERIAL

In `motifs` we currently distinguish two
categories of specifications :

* **Instances SPECS**, which target every
  instances of a MOTIF (hold by the MOTIF),
* **Specific SPECS**, which target a single
  instance of a MOTIF (hold by the instance).`

## Properties

* `motif` : motif
* `path` : /motifs-js/_motifs/spec/spec.motif.js
* `id` : spec
* `scope` : /motifs-js
* `folder` : spec
* `filePath` : /motifs-js/_motifs/spec/spec.motif.js
* `symbol` : Ѭ
* `names`
* `runOne`
* `runAll`
* `occurences`

## Instances

**Count : 8.**

### Matching mechanims

* `/(^|.*\/)([\w|\-]*\.spec.js)/`,
* `/(.*)\/_motifs\/([\w|\-]*)\/_specis\/([\w|\-]*)\.speci.js/`.

### Instances list

* [`/motifs-js/index.spec.js`](/motifs-js/index.spec.js)
* [`/motifs-js/_motifs/motif/init/init.spec.js`](/motifs-js/_motifs/motif/init/init.spec.js)
* [`/motifs-js/_motifs/occurence/get/get.spec.js`](/motifs-js/_motifs/occurence/get/get.spec.js)
* [`/motifs-js/_motifs/occurence/get/_utils/fixSlashFirst/fixSlashFirst.spec.js`](/motifs-js/_motifs/occurence/get/_utils/fixSlashFirst/fixSlashFirst.spec.js)
* [`/motifs-js/_motifs/occurence/get/_utils/folderMatchFixRegExpEnd/folderMatchFixRegExpEnd.spec.js`](/motifs-js/_motifs/occurence/get/_utils/folderMatchFixRegExpEnd/folderMatchFixRegExpEnd.spec.js)
* [`/motifs-js/_motifs/spec/runAll/_utils/specSectionResultCounter/specSectionResultCounter.spec.js`](/motifs-js/_motifs/spec/runAll/_utils/specSectionResultCounter/specSectionResultCounter.spec.js)
* [`/motifs-js/_motifs/motif/_specis/motif.speci.js`](/motifs-js/_motifs/motif/_specis/motif.speci.js)
* [`/motifs-js/_motifs/spec/_specis/spec.speci.js`](/motifs-js/_motifs/spec/_specis/spec.speci.js)


# `spec-section`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**Ѫ [id] spec-section**, also known as :

* [en] Specification section,
* [fr] Section de specification.

ASSERTION nodes in SPEC files

```javascript
{
  label: 'string',
  group: [ 'spec-section' | 'assertion' ]
}
```

## Properties

* `motif` : motif
* `path` : /motifs-js/_motifs/spec-section/spec-section.motif.js
* `id` : spec-section
* `scope` : /motifs-js
* `folder` : spec-section
* `filePath` : /motifs-js/_motifs/spec-section/spec-section.motif.js
* `symbol` : Ѫ
* `names`


# `storyboard`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**[id] storyboard**, also known as :

* [en] Storyboard,
* [fr] Storyboard.

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

## Properties

* `motif` : motif
* `path` : /_motifs/storyboard/storyboard.motif.js
* `id` : storyboard
* `scope` : 
* `folder` : storyboard
* `filePath` : /_motifs/storyboard/storyboard.motif.js
* `names`
* `occurences`
* `get`

## Instances

**Count : 7.**

### Matching mechanims

* `/_data\/storyboards\/(.*)\/(.*).storyboard.js/`.

### Instances list

* [`_data/storyboards/absutrats-6-18/absutrats-6-18.storyboard.js`](_data/storyboards/absutrats-6-18/absutrats-6-18.storyboard.js)
* [`_data/storyboards/absutrats-jeu/absutrats-jeu.storyboard.js`](_data/storyboards/absutrats-jeu/absutrats-jeu.storyboard.js)
* [`_data/storyboards/absutrats-vol1-v2/absutrats-vol1-v2.storyboard.js`](_data/storyboards/absutrats-vol1-v2/absutrats-vol1-v2.storyboard.js)
* [`_data/storyboards/highbs-bok/highbs-bok.storyboard.js`](_data/storyboards/highbs-bok/highbs-bok.storyboard.js)
* [`_data/storyboards/hol-adin-des-zums-2020/hol-adin-des-zums-2020.storyboard.js`](_data/storyboards/hol-adin-des-zums-2020/hol-adin-des-zums-2020.storyboard.js)
* [`_data/storyboards/psybok-vol0/psybok-vol0.storyboard.js`](_data/storyboards/psybok-vol0/psybok-vol0.storyboard.js)
* [`_data/storyboards/psybok-vol1/psybok-vol1.storyboard.js`](_data/storyboards/psybok-vol1/psybok-vol1.storyboard.js)


# `util`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**⬫ [id] util**, also known as :

* [en] Utility,
* [fr] Utilitaire.

The place to put things

`_utils` folders are nothing more than
the place very specific snippets of code are put.

Utilities are usually consumed by same scope or 
lower levels modules.

You should avoid repetitions in `_utils` as
everywhere else in the code.


## Properties

* `motif` : motif
* `path` : /motifs-js/_motifs/util/util.motif.js
* `id` : util
* `scope` : /motifs-js
* `folder` : util
* `filePath` : /motifs-js/_motifs/util/util.motif.js
* `symbol` : ⬫
* `names`


# `way`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**[id] way**, also known as :

* [en] Method, Action, Operation, Function,
* [fr] Méthode, Action, Opération, Fonction.

(historical) MOTIFS' METHOD

Ways are KAMI's methods
(... actions, functions, operations).

It differs with [prop](#prop) in its type,
which is necessarely `function`.

## Properties

* `motif` : motif
* `path` : /motifs-js/_motifs/way/way.motif.js
* `id` : way
* `scope` : /motifs-js
* `folder` : way
* `filePath` : /motifs-js/_motifs/way/way.motif.js
* `names`


# `webapp`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**[id] webapp**, also known as :

* [en] Web application,
* [fr] Application web.

The dynamic WEBSITE backend

A webapp exposes MOTIFS and their operations
(customs and generics) as endpoints.

## Properties

* `motif` : motif
* `path` : /motifs-js/_motifs/webapp/webapp.motif.js
* `id` : webapp
* `scope` : /motifs-js
* `folder` : webapp
* `filePath` : /motifs-js/_motifs/webapp/webapp.motif.js
* `names`


# `website`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**Ʋ [id] website**, also known as :

* [en] Website,
* [fr] Site internet.

**KAMI.JS DOCUMENTATION WEBSITE**

WEBSITE is a [DOC](#doc) component.

## Properties

* `motif` : motif
* `path` : /motifs-js/_motifs/website/website.motif.js
* `id` : website
* `scope` : /motifs-js
* `folder` : website
* `filePath` : /motifs-js/_motifs/website/website.motif.js
* `symbol` : Ʋ
* `names`
* `occurences`
* `build`
* `_commands`

## Instances

**Count : 1.**

### Matching mechanims

* `/^\/_websites\/(.*)\/(.*).website.js/`.

### Instances list

* [`/_websites/default/default.website.js`](/_websites/default/default.website.js)


# `website-page`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**[id] website-page**, also known as :

* [en] Page, Website page,
* [fr] Page, Page de site internet.

TEMPLATE x DATA x URL

A page binds the following three elements :
* A template which render conditionnaly
  on specific data,
* Data to be consumed by the template,
* An path to be render
  (which will in time be used as its url).


## Properties

* `motif` : motif
* `path` : /motifs-js/_motifs/website-page/website-page.motif.js
* `id` : website-page
* `scope` : /motifs-js
* `folder` : website-page
* `filePath` : /motifs-js/_motifs/website-page/website-page.motif.js
* `names`
* `create`


# `wiki`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**[id] wiki**, also known as :

* [en] Wiki,
* [fr] Wiki.

Wiki documentation

WIKI is a component of [DOC](#doc).

## Properties

* `motif` : motif
* `path` : /motifs-js/_motifs/wiki/wiki.motif.js
* `id` : wiki
* `scope` : /motifs-js
* `folder` : wiki
* `filePath` : /motifs-js/_motifs/wiki/wiki.motif.js
* `names`


# `youtube-comment`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**[id] youtube-comment**, also known as :

* [en] YouTube comment,
* [fr] Commentaire YouTube.

YOUTUBE-COMMENTS are retrieved from the
`/comment_service_ajax` request on YouTube
video page.

This route returns a complex object that
we will decode by developing a script to
programmaticaly treat the response.

## Data we'd like to store

* A [comment] list
* Each [comment] can have a [reply] list
* [Comment] : 
  * Author,
  * Author "endpoint", its channel's URL,
  * Text,
  * Publication date

There is some more information we'd like to
extract in the future :
* Like counts,
* Dislike counts,
* Did I liked it,
* Did I loved it

## Properties

* `motif` : motif
* `path` : /_motifs/youtube-comment/youtube-comment.motif.js
* `id` : youtube-comment
* `scope` : 
* `folder` : youtube-comment
* `filePath` : /_motifs/youtube-comment/youtube-comment.motif.js
* `names`
* `occurences`
* `extract`

## Instances

**Count : 1.**

### Matching mechanims

* `/\/_data\/youtube-videos\/([\w|\-]*)\/([\w|\-]*).comments.js/`.

### Instances list

* [`/_data/youtube-videos/comment-faire-des-choses/comment-faire-des-choses-2.comments.js`](/_data/youtube-videos/comment-faire-des-choses/comment-faire-des-choses-2.comments.js)


# `youtube-video`

[*Return to MOTIFS' glossary.*](#motifs-glossary)

**[id] youtube-video**, also known as :

* [en] YouTube video,
* [fr] Vidéo YouTube.

A reference to a video from
[my YouTube channel](https://www.youtube.com/channel/UCOLV7nm8pSSDWEzPRFogyTw/)

The main goal right now it to agregates
deleted videos comments to their remasterized
version (RETRO project).

## Properties

* `motif` : motif
* `path` : /_motifs/youtube-video/youtube-video.motif.js
* `id` : youtube-video
* `scope` : 
* `folder` : youtube-video
* `filePath` : /_motifs/youtube-video/youtube-video.motif.js
* `names`
* `occurences`
* `get`

## Instances

**Count : 1.**

### Matching mechanims

* `/\/_data\/youtube-videos\/([\w|\-]*)/`.

### Instances list

* [`/_data/youtube-videos/comment-faire-des-choses`](/_data/youtube-videos/comment-faire-des-choses)
