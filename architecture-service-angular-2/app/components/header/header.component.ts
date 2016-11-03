import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'header-component',
  templateUrl: 'header.template.html'
})

export class HeaderComponent {
  @Input() title: string;
}
