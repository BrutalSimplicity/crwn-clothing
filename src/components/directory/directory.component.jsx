import React, { Component } from 'react'
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss'
import SECTIONS_DATA from './sections.data';

export default class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: SECTIONS_DATA
    };
  }

  render() {
    const { sections } = this.state;

    return (
      <div className='directory-menu'>
        {sections.map(({ id, ...others }) => (
          <MenuItem key={id} {...others} />
        ))}
      </div>
    )
  }
}
