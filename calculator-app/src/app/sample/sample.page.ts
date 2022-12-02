import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.page.html',
  styleUrls: ['./sample.page.scss'],
})
export class SamplePage implements OnInit {

  fact(Input: number)
  {
    let f=1;
    for(let i=2;i<=Input;i++)
    {
      f=f*i;
    }
    return f;
  }

  constructor() { }

  ngOnInit() {
  }
}