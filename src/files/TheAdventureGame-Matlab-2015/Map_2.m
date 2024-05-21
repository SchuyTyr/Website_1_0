% Schuyler Meyer
% The Adventure Game
% 1=North, 2=South, 3=West, 4=East

function []=Map_2()
global Direction
global NewLocation
if NewLocation==2
    fprintf('You walk into the forest and notice that it\n')
    pause(3.5);
    fprintf('is thick and the trees are very old. After a\n')
    pause(3.5);
    fprintf('few hours you find yourself at the bottom of a\n')
    pause(3.5);
    fprintf('old stone stairway, to the North. You check to\n')
    pause(3.5);
    fprintf('East and see what possibly looks like a trail.\n')
    pause(3.5);
    fprintf('To the West you notice another trail, although\n')
    pause(3.5);
    fprintf('this trail appears to have a light at the end.\n\n')
    pause(3.5);
end

Direction=input('N.A.C.S.: Which way would you like to go, Collector?: ');
fprintf('\n')

if Direction==1
    NewLocation=10;
elseif Direction==3
    NewLocation=1;
elseif Direction==4
    NewLocation=3;
elseif Direction==5
    fprintf('You head back to the ship.\n\n')
    pause(3.5);
    error('You are done exploring for the day. Search again tomorrow for artifacts.')
elseif Direction~=1||3||4||5
    warning('Invalid input. Please type correct input.')
    fprintf('\n')
end

end