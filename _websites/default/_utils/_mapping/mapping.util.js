import PAGE from '../../../../kami.js/_shrine/website/_shrine/page/page.kami.js'
import FOLDER from '../../../../kami.js/_shrine/folder/folder.kami.js'
import homeTemplate from "../../../_templates/home/home.template.js"
import articlesListTemplate from '../../../_templates/articlesList/articlesList.template.js'
import articleTemplate from '../../../_templates/article/article.template.js'
import storyboardsListTemplate from '../../../_templates/storyboardsList/storyboardsList.template.js'
import storyboardTemplate from '../../../_templates/storyboard/storyboard.template.js'
import storyboardPageTemplate from '../../../_templates/storyboardPage/storyboardPage.template.js'
import FILE from '../../../../kami.js/_shrine/file/file.kami.js'

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
            ...storyboard.pages.map((page, index) =>
              
              FOLDER.create(
                folderScope,
                index + 1,
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
                  FILE.copy(
                    '/_data/storyboards/'
                      + storyboard.id + '/_pages/'
                      + (index + 1) + '/original.jpg',
                    folderScope + '/original.jpg'
                  )
                ])))
          ])
        ))
    ])
  )
])