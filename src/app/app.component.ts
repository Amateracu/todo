import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public isShowItems = true;
  public items: string[] = ['dfgdfg','dfgfdgfdg','dfgdfgdf'];
  public color = false;

  public deleteItem(index: number) {
    this.items.splice(index, 1);
  }

  public changeItem(newName: string, index: number) {
    this.items[index] = newName;
  }

  public addItem(newItem: string) {
    this.items.push(newItem);
  }

  public hideItems() {
    this.isShowItems = !this.isShowItems;
  }

  selectColor() {
    this.color = !this.color
  }
}
