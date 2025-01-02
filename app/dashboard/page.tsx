import { Card } from '@/app/ui/dashboard/cards';
import { lusitana } from '@/app/ui/fonts';
import { fetchUsers, fetchHydratedAppointmentsForCoach, fetchUpcomingAppointmentsByUser, fetchHydratedAppointmentsForStudent } from '../lib/data';
import Appointments from '@/app/ui/dashboard/appointments';
import StudentAppointments from '../ui/dashboard/studentappointments';
 
export default async function Page() {
    const users = await fetchUsers();
    const curentUser = users[0];
    if (!curentUser) {
        return <p>No user found</p>;
    }

    const isUserStudent = curentUser.type === 'student';
    var totalAppointments;
    const upcomingAppointments = await fetchUpcomingAppointmentsByUser(curentUser);

    if(isUserStudent) {
        totalAppointments = await fetchHydratedAppointmentsForStudent(curentUser);
    } else {
        totalAppointments = await fetchHydratedAppointmentsForCoach(curentUser);
    }
    console.log(totalAppointments);

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Appointments
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        { <Card title="Total" value={totalAppointments.length} type="total" /> }
        { <Card title="Upcoming" value={upcomingAppointments.length} type="upcoming" /> }
        { <Card title="Completed" value={totalAppointments.length - upcomingAppointments.length} type="completed" />}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {isUserStudent
            ? <StudentAppointments appointments={totalAppointments} currentUser={curentUser}/>
            : <Appointments appointments={totalAppointments} currentUser={curentUser} />
        }
      </div>
    </main>
  );
}