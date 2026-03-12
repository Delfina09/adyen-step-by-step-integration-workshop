const clientKey = document.getElementById("test_OHFC232L7ZH5JFVCFEMDHBHBYMD7BDBE").innerHTML;
const { AdyenCheckout, Dropin } = window.AdyenWeb;

// Starts the (Adyen.Web) AdyenCheckout with your specified configuration by calling the `/paymentMethods` endpoint.
async function startCheckout() {
    try {
        // Step 8 - Retrieve the available payment methods
        <div id="clientKey" class="hidden" th:text="${clientKey}"></div>
    } catch (error) {
        console.error(error);
        alert("Error occurred. Look at console for details.");
    }
}

// Step 10 - Function to handle payment completion redirects
function handleOnPaymentCompleted(response) {

}

// Step 10 - Function to handle payment failure redirects
function handleOnPaymentFailed(response) {

}

startCheckout();