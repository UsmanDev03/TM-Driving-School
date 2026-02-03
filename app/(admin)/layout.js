"use client";

import React, { useState } from 'react';
import { LayoutDashboard, Users, MessageSquare, Settings, Bell, Search, LogOut, Menu, X } from "lucide-react";

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#f4f7fe] overflow-x-hidden">
      {/* --- SIDEBAR --- */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-100 flex flex-col transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
      `}>
        <div className="p-8 flex justify-between items-center">
          <h2 className="text-2xl font-black text-blue-600 tracking-tighter italic flex items-center gap-2">
            <div className="w-2 h-7 bg-blue-600 rounded-full"></div>
            DRIVE.AI
          </h2>
          <button className="md:hidden" onClick={() => setSidebarOpen(false)}><X /></button>
        </div>
        
        <nav className="flex-1 px-4 space-y-1">
          {[
            { icon: <LayoutDashboard size={18} />, label: "Overview", active: true },
            { icon: <Users size={18} />, label: "Student Leads" },
            { icon: <MessageSquare size={18} />, label: "Inquiries" },
            { icon: <Settings size={18} />, label: "Settings" },
          ].map((item, i) => (
            <div key={i} className={`flex items-center gap-3 px-4 py-3.5 rounded-xl cursor-pointer transition-all duration-300 ${item.active ? 'bg-blue-600 text-white shadow-lg shadow-blue-100 font-bold' : 'text-gray-400 hover:bg-blue-50 hover:text-blue-600'}`}>
              {item.icon}
              <span className="text-sm font-semibold">{item.label}</span>
            </div>
          ))}
        </nav>

        <div className="p-6">
          <button className="flex items-center gap-3 px-4 py-3 w-full text-gray-400 hover:text-red-500 transition-colors font-bold text-sm">
            <LogOut size={18} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:ml-64 w-full">
        {/* TOPBAR */}
        <header className="h-20 bg-white/70 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-6 md:px-10 sticky top-0 z-40">
          <button className="md:hidden p-2 bg-gray-50 rounded-lg" onClick={() => setSidebarOpen(true)}>
            <Menu size={20} />
          </button>
          
          <div className="relative hidden sm:block w-48 md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" size={16} />
            <input type="text" placeholder="Search..." className="w-full pl-10 pr-4 py-2 bg-gray-50/50 border border-gray-100 rounded-lg outline-none text-xs" />
          </div>
          
          <div className="flex items-center gap-4 md:gap-6">
            <Bell size={18} className="text-gray-500 hidden xs:block" />
            <div className="flex items-center gap-3 md:pl-6 md:border-l border-gray-100">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold text-gray-900 leading-none">Admin Panel</p>
                <p className="text-[9px] text-blue-500 font-black uppercase mt-1">Super Admin</p>
              </div>
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold shadow-md">AD</div>
            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="flex-1 p-6 md:p-10 font-sans">
          {children}
        </main>

        {/* FOOTER */}
        <footer className="p-6 text-center border-t border-gray-100 bg-white">
          <p className="text-[11px] text-gray-400 font-medium tracking-widest uppercase">
            © 2026 DRIVE.AI — All Rights Reserved. <span className="text-blue-600 font-black italic ml-1">Powered by NextGen</span>
          </p>
        </footer>
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  );
}