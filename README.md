# Next.js Project Setup and Basics

This project is a comprehensive introduction to setting up and working with Next.js, TypeScript, and Tailwind CSS. It guides you through creating a modern web application with reusable components, routing, API integration, and proper project structure. The project covers fundamental concepts from initial setup to building interactive components and fetching data from external APIs.

## Learning Objectives
By completing this project, you will:

- Understand how to scaffold a Next.js application with TypeScript and Tailwind CSS
- Learn to implement basic routing in Next.js using the Pages Router
- Create reusable components with TypeScript interfaces
- Implement interactive UI elements like modals and buttons
- Fetch and display data from external APIs
- Structure a Next.js project following best practices
- Work with component props and state management
- Build responsive layouts with navigation

## Requirements
- Node.js (v16 or later)
- npm or yarn package manager
- Basic knowledge of React and TypeScript
- Familiarity with HTML/CSS
- Git and GitHub account
- Code editor (VS Code recommended)

## Best Practices

### Project Structure:
- Organize components by domain (layout, common, etc.)
- Keep interfaces in a dedicated folder
- Separate pages according to routes

### Component Design:
- Create reusable, modular components
- Use TypeScript interfaces for props
- Follow single responsibility principle

### Code Quality:
- Use ESLint for linting
- Maintain consistent code style
- Add meaningful comments where necessary

### Performance:
- Optimize API calls
- Implement lazy loading where appropriate
- Use Tailwind CSS for efficient styling

### Documentation:
- Maintain a clear README
- Document component props and usage
- Keep commit messages descriptive

## Project Structure
```
alx-project-0x02/
├── components/
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── PostCard.tsx
│   │   ├── PostModal.tsx
│   │   └── UserCard.tsx
│   └── layout/
│       └── Header.tsx
├── interfaces/
│   └── index.ts
├── pages/
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── about.tsx
│   ├── home.tsx
│   ├── index.tsx
│   ├── posts.tsx
│   └── users.tsx
├── public/
│   └── assets/
│       └── images/
├── styles/
│   └── globals.css
├── .eslintrc.json
├── next.config.js
├── package.json
├── README.md
└── tsconfig.json
```

## Implementation Guide
1. Start by setting up the Next.js project with TypeScript and Tailwind CSS
2. Implement basic routing with the Pages Router
3. Build reusable components one by one, starting with simple ones (Card, Button)
4. Progress to more complex components (Modal, PostCard, UserCard)
5. Implement the Header component for navigation
6. Fetch and display data from JSONPlaceholder API
7. Test each component and page as you build them

## Expected Outcomes
- A fully functional Next.js application
- Reusable components that follow TypeScript best practices
- Proper routing between different pages
- API integration to fetch and display data
- Responsive design using Tailwind CSS
- Clean, well-organized codebase

## 📝 Project Assessment (Hybrid)
Your project will be evaluated primarily through manual reviews. To ensure you receive your full score, please:

✅ Complete your project on time
📄 Submit all required files
🔗 Generate your review link
👥 Have your peers review your work

An auto-check will also be in place to verify the presence of core files needed for manual review.

⏰ **Important Note**
If the deadline passes, you won't be able to generate your review link—so be sure to submit on time!

We're here to support your learning journey. Happy coding! ✨