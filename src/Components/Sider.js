import React from 'react';
import { Menu } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { NavLink } from "react-router-dom";

const { SubMenu } = Menu;

class Slider extends React.Component {
   rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

   state = {
      openKeys: ['sub1'],
   };

   onOpenChange = openKeys => {
      const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
         this.setState({ openKeys });
      } else {
         this.setState({
            openKeys: latestOpenKey ? [latestOpenKey] : [],
         });
      }
   };

   render() {
      return (
         <Menu
            mode="inline"
            openKeys={this.state.openKeys}
            onOpenChange={this.onOpenChange}
            style={{ height: '100%' }}
         >
            <SubMenu
               key="sub1"
               title={
                  <span>
                     <NavLink to='/home' >
                        <InfoCircleOutlined />
                        <span>Covid Information</span>
                     </NavLink>
                  </span>
               }
            >
               <Menu.Item key="1"><NavLink to='/global' onClick={() => this.props.global()}>Global</NavLink></Menu.Item>
               <Menu.Item key="2"><NavLink to='/country' onClick={() => this.props.country()}>Country</NavLink></Menu.Item>
            </SubMenu>
         </Menu>
      );
   }
}

export default Slider;