import { useState, useEffect } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${isDarkMode ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Botão de Tema */}
      <button 
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed top-4 right-4 z-50 p-3 rounded-full shadow-lg transition-colors bg-blue-600 text-white hover:bg-blue-700"
      >
        {isDarkMode ? '☀️ Claro' : '🌙 Escuro'}
      </button>

      
      <div className="relative w-full h-screen flex flex-col md:flex-row overflow-hidden">
        
       
        <div className={`flex-1 flex flex-col justify-center items-center p-8 transition-colors ${isDarkMode ? 'bg-slate-800' : 'bg-white'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter">front-end</h1>
          <h2 className="text-2xl md:text-3xl text-blue-500 font-semibold mb-6">/ criativo</h2>
          <p className="max-w-md text-center text-lg md:text-xl opacity-80">
            Desenvolvimento de interfaces modernas, focadas na experiência do utilizador (UX/UI) e inovação.
          </p>
        </div>

      
        <div className={`flex-1 flex flex-col justify-center items-center p-8 transition-colors ${isDarkMode ? 'bg-slate-900' : 'bg-slate-100'}`}>
          <h1 className="text-5xl md:text-7xl font-mono font-bold mb-4 tracking-tighter">&lt;coder&gt;</h1>
          <h2 className="text-2xl md:text-3xl text-purple-500 font-semibold mb-6 font-mono">/ back-end</h2>
          <p className="max-w-md text-center text-lg md:text-xl opacity-80 font-mono">
            Arquitetura de software, estruturação lógica e resolução de problemas complexos com código eficiente.
          </p>
        </div>

    
        <img 
         src="./perfil.jpeg"
          alt="Bruno Belem" 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-8 border-blue-500 shadow-2xl z-20 transition-transform hover:scale-105"
        />
      </div>

  
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-10 text-center">Sobre Mim & Skills</h3>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg leading-relaxed opacity-90 mb-6">
              Sou estudante de Engenharia de Software na UCSal com forte interesse em inovação tecnológica. A minha jornada transita entre o design criativo de interfaces e a construção lógica de sistemas robustos. 
            </p>
            <p className="text-lg leading-relaxed opacity-90">
              Possuo facilidade de aprendizagem, boa comunicação e experiência prática corporativa (Hapvida), atuando com foco em organização, suporte e trabalho em equipe.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {['React.js', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Java', 'Python', 'PostgreSQL', 'Git & GitHub', 'UX/UI Design'].map(skill => (
              <span key={skill} className={`px-4 py-2 rounded-full font-medium ${isDarkMode ? 'bg-slate-800 text-blue-400' : 'bg-blue-100 text-blue-700'}`}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

  
      <section className={`py-20 px-6 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-100'}`}>
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-10 text-center">Os Meus Projetos no GitHub</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
          
            <div className={`p-6 rounded-xl shadow-lg transition-transform hover:-translate-y-2 ${isDarkMode ? 'bg-slate-700' : 'bg-white'}`}>
              <h4 className="text-xl font-bold mb-2">Sistema de Biblioteca</h4>
              <p className="opacity-80 mb-4 text-sm">Implementação utilizando Árvore Binária e Árvore Binária de Busca.</p>
              <span className="text-xs font-mono px-2 py-1 rounded bg-blue-500 text-white">Java</span>
            </div>

     
            <div className={`p-6 rounded-xl shadow-lg transition-transform hover:-translate-y-2 ${isDarkMode ? 'bg-slate-700' : 'bg-white'}`}>
              <h4 className="text-xl font-bold mb-2">Pokedex</h4>
              <p className="opacity-80 mb-4 text-sm">Aplicação interativa para listagem e pesquisa de Pokémon.</p>
              <span className="text-xs font-mono px-2 py-1 rounded bg-yellow-500 text-white">JavaScript</span>
            </div>

   
            <div className={`p-6 rounded-xl shadow-lg transition-transform hover:-translate-y-2 ${isDarkMode ? 'bg-slate-700' : 'bg-white'}`}>
              <h4 className="text-xl font-bold mb-2">Squad_4</h4>
              <p className="opacity-80 mb-4 text-sm">Repositório principal de desenvolvimento e atuação da minha squad.</p>
              <span className="text-xs font-mono px-2 py-1 rounded bg-blue-600 text-white">TypeScript</span>
            </div>

         
            <div className={`p-6 rounded-xl shadow-lg transition-transform hover:-translate-y-2 ${isDarkMode ? 'bg-slate-700' : 'bg-white'}`}>
              <h4 className="text-xl font-bold mb-2">Jogo Adivinhar Senha</h4>
              <p className="opacity-80 mb-4 text-sm">Lógica de programação e controle de fluxo estruturado em back-end.</p>
              <span className="text-xs font-mono px-2 py-1 rounded bg-orange-500 text-white">Java</span>
            </div>

            <div className={`p-6 rounded-xl shadow-lg transition-transform hover:-translate-y-2 ${isDarkMode ? 'bg-slate-700' : 'bg-white'}`}>
              <h4 className="text-xl font-bold mb-2">NetInspector</h4>
              <p className="opacity-80 mb-4 text-sm">Ferramenta CLI para diagnóstico de rede, resolução DNS e parser HTTP.</p>
              <span className="text-xs font-mono px-2 py-1 rounded bg-orange-500 text-white">Java</span>
            </div>

          
            <div className={`p-6 rounded-xl shadow-lg transition-transform hover:-translate-y-2 ${isDarkMode ? 'bg-slate-700' : 'bg-white'}`}>
              <h4 className="text-xl font-bold mb-2">App Interativo</h4>
              <p className="opacity-80 mb-4 text-sm">Web application personalizada com prompts interativos e feedback visual.</p>
              <span className="text-xs font-mono px-2 py-1 rounded bg-yellow-500 text-white">JS/HTML/CSS</span>
            </div>

          </div>
        </div>
      </section>


      <footer className="py-12 text-center">
        <h3 className="text-2xl font-bold mb-6">Vamos Conversar?</h3>
        <div className="flex justify-center gap-6 mb-8">
          <a href="https://github.com/brunobelemm" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors font-semibold">GitHub</a>
          <a href="https://www.linkedin.com/in/bruno-belem-6a0689220" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors font-semibold">LinkedIn</a>
          <a href="https://www.instagram.com/brunno_belem/" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors font-semibold">Instagram</a>
        </div>
        <a href="mailto:brunnu.belem@gmail.com" className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-colors shadow-lg">
          Baixar Currículo PDF
        </a>
      </footer>
    </div>
  );
}

export default App;