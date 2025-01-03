import Form from '@/app/ui/appointments/edit-form';
import Breadcrumbs from '@/app/ui/appointments/breadcrumbs';
 
export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;
    
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Appointment', href: '/dashboard' },
          {
            label: 'Eidt Appointment',
            href: `/dashboard/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form id={id} />
    </main>
  );
}