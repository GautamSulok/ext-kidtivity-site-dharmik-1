import { db } from "database";
import { z } from "zod";
import { protectedProcedure } from "../../../trpc/base";

export const featireRecentOpen = protectedProcedure
    .input(
        z.object({
            chatId: z.string(),
            userId: z.string(),
            title: z.string(),
        })
    ).mutation(async ({ input: { chatId, userId, title }, ctx: { abilities } }) => {

        await db.chatLog.create({
            data: {
                chatId: chatId,
                userId: userId,
                title: title
            },
        });

        return true
    })