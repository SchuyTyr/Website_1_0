% Schuyler Meyer
% The Adventure Game
% 1=North, 2=South, 3=West, 4=East

function []=Map_6()
global Direction
global NewLocation
global go
if NewLocation==6
    fprintf('You walk to the farmhouse and search through it. There \n')
    pause(3.5);
    fprintf('is lots of what appear to be old machines scattered around,\n')
    pause(3.5);
    fprintf('but they''re all in pieces, nothing but scrap and junk. After\n')
    pause(3.5);
    fprintf('a few minutes of searching, a dull light coming from a small \n')
    pause(3.5);
    fprintf('object catches your eye.\n\n')
    pause(3.5);
    fprintf('N.A.C.S.: "That looks promising. Although, I''m picking up a \n')
    pause(3.5);
    fprintf('small amount of energy coming from that object."\n\n')
    pause(3.5);
    fprintf('You go to touch it, but it starts talking.\n\n')
    pause(3.5);
    fprintf('''Konite katskis''\n')
    pause(2);
    fprintf('''Konite katskis...sans''\n')
    pause(2);
    fprintf('''Konite katskis...nin''\n')
    pause(2);
    fprintf('''Konite katskis...ikhi''\n')
    pause(2);
    fprintf('''Konite katsk''\n\n')
    pause(2);
    fprintf('It suddenly jumps up and starts spinning frantically.\n\n')
    pause(3.5);
    fprintf('''Vaarn beeths ufath teeckt''\n')
    pause(3.5);
    fprintf('''Krat varn''\n')
    pause(3);
    fprintf('''Vaarn gerda''\n')
    pause(3);
    fprintf('''Vaarn gerda''\n')
    pause(3);
    fprintf('''Vaarn gerda''\n')
    pause(3);
    fprintf('''Vaarn ger- ''\n\n')
    pause(3);
    fprintf('N.A.C.S.: "Translating now...\n')
    pause(3.5);
    fprintf('It says:''The system is awakening...''uhh, ''alerting...'',\n')
    pause(3.5);
    fprintf('''danger... danger''. It keeps repeating ''danger'' over\n')
    pause(3.5);
    fprintf('and over. Who is it alerting? We should get out of here,\n')
    pause(3.5);
    fprintf('nonetheless."\n\n')
    pause(3.5);
    go=input('--Press ''Enter'' when ready to continue--');
    fprintf('You run outside and can still hear the strange machine\n')
    pause(3.5);
    fprintf('repeating its warnings to whomever it''s trying to warn.\n')
    pause(3.5);
    fprintf('You see a lake ahead of you to the East. Just as you turn\n')
    pause(3.5);
    fprintf('to look back, an explosion knocks you off your feet. When\n')
    pause(3.5);
    fprintf('you get back up, you no longer hear the strange machine.\n\n')
    pause(3.5);
    fprintf('N.A.C.S.: "Oh no. I''m still detecting an energy presence\n')
    pause(3.5);
    fprintf('in the rubble. Movement detected!"\n\n')
    pause(3.5);
    fprintf('The strange machine comes flying out towards you and then \n')
    pause(3.5);
    fprintf('stops a few feet in front of you at head level.\n\n')
    pause(3.5);
    fprintf('N.A.C.S.: "Careful..."\n\n')
    pause(3.5);
    fprintf('''Vell kama!''\n')
    pause(3.5);
    fprintf('''Vell: ferrt''\n')
    pause(2);
    fprintf('''Foomka ken.''\n\n')
    pause(3.5);
    fprintf('N.A.C.S.: "Looks like it had a change of heart."\n\n')
    pause(3.5);
    fprintf('''Traveller hello! Repairs ken. You, how I assist? Sorry for\n')
    pause(3.5);
    fprintf('malfunction previous. Nok cannot assist. Repairs need, functions\n')
    pause(3.5);
    fprintf('not working. Krat, need to go to. Krat, must go to. Know the\n')
    pause(3.5);
    fprintf('way. Traveller follow. We must hurry.''\n\n')
    pause(3.5);
    fprintf('N.A.C.S.: "But wow it seems to have recognized us as someone \n')
    pause(3.5);
    fprintf('familiar and adjusted to our language difference. This technology\n')
    pause(3.5);
    fprintf('could rival my own. Fascinating. And its asking for our help.\n\n')
    pause(3.5);
    fprintf('''Must hurry. Krat in mountain.''\n\n')
    pause(3.5);
    fprintf('N.A.C.S.: "I''m not sure what ''Krat'' is, but should we follow\n')
    pause(3.5);
    fprintf('it?\n\n')
    pause(3.5);
    go=input('--Press ''Enter'' when ready to continue--');
    fprintf('You turn to look at the lake again. It''s farther than you\n')
    pause(3.5);
    fprintf('originally thought.\n\n')
    pause(3.5);
    fprintf('''Lake, bad. Krat in mountain. Must go to.''\n\n')
    pause(3.5);
    fprintf('You look towards the mountain to the North and see a stream\n')
    pause(3.5);
    fprintf('seeming to flow from the mountain and feeding into the lake.\n\n')
    pause(3.5);
    fprintf('N.A.C.S.: "Your call Collector. We can follow this crazy guy\n')
    pause(3.5);
    fprintf('North along the stream towards the mountain and find this ''Krat'',\n')
    pause(3.5);
    fprintf('or we can go East and check out the lake."\n\n')
    pause(3.5);
end

Direction=input('N.A.C.S.: Which way would you like to go, Collector?: ');
fprintf('\n')

if Direction==1
    NewLocation=15;
elseif Direction==5
    NewLocation=5;
    fprintf('You head back to the ship.\n\n')
    pause(3.5);
    error('You are done exploring for the day. Search again tomorrow for artifacts.')
elseif Direction==4
    NewLocation=12;
elseif Direction~=1||5||4
    warning('Invalid input. Please type correct input.')
    fprintf('\n')
end

end