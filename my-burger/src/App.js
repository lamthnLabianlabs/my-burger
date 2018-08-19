import React, { Component } from 'react';
// import style from './App.css';
import Layout from './component/layout/Layout'
import Burger from './containers/BurgerBuilder/BurgerBuilder'
class App extends Component {
  render() {
    return (
      <div >
          <Layout>
            <Burger/>
          </Layout>
        </div>
    );
  }
}

export default App;
