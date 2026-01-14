
export interface Problem {
  id: string;
  title: string;
  description: string;
  category: string;
  emergency: boolean;
  solutions: Solution[] | undefined;
  votes: number;
  createdAt: string;
}

export interface Solution {
  id: string;
  problemId: string;
  text: string;
  author: string;
  votes: number;
  isExpert: boolean;
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  email?: string;
  problemsSolved: number;
}
