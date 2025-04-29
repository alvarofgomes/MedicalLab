import { Ticket } from '../context/TickectsTypes';

export type RootStackParamList = {
  Welcome: undefined;
  SelectProfile: undefined;
  Dashboard: undefined;
  AttendantPanel: undefined;
  EmitTicket: undefined;
  ClientShowTicket: { ticket: Ticket };
};
