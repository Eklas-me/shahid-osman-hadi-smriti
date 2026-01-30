import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Feather, Scale, Shield } from 'lucide-react'

const Biography = () => {
    return (
        <section className="py-32 relative overflow-hidden bg-brand-navy">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-20 items-start">
                    
                    {/* Sticky Title */}
                    <div className="lg:w-1/3 sticky top-32">
                        <h2 className="text-6xl font-black text-white/5 uppercase tracking-tighter leading-none mb-4 font-rebel">Biography</h2>
                        <h3 className="text-5xl font-black text-brand-crimson mb-8 font-bengali">
                            জীবন ও সংগ্রাম
                        </h3>
                        <div className="w-20 h-2 bg-brand-crimson rounded-full"></div>
                    </div>

                    {/* Content Grid */}
                    <div className="lg:w-2/3 space-y-16">
                        <p className="text-3xl font-medium text-white/80 leading-relaxed font-bengali">
                            <strong className="text-brand-crimson">শারীফ ওসমান বিন হাদি</strong> (জন্মগত নাম: ওসমান গনি)
                            ছিলেন একবিংশ শতাব্দীর বাংলাদেশের একজন অন্যতম প্রভাবশালী বিপ্লবী কণ্ঠস্বর। ১৯৯৩ সালের ৩০ জুন
                            ঝালকাঠির নলছিটির এক ধর্মপ্রাণ পরিবারে মাওলানা আব্দুল হাদির কনিষ্ঠ সন্তান হিসেবে তার জন্ম।
                        </p>

                        <div className="grid md:grid-cols-2 gap-8">
                            <motion.div 
                                whileHover={{ scale: 1.02 }}
                                className="p-10 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 transition-colors group"
                            >
                                <span className="mb-6 block text-brand-emerald text-brand-crimson"><GraduationCap size={40} /></span>
                                <h4 className="text-2xl font-black text-white mb-4 font-bengali">শিক্ষা জীবন</h4>
                                <p className="text-white/50 leading-relaxed font-bengali">
                                    তিনি ঝালকাঠির নেছারাবাদ কামিল মাদরাসা থেকে আলিম সম্পন্ন করেন। পরবর্তীতে <strong className="text-white">ঢাকা বিশ্ববিদ্যালয়ের</strong> রাষ্ট্রবিজ্ঞান বিভাগ থেকে উচ্চশিক্ষা লাভ করেন।
                                </p>
                            </motion.div>

                            <motion.div 
                                whileHover={{ scale: 1.02 }}
                                className="p-10 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/10 transition-colors group"
                            >
                                <span className="mb-6 block text-brand-emerald text-brand-crimson"><Briefcase size={40} /></span>
                                <h4 className="text-2xl font-black text-white mb-4 font-bengali">পেশাগত জীবন</h4>
                                <p className="text-white/50 leading-relaxed font-bengali">
                                    একজন স্বপ্নদ্রষ্টা শিক্ষক হিসেবে তিনি ঢাকার <strong className="text-white">'ইউনিভার্সিটি অব স্কলার্স'</strong>-এর বিজনেস স্টাডিজ বিভাগে লেকচারার হিসেবে কর্মরত ছিলেন।
                                </p>
                            </motion.div>
                        </div>

                        <div className="space-y-12 pt-8">
                            <div className="flex gap-8 group">
                                <div className="w-16 h-16 shrink-0 bg-brand-crimson/10 text-brand-crimson rounded-2xl flex items-center justify-center border border-brand-crimson/20">
                                    <Feather size={32} />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-black text-white mb-3 font-bengali">সাহিত্য ও সংস্কৃতি</h4>
                                    <p className="text-white/50 leading-relaxed font-bengali">
                                        ওসমান হাদি কেবল একজন বিপ্লবীই ছিলেন না, তার ভেতরে বাস করত এক সংবেদনশীল কবির মন। ২০২৪ সালের অমর একুশে বইমেলায় তার <strong className="text-white italic">'লভায় লালশাক পূবের আকাশ'</strong> নামে একটি কাব্যগ্রন্থ প্রকাশিত হয়।
                                    </p>
                                </div>
                            </div>

                            <div className="bg-brand-crimson/5 border-l-8 border-brand-crimson p-12 rounded-3xl my-16">
                                <blockquote className="text-4xl font-black text-white italic leading-tight font-bengali">
                                    "যদি জুলাইয়ের সাথে গাদ্দারি করেন, আমার বাপেও আমার বাপ না।"
                                </blockquote>
                            </div>

                            <div className="flex gap-8 group">
                                <div className="w-16 h-16 shrink-0 bg-brand-crimson/10 text-brand-crimson rounded-2xl flex items-center justify-center border border-brand-crimson/20">
                                    <Scale size={32} />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-black text-white mb-3 font-bengali">বিপ্লবী দর্শন: 'ইনসাফ'</h4>
                                    <p className="text-white/50 leading-relaxed font-bengali">
                                        তার রাজনীতির মূল দর্শন ছিল <strong className="text-white italic">'ইকুয়াল সভারেন্টি'</strong> বা <strong className="text-white italic">'ইনসাফ'</strong>। তিনি বিশ্বাস করতেন, একটি রাষ্ট্রের প্রকৃত সার্বভৌমত্ব তখনই অর্জিত হয় যখন তা বাহ্যিক আধিপত্যমুক্ত হয়।
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-8 group p-4 border border-white/5 rounded-2xl hover:border-brand-crimson/30 transition-colors">
                                <div className="w-16 h-16 shrink-0 bg-white/5 text-white/40 rounded-2xl flex items-center justify-center border border-white/10">
                                    <Shield size={32} />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-black text-white mb-3 font-bengali">ত্যাগ ও ঝুঁকি</h4>
                                    <p className="text-white/50 leading-relaxed font-bengali">
                                        ইনকিলাব মঞ্চের মুখপাত্র হিসেবে ভারতীয় আধিপত্যবাদের বিরুদ্ধে তার আপোষহীন অবস্থান তাকে অনেক বিপদের মুখে ফেলেছিল। শাহাদাতের কিছুদিন আগ পর্যন্ত তিনি বিদেশি প্রায় <strong className="text-white">৩০টিরও বেশি নম্বর</strong> থেকে প্রাণনাশের হুমকি পেয়েছিলেন।
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Biography
