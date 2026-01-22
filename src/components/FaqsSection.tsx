import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What is LogiGuest?",
    answer:
      "LogiGuest is an interactive web-based game designed to test your logic and knowledge through various fun and challenging game modes.",
  },
  {
    id: 2,
    question: "How do I start playing?",
    answer:
      "To start playing, simply choose a game mode from the homepage, read the instructions and follow the prompts to answer questions.",
  },
  {
    id: 3,
    question: "What game modes are available?",
    answer:
      "We offer several game modes, including classic, challenge, multiplayer, endless and more! Each mode has unique rules and scoring systems.",
  },
  {
    id: 4,
    question: "How are scores calculated?",
    answer:
      "Scores are calculated based on the number of correct answers and the time taken to answer each question. The faster you answer correctly, the higher your score!",
  },
  {
    id: 5,
    question: "Can I play with friends?",
    answer:
      "Absolutely! You can play with friends online and compete in multiplayer modes.",
  },
  {
    id: 6,
    question: "What are lifelines?",
    answer:
      "Lifelines are helpful tools you can use during the game. They include options like removing two incorrect answers or getting insights into the probability of each answer.",
  },
  {
    id: 7,
    question: "Is there a practice mode?",
    answer:
      "Yes! Practice mode lets you try questions without affecting your score, perfect for learning and improving.",
  },
];

const FaqsSection = () => {
  // Store an array of open FAQ IDs
  const [openIds, setOpenIds] = useState<number[]>([]);

  const toggle = (id: number) => {
    if (openIds.includes(id)) {
      // Close it if already open
      setOpenIds(openIds.filter((openId) => openId !== id));
    } else {
      // Open it without closing others
      setOpenIds([...openIds, id]);
    }
  };

  return (
    <section className="w-full bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* FAQ heading */}
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          FAQs
        </h2>

        <div className="space-y-4 mt-8 lg:mt-22">
          {faqs.map((faq) => (
            <div key={faq.id} className="overflow-hidden">
              {/* Questions */}
              <button
                onClick={() => toggle(faq.id)}
                className="w-full flex justify-between items-center px-6 py-4 text-left"
              >
                <span className="lg:text-xl font-semibold text-white">
                  {faq.question}
                </span>

                {/* Triangle Icon */}
                <svg
                  className={`w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white transform transition-transform duration-300 ${
                    openIds.includes(faq.id) ? "rotate-180" : "rotate-0"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 8l5 5 5-5H5z" />
                </svg>
              </button>

              {/* Answers */}
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIds.includes(faq.id) ? "max-h-96 py-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-300 lg:text-md">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqsSection;
