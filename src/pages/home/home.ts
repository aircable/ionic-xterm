import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
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

export class HomePage implements AfterViewInit {

    private term: Terminal;
    // this finds the #terminal element, after view init
    @ViewChild('terminal' ) terminal: ElementRef;

    constructor(public navCtrl:NavController) {

        Terminal.loadAddon("fit");

        this.term = new Terminal({
            cursorBlink: true,
            //useStyle: true,
            scrollback: 60,
            rows: 30,
        });

        // this is just simple echo
        this.term.on('key', (key, ev) => {
            console.log(key.charCodeAt(0));
            if (key.charCodeAt(0) == 13)
                this.term.write('\n');
            this.term.write(key);
        });

    }

    // getting the nativeElement only possible after view init
    ngAfterViewInit() {

        // this now finds the #terminal element
        this.term.open( this.terminal.nativeElement, true );

        // calling fit is not quite working
        // uses the obscure ion-textbox, which does not really exist, but changes the font size
        // the number of rows will determine the size of the terminal screen
        this.term.fit();
        this.term.writeln('Welcome to xterm.js');

    }


}
