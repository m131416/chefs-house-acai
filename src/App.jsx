import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { FaIceCream, FaShoppingBag } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { Carousel } from './components/Carousel/Carousel';
import { CarouselItem } from './components/Carousel/CarouselItem';

import { listaTamanhos, listaFrutas, listaAdicionais } from './data/productData';
import { productList } from './data/productList';




function App() {
  const logo = `${import.meta.env.BASE_URL}chefs-house-acai-logo.avif`;
  const pix = `${import.meta.env.BASE_URL}/icons/pix.avif`;
  const cartao = `${import.meta.env.BASE_URL}/icons/cartao.avif`;
  const dinheiro = `${import.meta.env.BASE_URL}/icons/money.avif`;
  const [formaPagamento, setFormaPagamento] = useState('');
  const [endereco, setEndereco] = useState('');

  const [modoEscuro, setModoEscuro] = useState(() => {
    return localStorage.getItem("modoEscuro") === "true";
  });
  useEffect(() => {
    localStorage.setItem("modoEscuro", modoEscuro);
    document.body.classList.toggle("dark-mode", modoEscuro);
  }, [modoEscuro]);





  // 1. Estados para armazenar seleções
  const [bag, setBag] = useState([]);
  const [showBag, setShowBag] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState(productList[0]);
  const limiteItens = 15;

  const [selecoes, setSelecoes] = useState({});
  useEffect(() => {
    const selecoesIniciais = {};
    produtoSelecionado.sessoes.forEach(sessao => {
      if (sessao.tipo === 'selecao_unica') {
        selecoesIniciais[sessao.nome] = sessao.itens[0]?.nome || '';
      } else {
        selecoesIniciais[sessao.nome] = [];
      }
    });
    setSelecoes(selecoesIniciais);
  }, [produtoSelecionado]);



  // 2. Cálculo do preço (adaptado do seu JS original)
  const calcularTotal = () => {
    return bag.reduce((total, item) => {
      return total + item.sessoes.reduce((soma, sessao) => {
        const selecionado = item.selecoes[sessao.nome];
        if (sessao.tipo === 'selecao_unica') {
          const preco = sessao.itens.find(i => i.nome === selecionado)?.preco || 0;
          return soma + preco;
        } else {
          return soma + (selecionado || []).reduce((acc, obj) => {
            const item = sessao.itens.find(i => i.nome === obj.nome);
            return acc + (item?.preco || 0) * obj.quantidade;
          }, 0);
        }
      }, 0);
    }, 0);
  };

  const calcularPrecoItem = (item) => {
    return item.sessoes.reduce((soma, sessao) => {
      const selecionado = item.selecoes[sessao.nome];
      if (sessao.tipo === 'selecao_unica') {
        const preco = sessao.itens.find(i => i.nome === selecionado)?.preco || 0;
        return soma + preco;
      } else {
        return soma + (selecionado || []).reduce((acc, v) => {
          const nome = typeof v === 'string' ? v : v.nome;
          const qtd = typeof v === 'string' ? 1 : v.quantidade;
          const precoItem = sessao.itens.find(i => i.nome === nome)?.preco || 0;
          return acc + (precoItem * qtd);
        }, 0);
      }
    }, 0);
  };




  // 3. Função para lidar com checkboxes
  const toggleItem = (item, lista, setLista) => {
    if (!lista.includes(item) && lista.length >= limiteItens) return;

    if (lista.includes(item)) {
      setLista(lista.filter(i => i !== item));
    } else {
      setLista([...lista, item]);
    }
  };

  const gerarPedido = () => {

    const total = calcularTotal();
    const telefone = "5519981755678";

    const itensMsg = bag.map((item, index) => {
      const linhas = Object.entries(item.selecoes).map(([chave, valor]) => {
        if (Array.isArray(valor) && valor.length > 0) {
          return `${chave}:%0A${valor.map(v => {
            if (typeof v === 'string') {
              return `- ${v}`; // formato antigo
            } else if (typeof v === 'object' && v.nome && v.quantidade) {
              return `- ${v.quantidade}x ${v.nome}`; // formato novo
            }
            return ''; // fallback
          }).join('%0A')}`;
        } else if (!Array.isArray(valor)) {
          return `${chave}: ${valor}`;
        }
        return '';
      }).filter(Boolean);

      return `*${item.nome} ${index + 1}*%0A${linhas.join('%0A')}`;
    }).join('%0A%0A');

    const mensagem = `*PEDIDO DE AÇAÍ DO CHEF*%0A%0A${itensMsg}%0A%0ATotal: R$ ${total.toFixed(2).replace('.', ',')}` +
      `%0A%0APagamento: ${formaPagamento || 'não informado'}` +
      `%0AEndereço: ${endereco || 'não informado'}`;

    if (!formaPagamento) {
      alert("Por favor, selecione a forma de pagamento.");
      return;
    }

    window.open(`https://wa.me/${telefone}?text=${mensagem}`, '_blank');
  };



  const addToBag = () => {
    const newItem = {
      selecoes: { ...selecoes },
      nome: produtoSelecionado.nome,
      sessoes: produtoSelecionado.sessoes,
    };

    setBag([...bag, newItem]);
  };

  const removerItemDaSacola = (index) => {
    setBag(prev => prev.filter((_, i) => i !== index));
  };


  return (
    <div className="app">
      <div className="text-end mb-3 dark-mode-btn">
        <button
          className="btn btn-sm btn-outline-secondary"
          onClick={() => setModoEscuro(prev => !prev)}
        >
          {modoEscuro ? "☀️" : "🌙"}
        </button>
      </div><br/>
      <div className="card-custom">
        <div className="logo-banner">
          <img src={logo} alt="Logo" style={{ maxHeight: '80px' }} />
        </div>

        <Carousel>
          {productList.map((produto) => (
            <CarouselItem
              key={produto.tipo}
              imagem={produto.imagem}
              onClick={() => setProdutoSelecionado(produto)} // aqui o clique define o produto
            >
              <h5 className='product-title'>{produto.nome}</h5>
            </CarouselItem>
          ))}
        </Carousel>



        <div className="inside-card-custom">

          <h3>{produtoSelecionado.nome}</h3><br /><br />

          {/* Dados do Produto */}
          {produtoSelecionado.sessoes.map((sessao, idx) => {
            const listaSelecionada = selecoes[sessao.nome] || [];

            return (<div className="mb-4" key={idx}>
              <h2 className="section-title">{sessao.nome}</h2>
              {sessao.tipo === 'selecao_unica' ? (
                <>
                  <label htmlFor="selectTam" className="visually-hidden">Escolha o sabor</label>
                  <select
                    id="selectTam"
                    className="form-select"
                    value={selecoes[sessao.nome] || sessao.itens[0]?.nome}
                    onChange={(e) => {
                      setSelecoes(prev => ({
                        ...prev,
                        [sessao.nome]: e.target.value
                      }));
                    }}
                  >
                    {sessao.itens.map((item) => (
                      <option key={item.nome} value={item.nome}>
                        {item.nome} {(item.preco > 0) ? ` - R$ ` + item.preco.toFixed(2) : ''}
                      </option>
                    ))}
                  </select>
                </>
              ) : (
                <div className="d-flex flex-column">
                  {sessao.itens.map((item) => {
                    const selecionados = selecoes[sessao.nome] || [];
                    const existente = selecionados.find(i => i.nome === item.nome);
                    const quantidade = existente?.quantidade || 0;

                    return (
                      <div key={item.nome} className="d-flex align-items-center gap-2 mb-2">
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => {
                            if (quantidade <= 0) return;
                            const novoArray = selecionados.map(i =>
                              i.nome === item.nome ? { ...i, quantidade: i.quantidade - 1 } : i
                            ).filter(i => i.quantidade > 0);

                            setSelecoes(prev => ({ ...prev, [sessao.nome]: novoArray }));
                          }}
                        >-</button>

                        <span>{quantidade}</span>

                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => {
                            const limiteMax = 10;
                            let novoArray = [];

                            if (existente) {
                              if (existente.quantidade >= limiteMax) return;

                              novoArray = selecionados.map(i =>
                                i.nome === item.nome
                                  ? { ...i, quantidade: i.quantidade + 1 }
                                  : i
                              );
                            } else {
                              novoArray = [...selecionados, { nome: item.nome, quantidade: 1 }];
                            }

                            setSelecoes(prev => ({ ...prev, [sessao.nome]: novoArray }));
                          }}
                        >+</button>

                        <img src={item.img} alt={item.nome} style={{ width: '32px', height: '32px', borderRadius: '50%' }} />

                        <span className='itemName'>{item.nome} - R$ {item.preco.toFixed(2)}</span>
                      </div>
                    );
                  })}

                </div>

              )}
            </div>);
          })}

          <button onClick={addToBag} className="btn-add w-100">Adicionar à sacola</button>

          <div className="mb-3">
            <h3>Forma de pagamento:</h3>

            <div className="form-check d-flex align-items-center gap-2 mb-2">
              <input
                className="form-check-input"
                type="radio"
                name="pagamento"
                value="Pix"
                id="pagamentoPix"
                onChange={(e) => setFormaPagamento(e.target.value)}
              />
              <label className="form-check-label d-flex align-items-center gap-2" htmlFor="pagamentoPix">
                <img src={pix} alt="Pix" style={{ width: '24px', height: '24px' }} />
                Pix
              </label>
            </div>

            <div className="form-check d-flex align-items-center gap-2 mb-2">
              <input
                className="form-check-input"
                type="radio"
                name="pagamento"
                value="Cartão"
                id="pagamentoCartao"
                onChange={(e) => setFormaPagamento(e.target.value)}
              />
              <label className="form-check-label d-flex align-items-center gap-2" htmlFor="pagamentoCartao">
                <img src={cartao} alt="Cartão" style={{ width: '24px', height: '24px' }} />
                Cartão
              </label>
            </div>

            <div className="form-check d-flex align-items-center gap-2 mb-2">
              <input
                className="form-check-input"
                type="radio"
                name="pagamento"
                value="Dinheiro"
                id="pagamentoDinheiro"
                onChange={(e) => setFormaPagamento(e.target.value)}
              />
              <label className="form-check-label d-flex align-items-center gap-2" htmlFor="pagamentoDinheiro">
                <img src={dinheiro} alt="Dinheiro" style={{ width: '24px', height: '24px' }} />
                Dinheiro
              </label>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="endereco" className="form-label">Endereço de Entrega</label>
            <input
              type="text"
              id="endereco"
              className="form-control"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
              placeholder="Rua, número, bairro, ponto de referência..."
            />
          </div>



          <button disabled={bag.length === 0} onClick={gerarPedido} className="btn-finalizar w-100">Finalizar Pedido</button>

          <div style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#6f42c1',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            fontSize: '24px',
            zIndex: 1000,
          }}
            onClick={() => setShowBag(true)}>
            <FaShoppingBag />
            {bag.length > 0 && (
              <div style={{
                position: 'absolute',
                top: '-5px',
                right: '-5px',
                backgroundColor: 'red',
                color: 'white',
                borderRadius: '50%',
                padding: '2px 6px',
                fontSize: '12px',
              }}
              >
                {bag.length}
              </div>
            )}
          </div>

          {showBag && (
            <div className="bag-modal">
              <h4>Minha Sacola</h4>
              {bag.map((item, index) => {
                const precoItem = calcularPrecoItem(item);
                return (
                  <div key={index}>
                    <p><strong>{item.nome}</strong> — R$ {precoItem.toFixed(2).replace('.', ',')}</p>
                    {Object.entries(item.selecoes).map(([chave, valor]) =>
                      chave !== 'Tamanho' && (
                        <p key={chave}>
                          {chave}:{' '}
                          {Array.isArray(valor)
                            ? valor.map(v =>
                              typeof v === 'string'
                                ? v
                                : `${v.quantidade}x ${v.nome}`
                            ).join(', ')
                            : valor}
                        </p>
                      )
                    )}
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => removerItemDaSacola(index)}
                    >
                      Remover
                    </button>
                    <hr />
                  </div>
                );
              })}

              <p>
                <strong>Total: R$ {calcularTotal().toFixed(2).replace('.', ',')}</strong>
              </p>
              <button onClick={() => setShowBag(false)}>Fechar</button>
            </div>
          )}


          <div id="resumo"></div>
        </div>

      </div>
    </div>
  );
}

export default App
