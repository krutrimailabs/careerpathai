import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400 text-sm font-sans pt-16 pb-8">
       <div className="container mx-auto px-4 md:px-6">
          
          {/* Top Section: Quick Links & Addresses */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-zinc-800 pb-12">
             {/* Brand & Socials */}
             <div className="space-y-6">
                <Link href="/" className="text-2xl font-bold text-white flex items-center gap-2">
                   <span className="w-8 h-8 bg-blue-600 rounded-lg"></span> CareerPath.AI
                </Link>
                <p>Guiding lakhs of students to find the right college. Building a better future for India, one student at a time.</p>
                <div className="flex gap-4">
                   <SocialIcon icon={Facebook} />
                   <SocialIcon icon={Twitter} />
                   <SocialIcon icon={Instagram} />
                   <SocialIcon icon={Linkedin} />
                   <SocialIcon icon={Youtube} />
                </div>
                <div className="space-y-2 pt-4">
                   <div className="flex items-center gap-2"><Phone className="w-4 h-4"/> 08044187303</div>
                   <div className="flex items-center gap-2"><Mail className="w-4 h-4"/> hello@collegedekho.com</div>
                </div>
             </div>

             {/* Quick Links */}
             <div className="space-y-4">
                <h4 className="text-white font-bold text-lg">Quick Links</h4>
                <ul className="space-y-2">
                   <li><Link href="/about" className="hover:text-blue-500 transition-colors">About Us</Link></li>
                   <li><Link href="/contact" className="hover:text-blue-500 transition-colors">Contact Us</Link></li>
                   <li><Link href="/careers" className="hover:text-blue-500 transition-colors">Careers</Link></li>
                   <li><Link href="/colleges" className="hover:text-blue-500 transition-colors">Colleges</Link></li>
                   <li><Link href="/mentors" className="hover:text-blue-500 transition-colors">Mentors</Link></li>
                   <li><Link href="/terms" className="hover:text-blue-500 transition-colors">Terms & Conditions</Link></li>
                   <li><Link href="/privacy" className="hover:text-blue-500 transition-colors">Privacy Policy</Link></li>
                </ul>
             </div>

             {/* Addresses Column 1 */}
             <div className="space-y-6">
                <h4 className="text-white font-bold text-lg">Our Offices</h4>
                <AddressBlock 
                   city="Bengaluru" 
                   address="Pride Hulkul, 6th floor, No 116, Lalbagh Road, Bengaluru, Karnataka - 560027" 
                />
                <AddressBlock 
                   city="Kolkata" 
                   address="Godrej Genesis, 15th floor, 1509, Salt lake Sector 5, Kolkata, West Bengal - 700091" 
                />
             </div>

             {/* Addresses Column 2 */}
             <div className="space-y-6 pt-12 md:pt-0">
                <AddressBlock 
                   city="Jaipur" 
                   address="6th & 7th Floor, 29, Moji Colony, Calgiri Marg, Malviya Nagar, Jaipur, Rajasthan - 302017" 
                />
                <AddressBlock 
                   city="Gurugram" 
                   address="6th Floor, CollegeDekho Office, Capital Cityscape, Sector 66, Gurugram Haryana 122002" 
                />
             </div>
          </div>

          {/* Popular Universities Section (Massive List) */}
          <div className="mb-12">
             <h4 className="text-white font-bold text-lg mb-6">Popular Universities</h4>
             <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs leading-relaxed">
                {['CUSAT', 'DTU', 'DOON University', 'FMS Delhi', 'MMMUT', 'MNIT Jaipur', 'NIT Jalandhar', 'NIT Jamshedpur', 'NIT Raipur', 'NIT Silchar', 'NIT Trichy', 'PUCHD', 'TNOU', 'TNAU', 'TECHNO India University', 'TEZPUR University', 'University of Hyderabad', 'University of Mysore', 'VIDYASAGAR University', 'VMOU', 'ANNA University', 'JAYPEE University'].map((uni, idx) => (
                   <span key={idx} className="hover:text-blue-500 cursor-pointer border-b border-dashed border-zinc-700 pb-0.5">{uni}</span>
                ))}
                {/* Simulated massive list expansion */}
                <span className="text-blue-500 cursor-pointer italic">View All 2000+ Universities...</span>
             </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
             <p>© 2026 CareerPath.AI. All Rights Reserved.</p>
             <div className="flex gap-4">
                <div className="w-8 h-8 bg-zinc-800 rounded flex items-center justify-center text-xs font-bold">G</div>
                <div className="w-8 h-8 bg-zinc-800 rounded flex items-center justify-center text-xs font-bold">P</div>
             </div>
          </div>
       </div>
    </footer>
  );
}

function SocialIcon({ icon: Icon }: { icon: React.ElementType }) {
   return (
      <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors cursor-pointer">
         <Icon className="w-4 h-4" />
      </div>
   )
}

function AddressBlock({ city, address }: { city: string, address: string }) {
   return (
      <div>
         <h5 className="font-bold text-white mb-1 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-orange-500" /> {city}
         </h5>
         <p className="text-xs leading-relaxed opacity-80">{address}</p>
      </div>
   )
}
