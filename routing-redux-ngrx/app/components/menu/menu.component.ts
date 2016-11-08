import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'bs-menu',
    templateUrl: 'menu.template.html'
})
export class MenuComponent {
    @Input() categories;

    @Input() changeCategory: Function;
}