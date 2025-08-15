// Purpose: Middleware to check if the user has the required role to access the route.
const roleMiddleware = (roles) => {
    return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
        return res.status(403).json({ message: "Access denied." });
      }
      next();
    };
  };
  
  module.exports = roleMiddleware;
  