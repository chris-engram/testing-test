# testing-test

A modern Next.js application built with TypeScript, Tailwind CSS, and shadcn/ui.

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Code Quality**: ESLint, Prettier, Husky

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/           # App Router pages and layouts
├── components/    # React components
│   └── ui/       # shadcn/ui components
└── lib/          # Utility functions and helpers
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler check

## Customization

### Adding shadcn/ui Components

```bash
npx shadcn-ui@latest add [component-name]
```

### Modifying Theme

Edit `src/app/globals.css` to customize colors and other design tokens.

## Contributing

1. Create a feature branch
2. Make your changes
3. Run `npm run lint` and fix any issues
4. Submit a pull request

## License

MIT
