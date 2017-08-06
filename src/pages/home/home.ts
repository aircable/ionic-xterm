import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as Terminal from "xterm";
//import style from 'xterm/dist/xterm.css';
import "xterm/dist/addons/fit/fit";

@Component({
    selector: 'terminal',
    templateUrl: "home.html",
    //styles: [ style ]
    //styleUrls: ["./xterm.css"]
})

export class HomePage {

    private term: Terminal;

    constructor(public navCtrl:NavController) {

        Terminal.loadAddon("fit");

        this.term = new Terminal({
            cursorBlink: true,
            useStyle: true,
            scrollback: 200,
            rows: 80,
        });
        this.term.open( document.getElementById( "#terminal" ));

        // now it works
        this.term.fit();

        this.term.writeln('Welcome to xterm.js');

        // this is just simple echo
        this.term.on('key', (key, ev) => {
            console.log(key.charCodeAt(0));
            if (key.charCodeAt(0) == 13)
                this.term.write('\n');
            this.term.write(key);
        });

    }


}
