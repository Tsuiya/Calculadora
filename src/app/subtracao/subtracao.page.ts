import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subtracao',
  templateUrl: './subtracao.page.html',
  styleUrls: ['./subtracao.page.scss'],
})
export class SubtracaoPage implements OnInit {

  n1: number;
  n2: number;
  sub: number;

  constructor() { }

  subt(){
    this.sub = this.n1 - this.n2;
  }

  ngOnInit() {
  }

}
