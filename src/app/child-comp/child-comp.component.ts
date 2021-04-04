import { Component,
          OnInit ,
          Input,
          SimpleChanges,
          OnChanges,
          DoCheck,
          AfterContentInit,
          AfterViewChecked,
          AfterViewInit
        } from '@angular/core';

@Component({
  selector: 'child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit,
              OnChanges,
              DoCheck,
              AfterContentInit,
              AfterViewChecked,
              AfterViewInit {

  @Input() name: string;
  count: number = 1;

  constructor() { this.log('constructor'); }

  ngOnInit() { this.log('onInit'); }
  ngOnChanges() { this.log('onChanges'); }
  ngDoCheck() { this.log('doCheck'); }
  ngAfterViewInit() { this.log('afterViewInit'); }
  ngAfterViewChecked() { this.log('afterViewChecked'); }
  ngAfterContentInit() { this.log('afterContentInit'); }

  private log(msg: string) {
    console.log(msg);
  }

}
