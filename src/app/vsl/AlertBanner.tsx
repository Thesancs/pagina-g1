
export function AlertBanner() {
  const texto = "ATENÇÃO: Este vídeo sairá do ar SEXTA-FEIRA, 27 DE JUNHO DE 2025";

  return (
    <div
      id="alert-banner"
      className="w-full bg-primary text-center py-2 px-2 font-bold uppercase text-primary-foreground text-xs sm:text-sm"
    >
      {texto}
    </div>
  );
}
