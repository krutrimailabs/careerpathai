
export interface Scholarship {
    slug: string;
    name: string;
    amount: string;
    deadline: string;
    eligibility: string;
    provider: string;
    category: 'Merit' | 'Means' | 'Sports' | 'International';
    exams?: string[]; // Related exams e.g. "JEE Main"
    colleges?: string[]; // Related colleges e.g. "IIT Delhi"
}

export const scholarships: Scholarship[] = [
    {
        slug: "pm-sss-2026",
        name: "Prime Minister's Special Scholarship Scheme (PMSSS)",
        amount: "Up to ₹3 Lakhs/year",
        deadline: "30th June 2026",
        eligibility: "J&K/Ladakh Domicile, Family income < ₹8 LPA",
        provider: "AICTE",
        category: "Merit",
        exams: ["JEE Main", "NEET"],
        colleges: ["IIT Delhi", "NIT Srinagar"]
    },
    {
        slug: "hdfc-badhte-kadam",
        name: "HDFC Badhte Kadam Scholarship",
        amount: "₹1,00,000",
        deadline: "15th August 2026",
        eligibility: "Class 11/12 students who lost earning member",
        provider: "HDFC Bank",
        category: "Means"
    },
    {
        slug: "tata-trust-medical",
        name: "Tata Trusts Medical and Healthcare Scholarship",
        amount: "Tuition Fee Waiver",
        deadline: "31st July 2026",
        eligibility: "Pursuing MBBS/BDS, Merit based",
        provider: "Tata Trusts",
        category: "Merit",
        exams: ["NEET"]
    },
    {
        slug: "reliance-foundation",
        name: "Reliance Foundation Undergraduate Scholarship",
        amount: "Up to ₹2 Lakhs",
        deadline: "15th Feb 2026",
        eligibility: "First year UG students, Merit + Means",
        provider: "Reliance Foundation",
        category: "Merit",
        exams: ["CUET"]
    },
    {
        slug: "sports-authority-india",
        name: "SAI Sports Scholarship",
        amount: "₹12,000/month",
        deadline: "Rolling",
        eligibility: "National/State level medal winners",
        provider: "Sports Authority of India",
        category: "Sports"
    }
];
