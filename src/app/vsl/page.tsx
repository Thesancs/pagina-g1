import { PlayCircle } from "lucide-react";
import { CtaSection } from "./cta-section";

export default function VslPage() {
  return (
    <>
      <div className="w-full bg-primary flex items-center px-4 py-2 text-primary-foreground text-sm font-semibold">
        <span className="uppercase tracking-wide">g1</span>
        <div className="h-4 w-px bg-primary-foreground mx-3" />
        <span className="uppercase tracking-wide font-light">Exclusivo</span>
      </div>
      <div className="bg-background">
        <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <header className="border-b border-border/50 pb-6 mb-6">
            <h1 className="font-bold text-3xl md:text-4xl mb-4 text-foreground leading-tight">
              Método desenvolvido por nutricionista brasileira tem ajudado gestantes a eliminarem enjoos e protegerem seus bebês sem medicação
            </h1>
            <h2 className="font-normal text-lg md:text-xl text-muted-foreground">
              Sistema de Sincronização Trimestral viralizou entre grávidas após mostrar resultados como prevenção da diabetes gestacional e melhora no desenvolvimento neurológico do bebê.
            </h2>
          </header>

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

          <div className="border-y border-border/50 py-3 my-6">
            <p className="text-xs text-muted-foreground">
              <strong>Por Redação Saúde e Bem-Estar, g1</strong>
              <br />
              24/07/2024 14h32 ⋅ Atualizado há 2 horas
            </p>
          </div>

          <article className="prose prose-lg max-w-none text-foreground space-y-6 leading-relaxed">
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
            <p>
              O programa, chamado Sistema de Sincronização Trimestral, foi criado por uma nutricionista brasileira com foco em alimentos específicos para cada fase da gestação, garantindo que mãe e bebê recebam os nutrientes essenciais para um desenvolvimento saudável e equilibrado.
            </p>
          </article>

          <CtaSection />
        </main>
      </div>
    </>
  );
}
