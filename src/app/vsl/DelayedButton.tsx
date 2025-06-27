'use client';

import { Button } from '@/components/ui/button';

export function DelayedButton() {
  return (
    <div className="text-center my-8 animate-pulse">
      <Button
        size="lg"
        className="h-auto py-4 px-8 text-xl font-bold shadow-lg"
      >
        QUERO GARANTIR MINHA VAGA COM DESCONTO
      </Button>
    </div>
  );
}
