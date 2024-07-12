# Linking multiple micro-frontend modules together of an application
**An application with multiple modules that are linked together using micro-frontend**

Sub-modules of the application:
1. Container (uses React)
2. Marketing (uses react)
3. Authemtication (uses React)
4. Dashboard (uses Vue)

Criterias that this micro-frontend architecture follows without fail
1. Zero Coupling between child projects
2. NO importing of functions/objects/classes etc
3. NO shared state between child projects
4. Libraries are shared between child projects only using Module Federation
