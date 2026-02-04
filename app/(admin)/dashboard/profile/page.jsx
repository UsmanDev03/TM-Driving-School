"use client";
import React, { useState, useEffect } from 'react';
import { User, Mail, Lock, Save, Loader2 } from "lucide-react";

export default function ProfilePage() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  // Data Fetching: Current Admin ka data load karna
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("/api/auth/profile");
        const data = await res.json();
        if (res.ok) {
          // Yahan data set ho raha hai jo inputs mein dikhega
          setFormData({ 
            name: data.name || "", 
            email: data.email || "", 
            password: "" 
          });
        }
      } catch (error) {
        console.error("Profile load na ho saki:", error);
      }
    };
    fetchProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/auth/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Profile updated successfully! ✨");
      } else {
        alert("Update failed!");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Account Settings</h1>
        <p className="text-gray-500 text-sm">Apni profile ki maloomat yahan se update karein.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
        <div>
          <label className="text-xs font-bold text-gray-400 uppercase ml-1">Full Name</label>
          <div className="relative mt-2">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
            <input 
              type="text" 
              value={formData.name || ""} 
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-blue-600 transition-all text-sm"
              placeholder="Admin Name"
              required
            />
          </div>
        </div>

        <div>
          <label className="text-xs font-bold text-gray-400 uppercase ml-1">Email Address</label>
          <div className="relative mt-2">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
            <input 
              type="email" 
              value={formData.email || ""} 
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-blue-600 transition-all text-sm"
              required
            />
          </div>
        </div>

        <div>
          <label className="text-xs font-bold text-gray-400 uppercase ml-1">New Password (Keep empty to stay same)</label>
          <div className="relative mt-2">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
            <input 
              type="password" 
              placeholder="••••••••"
              value={formData.password || ""}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-blue-600 transition-all text-sm"
            />
          </div>
        </div>

        <button 
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-100 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
        >
          {loading ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />}
          Save Changes
        </button>
      </form>
    </div>
  );
}