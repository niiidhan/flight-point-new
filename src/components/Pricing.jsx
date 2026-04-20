import React, { useLayoutEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Pricing() {
    const sectionRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".pricing-animate", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                    toggleActions: "play none none none"
                },
                y: 25,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out"
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="pricing" ref={sectionRef} className="min-h-[calc(100vh-72px)] w-full py-16 bg-white border-b border-slate-200 flex flex-col items-center justify-center">
            <div className="mx-auto max-w-4xl px-6">
                <div className="mx-auto max-w-2xl space-y-3 text-center mb-12 pricing-animate">
                    <h1 className="text-center text-3xl font-black lg:text-4xl tracking-tighter text-slate-900">
                        Pricing that Scales with You
                    </h1>
                    <p className="text-slate-500 font-medium text-sm">
                        Choose the plan that fits your travel style.
                    </p>
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-5 md:gap-0 pricing-animate">
                    {/* Free Plan */}
                    <div className="rounded-[var(--radius)] flex flex-col justify-between space-y-6 border border-slate-200 p-6 md:col-span-2 md:my-2 md:rounded-r-none md:border-r-0 lg:p-8 bg-[#FAFAFA]">
                        <div className="space-y-4">
                            <div>
                                <h2 className="font-bold text-slate-900 uppercase tracking-widest text-[10px]">Free</h2>
                                <span className="my-2.5 block text-2xl font-black text-slate-900" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>$0 / mo</span>
                                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Basic Plan</p>
                            </div>

                            <Button
                                variant="outline"
                                className="w-full font-bold h-10 text-xs"
                                asChild
                            >
                                <a href="#">Get Started</a>
                            </Button>

                            <hr className="border-dashed border-slate-200" />

                            <ul className="list-outside space-y-2.5 text-xs">
                                {[
                                    'Access 25+ airline programs',
                                    'Browse popular award routes',
                                    'Explore redemption options',
                                    '7-day cached award data'
                                ].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center gap-2 font-bold text-slate-600">
                                        <Check className="size-3.5 text-slate-400" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Pro Plan */}
                    <div className="bg-white rounded-[var(--radius)] border border-slate-200 p-6 shadow-xl shadow-slate-900/5 md:col-span-3 lg:p-10 relative z-10">
                        <div className="grid gap-6 sm:grid-cols-2 h-full">
                            <div className="space-y-5 flex flex-col">
                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <h2 className="font-bold text-blue-600 uppercase tracking-widest text-[10px]">Premium</h2>
                                        <span className="bg-blue-50 text-blue-600 px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-tight">Popular</span>
                                    </div>
                                    <span className="my-2.5 block text-2xl font-black text-slate-900" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>$8.33 / mo</span>
                                    <p className="text-slate-400 text-[10px] font-bold">Billed yearly at $99.99</p>
                                </div>

                                <Button
                                    className="w-full font-bold h-10 text-xs bg-slate-900 hover:bg-black"
                                    asChild
                                >
                                    <a href="#">Get Started</a>
                                </Button>
                                
                                <div className="mt-auto pt-5 border-t border-slate-100 italic text-[9px] text-slate-400 leading-relaxed">
                                    Flightpoints is independent. Award data refreshed continuously.
                                </div>
                            </div>

                            <div>
                                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4">Everything in free plus :</div>

                                <ul className="list-outside space-y-2.5 text-xs">
                                    {[
                                        'Real-time award availability',
                                        'Search up to 360 days in advance',
                                        'No delays. No outdated results',
                                        'Search all supported programs',
                                        'Advanced filters & alliances',
                                        'Multi-airport & region search',
                                        'Unlimited instant alerts',
                                        'Email + SMS alerts',
                                        'Priority route tracking'
                                    ].map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center gap-2.5 font-bold text-slate-700 leading-tight">
                                            <Check className="size-3.5 text-blue-600 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
