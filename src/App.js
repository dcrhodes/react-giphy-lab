import './App.css';
import {Component} from 'react'


class App extends Component {  
  constructor (props) {
    super(props)
    this.state = {
      
    }
  }
   
  handleSubmit = (event)=> {
    event.preventDefault()

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_APIKEY}&q=${event.target.gifTitle.value}&offset=0`


    fetch(url)
    .then(response =>{
      return response.json()
    }).then(json => 
      //console.log(json.data))
      this.setState({
      gif: json
    }),
    err => console.log(err))
  }
  render(){
    return (
      <div className='App'>
        <form onSubmit={this.handleSubmit}>
          <input
            id='gifTitle'
            type='text'
          />
          <input
            type='submit'
            value='Search'
          />
        </form>
        <div>
            {this.state.gif?.data.map(img=>{
              // need return() to render results
                return(
                    <div>
                        <img src={img.images.downsized.url} alt="Alt text"></img>
                    </div>
                )
            })}
        </div>        
      </div>
    );
  };
}

export default App;