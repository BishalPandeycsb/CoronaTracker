import React from 'react';
import {Cards,Charts,CountryPicker} from './components';
import styles from './App.module.css';

import {Fetchdata} from './Api';
import coronaImage from './images/corona.png';

class App extends React.Component{
    state={
        data:{},
        country:'',
    }
    async componentDidMount()
    {
        const fetchedData = await Fetchdata();

        this.setState({data: fetchedData});
    }
    handleCountryChange = async(country)=>{
        const fetchedData = await Fetchdata(country);
        this.setState({data:fetchedData,country: country});
    }
    render()
    {
        const {data,country} =this.state;
        return(
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="Covid-19" />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Charts data={data} country={country} />
            </div>
        );
    }
}

export default App;
