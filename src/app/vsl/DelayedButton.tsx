'use client';

import { Button } from '@/components/ui/button';

export function DelayedButton() {
  return (
    <div className="text-center my-8 animate-pulse">
      <Button
        size="lg"
        className="h-auto w-full md:w-auto py-4 px-6 text-base md:text-xl font-bold shadow-lg"
      >
        QUERO GARANTIR MEU DESCONTO
      </Button>
    </div>
  );
}
