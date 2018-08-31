import React, {Component} from 'react'
import appStore from './stores/appStore'
import { view } from 'react-easy-state'
import Form from './Form'
import Results from './Results'
import './App.css';


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
    appStore.fetchCurrent({city: 'Sombor'})
    appStore.fetchForecast({city: 'Sombor'})
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
