import * as React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import AppHeader from '../components/Header';
import AppSection from '../components/Section';
import AppPrice from '../components/Price';
import AppColumn from '../components/Column';
import Map from '../components/Map';
import { SEO } from '../components/SEO';
import '../styles/global.css';

export const query = graphql`
  query Images {
    allFile {
      nodes {
        name
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

// @ts-ignore
function filterImage(data, name: string) {
  // @ts-ignore
  return data.allFile.nodes.find((item) => item.name === name).childImageSharp
    .fluid;
}

function goToWhatsapp () {
  window.open('https://wa.me/5544999188711?&text=Ol%C3%A1%2C%20estou%20interessado%20em%20adquirir%20um%20certificado%20digital!')
}

function goToInstagram () {
  window.open('https://www.instagram.com/renovacert/')
}

function goToMaps () {
  window.open('https://goo.gl/maps/73vjecP3Wtc2rYPEA')
}

export const Head = () => (
  <SEO />
)

// @ts-ignore
const IndexPage = ({ data }) => {
  return (
    <main className=''>
      <AppHeader bgColor='background'>
        <div className='flex flex-row justify-center sm:justify-between'>
          <Image fluid={filterImage(data, 'logo_dif')} className='w-36' />
        </div>
        <div className='py-16 md:py-36'>
          <div className='text-center sm:text-left'>
            <h1 className='text-text text-4xl sm:text-5xl lg:text-6xl font-bold capitalize'>
              Certificado digital do jeito que você precisa
            </h1>
            <h3 className='text-text text-md md:text-xl mt-8'>
              Escolha o dia de sua preferência para validação de documentos e
              pronto. Certificado disponível dentro de 24 horas. Simples assim!
            </h3>
            <button className='bg-secondary mt-8 text-black py-4 px-8 font-bold rounded-full' onClick={() => goToWhatsapp()}>
              Solicitar agora
            </button>
          </div>
        </div>
      </AppHeader>
      <AppSection bgColor='white'>
        <div className='text-center'>
          <h3 className='text-black font-bold text-4xl sm:text-5xl'>
            Uma assinatura digital para diversos serviços
          </h3>
        </div>
        <AppColumn>
          <div className='grid justify-items-center text-center py-10'>
            <Image
              fluid={filterImage(data, 'fatura')}
              className='w-24 md:w-28 mb-2'
            />
            <h5 className='text-xl font-medium'>Emissão de nota fiscal</h5>
            <p>
              Realize a emissão de notas fiscais para sua empresa ou propriedade
              rural
            </p>
          </div>
          <div className='grid justify-items-center text-center py-10'>
            <Image
              fluid={filterImage(data, 'servico')}
              className='w-24 md:w-28 mb-2'
            />
            <h5 className='text-xl font-medium'>Serviços do governo</h5>
            <p>
              Acesse todos os serviços disponibilizados pelo governo federal e
              estadual de forma ilimitada com sua assinatura digital
            </p>
          </div>
          <div className='grid justify-items-center text-center py-10'>
            <Image
              fluid={filterImage(data, 'leilao')}
              className='w-24 md:w-28 mb-2'
            />
            <h5 className='text-xl font-medium'>
              Acesso ao Serviço de Leilão Eletrônico
            </h5>
            <p>
              Realize lances no serviço de leilão eletrônico do governo federal
              por meio do portal eCAC
            </p>
          </div>
          <div className='grid justify-items-center text-center py-10'>
            <Image
              fluid={filterImage(data, 'assinatura')}
              className='w-24 md:w-28 mb-2'
            />
            <h5 className='text-xl font-medium'>Assinatura digital</h5>
            <p>Assine documentos digitais de forma rápida e segura</p>
          </div>
        </AppColumn>
      </AppSection>
      <AppSection bgColor='secondary' skew>
        <div className='grid justify-items-center text-center skew-y-12'>
          <Image
            fluid={filterImage(data, 'presencial')}
            className='w-32 md:w-64 mb-4'
          />
          <h3 className='text-black font-bold text-4xl'>
            Atendimento Presencial
          </h3>
          <p className='text-black mt-8'>
            Disponível para emissões de certificado A1 e A3, o atendimento
            presencial permite trabalhar com uma gama maior de certificados.
            Mediante agendamento, a validação consiste na coleta da foto e
            biometria do responsável, e o certificado estará disponível para
            emissão em um prazo de 24 horas.
          </p>
          <button className='bg-background mt-8 text-text py-4 px-8 font-bold rounded-full' onClick={() => goToWhatsapp()}>
            Solicitar agora
          </button>
        </div>
      </AppSection>
      <AppSection bgColor='secondary' skew>
        <div className='grid justify-items-center text-center skew-y-12'>
          <Image
            fluid={filterImage(data, 'distancia')}
            className='w-32 md:w-64 mb-4'
          />
          <h3 className='text-black font-bold text-4xl'>
            Atendimento a distância
          </h3>
          <p className='text-black mt-8'>
            Serviço permite que todo o atendimento seja feito por
            videoconferência. Com o celular, tablet ou computador (com webcam),
            a validação será realizada mediante agendamento e o certificado
            estará disponível para emissão em um prazo de 24 horas.
          </p>
          <p className='mt-2'>
            <strong>
              Disponível apenas para emissões de e-CPF e e-CNPJ A1 utilizando a
              CNH como documento com foto e, nos casos de pessoa jurídica, o
              contrato social deve conter assinatura eletrônica da junta
              comercial.
            </strong>
          </p>
          <button className='bg-background mt-8 text-text py-4 px-8 font-bold rounded-full' onClick={() => goToWhatsapp()}>
            Solicitar agora
          </button>
        </div>
      </AppSection>
      <AppSection bgColor='white'>
        <div className='text-center mt-12'>
          <h3 className='text-black font-bold text-4xl sm:text-5xl'>
            Consulte nossos preços
          </h3>
        </div>
        <AppColumn>
          <AppPrice
            bgColor='white'
            txColor='background'
            title='Pessoa Física'
            price={140}
          >
            <p>e-CPF A1 (1 ano)</p>
            <p>e-CPF A3 Token (1 a 3 anos)</p>
            <p>e-CPF A3 Cartão (1 a 3 anos)</p>
            <p className='font-bold mt-4'>Documentos necessários</p>
            <p>Documento com foto</p>
            <p>Comprovante de endereço</p>
            <p>E-mail e telefone para contato</p>
            <button className='bg-text border-black mt-12 text-black border-2 py-4 px-8 font-bold rounded-full' onClick={() => goToWhatsapp()}>
              Solicitar agora
            </button>
          </AppPrice>
          <AppPrice
            bgColor='background'
            txColor='text'
            title='Pessoa Jurídica'
            price={180}
            customClass='rounded-md'
          >
            <p className='text-text'>e-CNPJ A1 (1 ano)</p>
            <p className='text-text'>e-CNPJ A3 Token (1 a 3 anos)</p>
            <p className='text-text'>e-CNPJ A3 Cartão (1 a 3 anos)</p>
            <p className='text-text font-bold mt-4'>Documentos necessários</p>
            <p className='text-text'>
              Contrato social, requerimento de empresário ou ata e estatuto
              atualizado
            </p>
            <p className='text-text'>Documento com foto</p>
            <p className='text-text'>Comprovante de endereço</p>
            <p className='text-text'>E-mail e telefone para contato</p>
            <button className='bg-secondary mt-12 text-black py-4 px-8 font-bold rounded-full' onClick={() => goToWhatsapp()}>
              Solicitar agora
            </button>
          </AppPrice>
        </AppColumn>
      </AppSection>
      <AppSection bgColor='white'>
        <div className='text-center'>
          <h3 className='font-bold text-4xl sm:text-5xl'>
            Atendimento presencial
          </h3>
          <p className='mt-4'>
            Estamos localizados no escritório INT Organizações Contábeis, em Altônia/PR
          </p>
          <button className='bg-background mt-12 text-text py-4 px-8 font-bold rounded-full' onClick={() => goToMaps()}>
            Abrir no Maps
          </button>
        </div>
      </AppSection>
      <Map icon={filterImage(data, 'marker')} />
      <AppSection bgColor='background'>
        <AppColumn>
          <div className='text-text'>
            <h3 className='text-3xl sm:text-4xl font-bold mb-8'>
              Ficou com dúvidas?
              <br />
              Entre em contato!
            </h3>
            <p className='mb-6'>
              Podemos exclarecer qualquer dúvida e te deixar bem informado de
              todo o processo, desde a escolha do certificado adequado para sua
              necessidade, agendamento presencial ou a distância, até a emissão
              do arquivo.
            </p>
            <div className='mb-1 flex flex-row items-center'>
              <Image
                fluid={filterImage(data, 'mail')}
                className='w-5'
              />
              <span className="ml-2">renovacert@gmail.com</span>
            </div>
            <div className='mb-1 flex flex-row items-center'>
              <Image
                fluid={filterImage(data, 'whatsapp')}
                className='w-5'
              />
              <span className="ml-2">(44) 99918-8711</span>
            </div>
            <div className='mb-1 flex flex-row items-center'>
              <Image
                fluid={filterImage(data, 'address')}
                className='w-5'
              />
              <span className="ml-2">Rua 12 de Dezembro, 242, Centro, CEP 87550-000 -
              Altônia/PR</span>
            </div>
          </div>
          <div className='text-text mt-8 sm:mt-0'>
            <h3 className='text-4xl font-bold mb-8'>Atenção!</h3>
            <ul className='list-disc px-4'>
              <li className='mb-2'>
                Para comunicação com o cliente, atualmente utilizamos o e-mail e
                WhatsApp.
              </li>
              <li className='mb-2'>
                Atendimento a distância requer do cliente um dispositivo com
                acesso a internet e câmera frontal.
              </li>
              <li className='mb-2'>
                Atendimento presencial e a distância requer do agente de
                registro o acesso a internet e disponibilidade do sistema da
                certificadora. Instabilidades podem acontecer durante o
                atendimento.
              </li>
              <li>
                Estamos desenvolvendo um serviço de agendamento para trazer a
                melhor experiência de atendimento ao usuário.
              </li>
            </ul>
          </div>
        </AppColumn>
      </AppSection>
      <AppSection bgColor='background'>
        <div className='flex flex-row justify-between'>
          <span className='text-text self-center'>Copyright @ 2022</span>
          <div className='flex flex-column'>
            <Image
              fluid={filterImage(data, 'facebook')}
              className='w-12 md:w-10'
            />
            <Image
              fluid={filterImage(data, 'instagram')}
              className='w-12 md:w-10'
            />
          </div>
        </div>
      </AppSection>
    </main>
  );
};

export default IndexPage;
