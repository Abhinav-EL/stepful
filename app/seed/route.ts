// import bcrypt from 'bcrypt';
// import { db } from '@vercel/postgres';
// import { users, appointments } from '../lib/placeholder-data';

// const client = await db.connect();

// async function seedUsers() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS users (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       name VARCHAR(255) NOT NULL,
//       email VARCHAR(255) NOT NULL UNIQUE,
//       phone VARCHAR(255) NOT NULL,
//       type VARCHAR(255) NOT NULL
//     );
//   `;

//   const insertedUsers = await Promise.all(
//     users.map(async (user) => {
//       return client.sql`
//         INSERT INTO users (id, name, email, phone, type)
//         VALUES (${user.id}, ${user.name}, ${user.email}, ${user.email}, ${user.type})
//         ON CONFLICT (id) DO NOTHING;
//       `;
//     }),
//   );

//   return insertedUsers;
// }

// async function seedAppointments() {
//   await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
//   await client.sql`
//     CREATE TABLE IF NOT EXISTS appointments (
//       id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
//       coach_id UUID NOT NULL REFERENCES users(id),
//       student_id UUID NOT NULL REFERENCES users(id),
//       start_time TIMESTAMP NOT NULL,
//       notes TEXT,
//       rating INT,
//       status VARCHAR(255)
//     );
//   `;

//   const insertedAppointments = await Promise.all(
//     appointments.map(async (appointment) => {
//       return client.sql`
//         INSERT INTO appointments (id, coach_id, student_id, start_time, notes, rating, status)
//         VALUES (${appointment.id}, ${appointment.coach_id}, ${appointment.student_id}, ${appointment.start_time}, ${appointment.notes}, ${appointment.rating}, ${appointment.status})
//         ON CONFLICT (id) DO NOTHING;
//       `;
//     }),
//   );

//   return insertedAppointments;
// }

export async function GET() {
  return Response.json({
    message:
      'Uncomment this file and remove this line. You can delete this file when you are finished.',
  });
  // try {
  //   await client.sql`BEGIN`;
  //   await seedUsers();
  //   await seedAppointments();
  //   await client.sql`COMMIT`;

  //   return Response.json({ message: 'Database seeded successfully' });
  // } catch (error) {
  //   await client.sql`ROLLBACK`;
  //   return Response.json({ error }, { status: 500 });
  // }
}
