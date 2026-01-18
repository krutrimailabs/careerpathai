'use client';

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calendar, IndianRupee, Award, ExternalLink } from "lucide-react";
const scholarships = [
    {
        id: '1', 
        slug: 'reliance-foundation-scholarship',
        name: 'Reliance Foundation Scholarship 2024',
        provider: 'Reliance Foundation',
        category: 'Merit-cum-Means',
        amount: '₹2,00,000 - ₹6,00,000',
        deadline: '15th Oct 2024',
        eligibility: 'Open for undergraduate and postgraduate students. Must have secured 60% in 12th.',
        exams: ['JEE Mains', 'NEET'],
        colleges: ['BITS Pilani', 'IIT Bombay']
    },
    {
        id: '2',
        slug: 'hdfc-badhte-kadam',
        name: 'HDFC Badhte Kadam Scholarship',
        provider: 'HDFC Bank',
        category: 'Need-based',
        amount: '₹1,00,000',
        deadline: '30th Sep 2024',
        eligibility: 'For students who have lost earning family members or are facing financial crisis.',
        exams: [],
        colleges: []
    }
];

export default function ScholarshipDetailPage({ params }: { params: { slug: string } }) {
    const scholarship = scholarships.find(s => s.slug === params.slug);

    if (!scholarship) {
        return notFound();
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <Link href="/scholarships" className="inline-flex items-center text-sm text-zinc-500 hover:text-blue-600 mb-6">
                <ArrowLeft className="w-4 h-4 mr-1" /> Back to Scholarships
            </Link>

            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 mb-8">
                <div className="flex flex-col md:flex-row justify-between gap-6 mb-6">
                    <div>
                        <div className="flex gap-2 mb-3">
                            <Badge className="bg-blue-600">{scholarship.category}</Badge>
                            <Badge variant="outline">{scholarship.provider}</Badge>
                        </div>
                        <h1 className="text-3xl font-bold mb-2">{scholarship.name}</h1>
                        <p className="text-zinc-500">Apply before {scholarship.deadline}</p>
                    </div>
                    <div className="shrink-0 text-right md:text-left">
                        <div className="text-sm text-zinc-500 uppercase tracking-wide">Scholarship Amount</div>
                        <div className="text-2xl font-bold text-green-600">{scholarship.amount}</div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 border-t border-zinc-100 dark:border-zinc-800 pt-8">
                    <div>
                        <h3 className="font-bold flex items-center gap-2 mb-4"><Award className="w-5 h-5 text-purple-500" /> Eligibility</h3>
                        <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">{scholarship.eligibility}</p>
                    </div>
                    <div>
                        <h3 className="font-bold flex items-center gap-2 mb-4"><Calendar className="w-5 h-5 text-orange-500" /> Important Dates</h3>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-zinc-500">Deadline</span>
                                <span className="font-medium">{scholarship.deadline}</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-zinc-100 dark:border-zinc-800 flex justify-end gap-4">
                    <Button variant="outline">Save for Later</Button>
                    <Button className="bg-blue-600 hover:bg-blue-700">Apply Now <ExternalLink className="w-4 h-4 ml-2" /></Button>
                </div>
            </div>

            {/* Application For Sections */}
            {(scholarship.exams || scholarship.colleges) && (
                <div className="grid md:grid-cols-2 gap-6">
                    {scholarship.exams && (
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Applicable for Exams</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {scholarship.exams.map(exam => (
                                        <Link href="/exams" key={exam}>
                                            <Badge variant="secondary" className="hover:bg-zinc-200 cursor-pointer">{exam}</Badge>
                                        </Link>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    )}
                    
                    {scholarship.colleges && (
                        <Card>
                             <CardHeader>
                                <CardTitle className="text-lg">Applicable for Colleges</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {scholarship.colleges.map(college => (
                                        <Link href="/colleges" key={college}>
                                            <Badge variant="secondary" className="hover:bg-zinc-200 cursor-pointer">{college}</Badge>
                                        </Link>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>
            )}
        </div>
    );
}
