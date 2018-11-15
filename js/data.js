var data = {
  first: {
    id: "brand",
    value: "Brand",
    question: "Выберите марку автомобиля",
    answers: [
      {
        text: "Saab",
        value: "saab",
        next: "saabModels"
      },
      {
        text: "Toyota",
        value: "toyota",
        next: "toyotaModels"
      },
      {
        text: "Ford",
        value: "ford",
        next: "fordModels"
      }
    ],
    next: ""
  },
  saabModels: {
    id: "saabModels",
    value: "Model",
    question: "Выберите модель",
    answers: [
      {
        text: "900",
        value: "900",
        next: "transmission"
      },
      {
        text: "9000",
        value: "9000",
        next: "transmission"
      },
      {
        text: "9-4X",
        value: "9-4x",
        next: "transmission"
      }
    ],
    previous: "first",
  },
  toyotaModels: {
    id: "toyotaModels",
    value: "Model",
    question: "Выберите модель",
    answers: [
      {
        text: "Prius",
        value: "prius",
        next: "transmission"
      },
      {
        text: "Tacoma",
        value: "tacoma",
        next: "transmission"
      },
      {
        text: "Camri",
        value: "camri",
        next: "transmission"
      }
    ],
    previous: "first"
  },
  fordModels: {
    id: "fordModels",
    value: "Model",
    question: "Выберите модель",
    answers: [
      {
        text: "Focus",
        value: "focus",
        next: "transmission"
      },
      {
        text: "Ranger",
        value: "ranger",
        next: "transmission"
      },
      {
        text: "Edge",
        value: "edge",
        next: "transmission"
      }
    ],
    previous: "first"
  },
  transmission: {
    id: "transmission",
    value: "Transmission",
    question: "Коробка передач",
    answers: [
      {
        text: "Автоматическая",
        value: "automatic",
        next: "last"
      },
      {
        text: "Ручная",
        value: "manual",
        next: "last"
      }
    ],
    previous: ""
  },
  last: {
    id: "color",
    value: "Color",
    question: "Цвет покрытия",
    answers: [
      {
        text: "Черный",
        value: "black"
      },
      {
        text: "Серый",
        value: "grey"
      },
      {
        text: "Бежевый",
        value: "beige"
      },
      {
        text: "Металлик",
        value: "metallic"
      },
      {
        text: "Красный",
        value: "red"
      }
    ],
    previous: "transmission"
  },
  final: {
    id: "final",
    title: "Ваш выбор:",
    results: {}
  }
}