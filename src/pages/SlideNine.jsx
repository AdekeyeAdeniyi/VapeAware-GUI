import React, { useState, useEffect, useContext, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { DndProvider } from "react-dnd-multi-backend";
import { HTML5toTouch } from "rdndmb-html5-to-touch";

import { CaptionContext } from "../hooks/modules/CaptionContext";
import { ProgressContext } from "../hooks/modules/ProgressContext";

import Caption from "../components/Caption";

import audio1 from "../assets/audio/9_true.mp3";
import audio2 from "../assets/audio/9_false.mp3";
import audio3 from "../assets/audio/10_question.mp3";
import audio4 from "../assets/audio/10_true.mp3";
import audio5 from "../assets/audio/10_false.mp3";
import audio6 from "../assets/audio/11_question.mp3";
import audio7 from "../assets/audio/11_true.mp3";
import audio8 from "../assets/audio/11_false.mp3";
import audio9 from "../assets/audio/12_question.mp3";
import audio10 from "../assets/audio/12_true.mp3";
import audio11 from "../assets/audio/12_false.mp3";

import BackgroundImage from "../assets/images/VapingLessonBackground1.png";

const questions = [
  {
    question: "Most vape devices contain nicotine?",
    narration: "",
    narrationCaption: "Most vapdevices contain nicotine?",
    options: [
      {
        text: "True",
        audio: audio1,
        caption: [{ start: 0, end: 1, text: "That's right!" }],
      },
      {
        text: "False",
        audio: audio2,
        caption: [
          {
            start: 0,
            end: 3,
            text: "Actually, most vape devices do contain nicotine",
          },
        ],
      },
    ],
    correctAnswer: "True",
  },
  {
    question: "Vaping is good for your health?",
    narration: audio3,
    narrationCaption: "Vaping is good for your health? True or False.",
    options: [
      {
        text: "True",
        audio: audio4,
        caption: [
          {
            start: 0,
            end: 2,
            text: "Actually, this is False!",
          },
          {
            start: 2,
            end: 6,
            text: "Vaping isn't healthy and can lead to many negative health impact.",
          },
        ],
      },
      {
        text: "False",
        audio: audio5,
        caption: [
          {
            start: 0,
            end: 1,
            text: "Nice job!, this is false",
          },
        ],
      },
    ],
    correctAnswer: "False",
  },
  {
    question:
      "People are able to legally buy vape devices and products, so they must be safe for young people to use?",
    narration: audio6,
    narrationCaption:
      "People are able to legally buy vape devices and products, so they must be safe for young people to use? True or False.",
    options: [
      {
        text: "True",
        audio: audio7,
        caption: [
          {
            start: 0,
            end: 1,
            text: "Acctually, this is false!",
          },
          {
            start: 1,
            end: 7,
            text: "just because the devices and products are available, doesn't mean they are safe for young people to use,",
          },
          {
            start: 7,
            end: 12,
            text: "this product aren't safe and there are harmful chemicals in them.",
          },
          {
            start: 12,
            end: 16,
            text: "Plus it is against the law for anyone under the age of 21 to buy them.",
          },
        ],
      },
      {
        text: "False",
        audio: audio8,
        caption: [
          {
            start: 0,
            end: 1,
            text: "That's correct.",
          },
          {
            start: 1,
            end: 6,
            text: "The government is working to regulate this products, and enforce laws to keep young people safe,",
          },
          {
            start: 6,
            end: 8,
            text: "from the chemicals in vape products. Plus it is against the law for anyone under the age of 21 to buy them.",
          },
        ],
      },
    ],
    correctAnswer: "False",
  },
  {
    question: "If someone asks you to vape, the best choice is to say no?",
    narration: audio9,
    narrationCaption:
      "If someone asks you to vape, the best choice is to say no?",
    options: [
      {
        text: "True",
        audio: audio10,
        caption: [
          {
            start: 0,
            end: 1,
            text: "That's right !",
          },
          {
            start: 1,
            end: 5,
            text: "vaping isn't good for your health, and can lead to some serious consequences",
          },
        ],
      },
      {
        text: "False",
        audio: audio11,
        caption: [
          {
            start: 0,
            end: 1,
            text: "That's not correct!",
          },
          {
            start: 1,
            end: 5,
            text: "vaping isn't good for your health, and can lead to some serious consequences",
          },
        ],
      },
    ],
    correctAnswer: "True",
  },
];

const ItemType = "OPTION";

const DraggableItem = ({ option, disabled, answer }) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemType,
      item: { option },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
      canDrag: !disabled,
    }),
    [disabled]
  );

  return (
    <div
      ref={drag}
      className={`draggable ${
        disabled ? (option.text == answer ? "correct" : "incorrect") : ""
      }`}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {option.text}
    </div>
  );
};

const Bucket = ({ onDrop, droppedOption, answer }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemType,
    drop: (item) => {
      onDrop(item.option);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div ref={drop} className="bucket-container">
      {droppedOption ? (
        <div
          className={`draggable  w-full h-full ${
            droppedOption.text == answer ? "correct" : "incorrect"
          }`}
        >
          {droppedOption.text}
        </div>
      ) : (
        "Drag & Drop your answer here"
      )}
    </div>
  );
};

const SlideNine = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [droppedOption, setDroppedOption] = useState(null);
  const [isQuestionAudioPlaying, setIsQuestionAudioPlaying] = useState(false);
  const { isCaption, setCaptionText } = useContext(CaptionContext);
  const { increamentValue } = useContext(ProgressContext);

  const audio1Ref = useRef(null);
  const audio2Ref = useRef(null);

  useEffect(() => {
    const currentQuestion = questions[currentQuestionIndex];
    let audioEl = audio1Ref.current;
    if (currentQuestion) {
      if (currentQuestion.narration) {
        audioEl.src = currentQuestion.narration;
        setIsQuestionAudioPlaying(true);

        audioEl.addEventListener("play", () => {
          setCaptionText(currentQuestion.narrationCaption);
        });
        audioEl.onended = () => {
          setCaptionText(" ");
          setIsQuestionAudioPlaying(false);
        };

        audioEl.play();
      }
    }
  }, [currentQuestionIndex]);

  const handleDrop = (option) => {
    setDroppedOption(option);
    let audioEl = audio2Ref.current;
    audioEl.src = option.audio;

    const updateCurrentTime = () => {
      const currentTime = audioEl.currentTime;
      const currentCaption = option.caption.find(
        (caption) => currentTime >= caption.start && currentTime <= caption.end
      );

      if (currentCaption) setCaptionText(currentCaption.text);
    };
    audioEl.addEventListener("timeupdate", updateCurrentTime);
    if (currentQuestionIndex < questions.length) {
      audioEl.onended = () => {
        if (currentQuestionIndex < questions.length - 1) {
          setCaptionText("");
          setDroppedOption(null);
          setCurrentQuestionIndex((prev) => prev + 1);
        }

        if (currentQuestionIndex == questions.length - 1) {
          setCaptionText("");
          setTimeout(() => {
            increamentValue();
          }, 1000);
        }
      };
    }

    audioEl.play();
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <>
      <DndProvider options={HTML5toTouch}>
        <div className="absolute bottom-0 left-0 top-0 right-0 -z-10">
          <img
            src={BackgroundImage}
            alt="backgroung-image"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="quiz-container">
          <div>
            <div className="question-container">
              <h2 className="text-2xl">Q. {currentQuestion.question}</h2>
            </div>

            {!isQuestionAudioPlaying && (
              <Bucket
                onDrop={handleDrop}
                droppedOption={droppedOption}
                answer={currentQuestion.correctAnswer}
              />
            )}

            {!droppedOption && (
              <div className="options-container">
                {currentQuestion.options.map((option, index) => (
                  <DraggableItem
                    key={index}
                    option={option}
                    disabled={droppedOption !== null}
                    answer={currentQuestion.correctAnswer}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </DndProvider>
      <audio ref={audio1Ref} />
      <audio ref={audio2Ref} />
      {isCaption && <Caption />}
    </>
  );
};

export default SlideNine;
