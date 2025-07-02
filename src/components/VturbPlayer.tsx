'use client';

import React, { useEffect, useRef } from 'react';

interface VturbPlayerProps {
  playerId: string;
  delaySeconds?: number;
  buttonSelector?: string;
  className?: string;
}

export const VturbPlayer: React.FC<VturbPlayerProps> = ({
  playerId,
  delaySeconds = 10,
  buttonSelector = '.esconder',
  className = ''
}) => {
  const playerRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current || !playerRef.current) return;

    console.log('Inicializando VturbPlayer...');

    // Script de otimização de performance
    const performanceScript = document.createElement("script");
    performanceScript.innerHTML = `!function(i,n){i._plt=i._plt||(n&&n.timeOrigin?n.timeOrigin+n.now():Date.now())}(window,performance);`;
    document.head.appendChild(performanceScript);

    // Carregar scripts do Vturb
    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
        document.head.appendChild(script);
      });
    };

    const initializePlayer = async () => {
      try {
        // Carregar biblioteca SmartPlayer primeiro
        await loadScript("https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js");
        console.log('Biblioteca SmartPlayer carregada');

        // Carregar script do player específico
        await loadScript(`https://scripts.converteai.net/9a883f2a-807c-491c-b02d-85d1dd76948e/players/${playerId}/v4/player.js`);
        console.log('Script do player carregado');

        // Aguardar um pouco para garantir que tudo foi inicializado
        setTimeout(() => {
          const player = document.querySelector("vturb-smartplayer");
          if (player) {
            console.log('Player encontrado, configurando...');
            
            // Função para configurar o botão
            const configureButton = () => {
              const playerElement = player as any; // Type assertion para acessar métodos do Vturb
              if (typeof playerElement.displayHiddenElements === 'function') {
                console.log('Configurando botão com método nativo...');
                playerElement.displayHiddenElements(delaySeconds, [buttonSelector], {
                  persist: true,
                  onComplete: () => {
                    console.log('Botão do Vturb revelado!');
                  }
                });
              } else {
                console.log('Método nativo não disponível, usando fallback...');
                setTimeout(() => {
                  const buttonElement = document.querySelector(buttonSelector) as HTMLElement;
                  if (buttonElement) {
                    buttonElement.style.display = 'block';
                    console.log('Botão do Vturb revelado (fallback)!');
                  }
                }, delaySeconds * 1000);
              }
            };

            // Tentar configurar imediatamente
            configureButton();

            // Também configurar após alguns segundos como backup
            setTimeout(configureButton, 5000);
          } else {
            console.error('Player não encontrado após carregamento dos scripts');
          }
        }, 2000);

      } catch (error) {
        console.error('Erro ao carregar scripts do Vturb:', error);
      }
    };

    initializePlayer();
    initialized.current = true;

    return () => {
      // Cleanup
      if (performanceScript.parentNode) {
        performanceScript.parentNode.removeChild(performanceScript);
      }
    };
  }, [playerId, delaySeconds, buttonSelector]);

  return (
    <div className={`w-full aspect-video rounded-lg overflow-hidden ${className}`}>
      <vturb-smartplayer 
        id={`vid-${playerId}`}
        style={{ display: 'block', margin: '0 auto', width: '100%' }}
      />
    </div>
  );
}; 