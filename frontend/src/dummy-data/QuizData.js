const QuizData = [
  // 1-4
  {
    japanese: '人',
    options: [
      { answer: 'person', isCorrect: true },
      { answer: 'dog', isCorrect: false },
      { answer: 'cat', isCorrect: false },
      { answer: 'flower', isCorrect:false }
    ]
  },
  {
    japanese: '猫',
    options: [
      { answer: 'person', isCorrect: false },
      { answer: 'dog', isCorrect: false },
      { answer: 'cat', isCorrect: true },
      { answer: 'flower', isCorrect:false }
    ]
  },
  {
    japanese: '花',
    options: [
      { answer: 'person', isCorrect: false },
      { answer: 'dog', isCorrect: false },
      { answer: 'cat', isCorrect: false },
      { answer: 'flower', isCorrect: true }
    ]
  },
  {
    japanese: '犬',
    options: [
      { answer: 'person', isCorrect: false },
      { answer: 'dog', isCorrect: true },
      { answer: 'cat', isCorrect: false },
      { answer: 'flower', isCorrect: false }
    ]
  },

  // 5-8
  {
    japanese: '水',
    options: [
      { answer: 'water', isCorrect: true },
      { answer: 'sky', isCorrect: false },
      { answer: 'sun', isCorrect: false },
      { answer: 'land', isCorrect: false },
    ]
  },
  {
    japanese: '空',
    options: [
      { answer: 'sun', isCorrect: false },
      { answer: 'land', isCorrect: false },
      { answer: 'water', isCorrect: false },
      { answer: 'sky', isCorrect: true }
    ]
  },
  {
    japanese: '陸',
    options: [
      { answer: 'sun', isCorrect: false },
      { answer: 'water', isCorrect: false },
      { answer: 'land', isCorrect: true },
      { answer: 'sky', isCorrect: false }
    ]
  },
  {
    japanese: '日',
    options: [
      { answer: 'sun', isCorrect: true },
      { answer: 'water', isCorrect: false },
      { answer: 'land', isCorrect: false },
      { answer: 'sky', isCorrect: false }
    ]
  },

  // 9-12
  {
    japanese: '黒',
    options: [
      { answer: 'grey', isCorrect: false },
      { answer: 'white', isCorrect: false },
      { answer: 'yellow', isCorrect: false },
      { answer: 'black', isCorrect: true }
    ]
  },
  {
    japanese: 'グレー',
    options: [
      { answer: 'grey', isCorrect: true },
      { answer: 'black', isCorrect: false },
      { answer: 'white', isCorrect: false },
      { answer: 'yellow', isCorrect: false }
    ]
  },
  {
    japanese: '白い',
    options: [
      { answer: 'grey', isCorrect: false },
      { answer: 'black', isCorrect: false },
      { answer: 'yellow', isCorrect: false },
      { answer: 'white', isCorrect: true }
    ]
  },
  {
    japanese: '黄',
    options: [
      { answer: 'yellow', isCorrect: true },
      { answer: 'grey', isCorrect: false },
      { answer: 'black', isCorrect: false },
      { answer: 'white', isCorrect: false }
    ]
  },

  // 13-16
  {
    japanese: '魚',
    options: [
      { answer: 'meat', isCorrect: false },
      { answer: 'fish', isCorrect: true },
      { answer: 'bread', isCorrect: false },
      { answer: 'milk', isCorrect: false }
    ]
  },
  {
    japanese: 'パン',
    options: [
      { answer: 'bread', isCorrect: true },
      { answer: 'meat', isCorrect: false },
      { answer: 'fish', isCorrect: false },
      { answer: 'milk', isCorrect: false }
    ]
  },
  {
    japanese: 'お肉',
    options: [
      { answer: 'bread', isCorrect: false },
      { answer: 'fish', isCorrect: false },
      { answer: 'milk', isCorrect: false },
      { answer: 'meat', isCorrect: true }
    ]
  },
  {
    japanese: '乳',
    options: [
      { answer: 'bread', isCorrect: false },
      { answer: 'fish', isCorrect: false },
      { answer: 'milk', isCorrect: true },
      { answer: 'meat', isCorrect: false }
    ]
  },

  // 17-20
  {
    japanese: '車両',
    options: [
      { answer: 'car', isCorrect: true },
      { answer: 'ship', isCorrect: false},
      { answer: 'motorcycle', isCorrect: false },
      { answer: 'bicycle', isCorrect: false },
    ]
  },
  {
    japanese: '自転車',
    options: [
      { answer: 'car', isCorrect: false },
      { answer: 'ship', isCorrect: false },
      { answer: 'motorcycle', isCorrect: false },
      { answer: 'bicycle', isCorrect: true },
    ]
  },
  {
    japanese: '船',
    options: [
      { answer: 'car', isCorrect: false },
      { answer: 'ship', isCorrect: true },
      { answer: 'motorcycle', isCorrect: false },
      { answer: 'bicycle', isCorrect: false },
    ]
  },
  {
    japanese: 'オートバイ',
    options: [
      { answer: 'car', isCorrect: false },
      { answer: 'ship', isCorrect: false },
      { answer: 'motorcycle', isCorrect: true },
      { answer: 'bicycle', isCorrect: false },
    ]
  },
];

export default QuizData;
