import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '../../mocks/categories';

@Component({
  moduleId: module.id,
  selector: 'menu',
  templateUrl: 'menu.template.html'
})

export class MenuComponent {
  @Input() categories: Category[];
  @Output() changeCategory: EventEmitter<Category> = new EventEmitter();
}
