// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Mark C',
    email: 'user-mark@nextmail.com',
    phone: '123456',
    type: 'coach',
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Steve S',
    email: 'user-steve@nextmail.com',
    phone: '789345',
    type: 'student',
  },
];

const appointments = [
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    coach_id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    start_time: '2025/01/01 09:00:00 PM',
    notes: null,
    rating: null,
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    coach_id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    student_id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    start_time: '2025/02/01 09:00',
    notes: null,
    rating: null,
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    coach_id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    student_id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    start_time: '2025/01/01 09:00:00 AM',
    notes: 'Went well, no follow up',
    rating: 5,
  },
];

export { users, appointments };
