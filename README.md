![svginjector](https://user-images.githubusercontent.com/44942598/116723144-78895780-a9df-11eb-96ac-e61111906b84.png)

Replaces all of your SVG images (from a \<img> tag) by a \<svg> one. Allows better and easier manipulation on the shapes. Conserves original id, class and name attributes of the \<img> tag.

## How to use it

Just import the JavaScript file within your HTML document to make it work!

```html
<script src="main.js"></script>
```

## Example result

### Before

```html
<a href="enhance.html">
<!--   Your SVG image   -->
    <img src="icon.svg">
<!--   Your SVG image   -->
    Enhance your work!
</a>
```

### After

N.B. This will only be like this on the browser.

```html
<a href="enhance.html">
<!--   Your SVG image   -->
    <svg viewBox="0 0 122 140" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
    style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:square;stroke-miterlimit:1.5;">
        <g id="Logo">
            <path d="M17.426,3.756l100.049,57.763l-0.476,42.459l-34.83,31.837l-51.42,-11.287l-26.993,-60.477l46.085,15.591l-32.415,-75.886Z" style="fill:#fff;stroke:#fb9500;stroke-width:4.17px;"></path>
            <path d="M116.999,103.978l-67.158,-24.336l-32.415,-75.886l99.573,100.222Z" style="fill:#fff;stroke:#fb9500;stroke-width:4.17px;"></path>
        </g>
    </svg>
<!--   Your SVG image   -->
    Enhance your work!
</a>
```
