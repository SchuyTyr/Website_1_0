// fantasy-tables.js -- Schuyler Meyer -- 2022 //

let standings = document.getElementById('standings');
let players = document.getElementById('players');


standings.innerHTML = `
  <table class="center">
  <colgroup>
      <col span="1" class="colHover">
      <col span="1" class="colHover">
      <col span="1" class="colHover">
      <col span="1" class="colHover">
      <col span="1" class="colHover">
      <col span="1" class="colHover">
      <col span="1" class="colHover">
      <col span="1" class="colHover">
      <col span="1" class="colHover">
      <col span="1" class="colHover">
      <col span="1" class="colHover">
      <col span="1" class="colHover">
  </colgroup>
  <tr class="noHover">
    <th class="standings" title="Rank">Rank</th>
    <th class="standings" title="Team">Team</th>
    <th class="standings" title="Games Played"><abbr title="Games Played">GP</abbr></th>
    <th class="standings" title="Wins"><abbr title="Wins">W</abbr></th>
    <th class="standings" title="Losses"><abbr title="Losses">L</abbr></th>
    <th class="standings" title="Overtime Wins"><abbr title="Overtime Wins">OTW</abbr></th>
    <th class="standings" title="Overtime Losses"><abbr title="Overtime Losses">OTL</abbr></th>
    <th class="standings" title="Points"><abbr title="Points">Pts</abbr></th>
    <th class="standings" title="Goals For"><abbr title="Goals For">GF</abbr></th>
    <th class="standings" title="Goals Against"><abbr title="Goals Against">GA</abbr></th>
    <th class="standings" title="Goal Differential"><abbr title="Goal Differential">Diff</abbr></th>
    <th class="standings" title="Penalty Minutes"><abbr title="Penalty Minutes">PIM</abbr></th>
  </tr>
  <tr id="team1">
    <td>1</td>
    <td>Team 1</td>
    <td>20</td>
    <td>15</td>
    <td>3</td>
    <td>0</td>
    <td>2</td>
    <td>47</td>
    <td>74</td>
    <td>44</td>
    <td>+30</td>
    <td>142</td>
  </tr>
  <tr id="team2">
    <td>2</td>
    <td>Team 2</td>
    <td>20</td>
    <td>16</td>
    <td>3</td>
    <td>3</td>
    <td>1</td>
    <td>46</td>
    <td>66</td>
    <td>45</td>
    <td>+21</td>
    <td>154</td>
  </tr>
  <tr id="team3">
    <td>3</td>
    <td>Team 3</td>
    <td>20</td>
    <td>10</td>
    <td>5</td>
    <td>3</td>
    <td>5</td>
    <td>32</td>
    <td>48</td>
    <td>47</td>
    <td>+1</td>
    <td>152</td>
  </tr>
  <tr id="team4">
    <td>4</td>
    <td>Team 4</td>
    <td>20</td>
    <td>7</td>
    <td>12</td>
    <td>1</td>
    <td>1</td>
    <td>21</td>
    <td>54</td>
    <td>65</td>
    <td>-11</td>
    <td>195</td>
  </tr>
  <tr id="team5">
    <td>5</td>
    <td>Team 5</td>
    <td>20</td>
    <td>6</td>
    <td>13</td>
    <td>0</td>
    <td>1</td>
    <td>19</td>
    <td>52</td>
    <td>64</td>
    <td>-12</td>
    <td>202</td>
  </tr>
  <tr id="team6">
    <td>6</td>
    <td>Team 6</td>
    <td>20</td>
    <td>6</td>
    <td>14</td>
    <td>3</td>
    <td>0</td>
    <td>15</td>
    <td>44</td>
    <td>73</td>
    <td>-29</td>
    <td>176</td>
  </tr>
</table>
`;

//-------------------------------------------------------------------------------------//

players.innerHTML = `
  <table class="center">
  <colgroup>
      <col span="1" class="colHover">
      <col span="1" class="colHover">
      <col span="1" class="colHover">
      <col span="1" class="colHover">
      <col span="1" class="colHover">
      <col span="1" class="colHover">
      <col span="1" class="colHover">
      <col span="1" class="colHover">
      <col span="1" class="colHover">
      <col span="1" class="colHover">
      <col span="1" class="colHover">
      <col span="1" class="colHover">
  </colgroup>
  <tr class="noHover">
    <th class="standings" title="Rank">Rank</th>
    <th class="standings" title="Team">Team</th>
    <th class="standings" title="Games Played"><abbr title="Games Played">GP</abbr></th>
    <th class="standings" title="Wins"><abbr title="Wins">W</abbr></th>
    <th class="standings" title="Losses"><abbr title="Losses">L</abbr></th>
    <th class="standings" title="Overtime Wins"><abbr title="Overtime Wins">OTW</abbr></th>
    <th class="standings" title="Overtime Losses"><abbr title="Overtime Losses">OTL</abbr></th>
    <th class="standings" title="Points"><abbr title="Points">Pts</abbr></th>
    <th class="standings" title="Goals For"><abbr title="Goals For">GF</abbr></th>
    <th class="standings" title="Goals Against"><abbr title="Goals Against">GA</abbr></th>
    <th class="standings" title="Goal Differential"><abbr title="Goal Differential">Diff</abbr></th>
    <th class="standings" title="Penalty Minutes"><abbr title="Penalty Minutes">PIM</abbr></th>
  </tr>
  <tr class="CTW">
    <td>1</td>
    <td class="CTW"><a class="link7" href="https://twitter.com/CTWhaleHockey"><abbr title="Connecticut Whale">CTW</abbr></a></td>
    <td>20</td>
    <td>15</td>
    <td>3</td>
    <td>0</td>
    <td>2</td>
    <td>47</td>
    <td>74</td>
    <td>44</td>
    <td>+30</td>
    <td>142</td>
  </tr>
  <tr class="TOR">
    <td>2</td>
    <td class="TOR"><a class="link7" href="https://twitter.com/TheTorontoSix"><abbr title="Toronto Six">TOR</abbr></a></td>
    <td>20</td>
    <td>16</td>
    <td>3</td>
    <td>3</td>
    <td>1</td>
    <td>46</td>
    <td>66</td>
    <td>45</td>
    <td>+21</td>
    <td>154</td>
  </tr>
  <tr class="BOS">
    <td>3</td>
    <td class="BOS"><a class="link7" href="https://twitter.com/TheBostonPride"><abbr title="Boston Pride">BOS</abbr></a></td>
    <td>20</td>
    <td>10</td>
    <td>5</td>
    <td>3</td>
    <td>5</td>
    <td>32</td>
    <td>48</td>
    <td>47</td>
    <td>+1</td>
    <td>152</td>
  </tr>
  <tr class="MET">
    <td>4</td>
    <td class="MET"><a class="link7" href="https://twitter.com/Riveters"><abbr title="Metropoliton Riveters">MET</abbr></a></td>
    <td>20</td>
    <td>7</td>
    <td>12</td>
    <td>1</td>
    <td>1</td>
    <td>21</td>
    <td>54</td>
    <td>65</td>
    <td>-11</td>
    <td>195</td>
  </tr>
  <tr class="MIN">
    <td>5</td>
    <td class="MIN"><a class="link7" href="https://twitter.com/WhitecapsHockey"><abbr title="Minnesota Whitecaps">MIN</abbr></a></td>
    <td>20</td>
    <td>6</td>
    <td>13</td>
    <td>0</td>
    <td>1</td>
    <td>19</td>
    <td>52</td>
    <td>64</td>
    <td>-12</td>
    <td>202</td>
  </tr>
  <tr class="BUF">
    <td>6</td>
    <td class="BUF"><a class="link7" href="https://twitter.com/BuffaloBeauts"><abbr title="Buffalo Beauts">BUF</abbr></a></td>
    <td>20</td>
    <td>6</td>
    <td>14</td>
    <td>3</td>
    <td>0</td>
    <td>15</td>
    <td>44</td>
    <td>73</td>
    <td>-29</td>
    <td>176</td>
  </tr>
</table>
`;


//-------------------------------------------------------------------------------------//


var colors = ['#aeb4fa', '#6bab52', '#b74736', '#edc743', '#83ade3', '#2d4498', '#c54125'];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.getElementById('team1').style.color = random_color;
random_color = colors[Math.floor(Math.random() * colors.length)];
document.getElementById('team2').style.color = random_color;
random_color = colors[Math.floor(Math.random() * colors.length)];
document.getElementById('team3').style.color = random_color;
random_color = colors[Math.floor(Math.random() * colors.length)];
document.getElementById('team4').style.color = random_color;
random_color = colors[Math.floor(Math.random() * colors.length)];
document.getElementById('team5').style.color = random_color;
random_color = colors[Math.floor(Math.random() * colors.length)];
document.getElementById('team6').style.color = random_color;
