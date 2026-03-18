// i don't have a source but my dad helped me with some ideas, but i did everything myself
// (he says hi, but you probably don't remember him. you taught him flash.)
const tabs = document.querySelectorAll("li[role='tab'] a");
const textblocks = document.querySelectorAll("div[role='tabpanel']");

// set up initial tab selection so that it doesn't all list
tabs.item(0).id = "selected";
textblocks.forEach((block) => {
    if (!tabs.item(0).getAttribute("href").includes(block.id)) {
        block.classList.add("hidden");
    }
})

// cycle through every tab to see if it's clicked
tabs.forEach((tab) => {
    tab.addEventListener("click", (event) => {
        // if the tab wasn't previously selected, select it, if it was set it to null
        if (tab.id != "selected") {
            tab.id = "selected";
            tabs.forEach((tab) => {
                if (tab !== event.target) {
                    tab.id = null;
                }
            })
            
            // cycle through the text blocks to see if the tab matches the block id
            // if it does, remove the hidden attribute. otherwise add the hidden attribute.
            textblocks.forEach((block) => {
                if (tab.getAttribute("href").includes(block.id)) {
                    block.classList.remove("hidden");
                } else {
                    block.classList.add("hidden");
                }
            })
        }
    })
})