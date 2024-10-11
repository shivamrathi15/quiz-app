const express = require('express');
const Quiz = require('../models/Quiz');
const authenticateToken = require('../middleware/authMiddleware');
const router = express.Router();

// Create a Quiz
router.post('/quiz', authenticateToken, async (req, res) => {
    const { title, questions } = req.body;

    try {
        const quiz = new Quiz({ title, questions });
        await quiz.save();
        res.status(201).json(quiz);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get All Quizzes
router.get('/quizzes', async (req, res) => {
    try {
        const quizzes = await Quiz.find();
        res.json(quizzes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get Quiz Details
router.get('/quiz/:id', async (req, res) => {
    try {
        const quiz = await Quiz.findById(req.params.id);
        if (!quiz) return res.status(404).json({ msg: 'Quiz not found' });
        res.json(quiz);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Take a Quiz
router.post('/quiz/:id/take', authenticateToken, async (req, res) => {
    try {
        const quiz = await Quiz.findById(req.params.id);
        if (!quiz) return res.status(404).json({ msg: 'Quiz not found' });

        const userAnswers = req.body.userAnswers;
        let score = 0;

        userAnswers.forEach(answer => {
            const question = quiz.questions.id(answer.questionId);
            if (question.correctAnswer === answer.answer) score++;
        });

        res.json({ score });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
