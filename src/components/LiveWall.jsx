import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

// Mock Data for display until connected
const mockComments = [
  { id: 1, name: "Sakib Al Hasan", text: "Salute to the hero. justice will serve.", time: "2m ago" },
  { id: 2, name: "Student Protestor", text: "আমরা ভুলবো না। ইতিহাস সাক্ষী থাকবে।", time: "10m ago" },
  { id: 3, name: "Dhaka Un", text: "Rest in peace brother.", time: "1hr ago" },
]

const LiveWall = () => {
  const [input, setInput] = useState("")

  return (
    <div className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-4xl font-black font-rebel uppercase text-brand-crimson mb-8 flex items-center gap-4">
        <span className="w-4 h-4 rounded-full bg-brand-crimson animate-pulse"></span>
        Live Tributes
      </h2>

      {/* Message Input */}
      <div className="mb-12 relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-brand-crimson to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative flex gap-4 bg-brand-dark p-2 rounded-xl border border-white/10">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Write a tribute..." 
            className="w-full bg-transparent p-4 text-white focus:outline-none font-bengali"
          />
          <button className="bg-brand-crimson text-white px-6 rounded-lg font-bold hover:bg-red-700 transition">
            <Send size={20} />
          </button>
        </div>
      </div>

      {/* Comments Feed */}
      <div className="space-y-4">
        {mockComments.map((comment) => (
          <motion.div 
            key={comment.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 bg-white/5 border border-white/5 rounded-2xl hover:border-brand-crimson/30 transition-colors"
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-bold text-brand-crimson font-rebel tracking-widest uppercase text-sm">{comment.name}</h4>
              <span className="text-xs text-white/30">{comment.time}</span>
            </div>
            <p className="text-gray-300 font-bengali leading-relaxed">{comment.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default LiveWall
