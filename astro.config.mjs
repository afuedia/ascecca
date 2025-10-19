// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: "https://afuedia.github.io", //poner aquí el dominio
  base: "ascecca",
  image: {
    responsiveStyles: true,        
    layout: 'constrained'
  },
  
});
