

// const index = () => {
//   return (
//     // <div className="bg-danger chart-conatiner p-0 sm:ml-64 ">index</div>
// <div class=" reminder-chart-conatiner" >
//   <div className="chart" >01</div>

//   <div className="reminder">09</div>
// </div>
//     )
// }

// export default index
'use client'
import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/composed-chart-in-responsive-container-pkqmy';

  render() {
    return (

      

 <div class=" reminder-chart-conatiner" >

      <div className="chart" >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={900}
          height={350}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
      </div>
      <div className="reminder">

      <div className="w-full max-w-2xl px-4">
                <div className=" rounded-lg border pb-6 border-gray-200">
                    <div className="flex items-center border-b border-gray-200 justify-between px-6 py-3">
                        <p className="text-sm lg:text-xl font-semibold leading-tight text-gray-800">Reminder</p>
                        <div className="flex cursor-pointer items-center justify-center px-3 py-2.5 border rounded border-gray-100">
                            <p className="text-xs md:text-sm leading-none text-gray-600">Filter by: Latest</p>
                        </div>
                    </div>
                    <div className=" reminder_table_container px-6 pt-6 overflow-x-auto">
                        <table className="  w-full whitespace-nowrap">
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="flex items-center">
                                           
                                            <div className="pl-1">
                                                <div className="flex items-center text-sm leading-none">
                                                    <p className="font-semibold text-gray-800">Apple MacBook Pro 2020</p>
                                                    <p className="text-blue-500 ml-3">(ID 879-10-940)</p>
                                                </div>
                                                <p className="text-xs md:text-sm leading-none text-gray-600 mt-2">15’5. Core i5. FHD. Integrated graphics</p>
                                            </div>
                                        </div>
                                    </td>
                                  
                                </tr>
                                <tr>
                                    <td className="pt-6">
                                        <div className="flex items-center">
                                            
                                            <div className="pl-3">
                                                <div className="flex items-center text-sm leading-none">
                                                    <p className="font-semibold text-gray-800">Apple MacBook Pro 2020</p>
                                                    <p className="text-blue-500 ml-3">(ID 879-10-940)</p>
                                                </div>
                                                <p className="text-xs md:text-sm leading-none text-gray-600 mt-2">15’5. Core i5. FHD. Integrated graphics</p>
                                            </div>
                                        </div>
                                    </td>
                                
                                </tr>
                                <tr>
                                    <td className="pt-6">
                                        <div className="flex items-center">
                                           
                                            <div className="pl-3">
                                                <div className="flex items-center text-sm leading-none">
                                                    <p className="font-semibold text-gray-800">Google Pixel 5</p>
                                                    <p className="text-blue-500 ml-3">(ID 879-10-940)</p>
                                                </div>
                                                <p className="text-xs md:text-sm leading-none text-gray-600 mt-2">15’5. Core i5. FHD. Integrated graphics</p>
                                            </div>
                                        </div>
                                    </td>
                                 
                                </tr>
                                <tr>
                                    <td className="pt-6">
                                        <div className="flex items-center">
                                            
                                            <div className="pl-3">
                                                <div className="flex items-center text-sm leading-none">
                                                    <p className="font-semibold text-gray-800">MS Surface 2019</p>
                                                    <p className="text-blue-500 ml-3">(ID 879-10-940)</p>
                                                </div>
                                                <p className="text-xs md:text-sm leading-none text-gray-600 mt-2">15’5. Core i5. FHD. Integrated graphics</p>
                                            </div>
                                        </div>
                                    </td>
                                    
                                </tr>

                                <tr>
                                    <td className="pt-6">
                                        <div className="flex items-center">
                                           
                                            <div className="pl-3">
                                                <div className="flex items-center text-sm leading-none">
                                                    <p className="font-semibold text-gray-800">MS Surface 2019</p>
                                                    <p className="text-blue-500 ml-3">(ID 879-10-940)</p>
                                                </div>
                                                <p className="text-xs md:text-sm leading-none text-gray-600 mt-2">15’5. Core i5. FHD. Integrated graphics</p>
                                            </div>
                                        </div>
                                    </td>
                                    
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
      </div>
      </div>
    );
  }
}
