import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  @Output() changingColor = new EventEmitter<boolean>();

  public selectColor() {
    this.changingColor.emit();
  }
}
