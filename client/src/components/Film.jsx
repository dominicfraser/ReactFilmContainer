import React from 'react'

class Film extends React.Component {

  render() {
    return (
        <li className='film'>
          {this.props.title}
          <a href={this.props.showtimes}>Showtimes</a>
        </li>
      )
  }

}

export default Film