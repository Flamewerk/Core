export const useSettings = defineStore("project", {
  state: () => ({
    name: "Flamewerk",
    tagline: "Making the world a better place through constructing elegant hierarchies.",

    textlogo: "Flamewerk",
    logo: true,
    logoimage: "light.webp",
    logodark: false,    
    logodarkimage: "dark.webp",

    language: "en",
    dafaultroute: "/error",   // Default error route (can be set to / to just push dead links to the homepage)

    layout: 'web',            // (default, web, app, shop, docs )
    layoutnews: 'docs',       // (default, web, app, shop, docs ) 
    layoutdocs: 'docs',       // (default, web, app, shop, docs )      

    shop: true,              // still need to hook up
    shopcurrency: 'eur',      // Default Currenty ( Should be an object)
    snipcartid: 'YjIxYzVkZTMtZTAwYi00ODAxLWFiZTgtN2RmNGM4Y2NkZDJlNjM3MjQ4MDgxODk2ODI3ODcy', // Snipcart API

    headertype: 'Maximum',    // Options: Tiny, Maximum, Application
    headerlanguage: true,
    headerlogin: true,
    headersocials: true,
    headerlogintext: 'Sign up!',

    footertype: 'Ecommerce',       // Options: Tiny, Minimal, Maximum, Ecommerce
    footerlanguage: true,
    footernewsletter: false,
    footersocials: true,
    footertheme:true,         // Toggle Dark/Light mode switch
    
    socialnavigation : {      // Options: facebook, instragram, twitter, github, discord, linkedin, dribble
      facebook: 'dsqqsd',
      instagram: 'dqd',
      twitter: 'dqsds',
      github:'dqqs',
      discord: 'dq',
      dribble: '',
      linkedin: '',
    },

    // HEADERNAVIGATION
    Headernavigation : { 

      basicmenu : [
        {
          name: 'New Page',
          description: 'Get a better understanding of where your traffic is coming from.',
          href: '/new-page',
          icon: '🖥️',
          bgcolor:'bg-blue-500',
          position: 1,
          mobile: true,
          mobileposition: 1,
        },

        {
          name: 'Old Page',
          description: 'Get a better understanding of where your traffic is coming from.',
          href: '/new-page',
          icon: '🛍️',
          bgcolor:'bg-blue-500',
          position: 1,
          mobile: false,
          mobileposition: 1,
        },

        {
          name: 'Old Page',
          description: 'Get a better understanding of where your traffic is coming from.',
          href: '/new-page',
          icon: '🛍️',
          bgcolor:'bg-blue-500',
          position: 1,
          mobile: true,
          mobileposition: 1,
        },
      ],

      MenuPopupBig: true,
      MenuPopupBigName: 'Popdown Menu',
      MenuPopupSplit: true,
      MenuPopupSplitName: 'Split Menu',
      MenuPopupSplitBlog: true,


      // MENU SLIDE OPEN
      MenuPopupBigItems : [
        {
          name: 'Website',
          description: 'Get a better understanding of where your traffic is coming from.',
          href: '/new-page',
          icon: '🖥️',
          bgcolor:'bg-blue-500',
          position: 1,
        },
        {
          name: 'Application',
          description: 'Speak directly to your customers in a more meaningful way.',
          href: '/new-page',
          icon: '📱',
          bgcolor:'bg-yellow-500',
          position: 2,
        },
        { name: 'E-commerce', 
          description: "Your customers' data will be safe and secure.", 
          href: '/new-page', 
          icon: '🛍️',
          bgcolor:'bg-purple-500', 
          position: 3,
        }, 
        {
          name: 'Community',
          description: "Connect with third-party tools that you're already using.",
          href: '/new-page',
          icon: '📓',
          bgcolor:'bg-pink-500',
          position: 4,
        },
      ],
      MenuPopupSplitColums: {
        company : [
          { name: 'About', href: '/new-page', icon: '📱' },
          { name: 'Customers', href: '/new-page', icon: '🛍️' },
          { name: 'Press', href: '/new-page', icon: '☠️' },
          { name: 'Careers', href: '/new-page', icon: '🦞' },
          { name: 'Privacy', href: '/new-page', icon: '🦎' },
        ],
        partners : [
          { name: 'Community', href: '/new-page', icon: '🐳' },
          { name: 'Partners', href: '/new-page', icon: '🪸' },
          { name: 'Guides', href: '/new-page', icon: '🌺' },
          { name: 'Webinars', href: '/new-page', icon: '🍿' },
        ],
      }
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
