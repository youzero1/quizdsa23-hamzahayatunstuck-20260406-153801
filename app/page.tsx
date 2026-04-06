'use client';

import { useState } from 'react';
import CategorySelector from '@/components/CategorySelector';
import QuizGame from '@/components/QuizGame';
import Results from '@/components/Results';
import { Category, Difficulty, QuizResult } from '@/types/quiz';

type AppState = 'home' | 'quiz' | 'results';

export default function Home() {
  const [appState, setAppState] = useState<AppState>('home');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>('medium');
  const [quizResult, setQuizResult] = useState<QuizResult | null>(null);

  const handleStartQuiz = (category: Category, difficulty: Difficulty) => {
    setSelectedCategory(category);
    setSelectedDifficulty(difficulty);
    setAppState('quiz');
  };

  const handleQuizComplete = (result: QuizResult) => {
    setQuizResult(result);
    setAppState('results');
  };

  const handleRestart = () => {
    setAppState('home');
    setSelectedCategory(null);
    setQuizResult(null);
  };

  const handlePlayAgain = () => {
    if (selectedCategory) {
      setAppState('quiz');
      setQuizResult(null);
    }
  };

  return (
    <div className="container">
      {appState === 'home' && (
        <CategorySelector onStart={handleStartQuiz} />
      )}
      {appState === 'quiz' && selectedCategory && (
        <QuizGame
          category={selectedCategory}
          difficulty={selectedDifficulty}
          onComplete={handleQuizComplete}
          onQuit={handleRestart}
        />
      )}
      {appState === 'results' && quizResult && (
        <Results
          result={quizResult}
          onPlayAgain={handlePlayAgain}
          onHome={handleRestart}
        />
      )}
    </div>
  );
}
