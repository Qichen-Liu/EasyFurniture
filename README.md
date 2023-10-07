# team3
[![Continuous Integration](https://github.com/Qichen-Liu/team3/actions/workflows/continues_integration.yml/badge.svg)](https://github.com/Qichen-Liu/team3/actions/workflows/continues_integration.yml) 
  
This is the repository for team 3
### 1. Programming Language
- **Selected**: JavaScript/Node.js

### 2. Toolchain / Runtime Environment
- **Selected**: Node.js

### 3. Testing Framework
- **Selected**: Mocha

### 4. Continuous Integration Solution
- **Selected**: GitHub Actions

### 5. Static Analysis Solution
- **Selected**: ESLint

### 6. Code Formatting Solution
- **Selected**: Prettier

### 7. Package Manager Solution
- **Selected**: npm

### 8. Pre-configured Static Analysis & Code Formatting
- **ESLint** and **Prettier** should be configured as strictly as possible.

### 9. “Hello World” Program
- `src/helloWorld.js` file:
```javascript
console.log('Hello, World!');
```

### 10. Basic Test
- `test/test.js`:
```javascript
const sum = (a, b) => a + b;
test('adds 2 + 2 to equal 4', () => {
  expect(sum(2, 2)).toBe(4);
});
```

### 11. License
- MIT license

### 12. Usage
- install required modules:
  ```sh
  npm install
  ```
- run helloWorld.js:
  ```sh
  npm run helloworld
  ```
- run test for 2 + 2 = 4:
  ```sh
  npm test
  ```
- run prettier:
  ```sh
  npm run format
  ```
- run ESlint:
  ```sh
  npm run lint
  ```
