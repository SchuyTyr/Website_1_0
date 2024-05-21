% Schuyler Meyer
% The Adventure Game
% 1=North, 2=South, 3=West, 4=East

function []=Map_15()
global Direction
global NewLocation

if NewLocation==15
    fprintf('You start walking along the stream, following the small\n')
    pause(3.5);
    fprintf('floating machine. You notice some strange substances in the\n')
    pause(3.5);
    fprintf('water.\n\n')
    pause(3.5);
    fprintf('N.A.C.S.: "I''m detecting radiation coming from that stuff.\n')
    pause(3.5);
    fprintf('Hmm let''s see. It''s alpha radiation, no need to worry, just\n')
    pause(3.5);
    fprintf('keep your suit on. It''s coming from the mountain though. I \n')
    pause(3.5);
    fprintf('wonder what''s going on..."\n\n')
    pause(3.5);
    fprintf('''Krat, must go to. They explain all. Must hurry.''\n\n')
    pause(3.5);
    fprintf('N.A.C.S.: "I guess we have no choice, but to follow this thing."\n\n')
    pause(3.5);
    fprintf('You eventually come to a fork in the stream. The left side, \n')
    pause(3.5);
    fprintf('heading West continues to lead up to the mountain, but the \n')
    pause(3.5);
    fprintf('strange radioactive substances are also coming from that way.\n')
    pause(3.5);
    fprintf('The right fork goes North, it seems to be clean water.\n\n')
    pause(3.5);
    fprintf('''Krat, must go to, hurry. North, Stream of No Beginning. Krat,\n')
    pause(3.5);
    fprintf('must go to, hurry.''\n\n')
    pause(3.5);
    fprintf('N.A.C.S.: "Your call."\n\n')
    pause(3.5);
end

Direction=input('N.A.C.S.: Which way would you like to go, Collector?: ');
fprintf('\n')
if Direction==1
    NewLocation=18;
elseif Direction==3
    NewLocation=14;
elseif Direction==5
    fprintf('You head back to the ship.\n\n')
    pause(3.5);
    error('You are done exploring for the day. Search again tomorrow for artifacts.')
elseif Direction~=1||3||5
    warning('Invalid input. Please type correct input.')
    fprintf('\n')
    return
end

end