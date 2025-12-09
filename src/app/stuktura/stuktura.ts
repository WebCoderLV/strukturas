import { Component, computed, signal} from '@angular/core';
import { Header } from '../header/header';

@Component({
  selector: 'app-stuktura',
  imports: [Header],
  templateUrl: './stuktura.html',
  styleUrl: './stuktura.css',
})
export class Stuktura {
  // suni = ['Rex', 'Max', 'Bim', 'Dik'];

  // cat1 = {
  //   name: 'Murka',
  //   age: 3,
  //   color: 'balta',
  //   breed: 'siamese',
  // };
  // cat2 = {
  //   name: 'Pupa',
  //   age: 2,
  //   color: 'melna',
  //   breed: 'persiešu',
  // }

  // kaki = [this.cat1, this.cat2];
  bmw = ['X5', 'X3', 'X1'];
  // audi = ['Q7', 'Q5', 'Q3'];
  bmwSignals = signal<string[]>(this.bmw);
  audiSignals = signal<string[]>(['Q7', 'Q5', 'Q3']);
  coumputedSignals = computed(() => {
    return [...this.bmwSignals(), ...this.audiSignals()];
  });

  pievinotAudi() {
    this.audiSignals.update((a) => [...a, 'A80']);
  }

  pievinotBMW() {
    this.bmwSignals.update((b) => [...b, 'i7']);

    // this.bmwSignals.set(this.bmw);

    // conso
    // le.log(mansBmw);

    // let citrus: (number| string| boolean)[]  = [];
    // citrus.push(false);
    // let berries = 'Strawberry';
    // let produce = [...citrus, 76];
    // console.log(produce);

    // let a = {
    //   name: 'Apple',
    //   color: 'red',
    //   price: [1.2, 1.3, 1.4],
    // }

    // let b = [...a.price, {color: 'yellow', name: a.name}];
    // console.log(b);

    // this.suni.push('Luna');
    // console.log(this.suni);
    // const index = this.suni.indexOf('Max');
    // for(let i = 0; i < this.suni.length; i++) {
    //   if (i === 2) {
    //     console.log(this.suni[i] = 'Reksi');
    //   } else {
    //   console.log(this.suni[i]);
    //   }
    // }
    // console.log(index);
    // if (index > -1) {
    // this.suni.splice(index, 2);
    // console.log(this.suni);
    // console.log(this.suni.length);
    // }
    // let i = 0;
    // for(let suns of this.suni) {
    //   i++;
    //   console.log(suns);
    //   console.log(i);
    // }
  }
}
