import Index from '../views/index.svelte'
import Redirect from '../views/Redirect.svelte'

export default {
  '/index': Index,
  '*': Redirect,
}
