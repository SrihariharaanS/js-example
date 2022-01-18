1-NPM:
Node Package Manager 
It is an online repository for the publishing of open source Node.js projects.
Command line utility to install Node.js packages, do version management and dependency management of Node.js packages.

2-NPM -g:
npm install -g <package-name> attempts to install the package into a system-wide node_modules directory.
The g in npm install -g is a flag signifying that you want to install that particular npm module system wide (globally). Without the g option, the module would be installed locally inside the current directory called node_modules -try it!

The location of your globally installed packages can vary depending on how you have installed node. Find out where they are installed by typing npm list -g in your command line.

3--save-dev:
(Development Dependency)
When –save-dev is used with npm install, it signifies that the package is a development dependency. 
A development dependency is any package that absence will not affect the work of the application.

4-YARN:
It is also a package manager like npm.
npm: npm is installed with Node automatically. 
yarn: To install yarn npm have to be installed.

4-WHY YARN:
Yarn clearly trumped npm in performance speed. 
During the installation process, Yarn installs multiple packages at once as contrasted to npm that installs each one at a time. 
While npm also supports the cache functionality, it seems Yarn's is far much better.