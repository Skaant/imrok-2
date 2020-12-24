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