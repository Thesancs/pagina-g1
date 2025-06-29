import React, { useState } from "react";

interface CommentProps {
  name: string;
  avatar: string;
  content: string;
  likes: number;
  replies: number;
  time: string;
  reactions?: { type: string; count: number }[];
}

const Comment: React.FC<CommentProps> = ({ name, avatar, content, likes, replies, time, reactions }) => {
  return (
    <div className="flex space-x-3 py-4 border-b border-gray-100 last:border-b-0">
      <div className="flex-shrink-0">
        <img 
          src={avatar} 
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">
        <div className="bg-gray-50 rounded-2xl px-4 py-3">
          <div className="font-semibold text-sm text-gray-900 mb-1">
            {name}
          </div>
          <div className="text-sm text-gray-800 leading-relaxed">
            {content}
          </div>
        </div>
        <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
          <button className="hover:text-blue-600 font-medium">Curtir</button>
          <button className="hover:text-blue-600 font-medium">Responder</button>
          <span>{time}</span>
        </div>
        <div className="flex items-center space-x-4 mt-1 text-xs text-gray-500">
          {reactions && reactions.length > 0 && (
            <div className="flex items-center space-x-1">
              {reactions.map((reaction, index) => (
                <span key={index} className="flex items-center space-x-1">
                  <span>{reaction.type}</span>
                  <span>{reaction.count}</span>
                </span>
              ))}
            </div>
          )}
          <span>👍 {likes}</span>
          <span>💬 {replies}</span>
        </div>
      </div>
    </div>
  );
};

const ReactionButton: React.FC<{ emoji: string; label: string; onClick: () => void }> = ({ emoji, label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center space-x-1 px-2 py-1 rounded-full hover:bg-gray-100 transition-colors duration-200 text-xs"
    >
      <span className="text-sm">{emoji}</span>
      <span className="text-gray-600 font-medium">{label}</span>
    </button>
  );
};

export const Comments: React.FC = () => {
  const [showAllComments, setShowAllComments] = useState(false);

  const comments = [
    {
      name: "Amanda Torres",
      avatar: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=80&h=80&fit=crop&crop=face",
      content: "Estou no segundo trimestre e sofria com enjoos absurdos, a ponto de não conseguir trabalhar direito. Comecei o sistema da Dra. Helena há 11 dias e é inacreditável como meu corpo respondeu. Meu obstetra ficou chocado com meus novos exames!",
      likes: 143,
      replies: 19,
      time: "1 hora atrás",
      reactions: [{ type: "❤️", count: 12 }, { type: "😮", count: 3 }]
    },
    {
      name: "Juliana Ribeiro",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
      content: "Meu ganho de peso estava fora de controle (8kg em 2 meses!) e eu estava quase sendo diagnosticada com diabetes gestacional. Esse protocolo nutricional salvou minha gestação. Hoje estou estabilizada e sem precisar cortar tudo como antes. Super indico!",
      likes: 97,
      replies: 12,
      time: "2 horas atrás",
      reactions: [{ type: "👍", count: 8 }]
    },
    {
      name: "Dra. Paula Santoro",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&crop=face",
      content: "Sou nutricionista e acompanho gestantes há 7 anos. O conceito de nutrição sincronizada por trimestre é o mais avançado que já vi nos últimos tempos. Finalmente algo que respeita a fisiologia da gestante. Já recomendei para minhas pacientes!",
      likes: 212,
      replies: 34,
      time: "3 horas atrás",
      reactions: [{ type: "❤️", count: 18 }, { type: "👍", count: 5 }]
    },
    {
      name: "Fernanda Lima",
      avatar: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=80&h=80&fit=crop&crop=face",
      content: "Estou no terceiro trimestre e achava que era tarde demais pra mudar algo. Que nada! Em 5 dias os inchaços melhoraram muito e até meu sono voltou ao normal. Queria ter descoberto isso antes 😭.",
      likes: 75,
      replies: 9,
      time: "1 hora atrás",
      reactions: [{ type: "❤️", count: 6 }]
    },
    {
      name: "Camila Dias",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&crop=face",
      content: "Minha irmã é médica obstetra e ficou impressionada com a proposta do programa. Disse que é isso que deveríamos aprender na faculdade. Ela mesma começou a aplicar algumas orientações em pacientes com pré-eclâmpsia leve e já viu diferença!",
      likes: 183,
      replies: 21,
      time: "4 horas atrás",
      reactions: [{ type: "😮", count: 7 }, { type: "👍", count: 4 }]
    },
    {
      name: "Mariana Costa",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      content: "Sofria com azia terrível desde o primeiro trimestre. Médicos só passavam antiácidos que não resolviam. Com o protocolo da Dra. Helena, em 3 dias a azia sumiu completamente. Agora consigo dormir sem problemas!",
      likes: 156,
      replies: 28,
      time: "30 minutos atrás",
      reactions: [{ type: "❤️", count: 15 }, { type: "👍", count: 3 }]
    },
    {
      name: "Dra. Ana Beatriz",
      avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=80&h=80&fit=crop&crop=face",
      content: "Como obstetra, sempre busco métodos baseados em evidências. O Sistema de Sincronização Trimestral tem fundamentação científica sólida. Já implementei em meu consultório e os resultados são consistentes. Recomendo!",
      likes: 267,
      replies: 45,
      time: "5 horas atrás",
      reactions: [{ type: "👍", count: 22 }, { type: "❤️", count: 8 }]
    },
    {
      name: "Letícia Oliveira",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face",
      content: "Tinha anemia gestacional e estava sempre cansada. O programa mudou minha alimentação e em 2 semanas meus níveis de ferro normalizaram. Meu bebê também está se desenvolvendo perfeitamente!",
      likes: 134,
      replies: 16,
      time: "2 horas atrás",
      reactions: [{ type: "❤️", count: 11 }]
    },
    {
      name: "Roberta Silva",
      avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=80&h=80&fit=crop&crop=face",
      content: "Primeira gravidez e estava perdida com tanta informação contraditória. O programa da Dra. Helena é claro, objetivo e funciona! Meus exames estão perfeitos e me sinto muito mais confiante.",
      likes: 89,
      replies: 11,
      time: "1 hora atrás",
      reactions: [{ type: "👍", count: 7 }]
    },
    {
      name: "Dr. Carlos Mendes",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
      content: "Sou ginecologista e obstetra há 15 anos. O conceito de nutrição sincronizada por trimestre é revolucionário. Já recomendei para várias pacientes com complicações gestacionais e os resultados são impressionantes.",
      likes: 198,
      replies: 32,
      time: "6 horas atrás",
      reactions: [{ type: "👍", count: 16 }, { type: "😮", count: 4 }]
    },
    {
      name: "Patrícia Santos",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=80&h=80&fit=crop&crop=face",
      content: "Comecei o programa há 3 semanas e já perdi 2kg! Meu médico ficou impressionado com a melhora nos exames. A Dra. Helena realmente entende do assunto. Recomendo para todas as gestantes!",
      likes: 167,
      replies: 23,
      time: "2 dias atrás",
      reactions: [{ type: "❤️", count: 14 }, { type: "👍", count: 5 }]
    },
    {
      name: "Dra. Renata Almeida",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&crop=face",
      content: "Como endocrinologista especializada em gestação, posso confirmar que o método da Dra. Helena é cientificamente fundamentado. A sincronização nutricional por trimestre faz total sentido fisiológico.",
      likes: 234,
      replies: 41,
      time: "3 dias atrás",
      reactions: [{ type: "👍", count: 19 }, { type: "❤️", count: 6 }]
    },
    {
      name: "Gabriela Ferreira",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&crop=face",
      content: "Tinha pressão alta na gravidez e estava tomando remédios. Com a mudança na alimentação sugerida pelo programa, consegui reduzir a medicação pela metade! Meu obstetra aprovou 100%.",
      likes: 145,
      replies: 18,
      time: "4 dias atrás",
      reactions: [{ type: "❤️", count: 12 }, { type: "😮", count: 2 }]
    },
    {
      name: "Dr. Marcos Oliveira",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
      content: "Sou pediatra e vejo a diferença no desenvolvimento dos bebês cujas mães seguiram o protocolo da Dra. Helena. Bebês mais saudáveis, com melhor peso e desenvolvimento neurológico superior.",
      likes: 189,
      replies: 27,
      time: "5 dias atrás",
      reactions: [{ type: "👍", count: 15 }, { type: "❤️", count: 4 }]
    },
    {
      name: "Carolina Mendes",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face",
      content: "Gravidez de gêmeos e estava com muito medo das complicações. O programa me deu segurança e controle. Meus bebês nasceram com peso ideal e eu me recuperei super rápido!",
      likes: 276,
      replies: 38,
      time: "1 semana atrás",
      reactions: [{ type: "❤️", count: 25 }, { type: "😮", count: 8 }, { type: "👍", count: 6 }]
    }
  ];

  const displayedComments = showAllComments ? comments : comments.slice(0, 5);

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
          <span className="text-blue-600 text-sm font-semibold">💬</span>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Comentários</h4>
          <p className="text-xs text-gray-500">295 comentários</p>
        </div>
      </div>
      
      <div className="space-y-1">
        {displayedComments.map((comment, index) => (
          <Comment
            key={index}
            name={comment.name}
            avatar={comment.avatar}
            content={comment.content}
            likes={comment.likes}
            replies={comment.replies}
            time={comment.time}
            reactions={comment.reactions}
          />
        ))}
      </div>

      {!showAllComments && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <button
            onClick={() => setShowAllComments(true)}
            className="w-full py-3 px-4 bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium rounded-lg transition-colors duration-200 flex items-center justify-center"
          >
            Ver mais comentários
          </button>
        </div>
      )}

      {/* Seção de reações do Facebook */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-1">
            <div className="flex -space-x-1">
              <span className="text-xs">👍</span>
              <span className="text-xs">❤️</span>
              <span className="text-xs">😮</span>
            </div>
            <span className="text-xs text-gray-600 ml-2">143</span>
          </div>
          <span className="text-xs text-gray-500">143 comentários · 12 compartilhamentos</span>
        </div>
        
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <ReactionButton emoji="👍" label="Curtir" onClick={() => {}} />
          <ReactionButton emoji="❤️" label="Amei" onClick={() => {}} />
          <ReactionButton emoji="😮" label="Uau" onClick={() => {}} />
          <button className="flex items-center space-x-1 px-2 py-1 rounded-full hover:bg-gray-100 transition-colors duration-200 text-xs">
            <span className="text-gray-600">💬</span>
            <span className="text-gray-600 font-medium">Comentar</span>
          </button>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-3">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
            alt="Seu perfil"
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="flex-1">
            <input
              type="text"
              placeholder="Escreva um comentário..."
              className="w-full px-4 py-2 bg-gray-50 rounded-full text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
}; 