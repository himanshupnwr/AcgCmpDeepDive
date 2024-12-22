import { AfterViewInit, Component, ElementRef, OnInit, output, ViewChild, viewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
  imports: [ButtonComponent, ControlComponent, FormsModule],
})
export class NewTicketComponent implements OnInit, AfterViewInit {

  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  //private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  
  add = output<{ title: string; text: string }>();
  
  
  ngOnInit() {
    console.log('ONINIT');
    console.log(this.form?.nativeElement);
  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
    console.log(this.form?.nativeElement);
  }

  onSubmit(title: string, ticketText: String) {
    console.log(title);
    console.log(ticketText);

    this.form?.nativeElement.reset();
  }
}