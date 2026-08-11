import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaDownload, FaEnvelope, FaCode, FaServer, FaCloud, FaArrowRight } from 'react-icons/fa';

function Home() {
  const [projetoAtual, setProjetoAtual] = useState(0);
    // Nossa base de dados de Projetos em Destaque 
  const projetosDestaque = [
    { 
      title: 'API Financeira', 
      desc: 'Arquitetura de alta performance focada em escalabilidade e segurança de dados transacionais.', 
      tech: ['Java', 'Spring', 'AWS'], 
      icon: <FaServer />, 
      link: 'https://github.com/BrunoAlves20/api-financeira.git' 
    },
    // { 
    //   title: 'Motor de Análise de Dados', 
    //   desc: 'Microsserviço em ambiente Linux para manipulação e extração de grandes volumes de dados.', 
    //   tech: ['Python', 'Linux', 'SQL'], 
    //   icon: <FaCode />, 
    //   link: '#' 
    // },
    { 
      title: 'Infraestrutura Cloud AI', 
      desc: 'Integração de serviços AWS com modelos de Inteligência Artificial Generativa para automação.', 
      tech: ['AWS', 'GenAI', 'Python'], 
      icon: <FaCloud />, 
      link: '#' 
    },
    { 
      title: 'TalentBridge', 
      desc: 'Plataforma de Recrutamento Inteligente é uma aplicação moderna que conecta candidatos e recrutadores através de uma interface intuitiva e processamento inteligente de dados.', 
      tech: ['Next.js', 'Python', 'Mysql','Docker'], 
      icon: <FaCloud />, 
      link: 'https://github.com/BrunoAlves20/TalentBridge.git' 
    }
  ];
  // Efeito automático: muda o projeto a cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setProjetoAtual((prev) => (prev + 1) % projetosDestaque.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [projetosDestaque.length]);

  return (
    <div className="bg-darkBg min-h-screen text-offWhite selection:bg-brandOrange/30">
      
      {/* Menu de Navegação */}
      <nav className="fixed w-full bg-black/60 backdrop-blur-md border-b border-white/5 py-4 px-8 flex justify-between items-center z-50">
        <div className="text-brandOrange font-bold text-xl tracking-tighter italic">BRUNO.DEV</div>
        <ul className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-lightGray">
          <li><a href="#home" className="hover:text-brandOrange transition-colors">Home</a></li>
          <li><a href="#sobre" className="hover:text-brandOrange transition-colors">Sobre</a></li>
          <li><a href="#habilidades" className="hover:text-brandOrange transition-colors">Habilidades</a></li>
          <li><a href="#projetos" className="hover:text-brandOrange transition-colors">Projetos</a></li>
          <li><a href="#contato" className="hover:text-brandOrange transition-colors">Contato</a></li>
        </ul>
      </nav>

      {/* Seção Home - Focada no Visual Glassmorphism (Sem os botões sociais) */}
      <section id="home" className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        {/* Esferas de luz de fundo */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brandOrange/20 rounded-full filter blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brandRed/10 rounded-full filter blur-[120px]"></div>

        <div className="relative z-10 bg-darkGray/20 backdrop-blur-2xl border border-white/10 p-12 md:p-20 rounded-[40px] shadow-2xl max-w-4xl w-full">
          <span className="text-brandOrange font-semibold tracking-[0.3em] uppercase text-xs mb-6 block">
            Analista de Sistemas & Back-end
          </span>
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-none tracking-tighter">
            Olá, sou <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandOrange to-brandRed">
              Bruno Nogueira
            </span>
          </h1>
          <p className="text-lightGray text-lg md:text-xl max-w-xl mx-auto font-light leading-relaxed">
            Domino a lógica do Back-end para entregar sistemas que não apenas atendem requisitos, mas superam expectativas de performance e segurança.
          </p>
        </div>
      </section>

      {/* Seção Sobre - Minimalista com Botões de Ação */}
      <section id="sobre" className="py-32 px-4 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-12 flex items-center gap-4">
          <span className="w-12 h-[2px] bg-brandOrange"></span> Sobre Mim
        </h2>
        <p className="max-w-3xl text-center text-xl text-lightGray leading-relaxed font-light mb-12">
          Desenvolvedor Back-end Júnior com base em Python, Java e Cloud, integração de APIs e engenharia de dados.
          Busco elevar meu nível técnico através de metodologias ágeis e aprendizado contínuo.
          Além do código, mantenho foco constante na criação de sistemas eficientes e no aprimoramento do inglês para solucionar desafios complexos e conexões globais.
        </p>
        
        {/* Nova Área de Botões com Ícones e Download adaptada para o novo Design */}
                <div className="flex flex-wrap justify-center gap-6">
                  {/* Botão de Download com o Degradê Laranja/Vermelho */}
                  <a 
                    href="/curriculo-bruno.pdf" 
                    download="Curriculo_Bruno_Nogueira.pdf"
                    className="flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-brandOrange to-brandRed text-offWhite rounded-full hover:opacity-90 transition-opacity font-bold shadow-lg"
                  >
                    <FaDownload /> Baixar Currículo
                  </a>
                  
                  {/* Botões do LinkedIn e GitHub com efeito Glass/Borda suave */}
                  <a 
                    href="https://www.linkedin.com/in/brunonogueiraalves/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-8 py-3 border border-white/20 text-offWhite rounded-full hover:bg-white/10 hover:border-brandOrange transition-all font-bold"
                  >
                    <FaLinkedin className="text-xl text-brandOrange" /> LinkedIn
                  </a>
                  
                  <a 
                    href="https://github.com/BrunoAlves20" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-8 py-3 border border-white/20 text-offWhite rounded-full hover:bg-white/10 hover:border-brandOrange transition-all font-bold"
                  >
                    <FaGithub className="text-xl text-brandOrange" /> GitHub
                  </a>
                </div>
              </section>

      {/* Seção Habilidades */}
      <section id="habilidades" className="py-32 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16">Stack Tecnológica</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Java', 'Python', 'Linux', 'AWS', 'SQL', 'Generative AI', 'Cobol'].map((skill) => (
              <div key={skill} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-brandOrange to-brandRed rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative bg-darkBg border border-white/10 px-8 py-4 rounded-xl text-offWhite font-medium">
                  {skill}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Projetos (Carrossel) */}
      <section id="projetos" className="py-32 px-4 max-w-5xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-16 text-center flex items-center gap-4">
          <span className="w-12 h-[2px] bg-brandOrange"></span> Projetos em Destaque <span className="w-12 h-[2px] bg-brandOrange"></span>
        </h2>
        
        <div className="bg-white/5 border border-white/10 p-10 md:p-16 rounded-[40px] w-full min-h-[350px] flex flex-col justify-between relative overflow-hidden group">
          <div>
            <div className="text-brandOrange text-5xl mb-6">
              {projetosDestaque[projetoAtual].icon}
            </div>
            <h3 className="text-3xl font-bold mb-4 text-offWhite">
              {projetosDestaque[projetoAtual].title}
            </h3>
            <p className="text-lightGray text-lg mb-8 font-light max-w-2xl">
              {projetosDestaque[projetoAtual].desc}
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {projetosDestaque[projetoAtual].tech.map(t => (
                <span key={t} className="text-sm font-bold uppercase tracking-widest text-brandRed bg-brandRed/10 px-4 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <a href={projetosDestaque[projetoAtual].link} className="inline-flex items-center gap-3 text-offWhite font-bold hover:text-brandOrange transition-colors w-max">
            <FaGithub className="text-xl" /> EXPLORAR REPOSITÓRIO
          </a>
        </div>
        
        <div className="flex gap-3 mt-8">
          {projetosDestaque.map((_, index) => (
            <button 
              key={index} 
              onClick={() => setProjetoAtual(index)} 
              className={`h-2 rounded-full transition-all duration-500 ${index === projetoAtual ? 'w-10 bg-brandOrange' : 'w-2 bg-white/20'}`} 
            />
          ))}
        </div>

        <div className="mt-16">
          <Link to="/todos-os-projetos" className="flex items-center gap-3 px-10 py-4 border-2 border-brandOrange text-brandOrange rounded-full hover:bg-brandOrange hover:text-darkBg transition-all font-bold tracking-widest uppercase text-sm">
            Ver Todos os Projetos <FaArrowRight />
          </Link>
        </div>
      </section>

      {/* Seção Contato */}
      <section id="contato" className="py-32 px-4 flex flex-col items-center bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl w-full">
          
          <div className="bg-darkGray/20 border border-white/5 p-10 rounded-[30px]">
            <h3 className="text-2xl font-bold mb-8">Compartilhe sua visão</h3>
            <div className="space-y-4">
              <input type="text" placeholder="Nome" className="w-full bg-black/50 border border-white/10 p-4 rounded-xl focus:border-brandOrange outline-none text-offWhite" />
              <input type="email" placeholder="E-mail" className="w-full bg-black/50 border border-white/10 p-4 rounded-xl focus:border-brandOrange outline-none text-offWhite" />
              <textarea placeholder="Sobre o projeto" className="w-full bg-black/50 border border-white/10 p-4 rounded-xl h-32 focus:border-brandOrange outline-none text-offWhite"></textarea>
              <button className="w-full bg-gradient-to-r from-brandOrange to-brandRed py-4 rounded-xl font-bold uppercase tracking-widest">Enviar Mensagem</button>
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-center p-10 border border-white/5 rounded-[30px] bg-darkGray/10">
            <h3 className="text-xl font-bold mb-8">Contato Rápido</h3>
            <div className="bg-white p-4 rounded-2xl mb-8">
              <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=mailto:seuemail@gmail.com" alt="QR" />
            </div>
            <button 
              onClick={() => {navigator.clipboard.writeText('seuemail@gmail.com'); alert('Copiado!')}} 
              className="px-8 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all font-medium"
            >
              nogueirabruno459@gmail.com
            </button>
          </div>

        </div>
      </section>

      {/* Rodapé Atualizado com Redes Sociais */}
      <footer className="py-8 border-t border-white/5 flex flex-col md:flex-row justify-center items-center gap-4 text-midGray text-xs tracking-widest uppercase">
        
        <div className="flex items-center gap-3">
          <span>© 2026 Bruno Nogueira</span>
          {/* Links com os Ícones */}
          <a 
            href="https://www.linkedin.com/in/brunonogueiraalves/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-lg hover:text-brandOrange transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://github.com/BrunoAlves20" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-lg hover:text-brandOrange transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>

        <span className="hidden md:inline text-white/20">|</span>
        
        <span>Evolução e Inovação</span>
      </footer>
    </div>
  );
}

export default Home;