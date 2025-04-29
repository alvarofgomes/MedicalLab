// src/context/TickectsTypes.ts
export type TicketType = 'SP' | 'SE' | 'SG';

export interface Ticket {
  id: string;
  senha: string;
  type: TicketType;
  createdAt: string;
  calledAt?: string;
  attendedAt?: string;
}

export interface TicketContextProps {
  tickets: Ticket[];
  calledTickets: Ticket[];  // Adicionado
  currentTicket: Ticket | null;  // Adicionado
  callNextTicket: () => Ticket | null;
  emitTicket: (type: TicketType) => Ticket;
  finalizeTicket: (id: string) => void;
}
