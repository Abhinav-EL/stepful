  import { db } from "@vercel/postgres";

  const client = await db.connect();

  async function listAppointments() {
  	const data = await client.sql`
      SELECT * FROM appointments
      WHERE coach_id = 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa'
    `;

  	return data.rows;
  }

  async function listUsers() {
  	const data = await client.sql`
      SELECT * FROM users
    `;

  	return data.rows;
  }

  async function deleteAppointments() {

    const data = await client.sql`
      DELETE FROM appointments
      WHERE coach_id = 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa'
    `;

    return data.rows;
  }

  async function addUser() {
    const data = await client.sql`
      INSERT INTO users (id, name, email, phone, type)
      VALUES (uuid_generate_v4(), 'Mitch Student', 'mitch.student@me.com','999-223-5555', 'student')
      `;
  }

export async function GET() {
  
    try {
    	//return Response.json(await listAppointments());

      return Response.json(await listUsers());
    } catch (error) {
    	return Response.json({ error }, { status: 500 });
    }
}
