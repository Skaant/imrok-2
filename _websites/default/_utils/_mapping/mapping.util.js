import PAGE from '../../../../kami.js/_shrine/website/_shrine/page/page.kami.js'
import FOLDER from '../../../../kami.js/_shrine/folder/folder.kami.js'
import homeTemplate from "../../../_templates/home/home.template.js"
import articlesListTemplate from '../../../_templates/articlesList/articlesList.template.js'
import articleTemplate from '../../../_templates/article/article.template.js'
import storyboardsListTemplate from '../../../_templates/storyboardsList/storyboardsList.template.js'
import storyboardTemplate from '../../../_templates/storyboard/storyboard.template.js'
import storyboardPageTemplate from '../../../_templates/storyboardPage/storyboardPage.template.js'
import FILE from '../../../../kami.js/_shrine/file/file.kami.js'
import notebooksListTemplate from '../../../_templates/notebooksList/notebooksList.template.js'
import notebookTemplate from '../../../_templates/notebook/notebook.template.js'
import notebookExtractTemplate from '../../../_templates/notebookExtract/notebookExtract.template.js'

export default (
  scope,
  data,
  options
) => ([
  /** / */
  PAGE.create(
    homeTemplate,
    data,
    scope,
    options
  ),
  /** /articles */
  FOLDER.create(
    scope,
    'articles',
    folderScope => ([
      /** /articles/ */
      PAGE.create(
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
            PAGE.create(
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
      PAGE.create(
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
            PAGE.create(
              storyboardTemplate,
              {
                ...data,
                storyboard
              },
              folderScope,
              options
            ),
            /** /storyboards/:id/:page */
            ...storyboard.pages.map(page => {

              const index = parseInt(page.filePath
                .split('/').pop()
                .split('.').shift())
              
              return FOLDER.create(
                folderScope,
                index,
                folderScope => ([
                  PAGE.create(
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
                  /** /storyboards/:id/:page/original.jpg */
                  FILE.copy(
                    '/_data/storyboards/'
                      + storyboard.id + '/_pages/'
                      + index + '/original.jpg',
                    folderScope + '/original.jpg'
                  )
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
      PAGE.create(
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
            PAGE.create(
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
                  PAGE.create(
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
  )
])