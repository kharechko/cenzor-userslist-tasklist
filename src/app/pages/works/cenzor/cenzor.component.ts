import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.scss']
})

export class CenzorComponent implements OnInit {

  values = ['java', 'tottenham'];
  badline: string = this.values.join(' ');
  plhdr: string = 'word here..';
  text: string = 'text here..';
  word: string = '';
  areatext: string = '';
  inputBorder: boolean = false;
  areaBorder: boolean = false;

  constructor() { }

  ngOnInit(): void {}

  add(): void {
    if(this.word != '') {
      this.values.push(this.word);
      this.inputBorder = false;
      this.word = '';
      this.plhdr = 'word here..';
      this.badline = this.values.join(' ');

    } 
      else {
        this.inputBorder = true;
        this.plhdr = 'Please write a word!'
    }
  }

  replaceWord(): void {

    if(this.areatext != '') {
      let star: string = '';
      this.areaBorder = false;
      this.text = 'text here...';

        for(let name of this.values) {

          for(let i = 0; i < name.length; i++) {
           star += '*';
            }
         let reg = new RegExp(name+'$', 'gi');
         this.areatext = this.areatext.replace(reg, star)
         star = '';
      }
     } 
    else { 
      this.areaBorder = true;
      this.text = 'Please write a text!';
      }
    }

    resetInputs(): void {
      this.areatext = '';
      this.word = '';
      this.inputBorder = false;
      this.areaBorder = false;
      this.values = [];
      this.badline = '';
  }

}
