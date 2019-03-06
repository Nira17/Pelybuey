function isAuthVete(req, res, next) {
   if (req.user && req.user.veterinario) {
      return next();
   }
   return res.status(403).json(new Error("Not Authorized"))

}

module.exports = isAuthVete;