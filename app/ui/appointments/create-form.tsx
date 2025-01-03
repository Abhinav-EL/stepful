import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { createAppointment } from '@/app/lib/actions';

export default function Form({ id, }: {id: string }) {
  
  async function submitHandler(formData: FormData){
    "use server";
    formData.append('coach_id', id)  
    const serverResponse = await createAppointment(formData)
  }

  return (
    <form action = {submitHandler}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium">
            Please enter appointment time below
          </label>
        </div>
        {/* Start Time*/}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium">Start Time</label>
          <input
            type="datetime-local"
            name="start_time"
            className="w-full rounded-md border-gray-300"
          />
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Appointment</Button>
      </div>
    </form>
  );
}
