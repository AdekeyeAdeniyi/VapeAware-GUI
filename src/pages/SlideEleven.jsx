import Quizlet from "../components/Quizlet";

import audio from "../assets/audio/knowledge-question.mp3";

import backgroundImage from "../assets/images/VapingLessonBackground2.png";

const question = {
  id: "new_lesson",
  title:
    "What is something new that you learned about vaping from this lesson? Select all that apply.",
  options: [
    "Vaping devices contain chemicals.",
    "Nicotine is addictive.",
    "Vaping can negatively impact health.",
    "It can lead to EVALI",
    "It’s too new to know all of the effects of vaping.",
    "I already knew everything in this lesson.",
  ],
};

const captions = [
  {
    start: 0,
    end: 3,
    text: "What is something new that you learned about vaping from this lesson?",
  },
  {
    start: 3,
    end: 6,
    text: "Select all that apply",
  },
  {
    start: 6,
    end: 9,
    text: "Vaping devices contain chemicals.",
  },
  {
    start: 9,
    end: 12,
    text: "Nicotine is addictive.",
  },
  {
    start: 12,
    end: 15,
    text: "Vaping can negatively impact health.",
  },
  {
    start: 15,
    end: 18,
    text: "It can lead to EVALI",
  },
  {
    start: 18,
    end: 22,
    text: "It’s too new to know all of the effects of vaping.",
  },
  {
    start: 22,
    end: 25,
    text: "I already knew everything in this lesson.",
  },
];

const SlideEleven = () => {
  return (
    <Quizlet
      question={question}
      audioSrc={audio}
      captions={captions}
      backgroundImage={backgroundImage}
    />
  );
};

export default SlideEleven;
