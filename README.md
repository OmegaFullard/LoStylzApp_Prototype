# LoStylzApp Prototype

LoStylzApp is a lightweight prototype for a styling and outfit-planning mobile/web app. This repository contains the initial UI and prototype features to explore outfit creation, style suggestions, and quick lookbooks.

## Features

- Simple, clean prototype UI for creating and browsing outfits
- Save and organize outfits into collections/lookbooks
- Tag-based filtering and search for quick outfit discovery
- Lightweight data layer for prototyping flows (local storage / mock API)
- Designed for rapid iteration and user testing

## Preview

<img width="359" height="677" alt="StylistProfiles" src="https://github.com/user-attachments/assets/e7c35095-5168-47aa-85c2-2d948413df82" />
<img width="359" height="677" alt="StylistProfiles - Copy" src="https://github.com/user-attachments/assets/0b781261-6f6f-40a6-941d-5f97bd15a0fd" />
<img width="354" height="659" alt="Services" src="https://github.com/user-attachments/assets/58021678-a022-4140-aaed-5bdc0d96fd0e" />
<img width="355" height="681" alt="Home" src="https://github.com/user-attachments/assets/2ae24318-d6d5-4f8d-a553-f5c8760eb3bd" />
<img width="371" height="692" alt="Booking" src="https://github.com/user-attachments/assets/44eb4741-08c9-4d6c-908f-db57432abb4c" />


## Getting started


Prerequisites:

- Node.js (16+ recommended) and npm or Yarn

Node.js Commands 

1. Running JavaScript Files
node filename.js


Runs a JavaScript file using Node.js.

node -v


Shows the installed Node.js version.

node


Starts the REPL (interactive Node.js shell).

2. Useful Node.js CLI Options
node --watch app.js


Automatically restarts the script when files change (Node 18+).

node --inspect app.js


Starts the app in debug mode (connect via Chrome DevTools).

node --trace-warnings app.js


Shows detailed warning traces.

node --max-old-space-size=4096 app.js


Increases memory limit (in MB).

3. NPM (Node Package Manager) Commands
npm init


Creates a package.json file interactively.

npm init -y


Creates a default package.json without prompts.

npm install package-name


Installs a package locally.

npm install -g package-name


Installs a package globally.

npm uninstall package-name


Removes a package.

npm update


Updates all packages.

npm list


Lists installed packages.

4. Running Scripts from package.json
npm run script-name


Runs a script defined in package.json.

Example:

"scripts": {
  "start": "node app.js",
  "dev": "node --watch app.js"
}

Run with:

npm run dev

5. Yarn (Alternative to NPM)
yarn init
yarn add package-name
yarn remove package-name
yarn run script-name

- React Native/Expo project: install Expo CLI or follow platform-specific setup

React Native CLI Commands:

Create a New Project
npx react-native init MyApp


Creates a fresh React Native project named MyApp.

Run App on Android Emulator/Device
npx react-native run-android


Builds and launches the app on an Android device or emulator.

Run App on iOS Simulator (macOS only)
npx react-native run-ios


Builds and launches the app on the iOS simulator.

Start Metro Bundler
npx react-native start


Starts the JavaScript bundler for live reloading.

Clean Build Cache (helpful for fixing weird build issues)
cd android && ./gradlew clean && cd ..

Link Native Dependencies (for older RN versions < 0.60)
npx react-native link

Run locally:

1. Clone the repo

   git clone https://github.com/OmegaFullard/LoStylzApp_Prototype.git
   cd LoStylzApp_Prototype

2. Install dependencies

   npm install
   # or
   yarn install

3. Start the dev server / app

   npm start
   # or for Expo projects
   expo start

Build for production or platform-specific packaging per your framework's instructions.

## Project structure

- /src — application source code
- /Images — images and static assets
- /Design — documentation and design notes
- /AppFlowVideo — application flow
- README.md — project overview (this file)

## Development

- Use feature branches for new work: `feature/<short-description>`
- Keep commits small and focused with clear messages
- Run linters / formatters before creating pull requests

## Contributing

Contributions are welcome. To contribute:

1. Fork the repo
2. Create a feature branch
3. Open a pull request with a clear description of your changes

Please include screenshots and steps to reproduce for visual changes.

## License

See the LICENSE file in this repository. If there is no LICENSE yet, consider adding one (MIT is a permissive default).

## Contact

Maintainer: OmegaFullard
GitHub: https://github.com/OmegaFullard

