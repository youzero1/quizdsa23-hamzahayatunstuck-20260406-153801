export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
}

export interface QuizResult {
  category: Category;
  difficulty: Difficulty;
  score: number;
  totalQuestions: number;
  timeTaken: number;
  answers: AnswerRecord[];
}

export interface AnswerRecord {
  questionId: string;
  selectedIndex: number;
  correctIndex: number;
  isCorrect: boolean;
  timeTaken: number;
}
