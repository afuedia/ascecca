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

const recetas = defineCollection({
  schema: z.object({
    estilo: z.string(),
    autor: z.string(),
    logro: z.string(),
    batch_l: z.coerce.number().optional(),     // litros del lote
    // FERMENTABLES
    fermentables: z.object({
      maltas: z.array(
        z.object({
          nombre: z.string(),
          cantidad_kg: z.coerce.number(),      // usa coerce para aceptar "1.2" como string
          color_ebc: z.coerce.number().optional(),
          porcentaje: z.coerce.number().optional(),
        })
      ).default([]),
      adjuntos: z.array(
        z.object({
          nombre: z.string(),
          cantidad: z.coerce.number(),
          unidad: z.enum(["kg","g","ml","l"]).default("g"),
          momento: z.enum(["mash","boil","fermentación","otro"]).optional(),
        })
      ).default([]),
    }),
    // LÚPULOS
    lupulos: z.array(
      z.object({
        nombre: z.string(),
        cantidad_g: z.coerce.number(),
        alfa_acidos: z.coerce.number().optional(),
        tiempo_min: z.coerce.number().optional(),  // en hervor; o null si dry-hop
        adicion: z.enum(["amargor","sabor","aroma","whirlpool","dry-hop"]).optional(),
      })
    ).default([]),
    // LEVADURA
    levadura: z.object({
      nombre: z.string(),
      cantidad: z.coerce.number().optional(),
      unidad: z.enum(["g","sachet","ml","celulas"]).optional(),
      atenuacion: z.coerce.number().optional(),
    }),
  }),
});

export const collection = { concursos, recetas }