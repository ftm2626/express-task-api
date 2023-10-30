const { CustomeApiError } = require("../errors/custom-error");

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomeApiError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(500).json({ msg: "something went wrong! try again" });
};

module.exports = { errorHandler };
