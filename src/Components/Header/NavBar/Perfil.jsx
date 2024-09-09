import React, { useState, useContext } from 'react';
import { CartContext } from './CartContext';
import styles from '../NavBar/perfil.module.css';

export default function Perfil() {
  // funçao que remove o card do carriho
  const { cartoesNoCarrinho, removerCartao } = useContext(CartContext);

  // função que calcula o total dos cartões
  const calcularTotal = () => {
    return cartoesNoCarrinho.reduce((total, cartao) => total + parseFloat(cartao.preco.replace('R$ ', '').replace(',','.')), 0).toFixed(2);
  };

  return (
    <div className={styles.perfil}>
      <div className={styles.perfilInfo}>
        <img className={styles.avatar} src="src/assets/img/gamer.png" alt="Avatar" />
        <strong>Seu nome</strong>
        <span>Nível da conta</span>
        <p>E-mail: profissional@gmail.com</p>
      </div>
      <div className={styles.carrinho}>
        <img src="src/assets/img/carrinho.png" alt="Carrinho" />
        <h1>Meu carrinho</h1>
      </div>
      {/* cards dos jogos */}
      <div className={styles.cardContainer}>
        {cartoesNoCarrinho.map(cartao => (
          <div key={cartao.id} className={styles.carrinhoCards}>
            <img src={cartao.img} alt={cartao.nome} className={styles.imgCard} />
            <h2 className={styles.cardNome}>{cartao.nome}</h2>
            <div className={styles.btns}>
              <a className={styles.cardPreco}>{cartao.preco}</a>
              <button onClick={() => removerCartao(cartao.id)} className={styles.removerBtn}>X</button>
            </div>
            
          </div>
        ))}
      </div>
      {/* calculadora */}
      <div className={styles.total}>
        <h2>Total: R$ {calcularTotal()}</h2>
        <button className={styles.totalBtn}>Finalizar compra</button>
      </div>
      <footer className={styles.containerFooterPai}>
        <div className={styles.containerfooter}>
            <div className={styles.rowfooter}>
                <div className={styles.footercol}>
                    <h4>Empresa</h4>
                    <ul>
                        <li><a href="#"> Quem somos </a></li>
                        <li><a href=""> nossos serviços </a></li>
                        <li><a href=""> política de privacidade </a></li>
                        <li><a href=""> programa de afiliados</a></li>
                    </ul>
                </div>
                <div className={styles.footercol}>
                    <h4>Obter ajuda</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Transporte</a></li>
                        <li><a href="#">devoluções</a></li>
                        <li><a href="#">Status De Pedido</a></li>
                        <li><a href="#">Opções De Pagamento</a></li>
                    </ul>
                </div>
                <div className={styles.footercol}>
                    <h4>Lojas de Inspiração</h4>
                    <ul>
                        <li><a href="#">Steam</a></li>
                        <li><a href="#">Eneba</a></li>
                        <li><a href="#">Epic Games</a></li>
                        <li><a href="#">Microsft Game Pass</a></li>
                    </ul>
                </div>
                <div className={styles.footercol}>
                    <h4>Cadastre-se</h4>
                    <div className={styles.formsub}>
                        <form>
                            <input type="e-mail" name="e-mail" placeholder="Email" autoComplete="e-mail"/>
                          <button type="submit" value="e-mail">Cadastrar</button>
                        </form>
                    </div>

                    <div className={styles.mediassocias}>
                        <a href="#"> <i className={styles.fafafacebook}></i> </a>
                        <a href="#"> <i className={styles.fafainstagram}></i> </a>
                        <a href="#"> <i className={styles.fafatwitter}></i> </a>
                        <a href="#"> <i className={styles.fafalinkedin}></i> </a>
                    </div>

                </div>
                <div className={styles.footercol}>
                    <h4>Criadores</h4>
                    <ul>
                        <li><a href="#">Rossandre Alex</a></li>
                        <li><a href="#">Marlon Pacheco</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    </div>
  );
}