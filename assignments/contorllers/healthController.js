import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/AsyncHanlder.js";

const healthcheck = asyncHandler(async (req, res) => {
  //TODO: build a healthcheck response that simply returns the OK status as json with a message
  const data = "ok";
  return res.status(200).json(new ApiResponse(200, data, "healthy server"));
});

export { healthcheck };
    