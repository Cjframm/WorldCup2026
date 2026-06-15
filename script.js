/**
 * 2026 FIFA World Cup Sweepstake Dashboard
 * Data Source: Wikipedia (en.wikipedia.org/wiki/2026_FIFA_World_Cup)
 * 
 * Daily Update Process:
 * 1. Check Wikipedia for latest match results
 * 2. Update scores in Admin Panel
 * 3. Standings automatically recalculate
 * 4. All data saved to browser localStorage
 */

// 2026 World Cup Teams
const WORLD_CUP_TEAMS = [
    'Algeria', 'Argentina', 'Australia', 'Austria', 'Belgium', 'Bosnia and Herzegovina', 'Brazil', 'Canada',
    'Cape Verde', 'Colombia', 'Croatia', 'Curaçao', 'Czech Republic', 'DR Congo', 'Ecuador', 'Egypt',
    'England', 'France', 'Germany', 'Ghana', 'Haiti', 'Iran', 'Iraq', 'Ivory Coast',
    'Japan', 'Jordan', 'Mexico', 'Morocco', 'Netherlands', 'New Zealand', 'Norway', 'Panama',
    'Paraguay', 'Portugal', 'Qatar', 'Saudi Arabia', 'Scotland', 'Senegal', 'South Africa', 'South Korea',
    'Spain', 'Sweden', 'Switzerland', 'Tunisia', 'Turkey', 'Uruguay', 'USA', 'Uzbekistan'
];

// Complete 2026 Group Stage & Knockout Fixtures
const ALL_MATCHES = [
    // GROUP A
    { id: 1, group: 'A', stage: 'group', team1: 'Mexico', team2: 'South Africa', date: '2026-06-11', status: 'completed', score1: 2, score2: 0 },
    { id: 2, group: 'A', stage: 'group', team1: 'South Korea', team2: 'Czech Republic', date: '2026-06-11', status: 'completed', score1: 2, score2: 1 },
    { id: 3, group: 'A', stage: 'group', team1: 'Mexico', team2: 'South Korea', date: '2026-06-18', status: 'upcoming', score1: null, score2: null },
    { id: 4, group: 'A', stage: 'group', team1: 'Czech Republic', team2: 'South Africa', date: '2026-06-18', status: 'upcoming', score1: null, score2: null },
    { id: 5, group: 'A', stage: 'group', team1: 'Czech Republic', team2: 'Mexico', date: '2026-06-24', status: 'upcoming', score1: null, score2: null },
    { id: 6, group: 'A', stage: 'group', team1: 'South Africa', team2: 'South Korea', date: '2026-06-24', status: 'upcoming', score1: null, score2: null },
    
    // GROUP B
    { id: 7, group: 'B', stage: 'group', team1: 'Canada', team2: 'Bosnia and Herzegovina', date: '2026-06-12', status: 'completed', score1: 1, score2: 1 },
    { id: 8, group: 'B', stage: 'group', team1: 'Qatar', team2: 'Switzerland', date: '2026-06-13', status: 'completed', score1: 1, score2: 1 },
    { id: 9, group: 'B', stage: 'group', team1: 'Switzerland', team2: 'Bosnia and Herzegovina', date: '2026-06-18', status: 'upcoming', score1: null, score2: null },
    { id: 10, group: 'B', stage: 'group', team1: 'Canada', team2: 'Qatar', date: '2026-06-18', status: 'upcoming', score1: null, score2: null },
    { id: 11, group: 'B', stage: 'group', team1: 'Switzerland', team2: 'Canada', date: '2026-06-24', status: 'upcoming', score1: null, score2: null },
    { id: 12, group: 'B', stage: 'group', team1: 'Bosnia and Herzegovina', team2: 'Qatar', date: '2026-06-24', status: 'upcoming', score1: null, score2: null },
    
    // GROUP C
    { id: 13, group: 'C', stage: 'group', team1: 'Brazil', team2: 'Morocco', date: '2026-06-13', status: 'completed', score1: 1, score2: 1 },
    { id: 14, group: 'C', stage: 'group', team1: 'Haiti', team2: 'Scotland', date: '2026-06-13', status: 'completed', score1: 0, score2: 1 },
    { id: 15, group: 'C', stage: 'group', team1: 'Scotland', team2: 'Morocco', date: '2026-06-19', status: 'upcoming', score1: null, score2: null },
    { id: 16, group: 'C', stage: 'group', team1: 'Brazil', team2: 'Haiti', date: '2026-06-19', status: 'upcoming', score1: null, score2: null },
    { id: 17, group: 'C', stage: 'group', team1: 'Scotland', team2: 'Brazil', date: '2026-06-24', status: 'upcoming', score1: null, score2: null },
    { id: 18, group: 'C', stage: 'group', team1: 'Morocco', team2: 'Haiti', date: '2026-06-24', status: 'upcoming', score1: null, score2: null },
    
    // GROUP D
    { id: 19, group: 'D', stage: 'group', team1: 'USA', team2: 'Paraguay', date: '2026-06-12', status: 'completed', score1: 4, score2: 1 },
    { id: 20, group: 'D', stage: 'group', team1: 'Australia', team2: 'Turkey', date: '2026-06-13', status: 'completed', score1: 2, score2: 0 },
    { id: 21, group: 'D', stage: 'group', team1: 'USA', team2: 'Australia', date: '2026-06-19', status: 'upcoming', score1: null, score2: null },
    { id: 22, group: 'D', stage: 'group', team1: 'Turkey', team2: 'Paraguay', date: '2026-06-19', status: 'upcoming', score1: null, score2: null },
    { id: 23, group: 'D', stage: 'group', team1: 'Turkey', team2: 'USA', date: '2026-06-25', status: 'upcoming', score1: null, score2: null },
    { id: 24, group: 'D', stage: 'group', team1: 'Paraguay', team2: 'Australia', date: '2026-06-25', status: 'upcoming', score1: null, score2: null },
    
    // GROUP E
    { id: 25, group: 'E', stage: 'group', team1: 'Germany', team2: 'Curaçao', date: '2026-06-14', status: 'completed', score1: 7, score2: 1 },
    { id: 26, group: 'E', stage: 'group', team1: 'Ivory Coast', team2: 'Ecuador', date: '2026-06-14', status: 'completed', score1: 1, score2: 0 },
    { id: 27, group: 'E', stage: 'group', team1: 'Germany', team2: 'Ivory Coast', date: '2026-06-20', status: 'upcoming', score1: null, score2: null },
    { id: 28, group: 'E', stage: 'group', team1: 'Ecuador', team2: 'Curaçao', date: '2026-06-20', status: 'upcoming', score1: null, score2: null },
    { id: 29, group: 'E', stage: 'group', team1: 'Curaçao', team2: 'Ivory Coast', date: '2026-06-25', status: 'upcoming', score1: null, score2: null },
    { id: 30, group: 'E', stage: 'group', team1: 'Ecuador', team2: 'Germany', date: '2026-06-25', status: 'upcoming', score1: null, score2: null },
    
    // GROUP F
    { id: 31, group: 'F', stage: 'group', team1: 'Netherlands', team2: 'Japan', date: '2026-06-14', status: 'completed', score1: 2, score2: 2 },
    { id: 32, group: 'F', stage: 'group', team1: 'Sweden', team2: 'Tunisia', date: '2026-06-14', status: 'completed', score1: 5, score2: 1 },
    { id: 33, group: 'F', stage: 'group', team1: 'Netherlands', team2: 'Sweden', date: '2026-06-20', status: 'upcoming', score1: null, score2: null },
    { id: 34, group: 'F', stage: 'group', team1: 'Tunisia', team2: 'Japan', date: '2026-06-20', status: 'upcoming', score1: null, score2: null },
    { id: 35, group: 'F', stage: 'group', team1: 'Japan', team2: 'Sweden', date: '2026-06-25', status: 'upcoming', score1: null, score2: null },
    { id: 36, group: 'F', stage: 'group', team1: 'Tunisia', team2: 'Netherlands', date: '2026-06-25', status: 'upcoming', score1: null, score2: null },
    
    // GROUP G
    { id: 37, group: 'G', stage: 'group', team1: 'Belgium', team2: 'Egypt', date: '2026-06-15', status: 'upcoming', score1: null, score2: null },
    { id: 38, group: 'G', stage: 'group', team1: 'Iran', team2: 'New Zealand', date: '2026-06-15', status: 'upcoming', score1: null, score2: null },
    { id: 39, group: 'G', stage: 'group', team1: 'Belgium', team2: 'Iran', date: '2026-06-21', status: 'upcoming', score1: null, score2: null },
    { id: 40, group: 'G', stage: 'group', team1: 'New Zealand', team2: 'Egypt', date: '2026-06-21', status: 'upcoming', score1: null, score2: null },
    { id: 41, group: 'G', stage: 'group', team1: 'Egypt', team2: 'Iran', date: '2026-06-26', status: 'upcoming', score1: null, score2: null },
    { id: 42, group: 'G', stage: 'group', team1: 'New Zealand', team2: 'Belgium', date: '2026-06-26', status: 'upcoming', score1: null, score2: null },
    
    // GROUP H
    { id: 43, group: 'H', stage: 'group', team1: 'Spain', team2: 'Cape Verde', date: '2026-06-15', status: 'upcoming', score1: null, score2: null },
    { id: 44, group: 'H', stage: 'group', team1: 'Saudi Arabia', team2: 'Uruguay', date: '2026-06-15', status: 'upcoming', score1: null, score2: null },
    { id: 45, group: 'H', stage: 'group', team1: 'Uruguay', team2: 'Cape Verde', date: '2026-06-21', status: 'upcoming', score1: null, score2: null },
    { id: 46, group: 'H', stage: 'group', team1: 'Spain', team2: 'Saudi Arabia', date: '2026-06-21', status: 'upcoming', score1: null, score2: null },
    { id: 47, group: 'H', stage: 'group', team1: 'Cape Verde', team2: 'Saudi Arabia', date: '2026-06-26', status: 'upcoming', score1: null, score2: null },
    { id: 48, group: 'H', stage: 'group', team1: 'Uruguay', team2: 'Spain', date: '2026-06-26', status: 'upcoming', score1: null, score2: null },
    
    // GROUP I
    { id: 49, group: 'I', stage: 'group', team1: 'France', team2: 'Senegal', date: '2026-06-16', status: 'upcoming', score1: null, score2: null },
    { id: 50, group: 'I', stage: 'group', team1: 'Iraq', team2: 'Norway', date: '2026-06-16', status: 'upcoming', score1: null, score2: null },
    { id: 51, group: 'I', stage: 'group', team1: 'France', team2: 'Iraq', date: '2026-06-22', status: 'upcoming', score1: null, score2: null },
    { id: 52, group: 'I', stage: 'group', team1: 'Norway', team2: 'Senegal', date: '2026-06-22', status: 'upcoming', score1: null, score2: null },
    { id: 53, group: 'I', stage: 'group', team1: 'Norway', team2: 'France', date: '2026-06-26', status: 'upcoming', score1: null, score2: null },
    { id: 54, group: 'I', stage: 'group', team1: 'Senegal', team2: 'Iraq', date: '2026-06-26', status: 'upcoming', score1: null, score2: null },
    
    // GROUP J
    { id: 55, group: 'J', stage: 'group', team1: 'Argentina', team2: 'Algeria', date: '2026-06-16', status: 'upcoming', score1: null, score2: null },
    { id: 56, group: 'J', stage: 'group', team1: 'Austria', team2: 'Jordan', date: '2026-06-16', status: 'upcoming', score1: null, score2: null },
    { id: 57, group: 'J', stage: 'group', team1: 'Argentina', team2: 'Austria', date: '2026-06-22', status: 'upcoming', score1: null, score2: null },
    { id: 58, group: 'J', stage: 'group', team1: 'Jordan', team2: 'Algeria', date: '2026-06-22', status: 'upcoming', score1: null, score2: null },
    { id: 59, group: 'J', stage: 'group', team1: 'Algeria', team2: 'Austria', date: '2026-06-27', status: 'upcoming', score1: null, score2: null },
    { id: 60, group: 'J', stage: 'group', team1: 'Jordan', team2: 'Argentina', date: '2026-06-27', status: 'upcoming', score1: null, score2: null },
    
    // GROUP K
    { id: 61, group: 'K', stage: 'group', team1: 'Portugal', team2: 'DR Congo', date: '2026-06-17', status: 'upcoming', score1: null, score2: null },
    { id: 62, group: 'K', stage: 'group', team1: 'Uzbekistan', team2: 'Colombia', date: '2026-06-17', status: 'upcoming', score1: null, score2: null },
    { id: 63, group: 'K', stage: 'group', team1: 'Portugal', team2: 'Uzbekistan', date: '2026-06-23', status: 'upcoming', score1: null, score2: null },
    { id: 64, group: 'K', stage: 'group', team1: 'Colombia', team2: 'DR Congo', date: '2026-06-23', status: 'upcoming', score1: null, score2: null },
    { id: 65, group: 'K', stage: 'group', team1: 'Colombia', team2: 'Portugal', date: '2026-06-27', status: 'upcoming', score1: null, score2: null },
    { id: 66, group: 'K', stage: 'group', team1: 'DR Congo', team2: 'Uzbekistan', date: '2026-06-27', status: 'upcoming', score1: null, score2: null },
    
    // GROUP L
    { id: 67, group: 'L', stage: 'group', team1: 'England', team2: 'Croatia', date: '2026-06-17', status: 'upcoming', score1: null, score2: null },
    { id: 68, group: 'L', stage: 'group', team1: 'Ghana', team2: 'Panama', date: '2026-06-17', status: 'upcoming', score1: null, score2: null },
    { id: 69, group: 'L', stage: 'group', team1: 'England', team2: 'Ghana', date: '2026-06-23', status: 'upcoming', score1: null, score2: null },
    { id: 70, group: 'L', stage: 'group', team1: 'Panama', team2: 'Croatia', date: '2026-06-23', status: 'upcoming', score1: null, score2: null },
    { id: 71, group: 'L', stage: 'group', team1: 'Panama', team2: 'England', date: '2026-06-27', status: 'upcoming', score1: null, score2: null },
    { id: 72, group: 'L', stage: 'group', team1: 'Croatia', team2: 'Ghana', date: '2026-06-27', status: 'upcoming', score1: null, score2: null },
    
    // ROUND OF 16
    { id: 73, group: 'KO', stage: 'knockout', team1: 'Winner A', team2: 'Runner-up B', date: '2026-06-29', status: 'upcoming', score1: null, score2: null },
    { id: 74, group: 'KO', stage: 'knockout', team1: 'Winner C', team2: 'Runner-up D', date: '2026-06-29', status: 'upcoming', score1: null, score2: null },
    { id: 75, group: 'KO', stage: 'knockout', team1: 'Winner E', team2: 'Runner-up F', date: '2026-06-30', status: 'upcoming', score1: null, score2: null },
    { id: 76, group: 'KO', stage: 'knockout', team1: 'Winner G', team2: 'Runner-up H', date: '2026-06-30', status: 'upcoming', score1: null, score2: null },
    { id: 77, group: 'KO', stage: 'knockout', team1: 'Winner B', team2: 'Runner-up A', date: '2026-07-01', status: 'upcoming', score1: null, score2: null },
    { id: 78, group: 'KO', stage: 'knockout', team1: 'Winner D', team2: 'Runner-up C', date: '2026-07-01', status: 'upcoming', score1: null, score2: null },
    { id: 79, group: 'KO', stage: 'knockout', team1: 'Winner F', team2: 'Runner-up E', date: '2026-07-02', status: 'upcoming', score1: null, score2: null },
    { id: 80, group: 'KO', stage: 'knockout', team1: 'Winner H', team2: 'Runner-up G', date: '2026-07-02', status: 'upcoming', score1: null, score2: null },
    
    // QUARTERFINALS
    { id: 81, group: 'KO', stage: 'knockout', team1: 'QF1 Winner', team2: 'QF5 Winner', date: '2026-07-05', status: 'upcoming', score1: null, score2: null },
    { id: 82, group: 'KO', stage: 'knockout', team1: 'QF2 Winner', team2: 'QF6 Winner', date: '2026-07-05', status: 'upcoming', score1: null, score2: null },
    { id: 83, group: 'KO', stage: 'knockout', team1: 'QF3 Winner', team2: 'QF7 Winner', date: '2026-07-06', status: 'upcoming', score1: null, score2: null },
    { id: 84, group: 'KO', stage: 'knockout', team1: 'QF4 Winner', team2: 'QF8 Winner', date: '2026-07-06', status: 'upcoming', score1: null, score2: null },
    
    // SEMIFINALS
    { id: 85, group: 'KO', stage: 'knockout', team1: 'SF1 Winner', team2: 'SF2 Winner', date: '2026-07-09', status: 'upcoming', score1: null, score2: null },
    { id: 86, group: 'KO', stage: 'knockout', team1: 'SF3 Winner', team2: 'SF4 Winner', date: '2026-07-10', status: 'upcoming', score1: null, score2: null },
    
    // 3RD PLACE & FINAL
    { id: 87, group: 'KO', stage: 'knockout', team1: 'SF1 Loser', team2: 'SF2 Loser', date: '2026-07-13', status: 'upcoming', score1: null, score2: null },
    { id: 88, group: 'KO', stage: 'knockout', team1: 'Final 1', team2: 'Final 2', date: '2026-07-14', status: 'upcoming', score1: null, score2: null }
];

// App Data
let appData = {
    players: [],
    matches: ALL_MATCHES.map(m => ({ ...m }))
};

// Admin PIN
const ADMIN_PIN = '0067';

// Initialize

document.addEventListener('DOMContentLoaded', () => {
  loadData();
  populateTeamSelect();
  setupEventListeners();
  renderAll();
    console.log('🏆 2026 World Cup Sweepstake Dashboard loaded');
    console.log('📖 Data source: Wikipedia (https://en.wikipedia.org/wiki/2026_FIFA_World_Cup)');
    console.log('👥 Players:', appData.players.length);
    console.log('⚽ Matches:', appData.matches.length);
    console.log('💾 Local Storage Status: Use verifyDataSaved() to check saved data');
});

// Event Listeners
function setupEventListeners() {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            switchTab(e.target.dataset.tab);
        });
    });

    document.querySelectorAll('.schedule-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            switchSchedule(e.target.dataset.stage);
        });
    });
}

// Tab Switching
function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    
    document.getElementById(tabName).classList.add('active');
    document.querySelector(`.nav-btn[data-tab="${tabName}"]`).classList.add('active');
    
    renderAll();
}

// Schedule Stage Switching
function switchSchedule(stage) {
    document.querySelectorAll('.schedule-list').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.schedule-btn').forEach(b => b.classList.remove('active'));
    
    document.getElementById(stage + '-schedule').classList.add('active');
    document.querySelector(`.schedule-btn[data-stage="${stage}"]`).classList.add('active');
}

// Admin Modal
function showAdminPrompt() {
    const pin = prompt('Enter admin PIN (4 digits):');
    if (pin === ADMIN_PIN) {
        document.getElementById('adminModal').classList.remove('hidden');
    } else if (pin !== null) {
        alert('Incorrect PIN');
    }
}

function closeAdminModal() {
    document.getElementById('adminModal').classList.add('hidden');
}

// Populate Team Select
function populateTeamSelect() {
    const select = document.getElementById('teamSelect');
    WORLD_CUP_TEAMS.forEach(team => {
        const option = document.createElement('option');
        option.value = team;
        option.textContent = team;
        select.appendChild(option);
    });
}

// add player
function addPlayer() {
  const nameInput = document.getElementById('playerName');
  const teamSelect = document.getElementById('teamSelect');

  const name = nameInput.value.trim();
  const team = teamSelect.value;

  if (!name || !team) {
    alert('Please enter a name and select a team');
    return;
  }

  const newPlayer = {
    id: Date.now(), // unique ID
    name: name,
    team: team
  };

  appData.players.push(newPlayer);

  // reset inputs
  nameInput.value = '';
  teamSelect.value = '';

  saveData();
  renderAdminView();
}


function bulkImportPlayers() {
  const textarea = document.getElementById('bulkImportText');
  const text = textarea.value.trim();

  if (!text) {
    alert('Paste your team list first');
    return;
  }

  const lines = text.split('\n');

  lines.forEach(line => {
    const parts = line.includes(',')
      ? line.split(',')
      : line.split('\t');

    if (parts.length < 2) return;

    const name = parts[0].trim();
    const team = parts[1].trim();

    if (!team || !name) return;

    appData.players.push({
      id: Date.now() + Math.random(),
      name,
      team
    });
  });

  textarea.value = '';

  saveData();
  renderAll();

  console.log(appData.players); // debug
}


// Remove Player
function removePlayer(playerId) {
    appData.players = appData.players.filter(p => p.id !== playerId);
    saveData();
    renderAdminView();
}

// Get Standings
function getStandings() {
    return appData.players
        .map(player => {
            const teamMatches = appData.matches.filter(m => 
                (m.team1 === player.team || m.team2 === player.team) && 
                m.score1 !== null && m.score2 !== null
            );
            
            let wins = 0, draws = 0, losses = 0;
            teamMatches.forEach(match => {
                const isTeam1 = match.team1 === player.team;
                if (isTeam1) {
                    if (match.score1 > match.score2) wins++;
                    else if (match.score1 === match.score2) draws++;
                    else losses++;
                } else {
                    if (match.score2 > match.score1) wins++;
                    else if (match.score1 === match.score2) draws++;
                    else losses++;
                }
            });
            
            return {
                ...player,
                wins,
                draws,
                losses,
                points: (wins * 3) + (draws * 1)
            };
        })
        .sort((a, b) => {
            if (b.points !== a.points) return b.points - a.points;
            return (b.wins - a.wins) || (b.draws - a.draws);
        })
        .map((p, i) => ({ ...p, position: i + 1 }));
}

// Render All
function renderAll() {
    renderStandings();
    renderMatches();
    renderSchedule();
    renderAdminView();
}

// Render Standings - Group View
function renderStandings() {
    const container = document.getElementById('standings-list');
    container.innerHTML = '';
    
    const groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
    
    groups.forEach(groupLetter => {
        // Get all teams in this group
        const groupMatches = appData.matches.filter(m => m.group === groupLetter);
        const teamsSet = new Set();
        groupMatches.forEach(m => {
            teamsSet.add(m.team1);
            teamsSet.add(m.team2);
        });
        
        const teams = Array.from(teamsSet);
        
        // Calculate standings for this group
        const groupStandings = teams.map(team => {
            const playerAssigned = appData.players.find(p => p.team === team);
            const teamMatches = groupMatches.filter(m => 
                (m.team1 === team || m.team2 === team) && 
                m.score1 !== null && m.score2 !== null
            );
            
            let wins = 0, draws = 0, losses = 0, goalsFor = 0, goalsAgainst = 0;
            teamMatches.forEach(match => {
                const isTeam1 = match.team1 === team;
                const myScore = isTeam1 ? match.score1 : match.score2;
                const oppScore = isTeam1 ? match.score2 : match.score1;
                
                goalsFor += myScore;
                goalsAgainst += oppScore;
                
                if (myScore > oppScore) wins++;
                else if (myScore === oppScore) draws++;
                else losses++;
            });
            
            return {
                team,
                playerAssigned,
                wins,
                draws,
                losses,
                goalsFor,
                goalsAgainst,
                goalDiff: goalsFor - goalsAgainst,
                points: (wins * 3) + (draws * 1),
                played: teamMatches.length
            };
        }).sort((a, b) => {
            if (b.points !== a.points) return b.points - a.points;
            if (b.goalDiff !== a.goalDiff) return b.goalDiff - a.goalDiff;
            return b.goalsFor - a.goalsFor;
        });
        
        // Create group card
        const groupCard = document.createElement('div');
        groupCard.className = 'group-card';
        
        let html = `
            <div class="group-header">
                <h3>GROUP ${groupLetter}</h3>
            </div>
            <div class="group-table">
                <div class="group-table-header">
                    <div class="team-name-col">Team</div>
                    <div class="player-col">Player</div>
                    <div class="stat-col">P</div>
                    <div class="stat-col">W</div>
                    <div class="stat-col">D</div>
                    <div class="stat-col">L</div>
                    <div class="stat-col">GF</div>
                    <div class="stat-col">GA</div>
                    <div class="stat-col">GD</div>
                    <div class="points-col">PTS</div>
                </div>
        `;
        
        groupStandings.forEach((standing, idx) => {
            const playerName = standing.playerAssigned ? standing.playerAssigned.name : '—';
            const posClass = idx === 0 ? 'pos-1st' : idx === 1 ? 'pos-2nd' : '';
            html += `
                <div class="group-row ${posClass}">
                    <div class="team-name-col"><strong>${standing.team}</strong></div>
                    <div class="player-col">${playerName}</div>
                    <div class="stat-col">${standing.played}</div>
                    <div class="stat-col">${standing.wins}</div>
                    <div class="stat-col">${standing.draws}</div>
                    <div class="stat-col">${standing.losses}</div>
                    <div class="stat-col">${standing.goalsFor}</div>
                    <div class="stat-col">${standing.goalsAgainst}</div>
                    <div class="stat-col">${standing.goalDiff > 0 ? '+' : ''}${standing.goalDiff}</div>
                    <div class="points-col"><strong>${standing.points}</strong></div>
                </div>
            `;
        });
        
        html += `</div>`;
        groupCard.innerHTML = html;
        container.appendChild(groupCard);
    });
}

function getPlayerName(team) {
    const player = appData.players.find(p => p.team === team);
    return player ? player.name : '';
}

// Render Matches
function renderMatches() {
    const groupResults = document.getElementById('group-results');
    const knockoutResults = document.getElementById('knockout-results');
    
    groupResults.innerHTML = '';
    knockoutResults.innerHTML = '';
    
    const playedMatches = appData.matches.filter(m => m.score1 !== null && m.score2 !== null);
    
    if (playedMatches.length === 0) {
        groupResults.innerHTML = '<div class="empty-state"><p>No results yet</p></div>';
        knockoutResults.innerHTML = '<div class="empty-state"><p>No results yet</p></div>';
        return;
    }
    
    playedMatches.forEach(match => {
        const card = document.createElement('div');
        card.className = 'match-card';
        card.innerHTML = `
            <div class="match-team">
                <div class="match-group">Group ${match.group}</div>
                <strong>${match.team1}</strong>
                <div class="match-player">${getPlayerName(match.team1)}</div>
            </div>
            <div class="match-score">
                <span class="score-value">${match.score1}</span>
                <span class="match-vs">-</span>
                <span class="score-value">${match.score2}</span>
            </div>
            <div class="match-team">
                <strong>${match.team2}</strong>
                <div class="match-player">${getPlayerName(match.team2)}</div>
                <div class="match-date">${match.date}</div>
            </div>
        `;
        
        if (match.stage === 'group') {
            groupResults.appendChild(card);
        } else {
            knockoutResults.appendChild(card);
        }
    });
}

// Render Schedule
function renderSchedule() {
    const groupSchedule = document.getElementById('group-schedule');
    const knockoutSchedule = document.getElementById('knockout-schedule');
    
    groupSchedule.innerHTML = '';
    knockoutSchedule.innerHTML = '';
    
    appData.matches.forEach(match => {
        const item = document.createElement('div');
        item.className = 'fixture-item';
        const dateObj = new Date(match.date + 'T12:00:00');
        const dateStr = dateObj.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' });

        item.innerHTML = `
            <div class="fixture-team">${match.team1}<div class="fixture-player">${getPlayerName(match.team1)}</div></div>
            <div class="fixture-date">${dateStr}</div>
            <div class="fixture-team fixture-team-right">${match.team2}<div class="fixture-player">${getPlayerName(match.team2)}</div></div>
        `;
        
        if (match.stage === 'group') {
            groupSchedule.appendChild(item);
        } else {
            knockoutSchedule.appendChild(item);
        }
    });
}

// Render Admin View
function renderAdminView() {
    renderPlayersList();
    renderScoreUpdates();
}

// Render Players List


function renderPlayersList() {
  const container = document.getElementById('players-list');
  container.innerHTML = '';

  appData.players.forEach(player => {
    const div = document.createElement('div');
    div.className = 'player-item';

    div.innerHTML = `
      <span class="player-name">${player.name}</span>
      <span class="player-team">${player.team}</span>
      <button class="btn-remove" onclick="removePlayer(${player.id})">Remove</button>
    `;

    container.appendChild(div);
  });
}



// Render Score Updates
function renderScoreUpdates() {
    const container = document.getElementById('score-updates');
    container.innerHTML = '<h3 style="margin-top: 0;">All Matches (' + appData.matches.length + ' total)</h3>';
    
    // Group by stage
    const groupMatches = appData.matches.filter(m => m.stage === 'group');
    const knockoutMatches = appData.matches.filter(m => m.stage === 'knockout');
    
    // Render Group Matches
    if (groupMatches.length > 0) {
        const groupSection = document.createElement('div');
        groupSection.innerHTML = '<h4>Group Stage</h4>';
        container.appendChild(groupSection);
        
        groupMatches.forEach((match, idx) => {
            const matchIndex = appData.matches.indexOf(match);
            const div = document.createElement('div');
            div.className = 'score-update';
            const status = match.score1 !== null ? 'Completed' : 'Upcoming';
            const statusClass = match.score1 !== null ? '' : 'upcoming';
            
            div.innerHTML = `
                <div class="score-update-header">
                    <span>Group ${match.group}: ${match.team1} vs ${match.team2}</span>
                    <span class="score-update-status ${statusClass}">${status}</span>
                </div>
                <div style="font-size: 12px; color: #999; margin-bottom: 12px;">${match.date}</div>
                <div class="score-input-grid">
                    <div class="score-team">
                        <label>${match.team1}</label>
                        <input type="number" min="0" id="score1_${matchIndex}" value="${match.score1 || ''}" placeholder="0">
                    </div>
                    <div class="score-vs">vs</div>
                    <div class="score-team">
                        <label>${match.team2}</label>
                        <input type="number" min="0" id="score2_${matchIndex}" value="${match.score2 || ''}" placeholder="0">
                    </div>
                </div>
                <div class="score-update-buttons">
                    <button class="btn-save" onclick="saveMatchScore(${matchIndex})">Save</button>
                    <button class="btn-clear" onclick="clearMatchScore(${matchIndex})">Clear</button>
                </div>
            `;
            container.appendChild(div);
        });
    }
    
    // Render Knockout Matches
    if (knockoutMatches.length > 0) {
        const koSection = document.createElement('div');
        koSection.innerHTML = '<h4 style="margin-top: 30px;">Knockout Stage</h4>';
        container.appendChild(koSection);
        
        knockoutMatches.forEach((match, idx) => {
            const matchIndex = appData.matches.indexOf(match);
            const div = document.createElement('div');
            div.className = 'score-update';
            const status = match.score1 !== null ? 'Completed' : 'Upcoming';
            const statusClass = match.score1 !== null ? '' : 'upcoming';
            
            // Determine round name
            let roundName = 'Round of 16';
            if (matchIndex >= 80) roundName = matchIndex <= 83 ? 'Quarterfinals' : matchIndex <= 85 ? 'Semifinals' : matchIndex === 86 ? '3rd Place' : 'Final';
            
            div.innerHTML = `
                <div class="score-update-header">
                    <span>${roundName}: ${match.team1} vs ${match.team2}</span>
                    <span class="score-update-status ${statusClass}">${status}</span>
                </div>
                <div style="font-size: 12px; color: #999; margin-bottom: 12px;">${match.date}</div>
                <div class="score-input-grid">
                    <div class="score-team">
                        <label>${match.team1}</label>
                        <input type="number" min="0" id="score1_${matchIndex}" value="${match.score1 || ''}" placeholder="0">
                    </div>
                    <div class="score-vs">vs</div>
                    <div class="score-team">
                        <label>${match.team2}</label>
                        <input type="number" min="0" id="score2_${matchIndex}" value="${match.score2 || ''}" placeholder="0">
                    </div>
                </div>
                <div class="score-update-buttons">
                    <button class="btn-save" onclick="saveMatchScore(${matchIndex})">Save</button>
                    <button class="btn-clear" onclick="clearMatchScore(${matchIndex})">Clear</button>
                </div>
            `;
            container.appendChild(div);
        });
    }
}

// Save Match Score
function saveMatchScore(matchIndex) {
    const score1 = document.getElementById(`score1_${matchIndex}`).value;
    const score2 = document.getElementById(`score2_${matchIndex}`).value;
    
    if (score1 === '' || score2 === '') {
        alert('Please enter both scores');
        return;
    }
    
    const match = appData.matches[matchIndex];
    appData.matches[matchIndex].score1 = parseInt(score1);
    appData.matches[matchIndex].score2 = parseInt(score2);
    
    // Log Wikipedia update
    logWikipediaUpdate(`${match.team1} ${score1} - ${score2} ${match.team2}`);
    
    saveData();
    renderAll();
    alert('Score saved!');
}

// Clear Match Score
function clearMatchScore(matchIndex) {
    appData.matches[matchIndex].score1 = null;
    appData.matches[matchIndex].score2 = null;
    saveData();
    renderScoreUpdates();
}

// Export Data
function exportData() {
    const dataStr = JSON.stringify(appData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = '2026_sweepstake_data.json';
    link.click();
    alert('Data exported!');
}

// Export Players to File (Teams with Players)
function exportPlayersToFile() {
    const playersData = {
        players: appData.players.map(p => ({
            id: p.id,
            name: p.name,
            team: p.team
        })),
        lastUpdated: new Date().toISOString(),
        totalPlayers: appData.players.length
    };
    
    const dataStr = JSON.stringify(playersData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'players.json';
    link.click();
    alert(`✅ Exported ${appData.players.length} players to players.json`);
}

// Verify Data is Saved (for troubleshooting)
function verifyDataSaved() {
    const saved = localStorage.getItem('sweepstake_data');
    if (saved) {
        const data = JSON.parse(saved);
        console.log('✅ Data saved in localStorage');
        console.log('📊 Players saved:', data.players.length);
        data.players.forEach(p => {
            console.log(`   - ${p.name} -> ${p.team}`);
        });
        return true;
    } else {
        console.log('❌ No data saved in localStorage');
        return false;
    }
}

// Clear All Data
function clearAllData() {
    if (confirm('Delete all players and scores?')) {
        if (confirm('Really sure? This cannot be undone.')) {
            appData = {
                players: [],
                matches: ALL_MATCHES.map(m => ({ ...m }))
            };
            saveData();
            renderAll();
            alert('Data cleared');
        }
    }
}

// Log Wikipedia Update
function logWikipediaUpdate(matchDescription) {
    const timestamp = new Date().toLocaleString();
    console.log(`📖 Wikipedia Update [${timestamp}]: ${matchDescription}`);
    console.log('Source: https://en.wikipedia.org/wiki/2026_FIFA_World_Cup');
}

function saveData() {
    // No-op: data is not persisted to localStorage.
    // Players come from players.json; scores are updated in ALL_MATCHES in script.js.
}


function loadData() {
    appData.players = PLAYERS_DATA.map(p => ({ ...p }));
    appData.matches = ALL_MATCHES.map(m => ({ ...m }));
}

