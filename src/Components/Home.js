import React from 'react';
import { Carousel } from 'antd';

const contentStyle = {
   height: '720px',
   color: '#fff',
   lineHeight: '160px',
   textAlign: 'center',
   background: '#364d79',
   marginLeft: '50px'
};

class Home extends React.Component {

   render() {
      return (
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
      );
   }
}

export default Home;