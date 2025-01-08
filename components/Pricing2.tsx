import React from 'react'
import { Check, Star } from 'lucide-react'

const Pricing2 = () => {
    return (
        <div className="min-h-screen bg-black text-white p-4 md:p-8">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <div className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold">
                        Plans for every style of trading
                    </h1>
                    <p className="text-cyan-400">Pay yearly and get up to 45% off!</p>

                    {/* Toggle */}
                    <div className="inline-flex items-center bg-slate-800/50 rounded-full p-1">
                        <button className="px-6 py-2 rounded-full bg-slate-700">Monthly</button>
                        <button className="px-6 py-2 rounded-full">Yearly</button>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {/* Essential Plan */}
                    <div className="relative rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-6 space-y-6">
                        <div
                            className="absolute top-0 right-0 w-[350px] h-[350px] bg-contain bg-no-repeat bg-top-right pointer-events-none opacity-50 rounded-t-xl"
                            style={{
                                backgroundImage: "url('https://www.luxalgo.com/images/graphics/top_right_cobalt_diamond.svg')"
                            }}
                        />
                        <div className="space-y-2">
                            <span className="inline-block px-3 py-1 bg-slate-700 rounded-full text-sm">20% Off</span>
                            <h3 className="text-xl font-semibold">Essential</h3>
                            <div className="text-slate-400 line-through">$24.99</div>
                            <div className="flex items-baseline">
                                <span className="text-4xl font-bold">$19.99</span>
                                <span className="text-slate-400">/mo</span>
                            </div>
                            <div className="text-sm text-slate-400">$238.90 once, then $259.88 /yr</div>
                        </div>

                        <p className="text-sm text-slate-300">
                            Start out strong & automate price action, the most essential part of your charts.
                        </p>

                        <div className="space-y-4">
                            <div className="font-medium">All Essential features:</div>
                            <ul className="space-y-3">
                                {[
                                    "Price Action Concepts tools + scanner",
                                    "Community access w/ price action alerts",
                                    "Custom Alert Creator for PAC tools",
                                    "Alert Scripting for Price Action Concepts",
                                    "24/7 support & active tools updates"
                                ].map((feature) => (
                                    <li key={feature} className="flex items-start gap-2">
                                        <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                                        <span className="text-sm text-slate-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button className="w-full py-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors">
                            Subscribe
                        </button>

                        <div className="text-xs text-center text-slate-400">30-day money-back guarantee</div>
                    </div>

                    {/* Premium Plan */}
                    <div className="relative rounded-2xl bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 p-6 space-y-6">
                        <div
                            className="absolute top-0 right-0 w-[350px] h-[350px] bg-contain bg-no-repeat bg-top-right pointer-events-none opacity-50 rounded-t-xl"
                            style={{
                                backgroundImage: "url('https://www.luxalgo.com/images/graphics/top_right_cobalt_monitor_cursor.svg')"
                            }}
                        />
                        <div className="space-y-2">
                            <span className="inline-block px-3 py-1 bg-slate-700 rounded-full text-sm">30% Off</span>
                            <h3 className="text-xl font-semibold">Premium</h3>
                            <div className="text-slate-400 line-through">$39.99</div>
                            <div className="flex items-baseline">
                                <span className="text-4xl font-bold">$27.99</span>
                                <span className="text-slate-400">/mo</span>
                            </div>
                            <div className="text-sm text-slate-400">$335.92 once, then $479.88 /yr</div>
                        </div>

                        <p className="text-sm text-slate-300">
                            The most popular set of tools & signals ever created for technical traders.
                        </p>

                        <div className="space-y-4">
                            <div className="font-medium">All features from Essential, plus:</div>
                            <ul className="space-y-3">
                                {[
                                    "Signals & Overlays tools + scanner",
                                    "Oscillator Matrix tools + scanner",
                                    "Full scanner alerts & save strategies",
                                    "Custom Alert Creator for all 3 tools",
                                    "Alert Scripting functionality for all 3 tools"
                                ].map((feature) => (
                                    <li key={feature} className="flex items-start gap-2">
                                        <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                                        <span className="text-sm text-slate-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button className="w-full py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors">
                            Subscribe
                        </button>

                        <div className="text-xs text-center text-slate-400">30-day money-back guarantee</div>
                    </div>

                    {/* Ultimate Plan */}
                    <div className="relative rounded-2xl bg-gradient-to-br from-slate-800 via-purple-900 to-purple-800 p-6 space-y-6">
                        <div
                            className="absolute top-0 right-0 w-[350px] h-[350px] bg-contain bg-no-repeat bg-top-right pointer-events-none opacity-50 rounded-t-xl"
                            style={{
                                backgroundImage: "url('https://www.luxalgo.com/images/graphics/top_right_cobalt_square_magnifying_glass.svg')"
                            }}
                        />
                        <div className="absolute top-4 right-4">
                            <Star className="w-6 h-6 text-purple-400" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <span className="inline-block px-3 py-1 bg-slate-700 rounded-full text-sm">45% Off</span>
                                <span className="inline-block px-3 py-1 bg-purple-700 rounded-full text-sm">Popular</span>
                            </div>
                            <h3 className="text-xl font-semibold">Ultimate</h3>
                            <div className="text-slate-400 line-through">$59.99</div>
                            <div className="flex items-baseline">
                                <span className="text-4xl font-bold">$32.99</span>
                                <span className="text-slate-400">/mo</span>
                            </div>
                            <div className="text-sm text-slate-400">$386.93 once, then $718.88 /yr</div>
                        </div>

                        <p className="text-sm text-slate-300">
                            For data-driven traders who want professional backtesting with AI.
                        </p>

                        <div className="space-y-4">
                            <div className="font-medium">All features from Premium, plus:</div>
                            <ul className="space-y-3">
                                {[
                                    "⚡ AI Backtesting Assistant platform access",
                                    "Full suite w/3 Backtester on TradingView",
                                    "Deep optimization engine for signal settings",
                                    "Scanners, bots, & backtests shared weekly",
                                    "Priority 24/7 support & active product updates"
                                ].map((feature) => (
                                    <li key={feature} className="flex items-start gap-2">
                                        <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                                        <span className="text-sm text-slate-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button className="w-full py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition-colors">
                            Subscribe
                        </button>

                        <div className="text-xs text-center text-slate-400">30-day money-back guarantee</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing2