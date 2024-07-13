const customRenderer = () => {
    if (!("marked" in window)) {
        console.error("Marked library not found");
        return null;
    }

    const theme = "light";
    const textColor = theme === "dark" ? "#e6edf3" : "#1f2328";
    const buttonColor = "#2f81f7";
    const listGap = ".5em";
    const isLinkPreview = false;

    const renderer = new marked.Renderer();

    const linkRenderer = renderer.link;
    renderer.link = (obj) => {
        const _href = obj.href.startsWith("www.") ?
            `https://${obj.href}` :
            obj.href;

        // check if the link is a YouTube video
        const youtubeRegex =
            /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/i;
        const youtubeMatch = _href.match(youtubeRegex);
        if (youtubeMatch && youtubeMatch[1]) {
            return `<div style="width: 100%; height: 315px; max-width: 560px;">
  <iframe src="https://www.youtube.com/embed/${youtubeMatch[1]}" 
    style="width: 100%; height: 100%;" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>`;
        }

        // send a tip button
        const sendATipRegex =
            /^(?:http(?:s)?:\/\/)?www\.pickaxeproject\.com\/send_us_a_tip$/i;
        const sendATipeMatch = _href.match(sendATipRegex);
        if (sendATipeMatch) {
            return `
            <div style="max-width: 320px; width: 100%;">
          <stripe-buy-button
            buy-button-id="buy_btn_1OLuQcKLwjWObVj0TiGtGzdk"
            publishable-key="pk_live_51MCrwZKLwjWObVj0z2E6xbcEvUBcNx9BzsAri3sHfF9Srz28GnCGPzHKBlUdwkyUzyc74itwAXO0pZKXwgHhBeDA00vq5J9aKX"
          >
          </stripe-buy-button>
          </div>
            `;
        }

        // check if the link is an image
        if (/\.(png|jpe?g|webp|gif)$/i.test(_href)) {
            return `<img src="${_href}" alt="${text}" style="max-width:300px; height:auto;">`;
        }

        // remove non-ascii for links copy pasted from other platform
        let html = linkRenderer.call(renderer, obj);
        html = html.replace("%E2%80%8E", "");
        html = html.replace(
            /^<a /,
            `<a style="color: ${buttonColor};" target="_blank" ${
                isLinkPreview
                    ? 'class="marked-link-possible-preview-render"'
                    : ""
            } `
        );
        return html;
    };

    // customize the rendering of headings based on the level
    renderer.heading = (obj) => {
        const {
            text,
            depth
        } = obj;
        if (depth === 1) {
            return `<h1 style="
      font-size: 2em;
      line-height: 1;
      color: ${textColor};
    "><b>${text}</b></h1>`;
        } else if (depth === 2) {
            return `<h2 style="
      font-size: 1.25em;
      color: ${textColor};
    "><b>${text}</b></h2>`;
        } else {
            return `<h${depth} style="
      color: ${textColor};
    "><b>${text}</b></h${depth}>`;
        }
    };

    const listRenderer = renderer.list;
    renderer.list = (obj) => {
        let html = listRenderer.call(renderer, obj);
        html = html.replace(/<\/p>\s*<\/li>/g, "</li>");
        html = html.replace(/<li>\s*<p>/g, "<li>");

        // ordered list
        html = html.replace(
            /^<ol/,
            `<ol style="
        list-style: decimal inside; 
        padding-left: 15px; 
        margin-top: .5em; 
        margin-bottom: 0;
      "`
        );

        // unordered list
        html = html.replace(
            /^<ul/,
            `<ul style="
        list-style: disc inside; 
        padding-left: 15px; 
        margin-top: .5em; 
        margin-bottom: 0;
      "`
        );
        return html;
    };

    const listItemRenderer = renderer.listitem;
    renderer.listitem = (obj) => {
        let html = listItemRenderer.call(renderer, obj);
        html = html.replace(
            /<li/,
            `<li style="
        margin-bottom: ${listGap};
      "`
        );
        return html;
    };

    const tableRenderer = renderer.table;
    renderer.table = (obj) => {
        let table = tableRenderer.call(renderer, obj);
        table = table.replace(
            /<table/,
            '<table style="margin-top: .5em; font-size: 16px;" class="table-auto"'
        );
        if (theme === "light" || theme === "dark") {
            table = table.replace(
                /<tbody/,
                `<tbody class="table-striped-${theme}"`
            );
        }
        return table;
    };

    const tablecellRenderer = renderer.tablecell;
    renderer.tablecell = (obj) => {
        let tablecell = tablecellRenderer.call(renderer, obj);
        tablecell = tablecell.replace(
            /<td/,
            `<td style="
        border-color: ${theme === "dark" ? "#30363d" : "#d0d7de"};
        border-width: 1px;
        padding: 0.25em 0.75em 0.25em 0.75em;
        color: ${textColor};
      "`
        );
        tablecell = tablecell.replace(
            /<th/,
            `<th style="
        border-color: ${theme === "dark" ? "#30363d" : "#d0d7de"};
        border-width: 1px;
        padding: 0.25em 0.75em 0.25em 0.75em;
        font-weight: 600;
        color: ${textColor};
      "`
        );
        return tablecell;
    };

    const blockquoteRenderer = renderer.blockquote;
    renderer.blockquote = (obj) => {
        const html = blockquoteRenderer.call(renderer, obj);
        return html.replace(
            /<blockquote/,
            `<blockquote style="
        border-left-width: 4px;
        border-left-color: ${theme === "dark" ? "#30363d" : "#D0D7DE"};
        color: ${theme === "dark" ? "#8b8b8b" : "#656d76"};
        padding-left: 1em;
      "`
        );
    };

    return renderer;
};

const renderMarkdown = (str) => {
    let _html = str.replace(/\n(?=\n)/g, "\n\n<br/>\n");
    return marked.parse(_html, {
        renderer: customRenderer()
    });
};

const streaming = async (payload) => {
    const res = await fetch(
        "https://streaming.pickaxeproject.com/api/streaming", {
            method: "POST",
            body: JSON.stringify(payload),
        }
    );

    if (res.status !== 200) {
        const body = await res.json();
        throw new Error(body.detail);
    }

    return res;
};

const getFormId = () => {
    try {
        const urlPath = window.location.pathname;
        const urlParams = new URLSearchParams(window.location.search);
        let formId = urlParams.get("id") ? ? urlParams.get("formid");

        // get form id from user control panel
        if (!formId && urlPath.startsWith("/user/control-panel/")) {
            formId = urlPath.split("/")[3].trim();
            if (formId.endsWith("/embed")) {
                formId = formId.replace("/embed", "");
            }
        }

        // get form id from builder
        if (!formId && urlPath.startsWith("/templates/")) {
            formId = "TESTING";
        }

        // get form id from embed (popup or fab)
        if (!formId) {
            const fabElementInfo = document.querySelector("[data-formid]");
            const source =
                fabElementInfo ? .getAttribute("data-frame-source") ? ? null;
            if (
                source &&
                source.startsWith("https://embed.pickaxeproject.com")
            ) {
                formId = fabElementInfo ? .getAttribute("data-formid");
            }
        }

        // get form id from embed (popup)
        if (!formId) {
            const iframe = document.querySelector(
                'iframe[src^="https://embed.pickaxeproject.com"]'
            );
            if (iframe) {
                const src = iframe.getAttribute("src");
                const url = new URL(src);
                const id = url.searchParams.get("id");
                if (id) {
                    formId = id;
                }
            }
        }

        // fallback
        if (!formId) {
            console.error("[getFormId] no form id found", err);
            formId = "TESTING";
        }

        return formId;
    } catch (err) {
        console.error("[getFormId] error", err);
        return "TESTING";
    }
};

async function fetchMetadata(url) {
    try {
        const response = await fetch(
            "https://streaming.pickaxeproject.com/api/metadata?url=" +
            encodeURIComponent(url)
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching metadata:", error);
        return null;
    }
}

async function updateCache(callId, data) {
    try {
        await fetch(
            "https://streaming.pickaxeproject.com/api/function_call_end", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: callId,
                    data: data,
                }),
            }
        );
    } catch (error) {
        console.error("Error updating cache:", error);
    }
}

async function fetchAndUpdateLinks() {
    // metadata preview for links
    const links = document.querySelectorAll(
        ".marked-link-possible-preview-render"
    );
    for (let link of links) {
        if (link.dataset ? .processed) continue;

        const metadata = await fetchMetadata(link.href);
        link.classList.remove("marked-link-possible-preview-render");

        if (!metadata || !metadata.image || !metadata.title) continue;

        link.style = "";
        link.innerHTML = `
        <div class="link-preview" style="opacity: 0; transform: scale(0.9); display: flex; align-items: center; border: 1px solid #ddd; padding: 10px; border-radius: 8px; margin: 10px 0; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); max-width: 600px; transition: transform 0.3s ease;">
        <img src="${metadata.image}" alt="${metadata.title}" class="link-preview-image" style="width: 150px; height: auto; border-radius: 4px; margin-right: 10px;">
        <div class="link-preview-content">
            <h3 class="link-preview-title"><b>${metadata.title}</b></h3>
            <p class="link-preview-description">${metadata.description}</p>
        </div>
        </div>
        `;
        link.dataset.processed = true;

        const previewElement = link.querySelector(".link-preview");
        applyFadeInEffect(previewElement);
        markedRichLinkHoverEffect(previewElement);
    }

    // function call flow
    const function_calls = document.querySelectorAll(
        ".marked-link-function-calling-loader"
    );
    for (let function_link of function_calls) {
        if (function_link.dataset ? .processed) continue;

        const messageContainer = function_link.parentElement.parentElement;
        const modalResultUrl = function_link.getAttribute("alt");

        const modalResultRes = await fetch(modalResultUrl);
        if (modalResultRes.status !== 200) {
            console.error("Error fetching modal result");
            continue;
        }

        const data = await modalResultRes.json();

        if (data.fcid) {
            console.log("Waiting for function call to complete...");
            continue;
        }

        if (data.url) {
            function_link.remove();

            const newImage = document.createElement("img");
            newImage.src = data.url;
            newImage.alt = data.prompt ? ? "Generated Image";
            newImage.classList.add("mt-4");
            newImage.classList.add("rounded");
            messageContainer.appendChild(newImage);
        }

        if (data.text) {
            function_link.remove();

            const newDiv = document.createElement("div");
            newDiv.classList.add("mt-4");
            newDiv.innerHTML = renderMarkdown(data.text);
            messageContainer.appendChild(newDiv);
        }

        if (data.button_link) {
            function_link.remove();

            const newButton = document.createElement("a");
            newButton.href = data.button_link;
            newButton.target = "_blank";
            newButton.classList.add("link-preview-button");
            newButton.textContent = data.button_text;

            // Add styles to make the link look like a button
            newButton.style.display = "inline-block";
            newButton.style.padding = "10px 20px";
            newButton.style.backgroundColor = "#007bff";
            newButton.style.color = "#ffffff";
            newButton.style.textAlign = "center";
            newButton.style.textDecoration = "none";
            newButton.style.borderRadius = "4px";
            newButton.style.fontSize = "16px";
            newButton.style.fontWeight = "bold";
            newButton.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)";
            newButton.style.transition = "background-color 0.3s ease";

            // Add hover effect
            newButton.addEventListener("mouseover", function() {
                newButton.style.backgroundColor = "#0056b3";
            });

            newButton.addEventListener("mouseout", function() {
                newButton.style.backgroundColor = "#007bff";
            });

            // Insert the newline elements before the button
            messageContainer.appendChild(document.createElement("br"));
            messageContainer.appendChild(newButton);
        }

        if (data.openaidata && !data.text) {
            const fCallUrl = function_link.getAttribute("alt");
            const fCallId =
                new URL(fCallUrl).searchParams.get("id") ? ? data.call_id;
            function_link.remove();

            const formId = getFormId();
            if (!formId) {
                console.error("Missing id query parameter", urlPath);
                continue;
            }

            const res = await streaming({
                id: formId,
                data: data.openaidata,
                host: "beta",
            });
            const resBody = res.body;
            if (!resBody) {
                console.error("Streaming error, no response body");
                continue;
            }

            let isStreaming = true;
            let streamingResult = "";

            const divElement = document.createElement("div");
            divElement.classList.add("mt-4");
            messageContainer.appendChild(divElement);

            const reader = resBody.getReader();
            const decoder = new TextDecoder();

            while (isStreaming) {
                const {
                    value,
                    done
                } = await reader.read();
                isStreaming = !done;

                const streamingMessage = decoder.decode(value);

                streamingResult += streamingMessage;

                if ("marked" in window) {
                    divElement.innerHTML = renderMarkdown(streamingResult);
                } else {
                    divElement.textContent = streamingResult;
                }
            }

            const callId = fCallId ? ? data.call_id;
            if (callId) {
                await updateCache(callId, {
                    ...data,
                    text: streamingResult,
                });
            }
        }
    }
}

const applyFadeInEffect = (element) => {
    setTimeout(() => {
        element.style.opacity = "1";
        element.style.transform = "scale(1)";
    }, 50); // Small delay to trigger the transition
};

const markedRichLinkHoverEffect = (element) => {
    element.onmouseover = () => {
        element.style.transform = "scale(.99)";
    };
    element.onmouseout = () => {
        element.style.transform = "scale(1)";
    };
};

// load marked library
if (!document.querySelector(
        "script[src='https://cdn.jsdelivr.net/npm/marked/marked.min.js']"
    )) {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/marked/marked.min.js";
    document.head.appendChild(script);
}

// run the function every second
setInterval(fetchAndUpdateLinks, 1000);