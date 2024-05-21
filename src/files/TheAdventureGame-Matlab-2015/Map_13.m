% Schuyler Meyer
% The Adventure Game
% 1=North, 2=South, 3=West, 4=East

function []=Map_13()
global Direction
global NewLocation

if NewLocation==13
    fprintf('You walk up the road for about an hour and find nothing \n')
    pause(3.5);
    fprintf('but remnants of a forgotten past. You continue on and \n')
    pause(3.5);
    fprintf('come to a split in the road. To the East, the road narrows \n')
    pause(3.5);
    fprintf('and leads up towards the mountain. To the North, the road \n')
    pause(3.5);
    fprintf('continues on around a bend.\n\n')
    pause(3.5);
end

Direction=input('N.A.C.S.: Which way would you like to go, Collector?: ');
fprintf('\n')

if Direction==1
    NewLocation=16;
elseif Direction==5
    fprintf('You head back to the ship.\n\n')
    pause(3.5);
    error('You are done exploring for the day. Search again tomorrow for artifacts.')
elseif Direction==4
    NewLocation=14;
elseif Direction~=1||4||5
    warning('Invalid input. Please type correct input.')
    fprintf('\n')
end

end