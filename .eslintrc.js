module.exports = {
    "extends": ["standard", "plugin:jest/recommended"],
    "plugins": ["react"],
    "rules": {
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars":
        "error"
   },
   "globals": {
       "fetch": true
   }
};