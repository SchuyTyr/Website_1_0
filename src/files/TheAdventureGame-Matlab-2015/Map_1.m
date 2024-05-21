% Schuyler Meyer
% The Adventure Game
% 1=North, 2=South, 3=West, 4=East

function []=Map_1()
global Direction
global NewLocation
if NewLocation==1
    fprintf('West: You walk the path and find yourself in a large \n')
    pause(3.5);
    fprintf('clearing with a small stone structure to the south side.\n')
    pause(3.5);
    fprintf('The structure is the only important looking object in \n')
    pause(3.5);
    fprintf('the entire clearing. \n\n')
    pause(3.5);
    fprintf('N.A.C.S.: That structure looks pretty important. We should\n')
    pause(3.5);
    fprintf('head South to check it out.\n\n')
    pause(3.5);
    
    Direction=input('N.A.C.S.: Which way would you like to go, Collector?: ');
    fprintf('\n')
end
if Direction==2
    NewLocation=1.2;
elseif Direction==5
    fprintf('You head back to the ship.\n\n')
    pause(3.5);
    error('You are done exploring for the day. Search again tomorrow for artifacts.')
elseif Direction~=2||5
    pause(1.5);
    error('You should have gone South.')
end

return

end

