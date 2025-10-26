import { defineCollection, z } from "astro:content"

const concursos = defineCollection(
  {
    schema: z.object(
      {
        titulo: z.string(),
        bjcp: z.boolean(),
        año: z.number(),
        estilo: z.string(),
        medallas: z.object(
          {
            oro: z.string(),
            plata: z.string(),
            bronce: z.string(),
          }
        ),
        receta: z.string().url(),
        img: z.string(),
        imgAlt: z.string()


      }
    )
  }
)

export const collection = { concursos }