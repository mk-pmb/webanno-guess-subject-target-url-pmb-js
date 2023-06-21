
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
I need a term that works for all of it – images, media files, physical books,
dinosaur bones, people, living animals, ideas about future projects.

To make things even harder, I'm not a native speaker of American English,
so I hope my choice of "subject" is good enough.



API
---

This module exports one function that holds some methods:

### guessSubjectTargetUrl(anno)

`anno` is a plain old JS object that conforms to the
[W3 annotation-model](https://www.w3.org/TR/annotation-model/).

Returns the URL as a string, or throw an error (see `.foundNone()` below)
if no subject was found.



### .foundNone()

Throw an error complaining that no subject target was found.
The error will have `.type === 'AnnoNoSubjectTarget'`.



### .fallible(anno)

Like `guessSubjectTargetUrl()`, but when no subject was found,
don't throw an error, rather just return `false`.

(In versions up to 1.0.2, this was described in README as the default
behavior, but it was never actually implemented.)



### .multi(anno)

`anno` is as above, but multi-target annotations are supported.
Returns an array of URLs. The array will be either empty,
or contain truthy values.
For well-formed supported input, that "truthy" more specifically means
means non-empty strings, which should be URLs. Which may however be
relative to the annotation's URL, so we can't always know for sure.






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
