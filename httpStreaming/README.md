# HTTP Streaming Log Example

This example demonstrates how to stream logs in real-time using HTTP. The server generates random log entries every second and streams them to the client. The client displays each log entry as it is received.

## Files
- `logServer.js`: The server that streams log entries.
- `logClient.js`: The client that connects to the server and displays the log entries.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- Basic knowledge of Node.js and HTTP streaming concepts.

## Setup

1. Clone or download this repository.
2. Open a terminal in the directory where the files are located.

3. Run the following command to initialize the Node.js project and install the required dependencies:

   ```bash
   npm init -y         # Initialize the Node.js project
   npm install express # Install the Express framework
   ```


Here’s a simple README.md file explaining how to set up and run the server and client for the log streaming example.

File name: README.md

markdown
Copy code
# HTTP Streaming Log Example

This example demonstrates how to stream logs in real-time using HTTP. The server generates random log entries every second and streams them to the client. The client displays each log entry as it is received.

## Files
- `logServer.js`: The server that streams log entries.
- `logClient.js`: The client that connects to the server and displays the log entries.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- Basic knowledge of Node.js and HTTP streaming concepts.

## Setup

1. Clone or download this repository.
2. Open a terminal in the directory where the files are located.

3. Run the following command to initialize the Node.js project and install the required dependencies:

   ```bash
   npm init -y         # Initialize the Node.js project
   npm install express # Install the Express framework
    ```
## Running the Server and Client

### Step 1: Start the Server
In the terminal, run:

```bash
node logServer.js
```

You should see a message confirming that the server is running:

```plaintext
Log streaming server running on http://localhost:3000
```

### Step 2: Run the Client
Open a new terminal window in the same directory, and run:

```bash
node logClient.js
```

The client will start receiving log entries from the server every second, displaying each entry as it arrives.

#### Expected Output
The client terminal should show log entries similar to the following:

```sql
Log entry received: [2024-10-28T13:45:30.123Z] [INFO] User login successful
Log entry received: [2024-10-28T13:45:31.456Z] [WARN] Cache miss for session data
Log entry received: [2024-10-28T13:45:32.789Z] [ERROR] Disk space running low
...
Log stream ended
```
The log stream will stop automatically after 30 seconds.

### Customization

- To change the stream duration, adjust the `30000` (milliseconds) in `logServer.js` where it says `setTimeout`.
- You can modify the `generateLog` function in `logServer.js` to customize log messages or levels.