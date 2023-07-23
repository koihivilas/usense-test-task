import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'usense-test-task'
  password: string = ''
  strength: string = ''
  colors: string[] = ['gray', 'gray', 'gray']

  onInput(event: any) {
    this.password = event.target.value
    this.checkPasswordStrength()
    this.updateColors()
  }

  checkPasswordStrength() {
    let hasLetters = /[a-zA-Z]/.test(this.password)
    let hasDigits = /\d/.test(this.password)
    let hasSymbols = /\W/.test(this.password)

    if (this.password.length == 0) {
      this.strength = ''
    } else if (this.password.length < 8) {
      this.strength = 'short'
    } else if (hasLetters && hasDigits && hasSymbols) {
      this.strength = 'strong'
    } else if ((hasLetters && hasSymbols) || (hasLetters && hasDigits) || (hasDigits && hasSymbols)) {
      this.strength = 'medium'
    } else {
      this.strength = 'easy'
    }
  }

  updateColors() {
    switch (this.strength) {
      case 'short':
        this.colors = ['red', 'red', 'red']
        break;
      case 'easy':
        this.colors = ['red', 'gray', 'gray']
        break;
      case 'medium':
        this.colors = ['yellow', 'yellow', 'gray']
        break;
      case 'strong':
        this.colors = ['green', 'green', 'green']
        break;
      default:
        this.colors = ['gray', 'gray', 'gray']
        break;
    }
  }
}
