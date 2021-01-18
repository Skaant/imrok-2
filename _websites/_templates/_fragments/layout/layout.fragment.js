export default (
  data,
  {
    title,
    description,
    content
  }) => `<!DOCTYPE html>
<html lang=${ data.lang.toLowerCase() }>
  <head>
    <meta charset="utf-8">
    <meta name="description" content="${ description }">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>${ title }</title>
    <link rel="icon" type="image/svg+xml" href="/assets/star-logo.svg">
    <link href="/assets/bootstrap.min.css" rel="stylesheet" type="text/css">
    <link href="/assets/style.css" rel="stylesheet" type="text/css">
  </head>
  <body>
    <nav class="navbar d-flex justify-content-between align-items-center">
      <a class="navbar-brand mr-3" href="/">
        IMROK <span class="text-golden">*</span>
        <br>
        <span class="subtitle">Le hub créatif de Romaric Ruga</span>
      </a>
    </nav>
    ${ content }
    <script src='/assets/nalytimk.js'></script>
  </body>
</html>`