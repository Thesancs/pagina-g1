
"use client";

import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";

export function CtaSection() {
  const handleCtaClick = () => {
    console.log("[VSL Page] CTA button clicked. Redirecting to checkout.");
  };

  return (
    <section className="my-12 max-w-2xl mx-auto bg-muted/50 border rounded-lg p-4 sm:p-8 text-center">
      <h3 className="text-2xl md:text-3xl font-bold text-foreground">
        OFERTA ESPECIAL POR TEMPO LIMITADO
      </h3>
      <p className="text-muted-foreground mt-4 text-lg">
        Tenha acesso imediato ao guia completo que já transformou a gestação de
        milhares de mulheres.
      </p>
      <div className="my-6 md:my-8">
        <span className="text-xl text-muted-foreground line-through">
          De R$197,00
        </span>
        <p className="text-4xl md:text-5xl font-extrabold text-foreground mt-2">
          Por apenas 12x de R$9,74
        </p>
        <span className="text-muted-foreground">ou R$97,00 à vista</span>
      </div>
      <Button
        className="w-full md:w-auto h-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg md:text-xl py-4 px-8 rounded-lg shadow-lg transition-transform duration-200 hover:scale-105"
        size="lg"
        asChild
      >
        <a
          href="https://pay.hotmart.com"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleCtaClick}
        >
          QUERO ACESSO IMEDIATO AO MÉTODO
        </a>
      </Button>
      <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
        <Lock className="w-4 h-4" />
        <span>Compra segura e 7 dias de garantia</span>
      </div>
    </section>
  );
}
