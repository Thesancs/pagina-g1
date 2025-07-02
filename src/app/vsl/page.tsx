'use client';

import React, { useEffect, useState } from "react";
import { AlertBanner } from "./AlertBanner";
import { Comments } from "./Comments";
import { Button } from "@/components/ui/button";

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

    // Script de otimização de performance
    const performanceScript = document.createElement("script");
    performanceScript.innerHTML = `!function(i,n){i._plt=i._plt||(n&&n.timeOrigin?n.timeOrigin+n.now():Date.now())}(window,performance);`;
    document.head.appendChild(performanceScript);

    // Carregar o script principal do Vturb SmartPlayer
    const mainScript = document.createElement("script");
    mainScript.src = "https://scripts.converteai.net/9a883f2a-807c-491c-b02d-85d1dd76948e/players/685f5b7652325b14a81dae76/v4/player.js";
    mainScript.async = true;
    document.head.appendChild(mainScript);

    // Carregar o script da biblioteca SmartPlayer
    const smartPlayerScript = document.createElement("script");
    smartPlayerScript.src = "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js";
    smartPlayerScript.async = true;
    document.head.appendChild(smartPlayerScript);

    // Adicionar CSS para elementos ocultos e animação de pulsar
    const style = document.createElement("style");
    style.textContent = `
      .esconder {
        display: none;
      }
      
      @keyframes pulsar {
        0% {
          transform: scale(1);
          box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
        }
        50% {
          transform: scale(1.05);
          box-shadow: 0 0 0 10px rgba(34, 197, 94, 0);
        }
        100% {
          transform: scale(1);
          box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
        }
      }
      
      .botao-pulsar {
        animation: pulsar 2s infinite;
      }
    `;
    document.head.appendChild(style);

    // Script para mostrar elementos ocultos com delay
    const delayScript = document.createElement("script");
    delayScript.innerHTML = `
      var delaySeconds = 600;
      var player = document.querySelector("vturb-smartplayer");
      player.addEventListener("player:ready", function() {
        player.displayHiddenElements(delaySeconds, [".esconder"], {
          persist: true
        });
      });
    `;
    document.head.appendChild(delayScript);

    return () => {
      // Cleanup de todos os elementos adicionados
      [performanceScript, mainScript, smartPlayerScript, delayScript, style].forEach(element => {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      });
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
              Método criado por médica brasileira com formação em Oxford reduz até 80% dos sintomas mais comuns da gravidez sem uso de medicamentos
            </h1>
            <h2 className="font-normal text-lg md:text-xl text-muted-foreground">
              Sistema de Sincronização Trimestral viraliza entre gestantes após demonstrar resultados clínicos como prevenção de diabetes gestacional, reversão de anemia e melhora no desenvolvimento fetal.
            </h2>
          </header>

          <div className="border-y border-border/50 py-3 my-6">
            <p className="text-xs text-muted-foreground">
              <strong>📍 Por Redação Saúde e Bem-Estar</strong>
              <br />
              Atualizado há 2 horas
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
            <p className="text-center text-sm text-muted-foreground mt-2">
              Assista à apresentação oficial do método que está revolucionando a nutrição gestacional e já ajudou milhares de gestantes a eliminar sintomas como enjoos, azia e inchaço sem medicamentos.
            </p>

            {/* Botão de Compra - Elemento oculto que será revelado */}
            <div className="esconder my-8 text-center">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 text-lg rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 botao-pulsar"
                onClick={() => {
                  window.open('https://www.ggcheckout.com/checkout/v2/0DjyWtCAcsh8jkJvkXUy', '_blank');
                }}
              >
                QUERO PROTEGER MEU BEBÊ AGORA
              </Button>
              <p className="text-sm text-muted-foreground mt-2">
                ⚡ Acesso imediato • Garantia de 30 dias • Suporte completo
              </p>
            </div>
          </section>

          <article className="prose md:prose-lg max-w-none text-foreground space-y-6 leading-relaxed">
            <p>
              Nas últimas semanas, um novo protocolo nutricional voltado exclusivamente para gestantes tem chamado atenção de médicos e mães em todo o país. Desenvolvido pela médica nutróloga <strong>Dra. Helena Martins</strong>, com formação complementar em nutrição perinatal pela Universidade de Oxford, o Sistema de Sincronização Trimestral promete transformar a forma como mulheres se alimentam durante a gravidez.
            </p>
            
            <blockquote className="border-l-4 border-primary/50 pl-4 my-6 italic text-muted-foreground">
              <p>
                "A maioria das complicações na gravidez está ligada à alimentação desajustada para o momento metabólico da mãe", explica Dra. Helena. "Quando sincronizamos nutrientes com as necessidades de cada trimestre, os sintomas simplesmente desaparecem."
              </p>
            </blockquote>

            <p>
              O protocolo já foi testado com mais de <strong>3.237 gestantes</strong> e ganhou notoriedade após ser divulgado em grupos de mães e profissionais de saúde. Segundo os dados divulgados, 47 das 50 gestantes acompanhadas relataram melhora significativa em menos de 15 dias.
            </p>

            <p>
              Além da melhora clínica, o método também se mostrou eficiente na prevenção de diabetes gestacional, no controle de ganho de peso e no desenvolvimento neurológico do bebê. Um estudo recente da <strong>Universidade Federal do Rio de Janeiro (UFRJ)</strong> também apontou que as necessidades nutricionais mudam a cada 4 a 6 semanas durante a gestação — o que reforça a lógica da alimentação trimestral.
            </p>

            <p>
              Atualmente, o protocolo está disponível em um programa digital chamado <strong>Nutrição Plena</strong>, que pode ser acessado por qualquer gestante, com suporte online e planos personalizados.
            </p>

            <p>
              O conteúdo inclui mapa metabólico gestacional, receitas anti-enjoo, estratégias para controle de peso e prevenção de complicações comuns. A criadora do programa garante: <strong>"em 72 horas é possível sentir a diferença"</strong>.
            </p>

            <p>
              📌 O acesso ao programa completo está disponível por tempo limitado [...].
            </p>

            <div className="border-t border-border/50 pt-6 mt-8">
              <h3 className="font-semibold text-lg mb-4 text-foreground">
                Após a publicação da reportagem, centenas de gestantes comentaram compartilhando suas próprias experiências com o método. Veja abaixo algumas histórias reais de transformação:
              </h3>
            </div>
            
            <Comments />
          </article>
        </main>
      </div>
    </>
  );
}
