// src/data/batidaData.js

import { imageMap } from '../assets/imageMap';

export const listaMassas = [
  { nome: "Massa de Açai", preco: 0 },
  { nome: "Massa de Cupuaçu", preco: 0 },
  { nome: "Massa Mista", preco: 0 },
];

export const listaTamanhos = [
    { nome: "500Ml", preco: 12.90 },
  ];
  
  export const listaFrutas = [
    { nome: "Banana", preco: 1.85, img: imageMap.imgBanana },
    { nome: "Morango", preco: 1.85, img: imageMap.imgMorango },
    { nome: "Uva", preco: 2.65, img: imageMap.imgUva },
    { nome: "Kiwi", preco: 5.45, img: imageMap.imgKiwi },
  ];

  export const listaCaldasDoces = [
    { nome: "Leite Condensado", preco: 1, img: imageMap.imgLeiteCondensado},
    { nome: "Mel", preco: 1, img: imageMap.imgMel },
  ];

  export const listaGuloseimas = [
    { nome: "Ovomaltine", preco: 3.75, img: imageMap.imgOvomaltine},
    { nome: "Paçoca", preco: 1.75, img: imageMap.imgPacoquitaBatida },
    { nome: "Leite em Pó", preco: 1.95, img: imageMap.imgLeiteEmPo },
    { nome: "Creme de Avelã", preco: 3.75, img: imageMap.imgCremeDeAvela },
    { nome: "Creme de Leitinho", preco: 3.75, img: imageMap.imgCremeDeLeitinho },
  ];
  
  export const listaAdicionais = [
    { nome: "Leite condensado", preco: 1, img: imageMap.imgLeiteCondensado },
    { nome: "Creme de avelã", preco: 3.75, img: imageMap.imgCremeDeAvela },
    { nome: "Creme de leite Ninho", preco: 3.75, img: imageMap.imgCremeDeLeitinho },
    { nome: "Chantilly", preco: 2.5, img: imageMap.imgChantily },
    { nome: "Ovomaltine Rocks", preco: 4, img: imageMap.imgOvomaltineRocks },
  ];
  