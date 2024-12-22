import { AfterContentInit, afterNextRender, afterRender, Component, contentChild, ElementRef, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent implements AfterContentInit {

  // using host binding - its not preferred now, better to use host property on component decorator
  // @HostBinding('class') className = 'control';

  // can listen to events on the host element using host listener
  // @HostListener('click') onClick() {
  //   console.log('Clicked!');
  // }

  label = input.required<string>();

  //accessing host elements programtically of this component
  private el = inject(ElementRef);

  //to get the projected element from new-ticket
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');
  
  constructor() {
    afterRender(() => {
      console.log('afterRender');
    });

    afterNextRender(() => {
      console.log('afterNextRender');
    });
  }

  ngAfterContentInit() {
    // ...
  }

  onClick() {
    console.log('Clicked!');
    console.log(this.el);
    console.log(this.control());
  }
}
