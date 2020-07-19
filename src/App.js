import React from 'react';
import Main from './components/MainComponent'
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';

const store = ConfigureStore();
class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
      <Router>
        <div className="App">
          <Main />
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
