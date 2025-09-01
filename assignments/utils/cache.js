import redisClient from "../redisClient.js";

export const withCache = async (key, fetchFunction, ttl = 300) => {
  try {
    const cached = await redisClient.get(key);
    if (cached) {
      return {
        fromCache: true,
        data: JSON.parse(cached),
      };
    }

    const result = await fetchFunction();
    await redisClient.setEx(key, ttl, JSON.stringify(result));

    return {
      fromCache: false,
      data: result,
    };
  } catch (err) {
    console.error("Redis cache error:", err);

    const result = await fetchFunction();
    return {
      fromCache: false,
      data: result,
    };
  }
};
