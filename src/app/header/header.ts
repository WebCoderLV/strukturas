import { Component, EventEmitter, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  @Output()
  audiHeadChange = new EventEmitter<void>();
  
  @Input()
   audiHead = signal<string[]>([]);

  pievinotAudiHead() {
  this.audiHeadChange.emit();
}

  @Output()
  bmwHeadChange = new EventEmitter<void>();


  @Input()
   bmwHead = signal<string[]>([]);

   pievinotBMWHead() {
    this.bmwHeadChange.emit();
}
}
