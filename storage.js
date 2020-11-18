const initQuiz = {
    // 5 or more initial questions about music
    questions: [
      {
        question: 'Who is the most significant member of The Beach Boys?',
        answers: [
          'Brian Wilson',
          'Dennis Wilson',
          'Carl Wilson',
          'Al Jardine',
          'Mike Love'
        ],
        correctAnswer: 'Brian Wilson',
        userAnswer: undefined,
        quizOrder: 0
      },
      {
        question: 'Who is the most pernicious member of The Beach Boys?',
        answers: [
          'Brian Wilson',
          'Dennis Wilson',
          'Carl Wilson',
          'Al Jardine',
          'Mike Love'
        ],
        correctAnswer: 'Mike Love',
        userAnswer: undefined,
        quizOrder: 1
      },
      {
        question: 'Who is the most prolific member of The Beatles?',
        answers: [
          'Ringo Starr',
          'Paul McCartney',
          'John Lennon',
          'George Harrison'
        ],
        correctAnswer: 'Paul McCartney',
        userAnswer: undefined,
        quizOrder: 2
      },
      {
        question: 'Who is the most derided member of The Beatles?',
        answers: [
          'Ringo Starr',
          'Paul McCartney',
          'John Lennon',
          'George Harrison'
        ],
        correctAnswer: 'Ringo Starr',
        userAnswer: undefined,
        quizOrder: 3
      },
      {
        question: 'The sharp 11th of a D flat major 7th chord is...',
        answers: [
          'E',
          'Ab',
          'G#',
          'E#',
          'H',
        ],
        correctAnswer: 'G#',
        userAnswer: undefined,
        quizOrder: 4
      },
      {
        question: 'One Lydian upper structure triad for G flat is...',
        answers: [
          'B#, Eb, Ab',
          'Ab, C, Eb',
          'Bb, D, F',
          'B, Eb, Gb',
        ],
        correctAnswer: 'B#, Eb, Ab',
        userAnswer: undefined,
        quizOrder: 5
      },
      {
        question: 'The retrograde-inversion of the tone-row 2, 5, 7, 9, 0 in fixed pitch-class could most accurately  be referred to as...',
        answers: [
          'C, E, F, G, B',
          'D- pent.',
          'G major pentatonic',
          'G, A, C, D, F,',
        ],
        correctAnswer: 'B#, Eb, Ab',
        userAnswer: undefined,
        quizOrder: 5
      },
      {
        question: 'Ives\' \'The Unanswered Question\' highlights interaction with how many main instrument groups?',
        answers: [
          '2',
          '4',
          '9',
          '3',
          '6'
        ],
        correctAnswer: '3',
        userAnswer: undefined,
        quizOrder: 6
      },
      {
        question: '\'Hound Dog\' was originally recorded by which of the following artists?',
        answers: [
          'Elvis',
          'Big Mama Thornton',
          'Louis Armstrong',
          'Blind Willie Mayburne',
          'Smiley Louis'
        ],
        correctAnswer: 'Big Mama Thornton',
        userAnswer: undefined,
        quizOrder: 7
      },
      {
        question: '\'Hound Dog\' was originally recorded by which of the following artists?',
        answers: [
          'Elvis',
          'Big Mama Thornton',
          'Louis Armstrong',
          'Blind Willie Mayburne',
          'Smiley Louis'
        ],
        correctAnswer: 'Big Mama Thornton',
        userAnswer: undefined,
        quizOrder: 8
      },
      {
        question: 'A Theorbo is most similar in harmonic function to a...',
        answers: [
          'Bass',
          'Theremin',
          'Ondes Martonet',
          'Chapman Stick',
          'Didgeridoo'
        ],
        correctAnswer: 'Bass',
        userAnswer: undefined,
        quizOrder: 9
      },
      {
        question: 'Vangelis\' sound can be recognized by heavy use of what synthesizer?',
        answers: [
          'Yamaha CS-80',
          'Moog Minimoog',
          'ARP Odyssey',
          'Sequential Circuits Prophet-5',
          'Roland TB-303'
        ],
        correctAnswer: 'Big Mama Thornton',
        userAnswer: undefined,
        quizOrder: 10
      },
      {
        question: 'Perhaps the most recognizable sound signature of acid house is the...',
        answers: [
          'Roland TR-808',
          'Roland TB-303',
          'Rodger Linn Design LinnStrument',
          'Akai MPC',
          'Roland Juno'
        ],
        correctAnswer: 'Roland TB-303',
        userAnswer: undefined,
        quizOrder: 11
      },
      {
        question: 'Joni Mitchell\'s primary studio microphones are...',
        answers: [
          'AKG C12 on guitar and Neumann U 67 on vocals',
          'AKG C12 on vocals and Neumann U 67 on gutiar',
          'Royer R-121 on guitar and RCA 77-DX on vocals',
          'Royer R-121 on vocals and RCA 77-DX on guitar'
        ],
        correctAnswer: 'AKG C12 on guitar and Neumann U 67 on vocals',
        userAnswer: undefined,
        quizOrder: 12
      },
      {
        question: 'Tom Waits\' preferred vocal microphone for ballads is a...',
        answers: [
          'Neumann U 47',
          'AKG C12 on vocals and Neumann U 67 on guitar',
          'RCA 77-DX',
          'Telefunken ELA M 251'
        ],
        correctAnswer: 'RCA 77-DX',
        userAnswer: undefined,
        quizOrder: 13
      },
      {
        question: 'Marc Ribot played primarily out of which amp on \'Rain Dogs\'...',
        answers: [
          'Fender Deluxe Reverb',
          'Vox AC-30',
          'Marshall Bluesbreaker',
          'Roland JC 120'
        ],
        correctAnswer: 'Fender Deluxe Reverb',
        userAnswer: undefined,
        quizOrder: 14
      },
      {
        question: 'Michael Jackson often used this microphone...',
        answers: [
          'Shure SM7B',
          'Shure SM57',
          'Shure SM58',
          'Ear Trumpet Labs Edwina'
        ],
        correctAnswer: 'Shure SM7B',
        userAnswer: undefined,
        quizOrder: 15
      }
    ],
    quizState: 0,
    questionAmount: 5,
    currentQuestionNumber: 0,
    score: 0
  };
  
//Save current quiz state to JSON local storage
const saveQuiz = () => localStorage.setItem('quiz', JSON.stringify(QUIZ))

//Retrieve quiz state by parsing current JSON or initial quiz
const getQuiz = () => {
    const quizJSON = localStorage.getItem('quiz')
    if (quizJSON !== null) {
        return JSON.parse(quizJSON)
    } else {
        return initQuiz
    }
}

//Clone local storage in JS
const QUIZ = getQuiz()
