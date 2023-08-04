# Volta

A React app providing authentication

- useContext provides app-wide authentication status
- Login.js performs an async call to the backend API which returns either {"authentication": {"authenticated": false}} or {"authentication": {"user_name": "[A user name]","token": "[A token]", "authenticated": true}}
- UI changes based on authentication status
- A message is displayed of authentication fails
- Form validation fails if either input is isEmpty

Suggested improvements:

- Use of session on backend code to automatically log a user out after a set period of inactivity - would require regular polling to the back end to update activity status.
- Regular authentication check using 'token' and a user_id to prevent hacking of the front end code
- Error handling in case the back end API is unavailable
