  import { db } from "@vercel/postgres";

  const client = await db.connect();

  async function listInvoices() {
  	const data = await client.sql`
      SELECT * FROM appointments
      WHERE coach_id = 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa'
    `;

  	return data.rows;
  }

export async function GET() {
  
    try {
    	return Response.json(await listInvoices());
    } catch (error) {
    	return Response.json({ error }, { status: 500 });
    }
}
