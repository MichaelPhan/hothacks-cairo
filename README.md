# Developed by Secret Location

This code was created by developers at Secret Location.  If you require
assistance in navigating any folders or files required for deployment
please contact one of the contributors.

For full release notes and deploy instructions see /docs/RELEASE.md


## Folder structure breakdown

* /db/ - Contains db zip packages for deploying the site
* /docs/ - Contains all project related documents
* /src/ - Contains all uncompiled code (particularly relevant for Unity or Flash)
* /www/ - Contains all server deployable files


## Contributors

* Producer: Anna Kipervaser
* Developers: Ryah Andal, Michael Phan
* Designers: Kai Salminen


## Notes for Developers

If you are developing in this framework you will need to know a few details.
* All of the CSS is written in LESS and compiled through PHP with this framework
* open /www/core/config.php, ensure the $TEST var is set to 1 otherwise you will be referencing the compiled CSS and JS files
* to compile and minify all CSS/LESS and JS files visit /www/_helper/compile.php in your web browser, this will automatically compile everything through your web environment
* to reference the compiled files in the framework set $TEST = 0 in the /www/core/config.php file
* use /www/core/reference.php to define what JS files need to be loaded for each page (import statements)

Folder breakdown in /www/
* /app/ - contains all of your controllers and server side db communication and logic
* /asset/ - contains all of your cacheable assets
* /build/ - contains all of the models and views for building any objects on the server side
* /core/ - contains your config and setup files for all teh core logic that makes the framework run
* /css/ - contains all of your css
* /css/lib/ - contains external css libraries
* /css/min/ - contains minified css files (do not edit these)
* /css/src/ - contains your less files that will be compiled, write all of your css here
* /data/ - contains all of your data files
* /data/app/ - contains all of your data files
* /data/static/ - contains static data files built by the front end developer
* /data/app/ - contains data that is assumed to be created by your controllers in the /app/ folder
* /js/ - contains all of your js
* /js/lib/ - contains external js libraries
* /js/min/ - contains minified js files (do not edit these)
* /js/src/ - contains your js files that will be compiled, write all of your js here