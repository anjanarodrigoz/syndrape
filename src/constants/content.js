// Content constants for Syndrape website
export const SITE_CONFIG = {
  name: 'Syndrape',
  tagline: 'Syncing your imagination into every drape, every garment that we make.',
  email: 'contact@syndrape.com',
  description: 'Technical 3D prototyping and Generative AI for fashion brands.',
};

export const NAVIGATION = {
  main: [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/#services' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/#contact' },
  ],
  services: [
    { label: '3D Prototyping', path: '/services/3d-prototyping' },
    { label: 'Generative AI', path: '/services/generative-ai' },
    { label: 'Marketing Content', path: '/services/marketing-content' },
  ],
};

export const HERO_CONTENT = {
  headline: 'Syncing your imagination into every drape, every garment that we make.',
  cta: 'Get a Quote',
};

export const SERVICES = [
  {
    id: '3d-prototyping',
    title: 'Technically Accurate 3D Prototyping',
    shortTitle: 'Technical 3D Garments',
    description: 'We build 1:1 "Digital Twins" of your garments, perfect for virtual fittings and replacing costly physical samples.',
    link: '/services/3d-prototyping',
    features: [
      {
        title: 'Precise Measurements',
        description: 'Built from your actual tech packs.',
      },
      {
        title: 'Accurate Material Physics',
        description: 'We simulate the true-to-life texture, weight, and drape of your exact fabric.',
      },
      {
        title: 'Unlimited Colorways',
        description: 'Instantly visualize your entire collection in every print and colorway.',
      },
      {
        title: 'Full Sizesets',
        description: 'Create and test your full-size range, from XXS to XXL, on any body type.',
      },
    ],
    overview: {
      headline: 'The 1:1 Digital Twin.',
      body: 'Our 3D prototypes are more than just models. They are "Digital Twins," built with precise, real-world measurements and "to-spec" construction. Use them for virtual fittings, pre-production reviews, and eliminating costly physical sampling rounds.',
    },
  },
  {
    id: 'generative-ai',
    title: 'Generative AI Visualizations',
    shortTitle: 'Generative AI Visuals',
    description: 'From instant moodboards to lifelike digital photoshoots, we turn concepts into stunning, realistic visuals in seconds.',
    link: '/services/generative-ai',
    features: [
      {
        title: 'Instant Visualizations',
        description: 'Brainstorm and iterate on new designs in real-time.',
      },
      {
        title: 'AI Moodboard Creation',
        description: 'Discover new aesthetics and build entire brand worlds.',
      },
      {
        title: 'Sketch-to-Lifelike',
        description: 'Turn a simple 2D drawing into a photorealistic, usable image.',
      },
      {
        title: 'Digital Photoshoots',
        description: 'Create entire campaigns with virtual models and environments, no studio required.',
      },
    ],
    overview: {
      headline: 'From Idea to Lifelike, Instantly.',
      body: 'Don\'t wait weeks for a photoshoot. Our Generative AI services bring your wildest ideas to life in seconds. From rapid mood boards to generating entire virtual campaigns, we use AI to help you create at the speed of thought.',
    },
  },
  {
    id: 'marketing-content',
    title: 'Hyper-Realistic Marketing',
    shortTitle: 'Marketing Content',
    description: 'Combine the precision of 3D with the speed of AI to create next-generation social media campaigns and virtual try-ons.',
    link: '/services/marketing-content',
    features: [
      {
        title: '360° E-commerce Spins',
        description: 'Give customers a perfect view of your product from every angle.',
      },
      {
        title: 'AI-Powered Campaigns',
        description: 'Generate endless variations of your product for targeted ads.',
      },
      {
        title: 'Virtual Try-On (VTO)',
        description: 'Integrate your 3D models into AR apps for immersive customer experiences.',
      },
      {
        title: 'Digital Lookbooks',
        description: 'Create stunning, photorealistic lookbooks without a single photoshoot.',
      },
    ],
    overview: {
      headline: 'Your Assets, Reimagined.',
      body: 'We combine the precision of your 3D Digital Twin with the power of Generative AI to create a library of marketing assets. One 3D model can become an entire social media campaign, an interactive e-commerce experience, or a virtual try-on filter.',
    },
  },
];

export const DIFFERENCE = {
  headline: 'The Syndrape Difference',
  subheadline: 'Engineering Over Embellishment.',
  body: 'The digital fashion world is full of "fancy" creations. We are different. We are a team of 3D and Generative AI artists with deep, technical knowledge of fashion and apparel.\n\nOur work isn\'t just beautiful—it\'s technically accurate, manufacturable, and built on a foundation of real-world physics. We are constantly researching new technologies to serve you the best, most precise digital products possible.',
};

export const ABOUT = {
  headline: 'Who We Are',
  body: 'We are a collective of well-experienced 3D/Generative AI artists who have catered to many reputable brands. Our expertise isn\'t just in the software—it\'s in our fundamental understanding of fashion and apparel.',
};

export const CONTACT = {
  headline: 'Let\'s Build Your Digital Vision.',
  fields: [
    { name: 'name', label: 'Name', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'company', label: 'Company', type: 'text', required: false },
    { name: 'projectDetails', label: 'Project Details', type: 'textarea', required: true },
  ],
  submitText: 'Send Request',
  alternateContact: `Or email us directly at ${SITE_CONFIG.email}`,
};

export const PROJECT_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: '3d-prototyping', label: '3D Prototyping' },
  { id: 'generative-ai', label: 'Generative AI' },
  { id: 'marketing', label: 'Marketing' },
];

// Sample projects - replace with real data
export const PROJECTS = [
  {
    id: 1,
    title: 'Luxury Brand Digital Twin',
    category: '3d-prototyping',
    client: 'Reputable Brand',
    service: '3D Prototyping',
    description: 'Created precise digital twins of an entire collection, enabling virtual fittings and eliminating 3 rounds of physical sampling.',
    image: '/projects/project-1.jpg',
  },
  {
    id: 2,
    title: 'AI-Powered Fashion Campaign',
    category: 'generative-ai',
    client: 'Classified',
    service: 'Generative AI Photoshoot',
    description: 'Generated an entire seasonal campaign using AI, featuring virtual models in diverse environments with photorealistic quality.',
    image: '/projects/project-2.jpg',
  },
  {
    id: 3,
    title: 'Virtual Try-On Experience',
    category: 'marketing',
    client: 'Leading E-commerce Brand',
    service: 'Marketing Content',
    description: 'Developed AR try-on filters and 360° product views, increasing conversion rates by 45%.',
    image: '/projects/project-3.jpg',
  },
  {
    id: 4,
    title: 'Fabric Simulation Excellence',
    category: '3d-prototyping',
    client: 'Premium Textile Company',
    service: '3D Prototyping',
    description: 'Advanced fabric simulation showcasing drape, weight, and texture across multiple material types.',
    image: '/projects/project-4.jpg',
  },
  {
    id: 5,
    title: 'Concept to Reality',
    category: 'generative-ai',
    client: 'Emerging Designer',
    service: 'Generative AI',
    description: 'Transformed rough sketches into photorealistic visualizations for investor presentations.',
    image: '/projects/project-5.jpg',
  },
  {
    id: 6,
    title: 'Digital Lookbook',
    category: 'marketing',
    client: 'Fashion House',
    service: 'Marketing Content',
    description: 'Created a complete digital lookbook with AI-generated backgrounds and lighting, no photoshoot required.',
    image: '/projects/project-6.jpg',
  },
];
