class GitHub {
  constructor() {
    this.client_id = 'c55a88741fbda0c2ea9e'
    this.client_secret = 'abaced66f142247540084d23791f53c8dfeb8f33'
  }
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    )
    const profile = await profileResponse.json()
    return {
      profile,
    }
  }
}
