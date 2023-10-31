const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleClick(e) { 
    tabPanels.forEach((panel) => { 
        panel.hidden = true;
    })

    tabButtons.forEach((tab) => { 
        tab.ariaSelected = false;
    })

    e.currentTarget.setAttribute('aria-selected', true);

    const { id } = e.currentTarget;
    console.log(id)
    console.log(tabPanels)

    const tabPanel = tabPanels.find(panel => {
        if (panel.getAttribute('aria-labelledby') === id) {
            return true;
        }
    });
    tabPanel.hidden = false;


}

tabButtons.forEach(button => button.addEventListener("click", handleClick));
