import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { User } from '@/app/lib/definitions';

export function UpdateAppointment({ id }: { id: string }) {
    return (
      <Link
        href="/dashboard"
        className="rounded-md border p-2 hover:bg-gray-100"
      >
        <PencilIcon className="w-5" />
      </Link>
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