# Dark Mode Toggle with Vite React and ShadCN Tailwind

This repository demonstrates a simple dark mode toggle implementation in a React app built with Vite. The project uses **ShadCN UI components** and **Tailwind CSS** to style the application and manage the dark mode theme.

## Features

- 🌙 Toggle between light and dark modes.
- 🎨 Styled with ShadCN Tailwind components.
- ⚡ Built with Vite for fast development.

## Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/dark-mode-toggle
   cd dark-mode-toggle
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

## Usage

1. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. Open your browser and navigate to `http://localhost:5173`.

## Build for Production

To build the project for production:

```bash
npm run build
# or
yarn build
```

The output will be in the `dist` directory.

## File Structure

```plaintext
src/
├── components/
│   ├── DarkModeToggle.jsx  # The toggle button for dark mode
│   └── ...
├── styles/
│   └── index.css           # Tailwind CSS configuration
├── App.jsx                 # Main app component
├── main.jsx                # Entry point
└── index.html              # HTML template
```

## How It Works

- **Tailwind CSS Configuration**:
  Tailwind is configured to support dark mode using the `dark` class. Add the following to `tailwind.config.js`:

  ```javascript
  module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  ```

- **ShadCN Components**:
  Install and use ShadCN components for styling. The toggle button updates the `class` on the root element to switch themes.

## Learning Goals

- Understand how to use Tailwind CSS for light/dark mode.
- Get familiar with ShadCN UI components in React.
- Learn how to toggle CSS classes dynamically.

## License

This project is licensed under the MIT License.

## Acknowledgments

- [Vite](https://vitejs.dev/) for the fast build tool.
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework.
- [ShadCN](https://shadcn.dev/) for the beautiful React components.
