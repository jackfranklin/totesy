development_out = public/javascripts/development.js
production_out = public/javascripts/production.js
production_temp = public/javascripts/production-tmp.js
app_main = public/javascripts/app/main.js
lib_dir = public/javascripts/lib

dev: secrets

secrets: traceur
	./node_modules/common-shell-scripts/replace_secrets secrets.json $(development_out)

traceur: browserify
	./node_modules/traceur/traceur --out $(development_out) --script $(development_out)

browserify:
	./node_modules/browserify/bin/cmd.js $(app_main) -o $(development_out)

watch: dev
	./node_modules/common-shell-scripts/watch public/javascripts/app/ make

minify_vendor_files:
	cd $(lib_dir) && cat angular.min.js angular-route.min.js firebase.js angularfire.min.js > vendor.min.js

prod: dev minify_vendor_files
	./node_modules/ngmin/bin/ngmin $(development_out) $(production_temp)
	./node_modules/uglify-js/bin/uglifyjs $(production_temp) -o $(production_temp)
	cat public/javascripts/lib/vendor.min.js $(production_temp) > $(production_out)
	rm $(production_temp)

test:
	./node_modules/karma/bin/karma start

