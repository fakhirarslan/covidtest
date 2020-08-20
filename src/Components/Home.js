import React from 'react';
import { Carousel, Card } from 'antd';

const contentStyle = {
   height: '523px',
   color: '#fff',
   lineHeight: '160px',
   textAlign: 'center',
   background: '#364d79',
   margin: 'auto',
   width: '100%'
};

class Home extends React.Component {

   render() {
      return (
         <div>
            <div className="site-card-border-less-wrapper">
               <Card title="Covid19" bordered={false}>
                  <Carousel autoplay>
                     <div>
                        <img src='img/1.png' alt='covid' style={contentStyle} />
                     </div>
                     <div>
                        <img src='img/2.png' alt='covid' style={contentStyle} />
                     </div>
                     <div>
                        <img src='img/3.png' alt='covid' style={contentStyle} />
                     </div>
                     <div>
                        <img src='img/4.png' alt='covid' style={contentStyle} />
                     </div>
                     <div>
                        <img src='img/5.png' alt='covid' style={contentStyle} />
                     </div>
                     <div>
                        <img src='img/6.png' alt='covid' style={contentStyle} />
                     </div>
                  </Carousel>
               </Card>
            </div>
         </div>

      );
   }
}

export default Home;