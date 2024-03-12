import { db } from "database";
import { protectedProcedure } from "../../../trpc/base";

export const featureChat = protectedProcedure.query(async ({ ctx }) => {
    try {
        const featuredData = await db.featuredChat.findMany({
            where: {
                featured: true,
                tier: {
                    in: ["1", "2"]
                }
            }
        });

        if (featuredData && Array.isArray(featuredData) && featuredData.length > 0) {
            return featuredData;
        } else {
            return []
        }
    } catch (error) {
        console.error(error)
        return []
    }
});
