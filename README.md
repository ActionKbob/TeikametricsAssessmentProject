# Project Overview

I built this project using ReactJS, Redux. ES6 code is transpiled using Babel through Webpack, and Webpack-Dev-Server is used for the development server. Gulp is set up for running the Webpack tasks and for managing the static files.

The styling is SASS and utilizes Bootstrap, mainly for the grid structure and the helper classes.

The build process takes the files that are in the src folder, and outputs a final product to a bin folder ( Not included in the repository ). This bin folder gets cleaned up every time the build process starts.

The development site runs at localhost:8080

## Installation

Change directory to the root of this project and run the gulp run command
	
```
gulp run
```

If you don't have gulp installed you can find the installation instructions [here](https://gulpjs.com/)