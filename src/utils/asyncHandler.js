const asyncHandler = (requesteHandler) => {
  return (req, res, next) => {
    Promise.resolve(requesteHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };
