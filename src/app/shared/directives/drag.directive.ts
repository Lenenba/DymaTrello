import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appDrag]'
})
export class DragDirective {

  @HostBinding('draggable') public draggable = true;
  @HostBinding('class.over') public isIn = false;
  @Input('index') public index!:number;
  @Output() public switch: EventEmitter<{ srcIndex:number, dstIbdex:number }> = new EventEmitter()

  @HostListener('dragstart', ['$event']) public dragStart($event: any): void {
    $event.dataTransfer.setData('srcIndex', this.index  )
  }
  @HostListener('dragenter') public dragEnter(){
    this.isIn = true;
  }

  @HostListener('dragleave') public dragLeave(){
    this.isIn = false;
  }

  @HostListener('dragover', ['$event']) public dragOver($event: any): void {
    $event.preventDefault();
  }
  @HostListener('drop', ['$event']) public drop($event: any): void {
    this.isIn = false;
    this.switch.emit({
      srcIndex: $event.dataTransfer.getData('srcIndex'),
      dstIbdex: this.index})
  }

  constructor() { }

}
