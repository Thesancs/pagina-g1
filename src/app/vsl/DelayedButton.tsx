'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

// 23 minutes in milliseconds
const DELAY_IN_MS = 23 * 60 * 1000;

export function DelayedButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, DELAY_IN_MS);

    // Cleanup the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return null;
  }

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
