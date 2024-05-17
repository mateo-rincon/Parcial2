import { Component, OnInit } from '@angular/core';
import { PinguinoService } from '../pinguino.service';
import { Pinguino } from '../pinguino';

@Component({
  selector: 'app-pinguino-list',
  templateUrl: './pinguino-list.component.html',
  styleUrls: ['./pinguino-list.component.css']
})
export class PinguinoListComponent implements OnInit {

  constructor(private pinguinoService:PinguinoService ) { }

  pinguinos: Array<Pinguino>=[]
  selected: Boolean = false;
  selectedPinguino!: Pinguino;

  getPinguinos():void{
    this.pinguinoService.getPinguinos().subscribe((pinguinos) => {
      this.pinguinos = pinguinos; });
  }

  showDetail(pinguino: any) {
    this.selectedPinguino = pinguino;
  }

  onSelected(pinguino: Pinguino): void {
    this.selected = true;
    this.selectedPinguino = pinguino;
    console.log(pinguino);
  }

  

  ngOnInit() {
    this.getPinguinos();
  }



}
