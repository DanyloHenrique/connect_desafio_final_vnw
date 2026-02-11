import img3 from '@/assets/cards/events/carreira-primeiro-emprego.png'
import img1 from '@/assets/cards/events/empoderando-jovens-futuro.png'
import img2 from '@/assets/cards/events/tecnologia-que-transforma.png'

export const eventList = [
  {
    imgSrc: img1,
    imgAlt: 'Reunião de jovens estudando',
    title: 'Empoderando Jovens para o Futuro',
    description: {
      activity:
        'Palestra motivacional sobre liderança jovem e transformação social.',
      impact:
        'Inspirar adolescentes a se tornarem agentes de mudança em suas comunidades.',
    },
  },

  {
    imgSrc: img2,
    imgAlt: 'Jovens conversando e olhando um computador',
    title: 'Tecnologia que Transforma',
    description: {
      activity: 'Workshop de introdução à programação e inovação digital.',
      impact:
        'Preparar jovens para o mercado de trabalho através da tecnologia.',
    },
  },

  {
    imgSrc: img3,
    imgAlt: 'Jovens assistindo uma palestra',
    title: 'Carreira e Primeiro Emprego',
    description: {
      activity:
        'Palestra com profissionais de RH sobre como preparar currículo, entrevistas e postura no mercado.',
      impact: 'Ajudar jovens a conquistar oportunidades de trabalho.',
    },
  },
]
