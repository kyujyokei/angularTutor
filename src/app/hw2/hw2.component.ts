import { Component } from '@angular/core';
import { Student } from '../../shared/student.model';

@Component({
  selector: 'app-hw02',
  templateUrl: './hw2.component.html', // you can put real html here
  styleUrls: ['./hw2.component.css']
})
export class Hw2Component {
  ingredients = {meat: false, rice: false, mushroom: false, honey: false, monster: false};

  recipes = {
    Meat_Riceball : {meat: true, rice: true, mushroom: false, honey: false, monster: false},
    Honey_Stew_Meat: {meat: true, rice: false, mushroom: false, honey: true, monster: false}
  }
  dishMade = false;
  dish: string;

  add(food) {
    switch (food) {
      case 'meat': {
        this.ingredients.meat = !this.ingredients.meat;
        return;
      }
      case 'rice': {
        this.ingredients.rice = !this.ingredients.rice;
        return;
      }
      case 'mushroom': {
        this.ingredients.mushroom = !this.ingredients.mushroom;
        return;
      }
      case 'honey': {
        this.ingredients.honey = !this.ingredients.honey;
        return;
      }
      case 'monster': {
        this.ingredients.monster = !this.ingredients.monster;
        return;
      }
    }
  }

  check() {
    for (let recipe in this.recipes) {
      // console.log(recipe);
      let matched = true;
      for (let item in this.recipes[recipe]) {
        // console.log(item, this.recipes[recipe][item]);
        if (this.recipes[recipe][item] !== this.ingredients[item]) {
          matched = false;
        }
      }
      if (matched) {
        this.dishMade = true;
        this.dish = JSON.stringify(recipe);
        console.log('FOUND: ', recipe);
        return;
      }
    }
    this.dishMade = true;
    this.dish = 'Nothing!';
    // this.dish = JSON.stringify(recipe);
    // console.log('FOUND: ', recipe);
    return;
  }
}
