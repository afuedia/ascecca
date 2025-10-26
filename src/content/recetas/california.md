---
titulo: "California Common"
estilo: "California Common"
autor: Samuel
logro: Ganadora del IX Concurso ASCECCA
batch_l: 20
abv: 5.5
ibu: 40
og: 1.052
fg: 1.011
color_ebc: 18


fermentables:
  maltas:
    - nombre: "Pale Ale Golden Promise"
      cantidad_kg: 4.83
      color_ebc: 5
    - nombre: "Caraamber"
      cantidad_kg: 0.27
      color_ebc: 59
    - nombre: "Crystal T50"
      cantidad_kg: 0.27
      color_ebc: 133
  adjuntos: []

lupulos:
  - nombre: "Northern Brewer"
    cantidad_g: 30
    adicion: "amargor"
    tiempo_min: 60
    aa: 6.7
  - nombre: "Northern Brewer"
    cantidad_g: 30
    adicion: "aroma"
    tiempo_min: 15
    aa: 6.7
  - nombre: "Northern Brewer"
    cantidad_g: 50
    adicion: "whirlpool"     # hop stand
    tiempo_min: 15           # duración del hop stand
    temp_c: 79               # temperatura del hop stand
    aa: 6.7

levadura:
  nombre: "Mangrove Jack's California Lager M54"
  cantidad: 1
  unidad: "sachet"

agua:
  perfil: "RO (Hoppy Lite)"
  calcio_ppm: 68
  magnesio_ppm: 10
  sodio_ppm: 17
  cloruros_ppm: 51
  sulfatos_ppm: 101
  bicarbonatos_ppm: 88
  so_cl_ratio: 2
  ph_maceracion: 5.5

maceracion:
  esquema: "High fermentability"
  escalones:
    - temp_c: 65
      tiempo_min: 60
      nota: "Sacarificación"
    - temp_c: 78
      tiempo_min: 15
      nota: "Mash out"
  temp_objetivo_c: 68.2
  agua_maceracion_l: 29.26

coccion:
  tiempo_min: 60
  volumen_ebullicion_l: 25.44
  volumen_post_ebullicion_l: 23.44

fermentacion:
  estilo: "Ale"
  primaria:
    temp_c: 22
    dias: 14


---
