import style from "./footer.module.css";

export default function Footer() {
  return (
    <>
 <footer className={style.containerFooterPai}>
        <div className={style.containerfooter}>
            <div className={style.rowfooter}>
                <div className={style.footercol}>
                    <h4>Empresa</h4>
                    <ul>
                        <li><a href="#"> Quem somos </a></li>
                        <li><a href=""> nossos serviços </a></li>
                        <li><a href=""> política de privacidade </a></li>
                        <li><a href=""> programa de afiliados</a></li>
                    </ul>
                </div>
                <div className={style.footercol}>
                    <h4>Obter ajuda</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Transporte</a></li>
                        <li><a href="#">devoluções</a></li>
                        <li><a href="#">Status De Pedido</a></li>
                        <li><a href="#">Opções De Pagamento</a></li>
                    </ul>
                </div>
                <div className={style.footercol}>
                    <h4>Lojas de Inspiração</h4>
                    <ul>
                        <li><a href="#">Steam</a></li>
                        <li><a href="#">Eneba</a></li>
                        <li><a href="#">Epic Games</a></li>
                        <li><a href="#">Microsft Game Pass</a></li>
                    </ul>
                </div>
                <div className={style.footercol}>
                    <h4>Se Cadastre</h4>
                    <div className={style.formsub}>
                        <form>
                            <input type="e-mail" name="e-mail" placeholder="Email" autoComplete="e-mail"/>
                          <button type="submit" value="e-mail">Cadastrar</button>
                        </form>
                    </div>

                    <div className={style.mediassocias}>
                        <a href="#"> <i className={style.fafafacebook}></i> </a>
                        <a href="#"> <i className={style.fafainstagram}></i> </a>
                        <a href="#"> <i className={style.fafatwitter}></i> </a>
                        <a href="#"> <i className={style.fafalinkedin}></i> </a>
                    </div>

                </div>
            </div>
        </div>
    </footer>
    </>
  );

}