import { Component } from 'react';

class ErrorBaundary extends Component{
    state = {
        error: false
    }

    componentDidCatch(error, info) {
        console.log(error, info);

        this.setState({
            error: true
        })
    }

    render(){
        if(this.state.error){
            return <h2>HYDRA is currently attacking this page!</h2>
        }
        return this.props.children;
    }
}

export default ErrorBaundary;