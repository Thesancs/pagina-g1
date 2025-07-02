# Configuração do Vturb SmartPlayer

## Visão Geral

O Vturb SmartPlayer está configurado para aparecer na página VSL (`/vsl`) com controle total sobre quando o botão de call-to-action aparece.

## Estrutura da Implementação

### 1. Hook Personalizado (`use-vturb.ts`)

O hook `useVturb` gerencia toda a inicialização e configuração do Vturb:

```typescript
useVturb({
  playerId: '685f5b7652325b14a81dae76',
  delaySeconds: 10,
  buttonSelector: '.esconder'
});
```

### 2. Posicionamento do Botão

O botão do Vturb está posicionado **logo abaixo** do texto:
> "Assista à apresentação oficial do método que está revolucionando a nutrição gestacional e já ajudou milhares de gestantes a eliminar sintomas como enjoos, azia e inchaço sem medicamentos."

### 3. Controle do Vturb

O botão é controlado 100% pelo Vturb através da função `displayHiddenElements()`:

- **Delay**: 10 segundos após o início do vídeo
- **Persistência**: O botão permanece visível após aparecer
- **Seletor**: `.esconder` - classe CSS que inicialmente oculta o elemento

## Como Modificar o Comportamento

### Alterar o Delay do Botão

```typescript
useVturb({
  playerId: '685f5b7652325b14a81dae76',
  delaySeconds: 15, // Alterar para 15 segundos
  buttonSelector: '.esconder'
});
```

### Alterar o Seletor do Botão

```typescript
useVturb({
  playerId: '685f5b7652325b14a81dae76',
  delaySeconds: 10,
  buttonSelector: '.meu-botao' // Novo seletor
});
```

### Múltiplos Botões

Para controlar múltiplos botões com delays diferentes:

```typescript
// No hook useVturb, modificar o script para:
player.displayHiddenElements(10, [".esconder", ".botao-secundario"], {
  persist: true,
  onComplete: function() {
    console.log("Botões do Vturb revelados!");
  }
});
```

## Configurações do Next.js

O `next.config.ts` inclui configurações de Content Security Policy para permitir scripts externos do Vturb:

```typescript
async headers() {
  return [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'Content-Security-Policy',
          value: "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://scripts.converteai.net https://*.converteai.net; object-src 'none';"
        }
      ]
    }
  ];
}
```

## Estrutura HTML

```html
<section className="my-6">
  {/* Player do Vturb */}
  <div className="w-full aspect-video rounded-lg overflow-hidden">
    <vturb-smartplayer 
      id="vid-685f5b7652325b14a81dae76" 
      style={{ display: 'block', margin: '0 auto', width: '100%' }}
    />
  </div>
  
  {/* Texto descritivo */}
  <p className="text-center text-sm text-muted-foreground mt-2">
    Assista à apresentação oficial do método...
  </p>
  
  {/* Área do botão (inicialmente oculta) */}
  <div className="esconder vturb-button-container">
    {/* O Vturb SmartPlayer irá inserir o botão aqui automaticamente */}
  </div>
</section>
```

## Estilos CSS

O botão tem estilos personalizados aplicados via CSS:

```css
.vturb-button-container {
  text-align: center;
  margin: 20px 0;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
}
```

## Debugging

Para debugar problemas com o Vturb, abra o console do navegador e procure por mensagens como:

- "Inicializando Vturb..."
- "Player encontrado, configurando..."
- "Player pronto! Configurando botão..."
- "Botão do Vturb revelado!"

## Troubleshooting

### Botão não aparece
1. Verifique se o `playerId` está correto
2. Confirme se os scripts do Vturb estão carregando (console)
3. Verifique se o seletor `.esconder` existe no DOM

### Scripts não carregam
1. Verifique a conexão com a internet
2. Confirme se os domínios `converteai.net` estão permitidos no CSP
3. Verifique se não há bloqueadores de anúncios ativos

### Botão aparece muito cedo/tarde
1. Ajuste o `delaySeconds` no hook `useVturb`
2. Verifique se o vídeo está carregando corretamente 