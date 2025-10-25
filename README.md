
# 🧪 Test Automation Coding Challenge – CoinRanking API

![Test Status](https://github.com/nizar0rchid/test-automation-challenge/actions/workflows/test.yml/badge.svg)


---
This project demonstrates **REST API test automation** using **Node.js**, following **Clean Architecture principles**.  
It tests the **CoinRanking API**, which provides cryptocurrency data, and focuses on writing **clean, maintainable, and scalable code** for automated API tests.

## Overview

This project covers:

- Testing endpoints that require authentication (API key)
- Positive and negative test cases
- Response time validation
- Clean separation of concerns between domain, services, adapters, and tests

**API Used:** [CoinRanking API](https://developers.coinranking.com/api/documentation)

---

## ⚡ GitHub Actions Workflow

This project includes a CI/CD pipeline to run tests **manually** or **on push** using **GitHub Actions**.

## 🔑 Setup GitHub Secret

Before running the workflow:

1.  Go to your repository → **Settings → Secrets and variables → Actions → New repository secret**
2.  Add:
    -   **Name:** COINRANKING_API_KEY
    -   **Value:** your valid API key

## Architecture

The project uses **Clean Architecture**:

- **Domain:** Core models/entities (`Coin`) and validation logic  
- **Use Cases:** Encapsulates API interactions and business logic (`CoinService`)  
- **Adapters:** HTTP client (`Axios`) abstraction (`HttpClient`)  
- **Tests:** Orchestrates use cases and validates API behavior  

**Benefits:** High modularity, testability, maintainability, and scalability.

---
## 📁 Project Structure


    test-automation-challenge/  
    │  
    ├── src/  
    │ ├── domain/  
    │ │ └── coin.js # Coin entity and validation  
    │ │  
    │ ├── usecases/  
    │ │ └── coinService.js # Business logic and API interaction  
    │ │  
    │ ├── adapters/  
    │ │ └── httpClient.js # Axios wrapper  
    │ │  
    │ └── config/  
    │ └── index.js # Configuration & API key  
    │  
    ├── tests/  
    │ └── coin.test.js # Mocha/Chai automated tests  
    │  
    ├── package.json  
    ├── .env  
    └── README.md
---
## Setup

1. Clone the repository:

```bash
git clone <repo-url>
cd test-automation-challenge
```
2. Install dependencies:
```bash
npm install
```
2. Create `.env` file at the root:
```bash
COINRANKING_API_KEY=your_api_key_here
BASE_URL=https://api.coinranking.com/v2
```
## Running Tests

Run all tests with:
```bash
npm test
```

## Automated Test Cases

| ID   | Endpoint       | Description                         | Expected Result |
|------|----------------|-------------------------------------|----------------|
| TC001 | `/coins`       | Fetch list of coins                 | Status 200, response array not empty, all coins valid |
| TC002 | `/coin/:uuid`  | Fetch single coin by UUID           | Status 200, coin fields valid |
| TC003 | `/coins`       | Validate response time              | Response time < 2 seconds |

---

## Tech Stack

- **Node.js** – JavaScript runtime  
- **Axios** – HTTP client abstraction  
- **Mocha** – Test runner  
- **Chai** – Assertions  
- **Dotenv** – Environment variable management  

---

## Notes

- Ensure you have a valid **CoinRanking API key**.  
- The project is designed for **Node.js 18+** and modern ES module syntax.  
---

## Author
**Nizar Ferchichi** | Software Engineer | Mobile & Full-Stack Developer
📧 nizar.ferchichi99@outlook.com | LinkedIn: [linkedin.com/in/nizar-ferchichi](http://linkedin.com/in/nizar-ferchichi "linkedin.com/in/nizar-ferchichi") | GitHub: [github.com/nizar0rchid](http://github.com/nizar0rchid "github.com/nizar0rchid")
