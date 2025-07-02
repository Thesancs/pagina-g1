import { useEffect, useRef } from 'react';

interface VturbConfig {
  playerId: string;
  delaySeconds?: number;
  buttonSelector?: string;
}

export const useVturb = (config: VturbConfig) => {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;

    const {
      playerId,
      delaySeconds = 10,
      buttonSelector = '.esconder'
    } = config;

    // Script de otimização de performance
    const performanceScript = document.createElement("script");
    performanceScript.innerHTML = `!function(i,n){i._plt=i._plt||(n&&n.timeOrigin?n.timeOrigin+n.now():Date.now())}(window,performance);`;
    document.head.appendChild(performanceScript);

    // Carregar o script da biblioteca SmartPlayer primeiro
    const smartPlayerScript = document.createElement("script");
    smartPlayerScript.src = "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js";
    smartPlayerScript.async = false; // Carrega de forma síncrona para garantir ordem
    document.head.appendChild(smartPlayerScript);

    // Carregar o script principal do Vturb SmartPlayer após a biblioteca
    const mainScript = document.createElement("script");
    mainScript.src = `https://scripts.converteai.net/9a883f2a-807c-491c-b02d-85d1dd76948e/players/${playerId}/v4/player.js`;
    mainScript.async = false; // Carrega de forma síncrona para garantir ordem
    document.head.appendChild(mainScript);

    // Adicionar CSS para elementos ocultos
    const style = document.createElement("style");
    style.textContent = `
      .esconder {
        display: none;
      }
      .vturb-button-container {
        text-align: center;
        margin: 20px 0;
        padding: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0,0,0,0.1);
      }
    `;
    document.head.appendChild(style);

    // Script para configurar o Vturb e mostrar o botão
    const setupScript = document.createElement("script");
    setupScript.innerHTML = `
      let initializationAttempts = 0;
      const maxAttempts = 30; // Máximo de 30 tentativas (30 segundos)

      function initializeVturb() {
        console.log("Inicializando Vturb... (tentativa " + (initializationAttempts + 1) + ")");
        initializationAttempts++;
        
        if (initializationAttempts > maxAttempts) {
          console.error("Falha ao inicializar Vturb após " + maxAttempts + " tentativas");
          return;
        }

        // Verifica se o elemento vturb-smartplayer existe
        const player = document.querySelector("vturb-smartplayer");
        if (!player) {
          console.log("Elemento vturb-smartplayer não encontrado, aguardando...");
          setTimeout(initializeVturb, 1000);
          return;
        }

        console.log("Elemento vturb-smartplayer encontrado!");
        
        // Verifica se o player tem conteúdo ou se está carregado
        const hasContent = player.children.length > 0 || player.innerHTML.trim() !== '';
        const hasIframe = player.querySelector('iframe');
        
        if (!hasContent && !hasIframe) {
          console.log("Player ainda não tem conteúdo, aguardando...");
          setTimeout(initializeVturb, 1000);
          return;
        }

        console.log("Player com conteúdo detectado, configurando botão...");
        
        // Adiciona listeners para eventos do player
        player.addEventListener('load', function() {
          console.log("Evento 'load' detectado no player");
          configureButton();
        });
        
        player.addEventListener('ready', function() {
          console.log("Evento 'ready' detectado no player");
          configureButton();
        });
        
        // Função para configurar o botão
        function configureButton() {
          // Tenta usar o método nativo do Vturb primeiro
          if (typeof player.displayHiddenElements === 'function') {
            console.log("Usando método nativo displayHiddenElements...");
            player.displayHiddenElements(${delaySeconds}, ["${buttonSelector}"], {
              persist: true,
              onComplete: function() {
                console.log("Botão do Vturb revelado!");
              }
            });
          } else {
            console.log("Método nativo não disponível, usando abordagem alternativa...");
            // Abordagem alternativa: mostrar o elemento diretamente após o delay
            setTimeout(() => {
              const buttonElement = document.querySelector("${buttonSelector}");
              if (buttonElement) {
                buttonElement.style.display = 'block';
                console.log("Botão do Vturb revelado (método alternativo)!");
              } else {
                console.error("Elemento do botão não encontrado!");
              }
            }, ${delaySeconds * 1000});
          }
        }
        
        // Aguarda um pouco mais para garantir que o player está totalmente funcional
        setTimeout(configureButton, 3000);
      }

      // Inicia a configuração após um delay para garantir carregamento dos scripts
      setTimeout(initializeVturb, 3000);
    `;
    document.head.appendChild(setupScript);

    initialized.current = true;

    return () => {
      // Cleanup de todos os elementos adicionados
      [performanceScript, mainScript, smartPlayerScript, setupScript, style].forEach(element => {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      });
      initialized.current = false;
    };
  }, [config.playerId, config.delaySeconds, config.buttonSelector]);
}; 