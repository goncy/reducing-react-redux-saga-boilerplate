import fetch from './sagas/fetch'
import PeopleInfo from './components/PeopleInfo'
import * as actions from './actions'

export default {
  actions,
  components: {
    PeopleInfo
  },
  sagas: [
    fetch
  ]
}
