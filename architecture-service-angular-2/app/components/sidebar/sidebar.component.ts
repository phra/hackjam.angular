import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sidebar',
  templateUrl: 'sidebar.template.html'
})

export class SidebarComponent {
  private navClosed: Boolean = true;
  private searchTerm: string = "";
  @Output() search: EventEmitter<string> = new EventEmitter();

  toggleSideBar(): void {
    this.navClosed = !this.navClosed;
  }
}
