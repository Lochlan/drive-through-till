# file settings

SRC_STATIC_PATH = static/src
BUILD_STATIC_PATH = static

SRC_JSTEMPLATES_PATH = $(SRC_STATIC_PATH)/templates
SRC_JSTEMPLATES = $(shell find $(SRC_JSTEMPLATES_PATH) -type f -name '*.swig')
BUILD_JSTEMPLATES_PATH = $(BUILD_STATIC_PATH)/js/templates
BUILD_JSTEMPLATES = $(subst $(SRC_JSTEMPLATES_PATH),$(BUILD_JSTEMPLATES_PATH),$(SRC_JSTEMPLATES:.swig=.js))

# targets

all: build

build: js

clean:
	rm -rfv\
		$(BUILD_JSTEMPLATES)\

distclean: clean
	rm -rfv\
		static/js/vendor\
		node_modules\

js: js-vendor js-templates

js-templates: $(BUILD_JSTEMPLATES)

js-vendor:\
    static/js/vendor/backbone.js\
    static/js/vendor/backbone.localstorage.js\
    static/js/vendor/jquery.js\
    static/js/vendor/require.js\
    static/js/vendor/swig.js\
    static/js/vendor/underscore.js\


runserver: build
	node_modules/.bin/http-server ./

# file rules

$(BUILD_JSTEMPLATES_PATH)/%.js: $(SRC_JSTEMPLATES_PATH)/%.swig node_modules
	mkdir -p "$(@D)"
	./node_modules/.bin/swig compile $< --wrap-start="\
	define(['swig'], function (swig) {\
		return (function (data) {\
			return swig.run(" --wrap-end=", data);\
		});\
	});" > $@

static/js/vendor/backbone.js: node_modules/backbone/backbone.js node_modules
	mkdir -p "$(@D)"
	cp $< $@
static/js/vendor/backbone.localstorage.js: node_modules/backbone.localstorage/backbone.localStorage.js node_modules
	mkdir -p "$(@D)"
	cp $< $@
static/js/vendor/jquery.js: node_modules/jquery/dist/jquery.js node_modules
	mkdir -p "$(@D)"
	cp $< $@
static/js/vendor/require.js: node_modules/requirejs/require.js node_modules
	mkdir -p "$(@D)"
	cp $< $@
static/js/vendor/swig.js: node_modules/swig/dist/swig.js node_modules
	mkdir -p "$(@D)"
	cp $< $@
static/js/vendor/underscore.js: node_modules/underscore/underscore.js node_modules
	mkdir -p "$(@D)"
	cp $< $@

node_modules/backbone/backbone.js: node_modules
node_modules/backbone.localstorage/backbone.localStorage.js: node_modules
node_modules/jquery/dist/jquery.js: node_modules
node_modules/requirejs/require.js: node_modules
node_modules/swig/dist/swig.js: node_modules
node_modules/underscore/underscore.js: node_modules

node_modules: package.json
	npm install
	touch $@


# turn off built-in implicit rules
MAKEFLAGS = --no-builtin-rules

# delete default suffixes
.SUFFIXES:

# declare phony targets
.PHONY: all build clean distclean js js-templates runserver
