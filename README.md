n# Word Search Kata
====================================

(this description of the kata was copied from http://exercism.io)

In word search puzzles you get a square of letters and have to find specific
words in them.

For example:
```
jefblpepre
camdcimgtc
oivokprjsm
pbwasqroua
rixilelhrs
wolcqlirpc
screeaumgr
alxhpburyi
jalaycalmp
clojurermt
```

There are several programming languages hidden in the above square.

Words can be hidden in all kinds of directions: left-to-right, right-to-left,
vertical ~~and diagonal~~.

Given a puzzle and a list of words return the location of the first and last
letter of each word.


## Requirements

You should use [NodeJS v8](https://nodejs.org/en/download/) or above.

Install assignment dependencies:

```bash
$ npm install
```

## Making the test suite pass

Run Jest in watch mode, with coverage info like this:

```bash
$ npm run watch:cover
```

In the test suite all tests but the first have been skipped.

Once you get a test passing, you can enable the next one by
changing `xtest` to `test`.
