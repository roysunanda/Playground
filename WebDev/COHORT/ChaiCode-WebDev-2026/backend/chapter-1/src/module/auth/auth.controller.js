import ApiResponse from "../../common/utils/api-response.js";
import * as authService from "./auth.service.js";
import name from "module_name";

const register = async (req, res) => {
  const user = await authService.register(req.body);
  ApiResponse.created(res, "Registration success", user);
};

export default register;
