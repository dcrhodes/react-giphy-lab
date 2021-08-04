import { Component } from 'react';
import Giphy from './Component/Giphy';

import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      baseURL: 'http://api.giphy.com/v1/gifs/search',
      api_key: 'apikey=' + process.env.REACT_APP_APIKEY,
      query: '&q=',
      giph: '',
      limit: '&limit-20',
      searchUrl: '',
    }
  }

  handleSubmit = (event)=>{
    event.preventDefault()
    const url = `http://api.giphy.com/v1/gifs/search&q=${process.env.REACT_APP_APIKEY}&t=${event.target}`
    fetch(url)
      .then(response=> response.json())
      .then(data=> {
        this.setState({
          movie: data
        })
      })
      .catch((err) => console.log(err))
    }

render(){
  return (
    <div className="App">
      <Giphy/>
    </div>
  );
}
}

export default App;
