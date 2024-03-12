"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

type Chatbot = {
    iframeId: string;
};

export function Chatbotiframe() {
    const t = useTranslations();
    const [activeChatbot, setActiveChatbot] = useState<Chatbot | null>(null);
    const [chatbotId, setChatbotId] = useState<string>('');
    useEffect(() => {
        const part = window.location.href;
        const partSplit = part.split('/');
        const id = partSplit[partSplit.length - 1];
        setChatbotId(id);
    }, []);

    return (
        <div className="container max-w-6xl py-5">
            <div className="container max-w-6xl">
                <div className="min-h-[780px]">
                    <div className="mb-3">
                        <a
                            className="rounded bg-blue-500 px-4 py-2 text-white"
                            href="/app/dashboard"
                        >
                            {t("dashboard.back")}
                        </a>
                    </div>
                    <iframe
                        src={`https://udify.app/chat/${chatbotId}`}
                        style={{ width: "100%", height: "700px" }} // Adjusted for simplicity
                        className="bg-white"
                        allow="microphone"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
