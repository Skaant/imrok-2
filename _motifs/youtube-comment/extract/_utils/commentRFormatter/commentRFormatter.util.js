export default commentR =>
  commentR
    && {
      author: {
        text: commentR.authorText.simpleText,
        endpoint: commentR.authorEndpoint.urlEndpoint.url
      },
      content: (commentR.contentText.runs || [])
        .map(run => run.text)
    }