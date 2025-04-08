import {
    listaTamanhos as tamanhosFruta,
    listaFrutas as frutasFruta,
    listaAdicionais as adicionaisFruta
} from "./frutaDaFelicidadeData";

import {
    listaTamanhos as tamanhosAcai,
    listaFrutas as frutasAcai,
    listaAdicionais as adicionaisAcai,
    listaMassas as massasAcai,
    listaCaldasDoces as caldasAcai,
    listaDocesSecos as docesSecosAcai,
    listaGuloseimas as guloseimasAcai
} from "./acaiData";

import {
    listaTamanhos as tamanhosBatida,
    listaFrutas as frutasBatida,
    listaGuloseimas as guloseimasBatida,
    listaCaldasDoces as caldasBatida,
    listaMassas as massasBatida
} from "./batidaData";

import {
    listaMassas as massasTapioca,
    listaComplementos as complementosTapioca
} from "./tapiocaData";


import acaiImg from '../assets/acai.avif';
import batidaImg from '../assets/batida.avif';
import frutadafelicidadeImg from '../assets/frutadafelicidade.avif';
import tapiocaImg from '../assets/tapioca.avif';


export const productList = [
    {
        tipo: 'acai',
        nome: 'Açaí',
        imagem: acaiImg,
        sessoes: [
            { nome: 'Tamanhos', tipo: 'selecao_unica', itens: tamanhosAcai },
            { nome: 'Massas', tipo: 'selecao_unica', itens: massasAcai },
            { nome: 'Frutas', itens: frutasAcai },
            { nome: 'Caldas Doces', itens: caldasAcai },
            { nome: 'Doces Secos', itens: docesSecosAcai },
            { nome: 'Guloseimas', itens: guloseimasAcai },
        ]
    },
    {
        tipo: 'frutadafelicidade',
        nome: 'Fruta da Felicidade',
        imagem: frutadafelicidadeImg,
        sessoes: [
            { nome: 'Tamanhos', tipo: 'selecao_unica', itens: tamanhosFruta },
            { nome: 'Frutas', itens: frutasFruta },
            { nome: 'Adicionais', itens: adicionaisFruta },
        ]
    },
    {
        tipo: 'tapioca',
        nome: 'Tapioca',
        imagem: tapiocaImg,
        sessoes: [
            { nome: 'Massas', tipo: 'selecao_unica', itens: massasTapioca },
            { nome: 'Complementos', itens: complementosTapioca }
        ]
    },
    {
        tipo: 'batidanagarrafa',
        nome: 'Batida na Garrafa',
        imagem: batidaImg,
        sessoes: [
            { nome: 'Tamanhos', tipo: 'selecao_unica', itens: tamanhosBatida },
            { nome: 'Massas', tipo: 'selecao_unica', itens: massasBatida },
            { nome: 'Frutas', itens: frutasBatida },
            { nome: 'Caldas Doces', itens: caldasBatida },
            { nome: 'Guloseimas', itens: guloseimasBatida },
        ]
    }
];


