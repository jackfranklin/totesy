secrets: traceur
	./node_modules/common-shell-scripts/replace_secrets secrets.json public/javascripts/build.js

traceur: browserify
	traceur --out public/javascripts/build.js --script public/javascripts/bundle.js

browserify:
	browserify public/javascripts/app/main.js -o public/javascripts/bundle.js

watch:
	./node_modules/common-shell-scripts/watch public/javascripts/app/ make
