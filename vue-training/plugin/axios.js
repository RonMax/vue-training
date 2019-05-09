import Axios from 'axios'
// axios串接位置(API)
export const get = () => {
  return Axios
    .get('http://jsonplaceholder.typicode.com/posts')
    .then(response => {
    // JSON responses are automatically parsed.
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
}
