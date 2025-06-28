import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gravidez em Foco',
  description: 'Método nutricional para gestantes.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
        
        {/* Otimizações de carregamento do Vturb SmartPlayer */}
        <link rel="preload" href="https://scripts.converteai.net/9a883f2a-807c-491c-b02d-85d1dd76948e/players/685f5b7652325b14a81dae76/v4/player.js" as="script" />
        <link rel="preload" href="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js" as="script" />
        <link rel="preload" href="https://cdn.converteai.net/9a883f2a-807c-491c-b02d-85d1dd76948e/685f5b671360073ec9425485/main.m3u8" as="fetch" />
        <link rel="dns-prefetch" href="https://cdn.converteai.net" />
        <link rel="dns-prefetch" href="https://scripts.converteai.net" />
        <link rel="dns-prefetch" href="https://images.converteai.net" />
        <link rel="dns-prefetch" href="https://api.vturb.com.br" />
        
        {/* Script de otimização de performance */}
        <script dangerouslySetInnerHTML={{
          __html: `!function(i,n){i._plt=i._plt||(n&&n.timeOrigin?n.timeOrigin+n.now():Date.now())}(window,performance);`
        }} />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
