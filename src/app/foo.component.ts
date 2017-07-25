import { Component } from '@angular/core'

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
})
export class FooComponent {
  val: string = ''
  items: Array<string> = []

  add(): void {
    this.items.push(this.val)
    this.val = ''
  }
}
