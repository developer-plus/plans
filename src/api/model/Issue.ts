export interface Issue {
  title: string
  html_url: string
  user: User
}

export interface User {
  login: string
  avatar: string
}
