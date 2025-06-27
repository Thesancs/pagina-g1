import { Card, CardContent } from "@/components/ui/card";
import { CtaSection } from "./cta-section";

export default function VslPage() {
  console.log("[VSL Page] Rendering on server.");
  return (
    <>
      <div className="w-full bg-primary flex items-center px-4 py-2 text-primary-foreground text-sm font-semibold">
        <span className="uppercase tracking-wide">g1</span>
        <div className="h-4 w-px bg-primary-foreground mx-3" />
        <span className="uppercase tracking-wide font-light">Exclusivo</span>
      </div>
      <div className="py-8 md:py-12">
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-lg overflow-hidden">
            <CardContent className="p-6 md:p-12">
              <header className="border-b pb-6 mb-6">
                <h1 className="font-bold text-3xl md:text-5xl mb-4 text-foreground leading-tight">
                  Método desenvolvido por nutricionista brasileira tem ajudado gestantes a eliminarem enjoos e protegerem seus bebês sem medicação
                </h1>
                <h2 className="font-medium text-xl md:text-2xl text-muted-foreground">
                  Sistema de Sincronização Trimestral viralizou entre grávidas após mostrar resultados como prevenção da diabetes gestacional e melhora no desenvolvimento neurológico do bebê.
                </h2>
              </header>

              <article className="max-w-none text-foreground space-y-6 leading-relaxed text-base md:text-lg">
                <p className="text-sm text-muted-foreground mb-4">
                  <strong>Por: Redação Saúde e Bem-Estar</strong>
                  <br />
                  Atualizado 14h32, 24 de Julho de 2024
                </p>
                <p>
                  A gravidez é um período de grandes transformações e, para muitas mulheres, também de desconfortos como os enjoos matinais. Buscando uma solução natural e eficaz, um número crescente de gestantes tem adotado um novo método nutricional que promete não apenas aliviar os enjoos, mas também fortalecer a saúde do bebê.
                </p>
                <p>
                  O caso de <strong>Juliana Ribeiro</strong>, grávida de 22 semanas, é um exemplo do impacto positivo. Ela relata que os primeiros meses foram extremamente difíceis.
                </p>
                <blockquote className="border-l-4 border-primary pl-4 my-6 italic text-muted-foreground">
                  <p>
                    “Eu mal conseguia sair da cama. Tentei de tudo, mas nada parecia funcionar. Foi quando uma amiga me indicou o método e em menos de uma semana a diferença foi absurda. Recuperei minha energia e os enjoos desapareceram.”
                  </p>
                </blockquote>
                <p>
                  O programa, chamado Sistema de Sincronização Trimestral, foi criado por uma nutricionista brasileira com foco em alimentos específicos para cada fase da gestação, garantindo que mãe e bebê recebam os nutrientes essenciais para um desenvolvimento saudável e equilibrado.
                </p>
              </article>

              <section className="mt-10">
                <h3 className="text-center text-2xl font-semibold mt-10 mb-6 text-foreground">
                  VEJA COMO FUNCIONA
                </h3>
                <div className="w-full aspect-video bg-muted rounded-xl flex items-center justify-center text-muted-foreground text-sm animate-in fade-in duration-700">
                  <p>VSL aqui (embed YouTube ou player customizado)</p>
                </div>
              </section>

              <CtaSection />
            </CardContent>
          </Card>
        </main>
      </div>
    </>
  );
}
