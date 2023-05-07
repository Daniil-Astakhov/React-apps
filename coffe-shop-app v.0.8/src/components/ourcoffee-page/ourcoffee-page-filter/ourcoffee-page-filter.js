import './ourcoffee-page-filter.sass'
import { Component } from 'react'

class OutCoffeFilter extends Component {



    render() {
        return(
            <div className='filter'>
                <div className="filter__items">
                    <span>Lookiing for</span>
                    <input type="text" placeholder="start typing here..." />
                    <span>Or filter</span>
                    <button>Brazil</button>
                    <button>Kenya</button>
                    <button>Columbia</button>
                </div>    
            </div>
        )
    }

}


export default OutCoffeFilter;