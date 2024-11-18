export default defineNuxtPlugin(() => {
  if (process.client) {
    // Create the noscript element
    const noscript = document.createElement('noscript');
    noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PMTT4ZJL"
                           height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
    
    // Insert the noscript element as the first child of the body
    document.body.insertBefore(noscript, document.body.firstChild);
  }
});
