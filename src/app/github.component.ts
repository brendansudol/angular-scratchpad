import { Component } from '@angular/core'

import { GithubService } from './github.service'

@Component({
  selector: 'app-search-users',
  templateUrl: './github.component.html',
})
export class GithubComponent {
  error: string = ''
  results: any[] = []
  selected: boolean = false
  user: any

  constructor(private searchService: GithubService) {}

  search(place: string, language: string) {
    this.selected = false
    this.error = ''

    if (place || language) {
      this.searchService.getUsers(place, language).subscribe(
        data => (this.results = data),
        error => {
          this.results = []
          this.error = 'Sorry! No users found :('
          console.error(error)
        },
      )
    }
  }

  getDetails(username: string) {
    this.searchService.getUserDetails(username).subscribe(
      data => {
        this.user = data
        this.selected = true
      },
      error => {
        this.selected = false
        console.error(error)
      },
    )
  }
}
