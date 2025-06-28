'use client';

import React, { useEffect, useState } from "react";
import { DelayedButton } from "./DelayedButton";
import { AlertBanner } from "./AlertBanner";

export default function VslPage() {
  const [authorDate, setAuthorDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    const day = String(yesterday.getDate()).padStart(2, '0');
    const month = String(yesterday.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
    const year = yesterday.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;
    const fullText = `${formattedDate} 23h31 ⋅ Atualizado há 2 horas`;
    setAuthorDate(fullText);

    // Carregar o script do Vturb SmartPlayer
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/9a883f2a-807c-491c-b02d-85d1dd76948e/players/685f5b7652325b14a81dae76/v4/player.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup se necessário
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <div className="w-full bg-primary flex items-center px-4 py-2 text-primary-foreground text-sm font-semibold">
        <svg
            viewBox="0 0 38 28"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary-foreground"
          >
            <text
              x="0"
              y="22"
              fontFamily="Inter, sans-serif"
              fontSize="26"
              fontWeight="900"
              fill="currentColor"
            >
              g1
            </text>
          </svg>
        <div className="h-4 w-px bg-primary-foreground mx-3" />
        <span className="uppercase tracking-wide font-light">Exclusivo</span>
      </div>
      <AlertBanner />
      <div className="bg-background">
        <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <header className="border-b border-border/50 pb-6 mb-6">
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-4 text-foreground leading-tight">
              Método desenvolvido por nutricionista de Oxford tem ajudado gestantes a eliminarem enjoos e protegerem seus bebês sem medicação
            </h1>
            <h2 className="font-normal text-lg md:text-xl text-muted-foreground">
              Sistema de Sincronização Trimestral viralizou entre grávidas após mostrar resultados como prevenção da diabetes gestacional e melhora no desenvolvimento neurológico do bebê.
            </h2>
          </header>

          <div className="border-y border-border/50 py-3 my-6">
            <p className="text-xs text-muted-foreground">
              <strong>Por Redação Saúde e Bem-Estar, g1</strong>
              <br />
              {authorDate || <span className="opacity-0">.</span>}
            </p>
          </div>

          <section className="my-6">
            {/* Vturb SmartPlayer Embed */}
            <div className="w-full aspect-video rounded-lg overflow-hidden">
              <vturb-smartplayer 
                id="vid-685f5b7652325b14a81dae76" 
                style={{ display: 'block', margin: '0 auto', width: '100%' }}
              />
            </div>
          </section>

          <DelayedButton />

          <article className="prose md:prose-lg max-w-none text-foreground space-y-6 leading-relaxed">
            <p>
              A gravidez é um período de grandes transformações e, para muitas mulheres, também de desconfortos como os enjoos matinais. Buscando uma solução natural e eficaz, um número crescente de gestantes tem adotado um novo método nutricional que promete não apenas aliviar os enjoos, mas também fortalecer a saúde do bebê.
            </p>
            <p>
              O caso de <strong>Juliana Ribeiro</strong>, grávida de 22 semanas, é um exemplo do impacto positivo. Ela relata que os primeiros meses foram extremamente difíceis.
            </p>
            <blockquote className="border-l-4 border-primary/50 pl-4 my-6 italic text-muted-foreground">
              <p>
                "Eu mal conseguia sair da cama. Tentei de tudo, mas nada parecia funcionar. Foi quando uma amiga me indicou o método e em menos de uma semana a diferença foi absurda. Recuperei minha energia e os enjoos desapareceram."
              </p>
            </blockquote>
          </article>
        </main>
      </div>
    </>
  );
}
