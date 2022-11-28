import { Component, Input } from '@angular/core';

@Component({
  selector: 'graafschap-tile',
  templateUrl: './graafschap-tile.component.html',
  styleUrls: ['./graafschap-tile.component.css']
})
export class GraafschapTileComponent {
  @Input() icon = '';
}
