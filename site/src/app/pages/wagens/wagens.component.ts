import { Component } from '@angular/core';

class corso_rides {
  photo : string[] = []
  year : number = 1968
  title : string = "Bloemenfestival"
  designer : string = "Onbekend"
  place : number = 15
  points : number = 349
}

@Component({
  selector: 'app-wagens',
  templateUrl: './wagens.component.html',
  styleUrls: ['./wagens.component.scss']
})
export class WagensComponent {
  rides: corso_rides[] = [
    { photo: ["assets/images/wagens/graafschap_1968.png"], year: 1968, title: "Bloemenfestival", designer: "Onbekend", place: 15, points: 349 },
    { photo: ["assets/images/wagens/graafschap_1969.png"], year: 1969, title: "Vormen der gemeenschap", designer: "Onbekend", place: 9, points: 394 },
    { photo: ["assets/images/wagens/graafschap_1970.png"], year: 1970, title: "Spel", designer: "Onbekend", place: 1, points: 444 },
  ]
}
