import { Component } from "react";
import './main-page.sass'
import subMainLogoWhite from '../../img/subMainLogoWhite.svg'
import subMainLogoBlack from '../../img/subMainLogoBlack.svg'
import Header from "../header/header";
import Button from "../button/button";
import Footer from "../footer/footer";
import { Link } from "react-router-dom";



const decr = "Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly  months do things on at. Situation recommend objection do intention" +
"so questions. As greatly removed calling pleased improve an. Last ask him cold feel" +
"met spot shy want. Children me laughing we prospect answered followed. At it went" +
"is song that held help face." 
const secondDescr = "Now residence dashwoods she excellent you. Shade being under his bed her, Much" +
"read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant" +
"horrible but confined day end marriage. Eagerness furniture set preserved far" +
"recommend. Did even but nor are most gave hope. Secure active living depend son" +
"repair day ladies now."


class MainPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: {}
        }
    }



    itemCoffe () {
        return (
            <>
                {this.props.data.map(item => (
                    <Link to={'/info'} key={item.id+1}><div key={item.id}  className="coffe__items_item">
                        <img src={item.image} alt={item.name} />
                        <div className="coffe__items_item_descr">{item.name}</div>
                        <div className="coffe__items_item_price">{item.price}</div>
                    </div></Link>
                ))}
            </>
            
        )
    }
    scroll(){
        window.scrollBy({
            top: 700,
            behavior: 'smooth'
        })
    }
    
    render() {
        return(
            <>
                <div className="main__page">
                    <div className="container">
                        <div className="main__header">
                            <Header />
                            <h1>Everything You Love About Coffee</h1>
                            <img className="main__page_submail_logo" src={subMainLogoWhite} alt="subMailLogo" />
                            <h2>We makes every day full of energy and taste</h2>
                            <h2>Want to try our beans?</h2>
                            <Button scroll={this.scroll} /> 
                        </div>     
                    </div>                                
                </div> 
                <div className="about">
                    <div className="container">
                        <div className="about__content">
                            <h2>About Us</h2>
                            <img className="main__page_submail_logo" src={subMainLogoBlack} alt="subMailLogo" />
                            <p id="decr">{decr}</p>
                            <p>{secondDescr}</p>
                        </div>
                        
                    </div>    
                </div>
                <div className="ourbest">
                    <div className="container">
                        <h2 className="main__page_subtitle" >Our best</h2>
                        <div className="ourbest__content">
                            {this.itemCoffe()}
                        </div>    
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
export default MainPage;