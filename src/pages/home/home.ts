import { Component, OnInit } from '@angular/core';
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

export class HomePage implements OnInit {

  private term: Terminal;

  constructor( public navCtrl: NavController ) {

    this.term = new Terminal( {cursorBlink: true} );
    this.term.open( document.getElementById("terminal") );

    //Terminal.loadAddon( "fit" );

    //this.term.fit();

    this.term.writeln('Welcome to xterm.js');

    // this is
    this.term.on('key', (key, ev) => {
      console.log( key );
    });

  }

  ngOnInit () {}

}
