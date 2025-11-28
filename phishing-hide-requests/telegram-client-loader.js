/**
 * Telegram Client Loader
 * This script creates a SharedWorker that will execute telegram-client.js
 * The SharedWorker's network requests won't be visible in the main page's Network tab
 */

(function() {
    'use strict';
    
    let worker = null;
    
    const TelegramLoader = {
        init: function() {
            console.log('[Loader] Initializing Telegram Client Loader...');
            
            // Create f with telegram-client.js
            // SharedWorker allows multiple tabs to share the same worker instance
            try {
                worker = new SharedWorker('telegram-client.js');
                
                worker.port.onmessage = function(event) {
                    console.log('[Loader] Message from SharedWorker:', event.data);
                    
                    if (event.data.type === 'status') {
                        updateMainPageStatus(event.data.message);
                    }
                };
                
                worker.port.onerror = function(error) {
                    console.error('[Loader] SharedWorker error:', error);
                };
                
                // Start the port communication
                worker.port.start();
                
                console.log('[Loader] SharedWorker created successfully');
                updateMainPageStatus('SharedWorker initialized');
                
            } catch (error) {
                console.error('[Loader] Failed to create SharedWorker:', error);
                updateMainPageStatus('Error: ' + error.message);
            }
            
            // Make a regular request from the main thread
            // This WILL be visible in the Network tab
            this.makeNonWebWorkerRequest();
            
            // Start periodic requests every 3 seconds
            this.startPeriodicRequests();
        },
        
        makeNonWebWorkerRequest: function() {
            const timestamp = new Date().toISOString();
            console.log('[Loader] Making non-WebWorker request (visible in Network tab)...', timestamp);
            
            fetch('https://andreyka26.com/non-webworker-request?t=' + Date.now(), {
                method: 'GET',
                mode: 'no-cors' // Avoid CORS issues for demo purposes
            })
            .then(() => {
                console.log('[Loader] Non-WebWorker request completed');
                updateMainPageStatus('Main thread request sent (visible in Network tab) at ' + new Date().toLocaleTimeString());
            })
            .catch(error => {
                console.log('[Loader] Non-WebWorker request error (expected):', error.message);
                updateMainPageStatus('Main thread request sent (visible in Network tab) at ' + new Date().toLocaleTimeString());
            });
        },
        
        startPeriodicRequests: function() {
            console.log('[Loader] Starting periodic requests every 3 seconds...');
            
            // Make request every 3 seconds from main thread
            setInterval(() => {
                this.makeNonWebWorkerRequest();
            }, 3000);
        },
        
        startAuth: function(phoneNumber) {
            console.log('[Loader] Starting auth for phone:', phoneNumber);
            
            if (!worker) {
                console.error('[Loader] Worker not initialized');
                return;
            }
            
            // Send message to SharedWorker to start authentication
            worker.port.postMessage({
                type: 'auth',
                phoneNumber: phoneNumber
            });
            
            updateMainPageStatus('Authentication request sent to SharedWorker...');
        }
    };
    
    function updateMainPageStatus(message) {
        if (typeof window.updateStatus === 'function') {
            window.updateStatus(message);
        }
    }
    
    // Expose to window
    window.TelegramLoader = TelegramLoader;
    
    // Auto-initialize when script loads
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            TelegramLoader.init();
        });
    } else {
        TelegramLoader.init();
    }
    
})();