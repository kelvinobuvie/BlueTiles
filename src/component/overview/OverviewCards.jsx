import React from "react";
import { useNavigate } from "react-router";
import { IoWalletOutline } from "react-icons/io5";
import { TbTargetArrow } from "react-icons/tb";
import { GrLineChart } from "react-icons/gr";
import { TbMoneybag } from "react-icons/tb";


const OverviewCards = () => {
  const cards = [
    {
      title: "Wallet Balane",
      count: `NGN556,000`,
      cardImage: <IoWalletOutline className='inline-block w-12 h-12 -mt-1 text-orange-500 bg-orange-200 py-2 x-3 border rounded-full font-extrabold'></IoWalletOutline>,
      note: "Up 15% this month",
    },
    {
      title: "Active Targets",
      count: 56,
      cardImage: <TbTargetArrow className='inline-block w-12 h-12 -mt-1 text-red-500 bg-red-200 py-2 x-3 border rounded-full font-extrabold'></TbTargetArrow>,
      note: "",
    },
    {
      title: "Total Savings",
      count: `NGN288,000`,
      cardImage: <TbMoneybag className='inline-block w-12 h-12 -mt-1 text-green-500 bg-green-200 py-2 x-3 border rounded-full font-extrabold'></TbMoneybag>,
      note: "",
    },
    {
      title: "Total Expenses",
      count: `NGN320,000`,
      cardImage: <GrLineChart className='inline-block w-12 h-12 -mt-1 text-red-700 bg-red-200 py-2 x-3 border rounded-full font-extrabold'></GrLineChart>,
      note: "",
    },
  ];
  const navigate = useNavigate();
        const Redirect = () => {
        navigate('/')
    }

  return (
    <a onClick={Redirect} className="hover:cursor-pointer">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pb-2 pt-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white border-2 border-gray-200 rounded-xl shadow-sm px-4 py-5 flex flex-col justify-between"
        >
          <div>
            <h2 className="text-gray-400 font-semibold text-base">{card.title}</h2>
          </div>
          <div className="mt-4 flex justify-between">
            <p className="text-3xl font-bold text-gray-700">{card.count}</p>
            <div className="">{card.cardImage}</div>
          </div>
          <div className="flex justify-between mt-4">
            <a href="/" className="text-green-600 hover:underline text-xs">
              See all ↗
            </a>
            {card.note && (
              <p className="text-gray-500 text-xs mt-1">{card.note}</p>
            )}
          </div>
        </div>
      ))}
    </div>
    </a>
  );
};

export default OverviewCards;
