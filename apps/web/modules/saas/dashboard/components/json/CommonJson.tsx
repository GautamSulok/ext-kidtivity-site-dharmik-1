// Favorite section json type define here ...
type Favoritesbot = {
    title: string;
    description: string;
    imageSrc: string;
    is_favorite: boolean;
};

// Favorite section json here ...
const favoriteData: Favoritesbot[] = [
    {
        title: "T-Shirt Painting",
        description: "T-Shirt painting unleashes creativity on wearable canvases into masterpieces.",
        imageSrc: "/images/tshirt-painting.webp",
        is_favorite: true
    },
    {
        title: "T-Shirt Painting",
        description: "T-Shirt painting unleashes creativity on wearable canvases into masterpieces.",
        imageSrc: "/images/tshirt-painting.webp",
        is_favorite: true
    },
    {
        title: "T-Shirt Painting",
        description: "T-Shirt painting unleashes creativity on wearable canvases into masterpieces.",
        imageSrc: "/images/tshirt-painting.webp",
        is_favorite: true
    },
    {
        title: "T-Shirt Painting",
        description: "T-Shirt painting unleashes creativity on wearable canvases into masterpieces.",
        imageSrc: "/images/tshirt-painting.webp",
        is_favorite: true
    },
    {
        title: "T-Shirt Painting",
        description: "T-Shirt painting unleashes creativity on wearable canvases into masterpieces.",
        imageSrc: "/images/tshirt-painting.webp",
        is_favorite: true
    }
];

// Recenetly section json type define here ...
type RecentalyUsebot = {
    title: string;
    date: string;
};

// Recenetly section json here ...
const recentUsedData: RecentalyUsebot[] = [
    {
        title: "T-Shirt Painting",
        date: "02/26/24"
    },
    {
        title: "T-Shirt Painting",
        date: "02/26/24"
    },
    {
        title: "T-Shirt Painting",
        date: "02/26/24"
    },
    {
        title: "T-Shirt Painting",
        date: "02/26/24"
    },
    {
        title: "T-Shirt Painting",
        date: "02/26/24"
    },
    {
        title: "T-Shirt Painting",
        date: "02/26/24"
    }
];
export { favoriteData, recentUsedData };

