import Video from './components/video/Video'
import React from 'react'
import Header from './components/Header'
import Route from './components/utility/Route'
import SearchWiki from './components/SearchWiki'
import Translate from './components/Translate'

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Route path="/">
          <Video />
        </Route>
        <Route path="/wiki">
          <SearchWiki/>
        </Route>      
     
        <Route path="/translate">
          <Translate/>
        </Route>

      </div>
    )
  }
}

export default App