import { db } from "database";
import { z } from "zod";
import { protectedProcedure } from "../../../trpc/base";

export const featureRecent = protectedProcedure
    .input(
        z.object({
            userId: z.string(),
        }),
    ).mutation(async ({ input: { userId } }) => {

        const userRecent = await db.chatLog.findMany({
            where: {
                userId: userId
            }
        });

        return userRecent
    });