import React, { useEffect, useState } from "react";
import "./App.scss";
import Head from "./components/helper/Head";
import Header from "./components/Header";

import { register } from "swiper/element/bundle";
import { getProducts } from "./utils";
import CardProduct from "./components/CardProduct";
import Footer from "./components/Footer";
register();
const products = await getProducts();

function  App() {
  const [productsNumber, setProductsNumber] = useState(0);
  const [popUp, setPopup] = useState(false);

  function incrementProduct(){
    const result = 1 + productsNumber;
    setProductsNumber(result);
    setPopup(true);
    setTimeout(()=>{
      setPopup(false)
    },3000)
  }
  return (
    <>
      <Head />
      <Header productsNumber={productsNumber} />
      <main >
        <section className="banners">
          <swiper-container
            slides-per-view="1"
            rewind="true"
            clickable={true}
            pagination="true"
            className="swiper-banners"
          >
            <swiper-slide>
              <img
                src="/static/images/banners/banner-principal-1.png"
                alt="Banner 1"
              />
              <a className="btnLink" href="#">
                Conheça agora!
              </a>
            </swiper-slide>
            <swiper-slide>
              <img
                src="/static/images/banners/banner-principal-2.png"
                alt="Banner 2"
              />
              <a className="btnLink" href="#">
                Conheça agora!
              </a>
            </swiper-slide>
            <swiper-slide>
              <img
                src="/static/images/banners/banner-principal-3.png"
                alt="Banner 3"
              />
              <a className="btnLink" href="#">
                Conheça agora!
              </a>
            </swiper-slide>
          </swiper-container>
        </section>

        <section className="categorys container">
          <h2>Categorias</h2>
          <swiper-container
            slides-per-view="2.5"
            space-between="12"
            className="swiper-categorias"
          >
            <swiper-slide>
              <img src="/static/images/banners/banner-botas.png" alt="botas" />
              <p>Botas</p>
            </swiper-slide>
            <swiper-slide>
              <img
                src="/static/images/banners/banner-sandalias.png"
                alt="sandalias"
              />
              <p>Sandalias</p>
            </swiper-slide>
            <swiper-slide>
              <img
                src="/static/images/banners/banner-scarpins.png"
                alt="scarpins"
              />
              <p>Scarpins</p>
            </swiper-slide>
            <swiper-slide>
              <img
                src="/static/images/banners/banner-sapatilhas.png"
                alt="sapatilhas"
              />
              <p>Spatilhas</p>
            </swiper-slide>
          </swiper-container>
        </section>

        <section className="othersBanners">
          <img
            className="small"
            src="/static/images/banners/banner-pequeno.png"
            alt="Banner be simple"
          />
          <img
            className="large"
            src="/static/images/banners/banner-grande.png"
            alt="Banner surpreendente"
          />
        </section>

        <section className="products container">
          <h2>Lançamentos</h2>
          <swiper-container slides-per-view="1.5" space-between="20">
            {products.map((prod) => {
              return (
                <swiper-slide key={prod.id}>
                  <CardProduct
                    id={prod.id}
                    image={prod.image}
                    price={prod.price}
                    name={prod.name}
                    incrementProduct={incrementProduct}
                  />
                </swiper-slide>
              );
            })}
          </swiper-container>
        </section>

        <section className="blog container">
          <h2>Conheça mais</h2>
          <p>Fique por dentro de tudo que acontece no Bebecê</p>

          <swiper-container slides-per-view="1" pagination="true">
            <swiper-slide>
              <div className="blog-card">
                <img
                  src="/static/images/banners/blog1.png"
                  alt="Novo logo, mesma essência."
                />
                <h3>NOVO LOGO, MESMA ESSÊNCIA.</h3>
                <p>
                  Trazendo conforto através das linhas finas e grossas + uma
                  paleta de cores vibrante e cheia de atitude, o resultado é um
                  visual que traduz nossa essência: autêntica e surpreendente!
                </p>
                <a href="#">Saiba mais!</a>
              </div>
            </swiper-slide>

            <swiper-slide>
              <div className="blog-card">
                <img
                  src="/static/images/banners/banner-pequeno.png"
                  alt="Be simple, be true."
                />
                <h3>É AMANHÃ</h3>
                <p>
                  SIMPLE and TRUE: lançamento da nova coleção Outono Inverno
                  2024 da Bebecê ❤️
                </p>
                <a href="#">Saiba mais!</a>
              </div>
            </swiper-slide>

            <swiper-slide>
              <div className="blog-card">
                <img
                  src="/static/images/banners/blog2.png"
                  alt="descubra o glamour em cada passo"
                />
                <h3>descubra o glamour em cada passo.</h3>
                <p>
                  Quer brilhar ainda mais neste inverno sem abrir mão do
                  conforto? Esta mule é perfeita para você. ✨
                </p>
                <a href="#">Saiba mais!</a>
              </div>
            </swiper-slide>
          </swiper-container>
        </section>

        <div className={`${popUp ? "show" : ""} popup`}>Adicionado ao Carrinho</div>
      </main>
      <Footer />
    </>
  );
}

export default App;
