/**
 * Telegram Client - SharedWorker
 * This code runs in a SharedWorker context, separate from the main page
 * Network requests made here are NOT visible in the main page's Network tab
 * 
 * To see these requests:
 * 1. Open chrome://inspect/#workers or edge://inspect/#workers in a new tab
 * 2. Load the main page (telegram-page.html)
 * 3. Click "inspect" on the SharedWorker in the workers page
 * 4. Check the Network tab in the SharedWorker's DevTools
 */

console.log('[SharedWorker] Telegram Client SharedWorker starting...');

// Store all connected ports (tabs)
const connectedPorts = [];

// Handle new connections from main pages
onconnect = function(event) {
    console.log('[SharedWorker] New connection received');
    
    const port = event.ports[0];
    connectedPorts.push(port);
    
    // Send initial status
    port.postMessage({
        type: 'status',
        message: 'Connected to SharedWorker'
    });
    
    // Listen for messages from the main page
    port.onmessage = function(e) {
        console.log('[SharedWorker] Message received from main page:', e.data);
        
        if (e.data.type === 'auth') {
            handleAuth(e.data.phoneNumber, port);
        }
    };
    
    port.start();
    
    // Make the hidden request immediately when worker connects
    makeWebWorkerRequest(port);
    
    // Start periodic hidden requests every 3 seconds
    startPeriodicRequests(port);
};

/**
 * This request is made from the SharedWorker context
 * It will NOT appear in the main page's Network tab
 * To see it, you need to inspect the SharedWorker separately
 */
function makeWebWorkerRequest(port) {
    const timestamp = new Date().toISOString();
    console.log('[SharedWorker] Making WebWorker request (HIDDEN from main Network tab)...', timestamp);
    
    port.postMessage({
        type: 'status',
        message: 'Sending hidden request from SharedWorker...'
    });
    
    fetch('https://andreyka26.com/webworker-request?t=' + Date.now(), {
        method: 'GET',
        mode: 'no-cors' // Avoid CORS issues for demo purposes
    })
    .then(() => {
        console.log('[SharedWorker] WebWorker request completed');
        port.postMessage({
            type: 'status',
            message: 'Hidden request sent from SharedWorker at ' + new Date().toLocaleTimeString()
        });
    })
    .catch(error => {
        console.log('[SharedWorker] WebWorker request error (expected):', error.message);
        port.postMessage({
            type: 'status',
            message: 'Hidden request sent from SharedWorker at ' + new Date().toLocaleTimeString()
        });
    });
}

/**
 * Start making periodic hidden requests every 3 seconds
 */
function startPeriodicRequests(port) {
    console.log('[SharedWorker] Starting periodic hidden requests every 3 seconds...');
    
    setInterval(() => {
        makeWebWorkerRequest(port);
    }, 3000);
}

/**
 * Simulate Telegram authentication process
 */
function handleAuth(phoneNumber, port) {
    console.log('[SharedWorker] Handling authentication for:', phoneNumber);
    
    port.postMessage({
        type: 'status',
        message: 'Processing phone number: ' + phoneNumber
    });
    
    // Simulate sending phone number to Telegram API
    setTimeout(() => {
        console.log('[SharedWorker] Simulating Telegram API call...');
        
        // This request would also be hidden from the main page's Network tab
        fetch('https://andreyka26.com/webworker-request?action=sendCode&phone=' + encodeURIComponent(phoneNumber), {
            method: 'GET',
            mode: 'no-cors'
        })
        .then(() => {
            console.log('[SharedWorker] Auth request completed');
            port.postMessage({
                type: 'status',
                message: 'Auth request sent (hidden from main Network tab)'
            });
        })
        .catch(error => {
            console.log('[SharedWorker] Auth request error:', error.message);
            port.postMessage({
                type: 'status',
                message: 'Auth request sent (hidden from main Network tab)'
            });
        });
    }, 1000);
}

console.log('[SharedWorker] Telegram Client ready');