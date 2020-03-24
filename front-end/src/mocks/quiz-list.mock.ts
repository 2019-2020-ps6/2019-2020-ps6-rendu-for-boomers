import { Quiz } from '../models/quiz.model';
import { Question } from '../models/question.model';

export const QUIZ_LIST: Quiz[] = 
[
    {
        id: '1',
        name: 'Le drapeau francais',
        theme: 'France',
        questions: 
        [
            {
                id: '1',
                label: 'Quels sont les couleurs du drapeau francais ?',
                answers: 
                [
                    {
                        value: 'bleu blanc rouge',
                        isCorrect: true
                    },

                    {
                        value: 'rouge vert jaune',
                        isCorrect: false
                    }
                ]
                
            }
        ],
    }
];