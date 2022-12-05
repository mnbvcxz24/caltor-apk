import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atbashcipher',
  templateUrl: './atbashcipher.page.html',
  styleUrls: ['./atbashcipher.page.scss'],
})
export class AtbashcipherPage implements OnInit {
  plaintextValue: string = "";
  encryptedtextValue: string = "";
  decoded_string = "";

  encrypt(){
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let tebahpla = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
    let alphabet1 = "abcdefghijklmnopqrstuvwxyz";
    let tebahpla1 = "zyxwvutsrqponmlkjihgfedcba";
    let decoded_string = "";
   
    for (let i = 0; i < this.plaintextValue.length; i++) {
      let coded_letter = this.plaintextValue.charAt(i);
      
    if (/[^a-zA-Z]/.test(this.plaintextValue[i])) {
    decoded_string = decoded_string+this.plaintextValue[i];	
    }
    else if (this.plaintextValue[i] === this.plaintextValue[i].toUpperCase()) {
    let letter_index  = alphabet.indexOf(coded_letter);
    let decoded_letter = tebahpla.charAt(letter_index);
    decoded_string = decoded_string + decoded_letter;
    } else {
    let letter_index1 = alphabet1.indexOf(coded_letter);
    let decoded_letter1 = tebahpla1.charAt(letter_index1);
    decoded_string = decoded_string + decoded_letter1;
    }
  }
    this.encryptedtextValue = decoded_string;
  }

  clear(){
    this.plaintextValue = "";
    this.encryptedtextValue = "";
  }

  text1 = false;
  text2 = false;

  constructor() { }

  ngOnInit() {
  }

}
