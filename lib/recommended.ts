import { db } from "./db";
import { getSelf } from "./get-self";

export const getRecommended = async () => {
  const self = await getSelf();

  let userId;
  let users = [];

  try {
    userId = self?.id;
  } catch {
    userId = null;
  }

  if (userId) {
    users = await db.user.findMany({
      where: {
        NOT: [
          {
            id : userId
          },
          {
            followedBy: {
              some: {
                followerId : userId
              }
            }
          },
          {
            blocking: {
              some: {
                blockedId : userId
              }
            }
          }
        ]
      },
      
      orderBy: {
        createdAt: "desc",
      },
      include: {
        stream : true
      }
    });
  } else {
    users = await db.user.findMany({
      include: {
        stream : true
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  return users;
};
