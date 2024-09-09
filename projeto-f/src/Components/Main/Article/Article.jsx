import style from "../Article/article.module.css";



export default function Article() {
  return (
    <>

      <article>

        {/* Slider */}
        <div className={style.slider}>
          <div className={style.containerImg} >
            <img className={style.imgP} src="src\assets\img\fifa.jpg" alt="" />
            <div className={style.ImgS}>
              <img className={style.imgS} src="src\assets\img\fifa.jpg" alt="" />

              <img className={style.imgS} src="src\assets\img\fifa.jpg" alt="" />

              <img className={style.imgS} src="src\assets\img\fifa.jpg" alt="" />

              <img className={style.imgS} src="src\assets\img\fifa.jpg" alt="" />

            </div>
          </div>
        </div>

        {/* Botao do slider */}
        <div className={style.btnCr}>
          <button className={style.btnac}><a href="#"></a></button>
          <button className={style.btnac}><a href="#"></a></button>
          <button className={style.btnac}><a href="#"></a></button>
          <button className={style.btnac}><a href="#"></a></button>
        </div>

      </article>

    </>
  );
}
