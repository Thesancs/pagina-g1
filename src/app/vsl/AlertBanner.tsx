
'use client';

import { useEffect, useState } from 'react';

export function AlertBanner() {
  const [texto, setTexto] = useState("");

  useEffect(() => {
    // Obter a data atual
    const hoje = new Date();
    
    // Usar a data atual sem adicionar dias extras
    const dataExpiracao = new Date(hoje);
    dataExpiracao.setDate(hoje.getDate()); // Sem adicionar dias extras
    
    // Obter o dia da semana em português
    const diasSemana = [
      "DOMINGO", "SEGUNDA-FEIRA", "TERÇA-FEIRA", 
      "QUARTA-FEIRA", "QUINTA-FEIRA", "SEXTA-FEIRA", "SÁBADO"
    ];
    const diaSemana = diasSemana[dataExpiracao.getDay()];
    
    // Obter o dia do mês
    const dia = dataExpiracao.getDate();
    
    // Obter o mês em português
    const meses = [
      "JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO",
      "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"
    ];
    const mes = meses[dataExpiracao.getMonth()];
    
    // Obter o ano
    const ano = dataExpiracao.getFullYear();
    
    // Formatar o texto completo com 23:59
    const textoFormatado = `ATENÇÃO: Este vídeo sairá do ar às 23:59 de ${diaSemana}, ${dia} DE ${mes} DE ${ano}`;
    
    setTexto(textoFormatado);
  }, []); // Executa apenas uma vez na montagem do componente

  return (
    <div
      id="alert-banner"
      className="w-full bg-red-700 text-center py-2 px-2 font-bold uppercase text-primary-foreground text-xs sm:text-sm"
    >
      {texto}
    </div>
  );
}
