
<!--#echo json="package.json" key="name" underline="=" -->
webanno-guess-subject-target-url-pmb
====================================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Given a web annotation, guess the URL of its actual subject.
<!--/#echo -->



What is a "subject"?
--------------------

I wish I knew a better word for it.
In a discussion about an image, a reply to my comment will have my
comment as its target, but it's most likely about the image, too.
In that case, the subject is the image.

Since there are so many things we could discuss using web annotations,
I need a term that works for all of it – image, media files, physical books,
dinosaur bones, people, living animals, ideas about future projects.

To make things even harder, I'm not a native speaker of American English,
so I hope my choice of "subject" is good enough.



API
---

This module exports one function:

### guessSubjectTargetUrl(anno)

`anno` is a plain old JS object that conforms to the
[W3 annotation-model](https://www.w3.org/TR/annotation-model/).

Returns the URL as a string, or `false` if no subject was found.




Usage
-----

:TODO:



<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
