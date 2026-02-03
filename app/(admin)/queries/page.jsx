"use client";

import React, { useState } from 'react';
import { Eye, Trash2, Search, X, MessageCircle, AlertTriangle, Phone, MapPin, Clock, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactQueries = () => {
  const [selectedQuery, setSelectedQuery] = useState(null); 
  const [deleteId, setDeleteId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Data synced with your Form fields
  const [queries, setQueries] = useState([
    { 
      id: 1, 
      name: "Ali Ahmed", 
      phone: "+923001234567", 
      area: "Gulberg III", 
      time: "Morning (10AM - 12PM)", 
      message: "I want to start my driving lessons from next week. Please guide.",
      date: "Oct 24, 2023" 
    },
    { 
      id: 2, 
      name: "Sara Khan", 
      phone: "+923119876543", 
      area: "DHA Phase 5", 
      time: "Evening (04PM - 06PM)", 
      message: "Do you have female instructors available for this area?",
      date: "Oct 22, 2023" 
    },
  ]);

  const filteredQueries = queries.filter(q => 
    q.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    q.area.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id) => {
    setQueries(queries.filter(q => q.id !== id));
    setDeleteId(null);
  };

  return (
    <div className="p-4 md:p-10 space-y-8 max-w-7xl mx-auto font-sans">
      
      {/* --- HEADER --- */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">Contact Queries</h1>
          <p className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.2em] mt-1">Inbox Management</p>
        </div>

        <div className="relative w-full lg:max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search name or area..." 
            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl outline-none focus:ring-4 focus:ring-blue-50 focus:border-blue-500 transition-all shadow-sm text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* --- TABLE (5 COLUMNS) --- */}
      <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-50">
                <th className="px-8 py-5 text-[10px] font-black uppercase text-gray-400 tracking-widest">Student</th>
                <th className="px-6 py-5 text-[10px] font-black uppercase text-gray-400 tracking-widest">Mobile</th>
                <th className="px-6 py-5 text-[10px] font-black uppercase text-gray-400 tracking-widest">Area</th>
                <th className="px-6 py-5 text-[10px] font-black uppercase text-gray-400 tracking-widest">Pref. Time</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase text-gray-400 tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredQueries.map((q) => (
                <tr key={q.id} className="hover:bg-blue-50/20 transition-colors group">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold text-xs shadow-lg shadow-blue-100">
                        {q.name.charAt(0)}
                      </div>
                      <p className="text-sm font-black text-gray-900 leading-none">{q.name}</p>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-xs font-bold text-gray-600">{q.phone}</td>
                  <td className="px-6 py-5 text-xs font-bold text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-blue-500" />
                      {q.area}
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-gray-500 text-[11px] font-bold">
                       <Clock size={14} className="text-blue-400" />
                       {q.time}
                    </div>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button onClick={() => setSelectedQuery(q)} className="p-2.5 text-blue-600 hover:bg-blue-50 rounded-xl transition-all"><Eye size={18} /></button>
                      <button onClick={() => setDeleteId(q.id)} className="p-2.5 text-red-400 hover:bg-red-50 rounded-xl transition-all"><Trash2 size={18} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* --- DETAIL MODAL --- */}
      <AnimatePresence>
        {selectedQuery && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedQuery(null)} className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-[100]" />
            <motion.div 
              initial={{ y: '-100%' }} animate={{ y: 0 }} exit={{ y: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="fixed inset-x-4 top-10 mx-auto max-w-2xl bg-white shadow-2xl z-[101] rounded-[3rem] overflow-hidden"
            >
              <div className="p-8 md:p-12">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                      <MessageCircle size={24} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">Query Details</span>
                  </div>
                  <button onClick={() => setSelectedQuery(null)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <X size={20} className="text-gray-400" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-3">
                    <User size={16} className="text-blue-500"/>
                    <div>
                      <p className="text-[9px] font-bold text-gray-400 uppercase">Student Name</p>
                      <p className="text-sm font-bold text-gray-900">{selectedQuery.name}</p>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-3">
                    <MapPin size={16} className="text-blue-500"/>
                    <div>
                      <p className="text-[9px] font-bold text-gray-400 uppercase">Area</p>
                      <p className="text-sm font-bold text-gray-900">{selectedQuery.area}</p>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-3">
                    <Phone size={16} className="text-blue-500"/>
                    <div>
                      <p className="text-[9px] font-bold text-gray-400 uppercase">Mobile Number</p>
                      <p className="text-sm font-bold text-gray-900">{selectedQuery.phone}</p>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center gap-3">
                    <Clock size={16} className="text-blue-500"/>
                    <div>
                      <p className="text-[9px] font-bold text-gray-400 uppercase">Preferred Time</p>
                      <p className="text-sm font-bold text-gray-900">{selectedQuery.time}</p>
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-blue-600 rounded-[2.5rem] text-white shadow-xl shadow-blue-100 mb-8 relative overflow-hidden">
                  <p className="text-[10px] font-black uppercase opacity-60 mb-3 tracking-widest">Message / Questions</p>
                  <p className="text-lg leading-relaxed font-medium">"{selectedQuery.message}"</p>
                </div>

                {/* GREEN WHATSAPP BUTTON (Back to Original Style) */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={`https://wa.me/${selectedQuery.phone.replace('+', '')}?text=Hello ${selectedQuery.name}, regarding your booking request for ${selectedQuery.area}...`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#25D366] text-white py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#20bd5a] transition-all flex items-center justify-center gap-3 shadow-lg shadow-green-100 active:scale-95"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Reply on WhatsApp
                  </a>

                  <button 
                    onClick={() => setSelectedQuery(null)} 
                    className="flex-none px-10 py-5 bg-gray-100 text-gray-600 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-gray-200 transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* --- DELETE MODAL --- */}
      <AnimatePresence>
        {deleteId && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm px-4">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white p-8 rounded-[2.5rem] max-w-sm w-full text-center shadow-2xl">
              <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4"><AlertTriangle size={32} /></div>
              <h3 className="text-xl font-black text-gray-900">Delete Permanently?</h3>
              <p className="text-gray-500 text-sm mb-8 mt-2">Is inquiry ko delete karne ke baad data recover nahi hoga.</p>
              <div className="flex gap-3">
                <button onClick={() => setDeleteId(null)} className="flex-1 py-4 bg-gray-100 text-gray-600 rounded-xl font-bold">Cancel</button>
                <button onClick={() => handleDelete(deleteId)} className="flex-1 py-4 bg-red-500 text-white rounded-xl font-bold shadow-lg shadow-red-100">Delete</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactQueries;