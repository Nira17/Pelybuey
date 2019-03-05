function isAuthenticated(req, res, next) {
   if (!req.user) {
      return res.status(403).json(new Error("Not Authorized"))
   }

   return next();
}

module.exports = isAuthenticated;