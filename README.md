# Totesy
My turn to make a TODO app.

Not ever for public consumption, but being built for me, partly to learn AngularJS more, and partly to have my own Todo application that I actually like to use.

## Cool Things

There's nothing exciting about this app, I'm building it to suit exactly what I want and it's nothing ground breaking, but you might find some of the tech interesting. It's:

- An AngularJS frontend, running a Firebase backend (well, with a tiny ExpressJS server to tie it together).
- Written with some sprinkles of ES6 thanks to Traceur.
- Using npm for dependencies thanks to Browserify.
- not using Grunt/Gulp/Broccoli but just a simple Makefile.

Any Qs about any of that stuff, feel free to ask. Or if you know Angular better than me (highly likely, I am still learning) please do let me know if I could be doing things differently.

## Running

Sign up for and attain a Firebase URL. [Sign Up Here](https://www.firebase.com/account/#/).

Rename `secrets.json.example` to `secrets.json` and add in your Firebase URL to it.

Get some global dependencies up in here:

```sh
npm install -g traceur
npm install -g browserify
```

Local dependencies:

```sh
npm install
```

Generate the build file:

```
make
```

Run it:

```
node bin/www
```

Go to localhost:3000 and rock on. Any help required running it, feel free to open an issue.

To keep the generated JS files up to date as you work, in another window/tab you should run:

```
make watch
```

It watches for changes in `public/javascripts/app` and runs `make` when it detects them.

---

PS: the old Firebase URL I used is still in the Git commits somewhere. Don't get excited if you find it though, I ditched it so I could make this repo public :D
