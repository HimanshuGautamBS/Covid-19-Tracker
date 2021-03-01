import React, { Component } from 'react'
import {Cards ,Chart ,CountryPicker} from './components'
import styles from "./App.module.css";
import {fetchdata} from './api';
export default class App extends Component {
    
state ={
    data:{},
}

async componentDidMount(){
 const fetchedData = await fetchdata();
 this.setState({data:fetchedData});
}

render() {
    const {data} =this.state;
 return (
  <div className={styles.container}>
   <Cards data={data} />
   <CountryPicker/>
   <Chart />
  </div>
 ) 
 }
 }
