const galleryItems = [
  { type: 'video', src: 'https://www.youtube.com/embed/cKY5C-2HnUY?si=tq9c6jFygkWx2Piq', tag: 'বক্তব্য', title: 'বিপ্লবের রাজপথে কণ্ঠস্বর', size: 'large' },
  { src: '/assets/Osman-Hadi.jpg', tag: 'বিপ্লবী', title: 'রাজপথে আপোষহীন', size: 'small' },
  { src: '/assets/23cef3fac665b11c69879d5198dbd755c52f11776a048789.jpg', tag: 'বিপ্লব', title: 'বিশাল জনসমুদ্র', size: 'tall' },
  { src: '/assets/hero-rally..webp', tag: 'ইনকিলাব', title: 'আন্দোলনের অগ্রদূত', size: 'small' },
  { src: '/assets/osman4-BZsl1Qk-.jpg', tag: 'প্রতিকৃতি', title: 'হাস্যোজ্জ্বল বীর', size: 'small' },
  { src: '/assets/1200px-Osman_Hadi.jpeg', tag: 'মিডিয়া', title: 'কণ্ঠস্বর যখন বজ্র', size: 'large' },
  { src: '/assets/Hadis-funeral.jpg', tag: 'বিদায়', title: 'শেষ বিদায়ের জনস্রোত', size: 'tall' },
  { src: '/assets/hadi-1766234773.jpg', tag: 'স্মৃতি', title: 'অমর হাদি', size: 'small' },
  { src: '/assets/image-343284-1766087320.webp', tag: 'সংগ্রাম', title: 'লড়াই চলবে', size: 'small' },
  { src: '/assets/image-343646-1766224013.jpg', tag: 'বিচার', title: 'বিচার চাই', size: 'small' },
  { src: '/assets/sharif-osman-hadi-was-shot-in-broad-daylight-last-week-in-dhaka-by-masked-attackers-images-social-280451154-16x9_0.webp', tag: 'নিউজ', title: 'আন্তর্জাতিক সংবাদ', size: 'large' },
  { src: '/assets/8f47e6b93edaf5672e43f1c575ddf0db2b6fe0a5b96a1330.jpg', tag: 'শহীদ', title: 'বীরের বিদায়', size: 'tall' },
  { src: '/assets/who-was-sharif-osman-hadi.jpg', tag: 'ইঞ্জিনিয়ার', title: 'কর্মজীবন', size: 'small' },
]

const Gallery = () => {
  return (
    <div className="py-32 px-6">
       <div className="text-center mb-16">
          <h2 className="text-4xl font-black font-rebel uppercase text-white/10 mb-2">Memory Album</h2>
          <h2 className="text-5xl font-black font-bengali text-white">স্মৃতি অ্যালবাম</h2>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[300px] gap-6 max-w-7xl mx-auto">
          {galleryItems.map((item, i) => (
            <div 
              key={i} 
              className={`group relative overflow-hidden rounded-[2rem] border border-white/5 bg-white/5
                ${item.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                ${item.size === 'tall' ? 'md:row-span-2' : ''}
              `}
            >
              {item.type === 'video' ? (
                 <iframe src={item.src} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" title={item.title} allowFullScreen frameBorder="0"></iframe>
              ) : (
                 <img src={item.src} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 contrast-125 saturate-0 group-hover:saturate-100" />
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
              
              <div className="absolute bottom-8 left-8">
                 <span className="px-3 py-1 bg-brand-crimson/20 text-brand-crimson text-[10px] font-bold uppercase tracking-widest rounded-full mb-3 inline-block font-bengali">{item.tag}</span>
                 <h4 className="text-2xl font-bold text-white font-bengali">{item.title}</h4>
              </div>
            </div>
          ))}
       </div>
    </div>
  )
}

export default Gallery
