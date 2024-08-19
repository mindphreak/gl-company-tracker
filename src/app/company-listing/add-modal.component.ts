import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { DialogService, DialogRef } from '@ngneat/dialog';

interface Data {
  title: string;
}

@Component({
  templateUrl: './add-modal.component.html',
  standalone: true,
  imports: [ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelloWorldComponent {
  ref: DialogRef<Data, boolean> = inject(DialogRef);
  name = new FormControl('');
  exchange = new FormControl('');
  ticker = new FormControl('');
  isin = new FormControl('');
  website = new FormControl('');

  get title() {
    if (!this.ref.data) return 'Hello world';
    return this.ref.data.title;
  }
}
