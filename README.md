#fiber
___
fiber is a website project scaffolding designed to help you get your web project instantly up and running with the latest workflow technologies. 

##Installation
___
* Get the latest release by:
    * Cloning the repo `https://github.com/bhough/fiber.git` -or-
    * [Downloading the zip File](https://github.com/bhough/fiber/archive/master.zip)
* Install Node using the package on the [Node.js website](https://nodejs.org/)
* Install Gulp.js `npm install -g gulp`
* Install BrowserSync `npm install -g browser-sync`
* Install Browserify `npm install -g browserify`
* Install Compass `gem install compass`
* Install Dependencies `npm install` from the project root
* Run `gulp` from the project root

##What's included
___
fiber uses the popular Javascript-based streaming build system [Gulp](http://gulpjs.com/) to automate your workflow. Common tasks are included to handle all the basics needs of web project development.

###BrowserSync
fiber leverages [BrowserSync](http://www.browsersync.io/) providing you with an easy way to run your project locally. Upon first running fiber, a new browser window will be launched that will reload with your latest ch anges whenever you update the code base.

###SASS & Compass
CSS in fiber is written using SASS and Compass. fiber automatically compiles into minified CSS complete with sourcemap support. Using AutoPrefixer and Modernizr, fiber makes sure you have all your supported browsers covered.

###Grid System
Also included is fiberGrid, a customizable, responsive, mobile-first CSS grid system to further help you get straight to coding. Configure the number of columns, margins, and breakpoints to make fiberGrid work for any project.

###JavaScript
fiber provides an easy way to write clean, modularized JavaScript using [Browserify](http://browserify.org/). All JS is automatically compiled and minified complete with sourcemap support.

###HTML
Included is a base HTML template that utlizes best practices for mobile rendering, SEO, and performance. It also includes a placeholder 404 template.

### & more...
* Automatic CSS cache-busting
* Image minification
* Pre-configured .gitignore
* Leverage the popular and exhaustive .htaccess from [HTML5Boilerplate](https://github.com/h5bp/html5-boilerplate/blob/v5.0.0/dist/doc/misc.md#server-configuration)
* Project and formatting configurations for [SublimeText](http://www.sublimetext.com/) or any editor that supports [EditorConfig](http://editorconfig.org/)

##The Basics
___
Once you get everything up and running, your project `src` folder will look something like this:

```
fiber/
├── src/
│   ├── js/
│   │   ├── main.js
│   │   ├── plugin.js
│   │   └── libs
│   ├── scss/
│   │   ├── main.scss
│   │   ├── components
│   │   └── modules
│   ├── tasks/
│   ├── index.html
        └── 404.html
```


