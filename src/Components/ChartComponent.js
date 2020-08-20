import React from 'react';
import { Table, Card, Input, Typography, Select } from 'antd';
import { axiosCall } from '../Utilities/Axios/axios';
import { connect } from 'react-redux';
import { getSpecific } from '../Store/Actions/getSpecific';
import Specific from './Specific';

const { Text } = Typography;
const { Search } = Input;
const { Option } = Select;

const mapStateToProps = (state) => {
   return {
      allData: state
   };
}

const columns = [
   {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
   },
   {
      title: 'Active Cases',
      dataIndex: 'active',
      key: 'active',
   },
   {
      title: 'Total Cases',
      dataIndex: 'cases',
      key: 'cases',
   },
   {
      title: 'Critical Cases',
      dataIndex: 'critical',
      key: 'critical',
   },
   {
      title: 'Total Deaths',
      dataIndex: 'deaths',
      key: 'deaths',
   },
   {
      title: 'Recovered',
      dataIndex: 'recovered',
      key: 'recovered',
   },
   {
      title: "Today's Cases",
      dataIndex: 'todayCases',
      key: 'todayCases',
   },
   {
      title: "Today's Deaths",
      dataIndex: 'todayDeaths',
      key: 'todayDeaths',
   },
   {
      title: "Today's Recovered",
      dataIndex: 'todayRecovered',
      key: 'todayRecovered',
   },
   {
      title: "Flag",
      dataIndex: 'flag',
      key: 'flag',
      render: text => <img src={text} alt={text} style={{ height: '40px', width: '40px', borderRadius: '50%' }} />
   },
];





class CovidChart extends React.Component {

   constructor() {
      super();

      this.state = {
         searchName: '',
         dataSource: []
      }
   }

   componentDidMount() {
      const displayData = this.props.countries;
      if (this.props.countries) {
         this.setState({
            dataSource: displayData.map((displayData) => {
               return {
                  key: displayData.countryInfo._id,
                  country: displayData.country,
                  active: displayData.active,
                  cases: displayData.cases,
                  critical: displayData.critical,
                  deaths: displayData.deaths,
                  recovered: displayData.recovered,
                  todayCases: displayData.todayCases,
                  todayDeaths: displayData.todayDeaths,
                  todayRecovered: displayData.todayRecovered,
                  flag: displayData.countryInfo.flag
               }
            })
         });
      }
   }

   handleChange = (value) => {
      this.setState({ dataSource: this.sortData(this.state.dataSource, value) })
      console.log(this.state.dataSource);
   }

   alphaSort = () => {
      const displayData = this.props.countries;

      const dataSource = displayData.map((displayData) => {
         return {
            key: displayData.countryInfo._id,
            country: displayData.country,
            active: displayData.active,
            cases: displayData.cases,
            critical: displayData.critical,
            deaths: displayData.deaths,
            recovered: displayData.recovered,
            todayCases: displayData.todayCases,
            todayDeaths: displayData.todayDeaths,
            todayRecovered: displayData.todayRecovered,
            flag: displayData.countryInfo.flag
         }
      })
      return dataSource;
   }

   sortData = (data, value) => {
      if (this.state.dataSource) {
         if (value === 'ActiveCases') {
            return data.slice().sort((a, b) => a.active - b.active);
         } else if (value === 'Alphabatic') {
            return this.alphaSort();
         }
      }
   }

   searchField = (value) => {
      this.setState({
         searchName: value,

      });
      const { dispatch } = this.props;
      axiosCall.get('/countries/' + value).then((res) => {
         dispatch(getSpecific(res.data));
      }).catch((err) => {
         console.log(err);
      })

   }

   render() {
      const displayData = this.props.countries;
      const countryData = this.props.allData.country.country;
      console.log(countryData);
      console.log(countryData.length === 0);


      if (countryData.length === 0 && this.state.searchName.length <= 0) {
         if (displayData) {


            return (
               <div>
                  <div className="site-card-border-less-wrapper">
                     <Card title="Country Wise Covid Information" bordered={false}>
                        <div className="cont">
                           <div className="sorter">
                              <Text>Sort By: </Text>
                              <Select defaultValue="Alphabatic" style={{ width: 120 }} onChange={this.handleChange}>
                                 <Option value="Alphabatic">Alphabetic</Option>
                                 <Option value="ActiveCases">Active Cases</Option>
                              </Select>
                           </div>
                           <div className="filter">
                              <Text>Search By: </Text>
                              <Search style={{ width: '200px' }} placeholder="Search By Country Name" onSearch={(value) => this.searchField(value)} />
                           </div>
                        </div>
                        <Table dataSource={this.state.dataSource} columns={columns} />
                     </Card>
                  </div>
               </div>
            );
         } else {
            return (
               <div>
                  <Table columns={columns} />
               </div>
            );
         }
      } else if (countryData.length === 0 && this.state.searchName.length > 0) {
         return (
            <div>
               <div className="site-card-border-less-wrapper">
                  <Card title="Country Wise Covid Information" bordered={false}>
                     <div>
                        <div>
                           <Text>Sort By: </Text>
                           <Select defaultValue="Alphabetic" style={{ width: 120 }} onChange={this.handleChange}>
                              <Option value="ActiveCases">Active Cases</Option>
                           </Select>
                        </div>
                        <div>
                           <Text>Search By: </Text>
                           <Search style={{ width: '200px' }} placeholder="Search By Country Name" onSearch={(value) => this.searchField(value)} />
                        </div>
                     </div>
                     <Table columns={columns} />
                  </Card>
               </div>
            </div>
         );
      } else {
         return (<Specific country={countryData} />);
      }
   }
}

export default connect(mapStateToProps)(CovidChart);