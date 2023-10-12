# LAB 4: Bulk URL Redirection with Cloudflare Workers

**Introduction**

Create a URL redirector that manages and redirects multiple URLs based on predefined rules, enhancing your understanding
of request manipulation with Cloudflare Workers.

**Prerequisites**

- Cloudflare Account
- Node.js

### Step 1: **Setting Up Your Project**

   ```bash
   npm create cloudflare@latest bulk-url-redirector
   cd bulk-url-redirector
   ```

### Step 2: **Developing Your Worker**

Open `src/index.js` and add the following code:

   ```javascript
   /**
 BULK REDIRECTION
 This module handles bulk redirection of certain paths to specific URLs.
 **/

export default {
    // An asynchronous function to handle HTTP requests.
    async fetch(request, env, ctx) {

        // A Map object that holds the paths and their corresponding redirection URLs.
        const redirectMap = new Map([
            ["/fun", "https://www.example-game.com"], // Redirect /fun to a gaming website.
            ["/learn", "https://www.example-learn.com"], // Redirect /learn to a learning website.
        ]);

        // Creating a new URL object from the request to easily extract parts of the URL.
        const requestURL = new URL(request.url);

        // Getting the pathname from the URL object.
        const path = requestURL.pathname;

        // Using the pathname to get the corresponding redirection URL from the Map.
        const location = redirectMap.get(path);

        // If a redirection URL is found in the Map, the request is redirected to the new location.
        if (location) {
            return Response.redirect(location, 301); // A 301 redirect which indicates that the redirection is permanent.
        }

        // If no redirection URL is found, the request proceeds as normal.
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

You've successfully built a bulk URL redirector with an interactive learning component, allowing a hands-on experience
in manipulating requests using Cloudflare Workers.