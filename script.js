// Complete 2026 Group Stage & Knockout Fixtures
const ALL_MATCHES = [
    // GROUP A
    { id: 1,  group: 'A', stage: 'group',    team1: 'Mexico',            team2: 'South Africa',          date: '2026-06-11', status: 'completed', score1: 2,    score2: 0    },
    { id: 2,  group: 'A', stage: 'group',    team1: 'South Korea',       team2: 'Czech Republic',        date: '2026-06-11', status: 'completed', score1: 2,    score2: 1    },
    { id: 3,  group: 'A', stage: 'group',    team1: 'Mexico',            team2: 'South Korea',           date: '2026-06-18', status: 'completed', score1: 1,    score2: 0    },
    { id: 4,  group: 'A', stage: 'group',    team1: 'Czech Republic',    team2: 'South Africa',          date: '2026-06-18', status: 'completed', score1: 1,    score2: 1    },
    { id: 5,  group: 'A', stage: 'group',    team1: 'Czech Republic',    team2: 'Mexico',                date: '2026-06-24', status: 'upcoming',  score1: null, score2: null },
    { id: 6,  group: 'A', stage: 'group',    team1: 'South Africa',      team2: 'South Korea',           date: '2026-06-24', status: 'upcoming',  score1: null, score2: null },

    // GROUP B
    { id: 7,  group: 'B', stage: 'group',    team1: 'Canada',            team2: 'Bosnia and Herzegovina',date: '2026-06-12', status: 'completed', score1: 1,    score2: 1    },
    { id: 8,  group: 'B', stage: 'group',    team1: 'Qatar',             team2: 'Switzerland',           date: '2026-06-13', status: 'completed', score1: 1,    score2: 1    },
    { id: 9,  group: 'B', stage: 'group',    team1: 'Switzerland',       team2: 'Bosnia and Herzegovina',date: '2026-06-18', status: 'completed', score1: 4,    score2: 1    },
    { id: 10, group: 'B', stage: 'group',    team1: 'Canada',            team2: 'Qatar',                 date: '2026-06-18', status: 'completed', score1: 6,    score2: 0    },
    { id: 11, group: 'B', stage: 'group',    team1: 'Switzerland',       team2: 'Canada',                date: '2026-06-24', status: 'upcoming',  score1: null, score2: null },
    { id: 12, group: 'B', stage: 'group',    team1: 'Bosnia and Herzegovina', team2: 'Qatar',            date: '2026-06-24', status: 'upcoming',  score1: null, score2: null },

    // GROUP C
    { id: 13, group: 'C', stage: 'group',    team1: 'Brazil',            team2: 'Morocco',               date: '2026-06-13', status: 'completed', score1: 1,    score2: 1    },
    { id: 14, group: 'C', stage: 'group',    team1: 'Haiti',             team2: 'Scotland',              date: '2026-06-13', status: 'completed', score1: 0,    score2: 1    },
    { id: 15, group: 'C', stage: 'group',    team1: 'Scotland',          team2: 'Morocco',               date: '2026-06-19', status: 'completed', score1: 0,    score2: 1    },
    { id: 16, group: 'C', stage: 'group',    team1: 'Brazil',            team2: 'Haiti',                 date: '2026-06-19', status: 'completed', score1: 3,    score2: 0    },
    { id: 17, group: 'C', stage: 'group',    team1: 'Scotland',          team2: 'Brazil',                date: '2026-06-24', status: 'upcoming',  score1: null, score2: null },
    { id: 18, group: 'C', stage: 'group',    team1: 'Morocco',           team2: 'Haiti',                 date: '2026-06-24', status: 'upcoming',  score1: null, score2: null },

    // GROUP D
    { id: 19, group: 'D', stage: 'group',    team1: 'USA',               team2: 'Paraguay',              date: '2026-06-12', status: 'completed', score1: 4,    score2: 1    },
    { id: 20, group: 'D', stage: 'group',    team1: 'Australia',         team2: 'Turkey',                date: '2026-06-13', status: 'completed', score1: 2,    score2: 0    },
    { id: 21, group: 'D', stage: 'group',    team1: 'USA',               team2: 'Australia',             date: '2026-06-19', status: 'completed', score1: 2,    score2: 0    },
    { id: 22, group: 'D', stage: 'group',    team1: 'Turkey',            team2: 'Paraguay',              date: '2026-06-19', status: 'completed', score1: 0,    score2: 1    },
    { id: 23, group: 'D', stage: 'group',    team1: 'Turkey',            team2: 'USA',                   date: '2026-06-25', status: 'upcoming',  score1: null, score2: null },
    { id: 24, group: 'D', stage: 'group',    team1: 'Paraguay',          team2: 'Australia',             date: '2026-06-25', status: 'upcoming',  score1: null, score2: null },

    // GROUP E
    { id: 25, group: 'E', stage: 'group',    team1: 'Germany',           team2: 'Curaçao',               date: '2026-06-14', status: 'completed', score1: 7,    score2: 1    },
    { id: 26, group: 'E', stage: 'group',    team1: 'Ivory Coast',       team2: 'Ecuador',               date: '2026-06-14', status: 'completed', score1: 1,    score2: 0    },
    { id: 27, group: 'E', stage: 'group',    team1: 'Germany',           team2: 'Ivory Coast',           date: '2026-06-20', status: 'completed', score1: 2,    score2: 1    },
    { id: 28, group: 'E', stage: 'group',    team1: 'Ecuador',           team2: 'Curaçao',               date: '2026-06-20', status: 'completed', score1: 0,    score2: 0    },
    { id: 29, group: 'E', stage: 'group',    team1: 'Curaçao',           team2: 'Ivory Coast',           date: '2026-06-25', status: 'upcoming',  score1: null, score2: null },
    { id: 30, group: 'E', stage: 'group',    team1: 'Ecuador',           team2: 'Germany',               date: '2026-06-25', status: 'upcoming',  score1: null, score2: null },

    // GROUP F
    { id: 31, group: 'F', stage: 'group',    team1: 'Netherlands',       team2: 'Japan',                 date: '2026-06-14', status: 'completed', score1: 2,    score2: 2    },
    { id: 32, group: 'F', stage: 'group',    team1: 'Sweden',            team2: 'Tunisia',               date: '2026-06-14', status: 'completed', score1: 5,    score2: 1    },
    { id: 33, group: 'F', stage: 'group',    team1: 'Netherlands',       team2: 'Sweden',                date: '2026-06-20', status: 'completed', score1: 5,    score2: 1    },
    { id: 34, group: 'F', stage: 'group',    team1: 'Tunisia',           team2: 'Japan',                 date: '2026-06-20', status: 'completed', score1: 0,    score2: 4    },
    { id: 35, group: 'F', stage: 'group',    team1: 'Japan',             team2: 'Sweden',                date: '2026-06-25', status: 'upcoming',  score1: null, score2: null },
    { id: 36, group: 'F', stage: 'group',    team1: 'Tunisia',           team2: 'Netherlands',           date: '2026-06-25', status: 'upcoming',  score1: null, score2: null },

    // GROUP G
    { id: 37, group: 'G', stage: 'group',    team1: 'Belgium',           team2: 'Egypt',                 date: '2026-06-15', status: 'completed', score1: 1,    score2: 1    },
    { id: 38, group: 'G', stage: 'group',    team1: 'Iran',              team2: 'New Zealand',           date: '2026-06-15', status: 'completed', score1: 2,    score2: 2    },
    { id: 39, group: 'G', stage: 'group',    team1: 'Belgium',           team2: 'Iran',                  date: '2026-06-21', status: 'completed', score1: 0,    score2: 0    },
    { id: 40, group: 'G', stage: 'group',    team1: 'New Zealand',       team2: 'Egypt',                 date: '2026-06-21', status: 'completed', score1: 1,    score2: 3    },
    { id: 41, group: 'G', stage: 'group',    team1: 'Egypt',             team2: 'Iran',                  date: '2026-06-26', status: 'upcoming',  score1: null, score2: null },
    { id: 42, group: 'G', stage: 'group',    team1: 'New Zealand',       team2: 'Belgium',               date: '2026-06-26', status: 'upcoming',  score1: null, score2: null },

    // GROUP H
    { id: 43, group: 'H', stage: 'group',    team1: 'Spain',             team2: 'Cape Verde',            date: '2026-06-15', status: 'completed', score1: 0,    score2: 0    },
    { id: 44, group: 'H', stage: 'group',    team1: 'Saudi Arabia',      team2: 'Uruguay',               date: '2026-06-15', status: 'completed', score1: 1,    score2: 1    },
    { id: 45, group: 'H', stage: 'group',    team1: 'Uruguay',           team2: 'Cape Verde',            date: '2026-06-21', status: 'completed', score1: 2,    score2: 2    },
    { id: 46, group: 'H', stage: 'group',    team1: 'Spain',             team2: 'Saudi Arabia',          date: '2026-06-21', status: 'completed', score1: 4,    score2: 0    },
    { id: 47, group: 'H', stage: 'group',    team1: 'Cape Verde',        team2: 'Saudi Arabia',          date: '2026-06-26', status: 'upcoming',  score1: null, score2: null },
    { id: 48, group: 'H', stage: 'group',    team1: 'Uruguay',           team2: 'Spain',                 date: '2026-06-26', status: 'upcoming',  score1: null, score2: null },

    // GROUP I
    { id: 49, group: 'I', stage: 'group',    team1: 'France',            team2: 'Senegal',               date: '2026-06-16', status: 'completed', score1: 3,    score2: 1    },
    { id: 50, group: 'I', stage: 'group',    team1: 'Iraq',              team2: 'Norway',                date: '2026-06-16', status: 'completed', score1: 1,    score2: 4    },
    { id: 51, group: 'I', stage: 'group',    team1: 'France',            team2: 'Iraq',                  date: '2026-06-22', status: 'completed', score1: 3,    score2: 0    },
    { id: 52, group: 'I', stage: 'group',    team1: 'Norway',            team2: 'Senegal',               date: '2026-06-22', status: 'completed', score1: 3,    score2: 2    },
    { id: 53, group: 'I', stage: 'group',    team1: 'Norway',            team2: 'France',                date: '2026-06-26', status: 'upcoming',  score1: null, score2: null },
    { id: 54, group: 'I', stage: 'group',    team1: 'Senegal',           team2: 'Iraq',                  date: '2026-06-26', status: 'upcoming',  score1: null, score2: null },

    // GROUP J
    { id: 55, group: 'J', stage: 'group',    team1: 'Argentina',         team2: 'Algeria',               date: '2026-06-16', status: 'completed', score1: 3,    score2: 0    },
    { id: 56, group: 'J', stage: 'group',    team1: 'Austria',           team2: 'Jordan',                date: '2026-06-16', status: 'completed', score1: 3,    score2: 1    },
    { id: 57, group: 'J', stage: 'group',    team1: 'Argentina',         team2: 'Austria',               date: '2026-06-22', status: 'completed', score1: 2,    score2: 0    },
    { id: 58, group: 'J', stage: 'group',    team1: 'Jordan',            team2: 'Algeria',               date: '2026-06-22', status: 'completed', score1: 1,    score2: 2    },
    { id: 59, group: 'J', stage: 'group',    team1: 'Algeria',           team2: 'Austria',               date: '2026-06-27', status: 'upcoming',  score1: null, score2: null },
    { id: 60, group: 'J', stage: 'group',    team1: 'Jordan',            team2: 'Argentina',             date: '2026-06-27', status: 'upcoming',  score1: null, score2: null },

    // GROUP K
    { id: 61, group: 'K', stage: 'group',    team1: 'Portugal',          team2: 'DR Congo',              date: '2026-06-17', status: 'completed', score1: 1,    score2: 1    },
    { id: 62, group: 'K', stage: 'group',    team1: 'Uzbekistan',        team2: 'Colombia',              date: '2026-06-17', status: 'completed', score1: 1,    score2: 3    },
    { id: 63, group: 'K', stage: 'group',    team1: 'Portugal',          team2: 'Uzbekistan',            date: '2026-06-23', status: 'completed', score1: 5,    score2: 0    },
    { id: 64, group: 'K', stage: 'group',    team1: 'Colombia',          team2: 'DR Congo',              date: '2026-06-23', status: 'completed', score1: 1,    score2: 0    },
    { id: 65, group: 'K', stage: 'group',    team1: 'Colombia',          team2: 'Portugal',              date: '2026-06-27', status: 'upcoming',  score1: null, score2: null },
    { id: 66, group: 'K', stage: 'group',    team1: 'DR Congo',          team2: 'Uzbekistan',            date: '2026-06-27', status: 'upcoming',  score1: null, score2: null },

    // GROUP L
    { id: 67, group: 'L', stage: 'group',    team1: 'England',           team2: 'Croatia',               date: '2026-06-17', status: 'completed', score1: 4,    score2: 2    },
    { id: 68, group: 'L', stage: 'group',    team1: 'Ghana',             team2: 'Panama',                date: '2026-06-17', status: 'completed', score1: 1,    score2: 0    },
    { id: 69, group: 'L', stage: 'group',    team1: 'England',           team2: 'Ghana',                 date: '2026-06-23', status: 'completed', score1: 0,    score2: 0    },
    { id: 70, group: 'L', stage: 'group',    team1: 'Panama',            team2: 'Croatia',               date: '2026-06-23', status: 'completed', score1: 0,    score2: 1    },
    { id: 71, group: 'L', stage: 'group',    team1: 'Panama',            team2: 'England',               date: '2026-06-27', status: 'upcoming',  score1: null, score2: null },
    { id: 72, group: 'L', stage: 'group',    team1: 'Croatia',           team2: 'Ghana',                 date: '2026-06-27', status: 'upcoming',  score1: null, score2: null },

    // ROUND OF 16
    { id: 73, group: 'KO', stage: 'knockout', team1: 'Winner A',         team2: 'Runner-up B',           date: '2026-06-29', status: 'upcoming',  score1: null, score2: null },
    { id: 74, group: 'KO', stage: 'knockout', team1: 'Winner C',         team2: 'Runner-up D',           date: '2026-06-29', status: 'upcoming',  score1: null, score2: null },
    { id: 75, group: 'KO', stage: 'knockout', team1: 'Winner E',         team2: 'Runner-up F',           date: '2026-06-30', status: 'upcoming',  score1: null, score2: null },
    { id: 76, group: 'KO', stage: 'knockout', team1: 'Winner G',         team2: 'Runner-up H',           date: '2026-06-30', status: 'upcoming',  score1: null, score2: null },
    { id: 77, group: 'KO', stage: 'knockout', team1: 'Winner B',         team2: 'Runner-up A',           date: '2026-07-01', status: 'upcoming',  score1: null, score2: null },
    { id: 78, group: 'KO', stage: 'knockout', team1: 'Winner D',         team2: 'Runner-up C',           date: '2026-07-01', status: 'upcoming',  score1: null, score2: null },
    { id: 79, group: 'KO', stage: 'knockout', team1: 'Winner F',         team2: 'Runner-up E',           date: '2026-07-02', status: 'upcoming',  score1: null, score2: null },
    { id: 80, group: 'KO', stage: 'knockout', team1: 'Winner H',         team2: 'Runner-up G',           date: '2026-07-02', status: 'upcoming',  score1: null, score2: null },

    // QUARTERFINALS
    { id: 81, group: 'KO', stage: 'knockout', team1: 'QF1 Winner',       team2: 'QF5 Winner',            date: '2026-07-05', status: 'upcoming',  score1: null, score2: null },
    { id: 82, group: 'KO', stage: 'knockout', team1: 'QF2 Winner',       team2: 'QF6 Winner',            date: '2026-07-05', status: 'upcoming',  score1: null, score2: null },
    { id: 83, group: 'KO', stage: 'knockout', team1: 'QF3 Winner',       team2: 'QF7 Winner',            date: '2026-07-06', status: 'upcoming',  score1: null, score2: null },
    { id: 84, group: 'KO', stage: 'knockout', team1: 'QF4 Winner',       team2: 'QF8 Winner',            date: '2026-07-06', status: 'upcoming',  score1: null, score2: null },

    // SEMIFINALS
    { id: 85, group: 'KO', stage: 'knockout', team1: 'SF1 Winner',       team2: 'SF2 Winner',            date: '2026-07-09', status: 'upcoming',  score1: null, score2: null },
    { id: 86, group: 'KO', stage: 'knockout', team1: 'SF3 Winner',       team2: 'SF4 Winner',            date: '2026-07-10', status: 'upcoming',  score1: null, score2: null },

    // 3RD PLACE & FINAL
    { id: 87, group: 'KO', stage: 'knockout', team1: 'SF1 Loser',        team2: 'SF2 Loser',             date: '2026-07-13', status: 'upcoming',  score1: null, score2: null },
    { id: 88, group: 'KO', stage: 'knockout', team1: 'Final 1',          team2: 'Final 2',               date: '2026-07-14', status: 'upcoming',  score1: null, score2: null }
];

let appData = { players: [], matches: [] };

// ── Init ─────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    loadData();
    setupEventListeners();
    renderAll();
});

function loadData() {
    appData.players = PLAYERS_DATA.map(p => ({ ...p }));
    appData.matches  = ALL_MATCHES.map(m => ({ ...m }));
}

// ── Navigation ────────────────────────────────────────────────────────────────

function setupEventListeners() {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => switchTab(e.target.dataset.tab));
    });
    document.querySelectorAll('.schedule-btn').forEach(btn => {
        btn.addEventListener('click', (e) => switchSchedule(e.target.dataset.stage));
    });
}

function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(tabName).classList.add('active');
    document.querySelector(`.nav-btn[data-tab="${tabName}"]`).classList.add('active');
    renderAll();
}

function switchSchedule(stage) {
    document.querySelectorAll('.schedule-list').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.schedule-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(stage + '-schedule').classList.add('active');
    document.querySelector(`.schedule-btn[data-stage="${stage}"]`).classList.add('active');
}

function getPlayerName(team) {
    const player = appData.players.find(p => p.team === team);
    return player ? player.name : '';
}

// ── Render ────────────────────────────────────────────────────────────────────

function renderAll() {
    renderStatsBar();
    renderStandings();
    renderSchedule();
}

function renderStatsBar() {
    const container = document.getElementById('stats-bar');
    const played = appData.matches.filter(m => m.score1 !== null);
    const totalGoals = played.reduce((sum, m) => sum + m.score1 + m.score2, 0);
    const avgGoals = played.length ? (totalGoals / played.length).toFixed(2) : '0.00';
    const groupTotal = appData.matches.filter(m => m.stage === 'group').length;
    const groupPlayed = played.filter(m => m.stage === 'group').length;

    container.innerHTML = `
        <div class="stat-pill"><span class="stat-value">${played.length}</span><span class="stat-label">Played</span></div>
        <div class="stat-pill"><span class="stat-value">${totalGoals}</span><span class="stat-label">Goals</span></div>
        <div class="stat-pill"><span class="stat-value">${avgGoals}</span><span class="stat-label">Goals / Match</span></div>
        <div class="stat-pill"><span class="stat-value">${groupPlayed}/${groupTotal}</span><span class="stat-label">Group Stage</span></div>
    `;
}

function renderStandings() {
    const container = document.getElementById('standings-list');
    container.innerHTML = '';

    ['A','B','C','D','E','F','G','H','I','J','K','L'].forEach(groupLetter => {
        const groupMatches = appData.matches.filter(m => m.group === groupLetter);
        const teams = [...new Set(groupMatches.flatMap(m => [m.team1, m.team2]))];

        const groupStandings = teams.map(team => {
            const playerAssigned = appData.players.find(p => p.team === team);
            const played = groupMatches.filter(m =>
                (m.team1 === team || m.team2 === team) && m.score1 !== null
            );

            let wins = 0, draws = 0, losses = 0, goalsFor = 0, goalsAgainst = 0;
            played.forEach(match => {
                const isTeam1 = match.team1 === team;
                const my  = isTeam1 ? match.score1 : match.score2;
                const opp = isTeam1 ? match.score2 : match.score1;
                goalsFor += my; goalsAgainst += opp;
                if (my > opp) wins++; else if (my === opp) draws++; else losses++;
            });

            const points = wins * 3 + draws;
            return {
                team, playerAssigned, wins, draws, losses,
                goalsFor, goalsAgainst,
                goalDiff: goalsFor - goalsAgainst,
                points,
                played: played.length,
                maxPossible: points + (3 - played.length) * 3
            };
        }).sort((a, b) =>
            b.points - a.points || b.goalDiff - a.goalDiff || b.goalsFor - a.goalsFor
        );

        // A team is out once it can no longer catch at least 2 rivals (i.e. can't reach top 2)
        groupStandings.forEach(s => {
            const aheadCount = groupStandings.filter(o => o !== s && o.points > s.maxPossible).length;
            s.eliminated = aheadCount >= 2;
        });

        const groupCard = document.createElement('div');
        groupCard.className = 'group-card';

        let html = `
            <div class="group-header"><h3>GROUP ${groupLetter}</h3></div>
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
                </div>`;

        groupStandings.forEach((s, idx) => {
            const playerName = s.playerAssigned ? s.playerAssigned.name : '—';
            const posClass = idx === 0 ? 'pos-1st' : idx === 1 ? 'pos-2nd' : '';
            const eliminatedClass = s.eliminated ? ' eliminated' : '';
            html += `
                <div class="group-row ${posClass}${eliminatedClass}">
                    <div class="team-name-col"><strong>${s.team}</strong>${s.eliminated ? '<span class="out-badge">OUT</span>' : ''}</div>
                    <div class="player-col">${playerName}</div>
                    <div class="stat-col">${s.played}</div>
                    <div class="stat-col">${s.wins}</div>
                    <div class="stat-col">${s.draws}</div>
                    <div class="stat-col">${s.losses}</div>
                    <div class="stat-col">${s.goalsFor}</div>
                    <div class="stat-col">${s.goalsAgainst}</div>
                    <div class="stat-col">${s.goalDiff > 0 ? '+' : ''}${s.goalDiff}</div>
                    <div class="points-col"><strong>${s.points}</strong></div>
                </div>`;
        });

        html += '</div>';
        groupCard.innerHTML = html;
        container.appendChild(groupCard);
    });
}

function renderSchedule() {
    const groupSchedule    = document.getElementById('group-schedule');
    const knockoutSchedule = document.getElementById('knockout-schedule');
    groupSchedule.innerHTML = '';
    knockoutSchedule.innerHTML = '';

    // Group stage — grouped by group letter
    ['A','B','C','D','E','F','G','H','I','J','K','L'].forEach(letter => {
        const matches = appData.matches.filter(m => m.group === letter);
        if (!matches.length) return;

        const section = document.createElement('div');
        section.className = 'fixture-group';
        section.innerHTML = `<div class="fixture-group-header">GROUP ${letter}</div>`;

        matches.forEach(match => {
            const dateStr = new Date(match.date + 'T12:00:00')
                .toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' });
            const p1 = getPlayerName(match.team1);
            const p2 = getPlayerName(match.team2);
            const played = match.score1 !== null;
            const item = document.createElement('div');
            item.className = 'fixture-item' + (played ? ' fixture-played' : '');
            item.innerHTML = `
                <div class="fixture-team">${match.team1}${p1 ? `<div class="fixture-player">${p1}</div>` : ''}</div>
                <div class="fixture-center">
                    <div class="fixture-date">${dateStr}</div>
                    ${played ? `<div class="fixture-result">${match.score1} – ${match.score2}</div>` : ''}
                </div>
                <div class="fixture-team fixture-team-right">${match.team2}${p2 ? `<div class="fixture-player">${p2}</div>` : ''}</div>`;
            section.appendChild(item);
        });

        groupSchedule.appendChild(section);
    });

    // Knockout stage — grouped by round
    const rounds = [
        { label: 'Round of 16',  indices: [72, 73, 74, 75, 76, 77, 78, 79] },
        { label: 'Quarter-finals', indices: [80, 81, 82, 83] },
        { label: 'Semi-finals',  indices: [84, 85] },
        { label: 'Third Place',  indices: [86] },
        { label: 'Final',        indices: [87] }
    ];

    rounds.forEach(({ label, indices }) => {
        const matches = indices.map(i => appData.matches[i]).filter(Boolean);
        if (!matches.length) return;

        const section = document.createElement('div');
        section.className = 'fixture-group';
        section.innerHTML = `<div class="fixture-group-header">${label}</div>`;

        matches.forEach(match => {
            const dateStr = new Date(match.date + 'T12:00:00')
                .toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' });
            const p1 = getPlayerName(match.team1);
            const p2 = getPlayerName(match.team2);
            const played = match.score1 !== null;
            const item = document.createElement('div');
            item.className = 'fixture-item' + (played ? ' fixture-played' : '');
            item.innerHTML = `
                <div class="fixture-team">${match.team1}${p1 ? `<div class="fixture-player">${p1}</div>` : ''}</div>
                <div class="fixture-center">
                    <div class="fixture-date">${dateStr}</div>
                    ${played ? `<div class="fixture-result">${match.score1} – ${match.score2}</div>` : ''}
                </div>
                <div class="fixture-team fixture-team-right">${match.team2}${p2 ? `<div class="fixture-player">${p2}</div>` : ''}</div>`;
            section.appendChild(item);
        });

        knockoutSchedule.appendChild(section);
    });
}
