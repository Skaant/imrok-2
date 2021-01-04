import WEBSITE_PAGE from 'motifs-js/_motifs/website-page/website-page.motif.js'
import FOLDER from 'motifs-js/_motifs/folder/folder.motif.js'
import homeTemplate from "../../../_templates/home/home.template.js"
import articlesListTemplate from '../../../_templates/articlesList/articlesList.template.js'
import articleTemplate from '../../../_templates/article/article.template.js'
import storyboardsListTemplate from '../../../_templates/storyboardsList/storyboardsList.template.js'
import storyboardTemplate from '../../../_templates/storyboard/storyboard.template.js'
import storyboardPageTemplate from '../../../_templates/storyboardPage/storyboardPage.template.js'
import FILE from 'motifs-js/_motifs/file/file.motif.js'
import notebooksListTemplate from '../../../_templates/notebooksList/notebooksList.template.js'
import notebookTemplate from '../../../_templates/notebook/notebook.template.js'
import notebookExtractTemplate from '../../../_templates/notebookExtract/notebookExtract.template.js'
import BOOK_IMAGE from 'motifs-js/_motifs/book-image/book-image.motif.js'
import legalsTemplate from '../../../_templates/legals/legals.template.js'
import videosListTemplate from '../../../_templates/videosList/videosList.template.js'
import videoTemplate from '../../../_templates/video/video.template.js'

export default (
  scope,
  data,
  options
) => ([
  /** / */
  WEBSITE_PAGE.create(
    homeTemplate,
    data,
    scope,
    options
  ),
  /** /mentions-legales */
  FOLDER.create(
    scope,
    'mentions-legales',
    folderScope => ([
      WEBSITE_PAGE.create(
        legalsTemplate,
        data,
        folderScope,
        options
      )
    ])),
  /** /articles */
  FOLDER.create(
    scope,
    'articles',
    folderScope => ([
      /** /articles/ */
      WEBSITE_PAGE.create(
        articlesListTemplate,
        data,
        folderScope,
        options
      ),
      /** /articles/:index */
      ...data.articles.map((article, index) =>
        
        FOLDER.create(
          folderScope,
          index + 1,
          folderScope => ([
            WEBSITE_PAGE.create(
              articleTemplate,
              {
                ...data,
                article: {
                  index,
                  ...article
                }
              },
              folderScope,
              options
            )
          ])
        ))
    ])
  ),
  /** /storyboards */
  FOLDER.create(
    scope,
    'storyboards',
    folderScope => ([
      /** /storyboards/ */
      WEBSITE_PAGE.create(
        storyboardsListTemplate,
        data,
        folderScope,
        options
      ),
      /** /storyboards/:id */
      ...data.storyboards.map(storyboard =>
        
        FOLDER.create(
          folderScope,
          storyboard.id,
          folderScope => ([

            WEBSITE_PAGE.create(
              storyboardTemplate,
              {
                ...data,
                storyboard
              },
              folderScope,
              options
            ),
            ...(storyboard.images
              ? BOOK_IMAGE.copy(
                storyboard.images,
                folderScope,
                options
              )
              
              : []),

            /** /storyboards/:id/:page */
            ...storyboard.pages.map(page => {

              const index = parseInt(page.filePath
                .split('/').pop()
                .split('.').shift())
              
              return FOLDER.create(
                folderScope,
                index,
                folderScope => ([
                  WEBSITE_PAGE.create(
                    storyboardPageTemplate,
                    {
                      ...data,
                      storyboard,
                      page: {
                        ...page,
                        index
                      }
                    },
                    folderScope,
                    options
                  ),
                  ...(page.images
                    ? BOOK_IMAGE.copy(
                      page.images,
                      folderScope,
                      options
                    )

                    : [])
                ]))
              })
          ])
        ))
    ])
  ),
  /** /carnets */
  FOLDER.create(
    scope,
    'carnets',
    folderScope => ([
      /** /carnets/ */
      WEBSITE_PAGE.create(
        notebooksListTemplate,
        data,
        folderScope,
        options
      ),
      /** /carnets/:id */
      ...data.notebooks.map(notebook =>
        
        FOLDER.create(
          folderScope,
          notebook.id,
          folderScope => ([
            WEBSITE_PAGE.create(
              notebookTemplate,
              {
                ...data,
                notebook
              },
              folderScope,
              options
            ),
            /** /carnets/:id/:extract */
            ...notebook.extracts.map((extract, index) =>
              
              FOLDER.create(
                folderScope,
                extract.id,
                folderScope => ([
                  WEBSITE_PAGE.create(
                    notebookExtractTemplate,
                    {
                      ...data,
                      notebook,
                      extract: {
                        ...extract,
                        index
                      }
                    },
                    folderScope,
                    options
                  ),
                  /** /carnets/:id/:extract/original.png */
                  FILE.copy(
                    '/_data/notebooks/'
                      + notebook.id + '/_extracts/'
                      + (index + 1) + '/original.png',
                    folderScope + '/original.png'
                  )
                ])))
          ])
        ))
    ])
  ),
  
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
])