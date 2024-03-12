"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { UpgradeNow } from "./UpgradeNow";

type Chatbot = {
  name: string;
  iframeSrc: string;
};

const main: Chatbot[] = [
  {
    name: "Riddles",
    iframeSrc: "https://udify.app/chat/vbVMWoaO2LenBHCG",
  },
  {
    name: "Jokes",
    iframeSrc: "https://udify.app/chat/tK5KZbiS8HtkeZRf",
  },
  {
    name: "Would You Rather",
    iframeSrc: "https://udify.app/chat/hkUHyutgz4RDpneV",
  },
  {
    name: "Physical Activities",
    iframeSrc: "https://udify.app/chat/BuCHGmzWkasDEBr4",
  },
  {
    name: "Learning Activities",
    iframeSrc: "https://udify.app/chat/OYtchCXEyvAt76id",
  },
  {
    name: "Did You Know?",
    iframeSrc: "https://udify.app/chat/tciCUyz61QI6LDbp",
  },
  {
    name: "Explain Like I'm 5",
    iframeSrc: "https://udify.app/chat/GAzgcWPg2HbUwAgU",
  },
  {
    name: "Table Topics",
    iframeSrc: "https://udify.app/chat/mpstNPUzjhHo9QJ7",
  },
  {
    name: "Tongue Twisters",
    iframeSrc: "https://udify.app/chat/r9TCiP7WbvPte7HW",
  },
];

const premium: Chatbot[] = [
  {
    name: "Crafts",
    iframeSrc: "https://udify.app/chat/1YpVAO2IKau3JzMk",
  },
  {
    name: "Food",
    iframeSrc: "https://udify.app/chat/nfOzYzlGkXs0nDC3",
  },
  {
    name: "Coloring Books",
    iframeSrc: "https://udify.app/chat/mIEov1cqnEAF6f0t",
  },
];

export function ChatbotSelector({
  upgrade,
  plan,
}: {
  upgrade: boolean;
  plan?: string;
}) {
  const t = useTranslations();
  const [activeChatbot, setActiveChatbot] = useState<Chatbot | null>(null);
  const [showUpgrade, setShowUpgrade] = useState(
    plan !==
    (process.env.NEXT_PUBLIC_TIER2_M_PRODUCT_ID ||
      process.env.NEXT_PUBLIC_TIER2_Y_PRODUCT_ID),
  );
  return (
    <>
      {activeChatbot && !upgrade ? (
        <div className="min-h-[780px]">
          <button
            onClick={() => setActiveChatbot(null)} // Hide the iframe and show the chatbot buttons again
            className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
          >
            {t("dashboard.back")}
          </button>
          <iframe
            src={activeChatbot.iframeSrc}
            style={{ width: "100%", height: "700px" }} // Adjusted for simplicity
            className="bg-white"
            allow="microphone"
          ></iframe>
        </div>
      ) : (
        <div className="relative p-8">
          {upgrade && <UpgradeNow />}
          <h2>Main</h2>
          <div className="grid w-full gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {" "}
            {/* Adjust grid container */}
            {main.map((chatbot, index) => (
              <button
                key={index}
                onClick={() => setActiveChatbot(chatbot)} // Set the active chatbot on click
                className="flex h-16 cursor-pointer items-center gap-4 rounded-xl border-2 px-4 py-2"
              >
                <div className="h-2 w-2 rounded-full bg-slate-500"></div>
                <div className="flex flex-col">
                  <div className="text-base font-medium">{chatbot.name}</div>
                </div>
              </button>
            ))}
          </div>
          <hr className="my-8" />
          <h2>Premium</h2>
          <div className={`relative ${showUpgrade ? "p-8" : ""}`}>
            {showUpgrade && <UpgradeNow plan={plan} />}
            <div className="grid w-full gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {/* Adjust grid container for premium */}
              {premium.map((chatbot, index) => (
                <button
                  key={index}
                  onClick={() => setActiveChatbot(showUpgrade ? chatbot : null)} // Set the active chatbot on click
                  className="flex h-16 cursor-pointer items-center gap-4 rounded-xl border-2 px-4 py-2"
                >
                  <div className="h-2 w-2 rounded-full bg-slate-500"></div>
                  <div className="flex flex-col">
                    <div className="text-base font-medium">{chatbot.name}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
