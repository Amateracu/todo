import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  @Input() itemName = '';
  public itemChanging = false;
  public newName: string = '';

  @Output() delete = new EventEmitter<void>();
  public deleteItem() {
    this.delete.emit();
  }

  @Output() changed = new EventEmitter<string>();
  public changeItem() {
    this.changed.emit(this.newName);
  }

  public changingItem() {
    this.itemChanging = !this.itemChanging;
    this.newName = this.itemName

  }
}
