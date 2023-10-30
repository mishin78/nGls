export const type1 = [
    {   
        type: 1,
        id: 0,
        pStart: 'Hi, Chris.',
        value: '',
        hidden: [
            {
                correct: false,
                content: 'This'
            },
            {
                correct: true,
                content: 'That'
            },
            {
                correct: false,
                content: 'Dog'
            }
        ],
        chooesenIndex: 0,
        pEnd: 'is my friend Jona. "Hi, Jona. Nice to meet you"'
    },
    {   
        type: 1,
        id: 1,
        pStart: 'The room looks so nice because I',
        value: '',
        hidden: [
            {
                correct: true,
                content: 'had'
            },
            {
                correct: false,
                content: 'did'
            },
            {
                correct: true,
                content: '`ve'
            }
        ],
        chooesenIndex: 0,
        pEnd: 'it redecorated last week.'
    },
    {   
        type: 1,
        id: 2,
        pStart: 'I',
        value: '',
        hidden: [
            {
                correct: false,
                content: 'not have'
            },
            {
                correct: true,
                content: 'haven`t got'
            },
            {
                correct: false,
                content: '`m not having'
            }
        ],
        chooesenIndex: 0,
        pEnd: 'much time today, can we meet tomorrow?'
    },
    {   
        type: 2,
        id: 3,
        pStart: 'Tom loves his rabbits.',
        value: '',
        value1: '',
        hidden: [
            {
                correct: true,
                content: 'He'
            },
            {
                correct: false,
                content: 'Him'
            }
        ],
        chooesenIndex: 0,
        pMiddle: 'plays with ',
        hidden1: [
            {
                correct: false,
                content: 'they'
            },
            {
                correct: true,
                content: 'them'
            }
        ],
        chooesenIndex1: 0,
        pEnd: 'in the garden every day.'
    },
    {   
        type: 1,
        id: 4,
        pStart: 'What time can I call',
        value: '',
        hidden: [
            {
                correct: false,
                content: 'he'
            },
            {
                correct: true,
                content: 'him'
            }
        ],
        chooesenIndex: 0,
        pEnd: '?'
    },
    {   
        type: 2,
        id: 5,
        pStart: 'Do you like my new glasses? Yes,',
        value: '',
        value1: '',
        hidden: [
            {
                correct: false,
                content: 'I'
            },
            {
                correct: true,
                content: 'me'
            }
        ],
        chooesenIndex: 0,
        pMiddle: 'love',
        hidden1: [
            {
                correct: true,
                content: 'they'
            },
            {
                correct: false,
                content: 'them'
            },
            {
                correct: false,
                content: 'it'
            }
        ],
        chooesenIndex1: 0,
        pEnd: ''
    }
]






export const type2 = [
    {
        id: '1',
        q: 'The _____ is accused of vandalising public property.',
        v: [
            { l: 'a', v: 'alibi', correct: false, clicked: false },
            { l: 'b', v: 'witness', correct: true, clicked: false },
            { l: 'c', v: 'defendant', correct: false, clicked: false },
            { l: 'd', v: 'attorney', correct: false, clicked: false }
        ]
    },
    {
        id: '2',
        q: 'The victim was pleased when the judge announced the guilty _____.',
        v: [
            { l: 'a', v: 'verdict', correct: true, clicked: false },
            { l: 'b', v: 'alibi', correct: false, clicked: false },
            { l: 'c', v: 'sentence', correct: false, clicked: false },
            { l: 'd', v: 'trial', correct: false, clicked: false }
        ]
    },
    {
        id: '3',
        q: 'A _____ claims he saw two armed men entering the building.',
        v: [
            { l: 'a', v: 'victim', correct: true, clicked: false },
            { l: 'b', v: 'defendant', correct: false, clicked: false },
            { l: 'c', v: 'jury', correct: false, clicked: false },
            { l: 'd', v: 'witness', correct: false, clicked: false}
        ]
    }
]