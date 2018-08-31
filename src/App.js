import React, {Component} from 'react'
import Form from './components/Form'
import Results from './components/Results'
import appStore from './stores/appStore'
import {view} from 'react-easy-state'
import './styles/App.css'


// const App = () => {
//   return (
//     <div className="App">
//       <Form />
//       { appStore.current && appStore.forecast ? <Results /> : '' }
//       { appStore.loading ? appStore.loadingText : '' }
//     </div>
//   )
// }

class App extends Component {
  constructor(){
    super()
    appStore.fetchCurrent({city: 'Berlin'})
    appStore.fetchForecast({city: 'Berlin'})
  }
  render() {
    return (
      <div className="App">
        <Form />
        { appStore.current && appStore.forecast ? <Results /> : '' }
        { appStore.loading ? appStore.loadingText : '' }
      </div>
    )
  }
}

export default view(App);
