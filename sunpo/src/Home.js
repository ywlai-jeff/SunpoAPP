import React from 'react';
import images from './images/food1.jpg'

class Home extends React.Component{
    constructor(props) {
        super(props);
  
        // this.state = {
         
        // }

      }

      render(){
          return(
              <div>
                  {/* <img src={images}></img> */}

                {/* copy from template: https://colorlib.com/wp/template/logis/?v=69e1aafeccc5 */}
                  <div className="site-blocks-cover overlay">
                    <div className="container">
                         <div className="row align-items-center justify-content-center text-center">

                             <div className="col-md-8" data-aos="fade-up" data-aos-delay="400">
            
                                <h1 className="text-white font-weight-light text-uppercase font-weight-bold" data-aos="fade-up">SUN PO APP</h1>
                                <p className="mb-5" data-aos="fade-up" data-aos-delay="100">員工專用</p>
                                {/* <p data-aos="fade-up" data-aos-delay="200"><a href="https://free-template.co" class="btn btn-primary py-3 px-5 text-white">Get Started!</a></p> */}

                            </div>
                        </div>
                    </div>
                </div> 
                {/* copy from template: https://colorlib.com/wp/template/logis/?v=69e1aafeccc5  END*/}


              </div>
          )
      }
}

export default Home;