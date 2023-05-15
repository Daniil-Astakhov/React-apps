import { useState, useEffect } from 'react';
import './FormPage.sass';

import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner'




const MainSignUpPage = () => {

    const [email, setEmail] = useState('1253t5413')
    const [password, setPassword] = useState('1243t4regfd')
    const [woo, setWoo] = useState('')
    const [isHovered, setIsHovered] = useState(true)

    function inputValueEmail(e) {
        setEmail(e.target.value);
        if (e.target.value.length <= 0) {
            setEmail(1);
          }
      }
    
      function inputValuePassword(e) {
        setPassword(e.target.value);
        if (e.target.value.length <= 0) {
          setEmail(10);
        }
      }
    
      useEffect(() => {
        console.log('логин: ' + email, 'пароль: ' + password);
        if (email === password) {
          setWoo('Вы восхитительны');
          setIsHovered(false)

        } else {
          setWoo('');
        }
      }, [email, password]);

      function nono(e) {
        console.log(e.target);
        let random = Math.floor(Math.random() * 1401) - 700;
        let random1 = Math.floor(Math.random() * 300) - 150;
        e.target.style.right = `${random}px`;
        e.target.style.bottom = `${random1}px`;
        if (email === password) {
            e.target.removeEventListener('onMouseEnter')
        }
      }
      function ees (e) {
        e.preventDefault();
      }




    return (
        <div>
            <Form>
                <Form.Text style={{margin: '0 auto'}} className="text-muted">
                Try logging into the admin panel.
                </Form.Text>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label></Form.Label>
                <Form.Control onChange={inputValueEmail} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else. Maybe.
                </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label></Form.Label>
                <Form.Control onChange={inputValuePassword} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button onClick={ees}  onMouseEnter={isHovered ? nono : null}  id='submit' variant="primary" type="submit">
                Submit
                </Button>
                <Form.Text id='woo' className='woo'>{woo}</Form.Text>
            </Form> 
        </div>
    )
};

export default MainSignUpPage;