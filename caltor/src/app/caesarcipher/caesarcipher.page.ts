import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caesarcipher',
  templateUrl: './caesarcipher.page.html',
  styleUrls: ['./caesarcipher.page.scss'],
})
export class CaesarcipherPage implements OnInit {

  plaintextValue: string = "";
  encryptedtextValue: string = "";
  shift: number = 0;
  newStr = "";

  encrypt(){
    let num = this.shift % 26;
    let lowerStr = this.plaintextValue.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let newStr = '';
  
    for (let i = 0; i < lowerStr.length; i++) {
      let currentLetter = lowerStr[i];
  
      if (currentLetter === ' ') {
        newStr += currentLetter;
        continue
      }
  
      let currentIndex = alphabet.indexOf(currentLetter);
      let newIndex = currentIndex + num;
  
      if ( newIndex > 25) newIndex = newIndex - 26;
      if(newIndex < 0) newIndex = 26 + newIndex;
      if (this.plaintextValue[i] === this.plaintextValue[i].toUpperCase()) {
        newStr += alphabet[newIndex].toUpperCase();
      }
      else newStr += alphabet[newIndex];
    }
    this.encryptedtextValue = newStr;
  }
  decrypt(){
    let num = this.shift % 26;
    let lowerStr = this.plaintextValue.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let newStr = '';
  
    for (let i = 0; i < lowerStr.length; i++) {
      let currentLetter = lowerStr[i];
  
      if (currentLetter === ' ') {
        newStr += currentLetter;
        continue
      }
  
      let currentIndex = alphabet.indexOf(currentLetter);
      let newIndex = currentIndex - num;
  
      if ( newIndex > 25) newIndex = newIndex - 26;
      if(newIndex < 0) newIndex = 26 + newIndex;
      if (this.plaintextValue[i] === this.plaintextValue[i].toUpperCase()) {
        newStr += alphabet[newIndex].toUpperCase();
      }
      else newStr += alphabet[newIndex];
    }
    this.encryptedtextValue = newStr;
    
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
