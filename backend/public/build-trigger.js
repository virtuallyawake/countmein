/*

This file is only here to use as a watch trigger for grunt, in order for it to go build a deployable installation in the /dist
file. The reason to separate building from other tasks is really because it might take too long when you're running in
development to wait for an entire deployment build to take place before you can see the changes you made in your code.

The order in which the grunt tasks take place are:

- Compile sass. Get all the .scss files and put it into one single main.css file
- Compile js. Get all the javascript files (vendor and native) and put them into one single app.js file
- Clean. Clean out the /dist folder as it is right now.
- Copy. Get all the .html files and some .js, .css and font files from the /app to the /dist folder
- Htmlmin. Minify all the copied .html files

*/
