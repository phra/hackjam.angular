import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'sidebar',
    templateUrl: 'sidebar.template.html'
})
export class SideBarComponent {
    @Output() sidebarHasBeenToggled;
    @Output() searchTermChanged;
    
    navClosed: boolean = true;

    toggleSideBar(): void {
        this.navClosed = !this.navClosed;
    }

    search(searchTerm) {}     
}