console.log("loaded")
window.addEventListener('load', function() {
    console.log("injected")
    setTimeout(() => {
        try {
            const paywalls = document.getElementsByClassName("banner-wrapper")
            paywalls.forEach(paywall => {
                paywall.remove()
            });
        } catch (error) {
            console.log("no mid-page ads found")
        }

        try {
            document.getElementsByClassName("_57ffabb27526")[0].remove() //update_06-05-22
        } catch (error) {
            console.log("no over-page ads found")
        }
    }, 100);
})
