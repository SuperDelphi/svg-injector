/*
 * Copyright (c) Simon Breil 2021
 */

// Permet de remplacer les imges au format SVG par leurs tracés, afin de permettre une manipulation plus aisée
document.addEventListener("DOMContentLoaded", async () => {
    const imgs = document.querySelectorAll("img");

    for (let i = 0; i < imgs.length; i++) {
        if (imgs[i].hasAttribute("src") && imgs[i].getAttribute("src").endsWith(".svg")) {
            // Si l'image est au format SVG...

            const rawData = (await axios(imgs[i].getAttribute("src"))).data;
            const parser = new DOMParser();

            let xmlData;

            // On tente de parser le XML
            try {
                xmlData = parser.parseFromString(rawData, "image/svg+xml");
            } catch (e) {
                console.warn("Un élément SVG n'a pas pu être parsé : il a été laissé tel quel dans le DOM.");
                return;
            }

            // On ne récupère que la balise "svg"
            const newSvgElement = xmlData.getElementsByTagName("svg")[0];

            if (newSvgElement.hasAttribute("width")) {
                newSvgElement.removeAttribute("width");
            }
            if (newSvgElement.hasAttribute("height")) {
                newSvgElement.removeAttribute("height");
            }

            imgs[i].getAttributeNames().forEach(attr => {
                if (["id", "class", "name"].includes(attr)) {
                    newSvgElement.setAttribute(attr, imgs[i].getAttribute(attr));
                }
            });

            imgs[i].insertAdjacentElement("beforebegin", newSvgElement);
            imgs[i].remove();
        }
    }

    // const svgData = await axios();
});