import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appDrag]'
})
export class DragDirective {

  @HostBinding('draggable') public draggable = true;
  @HostBinding('class.over') public isIn = false;
  @Input('itemIndex') public itemIndex!:number;
  @Input('listIndex') public listIndex!:number;
  @Output() public switch: EventEmitter<
    {
      src:
      {
        itemIndex:number,
        listIndex:number,
      },
      dst:
      {
        itemIndex:number,
        listIndex:number,
      },
    }> = new EventEmitter()

  @HostListener('dragstart', ['$event']) public dragStart($event: any): void {
    $event.dataTransfer.setData('itemIndex', this.itemIndex  )
    $event.dataTransfer.setData('listIndex', this.listIndex  )
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
      src:
      {
        itemIndex:$event.dataTransfer.getData('itemIndex'),
        listIndex:$event.dataTransfer.getData('listIndex'),
      },
      dst:
      {
        itemIndex:this.itemIndex,
        listIndex:this.listIndex,
      }
    })
  }

  constructor() { }

}
