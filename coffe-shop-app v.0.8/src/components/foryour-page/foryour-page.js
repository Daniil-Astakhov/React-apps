import './foryour-page.sass'
import { Component } from 'react'
import subMainLogoBlack from '../../img/subMainLogoBlack.svg'
import Header from "../header/header";
import Footer from "../footer/footer";
import { Link } from 'react-router-dom';
import forYouSubMainBg from '../../img/foryou-page/forYouSubMainBg.png'


const descr1 = 'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.'
const descr2 = 'Afraid at highly months do things on at. Situation recommend objection do intention so questions. '
const descr3 = 'As greatly removed calling pleased improve an. Last ask him cold feel'
const descr4 = 'met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.'

class ForyourPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: -1
        }
    };


    getId(targetId){
            console.log(targetId)
        }

    targetCofee(){
        return(
            <div className="about__content">
                <div className="about__content-img">
                    <img src={forYouSubMainBg} alt="submainOurcoffe" />
                </div>
                <div className="about__content-descr">
                    <h2>About our beans</h2>
                    <img className="main__page_submail_logo" src={subMainLogoBlack} alt="subMailLogo" />
                    <p>{descr1}</p>
                    <p>{descr2}</p>
                    <p>{descr3}</p>
                    <p>{descr4}</p> 
                </div>
            </div> 
        )
    }

    itemCoffe () {

        return (
            <>
                {this.props.data.map(item => (
                    <Link to={'/info'} key={item.id+1}><div key={item.id} onClick={this.getId.bind(this, item.id)} className="coffe__items_item">
                        <img src={item.image} alt={item.name} />
                        <div className="coffe__items_item_descr">{item.name}</div>
                        <div className="over">
                            <div className="coffe__items_item_contry">{item.contry}</div>
                            <div className="coffe__items_item_price">{item.price}</div>
                        </div>    
                    </div></Link>
                ))}
            </>    
        ) 
    }


    render() {
        return (
            <>
                <div className="foryou__header">
                    <div className="container">
                        <div className="ourcoffe__header-items">
                            <Header />
                            <h2>For your pleasure</h2> 
                        </div>     
                    </div>                                
                </div> 
                <div className="ourcoffe__about">
                    <div className="container">
                        {this.targetCofee()}
                    </div>    
                </div>
                <div className="foryou__items">
                    <div className="about__items-item">
                        {this.itemCoffe()}
                    </div>         
                </div>
                <div className="footer">
                    <div className="container">
                        <Footer />
                    </div>
                </div>
            </>
                      
        )
    }


}

export default ForyourPage;