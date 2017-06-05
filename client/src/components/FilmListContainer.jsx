import React from 'react'

import FilmList from './FilmList.jsx'

class FilmListContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: [
        {id: 1, title: 'Film 1', showtimes: "https://www.duckduckgo.com"},
        {id: 2, title: 'Film 2', showtimes: "https://www.duckduckgo.com"},
        {id: 3, title: 'Film 3', showtimes: "https://www.duckduckgo.com"}
      ]
    }
  }

  render(){
    return (
        <div className='film-list-container'>
          <h1>UK Opening This Week</h1>
          <FilmList data={this.state.data} />
          <h4>See more opening this week >></h4>
          <button>Get Showtimes >></button>
        </div>
      )
  }

}

export default FilmListContainer