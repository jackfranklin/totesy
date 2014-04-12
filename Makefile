secrets: traceur
	./bin/replace_secrets

traceur: browserify
	traceur --out public/javascripts/build.js --script public/javascripts/bundle.js

browserify:
	browserify public/javascripts/app/main.js -o public/javascripts/bundle.js
