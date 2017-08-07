Ionic 3 Xterm.js Testproject

## This test is sort of working now.

*Please help to get the [xterm.js](https://github.com/sourcelair/xterm.js) integrated into an Ionic 3 project*. 
Some style things are a bit weird, e.g. the use of <ion-textbox> which makes it look good, but does not exist.


### With the Ionic CLI:

This app was created with:
```bash
$ ionic start ionic-xterm --type=ionic-angular
$ cd ionic-xterm
$ npm install
$ npm install --save ajv
$ npm install --save xterm
$ npm install --save @types/xterm
```

Then, to run it, cd into `ionic-xterm` and run:

```bash
$ ionic serve -lc
```

Testing on iOS:

```bash
$ ionic cordova platform add ios
$ ionic cordova build ios
```

Then use Xcode to compile app and run on device.