"use client";

import React from 'react';
import { Users, Target, ArrowRight, MessageSquare } from 'lucide-react';

const AdminDashboard = () => {
  return (
    /* md:h-[65vh] se height thori aur barh jayegi, md:py-16 se padding top-bottom solid ho jayegi */
    <div className="bg-[#f8fafc] md:h-[65vh] w-full overflow-hidden p-6 md:py-16 md:px-12 select-none rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col justify-center">
      <div className="max-w-5xl mx-auto w-full">
        
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-black text-gray-900 tracking-tight leading-none">Dashboard</h1>
          <p className="text-gray-500 text-[10px] font-bold uppercase tracking-[0.25em] mt-2">System Overview & Analytics</p>
        </div>

        {/* 2 Big Stylish Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10">
          
          {/* Card 1: Total Users */}
          <div className="relative overflow-hidden bg-white p-8 rounded-[2rem] border-2 border-gray-50 shadow-sm group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="absolute top-[-10%] right-[-5%] w-32 h-32 bg-blue-50/50 rounded-full group-hover:scale-125 transition-transform duration-700" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-blue-100">
                <Users size={22} />
              </div>
              <h3 className="text-gray-400 font-bold uppercase tracking-widest text-[10px] mb-1">Total Students</h3>
              <div className="flex items-center gap-3">
                <span className="text-4xl font-black text-gray-900 tracking-tighter">1,284</span>
                <span className="bg-green-100 text-green-600 text-[10px] font-black px-2 py-0.5 rounded-lg">+12%</span>
              </div>
            </div>
          </div>

          {/* Card 2: Success Rate */}
          <div className="relative overflow-hidden bg-white p-8 rounded-[2rem] border-2 border-gray-50 shadow-sm group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="absolute top-[-10%] right-[-5%] w-32 h-32 bg-purple-50/50 rounded-full group-hover:scale-125 transition-transform duration-700" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-purple-100">
                <Target size={22} />
              </div>
              <h3 className="text-gray-400 font-bold uppercase tracking-widest text-[10px] mb-1">Success Rate</h3>
              <div className="flex items-center gap-3">
                <span className="text-4xl font-black text-gray-900 tracking-tighter">94.8%</span>
                <span className="bg-purple-100 text-purple-600 text-[10px] font-black px-2 py-0.5 rounded-lg">Top</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex justify-start">
          <button className="group bg-[#0f172a] text-white h-12 px-6 rounded-xl font-bold flex items-center gap-4 hover:bg-blue-600 transition-all active:scale-95 w-full sm:w-auto justify-center shadow-lg shadow-gray-200">
            <MessageSquare size={16} className="text-blue-400 group-hover:text-white" />
            <span className="text-xs tracking-wider uppercase font-black">View Contact Queries</span>
            <ArrowRight size={16} className="text-gray-500 group-hover:translate-x-1 group-hover:text-white transition-all" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;