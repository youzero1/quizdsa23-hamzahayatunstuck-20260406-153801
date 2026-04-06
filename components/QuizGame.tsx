'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Category, Difficulty, Question, QuizResult, AnswerRecord } from '@/types/quiz';
import { getQuestions } from '@/data/questions';

interface Props {
  category: Category;
  difficulty: Difficulty;
  onComplete: (result: QuizResult) => void;
  onQuit: () => void;
}

const TIME_PER_QUESTION = 30;

export default function QuizGame({ category, difficulty, onComplete, onQuit }: Props) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIME_PER_QUESTION);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());
  const [quizStartTime] = useState(Date.now());
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const qs = getQuestions(category.id, difficulty);
    setQuestions(qs);
  }, [category.id, difficulty]);

  const handleTimeout = useCallback(() => {
    if (!isAnswered && questions.length > 0) {
      const currentQuestion = questions[currentIndex];
      const record: AnswerRecord = {
        questionId: currentQuestion.id,
        selectedIndex: -1,
        correctIndex: currentQuestion.correctIndex,
        isCorrect: false,
        timeTaken: TIME_PER_QUESTION,
      };
      setAnswers((prev) => [...prev, record]);
      setIsAnswered(true);
      setSelectedOption(-1);
    }
  }, [isAnswered, questions, currentIndex]);

  useEffect(() => {
    if (questions.length === 0) return;
    if (isAnswered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }
    setTimeLeft(TIME_PER_QUESTION);
    setQuestionStartTime(Date.now());
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          handleTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, questions, isAnswered, handleTimeout]);

  const handleAnswer = (optionIndex: number) => {
    if (isAnswered) return;
    if (timerRef.current) clearInterval(timerRef.current);
    const currentQuestion = questions[currentIndex];
    const isCorrect = optionIndex === currentQuestion.correctIndex;
    const timeTaken = Math.round((Date.now() - questionStartTime) / 1000);
    if (isCorrect) setScore((prev) => prev + 1);
    const record: AnswerRecord = {
      questionId: currentQuestion.id,
      selectedIndex: optionIndex,
      correctIndex: currentQuestion.correctIndex,
      isCorrect,
      timeTaken,
    };
    setAnswers((prev) => [...prev, record]);
    setSelectedOption(optionIndex);
    setIsAnswered(true);
  };

  const handleNext = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex >= questions.length) {
      const totalTime = Math.round((Date.now() - quizStartTime) / 1000);
      const result: QuizResult = {
        category,
        difficulty,
        score,
        totalQuestions: questions.length,
        timeTaken: totalTime,
        answers,
      };
      onComplete(result);
    } else {
      setCurrentIndex(nextIndex);
      setSelectedOption(null);
      setIsAnswered(false);
    }
  };

  if (questions.length === 0) {
    return (
      <div className="card">
        <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.6)' }}>Loading questions...</p>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex) / questions.length) * 100;
  const timerClass = timeLeft <= 5 ? 'timer danger' : timeLeft <= 10 ? 'timer warning' : 'timer';
  const optionLabels = ['A', 'B', 'C', 'D'];

  return (
    <div className="card" style={{ maxWidth: '700px' }}>
      <div className="quiz-header">
        <div className="quiz-info">
          <span className="badge">{category.icon} {category.name}</span>
          <span className="badge" style={{ textTransform: 'capitalize' }}>{difficulty}</span>
          <span className="badge">Score: {score}</span>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <span className={timerClass}>⏱ {timeLeft}s</span>
          <button className="btn btn-secondary" style={{ padding: '6px 14px', fontSize: '0.85rem' }} onClick={onQuit}>Quit</button>
        </div>
      </div>

      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>

      <div className="question-number">
        Question {currentIndex + 1} of {questions.length}
      </div>

      <div className="question-text">{currentQuestion.question}</div>

      <div className="options-grid">
        {currentQuestion.options.map((option, index) => {
          let className = 'option-btn';
          if (isAnswered) {
            if (index === currentQuestion.correctIndex) {
              className += ' correct';
            } else if (index === selectedOption && selectedOption !== currentQuestion.correctIndex) {
              className += ' selected-wrong';
            }
          }
          return (
            <button
              key={index}
              className={className}
              onClick={() => handleAnswer(index)}
              disabled={isAnswered}
            >
              <span className="option-label">{optionLabels[index]}</span>
              {option}
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <>
          <div className={`feedback ${selectedOption === currentQuestion.correctIndex ? 'correct' : 'incorrect'}`}>
            {selectedOption === -1
              ? `⏰ Time\'s up! The answer was: ${currentQuestion.options[currentQuestion.correctIndex]}`
              : selectedOption === currentQuestion.correctIndex
              ? '✅ Correct! Well done!'
              : `❌ Incorrect! The correct answer was: ${currentQuestion.options[currentQuestion.correctIndex]}`}
          </div>
          {currentQuestion.explanation && (
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginBottom: '16px', textAlign: 'center' }}>
              💡 {currentQuestion.explanation}
            </p>
          )}
          <div className="btn-center">
            <button className="btn btn-primary" onClick={handleNext}>
              {currentIndex + 1 >= questions.length ? '🏆 See Results' : 'Next Question →'}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
