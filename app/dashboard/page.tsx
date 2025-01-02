import { Card } from '@/app/ui/dashboard/cards';
import { lusitana } from '@/app/ui/fonts';
import { fetchUsers, fetchHydratedAppointmentsByUser, fetchUpcomingAppointmentsByUser } from '../lib/data';
import Appointments from '@/app/ui/dashboard/appointments';
 
export default async function Page() {
    const users = await fetchUsers();
    const curentUser = users[0];
    if (!curentUser) {
        return <p>No user found</p>;
    }

    const totalAppointments = await fetchHydratedAppointmentsByUser(curentUser);
    const upcomingAppointments = await fetchUpcomingAppointmentsByUser(curentUser);
    console.log(totalAppointments);

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        { <Card title="Total" value={totalAppointments.length} type="total" /> }
        { <Card title="Upcoming" value={upcomingAppointments.length} type="upcoming" /> }
        { <Card title="Completed" value={totalAppointments.length - upcomingAppointments.length} type="completed" />}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        { <Appointments appointments={totalAppointments} currentUser={curentUser}  />}
      </div>
    </main>
  );
}