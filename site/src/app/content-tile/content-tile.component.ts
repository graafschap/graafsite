import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-tile',
  templateUrl: './content-tile.component.html',
  styleUrls: ['./content-tile.component.css']
})
export class ContentTileComponent implements OnInit {
  @Input()
  get name(): string { return this._name; }
  set name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }
  private _name = '';

  @Input()
  get icon(): string { return this._fa_icon; }
  set icon(icon: string) {
    this._fa_icon = (icon && icon.trim()) || 'fa-triangle-exclamation';
  }  
  private _fa_icon: string ="fa-triangle-exclamation"; 
  
  @Input()
  get color(): string { return this._color; }
  set color(color: string){
    this._color = (color && color.trim()) || 'accent2';
  }
  private _color: string="accent2";

  constructor() { }

  ngOnInit(): void {
  }

}
