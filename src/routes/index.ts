import Index from '../views/Index.svelte'
import Redirect from '../views/Redirect.svelte'

export default {
  '/index': Index,
  '*': Redirect,
}
