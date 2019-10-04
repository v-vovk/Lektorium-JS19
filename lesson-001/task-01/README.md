## What is in the Starting project

* Preprocessor for SCSS
* Autoprefixer
* Resource minifiers
* Compression graphics

## What you need to do

Install [NodeJS](https://nodejs.org/en/)  
Install plugin for [Editorconfig](http://editorconfig.org) editor 

## Project start

Clone a project  
Open this folder in the console and install dependencies

```bash
npm install
npm install -g gulp-cli (if not installed)
```

## Available commands

`gulp default` - run a project for development  
`gulp watch` - run a project for watch styles, JS etc.  
`gulp style` - style build  

## Project structure

```
start-frontend-project/
├── /assets/               # The build result. (never edited).
├── /node_modules/         # Node modules. (never edited).
├── /src/                  # Source files.
│   ├── /img/              # Source images.
│   ├── /js/               # Source js.
│   ├── /libs/             # Source libs.
│   ├── /sass/             # See below for the folder structure.
├── /views/                # Source HTML files.
└── .editorconfig          # Configuration for Editor.
└── .jshintrc              # Configuration for JsHint.
└── .gitignore             # Specifies intentionally untracked files to ignore
└── gulpfile.js            # Configuration for Gulp.
└── package.json           # NPM packages.
└── projectConfig.json     # Project configuration and dependencies.
```

## Structure of the sass folder

```
sass/
├── /base/                 # Styles for base.
├── /components/           # Styles for components.
├── /layout/               # Styles for layout.
├── /pages/                # Styles for each page in the project.
├── /utils/                # Mixins, Variables.
└── main.scss              # Compiled file.
```
