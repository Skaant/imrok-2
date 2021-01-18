import page from 'motifs-js/_motifs/website-page/website-page.motif.js'
import folder from 'motifs-js/_motifs/website-folder/website-folder.motif.js'
import homeTemplate from "../../../_templates/home/home.template.js"
import articlesListTemplate from '../../../_templates/articlesList/articlesList.template.js'
import articleTemplate from '../../../_templates/article/article.template.js'
import storyboardsListTemplate from '../../../_templates/storyboardsList/storyboardsList.template.js'
import storyboardTemplate from '../../../_templates/storyboard/storyboard.template.js'
import storyboardPageTemplate from '../../../_templates/storyboardPage/storyboardPage.template.js'
import notebooksListTemplate from '../../../_templates/notebooksList/notebooksList.template.js'
import notebookTemplate from '../../../_templates/notebook/notebook.template.js'
import notebookExtractTemplate from '../../../_templates/notebookExtract/notebookExtract.template.js'
import BOOK_IMAGE from 'motifs-js/_motifs/book-image/book-image.motif.js'
import legalsTemplate from '../../../_templates/legals/legals.template.js'
import videosListTemplate from '../../../_templates/videosList/videosList.template.js'
import videoTemplate from '../../../_templates/video/video.template.js'

export default (
  data,
  options
) => ({
  '': page.shape(
    homeTemplate,
    data
  ),
  'mentions-legales': page.shape(
    legalsTemplate,
    data
  ),
  'articles': folder.shape({
    '': page.shape(
      articlesListTemplate,
      data
    ),
    ...data.articles.reduce(
      (acc, article, index) => ({
        ...acc,
        [index + 1]: page.shape(
          articleTemplate,
          {
            ...data,
            article: {
              index: index + 1,
              ...article
            }
          }
        )
      }),
      {}
    )
  }),
  'storyboards': folder.shape({
    '': page.shape(
      storyboardsListTemplate,
      data
    ),
    ...data.storyboards.reduce(
      (acc, storyboard) => ({
        ...acc,
        [storyboard.id]: folder.shape({
          '': page.shape(
            storyboardTemplate,
            {
              ...data,
              storyboard
            }),
          ...storyboard.pages.reduce(
            (acc, _page, index) => ({
              ...acc,
              [index + 1]: page.shape(
                storyboardPageTemplate,
                {
                  ...data,
                  storyboard,
                  page: {
                    ..._page,
                    index: index + 1
                  }
                },
              )
            }),
            {}
          )
        })
      }),
      {}
    )
  }),
  'carnets': folder.shape({
    '': page.shape(
      notebooksListTemplate,
      data
    ),
    ...data.notebooks.reduce(
      (acc, notebook) => ({
        ...acc,
        [notebook.id]: folder.shape({
          '': page.shape(
            notebookTemplate,
            {
              ...data,
              notebook
            }
          ),
          ...notebook.extracts.reduce(
            (acc, extract, index) => ({
              ...acc,
              [extract.id]: page.shape(
                notebookExtractTemplate,
                {
                  ...data,
                  notebook,
                  extract: {
                    ...extract,
                    index
                  }
                }
              )
            }),
            {}
          )
        })
      }),
      {}
    )
  }),
  'videos': folder.shape({
    '': page.shape(
      videosListTemplate,
      data
    ),
    ...data.videos.reduce(
      (acc, video) => ({
        ...acc,
        [video.id]: page.shape(
          videoTemplate,
          {
            ...data,
            video
          }
        )
      }),
      {}
    )
  })
})