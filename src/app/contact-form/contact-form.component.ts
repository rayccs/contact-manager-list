import { Component } from '@angular/core';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent {
  contact = { name: '', email: '' };

  constructor(private contactService: ContactService, private router: Router) {}

  addContact() {
    this.contactService.addContact(this.contact).subscribe(() => {
      this.router.navigate(['/contacts']);
    });
  }
}
