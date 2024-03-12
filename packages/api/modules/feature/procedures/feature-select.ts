import { db } from "database";
import { z } from "zod";
import { protectedProcedure } from "../../../trpc/base";

export const featureSelect = protectedProcedure
    .input(
        z.object({
            userId: z.string(),
            chatId: z.string()
        }),
    )
    .mutation(async ({ input: { userId, chatId }, ctx: { abilities } }) => {
        console.log(userId, "userId")
        console.log(chatId, "chatId")
        try {
            const res = await db.userFavorites.create({
                data: {
                    chatId: chatId,
                    userId: userId,
                },
            });
            console.log(res, "res")
        } catch (error) {
            console.log(error, "error")
        }

    });