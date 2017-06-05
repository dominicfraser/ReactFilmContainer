import React from 'react'

import Film from './Film.jsx'

class FilmList extends React.Component {

  render(){

    const filmNodes = this.props.data.map((film) => {
      return (
          <Film key={film.id} title={film.title} showtimes={film.showtimes}>
          </Film>
        )
    })

    return (
        <ul className="film-list">
          {filmNodes}
        </ul>
      )

  }
}

export default FilmList