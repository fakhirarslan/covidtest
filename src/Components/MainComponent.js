import React from 'react';
import CovidTable from './TableComponent';
import CovidChart from './ChartComponent';
import Home from './Home';
import { Switch, Route, Redirect } from "react-router-dom";
import { Layout } from 'antd';
import Slider from './Sider';
import { axiosCall } from '../Utilities/Axios/axios';
import { connect } from 'react-redux';
import { getAllCountries } from '../Store/Actions/getAll';
import { getCountries } from '../Store/Actions/getCountries';


const { Header, Footer, Sider, Content } = Layout;

const mapStateToProps = (state) => {
   return {
      allData: state
   };
}

class Main extends React.Component {

   global = () => {
      const { dispatch } = this.props;
      axiosCall.get('/all').then((res) => {
         dispatch(getAllCountries(res.data));
      }).catch((err) => {
         console.log(err);
      })
   }

   country = () => {
      const { dispatch } = this.props;
      axiosCall.get('/countries').then((res) => {
         dispatch(getCountries(res.data));
      }).catch((err) => {
         console.log(err);
      })
   }

   render() {
      return (
         <Layout style={{ height: "100vh" }}>
            <Sider>
               <Slider global={this.global} country={this.country} />
            </Sider>
            <Layout>
               <Header>Covid Information</Header>
               <Content >
                  <Switch>
                     <Route path="/home" component={Home} />
                     <Route path="/global" component={() => <CovidTable countries={this.props.allData.allCountries.countries} />} />
                     <Route path="/country" component={() => <CovidChart countries={this.props.allData.countries.countries} />} />
                     <Redirect to="/home"/>
                  </Switch>
               </Content>
               <Footer><p>© Copyright 2020 Covid Information</p></Footer>
            </Layout>
         </Layout>
      );
   }
}

export default connect(mapStateToProps)(Main);