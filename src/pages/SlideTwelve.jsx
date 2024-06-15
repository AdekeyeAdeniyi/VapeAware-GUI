import Quizlet from "../components/Quizlet";

import audio from "../assets/audio/attitude-question.mp3";

import backgroundImage from "../assets/images/VapingLessonBackground3.png";

const question = {
  id: "about_vaping",
  title:
    "How would you describe your feelings about vaping? Select all that apply.",
  options: [
    "It’s not for me.",
    "I don’t care if other people vape.",
    "I don’t want people I care about to vape.",
    "I don’t have any feelings about vaping.",
  ],
};

const captions = [
  {
    start: 0,
    end: 3,
    text: "How would you describe your feelings about vaping?",
  },
  {
    start: 3,
    end: 5,
    text: "Select all that apply",
  },
  {
    start: 5,
    end: 7,
    text: "It’s not for me.",
  },
  {
    start: 7,
    end: 11,
    text: "I don’t care if other people vape.",
  },
  {
    start: 11,
    end: 15,
    text: "I don’t want people I care about to vape.",
  },
  {
    start: 15,
    end: 18,
    text: "I don’t have any feelings about vaping.",
  },
];

const SlideTwelve = () => {
  return (
    <Quizlet
      question={question}
      audioSrc={audio}
      captions={captions}
      backgroundImage={backgroundImage}
    />
  );
};

export default SlideTwelve;
