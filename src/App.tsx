import ProblemCard from './components/ProblemCard';

const exampleProblem = {
  id: "1",
  title: "exampleProblem",
  description: "This is the description for an example problem",
  category: "example category",
  emergency: true,
  solutions: undefined,
  votes: 120,
  createdAt: "wednessday 23-1-2025",
}

const exampleProblem2 = {
  id: "2",
  title: "exampleProblem2",
  description: "This is the description for an example problem2",
  category: "example category",
  emergency: false,
  solutions: undefined,
  votes: 120,
  createdAt: "wednessday 23-1-2025",
}

const exampleProblem3 = {
  id: "3",
  title: "exampleProblem3",
  description: "This is the description for an example problem3",
  category: "example category",
  emergency: true,
  solutions: undefined,
  votes: 120,
  createdAt: "wednessday 23-1-2025",
}

const App = () => {
  return (
    <div className="grid grid-cols-3">
      <ProblemCard problem={exampleProblem}/>
      <ProblemCard problem={exampleProblem2}/>
      <ProblemCard problem={exampleProblem3}/>
    </div>
  );
}
export default App;
