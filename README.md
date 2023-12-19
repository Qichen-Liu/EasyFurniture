# EasyFurniture - Team 3 Software Design

[![Continuous Integration](https://github.com/Qichen-Liu/team3/actions/workflows/continues_integration.yml/badge.svg)](https://github.com/Qichen-Liu/team3/actions/workflows/continues_integration.yml)

## Project Overview

**EasyFurniture** is a user-friendly web application designed to facilitate the buying and selling of used furniture. Our goal is to connect individuals seeking affordable, high-quality furniture options with those looking to sell their gently-used items. This project is managed and developed by Team 3, consisting of Qichen Liu, Zhisheng Hua, Eden Wu, and Zetao Wang.

## Features

- **Responsive Design**: Adapts to smartphones, tablets, and desktops.
- **Dynamic Routing**: Seamless navigation with React Router.
- **Secure Authentication**: Using JWT tokens and OAuth protocols.
- **Robust Backend**: RESTful services, Google OAuth, MongoDB integration.
- **User-Friendly UI**: Intuitive search, filter options, and detailed listings.
- **Advanced Security**: Data encryption, CSRF protection, and regular security audits.

## Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Qichen-Liu/team3.git
   cd team3
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

## Usage

- **Start the application:**
  ```sh
  npm start
  ```
  This will launch the EasyFurniture web application on your local server.

- **Run tests:**
  ```sh
  npm test
  ```
  This command runs unit and integration tests to ensure code reliability.

## Requirements

- **Node.js**: The runtime environment for running the application.
- **MongoDB**: A running instance of MongoDB is required for database operations.
- **Modern Web Browser**: Chrome, Firefox, Safari, or Edge for the best user experience.

## Contributing

We welcome contributions! If you're interested in helping improve EasyFurniture, please follow these steps:

1. **Fork the repository.**
2. **Create a new branch:** `git checkout -b my-new-feature`.
3. **Make your changes and commit them:** `git commit -am 'Add some feature'`.
4. **Push to the branch:** `git push origin my-new-feature`.
5. **Submit a pull request.**

## Security

We take the security of our application seriously. If you discover any security-related issues, please email one of the team members instead of using the issue tracker.

## Configuration Reminder for Google Authentication

**Important**: If you are setting up this project for development or production, you need to configure Google Authentication with your own Google account credentials.
In your project's configuration file(configs/config.js), replace the **GOOGLE_CLIENT_ID** and **GOOGLE_CLIENT_SECRET** values with the ones obtained from the Google Developer Console.
Remember to keep your client ID secure and do not commit it to public repositories.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Team Members

- **Qichen Liu (ql2326)** - GitHub Repository Manager & Backend Developer
- **Zhisheng Hua (zh2667)** - Backend Developer & Documentation
- **Eden Wu (yfw215)** - DevOps (CI/CD) Developer & Backend Developer
- **Zetao Wang (zw3478)** - Frontend Developer & Unit Test

## Contact

For any queries regarding EasyFurniture, please reach out to us through our GitHub profiles linked above.

---

Thank you for considering EasyFurniture for your furniture buying and selling needs! 🛋️🌟