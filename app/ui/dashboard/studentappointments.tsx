import { AppointmentWithUser, User } from '@/app/lib/definitions';
import { BookAppointment } from '../appointments/updateappointments';

export default async function StudentAppointments({appointments, currentUser, }: {appointments: AppointmentWithUser[]; currentUser: User; })
{
    return (
        <div className='padding border'>
            <h1>Student View</h1>
            <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Coach Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                    Coach Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                    Coach Phone
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Apointment Time
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Book Appointment
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {appointments?.map((appointment) => (
                <tr
                  key={appointment.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{appointment.name || 'Not Booked'}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {appointment.email|| 'Not Booked'}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {appointment.phone|| 'Not Booked'}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {appointment.start_time}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {
                        appointment.student_id === null ?
                        <BookAppointment appointment_id={appointment.id} student_id = {currentUser.id}/>
                        : 'Booked'
                    }
                  </td>
                </tr>
              ))}
            </tbody>
            </table>
        </div>
    );
}