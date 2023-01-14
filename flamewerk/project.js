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

    layout: "default",          

  }),
});
