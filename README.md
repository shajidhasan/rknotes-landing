# RKNotes

RKNotes is a note taking app. I built this for myself, but anyone can use it. This app is split into two parts.
* The app - https://app.rknotes.xyz
* And the landing page - https://rknotes.xyz

You're now in the repository that contains the landing page, as well as the logic for showing 'shared notes'. The actual app repository is [here](https://github.com/shajidhasan/rknotes-app).

The reason it's divided into two parts is: the application part doesn't require any server side rendering. I used Svelte for creating an interactive UI. However, the landing page should have SSR. If someone generates a link for a note, that should also be server side rendered. That's why I decided to create another repository with SvelteKit this time, an awesome Svelte framework.

I could probably only use SvelteKit for this, since you can actually specify which pages should render on server. But this project was done in such a short amount of time so I went with whatever seemed easy to me.

Stuff used to make this happen:
* [Svelte](https://svelte.dev) + [SvelteKit](https://kit.svelte.dev)
* [TailwindCSS](https://tailwindcss.com)
* [TOAST UI Editor](https://github.com/nhn/tui.editor)
* [Firebase](https://firebase.google.com)

Thanks for taking a look!
