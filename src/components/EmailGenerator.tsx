'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function EmailCadenceGenerator() {
    const [inputText, setInputText] = useState('');
    const [emailResult, setEmailResult] = useState('Your email content will appear here.');
    const [isLoading, setIsLoading] = useState(false);

    const quickActions = [
        "Write a friendly follow-up email after connecting with someone at a conference",
        "Write an email to organize a team building",
        "Write an email outlining company's visionary strategy",
        "Write a cold email to a potential business connection"
    ];

    const handleSubmit = async () => {
        if (!inputText.trim()) return;

        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setEmailResult(`Generated email based on: "${inputText}"\n\n[Email cadence library would populate here]`);
            setIsLoading(false);
        }, 1000);
    };

    const handleQuickAction = (action: string) => {
        setInputText(action);
        setIsLoading(true);
        setTimeout(() => {
            setEmailResult(`Generated email for: "${action}"\n\n[Comprehensive email cadence templates would appear here]`);
            setIsLoading(false);
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            {/* Back Button - Preserved for navigation */}
            <Link
                href="/"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-200 mb-6"
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

            <div className="max-w-7xl mx-auto">
                {/* Main Content Area */}
                <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Panel - Input */}
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                Tell us about your email
                            </h2>
                            <div className="relative">
                                <textarea
                                    value={inputText}
                                    onChange={(e) => setInputText(e.target.value)}
                                    placeholder="Write an email to a colleague asking for help with a project"
                                    className="w-full h-96 p-4 border-2 border-blue-300 rounded-lg focus:outline-none focus:border-blue-500 resize-none text-gray-700 placeholder-gray-400"
                                />
                                <button
                                    onClick={handleSubmit}
                                    disabled={!inputText.trim() || isLoading}
                                    className="absolute bottom-4 right-4 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 text-white rounded-full p-3 shadow-lg transition-colors"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Right Panel - Output */}
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                Email result
                            </h2>
                            <div className="w-full h-96 p-6 bg-gray-50 rounded-lg border border-gray-200 overflow-y-auto">
                                {isLoading ? (
                                    <div className="flex items-center justify-center h-full">
                                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                                    </div>
                                ) : (
                                    <p className="text-gray-600 whitespace-pre-wrap">
                                        {emailResult}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Action Buttons */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {quickActions.map((action, index) => (
                        <button
                            key={index}
                            onClick={() => handleQuickAction(action)}
                            disabled={isLoading}
                            className="bg-white hover:bg-gray-50 disabled:bg-gray-100 text-gray-700 p-4 rounded-lg shadow-sm border border-gray-200 text-left transition-colors text-sm leading-relaxed"
                        >
                            {action}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
