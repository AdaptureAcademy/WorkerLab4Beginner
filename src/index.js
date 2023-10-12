/**
	 BULK REDIRECTION
 **/

export default {
    async fetch(request, env, ctx) {
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