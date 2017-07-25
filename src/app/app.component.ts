import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '😊'
  val: string = ''
  items: Array<string> = []

  add(): void {
    this.items.push(this.val)
    this.val = ''
  }
}
