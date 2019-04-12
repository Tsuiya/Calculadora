import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adicao',
  templateUrl: './adicao.page.html',
  styleUrls: ['./adicao.page.scss'],
})
export class AdicaoPage implements OnInit {

n1: number;
n2: number;
soma: number;

  constructor() { }

  somar(){
    this.soma = this.n1 + this.n2; 
  }

  ngOnInit() {
  }

}
