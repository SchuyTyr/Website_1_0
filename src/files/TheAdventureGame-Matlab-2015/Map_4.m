% Schuyler Meyer
% The Adventure Game
% 1=North, 2=South, 3=West, 4=East

function []=Map_4()
global Direction 
global NewLocation
if NewLocation==4
    fprintf('After walking awhile, you have finally reached \n')
    pause(3.5);
    fprintf('the city outskirts. Between you and the city is a \n')
    pause(3.5);
    fprintf('North bound road which leads towards the forest \n')
    pause(3.5);
    fprintf('and the mountain. To enter the city, head West.\n\n')
    pause(3.5);
end

Direction=input('N.A.C.S.: Which way would you like to go, Collector?: ');
fprintf('\n')

if Direction==1
    NewLocation=13;
elseif Direction==3
    NewLocation=11;
elseif Direction==5
    fprintf('You head back to the ship.\n\n')
    pause(3.5);
    error('You are done exploring for the day. Search again tomorrow for artifacts.')
elseif Direction~=1||5||3
    warning('Invalid input. Please type correct input.')
    fprintf('\n')
end

end