# team3
This is the repository for team 3
### 1. Programming Language
- **Selected**: JavaScript/Node.js

### 2. Toolchain / Runtime Environment
- **Selected**: Node.js

### 3. Testing Framework
- **Selected**: Jest

### 4. Continuous Integration Solution
- **Selected**: GitHub Actions

### 5. Static Analysis Solution
- **Selected**: ESLint

### 6. Code Formatting Solution
- **Selected**: Prettier

### 7. Package Manager Solution
- **Selected**: npm

### 8. Git Repo Template
Create a repository on GitHub and initialize it with the configurations:

### 9. Pre-configured Static Analysis & Code Formatting
- **ESLint** and **Prettier** should be configured as strictly as possible.

### 10. “Hello World” Program
- Create an `index.js` file with the following content:
```javascript
console.log('Hello, World!');
```

### 11. Basic Test
- Create a test file, say `sum.test.js`:
```javascript
const sum = (a, b) => a + b;
test('adds 2 + 2 to equal 4', () => {
  expect(sum(2, 2)).toBe(4);
});
```

### 12. CI Pipeline to Run Tests
- Configure a GitHub Actions workflow (e.g., `.github/workflows/nodejs.yml`), that runs tests on push and pull request events.

### 13. README.md
- Include instructions on:
  - How to install dependencies.
  - How to run the program.
  - How to run tests.
  - A brief overview of the repository structure and configurations.

### 14. `.gitignore`
- Your `.gitignore` should exclude at least the following:
```plaintext
node_modules/
*.log
```

### 15. License
- Choose an appropriate license (e.g., MIT, Apache, GPL, etc.) and add a `LICENSE` file in the root of the repository.
- You can use GitHub’s license templates or generate them using online tools.

### Steps to Implement:
#### Local Setup
1. **Initialize Node.js Project:** Use `npm init` to create your `package.json`.
2. **Install and Configure Jest, ESLint, and Prettier:** Follow installation and strict configuration as per guidelines or official documentation.
3. **Create Code and Test Files:** Implement “Hello World” and a basic test as mentioned.
   
#### GitHub Setup
1. **Create a Repository:** Initialize with README, .gitignore (Node), and a license of your choice.
2. **Push Local Changes to GitHub:**
   ```sh
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin [your-repo-url]
   git push -u origin main
   ```
3. **GitHub Actions:** Add a workflow file to set up CI.
