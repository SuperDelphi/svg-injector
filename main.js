document.addEventListener("DOMContentLoaded", async () => {
    const imgs = document.querySelectorAll("img");

    for (let i = 0; i < imgs.length; i++) {
        // If the image is in SVG format
        if (imgs[i].hasAttribute("src") && imgs[i].getAttribute("src").endsWith(".svg")) {
            const rawData = (await axios(imgs[i].getAttribute("src"))).data;
            const parser = new DOMParser();

            let xmlData;

            // We try to parse the XML data
            try {
                xmlData = parser.parseFromString(rawData, "image/svg+xml");
            } catch (e) {
                console.warn("SVG element could not be parsed: it was left as is in the DOM.");
                return;
            }

            // We only keep the <svg> tag
            const newSvgElement = xmlData.getElementsByTagName("svg")[0];

            // We remove the possible "width" and "height" attributes
            if (newSvgElement.hasAttribute("width")) {
                newSvgElement.removeAttribute("width");
            }
            if (newSvgElement.hasAttribute("height")) {
                newSvgElement.removeAttribute("height");
            }

            // We transfer the possible "class", "id" and "name" attributes from the original <img> tag
            imgs[i].getAttributeNames().forEach(attr => {
                if (["id", "class", "name"].includes(attr)) {
                    newSvgElement.setAttribute(attr, imgs[i].getAttribute(attr));
                }
            });

            // We add the new <svg> tag then suppress the original <img> tag
            imgs[i].insertAdjacentElement("beforebegin", newSvgElement);
            imgs[i].remove();
        }
    }
});
