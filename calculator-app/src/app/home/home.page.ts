import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

plaintextValue: string = "";
encryptedtextValue: string = "";
decoded_string = "";
//caesar
plaintextValue1: string = "";
encryptedtextValue1: string = "";
shift: number = 0;
newStr = "";
//vigenere
plaintextValue2: string = "";
encryptedtextValue2: string = "";
encrypted = "";
key: string = "";

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

/// Caesar
encrypt1(){
  let num = this.shift % 26;
  let lowerStr = this.plaintextValue1.toLowerCase();
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
    if (this.plaintextValue1[i] === this.plaintextValue1[i].toUpperCase()) {
      newStr += alphabet[newIndex].toUpperCase();
    }
    else newStr += alphabet[newIndex];
  }
  this.encryptedtextValue1 = newStr;
}
decrypt1(){
  let num = this.shift % 26;
  let lowerStr = this.plaintextValue1.toLowerCase();
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
    if (this.plaintextValue1[i] === this.plaintextValue1[i].toUpperCase()) {
      newStr += alphabet[newIndex].toUpperCase();
    }
    else newStr += alphabet[newIndex];
  }
  this.encryptedtextValue1 = newStr;
  console.log(num)
  
}

//vigenere
encrypt2(){
  function mod(n: number, m: number) {
    return ((n % m ) + m) % m;
  }
    let encrypted = "";
    let j = 0;
    for (let i = 0; i < this.plaintextValue2.length; i++) {
        let currentLetter = this.plaintextValue2[i];
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
    this.encryptedtextValue2 = encrypted;
}

decrypt2(){
  function mod(n: number, m: number) {
    return ((n % m ) + m) % m;
  }
  let decrypted = "";
  let j = 0;
  for (let i = 0; i < this.plaintextValue2.length; i++) {
      let currentLetter = this.plaintextValue2[i];
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
  this.encryptedtextValue2 = decrypted;
}
/// end
public today = Date.now();

  constructor() {
    setInterval(this.refreshTime, 1000)
  }

  ngOnInit() {
    setInterval(this.refreshTime, 1000)
  }
  refreshTime() {
    this.today = Date.now()
    
}
}
