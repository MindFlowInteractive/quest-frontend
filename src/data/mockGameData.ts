export interface Answer {
    letter: string;
    text: string;
    isCorrect: boolean;
  }
  
  export interface QuestionData {
    id: number;
    level: number;
    reward: string;
    text: string;
    answers: Answer[];
  }
  
  export const MOCK_GAME_DATA: QuestionData[] = [
    {
      id: 1,
      level: 1,
      reward: "$100",
      text: "Which of these is a programming language used for web styling?",
      answers: [
        { letter: "A", text: "HTML", isCorrect: false },
        { letter: "B", text: "CSS", isCorrect: true },
        { letter: "C", text: "Java", isCorrect: false },
        { letter: "D", text: "SQL", isCorrect: false },
      ],
    },
    {
      id: 2,
      level: 2,
      reward: "$200",
      text: "What does 'JS' stand for in web development?",
      answers: [
        { letter: "A", text: "JustScript", isCorrect: false },
        { letter: "B", text: "JavaSource", isCorrect: false },
        { letter: "C", text: "JavaScript", isCorrect: true },
        { letter: "D", text: "JiveStack", isCorrect: false },
      ],
    },
    {
      id: 3,
      level: 3,
      reward: "$300",
      text: "Which HTML tag is used to define an internal style sheet?",
      answers: [
        { letter: "A", text: "<script>", isCorrect: false },
        { letter: "B", text: "<css>", isCorrect: false },
        { letter: "C", text: "<style>", isCorrect: true },
        { letter: "D", text: "<design>", isCorrect: false },
      ],
    },
    {
      id: 4,
      level: 4,
      reward: "$500",
      text: "In React, what is used to pass data to a component from outside?",
      answers: [
        { letter: "A", text: "setState", isCorrect: false },
        { letter: "B", text: "Props", isCorrect: true },
        { letter: "C", text: "PropTypes", isCorrect: false },
        { letter: "D", text: "UseRef", isCorrect: false },
      ],
    },
    {
      id: 5,
      level: 5,
      reward: "$1,000",
      text: "Which HTTP status code represents 'Not Found'?",
      answers: [
        { letter: "A", text: "200", isCorrect: false },
        { letter: "B", text: "403", isCorrect: false },
        { letter: "C", text: "404", isCorrect: true },
        { letter: "D", text: "500", isCorrect: false },
      ],
    },
    {
      id: 6,
      level: 6,
      reward: "$2,000",
      text: "What is the correct syntax for a comment in CSS?",
      answers: [
        { letter: "A", text: "// comment", isCorrect: false },
        { letter: "B", text: "/* comment */", isCorrect: true },
        { letter: "C", text: "", isCorrect: false },
        { letter: "D", text: "' comment", isCorrect: false },
      ],
    },
    {
      id: 7,
      level: 7,
      reward: "$4,000",
      text: "Which Git command is used to save changes to the local repository?",
      answers: [
        { letter: "A", text: "git push", isCorrect: false },
        { letter: "B", text: "git pull", isCorrect: false },
        { letter: "C", text: "git commit", isCorrect: true },
        { letter: "D", text: "git stash", isCorrect: false },
      ],
    },
    {
      id: 8,
      level: 8,
      reward: "$8,000",
      text: "What is the primary purpose of a 'key' prop in React lists?",
      answers: [
        { letter: "A", text: "To style the element", isCorrect: false },
        { letter: "B", text: "To identify items uniquely for performance", isCorrect: true },
        { letter: "C", text: "To link to a database", isCorrect: false },
        { letter: "D", text: "To prevent re-rendering", isCorrect: false },
      ],
    },
    {
      id: 9,
      level: 9,
      reward: "$16,000",
      text: "Which of these is NOT a valid JavaScript data type?",
      answers: [
        { letter: "A", text: "Undefined", isCorrect: false },
        { letter: "B", text: "Boolean", isCorrect: false },
        { letter: "C", text: "Float", isCorrect: true },
        { letter: "D", text: "Symbol", isCorrect: false },
      ],
    },
    {
      id: 10,
      level: 10,
      reward: "$32,000",
      text: "What does the 'Box Model' in CSS consist of?",
      answers: [
        { letter: "A", text: "Margin, Border, Padding, Content", isCorrect: true },
        { letter: "B", text: "Width, Height, Color, Font", isCorrect: false },
        { letter: "C", text: "Flex, Grid, Block, Inline", isCorrect: false },
        { letter: "D", text: "Top, Right, Bottom, Left", isCorrect: false },
      ],
    },
    {
      id: 11,
      level: 11,
      reward: "$64,000",
      text: "Which SQL clause is used to filter the results of a query?",
      answers: [
        { letter: "A", text: "SORT BY", isCorrect: false },
        { letter: "B", text: "WHERE", isCorrect: true },
        { letter: "C", text: "GROUP BY", isCorrect: false },
        { letter: "D", text: "HAVING", isCorrect: false },
      ],
    },
    {
      id: 12,
      level: 12,
      reward: "$125,000",
      text: "What is the time complexity of searching an element in a balanced Binary Search Tree?",
      answers: [
        { letter: "A", text: "O(1)", isCorrect: false },
        { letter: "B", text: "O(n)", isCorrect: false },
        { letter: "C", text: "O(log n)", isCorrect: true },
        { letter: "D", text: "O(n log n)", isCorrect: false },
      ],
    },
    {
      id: 13,
      level: 13,
      reward: "$250,000",
      text: "In JavaScript, what is 'hoisting'?",
      answers: [
        { letter: "A", text: "Moving declarations to the top of the scope", isCorrect: true },
        { letter: "B", text: "Compressing code for production", isCorrect: false },
        { letter: "C", text: "Lifting state to a parent component", isCorrect: false },
        { letter: "D", text: "An alternative to asynchronous fetching", isCorrect: false },
      ],
    },
    {
      id: 14,
      level: 14,
      reward: "$500,000",
      text: "Which architectural style uses standard HTTP methods and is stateless?",
      answers: [
        { letter: "A", text: "GraphQL", isCorrect: false },
        { letter: "B", text: "SOAP", isCorrect: false },
        { letter: "C", text: "REST", isCorrect: true },
        { letter: "D", text: "gRPC", isCorrect: false },
      ],
    },
    {
      id: 15,
      level: 15,
      reward: "$1,000,000",
      text: "Who is known as the 'father' of the World Wide Web?",
      answers: [
        { letter: "A", text: "Steve Jobs", isCorrect: false },
        { letter: "B", text: "Bill Gates", isCorrect: false },
        { letter: "C", text: "Tim Berners-Lee", isCorrect: true },
        { letter: "D", text: "Ada Lovelace", isCorrect: false },
      ],
    },
  ];