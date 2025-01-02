import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { editAppointment } from '@/app/lib/data';

export default function Form({ id, }: {id: string }) {
  console.log("Appointment Id to Edit: ",  id);
  
  async function submitHandler(formData: FormData){
    "use server";
    console.log(formData)
    const serverResponse = await editAppointment(id, formData.get('rating') as string, formData.get('notes') as string)
    console.log(serverResponse)
  }

  return (
    <form action = {submitHandler}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium">
            Please enter details for this appointment below
          </label>
        </div>
        {/* Rating*/}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium">Rating 1 - 5</label>
          <input
            type="range"
            name="rating"
            min="0" max="5"
            step="1"
            className="w-full rounded-md border-gray-300"
          />
        </div>
        {/* Notes*/}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium">Notes</label>
          <input
            type="text"
            name="notes"
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
        <Button type="submit">Edit Appointment</Button>
      </div>
    </form>
  );
}
