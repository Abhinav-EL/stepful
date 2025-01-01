// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: 'abc',
    name: 'Mark C',
    email: 'user-mark@nextmail.com',
    phone: '123456',
    type: 'coach',
  },
  {
    id: 'def',
    name: 'Steve S',
    email: 'user-steve@nextmail.com',
    phone: '789345',
    type: 'student',
  },
];

const appointments = [
  {
    id: '1',
    coach_id: 'abc',
    start_time: '2025/01/01 09:00',
  },
  {
    id: '2',
    coach_id: 'abc',
    student_id: 'def',
    start_time: '2025/02/01 09:00',
  },
];

export { users, appointments };
