# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Setup Instructions

1. Install Bun
```bash
curl -fsSL https://bun.sh/install | bash
```

2. Install dependencies
```bash
bun install
```

3. Create and configure environment variables
```bash
# Create .env file
cp .env.example .env

# Edit the .env file and fill in your variables
```

4. Start the development server
```bash
bun run dev
```

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
