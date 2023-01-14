import {ArrowPathIcon,ChartBarIcon,CursorArrowRaysIcon,DocumentChartBarIcon,Squares2X2Icon,BookmarkSquareIcon,BriefcaseIcon,BuildingOfficeIcon,CheckCircleIcon,ComputerDesktopIcon,GlobeAltIcon,InformationCircleIcon,NewspaperIcon,PhoneIcon,PlayIcon,ShieldCheckIcon,UserGroupIcon,} from '@heroicons/vue/24/outline'
export const useSettings = defineStore("project", {
  state: () => ({
    name: "Flamewerk",
    tagline: "Making the world a better place through constructing elegant hierarchies.",

    textlogo: "Flamewerk",
    logoimage: "light.webp",
    logodark: false,    
    logodarkimage: "dark.webp",

    language: "en",
    dafaultroute: "/error",     

    layout: 'web',            // (default, web, app, shop, docs )
    layoutnews: 'docs',       // (default, web, app, shop, docs ) ?? Check if hooked
    layoutdocs: 'docs',       // (default, web, app, shop, docs )      


    headertype: 'Minimal',    // Options: Tiny, Minimal, Maximum
    headerlanguage: true,

    footertype: 'Tiny',       // Options: Tiny, Minimal, Maximum
    footerlanguage: true,
    footertheme:true,         // Toggle Dark/Light mode switch
    
    socialnavigation : {      // Options: facebook, instragram, twitter, github, discord, linkedin, dribble
      facebook: '',
      instagram: '',
      twitter: '',
      github:'',
      discord: '',
      dribble: '',
      linkedin: '',
    },

    // HEADERNAVIGATION
    Headernavigation : { 

      basicmenu : [
        {name: 'New Page', href: '/new-page',icon: CursorArrowRaysIcon,},
      ],
      // Minimal Header
      resources : [
        {
          name: 'Help Center',
          description: 'Get all of your questions answered in our forums or contact support.',
          href: '/page',
        },
        { name: 'Guides', description: 'Learn how to maximize our platform to get the most out of it.', href: '#' },
        { name: 'Events', description: 'See what meet-ups and other events we might be planning near you.', href: '#' },
        { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#' },
      ],
      solutions : [
        {
          name: 'Analytics',
          description: 'Get a better understanding of where your traffic is coming from.',
          href: '/page',
          icon: ChartBarIcon,
        },
        {
          name: 'Engagement',
          description: 'Speak directly to your customers in a more meaningful way.',
          href: '#',
          icon: CursorArrowRaysIcon,
        },
        { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
        {
          name: 'Integrations',
          description: "Connect with third-party tools that you're already using.",
          href: '#',
          icon: Squares2X2Icon,
        },
        {
          name: 'Automations',
          description: 'Build strategic funnels that will drive your customers to convert',
          href: '#',
          icon: ArrowPathIcon,
        },
        {
          name: 'Reports',
          description: 'Get detailed reports that will help you make more informed decisions ',
          href: '#',
          icon: DocumentChartBarIcon,
        },
      ],
      // Maximum Header
      primepop : [
        {
          name: 'Website',
          description: 'Get a better understanding of where your traffic is coming from.',
          href: '/page',
          icon: '🖥️',
          bgcolor:'bg-blue-500',
        },
        {
          name: 'Application',
          description: 'Speak directly to your customers in a more meaningful way.',
          href: '#',
          icon: '📱',
          bgcolor:'bg-yellow-500',
        },
        { name: 'E-commerce', 
          description: "Your customers' data will be safe and secure.", 
          href: '#', 
          icon: '🛍️',
          bgcolor:'bg-purple-500', 
        }, 
        {
          name: 'Community',
          description: "Connect with third-party tools that you're already using.",
          href: '#',
          icon: '📓',
          bgcolor:'bg-pink-500',
        },
      ],
      callsToAction : [
        { name: 'Start Your Journey', href: '/page', icon: PlayIcon },
        { name: 'View All Services', href: '#', icon: CheckCircleIcon },
        { name: 'Contact Sales', href: '#', icon: PhoneIcon },
      ],
      company : [
        { name: 'About', href: '/page', icon: InformationCircleIcon },
        { name: 'Customers', href: '#', icon: BuildingOfficeIcon },
        { name: 'Press', href: '#', icon: NewspaperIcon },
        { name: 'Careers', href: '#', icon: BriefcaseIcon },
        { name: 'Privacy', href: '#', icon: ShieldCheckIcon },
      ],
      partners : [
        { name: 'Community', href: '/page', icon: UserGroupIcon },
        { name: 'Partners', href: '#', icon: GlobeAltIcon },
        { name: 'Guides', href: '#', icon: BookmarkSquareIcon },
        { name: 'Webinars', href: '#', icon: ComputerDesktopIcon },
      ],
    },
    // FOOTER NAVIGATION
    Footernavigation : {
      // Minimal Footer
      main: [
        { name: 'About', href: '/page' },
        { name: 'Blog', href: '#' },
        { name: 'Jobs', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Accessibility', href: '#' },
        { name: 'Partners', href: '#' },
      ],
      // Maximum Footer
      solutions: [
        { name: 'Marketing', href: '/page' },
        { name: 'Analytics', href: '#' },
        { name: 'Commerce', href: '#' },
        { name: 'Insights', href: '#' },
      ],
      support: [
        { name: 'Pricing', href: '/page' },
        { name: 'Documentation', href: '#' },
        { name: 'Guides', href: '#' },
        { name: 'API Status', href: '#' },
      ],
      company: [
        { name: 'About', href: '/page' },
        { name: 'Blog', href: '#' },
        { name: 'Jobs', href: '#' },
        { name: 'Press', href: '#' },
      ],
      legal: [
        { name: 'Claim', href: '/page' },
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
        { name: 'Partners', href: '#' },
      ],
    }


  }),
});
