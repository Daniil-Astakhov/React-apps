import { Component } from "react";
import './info-page.sass'
import Header from "../header/header";
import Footer from "../footer/footer";
import subMainLogoBlack from '../../img/subMainLogoBlack.svg'
import forYouSubMainBg from '../../img/foryou-page/forYouSubMainBg.png'




class InfoPage extends Component {
    constructor(props){
        super(props);
        }
 
    render() {

        return(
            <>
                <div className="info__header">
                    <div className="container">
                        <div className="info__header-items">
                            <Header />
                            <h2>Our Coffee</h2> 
                        </div>     
                    </div>                                
                </div> 
                <div className="info__about">
                    <div className="container">
                        <div className="info__content-img">
                            <img src={forYouSubMainBg} alt="submainOurcoffe" />
                        </div>
                    <div className="info__content-descr">
                        <h2>About it</h2>
                        <img className="main__page_submail_logo" src={subMainLogoBlack} alt="subMailLogo" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem reprehenderit aspernatur at, vero iure eos voluptate voluptatibus aliquid harum maiores vel eaque libero praesentium cupiditate dolor ut, ducimus hic? Voluptas!</p>
            
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


export default InfoPage;