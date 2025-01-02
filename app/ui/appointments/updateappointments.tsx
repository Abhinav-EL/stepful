import { PencilIcon, PlusIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { bookAppointment } from '@/app/lib/data';

export function BookAppointment({ appointment_id, student_id }: { appointment_id: string, student_id: string }) {
    const bookAppointmentWithAptId = bookAppointment.bind(null, appointment_id, student_id);
 
    return (
      <form action={bookAppointmentWithAptId}>
        <button type="submit" className="rounded-md border p-2 hover:bg-gray-100">
          <span className="sr-only">Book</span>
          <PencilIcon className="w-4" />
        </button>
      </form>
    );
  }


  export function AddAppointment({ id, }: {id: String }) {
    return (
      <Link
        href={`/dashboard/${id}/create`}
        className="rounded-md border p-2 hover:bg-gray-100"
      >
        <PlusIcon className="w-5" />
      </Link>
    );
  }

  export function EditAppointment({ id, }: {id: String }) {
    return (
      <Link
        href={`/dashboard/${id}/edit`}
        className="rounded-md border p-2 hover:bg-gray-100"
      >
        <PencilIcon className="w-5" />
      </Link>
    );
  }