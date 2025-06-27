'use client';

import { PlayCircle } from "lucide-react";
import { DelayedButton } from "./DelayedButton";
import { AlertBanner } from "./AlertBanner";
import { useEffect, useState } from "react";

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
  }, []);

  return (
    <>
      <div className="w-full bg-primary flex items-center px-4 py-2 text-primary-foreground text-sm font-semibold">
        <svg
          width="120"
          height="32"
          viewBox="0 0 120 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-primary-foreground"
        >
          <path
            d="M9.84533 13.92C9.84533 13.56 9.77333 13.2267 9.62933 12.92C9.49333 12.6133 9.30933 12.36 9.07733 12.16C8.84533 11.952 8.57333 11.792 8.26133 11.68C7.95733 11.56 7.62133 11.5 7.25333 11.5C6.832 11.5 6.46933 11.56 6.16533 11.68C5.86133 11.792 5.59733 11.952 5.37333 12.16C5.15733 12.36 4.98133 12.6133 4.84533 12.92C4.70933 13.2267 4.64133 13.56 4.64133 13.92V20.04H0.521333V13.76C0.521333 12.72 0.741333 11.8067 1.18133 11.02C1.62133 10.2253 2.24533 9.584 3.05333 9.096C3.86933 8.6 4.82133 8.272 5.90933 8.112L6.10133 8.08H6.58133V0.639999H9.84533V8.08H10.4213C11.5413 8.152 12.5173 8.44 13.3493 8.944C14.1893 9.44 14.8293 10.12 15.2693 10.984C15.7173 11.84 15.9413 12.784 15.9413 13.816V20.04H11.8213V13.92H9.84533Z"
            fill="currentColor"
          />
          <path
            d="M26.4448 14.136C26.1568 13.56 25.7808 13.064 25.3168 12.648C24.8608 12.224 24.3168 11.888 23.6848 11.64C23.0608 11.384 22.3648 11.256 21.5968 11.256C20.8288 11.256 20.1328 11.384 19.5088 11.64C18.8848 11.888 18.3488 12.224 17.8928 12.648C17.4368 13.064 17.0608 13.56 16.7728 14.136C16.4928 14.704 16.3528 15.32 16.3528 15.984C16.3528 16.648 16.4928 17.264 16.7728 17.832C17.0608 18.4 17.4368 18.888 17.8928 19.3C18.3488 19.712 18.8848 20.048 19.5088 20.304C20.1328 20.56 20.8288 20.688 21.5968 20.688C22.3648 20.688 23.0608 20.56 23.6848 20.304C24.3168 20.048 24.8608 19.712 25.3168 19.3C25.7808 18.888 26.1568 18.4 26.4448 17.832C26.7328 17.264 26.8768 16.648 26.8768 15.984C26.8768 15.32 26.7328 14.704 26.4448 14.136ZM20.2528 17.16C20.0848 16.896 20.0008 16.592 20.0008 16.248V15.72C20.0008 15.376 20.0848 15.072 20.2528 14.808C20.4288 14.544 20.6448 14.344 20.9008 14.208C21.1648 14.064 21.4608 14 21.7888 14C22.1168 14 22.4128 14.064 22.6768 14.208C22.9408 14.344 23.1568 14.544 23.3248 14.808C23.4928 15.072 23.5768 15.376 23.5768 15.72V16.248C23.5768 16.592 23.4928 16.896 23.3248 17.16C23.1568 17.416 22.9408 17.616 22.6768 17.76C22.4128 17.904 22.1168 17.976 21.7888 17.976C21.4608 17.976 21.1648 17.904 20.9008 17.76C20.6448 17.616 20.4288 17.416 20.2528 17.16Z"
            fill="currentColor"
          />
          <path
            d="M36.1687 20.04H32.4087V8.184H36.1687V20.04Z"
            fill="currentColor"
          />
          <text
            x="45"
            y="21"
            fontFamily="Inter, sans-serif"
            fontSize="18"
            fontWeight="500"
          >
            15 anos
          </text>
          <path
            d="M40.016 1.44C40.016 1.04 40.16 0.711999 40.448 0.455999C40.744 0.191999 41.096 0.0599991 41.504 0.0599991C41.92 0.0599991 42.272 0.191999 42.56 0.455999C42.848 0.711999 43 1.04 43 1.44C43 1.84 42.848 2.168 42.56 2.424C42.272 2.672 41.92 2.8 41.504 2.8C41.096 2.8 40.744 2.672 40.448 2.424C40.16 2.168 40.016 1.84 40.016 1.44Z"
            fill="currentColor"
          />
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
            <div className="w-full aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center text-muted-foreground text-sm cursor-pointer group relative overflow-hidden">
              <img src="https://placehold.co/800x450" alt="Video thumbnail" className="w-full h-full object-cover" data-ai-hint="pregnant woman healthy food" />
              <div className="absolute inset-0 bg-black/30"></div>
              <PlayCircle className="w-16 h-16 text-white/80 group-hover:text-white transition-colors z-10" />
              <div className="absolute bottom-4 left-4 z-10">
                <h3 className="text-white font-bold text-lg">Assista: Nutricionista explica método para gestação saudável</h3>
                <p className="text-white/90 text-sm">Método já ajudou milhares de gestantes a terem uma gravidez mais tranquila e segura.</p>
              </div>
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
                “Eu mal conseguia sair da cama. Tentei de tudo, mas nada parecia funcionar. Foi quando uma amiga me indicou o método e em menos de uma semana a diferença foi absurda. Recuperei minha energia e os enjoos desapareceram.”
              </p>
            </blockquote>
          </article>
        </main>
      </div>
    </>
  );
}
