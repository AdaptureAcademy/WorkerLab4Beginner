# LAB 4: Bulk URL Redirection with Cloudflare Workers

**Introduction**

Create a URL redirector that manages and redirects multiple URLs based on predefined rules, enhancing your understanding of request manipulation with Cloudflare Workers.

**Prerequisites**

- Cloudflare Account
- Node.js

### Step 1: **Setting Up Your Project**

   ```bash
   npm create cloudflare@latest bulk-url-redirector
   cd bulk-url-redirector
   ```

### Step 2: **Developing Your Worker**

Open `worker.js` and add the following code:

   ```javascript
   export default {
       async fetch(request) {
           const redirectMap = new Map([
               ["/fun", "https://www.example-game.com"],
               ["/learn", "https://www.example-learn.com"],
           ]);

           const requestURL = new URL(request.url);
           const path = requestURL.pathname;
           const location = redirectMap.get(path);

           if (location) {
               return Response.redirect(location, 301);
           }
           return fetch(request);
       },
   };
   ```

### Step 3: **Interactive Learning**

- Modify the `redirectMap` to redirect `/fun` to a surprise like an online game.
- Test the redirection by accessing `/fun` on your local server.

### Step 4: **Testing Locally**

   ```bash
   npm run dev
   ```

### Step 5: **Deploying Your Worker**

   ```bash
   npx wrangler deploy
   ```

Visit the deployed URL and test the redirects.

**Conclusion**

You've successfully built a bulk URL redirector with an interactive learning component, allowing a hands-on experience in manipulating requests using Cloudflare Workers.