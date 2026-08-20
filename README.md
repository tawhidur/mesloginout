# Login/Logout E2E Tests

Cypress test suite for login, logout, and credential error-handling flows.

[![Portfolio](https://img.shields.io/badge/Portfolio-tawhidur.github.io-111111?style=for-the-badge&logo=github)](https://tawhidur.github.io/)

## Features
- P0: login → logout → redirect verified
- P1: Empty and invalid credential error assertions
- Credentials loaded from environment (never hardcoded)

## Setup
```bash
git clone https://github.com/tawhidur/mesloginout.git
cd mesloginout && npm install
cp cypress.env.example.json cypress.env.json
```

*[Tawhidur Rahman](https://tawhidur.github.io/) — Senior SQA Lead*
