import { AppointmentWithUser, User } from '@/app/lib/definitions';
import { AddAppointment, EditAppointment } from '../appointments/updateappointments';

export default async function Appointments({appointments, currentUser, }: {appointments: AppointmentWithUser[]; currentUser: User; })
{
    function isAppointmentInPast(appointment: AppointmentWithUser) {
        const currentTimeStamp = new Date();
        const appointmentTimeStamp = new Date(appointment.start_time);
        return appointmentTimeStamp < currentTimeStamp && appointment.student_id != null;
    }
    return (
        <div className='padding border'> 
            <AddAppointment id={currentUser.id}/>
            <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Student Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Student Email
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Student Phone
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Time
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Notes
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Rating
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Edit Appointment
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
                    {appointment.notes}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {appointment.rating}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {
                        isAppointmentInPast(appointment) &&  
                        <EditAppointment id={appointment.id}/>
                    }
                </td>
                </tr>
              ))}
            </tbody>
            </table>
        </div>
    );
}