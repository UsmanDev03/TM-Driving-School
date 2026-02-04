"use client";

import React, { useState } from 'react';
import { LayoutDashboard, Users, MessageSquare, Settings, Bell, Search, LogOut, Menu, X, User, ChevronDown, Mail } from "lucide-react";
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname(); // Check karne ke liye ke kaunsa page active hai

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/auth/logout", { method: "POST" });
      if (res.ok) {
        router.push("/login");
        router.refresh();
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // Sidebar Items Updated
  const menuItems = [
    { icon: <LayoutDashboard size={18} />, label: "Dashboard", href: "/dashboard" },
    { icon: <Mail size={18} />, label: "Contact Queries", href: "/queries" },
  ];

  return (
    <div className="flex min-h-screen bg-[#f4f7fe] overflow-x-hidden">
      {/* --- SIDEBAR --- */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-100 flex flex-col transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
      `}>
        <div className="p-8 flex justify-between items-center">
          {/* TM DRIVE LINK TO DASHBOARD */}
          <Link href="/dashboard" className="text-2xl font-black text-blue-600 tracking-tighter italic flex items-center gap-2">
            <div className="w-2 h-7 bg-blue-600 rounded-full"></div>
            TM Drive
          </Link>
          <button className="md:hidden" onClick={() => setSidebarOpen(false)}><X /></button>
        </div>
        
        <nav className="flex-1 px-4 space-y-1">
          {menuItems.map((item, i) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={i} 
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl cursor-pointer transition-all duration-300 
                  ${isActive 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-100 font-bold' 
                    : 'text-gray-400 hover:bg-blue-50 hover:text-blue-600'}`}
              >
                {item.icon}
                <span className="text-sm font-semibold">{item.label}</span>
              </Link>
            );
          })}
        </nav>
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
            
            <div className="relative">
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-3 md:pl-6 md:border-l border-gray-100 group"
              >
                <div className="text-right hidden sm:block">
                  <p className="text-xs font-bold text-gray-900 leading-none">Admin Panel</p>
                  <p className="text-[9px] text-blue-500 font-black uppercase mt-1">Super Admin</p>
                </div>
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold shadow-md group-hover:bg-blue-700 transition-colors">
                  AD
                </div>
                <ChevronDown size={14} className={`text-gray-400 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
              </button>

              {isProfileOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setIsProfileOpen(false)}></div>
                  <div className="absolute right-0 mt-3 w-48 bg-white rounded-2xl shadow-xl border border-gray-50 py-2 z-20 animate-in fade-in zoom-in duration-200">
                   <Link 
                    href="/dashboard/profile" 
                    onClick={() => setIsProfileOpen(false)} // Click hote hi dropdown band ho jaye
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    <User size={16} /> My Profile
                  </Link>
                    <div className="h-px bg-gray-100 my-1 mx-4"></div>
                    <button 
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors font-semibold"
                    >
                      <LogOut size={16} /> Logout
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="flex-1 p-6 md:p-10 font-sans">
          {children}
        </main>

        <footer className="p-6 text-center border-t border-gray-100 bg-white">
          <p className="text-[11px] text-gray-400 font-medium tracking-widest uppercase">
            © 2026 TM Drive — All Rights Reserved. <span className="text-blue-600 font-black italic ml-1">Powered by Teqnoor</span>
          </p>
        </footer>
      </div>

      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  );
}