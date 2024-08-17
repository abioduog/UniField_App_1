#!/bin/bash

# Check if the script is executable, if not, make it executable
if [[ ! -x "$0" ]]; then
    chmod +x "$0"
    exec "$0" "$@"
fi

# Change to the project directory
cd /Users/abiodunogunlabi/Documents/Project_IT/UniField_App_1

# Function to find an available port
find_available_port() {
    local port=$1
    while nc -z localhost $port; do
        ((port++))
    done
    echo $port
}

# Function to start an application
start_app() {
    app_name=$1
    port=$2
    echo "Starting $app_name on port $port..."
    cd $app_name
    npm run dev -- -p $port &
    cd ..
    sleep 2  # Add a small delay to ensure the port is bound before checking the next one
}

# Find available ports
retailer_port=$(find_available_port 3000)
field_agent_port=$(find_available_port $((retailer_port + 1)))
backend_port=$(find_available_port $((field_agent_port + 1)))

# Start each application
start_app unifield-retailer-app $retailer_port
start_app unifield-field-agent-app $field_agent_port
start_app unifield-backend-interface $backend_port

echo "All applications have been started."
echo "Retailer app: http://localhost:$retailer_port"
echo "Field agent app: http://localhost:$field_agent_port"
echo "Backend interface: http://localhost:$backend_port"

# Wait for user input to keep the script running
read -p "Press Enter to stop all applications..."

# Kill all Node.js processes
pkill node

echo "All applications have been stopped."