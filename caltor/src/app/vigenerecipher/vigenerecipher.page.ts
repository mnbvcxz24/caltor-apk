import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vigenerecipher',
  templateUrl: './vigenerecipher.page.html',
  styleUrls: ['./vigenerecipher.page.scss'],
})
export class VigenerecipherPage implements OnInit {

  plaintextValue: string = "";
  encryptedtextValue: string = "";
  encrypted = "";
  decrypted = "";
  key: string = "";

  encrypt(){
    function mod(n: number, m: number) {
      return ((n % m ) + m) % m;
    }
      let encrypted = "";
      let j = 0;
      for (let i = 0; i < this.plaintextValue.length; i++) {
          let currentLetter = this.plaintextValue[i];
          const A = 65;
          const a = 97;
  
          if(currentLetter == currentLetter.toUpperCase()) {
              let Pi = (currentLetter.charCodeAt(0) - A);
              let Ki = (this.key[j % this.key.length].toUpperCase().charCodeAt(0) - A);
              let upperLetter = mod(Pi + Ki, 26);
  
              encrypted += String.fromCharCode(upperLetter + A);
  
              j++;
          } else if(currentLetter == currentLetter.toLowerCase()) {
              let Pi = (currentLetter.charCodeAt(0) - a);
              let Ki = (this.key[j % this.key.length].toLowerCase().charCodeAt(0) - a);
              let lowerLetter = mod(Pi + Ki, 26);
  
              encrypted += String.fromCharCode(lowerLetter + a);
  
              j++;
          } else  {
              encrypted += currentLetter;
          }
      }
      this.encryptedtextValue = encrypted;
  }
  
  decrypt(){
    function mod(n: number, m: number) {
      return ((n % m ) + m) % m;
    }
    let decrypted = "";
    let j = 0;
    for (let i = 0; i < this.plaintextValue.length; i++) {
        let currentLetter = this.plaintextValue[i];
        const A = 65;
        const a = 97;
  
        if(currentLetter == currentLetter.toUpperCase()) {
            let Ci = (currentLetter.charCodeAt(0) - A);
            let Ki = (this.key[j % this.key.length].toUpperCase()).charCodeAt(0) - A;
            let upperLetter = mod(Ci - Ki, 26);
  
            decrypted += String.fromCharCode(upperLetter + A);
  
            j++;
        } else if(currentLetter == currentLetter.toLowerCase()) {
            let Ci = (currentLetter.charCodeAt(0) - a);
            let Ki = (this.key[j % this.key.length].toLowerCase()).charCodeAt(0) - a;
            let lowerLetter = mod(Ci - Ki, 26);
  
            decrypted += String.fromCharCode(lowerLetter + a);
  
            j++;
        } else {
            decrypted += currentLetter;
        }
    }
    this.encryptedtextValue = decrypted;
  }

  clear(){
    this.plaintextValue = "";
    this.encryptedtextValue = "";
    this.key = "";
  }
  
  text1 = false;
  text2 = false;
  
  constructor() { }

  ngOnInit() {
  }

}
