import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Check } from 'lucide-react';

export default function PricingPage() {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      desc: "Essential tools for career exploration",
      features: [
        "Career Directory Access (500+)",
        "Basic Career Assessment",
        "College Search",
        "Community Access"
      ],
      cta: "Get Started",
      highlight: false
    },
    {
      name: "Pro Student",
      price: "₹2,999",
      period: "/year",
      desc: "Complete toolkit for serious planning",
      features: [
        "Everything in Basic",
        "Detailed 20-page Assessment Report",
        "Personalized Roadmap Generation",
        "Unlimited College Comparisons",
        "Parent Portal Access",
        "Priority Mentor Booking"
      ],
      cta: "Upgrade to Pro",
      highlight: true
    },
    {
      name: "Premium",
      price: "₹4,999",
      period: "/year",
      desc: "Ultimate guidance with human touch",
      features: [
        "Everything in Pro",
        "4 x 1-on-1 Counselor Sessions",
        "Resume & Profile Building",
        "Scholarship Assistant",
        "Dedicated Success Manager",
        "Study Abroad Consulting"
      ],
      cta: "Go Premium",
      highlight: false
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-50 py-20">
      <div className="container mx-auto px-4 text-center max-w-3xl mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Invest in Your Future</h1>
        <p className="text-xl text-zinc-500">
          Choose the plan that fits your career journey. Transparent pricing, no hidden fees.
        </p>
      </div>

      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 max-w-6xl">
        {plans.map((plan) => (
          <Card key={plan.name} className={`relative flex flex-col ${plan.highlight ? 'border-blue-600 shadow-xl scale-105 z-10' : ''}`}>
            {plan.highlight && (
              <div className="absolute -top-4 left-0 right-0 mx-auto w-fit bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <CardDescription>{plan.desc}</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-zinc-500">{plan.period}</span>}
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-zinc-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className={`w-full ${plan.highlight ? 'bg-blue-600 hover:bg-blue-700' : ''}`} variant={plan.highlight ? 'default' : 'outline'}>
                {plan.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="container mx-auto px-4 mt-20 text-center">
        <p className="text-zinc-500 mb-4">Are you a School or Institution?</p>
        <Button variant="link" className="text-blue-600">Contact us for Bulk Licensing</Button>
      </div>
    </div>
  );
}
