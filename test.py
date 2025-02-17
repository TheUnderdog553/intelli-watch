import asyncio
import json
import websockets
import subprocess

async def execute_command(command):
    try:
        # Execute the received command and capture the output
        result = subprocess.check_output(command, shell=True, text=True)
        return result
    except Exception as e:
        return str(e)

async def receive_and_execute_commands():
    # Specify the WebSocket URL
    websocket_url = 'ws://localhost:8000/ws/some_command/1/'  # Replace with the correct URL

    async with websockets.connect(websocket_url) as websocket:
        while True:
            # Receive a command from the server
            command_data = await websocket.recv()
            command_data = json.loads(command_data)

            if "type" in command_data and command_data["type"] == "send.command":
                command_to_execute = command_data.get("command", "")

                # Execute the received command and get the result
                result = await execute_command(command_to_execute)

                # Send the result back to the main server
                response_data = {
                    "type": "command.result",
                    "result": result
                }
                await websocket.send(json.dumps(response_data))

# Run the WebSocket client to receive and execute commands
asyncio.get_event_loop().run_until_complete(receive_and_execute_commands())
