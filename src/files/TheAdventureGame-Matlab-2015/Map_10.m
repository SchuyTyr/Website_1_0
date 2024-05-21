% Schuyler Meyer
% The Adventure Game
% 1=North, 2=South, 3=West, 4=East

function []=Map_10()
global Direction
global NewLocation
if NewLocation==10
    fprintf('North: You start walking up the stone stair path.\n\n')
    pause(3.5);
    fprintf('You reach the top of the stone stairway and find \n')
    pause(3.5);
    fprintf('yourself halfway up the mountain, on a ledge. \n')
    pause(3.5);
    fprintf('Ahead, to the North, you see a door to what appears \n')
    pause(3.5);
    fprintf('to lead into the side of the mountain. To the East, \n')
    pause(3.5);
    fprintf('there appears to be a pathway that runs along the\n')
    pause(3.5);
    fprintf('edge of the cliff.If you head back South, you might \n')
    pause(3.5);
    fprintf('be able to make it back to the ship before it gets \n')
    pause(3.5);
    fprintf('too dark.\n\n')
    pause(3.5);
    fprintf('N.A.C.S.: "That door looks promising, but it appears\n')
    pause(3.5);
    fprintf('to be locked. My fragmented self can''t unlock the \n')
    pause(3.5);
    fprintf('door. Maybe if we had a key..."\n\n')
    pause(3.5);
    Direction=input('N.A.C.S.: Which way would you like to go, Collector?: ');
    fprintf('\n')
end
end