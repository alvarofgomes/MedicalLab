// src/context/TicketContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Alert } from 'react-native'; // Adicione esta importação
import { Ticket, TicketContextProps } from './TickectsTypes';

const TicketContext = createContext<TicketContextProps | undefined>(undefined);

interface TicketProviderProps {
  children: ReactNode;
}

export const TicketProvider: React.FC<TicketProviderProps> = ({ children }) => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [calledTickets, setCalledTickets] = useState<Ticket[]>([]);
  const [currentTicket, setCurrentTicket] = useState<Ticket | null>(null);

  const callNextTicket = (): Ticket | null => {
    if (tickets.length === 0) {
      Alert.alert('Aviso', 'Não há senhas na fila de espera');
      return null;
    }

    // Ordenar por prioridade (SP > SE > SG) e depois por tempo de criação
    const sortedTickets = [...tickets].sort((a, b) => {
      const priority = { 'SP': 1, 'SE': 2, 'SG': 3 };
      if (priority[a.type] !== priority[b.type]) {
        return priority[a.type] - priority[b.type];
      }
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    });

    const nextTicket = sortedTickets[0];

    // Atualizar estados
    setTickets(prev => prev.filter(t => t.id !== nextTicket.id));
    setCalledTickets(prev => [nextTicket, ...prev]);
    setCurrentTicket(nextTicket);

    return nextTicket;
  };

  const emitTicket = (type: 'SP' | 'SE' | 'SG'): Ticket => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const datePart = `${year}${month}${day}`;

    // Contar todas as senhas do mesmo tipo emitidas hoje (incluindo já chamadas)
    const sameTypeCount = [...tickets, ...calledTickets]
      .filter(t => t.type === type && t.createdAt.includes(datePart))
      .length;

    const newTicket: Ticket = {
      id: Math.random().toString(36).substr(2, 9),
      senha: `${datePart}-${type}${String(sameTypeCount + 1).padStart(2, '0')}`,
      type,
      createdAt: now.toISOString(),
    };

    setTickets(prev => [...prev, newTicket]);
    return newTicket;
  };

  const finalizeTicket = (id: string) => {
    setCurrentTicket(null);
  };

  return (
    <TicketContext.Provider value={{
      tickets,
      calledTickets,
      currentTicket,
      callNextTicket,
      emitTicket,
      finalizeTicket
    }}>
      {children}
    </TicketContext.Provider>
  );
};

export const useTicketContext = () => {
  const context = useContext(TicketContext);
  if (!context) {
    throw new Error('useTicketContext must be used within a TicketProvider');
  }
  return context;
};
