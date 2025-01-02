'use server';

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createAppointment(formData: FormData) {
    "use server";
    const rawFormData = {
        start_time: formData.get('start_time'),
        coach_id: formData.get('coach_id'),
      };

      const start_time = new Date(rawFormData.start_time as string).toISOString();
      const coach_id = rawFormData.coach_id as string;

      console.log("New appointment for --", start_time, coach_id);

      await sql`
        INSERT INTO appointments (id, coach_id, start_time)
        VALUES (uuid_generate_v4(), ${coach_id}, ${start_time})
    `;

    revalidatePath('/dashboard');
    redirect('/dashboard');
}