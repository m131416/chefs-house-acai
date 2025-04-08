// src/data/acaiData.js

import { imageMap } from '../assets/imageMap';

export const listaTamanhos = [
    { nome: "330ml", preco: 10.70 },
    { nome: "550ml", preco: 16.90 },
    { nome: "770ml", preco: 22.90 },
    { nome: "Marmita (M)", preco: 31.90 },
    { nome: "Marmita (G)", preco: 39.90 },
  ];

  export const listaMassas = [
    { nome: "Massa de Açai", preco: 0 },
    { nome: "Massa de Cupuaçu", preco: 0 },
    { nome: "Massa Mista", preco: 0 },
  ];

  export const listaFrutas = [
    { nome: "Banana", preco: 1.85, img: imageMap.imgBanana},
    { nome: "Morango", preco: 1.85, img: imageMap.imgMorango },
    { nome: "Uva", preco: 2.65, img: imageMap.imgUva },
    { nome: "Kiwi", preco: 5.45, img: imageMap.imgKiwi },
  ];

  export const listaCaldasDoces = [
    { nome: "Leite Condensado", preco: 1, img: imageMap.imgLeiteCondensado},
    { nome: "Mel", preco: 1, img: imageMap.imgMel },
  ];

  export const listaDocesSecos = [
    { nome: "Leite em Pó", preco: 1.95, img: imageMap.imgLeiteEmPo},
    { nome: "Granola", preco: 1.10, img: imageMap.imgGranola },
    { nome: "Cereal", preco: 3.0, img: imageMap.imgSucrilhos },
    { nome: "Amendoim", preco: 1.20, img: imageMap.imgAmendoim },
    { nome: "Achocolatado em Pó", preco: 3.65, img: imageMap.imgAchocolatadoEmPo },
  ];
  
  export const listaGuloseimas = [
    { nome: "Paçoca", preco: 1.75, img: imageMap.imgPacoca},
    { nome: "Chocolate", preco: 3.50, img: imageMap.imgSonhoDeValsa },
    { nome: "Ouro Branco", preco: 3.50, img: imageMap.imgOuroBranco },
    { nome: "Cookies Granulados", preco: 1.95, img: imageMap.imgGranulado },
    { nome: "Ovomaltime Rocks", preco: 4, img: imageMap.imgOvomaltineRocks },
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
  