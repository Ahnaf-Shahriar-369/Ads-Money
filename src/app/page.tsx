// ...existing code...
import Image from "next/image";
import TopBannerAd from "./components/TopBannerAd";
import MiddleBannerAd from "./components/MiddleBannerAd";
// BottomBannerAd removed per request

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "ক্রিপ্টো সহজভাবে — YourSite",
    description: "সহজ বাংলায় ক্রিপ্টোকারেন্সি কী এবং কীভাবে কাজ করে।",
    url: "https://example.com",
  };

  const articles = [
    {
      id: 1,
      title: "ক্রিপ্টোকারেন্সি কী?",
      content:
        "ক্রিপ্টোকারেন্সি, বা ক্রিপ্টো, ডিজিটাল পেমেন্টের একটি রূপ। প্রচলিত মুদ্রা যা ভৌত অর্থের প্রতিনিধিত্ব করে, তার বিপরীতে, ক্রিপ্টোকারেন্সিগুলি সম্পূর্ণরূপে ডিজিটাল সম্পদ। যদিও মানুষ এটি প্রাথমিকভাবে অনলাইন লেনদেনের জন্য ব্যবহার করে, আপনি কখনও কখনও ভৌত সম্পদ কেনার জন্য এটি ব্যবহার করতে পারেন। যদিও ঐতিহ্যবাহী পেমেন্ট পদ্ধতিগুলি কেন্দ্রীয় ব্যাংক এবং সরকার দ্বারা নিয়ন্ত্রিত হয়, ক্রিপ্টোকারেন্সি বিকেন্দ্রীভূত, অর্থাৎ এটি একটি কেন্দ্রীয় কর্তৃপক্ষ দ্বারা নিয়ন্ত্রিত হয় না।",
    },
    {
      id: 2,
      title: "ক্রিপ্টোকারেন্সি কিভাবে কাজ করে?",
      content: `ক্রিপ্টোকারেন্সিগুলি ব্লকচেইন প্রযুক্তির উপর ভিত্তি করে তৈরি, যা এগুলিকে অত্যন্ত নিরাপদ করে তোলে, যদিও বিশ্বাসযোগ্য এক্সচেঞ্জ বেছে নেওয়ার দায়িত্ব এখনও বিনিয়োগকারীদের উপর। লেনদেন ইস্যু, যাচাই এবং সুরক্ষিত করার জন্য ক্রিপ্টোগ্রাফিক কৌশল (কোড লেখা এবং পাঠোদ্ধার প্রক্রিয়া) ব্যবহার করা হয়। পাবলিক লেজারের মাধ্যমে, লেনদেনগুলি ট্রেসযোগ্য থাকে এবং জাল করা যায় না। এই পিয়ার-টু-পিয়ার ডিজিটাল সম্পদ ব্যবস্থা বিশ্বব্যাপী অর্থ প্রেরণ এবং গ্রহণকে দ্রুত, সহজ এবং সস্তা করে তোলে। কোনও মুদ্রা বিনিময়ের প্রয়োজন নেই, বা কোনও মোটা ফিও নেই।

অ্যাক্সেসিবিলিটি। ক্রিপ্টো বিনিয়োগ ইন্টারনেট অ্যাক্সেস এবং কম্পিউটার, স্মার্টফোন বা মোবাইল ডিভাইস সহ যে কারও জন্য উন্মুক্ত।

কম লেনদেনের খরচ। ক্রিপ্টোকারেন্সি ব্লকচেইন লেনদেনের খরচ কয়েক ডলারের বেশি নয়, অনেকের দাম মাত্র পয়সা।

লেনদেনের গতি। বিশ্বব্যাপী সম্পদ প্রেরণ, গ্রহণ এবং স্থানান্তরের জন্য ক্রিপ্টোকারেন্সির চেয়ে দ্রুততর অন্য খুব কম প্রতিষ্ঠানই রয়েছে।`,
    },
    {
      id: 3,
      title: "ক্রিপ্টোকারেন্সির দাম কীভাবে কাজ করে?",
      content:
        "ক্রিপ্টোকারেন্সিগুলি ফাঞ্জিবল, অর্থাৎ কেনা, বিক্রি বা লেনদেনের সময় এর মূল্য একই থাকে। এটি নন-ফাঞ্জিবল টোকেন (NFT) এর মতো নয়, যার মান অনেকগুলি ভেরিয়েবলের উপর নির্ভর করে, যেমন এটি কোন ডিজিটাল সম্পদের সাথে সংযুক্ত। ক্রিপ্টোর বাজার মূলধন প্রচলনে থাকা কয়েনের সংখ্যার উপর নির্ভর করে। যদিও ক্রিপ্টোকারেন্সি বাজার মার্কিন সরকার দ্বারা ব্যাপকভাবে নিয়ন্ত্রিত নয়, তবুও এগুলি করযোগ্য সম্পদ। আপনাকে অভ্যন্তরীণ রাজস্ব পরিষেবা (IRS) এর সাথে যেকোনো লাভ বা ক্ষতির বিবরণ জমা দিতে হবে।",
    },
    {
      id: 4,
      title: "ক্রিপ্টোকারেন্সি মাইনিং কী এবং এটি কীভাবে কাজ করে?",
      content:
        "ক্রিপ্টোকারেন্সি মাইনিং শব্দটি ক্রিপ্টোকারেন্সি তৈরির বর্ণনা দিতে ব্যবহৃত হয়। ক্রিপ্টো লেনদেন যাচাই করা প্রয়োজন, এবং মাইনিং যাচাইকরণ সম্পাদন করে এবং ব্লকচেইনে লেনদেন যোগ করে এমন বিশেষ হার্ডওয়্যার এবং সফ্টওয়্যার ব্যবহারের মাধ্যমে নতুন ক্রিপ্টোকারেন্সি তৈরি করে। সমস্ত ক্রিপ্টোকারেন্সি মাইনিং থেকে আসে না। উদাহরণস্বরূপ, আপনি যে ক্রিপ্টো ব্যয় করতে পারবেন না তা খনন করা হয় না। পরিবর্তে, ডেভেলপাররা একটি হার্ড ফর্কের মাধ্যমে নতুন মুদ্রা তৈরি করে, যা ব্লকচেইনে একটি নতুন শৃঙ্খল তৈরি করে।",
    },
    {
      id: 5,
      title: "ক্রিপ্টোকারেন্সির সুবিধা কী কী?",
      content:
        "যখন ক্রিপ্টোকারেন্সি বিনিময়ের মাধ্যম হিসেবে আসে, তখন ঐতিহ্যবাচক মুদ্রার তুলনায় এর কিছু সুবিধা রয়েছে। একটি সুবিধা হলো গোপনীয়তা। যদিও ক্রিপ্টোকারেন্সি পেমেন্ট পাবলিক রেকর্ডে থাকে এবং যে কেউ লেনদেনের তথ্য দেখতে এবং ক্রিপ্টো ওয়ালেটের বিষয়বস্তু দেখতে পারে, আপনাকে কোনও ব্যক্তিগত তথ্য প্রদান করতে হবে না। ক্রিপ্টোকারেন্সির আরেকটি সুবিধা হল এটি বিশ্বব্যাপী, তাই বৈদেশিক মুদ্রার হার গণনা বা পরিশোধ করার কোনও প্রয়োজন নেই।",
    },
    {
      id: 6,
      title: "ক্রিপ্টোকারেন্সির প্রকারভেদ",
      content:
        "ক্রিপ্টোকারেন্সি মুদ্রা বা টোকেন হিসেবে পাওয়া যায়। তাদের মধ্যে পার্থক্য হল টোকেন হল ব্লকচেইনে বিদ্যমান সম্পদ, অন্যদিকে মুদ্রা ভার্চুয়াল, ডিজিটাল বা বাস্তব হতে পারে। মুদ্রাগুলি ঐতিহ্যবাচক অর্থের মতো; একটি ডিজিটাল মুদ্রার নিজস্ব ব্লকচেইন থাকে। বিপরীতে, একটি টোকেন একটি বিদ্যমান ব্লকচেইনে তৈরি করা হয় এবং মুদ্রা হিসেবে বা সম্পদের মালিকানা উপস্থাপন করতে ব্যবহার করা যেতে পারে। প্রথম যে ক্রিপ্টোকারেন্সি চালু করা হয়েছিল তা ছিল বিটকয়েন।",
    },
    {
      id: 7,
      title: "ক্রিপ্টোকারেন্সি বিনিয়োগের প্রকারভেদ",
      content: `মানুষ প্রায়শই কয়েকটি ভিন্ন উপায়ে ক্রিপ্টোতে বিনিয়োগ করে: ব্যক্তিগত শখ হিসেবে, সম্পদ তৈরির কৌশল হিসেবে, অথবা তাদের পেশার অংশ হিসেবে।

১. স্বল্পমেয়াদী ক্রিপ্টো বিনিয়োগ (ক্রিপ্টোকারেন্সি ট্রেডিং): ২০২২ সালের ক্রিপ্টো ক্র্যাশ দেখিয়েছে যে, ক্রিপ্টো বাজার অস্থিতিশীল এবং অপ্রত্যাশিত। ট্রেডিং হল একটি জনপ্রিয় স্বল্পমেয়াদী ক্রিপ্টো বিনিয়োগ কৌশল।

২. দীর্ঘমেয়াদী ক্রিপ্টো বিনিয়োগ: আপনি যদি দীর্ঘমেয়াদী কৌশল হিসেবে ক্রিপ্টো বিনিয়োগের দিকে তাকান, তাহলে উত্থান-পতন সম্ভবত কম উদ্বেগজনক হবে।`,
    },
    {
      id: 8,
      title: "ক্রিপ্টোকারেন্সিতে বিনিয়োগ করার আগে কী করবেন",
      content: `যদি আপনি শুরু করার জন্য প্রস্তুত হন, তাহলে নিম্নলিখিত তিনটি বিবেচনা দিয়ে শুরু করুন:

১. আপনার বিনিয়োগের লক্ষ্য নির্ধারণ করুন: আপনি কেন ক্রিপ্টোকারেন্সিতে বিনিয়োগ করছেন? আপনার ক্লায়েন্ট বা নিয়োগকর্তার লক্ষ্য কী? ঝুঁকির প্রতি সহনশীলতা এবং বিনিয়োগের পিছনের কারণগুলি আপনার পছন্দগুলিকে পরিচালনা করতে সাহায্য করতে পারে।

২. ক্রিপ্টো শিল্পের অবস্থা বিশ্লেষণ করুন: আপনি যদি প্রতিষ্ঠিত ক্রিপ্টো বিশেষজ্ঞদের পরামর্শ চান, তাহলে অনেকেই ছোট শুরু করার এবং ক্রিপ্টো ট্রেডিং এবং ডিজিটাল মুদ্রার জগৎ কীভাবে কাজ করে সে সম্পর্কে ধারণা তৈরি করার জন্য সময় নেওয়ার পরামর্শ দেবেন।

৩. আপনার ঝুঁকি গণনা করুন: ঝুঁকি বিনিয়োগের একটি স্বাভাবিক অংশ। ক্রিপ্টোকারেন্সির অস্থিরতার কারণে, এটি প্রচুর পরিমাণে ঝুঁকি নিয়ে আসে যা আপনাকে সচেতন থাকতে হবে।`,
    },
  ];

  return (
    <div className="relative min-h-screen text-red-600">
      {/* Animated background */}
      <div className="fixed inset-0 -z-20">
        <div className="absolute inset-0 bg-[url('/bg.webp')] bg-center bg-cover filter blur-sm brightness-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-white/10 to-transparent" />
        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />
      </div>

      {/* JSON-LD for SEO */}
      <script key="ld-json" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* TOP AD SLOT */}
      <header className="w-full pt-4 pb-8 md:pb-12 lg:pb-16 opacity-0 animate-[fadeInDown_0.8s_ease-out_forwards]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="bg-white/95 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer transform-gpu overflow-hidden">
            <TopBannerAd />
          </div>
        </div>
      </header>

      {/* Main layout */}
      <div className="max-w-[1400px] mx-auto flex gap-4 items-start px-4 md:px-6 lg:px-8 pb-8">
        {/* LEFT MAIN AD (desktop only) */}
        <aside className="hidden lg:block w-40 xl:w-48 flex-shrink-0 mt-20 opacity-0 animate-[fadeInLeft_0.8s_ease-out_0.2s_forwards]">
          <div className="sticky top-20">
            <div className="bg-white/90 border rounded-lg p-3 text-sm text-gray-800 shadow hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer transform-gpu animate-[float_3s_ease-in-out_infinite]">
              LEFT MAIN AD
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-1 max-w-4xl mx-auto">
          <div className="space-y-6">
            {/* Hero section */}
            <section className="mx-auto w-full rounded-xl bg-white/60 backdrop-blur-sm border border-white/40 shadow-lg overflow-hidden opacity-0 animate-[fadeIn_1s_ease-out_0.3s_forwards] hover:shadow-2xl transition-all duration-500 group transform-gpu">
              <div className="p-5 md:p-8 lg:p-10">
                <div className="flex flex-col md:flex-row md:items-center md:gap-6">
                  <div className="w-full md:w-1/2 overflow-hidden rounded-lg">
                    <div className="transform transition-transform duration-700 group-hover:scale-110">
                      <Image
                        src="/chart.webp"
                        alt="Crypto chart"
                        width={1200}
                        height={800}
                        className="w-full h-auto block object-cover shadow-inner"
                        priority
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 mt-4 md:mt-0">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-red-600 leading-tight animate-pulse">
                      সুচনা
                    </h1>
                    <p className="mt-3 text-sm md:text-base text-red-600/95 opacity-0 animate-[fadeInUp_1s_ease-out_0.5s_forwards]">
                      ক্রিপ্টোকারেন্সি হল ডিস্ট্রিবিউটেড ডিজিটাল মুদ্রা যেখানে লেনদেন ব্লকচেইনে নথিভুক্ত হয়।
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Articles with side ads */}
            {articles.map((article, index) => (
              <div key={article.id} className="opacity-0 animate-[fadeIn_1s_ease-out_forwards]" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                {/* Middle ad before article */}
                <section className="mx-auto w-full mb-6">
                  {index === 0 ? (
                    // First middle ad - real Adsterra ad
                    <div className="bg-white/95 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.01] cursor-pointer transform-gpu overflow-hidden">
                      <MiddleBannerAd />
                    </div>
                  ) : (
                    // Other middle ads - placeholder
                    <div className="bg-white/90 border border-gray-200 rounded-lg p-3 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.01] cursor-pointer transform-gpu">
                      <div className="text-gray-600 text-sm font-medium">Middle ad {index + 1}</div>
                    </div>
                  )}
                </section>

                {/* Article with side ads */}
                <div className="relative flex gap-3 items-start">
                  {/* Left article ad */}
                  <aside className="hidden xl:block w-32 flex-shrink-0 opacity-0 animate-[fadeInLeft_0.8s_ease-out_forwards]" style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
                    <div className="sticky top-32">
                      <div className="bg-gradient-to-br from-blue-50 to-purple-50 border border-gray-200 rounded-lg p-2 text-xs text-gray-700 shadow hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer transform-gpu animate-[bounce_2s_ease-in-out_infinite]">
                        <div className="text-center font-medium">Side Ad L{index + 1}</div>
                      </div>
                    </div>
                  </aside>

                  {/* Article content */}
                  <article className="flex-1">
                    <div className="bg-white/55 border border-white/30 rounded-lg p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group transform-gpu">
                      <h2 className="text-xl font-semibold mb-4 text-red-600 group-hover:text-red-700 transition-colors duration-300">
                        {article.title}
                      </h2>
                      <div className="prose prose-lg max-w-none text-red-600/90 leading-relaxed">
                        {article.content.split("\n").map((paragraph, pIndex) => (
                          <p key={pIndex} className="mb-3 last:mb-0 hover:text-red-600 transition-colors duration-200">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </article>

                  {/* Right article ad */}
                  <aside className="hidden xl:block w-32 flex-shrink-0 opacity-0 animate-[fadeInRight_0.8s_ease-out_forwards]" style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
                    <div className="sticky top-32">
                      <div className="bg-gradient-to-br from-green-50 to-yellow-50 border border-gray-200 rounded-lg p-2 text-xs text-gray-700 shadow hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer transform-gpu animate-[bounce_2s_ease-in-out_infinite_reverse]">
                        <div className="text-center font-medium">Side Ad R{index + 1}</div>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* RIGHT MAIN AD (desktop only) */}
        <aside className="hidden lg:block w-40 xl:w-48 flex-shrink-0 mt-20 opacity-0 animate-[fadeInRight_0.8s_ease-out_0.2s_forwards]">
          <div className="sticky top-20">
            <div className="bg-white/90 border rounded-lg p-3 text-sm text-gray-800 shadow hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer transform-gpu animate-[float_3s_ease-in-out_infinite_reverse]">
              RIGHT MAIN AD
            </div>
          </div>
        </aside>
      </div>

      {/* Mobile bottom ad (kept) */}
      <div className="md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[92%] max-w-md opacity-0 animate-[bounceIn_1s_ease-out_0.8s_forwards] z-50">
        <div className="bg-white/95 border rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
          <div className="p-2 text-center text-sm text-gray-800">
            MOBILE BANNER AD
          </div>
        </div>
      </div>

      {/* Bottom banner removed (BottomBannerAd no longer rendered) */}

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes fadeInDown { from { transform: translateY(-30px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }
        @keyframes fadeInUp { from { transform: translateY(20px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }
        @keyframes fadeInLeft { from { transform: translateX(-30px); opacity: 0 } to { transform: translateX(0); opacity: 1 } }
        @keyframes fadeInRight { from { transform: translateX(30px); opacity: 0 } to { transform: translateX(0); opacity: 1 } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
        @keyframes bounceIn { 0% { transform: translate(-50%, 100px); opacity: 0; } 60% { transform: translate(-50%, -10px); opacity: 1; } 100% { transform: translate(-50%, 0); opacity: 1; } }
      `}</style>
    </div>
  );
}