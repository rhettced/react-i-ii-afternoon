import React, {Component} from 'react';

class FavoriteMovies extends Component{

    render(){

        console.log(this.props.movieData.favoriteMovies)
        // let movies = this.props.movieData.favoriteMovies.map({(el,ind) =>
        //     return <p> key={}ind </p> });

        return(
            <div className='movies'>
                <h3>Favorite Movies</h3>
                <p>1. {this.props.movieData.favoriteMovies[0]}</p>
                <p>2. {this.props.movieData.favoriteMovies[1]}</p>
                <p>3. {this.props.movieData.favoriteMovies[2]}</p>
            </div>
        );
    }

}

export default FavoriteMovies;