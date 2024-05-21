% Schuyler Meyer
% The Adventure Game
% 1=North, 2=South, 3=West, 4=East

function []=Map_3()
global NewLocation
if NewLocation==3
    fprintf('You follow the path East. But after some time you the forest\n')
    pause(3.5);
    fprintf('has become quite thick and a heavy mist has started to settle.\n\n')
    pause(3.5);
    fprintf('N.A.C.S.: "We''re still heading East, but I''m not-"\n\n')
    pause(3.5);
    fprintf('A deafening rumble cuts through the mist. You turn to see a\n')
    pause(3.5);
    fprintf('rather large stone giant covered in moss and ferns. It seems\n')
    pause(3.5);
    fprintf('to have spotted you.\n\n')
    pause(3.5);
    fprintf('N.A.C.S.: "Run!"\n\n')
    pause(3.5);
    fprintf('After running for some time, you pause to take a breath. You\n')
    pause(3.5);
    fprintf('can still hear the giant in the distance, but you''ve seemed\n')
    pause(3.5);
    fprintf('to have lost it.\n\n')
    pause(3.5);
    fprintf('N.A.C.S.: "Transmission from the ship..."\n\n')
    pause(3.5);
    fprintf('N.N.A.C.S.: "Good news everyone! The repairs are completed.\n')
    pause(3.5);
    fprintf('I''m on my way now. Please stay clear of any danger."\n\n')
    pause(3.5);
    fprintf('When the ship arrives, you get aboard. The ground begins \n')
    pause(3.5);
    fprintf('to shake. You see the stone giant running towards the \n')
    pause(3.5);
    fprintf('ship.\n\n')
    pause(3.5);
end
end