import { Component, Input, OnInit, input } from '@angular/core';
import { Pinguino } from '../pinguino';

@Component({
  selector: 'app-pinguino-detail',
  templateUrl: './pinguino-detail.component.html',
  styleUrls: ['./pinguino-detail.component.css']
})
export class PinguinoDetailComponent implements OnInit {

  selectedPinguino!:Pinguino;
  selected=false;

  @Input() pinguinosDetail!: Pinguino;

  constructor() { }

  onSelected(pinguino:Pinguino):void{
    this.selected=true;
    this.selectedPinguino=pinguino;
  }

  ngOnInit() {
  }

}
