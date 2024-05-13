const asyncHandler = (requesteHandler) => {
  (req, res, next) => {
    Promise.resolve(requesteHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };
