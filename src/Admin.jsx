import React, { useState } from 'react';

export default function Admin() {
  const [currentTab, setCurrentTab] = useState('Bookings');
  const [filter, setFilter] = useState('All');

  // Static Dummy Architecture mirroring the exact UI/UX screenshot you sent
  const [adminBookings, setAdminBookings] = useState([
    { id: "1", client: "Priya S.", package: "Premium", date: "Jun 15", time: "11:00", status: "Pending", assigned: "Assign..." },
    { id: "2", client: "Arjun M.", package: "Essential", date: "Jun 17", time: "14:00", status: "Confirmed", assigned: "Ravi K." },
    { id: "3", client: "Zara H.", package: "Full Day", date: "Jun 20", time: "09:00", status: "New", assigned: "Assign..." }
  ]);

  const [slots, setSlots] = useState([
    { id: "1", day: "Mon", time: "10:00", type: "Open" },
    { id: "2", day: "Tue", time: "10:00", type: "Open" },
    { id: "3", day: "Wed", time: "10:00", type: "Booked" },
    { id: "4", day: "Thu", time: "10:00", type: "Open" },
    { id: "5", day: "Mon", time: "13:00", type: "Booked" },
    { id: "6", day: "Tue", time: "13:00", type: "Open" },
    { id: "7", day: "Wed", time: "13:00", type: "Open" },
    { id: "8", day: "Thu", time: "13:00", type: "Booked" }
  ]);

  const handleStatusToggle = (id) => {
    setSlots(slots.map(s => s.id === id ? { ...s, type: s.type === 'Open' ? 'Closed' : s.type === 'Closed' ? 'Booked' : 'Open' } : s));
  };

  return (
    <div className="min-h-screen bg-[#121212] text-zinc-300 font-sans p-4 md:p-8 selection:bg-amber-500 selection:text-black">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Top Header Log info */}
        <div className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase border-b border-zinc-800 pb-2">
          ADMIN PANEL — /ADMIN (JWT PROTECTED SPA ROUTE)
        </div>

        {/* Dashboard Grid System layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* Sidebar Nav Component */}
          <div className="bg-[#1a1a1a] border border-zinc-800 rounded p-4 space-y-6 h-fit">
            <div className="flex items-center gap-2 px-2 text-white font-bold text-sm">
              📷 Studio Admin
            </div>
            <nav className="flex flex-col gap-1 text-xs font-semibold">
              {['Bookings', 'Slot Manager', 'Staff'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setCurrentTab(tab)}
                  className={`w-full text-left px-3 py-2.5 rounded transition-all ${currentTab === tab ? 'bg-zinc-800 text-amber-400 border-l-2 border-amber-500' : 'hover:bg-zinc-900 text-zinc-400'}`}
                >
                  {tab}
                </button>
              ))}
            </nav>
            <div className="pt-8 border-t border-zinc-800">
              <button className="w-full text-left px-3 py-2.5 text-xs font-semibold text-red-400 hover:bg-zinc-900/50 rounded">
                Sign out
              </button>
            </div>
          </div>

          {/* Main Workspace Layout Area */}
          <div className="md:col-span-3 space-y-6">
            
            {/* KPI Counter Dashboard Blocks */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[#1a1a1a] border border-zinc-800 p-4 rounded">
                <div className="text-2xl font-bold text-white">12</div>
                <div className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 mt-1">Total Bookings</div>
              </div>
              <div className="bg-[#1a1a1a] border border-zinc-800 p-4 rounded">
                <div className="text-2xl font-bold text-amber-500">Pending</div>
                <div className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 mt-1">Status Watch</div>
              </div>
              <div className="bg-[#1a1a1a] border border-zinc-800 p-4 rounded">
                <div className="text-2xl font-bold text-emerald-500">3</div>
                <div className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 mt-1">This Week</div>
              </div>
            </div>

            {/* Dynamic Content Panel view based on Tab */}
            <div className="bg-[#1a1a1a] border border-zinc-800 rounded p-5 space-y-4">
              <div className="flex justify-between items-center border-b border-zinc-800 pb-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-white">Bookings Management</h3>
                <div className="flex gap-1.5 text-[10px] font-bold uppercase">
                  {['All', 'Pending', 'Confirmed'].map((btn) => (
                    <button
                      key={btn}
                      onClick={() => setFilter(btn)}
                      className={`px-3 py-1 rounded ${filter === btn ? 'bg-amber-500 text-black' : 'bg-zinc-800 text-zinc-400'}`}
                    >
                      {btn}
                    </button>
                  ))}
                </div>
              </div>

              {/* Data Rows Table UI matching screenshot */}
              <div className="overflow-x-auto text-xs">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-zinc-800 text-zinc-500 font-mono text-[10px]">
                      <th className="py-2">Client</th>
                      <th className="py-2">Package</th>
                      <th className="py-2">Date</th>
                      <th className="py-2">Time</th>
                      <th className="py-2">Status</th>
                      <th className="py-2">Assigned</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-900">
                    {adminBookings.filter(b => filter === 'All' || b.status === filter).map((b) => (
                      <tr key={b.id} className="hover:bg-zinc-900/30">
                        <td className="py-3 font-bold text-zinc-200">{b.client}</td>
                        <td className="py-3 text-zinc-400">{b.package}</td>
                        <td className="py-3 font-mono">{b.date}</td>
                        <td className="py-3 font-mono">{b.time}</td>
                        <td className="py-3">
                          <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase ${b.status === 'Confirmed' ? 'bg-emerald-950 text-emerald-400' : b.status === 'Pending' ? 'bg-amber-950 text-amber-400' : 'bg-zinc-800 text-zinc-300'}`}>
                            {b.status}
                          </span>
                        </td>
                        <td className="py-3 text-zinc-400">
                          <select className="bg-zinc-900 border border-zinc-800 rounded px-1.5 py-0.5 text-xs text-zinc-300 focus:outline-none">
                            <option>{b.assigned}</option>
                            <option>Ravi K.</option>
                            <option>Amit S.</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* SLOT MANAGER CELL INTERFACE */}
            <div className="bg-[#1a1a1a] border border-zinc-800 rounded p-5 space-y-4">
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                SLOT MANAGER — CLICK CELL TO TOGGLE OPEN/CLOSED
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                {slots.map((s) => (
                  <div
                    key={s.id}
                    onClick={() => handleStatusToggle(s.id)}
                    className={`p-3 border rounded cursor-pointer transition-all text-center ${s.type === 'Open' ? 'bg-emerald-950/20 border-emerald-900/50 text-emerald-400' : s.type === 'Booked' ? 'bg-amber-950/20 border-amber-900/50 text-amber-400' : 'bg-zinc-900 border-zinc-800 text-zinc-600'}`}
                  >
                    <div className="text-[10px] opacity-60">{s.day}</div>
                    <div className="font-bold text-sm my-0.5">{s.time}</div>
                    <div className="text-[9px] uppercase tracking-wider font-bold">{s.type}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
