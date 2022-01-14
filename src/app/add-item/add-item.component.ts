import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent {
  public newItem:string = '';

 @Output() addNewItem = new EventEmitter<string>();
 @Output() hidingItems = new EventEmitter<void>();

  public addItem() {
    this.addNewItem.emit(this.newItem);
    this.newItem = '';
  }

  public hideItems() {
    this.hidingItems.emit();
  }
}
