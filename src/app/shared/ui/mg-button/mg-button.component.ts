import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'mg-button',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './mg-button.component.html',
  styleUrl: './mg-button.component.scss'
})
export class MgButtonComponent {

  label = input.required<string>();

  loading = input(false);

  disabled = input(false);

  expand = input<'block' | 'full' | undefined>('block');

  clicked = output<void>();

  onClick() {

    if (this.loading() || this.disabled()) {
      return;
    }

    this.clicked.emit();

  }

}