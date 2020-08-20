import React from 'react';
import { Table, Card, Input, Typography, Select } from 'antd';

const { Text } = Typography;
const { Search } = Input;
const { Option } = Select;

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

const handleChange = (value) => {
   console.log(`selected ${value}`);
}

class Specific extends React.Component {

   render() {
      const countryData = this.props.country;
      const dataSource = {
         key: countryData.countryInfo._id,
         country: countryData.country,
         active: countryData.active,
         cases: countryData.cases,
         critical: countryData.critical,
         deaths: countryData.deaths,
         recovered: countryData.recovered,
         todayCases: countryData.todayCases,
         todayDeaths: countryData.todayDeaths,
         todayRecovered: countryData.todayRecovered,
         flag: countryData.countryInfo.flag
      };

      return (
         <div>
            <div className="site-card-border-less-wrapper">
               <Card title="Global Covid Stats" bordered={false}>
                  <div>
                     <div>
                        <Text>Sort By: </Text>
                        <Select defaultValue="Alphabetic" style={{ width: 120 }} onChange={handleChange}>
                           <Option value="ActiveCases">Active Cases</Option>
                        </Select>
                     </div>
                     <div>
                        <Text>Search By: </Text>
                        <Search style={{ width: '200px' }} placeholder="Search By Country Name" onSearch={(value) => this.searchField(value)} />
                     </div>
                  </div>
                  <Table dataSource={dataSource} columns={columns} />
               </Card>
            </div>
         </div>
      );
   }
}

export default Specific;