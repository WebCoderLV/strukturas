import { Component } from '@angular/core';

@Component({
  selector: 'app-stuktura',
  imports: [],
  templateUrl: './stuktura.html',
  styleUrl: './stuktura.css',
})
export class Stuktura {
  suni = ['Rex', 'Max', 'Bim', 'Dik'];

  pievinotSuni() {
    this.suni.push('Luna');
    console.log(this.suni);
    const index = this.suni.indexOf('Max');
    for(let i = 0; i < this.suni.length; i++) {
      if (i === 2) {
        console.log(this.suni[i] = 'Reksi');
      } else {
      console.log(this.suni[i]);
      }
    }
    console.log(index);
    if (index > -1) {
    this.suni.splice(index, 2);
    console.log(this.suni);
    console.log(this.suni.length);
    }
  }
}
