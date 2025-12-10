'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface AccountData {
    companyName: string;
    industry: string;
    companySize: string;
    revenue: string;
    techStack: string;
    buyingStage: string;
    painPoints: string;
    budget: string;
}

interface Recommendation {
    playName: string;
    confidence: number;
    approach: string;
    tactics: string[];
    timeline: string;
    resources: string[];
    expectedWinRate: string;
    avgDealSize: string;
    keyMessages: string[];
    risks: string[];
    nextSteps: string[];
}

export default function SalesPlayRecommendation() {
    const [accountData, setAccountData] = useState<AccountData>({
        companyName: '',
        industry: '',
        companySize: '',
        revenue: '',
        techStack: '',
        buyingStage: '',
        painPoints: '',
        budget: ''
    });

    const [recommendation, setRecommendation] = useState<Recommendation | null>(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    const industries = [
        'SaaS', 'Fintech', 'Healthcare', 'E-commerce', 'Manufacturing',
        'Retail', 'Education', 'Real Estate', 'Other'
    ];

    const companySizes = [
        '1-10', '11-50', '51-200', '201-500', '501-1000', '1000+'
    ];

    const buyingStages = [
        'Awareness', 'Consideration', 'Decision', 'Negotiation', 'Renewal'
    ];

    const budgetRanges = [
        'Under $10K', '$10K-$50K', '$50K-$100K', '$100K-$250K', '$250K+'
    ];

    const handleInputChange = (field: keyof AccountData, value: string) => {
        setAccountData(prev => ({ ...prev, [field]: value }));
    };

    const analyzeAccount = () => {
        setIsAnalyzing(true);

        // Simulate AI analysis
        setTimeout(() => {
            const play = generateRecommendation(accountData);
            setRecommendation(play);
            setIsAnalyzing(false);
        }, 2000);
    };

    const generateRecommendation = (data: AccountData): Recommendation => {
        // Logic to determine best sales play
        const isEnterprise = ['501-1000', '1000+'].includes(data.companySize);
        const highBudget = ['$100K-$250K', '$250K+'].includes(data.budget);
        const earlyStage = ['Awareness', 'Consideration'].includes(data.buyingStage);

        if (isEnterprise && highBudget) {
            return {
                playName: 'Enterprise Strategic Play',
                confidence: 94,
                approach: 'Multi-threaded executive engagement',
                tactics: [
                    'Start with C-level outreach (CEO, CRO, CFO)',
                    'Conduct executive briefing or boardroom presentation',
                    'Deploy account-based marketing campaign',
                    'Leverage customer advisory board invitation',
                    'Assign dedicated Customer Success resource pre-sale'
                ],
                timeline: '6-12 months sales cycle',
                resources: ['Solution Architect', 'Executive Sponsor', 'Customer Success', 'Implementation Team'],
                expectedWinRate: '45%',
                avgDealSize: '$250K-$500K',
                keyMessages: [
                    'Focus on ROI and business transformation',
                    'Emphasize enterprise-grade security and compliance',
                    'Highlight strategic partnership opportunities'
                ],
                risks: ['Long sales cycle', 'Multiple decision makers', 'Procurement complexity'],
                nextSteps: [
                    'Research executive team LinkedIn profiles',
                    'Identify 3-5 champions within the organization',
                    'Prepare customized ROI analysis',
                    'Schedule discovery call with VP or above'
                ]
            };
        } else if (earlyStage && !isEnterprise) {
            return {
                playName: 'SMB Product-Led Growth Play',
                confidence: 88,
                approach: 'Self-serve trial with high-touch activation',
                tactics: [
                    'Offer 14-day free trial with no credit card',
                    'Automated onboarding email sequence',
                    'In-app tutorials and tooltips',
                    'Schedule quick-win demo on day 3 of trial',
                    'Founder-led outreach for qualified leads'
                ],
                timeline: '2-4 weeks sales cycle',
                resources: ['BDR/SDR', 'Product Specialist', 'Customer Success'],
                expectedWinRate: '28%',
                avgDealSize: '$10K-$25K annual',
                keyMessages: [
                    'Quick time-to-value (< 30 days)',
                    'Easy implementation, no IT required',
                    'Flexible month-to-month contracts'
                ],
                risks: ['Price sensitivity', 'High competition', 'Churn risk'],
                nextSteps: [
                    'Send trial invitation email',
                    'Monitor product usage in first 48 hours',
                    'Trigger intervention if no activity by day 2',
                    'Offer implementation call on day 5'
                ]
            };
        } else if (data.buyingStage === 'Renewal') {
            return {
                playName: 'Customer Expansion Play',
                confidence: 91,
                approach: 'Value realization + upsell motion',
                tactics: [
                    'Conduct Quarterly Business Review (QBR)',
                    'Present ROI analysis from current usage',
                    'Identify unused features or seats',
                    'Introduce new product capabilities',
                    'Offer expansion incentive (10% discount for +50% growth)'
                ],
                timeline: '1-2 months',
                resources: ['Account Executive', 'Customer Success Manager', 'Product Manager'],
                expectedWinRate: '65%',
                avgDealSize: '$50K-$150K expansion',
                keyMessages: [
                    'You\'re only using 40% of available features',
                    'Customers like you see 3x ROI in year 2',
                    'Lock in current pricing before increase'
                ],
                risks: ['Budget constraints', 'Competitive threats', 'Internal champion turnover'],
                nextSteps: [
                    'Review product usage analytics',
                    'Identify 2-3 expansion opportunities',
                    'Schedule QBR with economic buyer',
                    'Prepare customized expansion proposal'
                ]
            };
        } else {
            return {
                playName: 'Mid-Market Consultative Play',
                confidence: 82,
                approach: 'Discovery-led solution selling',
                tactics: [
                    'Multi-stakeholder discovery calls',
                    'Pain point mapping workshop',
                    'Custom demo focused on their workflow',
                    'Provide competitive analysis',
                    'Create business case with CFO-friendly metrics'
                ],
                timeline: '3-6 months sales cycle',
                resources: ['Account Executive', 'Sales Engineer', 'Customer Success'],
                expectedWinRate: '38%',
                avgDealSize: '$50K-$150K annual',
                keyMessages: [
                    'Solve [specific pain point] in 90 days',
                    'Similar companies reduced costs by 35%',
                    'Seamless integration with existing tools'
                ],
                risks: ['Evaluation paralysis', 'Budget approval delays', 'Competitor displacement'],
                nextSteps: [
                    'Complete discovery questionnaire',
                    'Map org chart and buying committee',
                    'Deliver customized demo within 5 days',
                    'Send ROI calculator and case studies'
                ]
            };
        }
    };

    const resetForm = () => {
        setAccountData({
            companyName: '',
            industry: '',
            companySize: '',
            revenue: '',
            techStack: '',
            buyingStage: '',
            painPoints: '',
            budget: ''
        });
        setRecommendation(null);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6 font-sans">
            {/* Back Button - Added for navigation safety */}
            <div className="max-w-7xl mx-auto mb-6">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-200"
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                    </svg>
                    Back to Home
                </Link>
            </div>

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">
                        Sales Play Recommendation Engine
                    </h1>
                    <p className="text-gray-600">
                        Input account attributes to receive AI-powered sales strategy recommendations
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Left Panel - Input Form */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                            <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Account Information
                        </h2>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Company Name
                                </label>
                                <input
                                    type="text"
                                    value={accountData.companyName}
                                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                                    placeholder="Acme Corp"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Industry
                                    </label>
                                    <select
                                        value={accountData.industry}
                                        onChange={(e) => handleInputChange('industry', e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                                    >
                                        <option value="">Select...</option>
                                        {industries.map(ind => (
                                            <option key={ind} value={ind}>{ind}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Company Size
                                    </label>
                                    <select
                                        value={accountData.companySize}
                                        onChange={(e) => handleInputChange('companySize', e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                                    >
                                        <option value="">Select...</option>
                                        {companySizes.map(size => (
                                            <option key={size} value={size}>{size} employees</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Estimated Annual Revenue
                                </label>
                                <input
                                    type="text"
                                    value={accountData.revenue}
                                    onChange={(e) => handleInputChange('revenue', e.target.value)}
                                    placeholder="$5M"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Current Tech Stack
                                </label>
                                <input
                                    type="text"
                                    value={accountData.techStack}
                                    onChange={(e) => handleInputChange('techStack', e.target.value)}
                                    placeholder="Salesforce, HubSpot, Slack"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Buying Stage
                                </label>
                                <select
                                    value={accountData.buyingStage}
                                    onChange={(e) => handleInputChange('buyingStage', e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                                >
                                    <option value="">Select...</option>
                                    {buyingStages.map(stage => (
                                        <option key={stage} value={stage}>{stage}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Budget Range
                                </label>
                                <select
                                    value={accountData.budget}
                                    onChange={(e) => handleInputChange('budget', e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                                >
                                    <option value="">Select...</option>
                                    {budgetRanges.map(range => (
                                        <option key={range} value={range}>{range}</option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Known Pain Points
                                </label>
                                <textarea
                                    value={accountData.painPoints}
                                    onChange={(e) => handleInputChange('painPoints', e.target.value)}
                                    placeholder="Manual reporting, data silos, scaling issues..."
                                    rows={3}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-gray-900"
                                />
                            </div>
                        </div>

                        <div className="mt-6 flex gap-3">
                            <button
                                onClick={analyzeAccount}
                                disabled={isAnalyzing || !accountData.companyName}
                                className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                            >
                                {isAnalyzing ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Analyzing...
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                        Get Recommendation
                                    </>
                                )}
                            </button>
                            <button
                                onClick={resetForm}
                                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors"
                            >
                                Reset
                            </button>
                        </div>
                    </div>

                    {/* Right Panel - Recommendation Output */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                            <svg className="w-6 h-6 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Recommended Sales Play
                        </h2>

                        {!recommendation && !isAnalyzing && (
                            <div className="flex flex-col items-center justify-center h-96 text-gray-400">
                                <svg className="w-24 h-24 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                </svg>
                                <p className="text-lg font-medium">No recommendation yet</p>
                                <p className="text-sm">Fill in account details and click &quot;Get Recommendation&quot;</p>
                            </div>
                        )}

                        {isAnalyzing && (
                            <div className="flex flex-col items-center justify-center h-96">
                                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mb-4"></div>
                                <p className="text-gray-600 font-medium">Analyzing account attributes...</p>
                                <p className="text-sm text-gray-500 mt-2">Matching to best sales play</p>
                            </div>
                        )}

                        {recommendation && (
                            <div className="space-y-6 overflow-y-auto max-h-[calc(100vh-250px)]">
                                {/* Play Header */}
                                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg p-6 text-white">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-2xl font-bold">{recommendation.playName}</h3>
                                        <div className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                                            {recommendation.confidence}% Match
                                        </div>
                                    </div>
                                    <p className="text-blue-100 text-lg">{recommendation.approach}</p>
                                </div>

                                {/* Key Metrics */}
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                                        <div className="text-2xl font-bold text-gray-900">{recommendation.expectedWinRate}</div>
                                        <div className="text-xs text-gray-600 mt-1">Win Rate</div>
                                    </div>
                                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                                        <div className="text-2xl font-bold text-gray-900">{recommendation.timeline}</div>
                                        <div className="text-xs text-gray-600 mt-1">Timeline</div>
                                    </div>
                                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                                        <div className="text-xl font-bold text-gray-900">{recommendation.avgDealSize}</div>
                                        <div className="text-xs text-gray-600 mt-1">Deal Size</div>
                                    </div>
                                </div>

                                {/* Tactics */}
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                        </svg>
                                        Recommended Tactics
                                    </h4>
                                    <ul className="space-y-2">
                                        {recommendation.tactics.map((tactic, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-gray-700 text-sm">{tactic}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Key Messages */}
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                        </svg>
                                        Key Messages
                                    </h4>
                                    <div className="space-y-2">
                                        {recommendation.keyMessages.map((message, idx) => (
                                            <div key={idx} className="bg-purple-50 border-l-4 border-purple-500 p-3 rounded">
                                                <p className="text-sm text-gray-700">{message}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Resources Needed */}
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        Resources Needed
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {recommendation.resources.map((resource, idx) => (
                                            <span key={idx} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                                                {resource}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Risks */}
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                        Key Risks
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {recommendation.risks.map((risk, idx) => (
                                            <span key={idx} className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                                                {risk}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Next Steps */}
                                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                        Immediate Next Steps
                                    </h4>
                                    <ol className="space-y-2">
                                        {recommendation.nextSteps.map((step, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0 mt-0.5">
                                                    {idx + 1}
                                                </span>
                                                <span className="text-gray-700 text-sm">{step}</span>
                                            </li>
                                        ))}
                                    </ol>
                                </div>

                                {/* Export Button */}
                                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Export Play to PDF
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
