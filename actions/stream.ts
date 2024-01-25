"use server";

import { getSelf } from "@/lib/get-self";
import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";
import { Stream } from "@prisma/client";

export const updateStream = async (values: Partial<Stream>) => {
  try {
    const self = await getSelf();

    const selfStream = await db.stream.findUnique({
      where: {
        userId: self!.id,
      },
    });

    if (!selfStream) {
      throw new Error("Stream Not Found");
    }

    const validValues = {
      thumbnailUrl: values.thumbnailUrl,
      name: values.name,
      isChatEnabled: values.isChatEnabled,
      isChatDelayed: values.isChatDelayed,
      isChatFollowersOnly: values.isChatFollowersOnly,
    };

    const stream = await db.stream.update({
      where: {
        id: selfStream.id,
      },
      data: {
        ...validValues,
      },
    });

    revalidatePath(`/u/${self?.username}/chat`);
    revalidatePath(`/u/${self?.username}`);
    revalidatePath(`/${self?.username}`);

    return stream;
  } catch (error) {
    throw new Error("stream not found");
  }
};
