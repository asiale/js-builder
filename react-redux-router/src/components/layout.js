import React from 'react';
import HeaderBar from './headerBar';
import { Header, HeaderBar } from './header';


class Layout extends Component {
  render () {
    return (

      <div className='layout-grid'>
      <Header/>
      {HeaderBar/}
      {this.props.children}

    )
  }
}
export default Layout;
