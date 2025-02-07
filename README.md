# Config 
- added a .env.local file for storing API Path
    - NEXT_PUBLIC_  prefix, help us to access the variable in both the server and client sides
    - also, helps to ensure NOT to expose sensitive info to client
- for global access, created a config file under utils folder
- we can define an alternative domain in this config for local development

# Project Variables
- Access the global API_URL in Register form

# Notification
- installed react-toastify

# Register form [http://localhost:3000/register]
- tailwind
- firstname, lastname, email, password fields added
- gender not found in entity
- api call prevent by CORS policy [tried with allow-origin as *]

# Login form
- tailwind
