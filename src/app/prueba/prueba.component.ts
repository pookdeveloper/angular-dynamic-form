import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent implements OnChanges {

  @Input() datoPrueba: any;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('===> changes[].previousValue ', changes['datoPrueba'].previousValue);
    console.log('===> changes[].currentValue ', changes['datoPrueba'].currentValue);
  }

}
