development_out = public/javascripts/development.js
production_out = public/javascripts/production.js
app_main = public/javascripts/app/main.js

dev: secrets

secrets: traceur
	./node_modules/common-shell-scripts/replace_secrets secrets.json $(development_out)

traceur: browserify
	./node_modules/traceur/traceur --out $(development_out) --script $(development_out)

browserify:
	./node_modules/browserify/bin/cmd.js $(app_main) -o $(development_out)

watch: dev
	./node_modules/common-shell-scripts/watch public/javascripts/app/ make

prod: dev
	./node_modules/ngmin/bin/ngmin $(development_out) $(production_out)
	./node_modules/uglify-js/bin/uglifyjs $(production_out) -o $(production_out)

