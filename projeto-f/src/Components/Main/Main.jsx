import Header from "../Header/Header";
import Article from "./Article/Article";

import style from "../Main/main.module.css";




export default function Main() {
  return (
    <>

      <main>
        {/* <h2>Jogos em Promoções</h2>

        <section>
          <Article />
        </section> */}

        <section>
          <div className={style.container2}>
            <h1 className={style.titles}>Dia de jogos grátis</h1>
          </div>
          <div className={style.banner}>
            <div className={style.slider} style={{ "--quantity": 8 }}>
              <div className={style.model}> </div>
              <div className={style.item} style={{ "--position": 1 }}>
                <img src="src\assets\img\asscreed.jpg" alt="" />
              </div>
              <div className={style.item} style={{ "--position": 2 }}>
                <img src="src\assets\img\vingadores.jpg" alt="" />
              </div>
              <div className={style.item} style={{ "--position": 3 }}>
                <img src="src\assets\img\MK.jpg" alt="" />
              </div>
              <div className={style.item} style={{ "--position": 4 }}>
                <img src="src\assets\img\overcooked.jpg" alt="" />
              </div>
              <div className={style.item} style={{ "--position": 5 }}>
                <img src="src\assets\img\nfs.jpEg" alt="" />
              </div>
              <div className={style.item} style={{ "--position": 6 }}>
                <img src="src\assets\img\residentEvil.jpg" alt="" />
              </div>
              <div className={style.item} style={{ "--position": 7 }}>
                <img src="src\assets\img\vingadores.jpg" alt="" />
              </div>
              <div className={style.item} style={{ "--position": 8 }}>
                <img src="src\assets\img\GH.jpg" alt="" />
              </div>
              <div className={style.item} style={{ "--position": 9 }}>
                <img src="src\assets\img\farcry.jpg" alt="" />
              </div>
              <div className={style.item} style={{ "--position": 10 }}>
                <img src="src\assets\img\asscreed.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className={style.bg1}>
        </section>
      </main>
    </>
  );
}
