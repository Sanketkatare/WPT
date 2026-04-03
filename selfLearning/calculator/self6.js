// Design and implement a web page that displays a live scoreboard. Use AJAX
// (XMLHttpRequest) to retrieve and interpret JSON data from a URL provided by the faculty.

<!DOCTYPE html>
<html lang="en">
<head>  
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Live Cricket Scoreboard</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .scoreboard {
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center; 
        }
        h1 {
            margin-bottom: 20px;
        }
        .team {
            font-size: 1.5em;
            margin: 10px 0;
        }
        .score {    
            font-size: 2em;
            color: #333;
        }   
    </style>
</head>
<body>  
    <div class="scoreboard">
        <h1>Live Cricket Scoreboard</h1>
        <div class="team" id="teamA">Team A: </div>     
        <div class="score" id="scoreA">0</div>
        <div class="team" id="teamB">Team B: </div>     
        <div class="score" id="scoreB">0</div>
    </div>  
    <script>
        function fetchScoreboard() {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", "https://api.example.com/cricket/scoreboard", true);
            xhr.onload = function() {
                if (xhr.status === 200) {
                    const data = JSON.parse(xhr.responseText);
                    document.getElementById("teamA").innerText = "Team A: " + data.teamA;
                    document.getElementById("scoreA").innerText = data.scoreA;
                    document.getElementById("teamB").innerText = "Team B: " + data.teamB;
                    document.getElementById("scoreB").innerText = data.scoreB;
                }    else {
                    console.error("Failed to fetch scoreboard data");
                }
            };
            xhr.send();
        }
        // Fetch the scoreboard data every 5 seconds
        setInterval(fetchScoreboard, 5000);
        // Initial fetch
        fetchScoreboard();
    </script>
</body>
</html>
}