# Login/Logout E2E Tests

Cypress test suite validating login, logout, and credential error-handling flows.

[![Portfolio](https://img.shields.io/badge/Portfolio-tawhidur.github.io-111111?style=for-the-badge&logo=github&logoColor=white)](https://tawhidur.github.io/)

## Features
- P0: Full login → authenticated state → logout → redirect verification
- P1: Empty credential error message assertion
- P1: Invalid credential rejection assertion
- Credentials and base URL loaded from environment (never hardcoded)

## Installation

```bash
git clone https://github.com/tawhidur/mesloginout.git
cd mesloginout
npm install
cp cypress.env.example.json cypress.env.json
# Edit cypress.env.json with BASE_URL, USERNAME, PASSWORD
```

*Built by [Tawhidur Rahman](https://tawhidur.github.io/)*
