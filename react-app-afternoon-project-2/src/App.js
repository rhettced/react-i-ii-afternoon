
import React, { Component } from 'react';
import './App.css';
import NameCard from './Components/NameCard';
import FromTitleEmployee from './Components/FromTitleEmployee'
import FavoriteMovies from './Components/FavoriteMovies'
import data from './data'
import FooterButtons from './Components/FooterButtons'

class App extends Component{
constructor(){
  super();
  this.state = {
      data: data,
      index: 0
  };

  
}

  nextButton = () =>{
    if(this.state.index +1 === this.state.data.length){
      this.setState({index: 0});
    } else{
    this.setState({index: this.state.index +1});
  }
}
  previousButton = () =>{
    if(this.state.index === 0){
      this.setState({index: this.state.data.length-1});
    } else{
    this.setState({index: this.state.index -1});
  }
}

deleteButton =  () => {
   this.state.data.splice(this.state.index,1);
    this.setState ( {data: this.state.data} );
    this.setState({index: this.state.index -1});
}

  render(){
   //console.log(this.state.data);
   console.log(this.state.index)

    return (
      <div className="App">
        <header>Home</header>
        <main className='background'>
          <div className='cardContainer'>
            <div className='indexCounter'>{this.state.index+1} / {this.state.data.length} </div>
            <NameCard dataForNames={this.state.data[this.state.index]}/>
            <FromTitleEmployee dataForEmployee={this.state.data[this.state.index]}/>
            <FavoriteMovies movieData={this.state.data[this.state.index]}/>
            <FooterButtons next={this.nextButton}
                           previous={this.previousButton}
                           delete={this.deleteButton}/>
          </div>
        </main>
      </div>
    );
  }
}

export default App;