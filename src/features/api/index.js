import fetch from './sagas/fetch'
import ShowJoke from './components/ShowJoke'
import * as actions from './actions'

export default {
  actions,
  components: {
    ShowJoke
  },
  sagas: [
    fetch
  ]
}
