import { eventList } from './event'
import { instituteList } from './institute'
import { mentoring } from './mentoring'
import { voluntary } from './voluntary'

export const sections = [
  {
    id: 1,
    title: 'Eventos & Palestras',
    data: eventList,
    labelButton: 'Quero Participar',
  },
  {
    id: 2,
    title: 'Doação',
    data: instituteList,
    labelButton: 'Quero Doar',
  },
  {
    id: 3,
    title: 'Mentoria',
    data: mentoring,
    labelButton: 'Quero Participar',
  },
  {
    id: 4,
    title: 'Voluntariado',
    data: voluntary,
    labelButton: 'Quero Participar',
  },
]
