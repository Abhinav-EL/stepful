## Stepful take home assignment

User Stories

- Coaches can add slots of availability to their calendars. These slots are always 2 hours long and each slot can be booked by exactly 1 student.

- Coaches can view their own upcoming slots.

- Students can book upcoming, available slots for any coach.

- When a slot is booked, both the student and coach can view each other’s phone-number.

- After they complete a call with a student, coaches will record the student’s satisfaction (an integer 1-5) and write some free-form notes.

- Coaches should be able to review their past scores and notes for all of their calls.


## Notes
### Overall notes
- Used template from NextJS docs. Removed most of the boilerplate code.
- Focussing on the functionality, UI design could be improved.
- Switch between Coach and Student by updating the index in stepful/app/dashboard/page.tsx [line 10]. 

### Coach Workflow
- View all existing appointments.
- View student details for booked appointments.
- Add new appointments by selecting start time.
- Edit existing appointments if they’re in the past and were booked by a student.

### Student Workflow
- View all booked appointments.
- Book any open appointment.

### Top level Dashboard
- Shows summary of Total, Upcoming and Completed/Open appointments for both Coach and Student.

### Storage
- Using Neon Postgres via Vercel.
- Loaded with two Coaches and two Students.
- Sample appointments added as well.
- .env file contains connection information.
