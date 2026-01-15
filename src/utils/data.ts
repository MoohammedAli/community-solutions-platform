import type { Problem } from "../../types";

export const initialProblems: Problem[] = [
  {
    id: '1',
    title: 'Gas Smell from Kitchen Stove',
    description: 'Persistent gas smell coming from the stove even when it\'s turned off. The smell is strongest near the burners.',
    category: 'Home & Kitchen',
    emergency: true,
    solutions: [],
    votes: 42,
    createdAt: '2024-01-15T10:30:00Z'
  },
  {
    id: '2',
    title: 'Phone Fell in Water',
    description: 'Dropped my iPhone in the toilet, now it won\'t turn on. The screen is black and doesn\'t respond to charging.',
    category: 'Electronics',
    emergency: false,
    solutions: [],
    votes: 28,
    createdAt: '2024-01-14T15:45:00Z'
  },
  {
    id: '3',
    title: 'AC Not Cooling Properly',
    description: 'Air conditioner is running but not producing cold air. The fan works but the air coming out is warm.',
    category: 'Home Appliances',
    emergency: false,
    solutions: [],
    votes: 35,
    createdAt: '2024-01-13T09:15:00Z'
  },
  {
    id: '4',
    title: 'Car Making Strange Noise',
    description: 'My car makes a grinding noise when I brake, especially at low speeds.',
    category: 'Automotive',
    emergency: false,
    solutions: [],
    votes: 19,
    createdAt: '2024-01-12T14:20:00Z'
  },
  {
    id: '5',
    title: 'Leaky Faucet Won\'t Stop',
    description: 'Kitchen faucet drips constantly, tried tightening but still leaks.',
    category: 'Plumbing',
    emergency: false,
    solutions: [],
    votes: 31,
    createdAt: '2024-01-11T11:10:00Z'
  }
];
