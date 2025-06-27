"use client";

import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";

export function CtaSection() {
  return (
    <section className="my-12 bg-muted border rounded-lg p-6 sm:p-8 text-center">
      <h3 className="text-xl md:text-2xl font-bold text-foreground">
        Acesse o Método de Sincronização Trimestral
      </h3>
      <p className="text-muted-foreground mt-3">
        Tenha acesso imediato ao guia completo que já transformou a gestação de
        milhares de mulheres.
      </p>
      <div className="my-6 md:my-8">
        <span className="text-lg text-muted-foreground line-through">
          De R$197,00
        </span>
        <p className="text-3xl md:text-4xl font-extrabold text-foreground mt-1">
          Por apenas 12x de R$9,74
        </p>
        <span className="text-muted-foreground">ou R$97,00 à vista</span>
      </div>
      <Button
        className="w-full md:w-auto font-bold text-md md:text-lg py-3 px-6"
        size="lg"
        asChild
      >
        <a
          href="https://pay.hotmart.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          QUERO CONHECER O MÉTODO
        </a>
      </Button>
      <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
        <Lock className="w-4 h-4" />
        <span>Compra segura e 7 dias de garantia</span>
      </div>
    </section>
  );
}
