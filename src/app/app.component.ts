import { Component } from '@angular/core';
import { List } from './shared/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public listLabel = '';
  public itemContent = '';
  public lists: List[] = [
    {
      label: 'To do',
      items:[
        {content: 'First todo'},
        {content: 'Second todo'},
        {content: 'third todo'},
      ]
    }
  ];


  public addList(): void {
    if(this.listLabel){
      this.lists.push({
        label: this.listLabel,
        items: []
      })
    }
    this.listLabel = '';
  }


  public addItem(list: List): void {
    if(this.itemContent){
     list.items.push({ content: this.itemContent});
    }
    this.itemContent = '';
  }

  public switchIten($event:{ srcIndex:number, dstIbdex:number }): void{
    const tmp = this.lists[0].items[$event.srcIndex]

    this.lists[0].items[$event.srcIndex] = this.lists[0].items[$event.dstIbdex]
    this.lists[0].items[$event.dstIbdex] = tmp
  }
}
