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
    },
    {
      label: 'To do Done',
      items:[
        {content: 'Done todo 1'},
        {content: 'Done todo 2'},
        {content: 'Done  todo 3'},
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

  public switchIten($event:{
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
  }): void{
    [
      this.lists[$event.src.listIndex].items[$event.src.itemIndex],
      this.lists[$event.dst.listIndex].items[$event.dst.itemIndex]
    ] = [
      this.lists[$event.dst.listIndex].items[$event.dst.itemIndex],
      this.lists[$event.src.listIndex].items[$event.src.itemIndex]
    ];
  }
}
