import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-divisao',
  templateUrl: './divisao.page.html',
  styleUrls: ['./divisao.page.scss'],
})
export class DivisaoPage implements OnInit {
  
n1: number;
n2: number;
div: number;

  constructor() { }

  divid(){
    this.div = this.n1 / this.n2 ;
  }

  ngOnInit() {
  }

}
