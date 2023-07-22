# Doar – Responsive React Admin Template
1. 원작자: HasThemes
2. 릴리즈: 2023년도 04월 26일

## Template features
1. Build on React Platform (v18.0.2)
2. Lerna Monorepo Architecture
3. Bulletproof UI Components with Storybook
4. All Components are written in Strict Typescript
5. Global State Managed by Redux
6. Components Build On Styled Components & Styled System
7. Reuseable Components
8. Form Validation Check by React Hook Form
9. Beautiful Chats Made by ChartJS and Apexcharts
10. Interactive Maps
11. React Hooks used
12. No jQuery Dependency
13. 4 Unique Home Versions
14. 5 Unique Apps
15. Responsive Layout
16. Google Font & Custom Font
17. Font-Awesome & React Feather icon
18. Fully compatible for all major browsers such as Firefox, Safari, Chrome, Vivaldi, Microsoft Edge
19. Well Documented
20. 100% valid W3 web standards.
21. Beautiful and Unique Design
22. Life Time Free Update
23. Amazing 5 stars support
24. Best Developer Experience

## Node.js, Yarn and Lerna
    npm install --global yarn
    yarn --version
    npm install --global lerna

    yarn bootstrap //node_modules폴더가 만들어진다.

    yarn start:main //Main Template's Development server (3008포트)
    yarn build:main //Main Template's Build 
    yarn serve:main //Main Template's Static Server (5000번포트)
    yarn storybook //스토리북 (9001포트)
    yarn serve-storybook //UI Element's Static Server (8080포트)
    yarn build:components //UI Elements Package Build
    yarn lint:fix //Fix Linting and Prettier Error
    yarn clean //remove your node_modules and other unnecessary files

## Lerna 중요 Scripts
    //Add npm package to a local package
    lerna add npm_pacakge --scope=local_package
    lerna add npm_pacakge --scope=local_package -D

    //Example:
    lerna add moment --scope=@doar/main

    //Remove npm package from a local package
    lerna exec --scope=local_package yarn remove npm_package

    //Example:
    lerna exec --scope=@doar/main yarn remove moment 
