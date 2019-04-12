import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiplicacao',
  templateUrl: './multiplicacao.page.html',
  styleUrls: ['./multiplicacao.page.scss'],
})
export class MultiplicacaoPage implements OnInit {

n1: number;
n2: number;
mult: number;

  constructor() { }

  multi(){
    this.mult = this.n1 * this.n2;
  }

  ngOnInit() {
  }

}
