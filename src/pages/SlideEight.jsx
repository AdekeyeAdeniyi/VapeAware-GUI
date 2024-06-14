import React, { useState, useEffect, useContext } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { VideoContext } from "../hooks/modules/VideoContext";

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
    options: [
      { text: "True", audio: audio1 },
      { text: "False", audio: audio2 },
    ],
    correctAnswer: "True",
  },
  {
    question: "Vaping is good for your health?",
    narration: audio3,
    options: [
      { text: "True", audio: audio4 },
      { text: "False", audio: audio5 },
    ],
    correctAnswer: "False",
  },
  {
    question:
      "People are able to legally buy vape devices and products, so they must be safe for young people to use?",
    narration: audio6,
    options: [
      { text: "True", audio: audio7 },
      { text: "False", audio: audio8 },
    ],
    correctAnswer: "False",
  },
  {
    question: "If someone asks you to vape, the best choice is to say no?",
    narration: audio9,
    options: [
      { text: "True", audio: audio10 },
      { text: "False", audio: audio11 },
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
        "Drop Answer Here"
      )}
    </div>
  );
};

const SlideEight = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [droppedOption, setDroppedOption] = useState(null);
  const [isQuestionAudioPlaying, setIsQuestionAudioPlaying] = useState(false);
  const { setVideoEnd } = useContext(VideoContext);

  useEffect(() => {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion) {
      if (currentQuestion.narration) {
        const audio = new Audio(currentQuestion.narration);
        setIsQuestionAudioPlaying(true);
        audio.play();
        audio.onended = () => {
          setIsQuestionAudioPlaying(false);
        };
      }
    }
  }, [currentQuestionIndex]);

  const handleDrop = (option) => {
    setDroppedOption(option);
    const audio = new Audio(option.audio);
    audio.play();
    if (currentQuestionIndex < questions.length) {
      audio.onended = () => {
        if (currentQuestionIndex < questions.length - 1) {
          setDroppedOption(null);
          setCurrentQuestionIndex((prev) => prev + 1);
        }

        if (currentQuestionIndex == questions.length - 1) {
          setVideoEnd(true);
        }
      };
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <>
      <div className="absolute bottom-0 left-0 top-0 right-0 -z-10">
        <img
          src={BackgroundImage}
          alt="backgroung-image"
          className="w-full h-full object-cover"
        />
      </div>
      <DndProvider backend={HTML5Backend}>
        <div className="quiz-container">
          <div>
            <div className="question-container">
              <h2 className="text-2xl">Q. {currentQuestion.question}</h2>
            </div>

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
            {!isQuestionAudioPlaying && (
              <Bucket
                onDrop={handleDrop}
                droppedOption={droppedOption}
                answer={currentQuestion.correctAnswer}
              />
            )}
          </div>
        </div>
      </DndProvider>
    </>
  );
};

export default SlideEight;
