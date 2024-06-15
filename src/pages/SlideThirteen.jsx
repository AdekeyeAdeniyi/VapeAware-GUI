import Quizlet from "../components/Quizlet";

import audio from "../assets/audio/behavioral-intent-question.mp3";

import backgroundImage from "../assets/images/VapingLessonBackground1.png";

const question = {
  id: "about_vaping",
  title:
    "If someone from school came up to you tomorrow and asked you to vape, what would you do?",
  options: [
    "I would tell them no.",
    "I would tell them no and leave.",
    "I would tell them no and that they shouldn’t vape either.",
    "I would try it.",
  ],
};

const captions = [
  {
    start: 0,
    end: 4,
    text: "If someone from school came up to you tomorrow and asked you to vape,",
  },
  {
    start: 4,
    end: 6,
    text: "what would you do?",
  },
  {
    start: 6,
    end: 8,
    text: "I would tell them no.",
  },
  {
    start: 8,
    end: 12,
    text: "I would tell them no and leave.",
  },
  {
    start: 12,
    end: 16,
    text: "I would tell them no and that they shouldn’t vape either.",
  },
  {
    start: 16,
    end: 18,
    text: "I would try it.",
  },
];

const SlideThirteen = () => {
  return (
    <Quizlet
      question={question}
      audioSrc={audio}
      captions={captions}
      backgroundImage={backgroundImage}
    />
  );
};

export default SlideThirteen;
