import React from 'react'
import Nav from '../../component/Nav'
import OverviewCards from '../../component/overview/OverviewCards'
import SavingsExpenseChart from '../../component/overview/SavingsExpenseChart';
import DashboardUpdate from '../../component/overview/TargetSummary';
import RecentInspections from '../../component/overview/RecentTransactions';

const data = [
  { month: 'January', savings: 50000, expenses: 30000 },
  { month: 'February', savings: 70000, expenses: 40000 },
  { month: 'March', savings: 60000, expenses: 45000 },
  { month: 'April', savings: 60000, expenses: 45000 },
  { month: 'May', savings: 60000, expenses: 45000 },


  // Add more data as needed
];

const Overview = () => {
  return (
    <div className='ml-56 px-4'>
        <Nav title={"Dashboard"}/>
        <div className='container'>
            <div>
              <OverviewCards/>
            </div>
            <div className='flex mt-6 gap-5'>
              <div className='py-2 px-8 w-full border-2 rounded-lg'>
                <h1 className='font-medium text-lg text-gray-700'>Financial Overview</h1>
                <SavingsExpenseChart data={data} />
              </div>
              <div className='w-full bg-white border border-gray-300 rounded-md shadow-sm flex flex-col h-96 overflow-y-auto'>
                <div className='flex justify-between px-4 py-4 font-medium bg-white'>
                  <span className='text-gray-700 text-lg'>Targets & Goals</span>
                  <span className='text-orange-500'>See all</span>
                </div>
                <DashboardUpdate/>
              </div>
            </div>
            <div className='mt-6'>
              <RecentInspections/>
            </div>
        </div>
    </div>
  )
}

export default Overview