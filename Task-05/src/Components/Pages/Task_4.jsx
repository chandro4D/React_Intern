import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";

const Task_4 = () => {
  const MOODS = {
    happy: { emoji: "😆", message: "I feel so happy!" },
    cool: { emoji: "😎", message: "Looking cool today." },
    sleep: { emoji: "😴", message: "Zzz... good night." },
    party: { emoji: "🥳", message: "Let us celebrate!" },
  };
  const [mood, setMood] = useState(null);
  const [stars, setStars] = useState(0);
  const [hearts, setHearts] = useState(0);
  const [jumping, setJumping] = useState(false);
  const [history, setHistory] = useState([]);
  const [message, setMessage] = useState(
    "Hi! Click a button and watch me change.",
  );

  const logClick = (label) => setHistory((h) => [label, ...h]);

  const handleMood = (key) => {
    setMood(key);
    setMessage(MOODS[key].message);
  };

  const handleJump = () => {
    setJumping(true);
    setMessage("Wheee! Jumping!");
    setTimeout(() => setJumping(false), 400);
  };

  const handleReset = () => {
    setMood(null);
    setStars(0);
    setHearts(0);
    setHistory([]);
    setMessage("Hi! Click a button and watch me change.");
  };

  const face = jumping ? "🤖" : mood ? MOODS[mood].emoji : "🤖";

  const buttons = [
    {
      key: "happy",
      label: "Happy",
      emoji: "😆",
      onClick: () => {
        handleMood("happy");
        logClick("Happy");
      },
    },
    {
      key: "cool",
      label: "Cool",
      emoji: "😎",
      onClick: () => {
        handleMood("cool");
        logClick("Cool");
      },
    },
    {
      key: "sleep",
      label: "Sleep",
      emoji: "😴",
      onClick: () => {
        handleMood("sleep");
        logClick("Sleep");
      },
    },
    {
      key: "party",
      label: "Party",
      emoji: "🥳",
      onClick: () => {
        handleMood("party");
        logClick("Party");
      },
    },

    {
      key: "star",
      label: "Add Star",
      emoji: "⭐",
      onClick: () => {
        setStars((s) => s + 1);
        setMessage("A new star was added.");
        logClick("Add Star");
      },
    },
    {
      key: "heart",
      label: "Add Heart",
      emoji: "💗",
      onClick: () => {
        setHearts((h) => h + 1);
        setMessage("A heart was added.");
        logClick("Add Heart");
      },
    },
    {
      key: "jump",
      label: "Jump",
      emoji: "⬆️",
      onClick: () => {
        handleJump();
        logClick("Jump");
      },
    },
    { key: "reset", label: "Reset", emoji: "🔄", onClick: handleReset },
  ];

  return (
    <div>
      <div className="bg-[#042c71] ">
        <div className="max-w-[1200px] mx-auto py-20 ">
          <h1 className="text-5xl text-white font-medium ">Task 4</h1>
          <p className="mt-5 text-white">
            <Link className=" hover:text-[#FFAA19]" to="/">
              Home
            </Link>

            <span className="text-[#FFAA19]"> / Task 4</span>
          </p>
        </div>
      </div>

      <div className="my-10">
        <div className=" bg-[#F7F3EA] px-4 py-16 ">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="text-amber-500 text-xs font-bold  uppercase">
              Task 4
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-extrabold text-[#16214F] text-center mb-10">
            Click the Buttons
          </h1>

          {/* Card */}
          <div className="bg-white rounded-2xl  p-10 max-w-[650px] mx-auto">
            <div className="flex justify-center mb-6">
              <div
                className={`w-32 h-32 rounded-full bg-[#16214F] flex items-center justify-center text-6xl  duration-300 ${
                  jumping ? "-translate-y-4" : ""
                }`}
              >
                {face}
              </div>
            </div>

            {/* Status message */}
            <p className="text-[#16214F] text-lg font-medium text-center mb-10 min-h-[2rem]">
              {message}
            </p>

            {/* Star / heart icon row */}
            {(stars > 0 || hearts > 0) && (
              <div className="flex justify-center items-center gap-2 mb-6 text-3xl">
                {Array.from({ length: stars }).map((i) => (
                  <span key={`star-${i}`}>⭐</span>
                ))}
                {Array.from({ length: hearts }).map((i) => (
                  <span key={`heart-${i}`}>💗</span>
                ))}
              </div>
            )}

            {/* Buttons grid */}
            <div className="grid grid-cols-4 gap-3">
              {buttons.map((btn) => (
                <button
                  key={btn.key}
                  onClick={btn.onClick}
                  className="bg-amber-500   text-[#16214F] font-bold rounded-xl py-3.5 px-3 flex items-center justify-center gap-2  text-base"
                >
                  <span>{btn.emoji}</span>
                  <span>{btn.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Click history */}
          {history.length > 0 && (
            <div className="max-w-[650px] mx-auto mt-10">
              <h2 className="text-lg font-bold text-[#16214F] mb-4">
                What you clicked
              </h2>
              <div className="flex flex-col gap-3">
                {history.map((label, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl px-6 py-3 font-medium text-[#16214F]"
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Floating scroll-to-top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-amber-500 hover:bg-amber-400 text-[#16214F] w-12 h-12 rounded-xl shadow-lg flex items-center justify-center transition"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} strokeWidth={2.5} />
      </button>
    </div>
  );
};

export default Task_4;
