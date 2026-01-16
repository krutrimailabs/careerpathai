import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, Globe, BookOpen, Plane } from 'lucide-react';

export default function StudyAbroadPage() {
  const popularCountries = [
    { name: 'USA', universities: '400+', avgCost: '$25k-50k', code: 'us' },
    { name: 'UK', universities: '150+', avgCost: '£15k-30k', code: 'gb' },
    { name: 'Canada', universities: '100+', avgCost: 'CAD 20k-40k', code: 'ca' },
    { name: 'Australia', universities: '40+', avgCost: 'AUD 25k-45k', code: 'au' },
    { name: 'Germany', universities: '300+', avgCost: 'Free-€3k', code: 'de' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Your Global Education Journey Starts Here
            </h1>
            <p className="text-xl text-blue-100">
              Explore 10,000+ courses across top universities worldwide. Get personalized guidance, exam prep, and visa support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto bg-white/10 p-2 rounded-xl backdrop-blur-sm border border-white/20 mt-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-5 w-5 text-blue-200" />
                <Input 
                  placeholder="Search universities, countries, or courses..." 
                  className="bg-transparent border-none text-white placeholder:text-blue-200 pl-10 h-11 focus-visible:ring-0"
                />
              </div>
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                Find Universities
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-b border-zinc-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Universities', value: '5,000+' },
              { label: 'Courses', value: '55,000+' },
              { label: 'Scholarships', value: '$50M+' },
              { label: 'Students Placed', value: '10k+' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-blue-600">{stat.value}</div>
                <div className="text-zinc-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Countries */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900">Explore Top Destinations</h2>
              <p className="text-zinc-500 mt-2">Most popular countries for Indian students.</p>
            </div>
            <Link href="/study-abroad/countries" className="text-blue-600 font-medium hover:text-blue-700">
              View All Countries →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {popularCountries.map((country) => (
              <Link key={country.name} href={`/study-abroad/countries/${country.name.toLowerCase()}`}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-2xl">
                      {/* Flag placeholder using emoji for now */}
                      {country.code === 'us' && '🇺🇸'}
                      {country.code === 'gb' && '🇬🇧'}
                      {country.code === 'ca' && '🇨🇦'}
                      {country.code === 'au' && '🇦🇺'}
                      {country.code === 'de' && '🇩🇪'}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{country.name}</h3>
                      <p className="text-sm text-zinc-500">{country.universities} Universities</p>
                    </div>
                    <div className="text-xs text-zinc-400 bg-zinc-50 p-2 rounded">
                      Avg Cost: {country.avgCost}/yr
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-zinc-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How We Help You</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "University Shortlisting",
                desc: "AI-driven recommendations based on your profile, budget, and career goals."
              },
              {
                icon: BookOpen,
                title: "Test Preparation",
                desc: "Comprehensive coaching for IELTS, TOEFL, GRE, and GMAT with mock tests."
              },
              {
                icon: Plane,
                title: "Visa & Application",
                desc: "End-to-end support for SOP writing, application filing, and visa interviews."
              }
            ].map((service, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-zinc-100">
                <service.icon className="w-10 h-10 text-blue-600 mb-6" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
