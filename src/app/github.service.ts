import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'

@Injectable()
export class GithubService {
  private searchUrl = 'https://api.github.com/search/users?q='
  private userUrl = 'https://api.github.com/users/'

  constructor(private http: Http) {}

  formatParams(place: string, language: string) {
    if (place && !language) return `location:${place}`
    if (!place && language) return `language:${language}`
    return `location:${place}+language:${language}`
  }

  getUsers(place: string, language: string) {
    const url = `${this.searchUrl}${this.formatParams(place, language)}`
    return this.http
      .get(url)
      .map(response => response.json().items || {})
      .catch(this.handleError)
  }

  getUserDetails(username: string) {
    if (!username) return

    return this.http
      .get(`${this.userUrl}${username}`)
      .map(response => response.json())
      .catch(this.handleError)
  }

  private handleError(error: any) {
    console.error('An error occurred', error)
    return Observable.throw(error.message || error)
  }
}
