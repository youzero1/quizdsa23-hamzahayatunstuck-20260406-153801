'use client';

import { useState } from 'react';
import { categories } from '@/data/questions';
import { Category, Difficulty } from '@/types/quiz';

interface Props {
  onStart: (category: Category, difficulty: Difficulty) => void;
}

export default function CategorySelector({ onStart }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>('medium');

  const difficulties: { value: Difficulty; label: string; emoji: string }[] = [
    { value: 'easy', label: 'Easy', emoji: '😊' },
    { value: 'medium', label: 'Medium', emoji: '🤔' },
    { value: 'hard', label: 'Hard', emoji: '🔥' },
  ];

  return (
    <div className="card" style={{ maxWidth: '700px' }}>
      <h1 className="title">🧠 Quiz Master</h1>
      <p className="subtitle">Test your knowledge across multiple categories!</p>

      <div className="section-title">Choose a Category</div>
      <div className="categories-grid">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`category-card ${selectedCategory?.id === category.id ? 'selected' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            <span className="category-icon">{category.icon}</span>
            <span className="category-name">{category.name}</span>
            <span className="category-count">{category.description}</span>
          </div>
        ))}
      </div>

      <div className="section-title">Select Difficulty</div>
      <div className="difficulty-selector">
        {difficulties.map((d) => (
          <button
            key={d.value}
            className={`difficulty-btn ${selectedDifficulty === d.value ? 'active' : ''}`}
            onClick={() => setSelectedDifficulty(d.value)}
          >
            {d.emoji} {d.label}
          </button>
        ))}
      </div>

      <div className="btn-center">
        <button
          className="btn btn-primary"
          disabled={!selectedCategory}
          onClick={() => selectedCategory && onStart(selectedCategory, selectedDifficulty)}
        >
          🚀 Start Quiz
        </button>
      </div>
    </div>
  );
}
