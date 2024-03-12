"use client"
import { Tabs, TabsList, TabsTrigger } from '@ui/components/tabs';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

type Chatbot = {
    chatId: string;
};

type FeatureData = {
    chatId: string;
    title: string;
    description: string;
    image: string;
    featured: boolean;
    tier: string;
    created_at: string;
    updated_at: string;
};

type recentData = {
    chatId: string;
    userId: string;
    open_at: Date;
};

const FeaturedSectionTabs = async ({
    children
}: {
    children: React.ReactNode;
}) => {
    const t = useTranslations();
    const [activeTab, setActiveTab] = useState("featured");

    // const [activeChatbot, setActiveChatbot] = useState<Chatbot | null>(null);

    // // open chatbot function
    // function activeChatbotClick(feature: any) {
    //     setActiveChatbot(feature);
    // }

    // useEffect(() => {
    //     if (activeChatbot && upgrade) {
    //         redirect(`/app/chatbot/${activeChatbot?.chatId}`);
    //     }
    // }, [activeChatbot])

    return (
        <div>
            <Tabs value={activeTab} onValueChange={(tab) => setActiveTab(tab)}>
                <TabsList className="mb-4 flex-wrap justify-start" noBorder>
                    <TabsTrigger value="featured" className='rounded-sm px-4 py-2'>
                        {t("dashboard.features.featured")}
                    </TabsTrigger>
                    <TabsTrigger value="favorites" className='rounded-sm px-4 py-2'>
                        {t("dashboard.features.favorites")}
                    </TabsTrigger>
                    <TabsTrigger value="recently" className='rounded-sm px-4 py-2'>
                        {t("dashboard.features.recently")}
                    </TabsTrigger>
                    <TabsTrigger value="all" className='rounded-sm px-4 py-2'>
                        {t("dashboard.features.all")}
                    </TabsTrigger>
                </TabsList>
                {children}
            </Tabs>
        </div>
    )
}

export default FeaturedSectionTabs