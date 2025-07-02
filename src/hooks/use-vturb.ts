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

    // Carregar o script principal do Vturb SmartPlayer
    const mainScript = document.createElement("script");
    mainScript.src = `https://scripts.converteai.net/9a883f2a-807c-491c-b02d-85d1dd76948e/players/${playerId}/v4/player.js`;
    mainScript.async = true;
    document.head.appendChild(mainScript);

    // Carregar o script da biblioteca SmartPlayer
    const smartPlayerScript = document.createElement("script");
    smartPlayerScript.src = "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js";
    smartPlayerScript.async = true;
    document.head.appendChild(smartPlayerScript);

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
      function initializeVturb() {
        console.log("Inicializando Vturb...");
        
        // Aguarda o carregamento completo dos scripts
        if (typeof window.SmartPlayer === 'undefined') {
          console.log("SmartPlayer ainda não carregou, aguardando...");
          setTimeout(initializeVturb, 500);
          return;
        }

        // Configura o player
        const player = document.querySelector("vturb-smartplayer");
        if (player) {
          console.log("Player encontrado, configurando...");
          
          // Aguarda o player estar pronto
          const checkPlayerReady = () => {
            if (player.isReady) {
              console.log("Player pronto! Configurando botão...");
              
              // Configura o botão para aparecer após o delay especificado
              player.displayHiddenElements(${delaySeconds}, ["${buttonSelector}"], {
                persist: true,
                onComplete: function() {
                  console.log("Botão do Vturb revelado!");
                }
              });
            } else {
              console.log("Player ainda não está pronto, aguardando...");
              setTimeout(checkPlayerReady, 1000);
            }
          };
          
          checkPlayerReady();
        } else {
          console.log("Player não encontrado, tentando novamente...");
          setTimeout(initializeVturb, 1000);
        }
      }

      // Inicia a configuração após um delay para garantir carregamento
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