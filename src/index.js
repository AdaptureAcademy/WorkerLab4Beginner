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
