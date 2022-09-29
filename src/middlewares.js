export const localsMiddleware = (req, res, next) => {
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  console.log(res.locals);
  res.locals.siteName = "Wetube";
  res.locals.loggedInUser = req.session.user;

  next();
};
