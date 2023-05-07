import './app.sass';
import item1 from '../../img/item1.png';
import item2 from '../../img/item2.png';
import item3 from '../../img/item3.png';
import { BrowserRouter as Router} from "react-router-dom";
import { Routes ,Route } from 'react-router-dom';
import MainPage from '../main-page/main-page';
import OurCoffeePage from '../ourcoffee-page/ourcoffee-page'; 
import ForyourPage from '../foryour-page/foryour-page';
import { Component } from 'react';
import InfoPage from '../info-page/info-page';



class App extends Component {   
    constructor(props){
        super(props);
        this.state = {
            mainCoffeItems: [
                {
                    id: 1,
                    image: item1,
                    name: 'Solimo Coffee Beans 2 kg',
                    price: '10.73$'
                },
                {
                    id: 2,
                    image: item2,
                    name: 'Presto Coffee Beans 1 kg',
                    price: '15.99$'
                },
                {
                    id: 3,
                    image: item3,
                    name: 'AROMISTICO Coffee 1 kg',
                    price: '6.99$'
                }
            ],
            allCoffeItems: [
                {
                    id: 3,
                    image: item3,
                    contry: 'Brazil',
                    name: 'AROMISTICO Coffee 1 kg',
                    price: '6.99$'
                },
                {
                    id: 4,
                    image: item3,
                    contry: 'Kenya',
                    name: 'AROMISTICO Coffee 1 kg',
                    price: '6.99$'
                },
                {
                    id: 5,
                    image: item3,
                    contry: 'Columbia',
                    name: 'AROMISTICO Coffee 1 kg',
                    price: '6.99$'
                },
                {
                    id: 6,
                    image: item3,
                    contry: 'Brazil',
                    name: 'AROMISTICO Coffee 1 kg',
                    price: '6.99$'
                },
                {
                    id: 7,
                    image: item3,
                    contry: 'Brazil',
                    name: 'AROMISTICO Coffee 1 kg',
                    price: '6.99$'
                },
                {
                    id: 8,
                    image: item3,
                    contry: 'Brazil',
                    name: 'AROMISTICO Coffee 1 kg',
                    price: '6.99$'
                },
                
            ],
            targetData: 1 
        };
        
    }




    


    
    render() {
        return (
            <Router>
                <div className="app">
                    <Routes>
                        <Route exact path="/"  element={<MainPage  data={this.state.mainCoffeItems} />} />
                        <Route path="/our-coffee" element={<OurCoffeePage data={this.state.allCoffeItems} />} />
                        <Route path="/foryour" element={<ForyourPage data={this.state.allCoffeItems} />} />
                        <Route path="/info" element={<InfoPage />} />
                    </Routes>
                </div>
            </Router> 
          );
    }
  
}

export default App;
