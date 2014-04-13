development_out = public/javascripts/development.js
production_out = public/javascripts/production.js
app_main = public/javascripts/app/main.js

secrets: traceur
	./node_modules/common-shell-scripts/replace_secrets secrets.json $(development_out)

traceur: browserify
	traceur --out $(development_out) --script $(development_out)

browserify:
	browserify $(app_main) -o $(development_out)

watch:
	./node_modules/common-shell-scripts/watch public/javascripts/app/ make

dev: secrets

prod: dev
	./node_modules/ngmin/bin/ngmin $(development_out) $(production_out)
	./node_modules/uglify-js/bin/uglifyjs $(production_out) -o $(production_out)

