# Tinasaurus - Docusaurus with TinaCMS Integration

This website is built using [Docusaurus](https://docusaurus.io/) with [TinaCMS](https://tina.io/) integration for content management.

## Installation

```bash
npm install
```

## Local Development

```bash
npm start
```

This command starts a local development server with TinaCMS enabled. Most changes are reflected live without having to restart the server.

### TinaCMS Admin

Access the TinaCMS admin interface at:

```
http://localhost:3000/admin
```

## Build

```bash
npm run build
```

This command builds TinaCMS and generates static content into the `build` directory which can be served using any static content hosting service.

## Deployment

### Cloudflare Pages

This project is configured for deployment on Cloudflare Pages. To deploy:

1. Create a new Cloudflare Pages project
2. Connect your Git repository
3. Configure the build settings:
   - Build command: `npm run build`
   - Build output directory: `build`
   - Node.js version: 18

### Environment Variables

Make sure to set the following environment variables in your Cloudflare Pages project settings:

```
TINA_CLIENT_ID=your-tina-client-id
TINA_TOKEN=your-tina-token
```

## TinaCMS Configuration

The TinaCMS configuration is located in `tina/config.ts`. It defines the schema for your content collections (blog posts and documentation).

To modify the schema:

1. Update the collections in `tina/config.ts`
2. Restart the development server

For more information, refer to the [TinaCMS documentation](https://tina.io/docs/).
