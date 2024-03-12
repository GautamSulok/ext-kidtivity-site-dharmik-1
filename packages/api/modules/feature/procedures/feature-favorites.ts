import { db } from "database";
import { z } from "zod";
import { publicProcedure } from "../../../trpc/base";

export const featureFavorites = publicProcedure
    .input(
        z.object({
            userId: z.string(),
        }),
    ).mutation(async ({ input: { userId }, ctx: { abilities } }) => {

        const userFavorites = await db.userFavorites.findMany({
            where: {
                userId
            },
        });

        const chatIds = userFavorites.map(favorite => favorite.chatId);

        const featuredChats = await db.featuredChat.findMany({
            where: {
                chatId: {
                    in: chatIds
                }
            }
        });

        return featuredChats ?? [];
    });