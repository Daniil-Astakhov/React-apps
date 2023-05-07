import { Component } from "react";
import './ourcoffee-page.sass'
import subMainLogoBlack from '../../img/subMainLogoBlack.svg'
import Header from "../header/header";
import Footer from "../footer/footer";
import OutCoffeFilter from "./ourcoffee-page-filter/ourcoffee-page-filter";
import submainOurcoffe from '../../img/ourcoffe-page/submainOurcoffe.png'
import { Link } from 'react-router-dom'
const decr = "Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible." 
const decr2 = "Afraid at highly months do things on at. Situation recommend objection do intention"+
"so questions."
const decr3 = 'As greatly removed calling pleased improve an. Last ask him cold feel'
const decr4 = 'met spot shy want. Children me laughing we prospect answered followed. At it went' +
'is song that held help face.'



class OurCoffeePage extends Component {
    constructor(props){
        super(props);
    }



    itemCoffe () {

            return (
                <>
                    {this.props.data.map(item => (
                        <Link key={item.id+1} to={"/info"}><div key={item.id}  className="coffe__items_item">
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
    
    targetCofee(){
        return(
            <div className="about__content">
                <div className="about__content-img">
                    <img src={submainOurcoffe} alt="submainOurcoffe" />
                </div>
                <div className="about__content-descr">
                    <h2>About our beans</h2>
                    <img className="main__page_submail_logo" src={subMainLogoBlack} alt="subMailLogo" />
                    <p>{decr}</p>
                    <p>{decr2}</p>
                    <p>{decr3}</p>
                    <p>{decr4}</p> 
                </div>
            </div> 
        )
    }
    render() {

        return(
            <>
                <div className="ourcoffe__header">
                    <div className="container">
                        <div className="ourcoffe__header-items">
                            <Header />
                            <h2>Our Coffee</h2> 
                        </div>     
                    </div>                                
                </div> 
                <div className="ourcoffe__about">
                    <div className="container">
                        {this.targetCofee()}
                    </div>    
                </div>

                <div className="about__items">
                    <OutCoffeFilter />
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


export default OurCoffeePage;