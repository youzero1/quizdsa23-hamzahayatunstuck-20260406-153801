'use client';

import { QuizResult } from '@/types/quiz';

interface Props {
  result: QuizResult;
  onPlayAgain: () => void;
  onHome: () => void;
}

function getScoreMessage(percentage: number): string {
  if (percentage === 100) return '🏆 Perfect Score! Outstanding!';
  if (percentage >= 80) return '🌟 Excellent! You really know your stuff!';
  if (percentage >= 60) return '👍 Good job! Keep it up!';
  if (percentage >= 40) return '📚 Not bad! Room for improvement.';
  return '💪 Keep practicing, you\'ll get better!';
}

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  if (mins > 0) return `${mins}m ${secs}s`;
  return `${secs}s`;
}

export default function Results({ result, onPlayAgain, onHome }: Props) {
  const percentage = Math.round((result.score / result.totalQuestions) * 100);
  const correctAnswers = result.answers.filter((a) => a.isCorrect).length;
  const wrongAnswers = result.answers.filter((a) => !a.isCorrect).length;
  const avgTime = result.answers.length > 0
    ? Math.round(result.answers.reduce((sum, a) => sum + a.timeTaken, 0) / result.answers.length)
    : 0;

  return (
    <div className="card" style={{ maxWidth: '600px' }}>
      <h2 className="title" style={{ fontSize: '2rem', marginBottom: '24px' }}>Quiz Complete!</h2>

      <div className="score-display">
        <div className="score-circle">
          <span className="score-number">{result.score}</span>
          <span className="score-total">out of {result.totalQuestions}</span>
        </div>
        <div className="score-percentage">{percentage}%</div>
        <div className="score-message">{getScoreMessage(percentage)}</div>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '16px' }}>
          <span className="badge">{result.category.icon} {result.category.name}</span>
          <span className="badge" style={{ textTransform: 'capitalize' }}>{result.difficulty}</span>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-item">
          <div className="stat-value" style={{ color: '#2ed573' }}>✅ {correctAnswers}</div>
          <div className="stat-label">Correct</div>
        </div>
        <div className="stat-item">
          <div className="stat-value" style={{ color: '#ff4757' }}>❌ {wrongAnswers}</div>
          <div className="stat-label">Wrong</div>
        </div>
        <div className="stat-item">
          <div className="stat-value" style={{ color: '#ffa502' }}>⏱ {formatTime(result.timeTaken)}</div>
          <div className="stat-label">Total Time</div>
        </div>
      </div>

      <div className="stats-grid" style={{ gridTemplateColumns: '1fr 1fr', marginBottom: '24px' }}>
        <div className="stat-item">
          <div className="stat-value">{avgTime}s</div>
          <div className="stat-label">Avg. Time/Question</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">{percentage >= 60 ? '🎖️ Pass' : '📖 Retry'}</div>
          <div className="stat-label">Result</div>
        </div>
      </div>

      <div className="results-actions">
        <button className="btn btn-primary" onClick={onPlayAgain}>
          🔄 Play Again
        </button>
        <button className="btn btn-secondary" onClick={onHome}>
          🏠 Home
        </button>
      </div>
    </div>
  );
}
