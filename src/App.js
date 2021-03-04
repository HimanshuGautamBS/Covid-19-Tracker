import React, { Component } from 'react'
import {Cards ,Chart ,CountryPicker} from './components'
import styles from "./App.module.css";
import {fetchdata} from './api';
import coronaImage from "./images/image.png";
export default class App extends Component {
    
state ={
    data:{},
    country:'',
}

async componentDidMount(){
 const fetchedData = await fetchdata();
 this.setState({data:fetchedData});
}

handleCountryChange = async (country) =>{
    const fetchedData = await fetchdata(country);
    console.log(fetchedData);
    this.setState({data:fetchedData, country:country});
}

render() {
    const {data , country} =this.state;
 return (
  <div className={styles.container}>
   <img className={styles.image} src={coronaImage} alt='COVID-19' />
   <Cards data={data} />
   <CountryPicker handleCountryChange={this.handleCountryChange}/>
   <Chart data={data} country={country} />
  </div>
 ) 
 }
 }
