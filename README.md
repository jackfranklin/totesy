# Totesy
My turn to make a TODO app.

Not ever for public consumption, but being built for me, partly to learn AngularJS more, and partly to have my own Todo application that I actually like to use.

## Running

Sign up for and attain a Firebase URL. [Sign Up Here](https://www.firebase.com/account/#/).

Rename `secrets.json.example` to `secrets.json` and add in your Firebase URL to it.

Get some dependencies up in here:

```sh
npm install -g traceur
npm install -g browserify
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

---

PS: the old Firebase URL I used is still in the Git commits somewhere. Don't get excited if you find it though, I ditched it so I could make this repo public :D
