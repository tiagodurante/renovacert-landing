import * as React from "react";
import AppSection from '../components/Section'
import AppPrice from '../components/Price'
import AppColumn from '../components/Column'
import "../styles/global.css";

const IndexPage = () => {
  return (
    <main className="">
      <AppSection bgColor="background" first>
        <div className="flex flex-row justify-between">
          <span className="text-text">logotipo</span>
          <span className="text-text">Get Early Access</span>
        </div>
        <div className="py-24 md:py-36">
          <div className="text-center sm:text-left">
            <h1 className="text-text text-4xl sm:text-5xl lg:text-6xl font-bold capitalize">A New Way To Start Business</h1>
            <h3 className="text-text text-md md:text-xl mt-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt laudantium incidunt praesentium. Officia animi commodi alias beatae nisi dolorum consectetur! Quas quae quidem harum dolorem facilis necessitatibus fugit, molestiae laudantium.</h3>
            <button className="bg-secondary mt-8 text-black py-4 px-8 font-bold rounded-full">Get Started</button>
          </div>
        </div>
      </AppSection>
      <AppSection bgColor="white">
        <div className="text-center">
          <h3 className="text-black font-bold text-4xl sm:text-5xl">Uma assinatura digital para diversos serviços</h3>
        </div>
        <AppColumn quantity={3}>
          <div className="text-center py-10">
            <h5 className="text-2xl">Emissão de nota fiscal</h5>
            <p>Realize a emissão de notas fiscais para sua empresa ou produtor rural</p>
          </div>
          <div className="text-center py-10">
            <h5 className="text-2xl">Serviços do governo</h5>
            <p>Acesse todos os serviços disponibilizados pelo governo federal e estadual de forma ilimitada com sua assinatura digital</p>
          </div>
          <div className="text-center py-10">
            <h5 className="text-2xl">Assinatura digital</h5>
            <p>Assine documentos digitais de forma segura</p>
          </div>
        </AppColumn>
      </AppSection>
      <AppSection bgColor="white">
        <div className="text-center">
          <h3 className="text-black font-bold text-4xl">Atendimento Presencial</h3>
          <p className="text-black mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla impedit aliquid mollitia, ea dignissimos a iure libero quisquam blanditiis incidunt eius ratione praesentium tenetur voluptatem dolor cupiditate assumenda porro eveniet.</p>
          <button className="bg-background mt-8 text-text py-4 px-8 font-bold rounded-full">Learn More</button>
        </div>
      </AppSection>
      <AppSection bgColor="white">
        <div className="text-center">
          <h3 className="text-black font-bold text-4xl">Atendimento a distância</h3>
          <p className="text-black mt-8">Oferecemos este serviço para o cliente que não tem disponibilidade para realizar o modo presencial, permitindo com que todo o atendimento seja feito por videoconferência. Com o celular em mãos, a validação do documento com foto será realizada e o certificado poderá ser emitido dentro de 24 horas.</p>
          <button className="bg-background mt-8 text-text py-4 px-8 font-bold rounded-full">Learn More</button>
        </div>
      </AppSection>
      <AppSection bgColor="white">
        <div className="text-center">
          <h3 className="text-black font-bold text-4xl sm:text-5xl">Consulte nossos preços</h3>
        </div>
        <AppColumn quantity={2}>
          <AppPrice bgColor="white" txColor="background" title="Pessoa Física" price={140}>
            <p>e-CPF A1 (1 ano)</p>
            <p>e-CPF A3 Token (1 a 3 anos)</p>
            <p>e-CPF A3 Cartão (1 a 3 anos)</p>
            <p className="font-bold mt-4">Documentos necessários</p>
            <p>Documento com foto</p>
            <p>Comprovante de endereço</p>
            <p>E-mail e telefone para contato</p>
            <button className="bg-text border-black mt-12 text-black border-2 py-4 px-8 font-bold rounded-full">Learn More</button>
          </AppPrice>
          <AppPrice bgColor="background" txColor="text" title="Pessoa Jurídica" price={180} customClass="rounded-md">
            <p className="text-text">e-CNPJ A1 (1 ano)</p>
            <p className="text-text">e-CNPJ A3 Token (1 a 3 anos)</p>
            <p className="text-text">e-CNPJ A3 Cartão (1 a 3 anos)</p>
            <p className="text-text font-bold mt-4">Documentos necessários</p>
            <p className="text-text">Contrato social, requerimento de empresário ou ata e estatuto atualizado</p>
            <p className="text-text">Documento com foto</p>
            <p className="text-text">Comprovante de endereço</p>
            <p className="text-text">E-mail e telefone para contato</p>
            <button className="bg-secondary mt-12 text-black py-4 px-8 font-bold rounded-full">Learn More</button>
          </AppPrice>
        </AppColumn>
      </AppSection>
      <AppSection bgColor="background">
        <div className="text-center text-text">
          areas de atendiento (maps)
        </div>
      </AppSection>
      <AppSection bgColor="background">
        <AppColumn quantity={2}>
        {/* <div className={`grid sm:grid-cols-2 md:py-16`}> */}
          <div className="text-text">
            <h3 className="text-4xl font-bold mb-8">Contact Us</h3>
            <p className="mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum commodi quod sunt alias suscipit saepe aspernatur excepturi nesciunt unde, reiciendis quam illo explicabo dignissimos soluta incidunt obcaecati voluptatum ipsam modi.</p>
            <p className="mb-1">email: tiagodurante@outlook.com.br</p>
            <p className="mb-1">phone: 44998922501</p>
            <p className="mb-1">endereco: rua 12 de dezembro, 242, centro</p>
          </div>
          <div className="h-96 text-text">
          <h3 className="text-4xl font-bold mb-8">Contact Us</h3>
            <p className="mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum commodi quod sunt alias suscipit saepe aspernatur excepturi nesciunt unde, reiciendis quam illo explicabo dignissimos soluta incidunt obcaecati voluptatum ipsam modi.</p>
            <p className="mb-1">email: tiagodurante@outlook.com.br</p>
            <p className="mb-1">phone: 44998922501</p>
            <p className="mb-1">endereco: rua 12 de dezembro, 242, centro</p>
          </div>
        </AppColumn>
      </AppSection>
      <AppSection bgColor="background">
        <div className="flex flex-row justify-between">
          <span className="text-text">copyright @ 2022</span>
          <span className="text-text">facebook insta</span>
        </div>
      </AppSection>
    </main>
  );
};

export default IndexPage;
