import React from "react";
import Header from "./Component/Header.jsx";
import Dashboard from "./Component/Dashboard";
import { Cards, Charts, CountryPicker } from './Component'
import { fetchData } from './api'
import styles from './App.module.css'

class App extends React.Component {

  state = {
    data: {}
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    console.log(fetchedData)
    this.setState({
      data: fetchedData
    })
  }

  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <Charts />
        <CountryPicker />
      </div>
    );
  }
}

export default App;
