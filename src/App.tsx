import { useState } from 'react'
import MoonComponent from './Moon'
import "./App.css"
import Header from './components/Header'
import { useScroll, useMotionValueEvent } from 'framer-motion';
import SnapPage from './components/SnapPage';
import { GithubLogo, LinkedinLogo, MouseScroll } from "@phosphor-icons/react"
import Letreiro from './components/Letreiro';

import SwiperProject from './components/SwiperProject';
import ProjectCard from './components/ProjectCard';
import ListBackend from './components/ListBackend';
import {motion} from "framer-motion"
import LucasCards from './LucasCards';

function App() {



  const [latestScroll, setLatestScroll] = useState(0);

  const [scrollProgress, setScrollProgress] = useState(0);


  const { scrollY, scrollYProgress } = useScroll();

  

  useMotionValueEvent(scrollY, "change", (latest) => {
    setLatestScroll(latest)
  })

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest)
    setScrollProgress(latest)
  })


  return (
    <>

      <div className='noise-overlay'></div>


      <div className='star-overlay animate-pulse  transition-all'
        style={{
          display: latestScroll > 200 && scrollProgress < 0.9  ? "none" : "inherit",
        }}
      ></div>


      <div className='transition-all duration-500 fixed moon'
        style={{ opacity: latestScroll > 200 && scrollProgress < 0.9 ? "0.3" : "1" }}
      >
        <div className=' fixed w-[50rem] h-[50rem] max-h-[65vh] max-w-[65vh]  flex moon transition-all duration-700'
          style={{
            right: latestScroll > 200 && scrollProgress < 0.9 ? "-10rem" : "-5rem",
            bottom: latestScroll > 200 && scrollProgress < 0.9 ? "-20rem" : "-10rem",
          }}

        >
          <MoonComponent />
        </div>

     
        <div className='w-[50rem] h-[50rem] max-h-[65vh] max-w-[65vh] fixed  glow rounded-full transition-all duration-700  '
          style={{
            right: latestScroll > 200 && scrollProgress < 0.9 ? "-10rem" : "-5rem",
            bottom: latestScroll > 200 && scrollProgress < 0.9 ? "-20rem" : "-10rem",
          }}
        ></div>
      </div>



      <Header />

      <SnapPage id="home" full={true}>
        <div className='flex flex-start flex-col sm:self-start md:self-center'>
          <h1 className='text-7xl md:text-9xl mt-16 md:mt-0'>
            <span className='font-light'>Oi!</span>
            <span className='font-thin'> Eu sou o<br/></span>
            <span className='font-medium'> Lucas</span>
          </h1>
       
        </div>



        <p className='absolute w-full mb-12 flex justify-center items-center gap-1 bottom-0 left-0 animate-bounce'>
          Role a tela pra baixo!

          <MouseScroll weight={"light"} size={32} />
        </p>
      </SnapPage>

      <SnapPage id="sobre">
          <LucasCards/>
        <p className='self-center text-lg max-w-[30rem] text-center font-light'>Sou desenvolvedor de software focado em criar <i>interfaces intuitivas</i>. Tenho conhecimento em <strong>React</strong> e <strong>desenvolvimento mobile</strong> para Android com <strong>Java</strong>. Participei de <i>projetos acadêmicos premiados</i> pela <strong>Microsoft</strong> e <strong>Magalu</strong>. Atualmente, estou me aprofundando em <strong>back-end</strong> com <i>Spring Boot</i>. Sou <strong>comunicativo e colaborativo</strong>, sempre buscando <i>soluções eficientes</i>.<br></br>
          <div className='flex w-full items-center mt-4 justify-center gap-4'>
            <a href="https://linkedin.com/in/lucasbarbosa0217" target="_blank" className='text-blue-400 underline text-xl flex justify-center items-center gap-1'><LinkedinLogo size={32} />Meu Linkedin</a>
            <a href="https://github.com/lucasbarbosa0217" target="_blank" className='text-blue-400 underline text-xl flex gap-1 items-center'> <GithubLogo size={32} />Meu Github</a>
          </div>
         


        </p>     
          <img src="./shootingstar.gif" className='absolute right-0 w-72 opacity-40'></img>
        <img src="./shootingstar.gif" className='absolute bottom-0 w-72 opacity-30'></img>


         </SnapPage>

      <SnapPage id="front" grid={false}>
        <Letreiro>MEUS PROJETOS FRONTEND</Letreiro>
          <SwiperProject>
            <ProjectCard
              projectName='Re;Aprender'
              projectDescription="E-commerce de livros didáticos. Projeto integrador do Bootcamp de Java e React da Generation Brazil"
              repoUrl="https://github.com/Re-Aprender/FrontEnd"
              tecnologias={{ React: true, Typescript: true, Css: true, Tailwind: true }}
              siteUrl='https://reaprenderlivros.netlify.app'
              imageUrl="/reaprender.webp"
            ></ProjectCard>

            <ProjectCard
              projectName='LuMusic'
              projectDescription="LuMusic é uma plataforma de streaming de músicas com foco no visual fofo e cores pastel"
              repoUrl="https://github.com/lucasbarbosa0217/Lumusic"
              tecnologias={{ React: true, Javascript: true, FramerMotion: true, Css: true, Tailwind: true }}
              siteUrl='https://lumusic.vercel.app/'
              imageUrl="/lulumusic.webp"
            ></ProjectCard>

          <ProjectCard
            projectName='Healthhub'
            projectDescription="LuMusic é uma plataforma de gerenciamento de prontuários médicos com base na FHIR da Microsft. Projeto foi premiado como segundo lugar na NEXT Fiap 2023 em parceria com a Microsoft."
            repoUrl="https://github.com/lucasbarbosa0217/health-hub"
            tecnologias={{ React: true, Javascript: true, FramerMotion: true, Css: true}}
            siteUrl='https://health-hub-rosy.vercel.app/'
            imageUrl="/healthhub.webp"
          ></ProjectCard>

          <ProjectCard
            projectName='Clocktask'
            projectDescription="É um planejador visual de tarefas diárias que usa manipulação de SVGs e salva os dados na IndexedDb"
            repoUrl="https://github.com/lucasbarbosa0217/ClockTask"
            tecnologias={{ React: true, Javascript: true, FramerMotion: true, Css: true }}
            siteUrl='https://clock-task-self.vercel.app/'
            imageUrl="/clocktask.webp"
          ></ProjectCard>
         

          <ProjectCard
            projectName='LuLucasBlog'
            projectDescription="LuLucasBlog é o meu blog pessoal feito com React. Blogs podems ser pesquisados e usuários Admin tem acesso para criação de postagens."
            repoUrl="https://github.com/lucasbarbosa0217/React-Blog-Pessoal"
            tecnologias={{ React: true, Typescript: true, Css: true, Tailwind: true }}
            siteUrl='https://lulucasblog.vercel.app/'
            imageUrl="/lulucasblog.webp"
          ></ProjectCard>
     
          <ProjectCard
            projectName='Pokédex Android'
            projectDescription="Projeto Android nativo feito com base na api Pokéapi. Pokemons podem ser salvos localmente usando o banco de dados  Android Room."
            repoUrl="https://github.com/lucasbarbosa0217/Pokedex"
            tecnologias={{ Java: true, Android: true, Gradle: true}}
            imageUrl="/pokedex.webp"
          ></ProjectCard>


          <ProjectCard
            projectName='Herbix'
            projectDescription="Projeto Android Kotlin. Conceito de um aplicativo que usa inteligência artificial para identificar pagras em plantas."
            repoUrl="https://github.com/lucasbarbosa0217/Herbix---Kotlin"
            tecnologias={{ Kotlin: true, Android: true, Gradle: true }}
            imageUrl="/herbix.webp"
          ></ProjectCard>
          <ProjectCard
            projectName='Y2K Chat'
            projectDescription="Prototipação no Figma de um chat inspirado no MSN e Windows Live Messenger"
            repoUrl="https://www.figma.com/community/file/1422726907446420885/y2k-chat"
            tecnologias={{ Figma: true}}
            imageUrl="/CHAT.webp"
          ></ProjectCard>

          <ProjectCard
            projectName='Gerador de Senha'
            projectDescription="Site simples de geração de senhas, estilizado com a biblioteca 7.css, inpirada no design aero do Windows 7"
            repoUrl="https://github.com/lucasbarbosa0217/gerador-senha"
            siteUrl='https://gerador-senha-theta.vercel.app/'
            tecnologias={{ Html: true, Css: true, Javascript: true }}
            imageUrl="/seven.webp"
          ></ProjectCard>

          <ProjectCard
            projectName='Acessibilidade 4 Devs'
            projectDescription="Site HTMl focado em acessbilidade e tags semânticas. Plataforma para desenvolvedores compatilharem dicas de desenvolvimento acessível. Projeto foi premiado como segundo lugar na NEXT Fiap 2022 em parceria com a Magalu."
            repoUrl="https://github.com/lucasbarbosa0217/Acessibilidade-For-Devs"
            siteUrl='http://acessibilidadefordevs.vercel.app/'
            tecnologias={{ Html: true, Css: true, Javascript: true }}
            imageUrl="/acessibilidade.webp"
          ></ProjectCard>

          <ProjectCard
            projectName='Traveller'
            projectDescription="Site HTMl de viagens feito durante o primeiro ano na graduação de Sistemas para Internet na FIAP. "
            repoUrl="https://github.com/lucasbarbosa0217/traveller-nuvens"
            siteUrl='http://traveller-nuvens.vercel.app/'
            tecnologias={{ Html: true, Css: true, Javascript: true }}
            imageUrl="/traveller.webp"
          ></ProjectCard>

          <ProjectCard
            projectName='Farmazil'
            projectDescription="Site feito durante o curso da  Generation, foi uma atividade avaliativa para a criação de um site em apenas 3 horas."
            repoUrl="https://github.com/lucasbarbosa0217/farmacia"
            siteUrl='https://farmacia-three.vercel.app/'
            tecnologias={{ React: true, Typescript: true, Css: true, Tailwind: true }}
            imageUrl="/farmazil.webp"
          ></ProjectCard>
          <ProjectCard
            projectName='Agenda'
            projectDescription="Site feito com Server Side Rendering com EJS e Express; Uma simples agenda telefônica estilizada com Bootstrap"
            repoUrl="https://github.com/lucasbarbosa0217/AGENDA-JSX-EXPRESS-NODE"
            siteUrl='https://agenda-rir4.onrender.com/'
            tecnologias={{ NodeJs: true, Javascript: true, Bootstrap: true, Mongo: true, Mongoose: true }}
            imageUrl="/agenda.webp"
          ></ProjectCard>
          <ProjectCard
            projectName='React Notes'
            projectDescription="Site feito durante a NLW Expert de React. Usei para aprender conceitos básicos do React com Typescript"
            repoUrl="https://github.com/lucasbarbosa0217/NLW-NOTES-REACT"
            siteUrl='https://nlw-notes-react-delta.vercel.app/'
            tecnologias={{ React: true, Typescript: true, Css: true, Tailwind: true }}
            imageUrl="/notes.webp"
          ></ProjectCard>

     

          </SwiperProject>

          
     

      </SnapPage>


      <SnapPage id="back" grid={false}>
        <div className=' grid grid-cols-1 md:grid-cols-2 w-full  items-centerflex-grow gap-8'>
        


          <div className='flex-col flex order-1 md:order-2 gap-8'>
            <h2 className='font-mono text-6xl md:text-7xl'>MEUS PROJETOS BACKEND
              <motion.span
                animate={{
                  opacity: [0, 0, 1, 1],
                  transition: {
                    duration: 1,
                    repeat: Infinity,
                    repeatDelay: 0,
                    ease: "linear",
                    times: [0, 0.5, 0.5, 1]
                  }
                }}
              >_</motion.span>


            </h2>

            <ListBackend />
          </div>

        </div>
        <img src="./2iiB.gif" className='absolute right-0 h-[90dvh] opacity-30 pointer-events-none z-0'></img>

      </SnapPage>




      


    </>

  )
}

export default App