import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 bg-zinc-50 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Democratizing Career Guidance for India
          </h1>
          <p className="text-xl text-zinc-500 max-w-3xl mx-auto">
            We are on a mission to empower 50 million students with data-driven career clarity, bridging the gap between aspirations and reality.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why We Build</h2>
            <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
              93% of Indian students are aware of only 7 career paths, despite there being over 12,000 options. This information asymmetry leads to poor career choices, stress, and wasted potential.
            </p>
            <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
              CareerPath.AI combines advanced AI/ML with human mentorship to provide a personalized GPS for your career.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { label: "Students Guided", value: "10k+" },
                { label: "Career Paths", value: "500+" },
                { label: "Colleges", value: "5,000+" },
                { label: "Mentors", value: "1,000+" }
              ].map((stat) => (
                <div key={stat.label} className="border-l-4 border-blue-600 pl-4">
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-zinc-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-zinc-100 rounded-2xl h-[400px] flex items-center justify-center">
             <span className="text-zinc-400">Team/Office Image Placeholder</span>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
           <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
           <div className="grid md:grid-cols-3 gap-8">
             {[
               { title: "Student First", desc: "Every decision we make starts with 'How does this help the student?'" },
               { title: "Data Driven", desc: "We replace guesswork with verified data and predictive analytics." },
               { title: "Inclusive", desc: "Quality guidance should be accessible to everyone, not just the elite." }
             ].map((val, i) => (
               <Card key={i} className="bg-blue-800 border-none text-white">
                 <CardContent className="p-8">
                   <h3 className="text-xl font-bold mb-3">{val.title}</h3>
                   <p className="text-blue-100">{val.desc}</p>
                 </CardContent>
               </Card>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
}
