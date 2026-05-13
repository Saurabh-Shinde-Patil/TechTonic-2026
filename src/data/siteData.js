import { Lightbulb, Cpu, Palette, Gamepad2, Network, Trophy, Image as ImageIcon, MessageSquare, Bot, Film, Moon, Triangle, Calendar, Flag, Rocket, CheckCircle2 } from 'lucide-react';

export const navLinks = [
  { name: 'Home', href: '/#home' },
  { name: 'About', href: '/#about' },
  { name: 'Events', href: '/#events' },
  { name: 'Prizes', href: '/#prizes' },
  { name: 'Timeline', href: '/#timeline' },
  { name: 'FAQ', href: '/#faq' },
  { name: 'Contact', href: '/#contact' },
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
    id: 'project-x',
    name: 'PROJECT X',
    category: 'innovation',
    description: 'Where Innovation Meets Reality! Showcase your AI, Automation, Software, Hardware, and IoT projects.',
    detailedDescription: 'Got an innovative project? Built something creative, technical, or futuristic? Now it’s time to showcase your talent on the biggest tech stage! PROJECT X is our flagship project competition where ideas turn into reality.',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSdddPMyC20wan-Pn4yO4YF7iVctJrpn-udY-kk1ep3T8B5UZA/viewform?usp=publish-editor',
    poster: '/posters/projectx.png',
    icon: Lightbulb,
    color: '#00f3ff',
    rules: [
      'Must present a working prototype or detailed model.',
      'Technical documentation (Report) must be submitted.',
      '5 minutes for presentation + 2 minutes for Q&A.',
      'Judges decision will be final.'
    ],
    eligibility: 'Engineering Students (Diploma/Degree) of any branch.',
    teamSize: 'Max 3 members.',
    registrationFee: '₹50',
    registrationDeadline: '15 May 2026 till 8:00 PM',
    venue: 'B building, 5th floor, ECE department, CSMSS Chh. Shahu College of Engineering, Kanchanwadi, Paithan Road, Chhatrapati Sambhajinagar, Maharashtra - 431011',
    coordinators: [
      { name: 'Dhanashree Ghanwat', role: 'President', phone: '9403323347' },
      { name: 'Sagar Susundre', role: 'Event Head', phone: '8830157631' },
      { name: 'Ganesh Joshi', role: 'Event Manager', phone: '9422837178' }
    ]
  },
  {
    id: 'canvas-x',
    name: 'CANVAS X',
    category: 'creative',
    description: 'Design the Future Through Creativity! A poster competition themed around the 17 Sustainable Development Goals (SDGs).',
    detailedDescription: 'Your ideas can inspire change… Your art can create awareness… Your poster can speak louder than words! CANVAS X invites you to express your vision for a better tomorrow through powerful visual storytelling.',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSdfFXVrC8r2-vT2wnbbz9xXg0hMa7lhWJpouKsbyH0mycGGRw/viewform?usp=publish-editor',
    poster: '/posters/canvasX.png',
    icon: ImageIcon,
    color: '#ff00ff',
    rules: [
      "Theme: 17 Sustainable Development Goals (SDGs) - any 1 out of 17.",
      'Poster should be creative and original.',
      'All necessary materials must be brought by the participants.',
      'Time limit for the competition is 2 hours.'
    ],
    eligibility: 'Open to all college students.',
    teamSize: 'Max 2 members.',
    registrationFee: '₹50',
    registrationDeadline: '15 May 2026 till 8:00 PM',
    venue: 'B building, 5th floor, ECE department, CSMSS Chh. Shahu College of Engineering, Kanchanwadi, Paithan Road, Chhatrapati Sambhajinagar, Maharashtra - 431011',
    coordinators: [
      { name: 'Mansi Raut', role: 'Vice President', phone: '8767674742' },
      { name: 'Sagar Susundre', role: 'Event Head', phone: '8830157631' },
      { name: 'Ganesh Joshi', role: 'Event Manager', phone: '9422837178' }
    ]
  },
  {
    id: 'pitch-craft',
    name: 'PITCH CRAFT',
    category: 'business',
    description: 'Turn Your Vision Into Impact! Pitch your startup ideas, innovative solutions, and game-changing concepts.',
    detailedDescription: 'Got a startup idea, innovative solution, or game-changing concept? Now’s your chance to pitch it like a true entrepreneur! Pitch Craft is where you turn your vision into impact.',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSfBd-pKrl9mxa4PXNLUCBQrtK50rLrY12nvfD3B4OFSEmhigQ/viewform?usp=dialog',
    poster: '/posters/pitch_craft.png',
    icon: MessageSquare,
    color: '#08f7fe',
    rules: [
      'Presentation deck (PPT) is mandatory.',
      'Pitching time: 5 minutes.',
      'Q&A session: 3 minutes.',
      'Evaluation on confidence, innovation, and feasibility.'
    ],
    eligibility: 'Aspiring entrepreneurs and students from any department.',
    teamSize: 'Max 3 members.',
    registrationFee: '₹100',
    registrationDeadline: '15 May 2026 till 8:00 PM',
    venue: 'B building, 5th floor, ECE department, CSMSS Chh. Shahu College of Engineering, Kanchanwadi, Paithan Road, Chhatrapati Sambhajinagar, Maharashtra - 431011',
    coordinators: [
      { name: 'Dhanashree Ghanwat', role: 'President', phone: '9403323347' },
      { name: 'Ganesh Joshi', role: 'Event Manager', phone: '9422837178' },
      { name: 'Vaishnavi Mohite', role: 'Treasurer', phone: '7743962627' },
      { name: 'Sagar Susundre', role: 'Event Head', phone: '8830157631' }
    ]
  },
  {
    id: 'prompt-x',
    name: 'PROMPT X',
    category: 'tech',
    description: 'The Smarter Your Prompt, The Stronger Your Power! Test your creativity and logic in the AI prompt engineering battle.',
    detailedDescription: 'Think you can command AI better than anyone else? It’s time to test your creativity, logic, and prompt engineering skills in the ultimate AI showdown! Prompt X is the battleground for the smarter mind.',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSckKC-nKLiUWK8oKYgMCCy8dFfRadkKd951dmUAR8mVLVSbJA/viewform?usp=publish-editor',
    poster: '/posters/promptx.png',
    icon: Bot,
    color: '#bc13fe',
    rules: [
      'Real-time prompt generation battles.',
      'Participants must use the AI platform provided.',
      'Outputs evaluated on accuracy, creativity, and speed.',
      'Internet usage restricted to only designated sites.'
    ],
    eligibility: 'All tech enthusiasts and students.',
    teamSize: 'Individual (01 member).',
    registrationFee: '₹50',
    registrationDeadline: '15 May 2026 till 8:00 PM',
    venue: 'B building, 5th floor, ECE department, CSMSS Chh. Shahu College of Engineering, Kanchanwadi, Paithan Road, Chhatrapati Sambhajinagar, Maharashtra - 431011',
    coordinators: [
      { name: 'Prerika Kshirsagar', role: 'Technical Event Head', phone: '9834302520' },
      { name: 'Jiya Joshi', role: 'Magazine Co-ordinator', phone: '9595124123' },
      { name: 'Sagar Susundre', role: 'Event Head', phone: '8830157631' },
      { name: 'Ganesh Joshi', role: 'Event Manager', phone: '9422837178' }
    ]
  },
  {
    id: 'dark-room-cricket',
    name: 'DARK ROOM CRICKET',
    category: 'sports',
    description: 'Where Vision Ends, The Real Game Begins! Experience the thrill of fast-paced cricket in a glowing, dark atmosphere.',
    detailedDescription: 'Think cricket is easy? Now imagine playing it in complete darkness… where every sound matters, every move counts, and every second keeps your heart racing! Dark Room Cricket is where vision ends and the real game begins.',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSdtcZXwaQns7e3MSpdm_NWD3Oe67T_g4S2eXg77f0P0CvrKrA/viewform?usp=publish-editor',
    poster: '/posters/darkroom.png',
    rulebook: '/Rulebook_Cricket.pdf',
    icon: Moon,
    color: '#00ff66',
    rules: [
      'Only For Boys.',
      '2 Overs per inning.',
      'Glowing ball and stumps will be used.',
      'Played in a strictly controlled dark environment.',
      'Strictly individual skill & team coordination required.'
    ],
    eligibility: 'Only for Boys.',
    teamSize: 'Max 5 members.',
    registrationFee: '₹200',
    registrationDeadline: '15 May 2026 till 8:00 PM',
    venue: 'B building, 5th floor, ECE department, CSMSS Chh. Shahu College of Engineering, Kanchanwadi, Paithan Road, Chhatrapati Sambhajinagar, Maharashtra - 431011',
    coordinators: [
      { name: 'Rushi Puri', role: 'Sports Co-ordinator', phone: '8767120507' },
      { name: 'Ganesh Joshi', role: 'Event Manager', phone: '9422837178' },
      { name: 'Sagar Susundre', role: 'Event Head', phone: '8830157631' }
    ]
  },
  {
    id: 'squid-game',
    name: 'SQUID GAME',
    category: 'gaming',
    description: 'Only The Smartest & Fastest Will Survive! Intense mini-games, mind-blowing challenges, and suspense at every step.',
    detailedDescription: 'Can you survive the pressure, strategy, mind games, and unexpected twists? Squid Game Challenge presents intense mini-games where only the smartest and fastest will survive.',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSc9d7AAgcdk9IeP8phfNuVDHULhzF8k8WQ0fDFQ1tfI6Uodcg/viewform?usp=publish-editor',
    poster: '/posters/squid_game.png',
    icon: Triangle,
    color: '#ff003c',
    rules: [
      '3 Rounds of mysterious challenges.',
      'Elimination on failure to complete a task.',
      'Speed and focus are crucial.',
      'Game rules will be explained before each round.'
    ],
    eligibility: 'Open for all college students.',
    teamSize: 'Max 4 members.',
    registrationFee: '₹200',
    registrationDeadline: '15 May 2026 till 8:00 PM',
    venue: 'B building, 5th floor, ECE department, CSMSS Chh. Shahu College of Engineering, Kanchanwadi, Paithan Road, Chhatrapati Sambhajinagar, Maharashtra - 431011',
    coordinators: [
      { name: 'Dhanashree Ghanwat', role: 'President', phone: '9403323347' },
      { name: 'Mansi Raut', role: 'Vice President', phone: '8767674742' },
      { name: 'Sagar Susundre', role: 'Event Head', phone: '8830157631' },
      { name: 'Ganesh Joshi', role: 'Event Manager', phone: '9422837178' }
    ]
  },
  {
    id: 'reel-making',
    name: 'REEL MAKING',
    category: 'creative',
    description: 'Create impactful reels based on SDGs and spread awareness creatively through visual storytelling.',
    detailedDescription: 'Unleash your creativity and video editing skills! Create impactful short reels based on Sustainable Development Goals (SDGs) and inspire the world through your lens.',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSe-HQYsOX-immUGPjl7twNPfBGriyWkjK3-QLf62RK-E6EjOQ/viewform?usp=publish-editor',
    icon: Film,
    color: '#ff3366',
    rules: [
      'Topic: On 17 SDGs (Sustainable Development Goals).',
      'Duration: 30 to 60 seconds.',
      'Original content only.',
      'Submission via Google Form or social media link.'
    ],
    eligibility: 'Open to all.',
    teamSize: 'Max 3 members.',
    registrationFee: '₹50',
    registrationDeadline: '15 May 2026 till 8:00 PM',
    venue: 'B building, 5th floor, ECE department, CSMSS Chh. Shahu College of Engineering, Kanchanwadi, Paithan Road, Chhatrapati Sambhajinagar, Maharashtra - 431011',
    coordinators: [
      { name: 'Dhanashree Ghanwat', role: 'President', phone: '9403323347' },
      { name: 'Ganesh Joshi', role: 'Event Manager', phone: '9422837178' },
      { name: 'Sagar Susundre', role: 'Event Head', phone: '8830157631' }
    ]
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
