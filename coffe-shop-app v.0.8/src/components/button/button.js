import './button.sass'
import { Component } from 'react'


class Button extends Component {
    constructor(props){
        super(props);
    }


    render() {
        return(
            <>
                <button onClick={this.props.scroll}>More</button>
            </>
        )
    }
}

export default Button;