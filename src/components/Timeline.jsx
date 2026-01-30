const timelineData = [
  { date: "২০২৪ জুলাই", title: "বিপ্লবের নেতৃত্ব", desc: "ঢাকার রামপুরা এলাকায় বৈষম্যবিরোধী ছাত্র আন্দোলনের সমন্বয়ক হিসেবে বলিষ্ঠ ভূমিকা।" },
  { date: "১৩ আগস্ট ২০২৪", title: "ইনকিলাব মঞ্চ প্রতিষ্ঠা", desc: "ভারতীয় আধিপত্যবাদের বিরুদ্ধে ও সার্বভৌমত্ব রক্ষায় ইনকিলাব মঞ্চের মুখপাত্র হিসেবে দায়িত্ব গ্রহণ।" },
  { date: "২৪ মে ২০২৫", title: "জাতীয় সরকারের ডাক", desc: "সকল বিরোধী শক্তির সমন্বয়ে জাতীয় সরকার গঠনের এক ঐতিহাসিক ঘোষণা।" },
  { date: "১২ ডিসেম্বর ২০২৫", title: "নির্মম হামলা", desc: "ঢাকার পল্টনে প্রচারণার সময় স্নাইপারের গুলিতে গুরুতর আহত হন।" },
  { date: "১৫ ডিসেম্বর ২০২৫", title: "সিঙ্গাপুরে স্থানান্তর", desc: "উন্নত চিকিৎসার জন্য এয়ার অ্যাম্বুলেন্সে সিঙ্গাপুর জেনারেল হাসপাতালে নিয়ে যাওয়া হয়।" },
  { date: "১৮ ডিসেম্বর ২০২৫", title: "শহীদ বরণ", desc: "সিঙ্গাপুরে চিকিৎসাধীন অবস্থায় শাহাদাত বরণ করেন। মরদেহ জাতীয় কবির মাজার সংলগ্ন কবরে শায়িত হয়।" }
]

const Timeline = () => {
  return (
    <div className="py-20 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16">
         <h2 className="text-4xl font-black font-rebel uppercase text-white/10 mb-2">The Path</h2>
         <h2 className="text-5xl font-black font-bengali text-brand-crimson">বিপ্লবী সময়রেখা</h2>
      </div>

      <div className="relative border-l-2 border-white/5 pl-8 md:pl-0 md:border-none space-y-12">
        {/* Center Line for Desktop */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-crimson/50 to-transparent hidden md:block"></div>

        {timelineData.map((item, i) => (
          <div key={i} className={`relative flex flex-col md:flex-row items-center justify-between ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            
            {/* Card */}
            <div className="w-full md:w-[45%] bg-[#0f172a] border border-white/10 p-8 rounded-2xl hover:border-brand-crimson/40 transition-all group">
               <span className="inline-block px-3 py-1 bg-brand-crimson/10 text-brand-crimson rounded-full text-xs font-bold mb-4 font-bengali">{item.date}</span>
               <h3 className="text-2xl font-bold text-white mb-2 font-bengali group-hover:text-brand-crimson transition-colors">{item.title}</h3>
               <p className="text-gray-400 font-bengali leading-relaxed">{item.desc}</p>
            </div>

            {/* Dot */}
            <div className="absolute left-[-33px] md:left-1/2 top-8 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full bg-brand-dark border-4 border-brand-crimson z-10"></div>
            
            {/* Spacer */}
            <div className="hidden md:block w-[45%]"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Timeline
