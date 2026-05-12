import { Lightbulb, Cpu, Palette, Gamepad2, Network, Trophy, Image as ImageIcon, MessageSquare, Bot, Film, Moon, Triangle, Calendar, Flag, Rocket, CheckCircle2 } from 'lucide-react';

export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Events', href: '#events' },
  { name: 'Prizes', href: '#prizes' },
  { name: 'Timeline', href: '#timeline' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export const features = [
  { icon: Lightbulb, title: 'Innovation', color: 'text-neon-blue', border: 'hover:border-neon-blue', shadow: 'hover:shadow-[0_0_20px_rgba(0,243,255,0.5)]' },
  { icon: Cpu, title: 'AI & Technology', color: 'text-neon-purple', border: 'hover:border-neon-purple', shadow: 'hover:shadow-[0_0_20px_rgba(188,19,254,0.5)]' },
  { icon: Palette, title: 'Creativity', color: 'text-neon-pink', border: 'hover:border-neon-pink', shadow: 'hover:shadow-[0_0_20px_rgba(255,0,255,0.5)]' },
  { icon: Gamepad2, title: 'Fun Challenges', color: 'text-neon-cyan', border: 'hover:border-neon-cyan', shadow: 'hover:shadow-[0_0_20px_rgba(8,247,254,0.5)]' },
  { icon: Network, title: 'Networking', color: 'text-neon-blue', border: 'hover:border-neon-blue', shadow: 'hover:shadow-[0_0_20px_rgba(0,243,255,0.5)]' },
  { icon: Trophy, title: 'Cash Prizes', color: 'text-neon-purple', border: 'hover:border-neon-purple', shadow: 'hover:shadow-[0_0_20px_rgba(188,19,254,0.5)]' },
];

export const eventData = [
  {
    name: 'Project Competition',
    description: 'Showcase your innovative projects and technical skills to industry experts.',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSdddPMyC20wan-Pn4yO4YF7iVctJrpn-udY-kk1ep3T8B5UZA/viewform?usp=publish-editor',
    icon: Lightbulb,
    color: '#00f3ff' // neon-blue
  },
  {
    name: 'Poster Competition',
    description: 'Present your ideas creatively through impactful posters based on Sustainable Development Goals.',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSdfFXVrC8r2-vT2wnbbz9xXg0hMa7lhWJpouKsbyH0mycGGRw/viewform?usp=publish-editor',
    icon: ImageIcon,
    color: '#ff00ff' // neon-pink
  },
  {
    name: 'Pitch Craft (Ideathon)',
    description: 'Pitch innovative ideas and problem-solving approaches in a high-stakes environment.',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSfBd-pKrl9mxa4PXNLUCBQrtK50rLrY12nvfD3B4OFSEmhigQ/viewform?usp=dialog',
    icon: MessageSquare,
    color: '#08f7fe' // neon-cyan
  },
  {
    name: 'AI Prompt Battle',
    description: 'Compete in the ultimate AI creativity and prompting challenge. Test your prompt engineering skills.',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSckKC-nKLiUWK8oKYgMCCy8dFfRadkKd951dmUAR8mVLVSbJA/viewform?usp=publish-editor',
    icon: Bot,
    color: '#bc13fe' // neon-purple
  },
  {
    name: 'Reel Making Competition',
    description: 'Create impactful reels based on SDGs and spread awareness creatively.',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSe-HQYsOX-immUGPjl7twNPfBGriyWkjK3-QLf62RK-E6EjOQ/viewform?usp=publish-editor',
    icon: Film,
    color: '#ff3366' // custom neon red/pink
  },
  {
    name: 'Dark Room Cricket',
    description: 'Experience cricket like never before! A thrilling match in complete darkness. (Only for boys)',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSdtcZXwaQns7e3MSpdm_NWD3Oe67T_g4S2eXg77f0P0CvrKrA/viewform?usp=publish-editor',
    icon: Moon,
    color: '#00ff66' // neon green
  },
  {
    name: 'Squid Game Challenge',
    description: 'Thrilling rounds, strategy, and survival awaits! Are you ready to play?',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSc9d7AAgcdk9IeP8phfNuVDHULhzF8k8WQ0fDFQ1tfI6Uodcg/viewform?usp=publish-editor',
    icon: Triangle,
    color: '#ff003c' // squid game pink/red
  }
];

export const timelineEvents = [
  {
    date: 'Now',
    title: 'Registration Open',
    description: 'Secure your spot in the ultimate tech arena.',
    icon: Flag,
    color: 'text-neon-blue',
    borderColor: 'border-neon-blue',
    shadow: 'shadow-[0_0_15px_rgba(0,243,255,0.5)]'
  },
  {
    date: '15 May 2026',
    title: 'Registration Deadline',
    description: 'Last day to register for all events (till 8 PM).',
    icon: Calendar,
    color: 'text-neon-pink',
    borderColor: 'border-neon-pink',
    shadow: 'shadow-[0_0_15px_rgba(255,0,255,0.5)]'
  },
  {
    date: '18 May 2026',
    title: 'Event Begins',
    description: 'Day 1 of TECHTONIC 2K26 kicks off!',
    icon: Rocket,
    color: 'text-neon-purple',
    borderColor: 'border-neon-purple',
    shadow: 'shadow-[0_0_15px_rgba(188,19,254,0.5)]'
  },
  {
    date: '19 May 2026',
    title: 'Final Day & Prize Distribution',
    description: 'Concluding day with valedictory function.',
    icon: CheckCircle2,
    color: 'text-neon-cyan',
    borderColor: 'border-neon-cyan',
    shadow: 'shadow-[0_0_15px_rgba(8,247,254,0.5)]'
  }
];

export const faqs = [
  {
    question: "Who can participate?",
    answer: "Students from any college can participate in TECHTONIC 2K26. Certain events like Dark Room Cricket might have specific restrictions (e.g., only for boys)."
  },
  {
    question: "Is there any registration fee?",
    answer: "Yes, there is a nominal registration fee for each event. The exact amount is mentioned in the respective event's Google Form link."
  },
  {
    question: "Can teams participate?",
    answer: "Yes, team participation is allowed for most events. Please check the individual event guidelines for maximum team size."
  },
  {
    question: "How will winners be selected?",
    answer: "Winners will be selected by an expert panel of judges based on criteria specific to each event, such as innovation, execution, presentation, and rule adherence."
  },
  {
    question: "Where will the event be conducted?",
    answer: "The event will be conducted physically at B building 5th floor ECE department CSMSS Chh. Shahu College of Engineering, Kanchanwadi, Paithan Road, Chhatrapati Sambhajinagar."
  }
];

export const contacts = [
  { role: 'ECESA President', name: 'Dhanashree Ghanwat', phone: '9403323347' },
  { role: 'ECESA Vice President', name: 'Mansi Raut', phone: '8767674742' },
  { role: 'ECESA Event Manager', name: 'Ganesh Joshi', phone: '9422837178' },
  { role: 'ECESA Technical Head', name: 'Prerika Kshirsagar', phone: '9834302520' },
  { role: 'IETE ISF Secretary', name: 'Aarti Tupe', phone: '9860734558' },
  { role: 'IETE ISF Technical Head', name: 'Sagar Susundre', phone: '8830157631' },
  { role: 'Magazine Co-Ordinator', name: 'Jiya Joshi', phone: '9595124123' },
  { role: 'Magazine Co-Ordinator', name: 'Lakshya Darunte', phone: '8668344898' },
  { role: 'Sports Co-Ordinator', name: 'Rushikesh Puri', phone: '8767120507' },
  { role: 'IETE Creative-Head', name: 'Ajit Waysal', phone: '9227320704' }
];

export const leadership = [
  { role: 'Administrative Officer', name: 'Dr. S. G. Deshmukh', details: 'CSMSS Sanstha' },
  { role: 'Principal', name: 'Dr. G. B. Dongre', details: 'CSMSS Chh. Shahu College of Engineering' },
  { role: 'Vice-Principal & Head of ECE', name: 'Dr. D. L. Bhuyar', details: '' },
  { role: 'IETE ISF / ECESA Coordinator', name: 'Prof. G. N. Dhengle', details: '' }
];
