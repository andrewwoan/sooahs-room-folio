# 💜 수아's Award-Winning Room Folio 💜

**[Live site](http://sooahs-room-folio.com/)**

This repo contains code of 수아's Room Folio. If you're interested, learn how to create a porfolio like this [here](https://youtu.be/AB6sulUMRGE)!! It's beginner friendly!

![Page screenshot](public/media/og-image.webp?raw=true "Page screenshot")

# Instructions

```
npm install
npm run dev
```

# Updates & Known Issues!!!

- There is an issue in the video's code where, at certain angles, when you hover something it starts "vibrating" or "twitching," this is because the mesh that we're using to target with our raycaster is no longer being hovered after the animation displaces/rescales the object. This triggers the tween to be "killed" and revert to its old state. When it reverts it might be rehovered which triggers the animation to play again, but that animation again makes the object no longer hovered and it keeps going back and forth. If you wanted to fix this with minimal adjustments, you can generate static invisible hitboxes for all hovered items that are passed into the raycaster for testing rather than the object itself (or you can do a combination of both, some you use the object itself, others you use a hitbox). I decided to take a dual approach, some have hitboxes, others use the default object. For the objects with intro animations, you can either create their hitboxes after the intro animation is done playing or you can generate all the hitboxes before the intro is done playing. If you do it after, the user can't interact with them until the intro is done. If you do it before, they can interact with the objects before the intro is done. There are multiple ways to handle this, you can even make the hitboxes in Blender if you want. For me I made all the static ones interactable immediately, whereas those with intro animations have their hitboxes generated after the animations are done. One issue with hitboxes is at certain angles you can't select/hover objects behind another mesh's hitbox because we're only choosing the first thing the raycast intersects. You can fix this by deciding to play a hover animation for all objects the raycaster is intersecting or checking the rotation of the camera to "guess" which one the user is actually hovering, or make a highly custom hitbox for each specific mesh that needs one in Blender, or take the dual approach I took in which the raycaster uses generated hitboxes for some objects and the default objects themselves for others. Alternatively, if you don't want a hovered state, you can simply remove the kill flag check and let it play out its animation fully.

# Inspo & Credits!!!

- [Bruno Simon's Room](https://my-room-in-3d.vercel.app/)
- [Rachel Wei's Room](https://rachelqrwei.ca/)
- [Nicky Blender](https://www.instagram.com/nicky.blender/?hl=en)
- [Denis Wipart's Materials](https://wipart.artstation.com/store). Don't worry I have commercial license hahaha.
- [Music](https://youtu.be/eq3C1Uwz6YU)
- [Click SFX](https://uppbeat.io/sfx/category/digital-and-ui/ui)
- [Piano SFX](https://pixabay.com/sound-effects/all-88-keys-on-a-piano-playing-fast-free-high-quality-sound-effects-71279/)
- [Cat Wallpaper](https://wallpapersok.com/wallpapers/kawaii-hd-smiling-cats-vmhjik4wp6ipc6bd.html)
- [Peach Panda Wallpaper](https://4kwallpapers.com/cute/peach-cat-kawaii-10081.html)
- [Anya Forger | Spy x Family Wallpaper](https://www.uhdpaper.com/2022/03/anya-forger-spy-x-family-4k-5061g.html?m=0)
- [SVGs](https://www.svgrepo.com/)
- [Fonts](https://www.fontspace.com/niskala-huruf)

# Won some awards!! 🎉

- [Awwwards](https://www.awwwards.com/sites/suas-room-folio)
- [CSSDA](https://www.cssdesignawards.com/sites/sooahs-room-folio/47040/)
