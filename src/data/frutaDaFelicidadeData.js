// src/data/frutaDaFelicidadeData.js

import { imageMap } from '../assets/imageMap';

export const listaTamanhos = [
    { nome: "330ml", preco: 11.95 },
    { nome: "550ml", preco: 15.95 },
    { nome: "770ml", preco: 19.95 },
  ];
  
  export const listaFrutas = [
    { nome: "Banana", preco: 1.85, img: imageMap.imgBanana },
    { nome: "Morango", preco: 1.85, img: imageMap.imgMorango },
    { nome: "Uva", preco: 2.65, img: imageMap.imgUva },
    { nome: "Kiwi", preco: 5.45, img: imageMap.imgKiwi },
  ];
  
  export const listaAdicionais = [
    { nome: "Leite condensado", preco: 1, img: imageMap.imgLeiteCondensado },
    { nome: "Creme de avelã", preco: 3.75, img: imageMap.imgCremeDeAvela },
    { nome: "Creme de leite Ninho", preco: 3.75, img: imageMap.imgCremeDeLeitinho },
    { nome: "Chantilly", preco: 2.5, img: imageMap.imgChantily },
    { nome: "Ovomaltine Rocks", preco: 4, img: imageMap.imgOvomaltineRocks },
  ];
  