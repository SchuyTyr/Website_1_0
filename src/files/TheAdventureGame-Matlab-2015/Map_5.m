% Schuyler Meyer
% The Adventure Game
% 1=North, 2=South, 3=West, 4=East
% Map_5 = MapInitial

function []=Map_5()

global Direction
global NewLocation

fprintf('N.A.C.S.: Which way would you like to go, Collector? \n')
fprintf('The forest to the North, the crumbling city to the West,\n')
Direction=input('or the old house to the East?: ');
fprintf('\n')

if Direction==1
    NewLocation=2;
elseif Direction==5
    fprintf('You head back to the ship.\n\n')
    pause(3.5);
    error('You are done exploring for the day. Search again tomorrow for artifacts.')
elseif Direction==3
    NewLocation=4;
elseif Direction==4
    NewLocation=6;
elseif Direction~=1||5||3||4
    warning('Invalid input. Please type correct input.')
    fprintf('\n')
end

end
