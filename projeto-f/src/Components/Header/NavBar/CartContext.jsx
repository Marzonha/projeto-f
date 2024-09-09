import React, { createContext, useState } from 'react';

// Criação do Contexto
export const CartContext = createContext();

// Criação dos cards
export function CartProvider({ children }) {
  const [cartoesDisponiveis] = useState([
    { id: 1, nome: 'Red Dead Redemption 2', preco: 'R$ 109,99', img: 'src/assets/img/RDR2.jpg' },
    { id: 2, nome: 'Pro Evolution Soccer 2021', preco: 'R$ 79,99', img: 'src/assets/img/PES.png'},
    { id: 3, nome: 'Grand Theft Auto V', preco: 'R$ 99,99', img: 'src/assets/img/GTA.jpg'},
    { id: 4, nome: 'Sleeping Dogs', preco: 'R$ 29,99', img: 'src/assets/img/sleeping.jpg'},
    { id: 5, nome: 'Call of Duty: MW 2', preco: 'R$ 69,99', img: 'src/assets/img/COD.jpg' },
    { id: 6, nome: 'Sonic Generations', preco: 'R$ 19,99', img: 'src/assets/img/sonic.jpg'},
    { id: 7, nome: 'FC 25', preco: 'R$ 249,99', img: 'src/assets/img/fifa.jpg' },
    { id: 8, nome: 'Lego Batman 3: Beyond Gotham', preco: 'R$ 19,99', img: 'src/assets/img/legoBatman.jpg'},
    { id: 9, nome: 'Minecraft', preco: 'R$ 39,99', img: 'src/assets/img/mine.jpg'},
    { id: 10, nome: 'Spider Man 2', preco: 'R$ 149,99', img: 'src/assets/img/spiderMan.jpeg' },
    { id: 11, nome: 'Injustice 2', preco: 'R$ 79,99', img: 'src/assets/img/injustice.jpg' },
    { id: 12, nome: 'Forza Horizon 5', preco: 'R$ 129,99', img: 'src/assets/img/forza.jpg'},
    { id: 13, nome: 'Mario Kart 8 Deluxe', preco: 'R$ 59,99', img: 'src/assets/img/marioKart.jpg' },
    { id: 14, nome: 'Skate 3', preco: 'R$ 19,99', img: 'src/assets/img/skate.jpg'},
    { id: 15, nome: 'Mortal Kombat 1', preco: 'R$ 159,99', img: 'src/assets/img/MK.jpg'},
    { id: 16, nome: 'Overcooked 2', preco: 'R$ 39,99', img: 'src/assets/img/overcooked.jpg'},
    { id: 17, nome: 'Black Myth: Wukong', preco: 'R$ 259,99', img: 'src/assets/img/macaco.jpeg'},
    { id: 18, nome: 'Guitar Hero 3: Legends of Rock', preco: 'R$ 18,99', img: 'src/assets/img/GH.jpg'},
    { id: 19, nome: 'The Last of Us Part II', preco: 'R$ 99,99', img: 'src/assets/img/TLOU.png'},
    { id: 20, nome: 'God of War: Ragnarök', preco: 'R$ 209,99', img: 'src/assets/img/GOW.jpg'},
    { id: 21, nome: 'Cyberpunk 2077', preco: 'R$ 159,99', img: 'src/assets/img/cyberpunk.jpg'},
    { id: 22, nome: 'Fallout 4', preco: 'R$ 89,99', img: 'src/assets/img/fallout.jpg'},
    { id: 23, nome: 'Call of Duty: Black Ops 6', preco: 'R$ 229,99', img: 'src/assets/img/codbo.jpg'},
    { id: 24, nome: 'Marvel Avengers', preco: 'R$ 109,99', img: 'src/assets/img/vingadores.jpg'},

  ]);
  
  //Funções para o js funcionar 
  const [cartoesNoCarrinho, setCartoesNoCarrinho] = useState([]);
  const [cartoesFiltrados, setCartoesFiltrados] = useState(cartoesDisponiveis);

  const adicionarCartao = (cartao) => {
    if (!cartoesNoCarrinho.find(c => c.id === cartao.id)) {
      setCartoesNoCarrinho([...cartoesNoCarrinho, cartao]);
    }
  };

  const removerCartao = (id) => {
    setCartoesNoCarrinho(cartoesNoCarrinho.filter(cartao => cartao.id !== id));
  };

  return (
    <CartContext.Provider value={{ 
      cartoesDisponiveis, 
      cartoesNoCarrinho, 
      adicionarCartao, 
      removerCartao,
      cartoesFiltrados,
      setCartoesFiltrados
    }}>
      {children}
    </CartContext.Provider>
  );
}
