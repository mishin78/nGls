export const type1 = [
    {   
        id: 0,
        pStart: 'Hi, Chris.',
        select: {
            default: 'Choose',
            img: '/arrow.svg'
        },
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
        pEnd: 'is my friend Jona. "Hi, Jona. Nice to meet you"'
    },
]


export const type2 = [
    {
        id: '1',
        q: 'The _____ is accused of vandalising public property.',
        v: [
            { l: 'a', v: 'alibi', correct: false },
            { l: 'b', v: 'witness', correct: true },
            { l: 'c', v: 'defendant', correct: false },
            { l: 'd', v: 'attorney', correct: false }
        ]
    },
    {
        id: '2',
        q: 'The victim was pleased when the judge announced the guilty _____.',
        v: [
            { l: 'a', v: 'verdict', correct: true },
            { l: 'b', v: 'alibi', correct: false },
            { l: 'c', v: 'sentence', correct: false },
            { l: 'd', v: 'trial', correct: false }
        ]
    },
    {
        id: '3',
        q: 'A _____ claims he saw two armed men entering the building.',
        v: [
            { l: 'a', v: 'victim', correct: true },
            { l: 'b', v: 'defendant', correct: false },
            { l: 'c', v: 'jury', correct: false },
            { l: 'd', v: 'witness', correct: false }
        ]
    }
]