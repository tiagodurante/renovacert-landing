import * as React from "react";
import "../styles/global.css";

const IndexPage = () => {
  return (
    <main className="">
      <section className="bg-background sm:bg-midnight h-fit px-8 py-12 sm:px-32">
        <div className="flex flex-row justify-between">
          <span className="text-text">logotipo</span>
          <span className="text-text">Get Early Access</span>
        </div>
        <div className="py-24 sm:py-48">
          <div className="text-center sm:text-left">
            <h1 className="text-text text-6xl font-bold capitalize">A New Way To Start Business</h1>
            <h3 className="text-text text-lg mt-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt laudantium incidunt praesentium. Officia animi commodi alias beatae nisi dolorum consectetur! Quas quae quidem harum dolorem facilis necessitatibus fugit, molestiae laudantium.</h3>
            <button className="bg-secondary mt-8 text-black py-4 px-8 font-bold rounded-full">Get Started</button>
          </div>
        </div>
      </section>
      <section className="bg-white h-fit px-8 py-20 sm:px-32">
        <div className="text-center">
          <h3 className="text-black font-bold text-4xl sm:text-5xl">Uma assinatura digital para diversos serviços</h3>
        </div>
        <div className="py-8 sm:py-16 sm:columns-3">
          <div className="text-center">
            <h5 className="text-2xl">Anti-spam</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="text-center">
            <h5 className="text-2xl">Anti-spam</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="text-center">
            <h5 className="text-2xl">Anti-spam</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </section>
      <section className="bg-white h-fit px-8">
        <div className="text-center">
          <h3 className="text-black font-bold text-4xl">Atendimento Presencial</h3>
          <p className="text-black mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla impedit aliquid mollitia, ea dignissimos a iure libero quisquam blanditiis incidunt eius ratione praesentium tenetur voluptatem dolor cupiditate assumenda porro eveniet.</p>
          <button className="bg-background mt-8 text-text py-4 px-8 font-bold rounded-full">Learn More</button>
        </div>
      </section>
      <section className="bg-white h-fit px-8 py-20">
        <div className="text-center">
          <h3 className="text-black font-bold text-4xl">Atendimento a distância</h3>
          <p className="text-black mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla impedit aliquid mollitia, ea dignissimos a iure libero quisquam blanditiis incidunt eius ratione praesentium tenetur voluptatem dolor cupiditate assumenda porro eveniet.</p>
          <button className="bg-background mt-8 text-text py-4 px-8 font-bold rounded-full">Learn More</button>
        </div>
      </section>
      <section className="bg-white h-fit sm:px-8 sm:px-32">
        <div className="text-center">
          <h3 className="text-black font-bold text-4xl sm:text-5xl">Check our pricing</h3>
        </div>
        <div className="sm:columns-2 sm:py-16">
          <div className="sm:px-24 text-center py-10">
            <p className="uppercase text-2xl">Pessoa Física</p>
            <div className="pb-6 pt-10 font-medium">R$<span className="text-5xl font-bold">140</span></div>
            <p>beneficio 1</p>
            <p>beneficio 2</p>
            <p>beneficio 3</p>
            <p>beneficio 4</p>
            <button className="bg-text border-black mt-12 text-black border-2 py-4 px-8 font-bold rounded-full">Learn More</button>
          </div>
          <div className="sm:px-24 text-center bg-background py-10 sm:rounded-md">
            <p className="uppercase text-2xl text-text">Pessoa Jurídica</p>
            <div className="pb-6 pt-10 font-medium text-text">R$<span className="text-5xl font-bold text-text">180</span></div>
            <p className="text-text">beneficio 1</p>
            <p className="text-text">beneficio 2</p>
            <p className="text-text">beneficio 3</p>
            <p className="text-text">beneficio 4</p>
            <button className="bg-secondary mt-12 text-black py-4 px-8 font-bold rounded-full">Learn More</button>
          </div>
        </div>
      </section>
      <section className="bg-accent h-fit px-8 py-20">
        <div className="text-center text-text">
          areas de atendiento (maps)
        </div>
      </section>
      <section className="bg-background h-fit px-8 py-24">
        <div className="text-text sm:columns-2">
          <div className="h-72">
            <h3 className="text-4xl font-bold mb-8">Contact Us</h3>
            <p className="mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum commodi quod sunt alias suscipit saepe aspernatur excepturi nesciunt unde, reiciendis quam illo explicabo dignissimos soluta incidunt obcaecati voluptatum ipsam modi.</p>
            <p className="mb-1">email: tiagodurante@outlook.com.br</p>
            <p className="mb-1">phone: 44998922501</p>
            <p className="mb-1">endereco: rua 12 de dezembro, 242, centro</p>
          </div>
          <div className="h-72">
            form de atendimento
          </div>
        </div>
      </section>
      <section className="bg-background h-fit px-8 py-12 sm:px-32">
        <div className="flex flex-row justify-between">
          <span className="text-text">copyright @ 2022</span>
          <span className="text-text">facebook insta</span>
        </div>
      </section>
    </main>
  );
};

export default IndexPage;
