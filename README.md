# angular-tambola

## Support for persistent session
==================================
Design choices: The stateful aspect of the webapp is stored in localStorage over storing it on server and using cookies for session identification as this involves less coding and solves the problem being in the domain of angular.

Changes: game.service.ts, prize.component.ts
