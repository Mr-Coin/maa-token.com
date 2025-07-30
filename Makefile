.PHONY: start stop install build clean help

# Default target
help:
	@echo "Available commands:"
	@echo "  make start    - Start the development server"
	@echo "  make stop     - Stop the development server"
	@echo "  make install  - Install dependencies"
	@echo "  make build    - Build for production"
	@echo "  make clean    - Clean build artifacts"
	@echo "  make help     - Show this help message"

# Start development server
start:
	@echo "Starting development server..."
	npm run dev

# Stop development server
stop:
	@echo "Stopping development server..."
	@pkill -f "vite" || echo "No Vite process found to stop"

# Install dependencies
install:
	@echo "Installing dependencies..."
	npm install

# Build for production
build:
	@echo "Building for production..."
	npm run build

# Clean build artifacts
clean:
	@echo "Cleaning build artifacts..."
	rm -rf dist
	rm -rf node_modules/.vite 