import Index from '../views/Index/index.svelte'
import Redirect from '../views/Redirect.svelte'

export default {
  '/index': Index,
  '*': Redirect,
}
