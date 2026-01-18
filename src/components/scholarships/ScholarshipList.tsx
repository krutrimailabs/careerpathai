'use client';

import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Search, Calendar, IndianRupee, Star } from "lucide-react";
import Link from 'next/link';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';

interface Scholarship {
    id: string;
    slug: string;
    name: string;
    amount: string;
    deadline: string;
    eligibility: string;
    provider: string;
    category: string;
}

interface ScholarshipListProps {
    initialScholarships: Scholarship[];
    savedPdfIds: string[]; // IDs of scholarships the user has saved
}

export function ScholarshipList({ initialScholarships, savedPdfIds }: ScholarshipListProps) {
    const [searchTerm, setSearchTerm] = useState("");
    const [filter, setFilter] = useState("All");
    const [savedIds, setSavedIds] = useState<Set<string>>(new Set(savedPdfIds));
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter(); // To refresh server data if needed

    const filteredScholarships = initialScholarships.filter(s => {
        const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) || s.provider.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filter === "All" || s.category === filter;
        return matchesSearch && matchesFilter;
    });

    const handleToggleSave = async (id: string) => {
        setIsLoading(true);
        const supabase = createClient();
        const { data: { user } } = await supabase.auth.getUser();

        if (!user) {
            router.push('/login');
            return;
        }

        const isSaved = savedIds.has(id);

        if (isSaved) {
            // Remove
            const { error } = await supabase
                .schema('careerpath')
                .from('user_scholarships')
                .delete()
                .eq('user_id', user.id)
                .eq('scholarship_id', id);
            
            if (!error) {
                const newSet = new Set(savedIds);
                newSet.delete(id);
                setSavedIds(newSet);
            }
        } else {
            // Save
            const { error } = await supabase
                .schema('careerpath')
                .from('user_scholarships')
                .insert({ user_id: user.id, scholarship_id: id });
            
            if (!error) {
                const newSet = new Set(savedIds);
                newSet.add(id);
                setSavedIds(newSet);
            }
        }
        setIsLoading(false);
        router.refresh(); // Refresh server state
    };

    return (
        <div>
            {/* Search & Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-3 w-4 h-4 text-zinc-400" />
                    <Input
                        placeholder="Search by name or provider..."
                        className="pl-10"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2">
                    {['All', 'Merit', 'Means', 'Sports'].map(cat => (
                        <Button
                            key={cat}
                            variant={filter === cat ? "default" : "outline"}
                            onClick={() => setFilter(cat)}
                            className="whitespace-nowrap"
                        >
                            {cat}
                        </Button>
                    ))}
                </div>
            </div>

            {/* List Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredScholarships.map(s => (
                    <Card key={s.id} className="h-full hover:shadow-md transition-all border-zinc-200 dark:border-zinc-800 flex flex-col">
                        <CardHeader>
                            <div className="flex justify-between items-start mb-2">
                                <Badge variant="secondary" className="bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300">{s.category}</Badge>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className={`h-8 w-8 -mr-2 ${savedIds.has(s.id) ? 'text-yellow-500 hover:text-yellow-600' : 'text-zinc-300 hover:text-yellow-400'}`}
                                    onClick={(e) => { e.preventDefault(); handleToggleSave(s.id); }}
                                    disabled={isLoading}
                                >
                                    <Star className={`w-5 h-5 ${savedIds.has(s.id) ? 'fill-current' : ''}`} />
                                </Button>
                            </div>
                            <span className="text-xs text-zinc-400 font-mono">{s.provider}</span>
                            <CardTitle className="text-lg leading-snug mt-1">{s.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <div className="space-y-2 text-sm">
                                <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                                    <IndianRupee className="w-4 h-4" /> <span>{s.amount}</span>
                                </div>
                                <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                                    <Calendar className="w-4 h-4" /> <span>Deadline: {s.deadline}</span>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="pt-0">
                            <Link href={`/scholarships/${s.slug}`} className="w-full">
                                <Button variant="ghost" className="w-full text-blue-600 hover:text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20">View Details</Button>
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            
            {filteredScholarships.length === 0 && (
                <div className="text-center py-12 text-zinc-400">
                    No scholarships found matching your criteria.
                </div>
            )}
        </div>
    );
}
