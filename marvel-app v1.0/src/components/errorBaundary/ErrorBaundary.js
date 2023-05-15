import { useState, useEffect } from 'react';

const ErrorBaundary = (props) => {
    const [error, setError] = useState(false)

    useEffect(() => {
        const handleError = (error, info) => {
            console.log(error, info);
            setError(true)
        }
    }, []);
    
    if(error){
        return <h2>HYDRA is currently attacking this page!</h2>
    }
    return props.children;
}

export default ErrorBaundary;