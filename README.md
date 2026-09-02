# own-cli

A command-line interface project built with TypeScript and Bun runtime. This project demonstrates modern CLI development practices and provides utility tools for various development tasks.

## Overview

own-cli is a sophisticated command-line tool designed to showcase advanced TypeScript development workflows. It features modular architecture with separate components for AI integration, mode management, and terminal user interface (TUI) functionality. The project emphasizes performance, maintainability, and extensibility in CLI applications.

## Key Features

- **TypeScript-first development** with compiled output for better performance
- **Bun runtime** for blazing-fast execution and comprehensive JavaScript/TypeScript support
- **Modular architecture** with separate concerns for different functionalities
- **AI integration** capabilities through the `ai/` directory
- **Mode management** system via the `mode/` directory
- **Terminal User Interface (TUI)** components in the `tui/` directory

## Project Structure

- `ai/` - AI-powered tools and integrations
- `mode/` - Different operating modes and states
- `tui/` - Terminal user interface components
- `index.ts` - Main entry point for the CLI
- `package.json` - Project dependencies and configuration

## Getting Started

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.3.14. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.