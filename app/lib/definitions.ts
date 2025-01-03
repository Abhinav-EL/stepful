// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.
export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  type: 'coach' | 'student';
};

export type Appointment = {
  id: string;
  coach_id: string;
  student_id: string;
  start_time: string;
  notes: string;
  rating: number;
};

export type AppointmentWithUser = Appointment & 
  { name: string; email: string; phone: string; };