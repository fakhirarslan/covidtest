import React from 'react';
import { Table, Card } from 'antd';

const columns = [
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
      title: 'Affected Countries',
      dataIndex: 'affectedCountries',
      key: 'affectedCountries',
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
];

class CovidTable extends React.Component {

   render() {
      const displayData = this.props.countries;
      const dataSource = [
         {
            key: '1',
            active: displayData.active,
            cases: displayData.cases,
            affectedCountries: displayData.affectedCountries,
            critical: displayData.critical,
            deaths: displayData.deaths,
            recovered: displayData.recovered,
            todayCases: displayData.todayCases,
            todayDeaths: displayData.todayDeaths,
            todayRecovered: displayData.todayRecovered
         },
      ];

      return (
         <div>
            <div className="site-card-border-less-wrapper">
               <Card title="Global Covid Stats" bordered={false}>
                  <Table dataSource={dataSource} columns={columns} />
               </Card>
            </div>
            <div className="site-card-border-less-wrapper">
               <Card title="Global Covid Stats" bordered={false}>
               <iframe src="https://ourworldindata.org/grapher/total-cases-covid-19?tab=map" width="100%" height="700px" title="Covid Chart"></iframe>
               </Card>
            </div>
            
         </div>
      );
   }
}

export default CovidTable;