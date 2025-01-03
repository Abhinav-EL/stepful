import { sql } from '@vercel/postgres';
import {
  Appointment,
  User,
  AppointmentWithUser,
} from './definitions';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function fetchUsers() {
  try {
    const data = await sql<User>`SELECT * FROM users ORDER BY type`;

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch users.');
  }
}

export async function fetchAppointments() {
  try {
    const data = await sql<Appointment>`SELECT * FROM appointments`;

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch appointments.');
  }
}

export async function fetchAppointmentsByUser(user: User) {
  try {
    const data = await sql<Appointment>`
      SELECT * FROM appointments WHERE coach_id = ${user.id} OR student_id = ${user.id}`;

      const appointments = data.rows.map((appointment) => ({
        ...appointment,
        start_time: new Date(appointment.start_time).toLocaleString(),
      }));
    return appointments;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch appointments by user.');
  }
}

export async function fetchUpcomingAppointmentsByUser(user: User) {
  try {
    const data = await sql<Appointment>`
      SELECT * FROM appointments WHERE (coach_id = ${user.id} OR student_id = ${user.id}) 
      AND start_time > NOW() ORDER BY start_time ASC`;
      
      const appointments = data.rows.map((appointment) => ({
        ...appointment,
        start_time: new Date(appointment.start_time).toLocaleString(),
      }));
    return appointments;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch upcoming appointments.');
  }
}

export async function fetchHydratedAppointmentsForCoach(user : User) {
  try {
    const data = await sql<AppointmentWithUser>`
      SELECT appointments.*, users.name, users.email, users.phone
      FROM appointments
      LEFT JOIN users ON users.id = appointments.student_id
      WHERE appointments.coach_id = ${user.id}`;

      const appointments = data.rows.map((appointment) => ({
        ...appointment,
        start_time: new Date(appointment.start_time).toLocaleString(),
      }));
    return appointments;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch upcoming appointments.');
  }
}

export async function fetchHydratedAppointmentsForStudent(user : User) {
  try {
    const data = await sql<AppointmentWithUser>`
      SELECT appointments.*, users.name, users.email, users.phone
      FROM appointments
      LEFT JOIN users ON users.id = appointments.coach_id
      WHERE appointments.student_id = ${user.id} OR appointments.student_id IS NULL`;

      const appointments = data.rows.map((appointment) => ({
        ...appointment,
        start_time: new Date(appointment.start_time).toLocaleString(),
      }));
    return appointments;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch upcoming appointments.');
  }
}

export async function bookAppointment(appointment_id: string, student_id: string) {
  "use server";
  await sql`UPDATE appointments SET student_id = ${student_id} WHERE id = ${appointment_id}`;
  revalidatePath('/dashboard');
  redirect('/dashboard');
}

export async function editAppointment(appointment_id: string, rating: string, notes: string) {
  await sql`UPDATE appointments SET rating = ${rating}, notes = ${notes} WHERE id = ${appointment_id}`;
  revalidatePath('/dashboard');
  redirect('/dashboard');
}