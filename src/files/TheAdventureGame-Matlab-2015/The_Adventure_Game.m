% Schuyler Meyer
% The Adventure Game
% Summer 2015

clear,clc,clearvars
tic
global choice
global go
global BackStory
global Direction
global NewLocation
global Asuna
global Key_2
global skip
% global NewMap
% NewMap=[0,16,14,17,18;0,13,10,15,0;0,1,2,3,0;11,4,5,6,12;0,7,8,9,0];

choice=menu('Would You Like to Play ''The Adventure Game''?','Yes','No');
if choice==1
    
    fprintf('-          -\n')
    fprintf('Loading\n')
    fprintf('-          -\n')
    pause(0.4);
    clc
    fprintf('   /    \\\n')
    fprintf('Loading.\n')
    fprintf('   \\    /\n')
    pause(0.4);
    clc
    fprintf('     ||\n')
    fprintf('Loading..\n')
    fprintf('     ||\n')
    pause(0.4);
    clc
    fprintf('   \\    /\n')
    fprintf('Loading...\n')
    fprintf('   /    \\\n')
    pause(0.4);
    clc
    fprintf('-          -\n')
    fprintf('Loading\n')
    fprintf('-          -\n')
    pause(0.4);
    clc
    fprintf('   \\    /\n')
    fprintf('Loading.\n')
    fprintf('   /    \\\n')
    pause(0.4);
    clc
    fprintf('     ||\n')
    fprintf('Loading..\n')
    fprintf('     ||\n')
    pause(0.4);
    clc
    fprintf('   /    \\\n')
    fprintf('Loading...\n')
    fprintf('   \\    /\n')
    pause(0.4);
    clc
    fprintf('-          -\n')
    fprintf('Thanks for Playing!\n')
    fprintf('-          -\n')
    pause(1);
    clc
elseif choice~=1
    fprintf('Thank You Play Again!\n\n')
    % break
    exit
end
% temp
fprintf('Welcome to the Adventure Game!\n\n')

go=input('--Press ''Enter'' when ready to continue--\n\n');

fprintf('Have you played before? Would you like to skip the intro?\n')
skip=input('Type "1" to skip or "2" to continue with the intro.\n');
if skip==1
    
elseif skip==2
    BackStory=menu('Before you start, would you like to read the about the history behind it all?','Yes','No');
    if BackStory==1
        fprintf('They are beings throughout the universe, new and old, infinitely coming and going\n')
        pause(3.5);
        fprintf('through the passages of time. The intelligent beings come together to form\n')
        pause(3.5);
        fprintf('civilizations, and if their time is ripe, they will spread across the universe,\n')
        pause(3.5);
        fprintf('laying their knowledge and ideas among the stars. However, these civilizations leave\n')
        pause(3.5);
        fprintf('much of this wealth of knowledge behind, after their time has come to an end. And\n')
        pause(3.5);
        fprintf('more often than not, the knowledge takes a physical form. With this never ending\n')
        pause(3.5);
        fprintf('cycle, the universe becomes cluttered and in disarray. One such civilization, became\n')
        pause(3.5);
        fprintf('aware of this and believed that the fruits of knowledge should be gathered and shared\n')
        pause(3.5);
        fprintf('at least among their own kin if not any of the other civilizations who shared in\n')
        pause(3.5);
        fprintf('their desire for knowledge. This particular civilization became known as the\n')
        pause(3.5);
        fprintf('''Librarians''. The only purpose they believed was theirs, was the gathering of\n')
        pause(3.5);
        fprintf('knowledge. They cared not for wealth or power, unless of course it aided them in their\n')
        pause(3.5);
        fprintf('quest for knowledge. Although, the Librarians knew their time was ebbing into abatement.\n')
        pause(3.5);
        fprintf('So they created the ''Index'' and the ''Collection''. They turned many worlds into the\n')
        pause(3.5);
        fprintf('Index, storing their knowledge so they could more easily organize and access their\n')
        pause(3.5);
        fprintf('cache. And the Collection, they were created for the sole purpose of collecting.\n')
        pause(3.5);
        fprintf('Usually, these, ''Collectors'' would be given the task to search for artifacts and other\n')
        pause(3.5);
        fprintf('pieces of physical knowledge. Although, sometimes they would come across other forms of\n')
        pause(3.5);
        fprintf('knowledge.\n\n')
        pause(3.5);
    elseif BackStory~=1
        fprintf('Okay. Moving on.\n\n')
        pause(3.5);
    end
    go=input('--Press ''Enter'' when ready to continue--\n');
    
    fprintf('Link Start: \n\n')
    pause(3.5);
    % temp
    fprintf('Far in the future, you are traveling on a spaceship.\n')
    pause(3.2);
    fprintf('This spaceship is looking for answers to the past.\n')
    pause(3.2);
    fprintf('Trying to find artifacts of ancient civilizations,\n')
    pause(3.2);
    fprintf('that once thrived, but have long since been forgotten\n')
    pause(3.2);
    fprintf('with the passages of time.\n\n')
    pause(5);
    fprintf('You have come across one such place that potentially\n')
    pause(3.2);
    fprintf('holds a key to the past. Your mission is to explore this\n')
    pause(3.2);
    fprintf('planet for advanced and potentially useful artifacts of an\n')
    pause(3.2);
    fprintf('ancient civilization that once inhabitated this world.\n')
    fprintf('\n')
    pause(8);
    go=input('--Press ''Enter'' when ready to continue--\n');
    clc
    
    % temp
    
    fprintf('\t\t\t-Time : Long Ago-\n\n')
    pause(8)
    fprintf('"You are one of the chosen, the honored. You must not fail.\n')
    pause(3.2)
    fprintf('Gather them from the darkness. Do not go backwards. Your \n')
    pause(3.2)
    fprintf('journey begins today. Light speed, Collector."\n\n')
    pause(5)
    go=input('--Press ''Enter'' when ready to continue--\n');
    
    fprintf('Exploratory Vessel: YGG Buridrasil\n')
    pause(2.25)
    fprintf('Crew\n')
    pause(1.5)
    fprintf('Collector         : 1\n')
    pause(1.5)
    fprintf('Ship A.I.         : 1, R.E.N.N.A.C.S.\n\n')
    pause(4)
    
    fprintf('Main Power : -\n')
    pause(2.5)
    fprintf('Main Power : go\n\n')
    pause(1.25)
    fprintf('Main Engines : -\n')
    pause(2.5)
    fprintf('Main Engines : go\n\n')
    pause(1.25)
    fprintf('All Systems : -\n')
    pause(2.5)
    fprintf('All Systems : go\n\n')
    pause(1.5)
    fprintf('Launching in : 3.\n')
    pause(1.1)
    fprintf('Launching in : 2.\n')
    pause(1.1)
    fprintf('Launching in : 1.\n')
    pause(1.1)
    fprintf('Launching in : Ship is now mobile.\n\n')
    pause(6)
    go=input('--Press ''Enter'' when ready to continue--\n');
    
    fprintf('R.E.N.N.A.C.S.: "...And we are now out of orbit. Best if you\n')
    pause(3.2)
    fprintf('went to sleep now. We have a long ride ahead of us and we\n')
    pause(3.2)
    fprintf('wouldn''t want you wasting any of your precious air. I''ll\n')
    pause(3.2)
    fprintf('prepare you''re capsule."\n\n')
    pause(4)
    
    fprintf('You lie down in your capsule.\n\n')
    pause(4)
    
    fprintf('Freezing process in : 3.\n')
    pause(1.25)
    fprintf('Freezing process in : 2.\n')
    pause(1.25)
    fprintf('Freezing process in : 1.\n')
    pause(1.25)
    fprintf('Freezing process in : Collector is now frozen.\n\n')
    pause(1.25)
    time=clock;
    Time=datestr(time);
    fprintf('Time and date of freeze: %s.\n\n\n',Time)
    pause(7)
    go=input('--Press ''Enter'' when ready to continue--\n');
    
    fprintf('\t\t\t-Time : Present-\n\n')
    pause(8)
    
    % temp
    
    clc
    fprintf('Checking vitals\n')
    pause(0.75)
    clc
    fprintf('Checking vitals.\n')
    pause(0.75)
    clc
    fprintf('Checking vitals..\n')
    pause(0.75)
    clc
    fprintf('Checking vitals...\n')
    pause(0.75)
    clc
    fprintf('Heart rate         : stabilizing.\n')
    pause(1.75)
    fprintf('Oxygen levels      : normal.\n')
    pause(1.75)
    fprintf('Blood pressure     : normal.\n')
    pause(1.75)
    fprintf('Chamber opening in : 3.\n')
    pause(1.25)
    fprintf('Chamber opening in : 2.\n')
    pause(1.25)
    fprintf('Chamber opening in : 1.\n')
    pause(1.25)
    fprintf('Chamber opening in : Chamber is now open.\n')
    pause(1.25)
    fprintf('Time and date of awakening: $M-##&..! T#:0:$.\n')
    pause(7)
    go=input('--Press ''Enter'' when ready to continue--\n');
    clc
    
    % temp
    
    fprintf('You awake from your long sleep through space, feeling a bit\n')
    pause(3.2)
    fprintf('dizzy. As you open your eyes, you notice a bright blue light\n')
    pause(3.2)
    fprintf('making various muttering sounds.\n\n')
    pause(3.2)
    
    fprintf('"Oh dear, oh dear, oh dear. Not good."\n\n')
    pause(4)
    
    fprintf('It appears to be moving fast, flying in all different \n')
    pause(3.2)
    fprintf('directions. When your vision clears, you see that it''s \n')
    pause(3.2)
    fprintf('continually transforming into various intricate three-\n')
    pause(3.2)
    fprintf('dimensional shapes as it moves around.\n\n')
    pause(7)
    
    fprintf('"Top of the morning to ya! As per protocol, I''m to wake you\n')
    pause(3.2)
    fprintf('from deep sleep when we come across a potential planet that\n')
    pause(3.2)
    fprintf('may have once had civilizations. However, our re-entry into\n')
    pause(3.2)
    fprintf('normal space caused some minor damages, like your clock for\n')
    pause(3.2)
    fprintf('instance. I''ll make the repairs when we make landfall. By the\n')
    pause(3.2)
    fprintf('way, as per protocol I''m to remind you of what I am. I''m your \n')
    pause(3.2)
    fprintf('personal A.I., R.E.N.N.A.C.S. - R.emote E.N.vironmental N.anoscale\n')
    pause(3.2)
    fprintf('A.rtificial C.omputer S.ystem, or "NNACS" for short. I''ll help\n')
    pause(3.2)
    fprintf('with locations, translations, and literally everything else."\n\n')
    pause(7)
    
    fprintf('N.N.A.C.S.: "Well, we''ll be reaching orbit soon, best if you \n')
    pause(3.2)
    fprintf('got suited up."\n\n\n')
    pause(7)
    go=input('--Press ''Enter'' when ready to continue--\n');
    
    fprintf('\t\t\t-A couple hours later-\n\n\n')
    pause(8)
    
    fprintf('You land in large golden field. It appears to be noon, local\n')
    pause(3.2)
    fprintf('time. You check the air quality and it seems to be breathable,\n')
    pause(3.2)
    fprintf('so you turn on the outside filters on your helmet to save oxygen\n')
    pause(3.2)
    fprintf('in your suit. You look around and see a large, thick, forest\n')
    pause(3.2)
    fprintf('ahead of you, to the North with a large mountain beyond; You\n')
    pause(3.2)
    fprintf('turn to the East and see what appears to be an old farmhouse,\n')
    pause(3.2)
    fprintf('but you can''t be sure; And to the West you notice a highly \n')
    pause(3.2)
    fprintf('developed area, most likely it was once a city of some sorts, \n')
    pause(3.2)
    fprintf('but now is covered in vegetation and has aged along with time \n')
    pause(3.2)
    fprintf('itself.\n\n')
    pause(7)
    go=input('--Press ''Enter'' when ready to continue--\n');
    
    fprintf('N.N.A.C.S.: "I''ll make the repairs to the ship here. I''ll send\n')
    pause(3.2)
    fprintf('a fragment of myself with you, although it will have limited\n')
    pause(3.2)
    fprintf('capabilities. No targets in the proximity."\n\n')
    pause(7)
    
    fprintf('You start to walk away.\n\n')
    pause(7)
    
    fprintf('N.N.A.C.S.: "Have fun! But do be careful. We don''t want to\n')
    pause(3.2)
    fprintf('start any new religions now do we? And by the way, do have\n')
    pause(3.2)
    fprintf('any idea where you''re going?"\n\n')
    pause(7)
    
    fprintf('You stop and consider the idea that any no intelligent life still\n')
    pause(3.2)
    fprintf('inhabits this world. Although where did they go? This planet\n')
    pause(3.2)
    fprintf('should be thriving with life. Yet there is no sign that anyone,\n')
    pause(3.2)
    fprintf('or anything, has been here for years, centuries even. As if\n')
    pause(3.2)
    fprintf('your mind was being read, a voice on your shoulder chirps out,\n\n')
    pause(7)
    
    fprintf('N.A.C.S.: "There should be a plethora of artifacts here, with\n')
    pause(3.2)
    fprintf('life seeming to have left in such a hurry."\n\n')
    pause(7)
    
    fprintf('Wonderful! The thing''s fragment can still speak. Well you \n')
    pause(3.2)
    fprintf('shouldn''t be lonely then. You then realize that you''re not\n')
    pause(3.2)
    fprintf('sure which way you were heading.\n\n')
    pause(7)
    go=input('--Press ''Enter'' when ready to continue--\n');
end
% direct pathway test
clc
fprintf('-Instructions-\n')
fprintf('Type a number to the corresponding direction.\n')
fprintf('1=North, 2=South, 3=West, 4=East, 5=Exit\n\n')
pause(1);
fprintf('Please wait\n')
pause(0.85);
clc
fprintf('-Instructions-\n')
fprintf('Type a number to the corresponding direction.\n')
fprintf('1=North, 2=South, 3=West, 4=East, 5=Exit\n\n')
fprintf('Please wait.\n')
pause(0.85);
clc
fprintf('-Instructions-\n')
fprintf('Type a number to the corresponding direction.\n')
fprintf('1=North, 2=South, 3=West, 4=East, 5=Exit\n\n')
fprintf('Please wait..\n')
pause(0.85);
clc
fprintf('-Instructions-\n')
fprintf('Type a number to the corresponding direction.\n')
fprintf('1=North, 2=South, 3=West, 4=East, 5=Exit\n\n')
fprintf('Please wait...\n\n')
pause(2.5);
clc
fprintf('-Instructions-\n')
fprintf('Type a number to the corresponding direction.\n')
fprintf('1=North, 2=South, 3=West, 4=East, 5=Exit\n\n')

NewLocation=5;
Asuna=1;
if Asuna==1
    if NewLocation==5
        fprintf('N.N.A.C.S.: "Remember, if you''ve explored enough for the day,\n')
        pause(3.5);
        fprintf('you can head back here, to this field to leave by inputing ''5''\n')
        pause(3.5);
        fprintf('into the direction field."\n\n')
        pause(3.5);
        fprintf('N.N.A.C.S.: "Gathering satellite mapping data..."\n')
        pause(3.5);
        
        Map_5;
        if NewLocation==2
            Map_2;
            if NewLocation==10;
                Map_10;
                Key_2=0;
                if Direction==1
                    NewLocation=14;
                    if Key_2==1
                        fprintf('You try the key you found earlier in the door. It works, the door\n')
                        pause(3.5);
                        fprintf('opens. You walk inside.\n\n')
                        pause(3.5);
                        fprintf('N.A.C.S.: "Gathering map data now. Wow, it seems the entire mountain\n')
                        pause(3.5);
                        fprintf('is some sort of research facility. There''s a room to the right that\n')
                        pause(3.5);
                        fprintf('looks like a good starting point."\n\n')
                        pause(3.5);
                        fprintf('You walk into the room and find that it''s larger than you were expecting.\n')
                        pause(3.5);
                        fprintf('In the center of the room, there is a floating pyramid, slowly spinning.\n\n')
                        pause(3.5);
                        fprintf('N.A.C.S.: "That is purely energy. Put me in that terminal over there so I \n')
                        pause(3.5);
                        fprintf('can get a better look at it."\n\n')
                        pause(3.5);
                        go=input('--Press ''Enter'' when ready to continue--\n');
                        fprintf('You detach N.A.C.S. and place it in the terminal. You see its familiar\n')
                        pause(3.5);
                        fprintf('intricate three-dimensional shapes appear and start to fly around the room.\n\n')
                        pause(3.5);
                        fprintf('N.A.C.S.: "Wow! We have come across something spectacular. It will take \n')
                        pause(3.5);
                        fprintf('some time to analyze. Best to get comfortable.\n\n')
                        pause(3.5);
                        warndlg('You have found an Artifact of an Ancient Civilization!','Congratulations!')
                        pause(1);
                        error('Congratulations! Come back again tomorrow to search for more artifacts.')
                    elseif Key_2==0
                        fprintf('The door is locked and it''s becoming to \n')
                        pause(3.5);
                        fprintf('dark to see.\n\n')
                        pause(3.5);
                        error('N.A.C.S.: "Let''s come back tomorrow and search for the key."')
                    end
                elseif Direction==4
                    NewLocation=17;
                    fprintf('East: You take the path heading East alongside\n')
                    pause(3.5);
                    fprintf('the mountain. The path narrows and then the cliff\n')
                    pause(3.5);
                    fprintf('edge underneath you gives out. You start sliding\n')
                    pause(3.5);
                    fprintf('down the mountain...\n\n')
                    pause(3.5);
                    fprintf('You wake up and try to remember where you are. None\n')
                    pause(3.5);
                    fprintf('of your surroundings look familiar. You look to \n')
                    pause(3.5);
                    fprintf('N.A.C.S. for help, but you realize the clip where\n')
                    pause(3.5);
                    fprintf('N.A.C.S. was held is missing. It''s already dark\n')
                    pause(3.5);
                    fprintf('and you hear a rustling in the bushes. You frantically\n')
                    pause(3.5);
                    fprintf('look around, trying to find N.A.C.S. It''s nowhere\n')
                    pause(3.5);
                    fprintf('in sight. The noise is getting louder, and then \n')
                    pause(3.5);
                    fprintf('suddenly there is a bright light. You lose\n')
                    pause(3.5);
                    fprintf('consciousness.\n\n')
                    pause(3.5);
                    go=input('--Press ''Enter'' when ready to continue--\n');
                    fprintf('When you regain consciousness, you are lying outside\n')
                    pause(3.5);
                    fprintf('your ship. You try to remember how you ended up here,\n')
                    pause(3.5);
                    fprintf('but you don''t remember anything from the past day.\n')
                    pause(3.5);
                    fprintf('Has it been a day? Or was it longer then that? N.N.A.C.S.?!\n')
                    pause(3.5);
                    fprintf('Where is N.N.A.C.S.? There is no response. You look in\n')
                    pause(3.5);
                    fprintf('the ship and find nothing. It''s starting to get dark.\n\n')
                    pause(3.5);
                    error('Start looking for answers in the morning.')
                elseif Direction==2||5
                    fprintf('You head back to the ship.\n\n')
                    pause(3.5);
                    error('Come back tomorrow to finish the search.')
                elseif Direction~=1||2||4||5
                    warning('Invalid input. Please start over.')
                    return
                end
            elseif NewLocation==1;
                Map_1
                if NewLocation==1.2
                    fprintf('As you head toward the structure, you notice abbright \n')
                    pause(3.5);
                    fprintf('gleaming object on a pedestal. You go to pick it\n')
                    pause(3.5);
                    fprintf('up.\n\n')
                    pause(3.5);
                    fprintf('N.A.C.S.: "Careful. You should find something to replace\n')
                    pause(3.5);
                    fprintf('the object with. That pedestal might trigger some trap."\n\n')
                    pause(3.5);
                    fprintf('You search around for an object that looks similar in \n')
                    pause(3.5);
                    fprintf('weight to the object on the pedestal.\n\n')
                    pause(3.5);
                    fprintf('N.A.C.S.: "You got a leaf?! I''m not so sure that''s-"\n\n')
                    pause(3.5);
                    fprintf('But before N.A.C.S. is finished, you quickly swap the \n')
                    pause(3.5);
                    fprintf('object with the leaf. \n\n')
                    pause(3.5);
                    fprintf('N.A.C.S.: "Ugh. You''re never listening to me.\n')
                    pause(4);
                    warndlg('You have found a key of some sorts!','Congratulations!')
                    Key_2=1;
                    pause(5);
                    fprintf('Well I''m not sure what this does, but let''s keep it\n')
                    pause(3.5);
                    fprintf('and see if we can use it later."\n\n')
                    pause(3.5);
                    fprintf('Just then a large grumbling starts to shake the ground \n')
                    pause(3.5);
                    fprintf('around you.\n\n')
                    pause(3.5);
                    fprintf('N.A.C.S.: "Let''s get out of here quick."\n\n')
                    pause(3.5);
                    fprintf('You end up back at the base of the stone stairs. The \n')
                    pause(3.5);
                    fprintf('grumbling has stopped.\n\n')
                    pause(3.5);
                    fprintf('N.A.C.S.: "Let''s keep moving. I don''t know what that\n')
                    pause(3.5);
                    fprintf('was, but I don''t want to stay to find out."\n\n')
                    pause(3.5);
                    NewLocation=2;
                    Direction=input('N.A.C.S.: Which way would you like to go, Collector?: ');
                    fprintf('\n')
                    if Direction==1
                        NewLocation=10;
                        if NewLocation==10;
                            Map_10;
                            if Direction==1
                                NewLocation=14;
                                if Key_2==1
                                    fprintf('You try the key you found earlier in the door. It works, the door\n')
                                    pause(3.5);
                                    fprintf('opens. You walk inside.\n\n')
                                    pause(3.5);
                                    fprintf('N.A.C.S.: "Gathering map data now. Wow, it seems the entire mountain\n')
                                    pause(3.5);
                                    fprintf('is some sort of research facility. There''s a room to the right that\n')
                                    pause(3.5);
                                    fprintf('looks like a good starting point."\n\n')
                                    pause(3.5);
                                    fprintf('You walk into the room and find that it''s larger than you were expecting.\n')
                                    pause(3.5);
                                    fprintf('In the center of the room, there is a floating pyramid, slowly spinning.\n\n')
                                    pause(3.5);
                                    fprintf('N.A.C.S.: "That is purely energy. Put me in that terminal over there so I \n')
                                    pause(3.5);
                                    fprintf('can get a better look at it."\n\n')
                                    pause(3.5);
                                    go=input('--Press ''Enter'' when ready to continue--\n');
                                    fprintf('You detach N.A.C.S. and place it in the terminal. You see its familiar\n')
                                    pause(3.5);
                                    fprintf('intricate three-dimensional shapes appear and start to fly around the room.\n\n')
                                    pause(3.5);
                                    fprintf('N.A.C.S.: "Wow! We have come across something spectacular. It will take \n')
                                    pause(3.5);
                                    fprintf('some time to analyze. Best to get comfortable.\n\n')
                                    pause(3.5);
                                    warndlg('You have found an Artifact of an Ancient Civilization!','Congratulations!')
                                    pause(1);
                                    error('Congratulations! Come back again tomorrow to search for more artifacts.')
                                elseif Key_2==0
                                    fprintf('The door is locked and it''s becoming to dark to see.\n\n')
                                    pause(3.5);
                                    error('N.A.C.S.: "Let''s come back tomorrow and search for the key."')
                                end
                            elseif Direction==4
                                NewLocation=17;
                                fprintf('East: You take the path heading East alongside\n')
                                pause(3.5);
                                fprintf('the mountain. The path narrows and then the cliff\n')
                                pause(3.5);
                                fprintf('edge underneath you gives out. You start sliding\n')
                                pause(3.5);
                                fprintf('down the mountain...\n\n')
                                pause(3.5);
                                fprintf('You wake up and try to remember where you are. None\n')
                                pause(3.5);
                                fprintf('of your surroundings look familiar. You look to \n')
                                pause(3.5);
                                fprintf('N.A.C.S. for help, but you realize the clip where\n')
                                pause(3.5);
                                fprintf('N.A.C.S. was held is missing. It''s already dark\n')
                                pause(3.5);
                                fprintf('and you hear a rustling in the bushes. You frantically\n')
                                pause(3.5);
                                fprintf('look around, trying to find N.A.C.S. It''s nowhere\n')
                                pause(3.5);
                                fprintf('in sight. The noise is getting louder, and then \n')
                                pause(3.5);
                                fprintf('suddenly there is a bright light. You lose\n')
                                pause(3.5);
                                fprintf('consciousness.\n\n')
                                pause(3.5);
                                go=input('--Press ''Enter'' when ready to continue--\n');
                                fprintf('When you regain consciousness, you are lying outside\n')
                                pause(3.5);
                                fprintf('your ship. You try to remember how you ended up here,\n')
                                pause(3.5);
                                fprintf('but you don''t remember anything from the past day.\n')
                                pause(3.5);
                                fprintf('Has it been a day? Or was it longer then that? N.N.A.C.S.?!\n')
                                pause(3.5);
                                fprintf('Where is N.N.A.C.S.? There is no response. You look in\n')
                                pause(3.5);
                                fprintf('the ship and find nothing. It''s starting to get dark.\n\n')
                                pause(3.5);
                                error('Start looking for answers in the morning.')
                            elseif Direction==2||5
                                fprintf('You head back to the ship.\n\n')
                                pause(3.5);
                                error('Come back tomorrow to finish the search.')
                            elseif Direction~=1||2||4||5
                                warning('Invalid input. Please start over.')
                            end
                        end
                    elseif Direction==4
                        NewLocation=3;
                        Map_3
                        pause(3);
                        error('N.N.A.C.S.: "Let''s get out of here. That''s enough for one day."')
                    elseif Direction~=1||4
                        warning('You can not go this way. Please try another way.')
                        fprintf('\n')
                        return
                    end
                elseif Direction~=2
                    warning('N.A.C.S.: There is no other way to go. You should go South.')
                    return
                end
            elseif NewLocation==3;
                Map_3
                pause(3);
                error('N.N.A.C.S.: "Let''s get out of here. That''s enough for one day."')
            end
        elseif NewLocation==4
            Map_4;
            if NewLocation==13;
                Map_13;
                if NewLocation==16;
                    % Map_16;
                    fprintf('You walk around the bend to find the road leading \n')
                    pause(3.5);
                    fprintf('into a tunnel.\n')
                    pause(3.5);
                    fprintf('N.A.C.S.: "Are you sure about this tunnel? I''ve \n')
                    pause(3.5);
                    fprintf('got a bad feeling about it."\n\n')
                    pause(3.5);
                    fprintf('You continue on into the tunnel hoping to find\n')
                    pause(3.5);
                    fprintf('something of use.\n\n')
                    pause(3.5);
                    fprintf('As you go farther and farther into the tunnel you \n')
                    pause(3.5);
                    fprintf('hear what sounds like rain all around you. Is that\n')
                    pause(3.5);
                    fprintf('even possible?\n\n')
                    pause(3.5);
                    fprintf('N.A.C.S.: "That''s no rain... This place is collasping!\n')
                    pause(3.5);
                    fprintf('Quick! Run! Let''s get out of here before the rocks\n')
                    pause(3.5);
                    fprintf('crush us!"\n\n')
                    pause(3.5);
                    fprintf('The tunnel''s ceiling caves in. Luckily, you were \n')
                    pause(3.5);
                    fprintf('not crushed, however, you see no way out, even with\n')
                    pause(3.5);
                    fprintf('the help of N.A.C.S.''s light.\n\n')
                    pause(3.5);
                    go=input('--Press ''Enter'' when ready to continue--\n');
                    fprintf('N.A.C.S.: "Transmission from the ship..."\n\n')
                    pause(3.5);
                    fprintf('N.N.A.C.S.: "Good news everyone! The repairs are completed.\n')
                    pause(3.5);
                    fprintf('I''m on my way now. Please stay clear of any danger."\n\n')
                    pause(3.5);
                    fprintf('When the ship arrives, it drills a hole through the rubble\n')
                    pause(3.5);
                    fprintf('whichs allows you to get out.\n\n')
                    pause(3.5);
                    error('N.N.A.C.S.: "Let''s get out of here. That''s enough for one day."')
                elseif NewLocation==14;
                    fprintf('You walk up the road to find a very large wall built into the\n')
                    pause(3.5);
                    fprintf('side of the mountain. There is a small opening in the middle. You\n')
                    pause(3.5);
                    fprintf('walk inside and find yourself in a wide open area. You see machines\n')
                    pause(3.5);
                    fprintf('all over the place, some in pieces, some intact. Most with layers\n')
                    pause(3.5);
                    fprintf('and layers of dust and vegetation.\n\n')
                    pause(3.5);
                    go=input('--Press ''Enter'' when ready to continue--\n');
                    fprintf('N.A.C.S.: "This appears to be an old hangar. This will take us\n')
                    pause(3.5);
                    fprintf('hours to sort through. Let''s hope it''s worth it!\n\n')
                    pause(3.5);
                    warndlg('You have found Artifacts of an Ancient Civilization!','Congratulations!')
                    pause(1);
                    error('Congratulations! Come back again tomorrow to search for more artifacts.')
                elseif NewLocation==4
                    Map_4;
                end
            elseif NewLocation==11;
                % Map_11;
                fprintf('You walk into the city and find that the vegetation inhibits your search\n')
                pause(3.5);
                fprintf('into most of the buildings. After some time, you come across a large \n')
                pause(3.5);
                fprintf('structure with massive stairs and large, immensive stone columns still \n')
                pause(3.5);
                fprintf('standing upright. You walk up the stairs and through an opening just \n')
                pause(3.5);
                fprintf('beyond the columns. N.A.C.S. illuminates its light and you appear to \n')
                pause(3.5);
                fprintf('be in an old library.\n\n')
                pause(3.5);
                fprintf('N.A.C.S.: "Wow. This could have a lot of information that we''ve been \n')
                pause(3.5);
                fprintf('looking for and some clues into the past of this planet. If you want to\n')
                pause(3.5);
                fprintf('keep looking here, go West or if you want leave and continue looking \n')
                pause(3.5);
                fprintf('somewhere else head North."\n\n')
                pause(3.5);
                Direction=input('N.A.C.S.: Which way would you like to go, Collector?: ');
                fprintf('\n')
                if Direction==3
                    NewLocation=11.3;
                    fprintf('You head deeper into the library, scanning through piles and piles of old\n')
                    pause(3.5);
                    fprintf('texts. Suddenly there is a loud crashing sound.\n\n')
                    pause(3.5);
                    fprintf('N.A.C.S.: "Looks like our only way out has just closed. Oh well, we''ll just\n')
                    pause(3.5);
                    fprintf('have to continue looking through this endless pile of knowledge until the \n')
                    pause(3.5);
                    fprintf('ship get repaired."\n\n')
                    pause(3.5);
                    fprintf('It would appear that N.A.C.S. was happy that the entrance caved in.\n\n')
                    pause(3.5);
                    fprintf('For the next hour or so, you continue to look through various texts, trying\n')
                    pause(3.5);
                    fprintf('to salvage any information you can on the ancient civilization that was once\n')
                    pause(3.5);
                    fprintf('here.\n\n')
                    pause(3.5);
                    fprintf('N.A.C.S.: "Wow! This here shows that the civilization knew how to travel\n')
                    pause(3.5);
                    fprintf('through space. Maybe that''s where they all went. But why leave everything\n')
                    pause(3.5);
                    fprintf('behind?"\n\n')
                    pause(3.5);
                    go=input('--Press ''Enter'' when ready to continue--\n');
                    fprintf('N.A.C.S.: "Transmission from the ship..."\n\n')
                    pause(3.5);
                    fprintf('N.N.A.C.S.: "Good news everyone! The repairs are completed. I''m on my way \n')
                    pause(3.5);
                    fprintf('now. Please stay clear of any danger."\n\n')
                    pause(3.5);
                    fprintf('When the ship arrives, you walk back to the entrance. It drills a hole through\n')
                    pause(3.5);
                    fprintf('the rubble whichs allows you to get out.\n\n')
                    pause(3);
                    error('N.N.A.C.S.: "Let''s get out of here. We should come back here again sometime. There''s so much knowledge here."')
%                     error('You get lost in the library, spending hours looking through old texts.')
                elseif Direction==1
                    fprintf('You walk back outside and head North on a road adjacent to the library.\n')
                    pause(3.5);
                    fprintf('You come to an open area in the middle of the many tall structures. There\n')
                    pause(3.5);
                    fprintf('off to one side, you see a large, grassy mound.\n\n')
                    pause(3.5);
                    fprintf('N.A.C.S.: "That seems a little out of place, maybe we shouldn''t..."\n\n')
                    pause(3.5);
                    fprintf('You start walking towards the strange mound.\n\n')
                    pause(3.5);
                    fprintf('N.A.C.S.: "I''m detecting a small amount of energy coming from the mound,\n')
                    pause(3.5);
                    fprintf('nothing on thermal though."\n\n')
                    pause(3.5);
                    fprintf('As you get closer,\n\n')
                    pause(3.5);
                    fprintf('N.A.C.S.: "Energy levels rising. Be careful."\n\n')
                    pause(3.5);
                    fprintf('You''re about a meter from it now, a part of the mound begins to shake and \n')
                    pause(3.5);
                    fprintf('starts to move upward. Where the part of the mound was, now lies a round,\n')
                    pause(3.5);
                    fprintf('glowing, spherical object.\n\n')
                    pause(3.5);
                    fprintf('N.A.C.S.: "I don''t think this is a nice, innocent mound. I think it would\n')
                    pause(3.5);
                    fprintf('be best to start running."\n\n')
                    pause(3.5);
                    go=input('--Press ''Enter'' when ready to continue--\n');
                    fprintf('The mound begins to rise. Up and up, casting a shadow over the entire area.\n')
                    pause(3.5);
                    fprintf('Another piece of the mound, lower than the spherical object, begins to give\n')
                    pause(3.5);
                    fprintf('way to something hidden beneath the grass. You now notice that there are four\n')
                    pause(3.5);
                    fprintf('spherical objects, two on each side, with the gapping hole that just opened \n')
                    pause(3.5);
                    fprintf('underneath them. The mound gives off a deafening roar, creating a shock wave that\n')
                    pause(3.5);
                    fprintf('knocks you off your feet. You hear some glass shatter off to the sides of you.\n\n')
                    pause(3.5);
                    fprintf('N.A.C.S.: "Now would be a good time to start running. Run!"\n\n')
                    pause(3.5);
                    fprintf('You scramble to your feet and run as fast as you can in the opposite direction.\n')
                    pause(3.5);
                    fprintf('You can feel the ground shake beneath you, with each step of the creature.\n\n')
                    pause(3.5);
                    fprintf('N.A.C.S.: "Gathering surrounding area map data...okay. Take the next left,\n')
                    pause(3.5);
                    fprintf('then right, then left again, err, no go straight. Keep going straight. Next go\n')
                    pause(3.5);
                    fprintf('left, I''ll tell you when."\n\n')
                    pause(3.5);
                    fprintf('The shaking has gone down a bit, but you can still feel them as if it were in\n')
                    pause(3.5);
                    fprintf('the distance.\n\n')
                    pause(3.5);
                    go=input('--Press ''Enter'' when ready to continue--\n');
                    fprintf('N.A.C.S.: "Large energy surge to the South."\n\n')
                    pause(3.5);
                    fprintf('Just then, the creature bursts through one of the structures and lands some\n')
                    pause(3.5);
                    fprintf('distance in front of you.\n\n')
                    pause(3.5);
                    fprintf('N.A.C.S.: "Left, left, left! Go left! Quick!"\n\n')
                    pause(3.5);
                    fprintf('You start to run left. The creature tries to pounce on you, barely missing. The\n')
                    pause(3.5);
                    fprintf('impact sends you flying through the air. You get up and continue running. Around\n')
                    pause(3.5);
                    fprintf('the next corner, you notice a small hole in the ground. You run into it and find\n')
                    pause(3.5);
                    fprintf('yourself sliding down a long, dark, ramp. You feel another shock wave as the creature\n')
                    pause(3.5);
                    fprintf('tries to get you through the hole. You can hear rubble sliding down behind you.\n')
                    pause(3.5);
                    fprintf('N.A.C.S. turns on its light and you appear to be in an underground tunnel.\n\n')
                    pause(3.5);
                    fprintf('N.A.C.S.: "Gathering map data. We should be safe from that creature for at least\n')
                    pause(3.5);
                    fprintf('a little. Wow, these tunnels go all throughout the city and go deep as well. Okay,\n')
                    pause(3.5);
                    fprintf('I''ve found one that can lead us out of the city. It will end up at the road we were\n')
                    pause(3.5);
                    fprintf('on before, just a little farther down."\n\n')
                    pause(3.5);
                    fprintf('After some time in the tunnels, you come to a ladder. You climb up the ladder and\n')
                    pause(3.5);
                    fprintf('find yourself on a road.\n\n')
                    pause(3.5);
                    fprintf('N.A.C.S.: "Let''s keep going North on the road and see what we find."\n\n')
                    pause(3.5);
                    NewLocation=13;
                    Map_13;
                    if NewLocation==16;
                        % Map_16;
                        fprintf('You walk around the bend to find the road leading \n')
                        pause(3.5);
                        fprintf('into a tunnel.\n')
                        pause(3.5);
                        fprintf('N.A.C.S.: "Are you sure about this tunnel? I''ve \n')
                        pause(3.5);
                        fprintf('got a bad feeling about it."\n\n')
                        pause(3.5);
                        fprintf('You continue on into the tunnel hoping to find\n')
                        pause(3.5);
                        fprintf('something of use.\n\n')
                        pause(3.5);
                        fprintf('As you go farther and farther into the tunnel you \n')
                        pause(3.5);
                        fprintf('hear what sounds like rain all around you. Is that\n')
                        pause(3.5);
                        fprintf('even possible?\n\n')
                        pause(3.5);
                        fprintf('N.A.C.S.: "That''s no rain... This place is collapsing!\n')
                        pause(3.5);
                        fprintf('Quick! Run! Let''s get out of here before the rocks\n')
                        pause(3.5);
                        fprintf('crush us."\n\n')
                        pause(3.5);
                        fprintf('The tunnel''s ceiling caves in. Luckily, you were \n')
                        pause(3.5);
                        fprintf('not crushed, however, you see no way out, even with\n')
                        pause(3.5);
                        fprintf('the help of N.A.C.S.''s light.\n\n')
                        pause(3.5);
                        go=input('--Press ''Enter'' when ready to continue--\n');
                        fprintf('N.A.C.S.: "Transmission from the ship..."\n\n')
                        pause(3.5);
                        fprintf('N.N.A.C.S.: "Good news everyone! The repairs are completed.\n')
                        pause(3.5);
                        fprintf('I''m on my way now. Please stay clear of any danger."\n\n')
                        pause(3.5);
                        fprintf('When the ship arrives, it drills a hole through the rubble\n')
                        pause(3.5);
                        fprintf('whichs allows you to get out.\n\n')
                        pause(3);
                        error('N.N.A.C.S.: "Let''s get out of here. That''s enough for one day."')
                    elseif NewLocation==14;
                        fprintf('You walk up the road to find a very large wall built into the\n')
                        pause(3.5);
                        fprintf('side of the mountain. There is a small opening in the middle. You\n')
                        pause(3.5);
                        fprintf('walk inside and find yourself in a wide open area. You see machines\n')
                        pause(3.5);
                        fprintf('all over the place, some in pieces, some intact. Most with layers\n')
                        pause(3.5);
                        fprintf('and layers of dust and vegetation.\n\n')
                        pause(3.5);
                        go=input('--Press ''Enter'' when ready to continue--\n');
                        fprintf('N.A.C.S.: "This appears to be an old hangar. This will take us\n')
                        pause(3.5);
                        fprintf('hours to sort through. Let''s hope it''s worth it!\n\n')
                        pause(3.5);
                        warndlg('You have found Artifacts of an Ancient Civilization!','Congratulations!')
                        pause(1);
                        error('Congratulations! Come back again tomorrow to search for more artifacts.')
                    end
                elseif Direction==5
                    fprintf('You head back to the ship.\n\n')
                    pause(3.5);
                    error('You are done exploring for the day. Search again tomorrow for artifacts.')
                elseif Direction~=1||3||5
                    warning('Invalid input. Please type correct input.')
                    fprintf('\n')
                end
            elseif NewLocation==5;
                Map_5
                return
            end
        elseif NewLocation==6
            Map_6;
            if NewLocation==15;
                Map_15;
                if NewLocation==18;
                    % Map_18;
                    fprintf('You walk for what seems like hours along the\n')
                    pause(3.5);
                    fprintf('stream. You''re starting to think that it truly has\n')
                    pause(3.5);
                    fprintf('no beginning. The strange machine left them at the\n')
                    pause(3.5);
                    fprintf('fork, insisting they go to the mountain. You continue\n')
                    pause(3.5);
                    fprintf('to go North, yet it appears that you''re now walking\n')
                    pause(3.5);
                    fprintf('downhill. But the stream is still flowing South, seemingly\n')
                    pause(3.5);
                    fprintf('unaware of the laws of gravity. It''s starting to get\n')
                    pause(3.5);
                    fprintf('dark and you decide you should turn around. You start\n')
                    pause(3.5);
                    fprintf('walking back, but then you notice something strange.\n')
                    pause(3.5);
                    fprintf('The stream is now flowing in the opposite direction,\n')
                    pause(3.5);
                    fprintf('to the North. You stop and look at it, trying to\n')
                    pause(3.5);
                    fprintf('figure it out. Maybe it was flowing downhill this\n')
                    pause(3.5);
                    fprintf('whole time and you didn''t notice? No, it was definitely\n')
                    pause(3.5);
                    fprintf('flowing uphill before.\n\n')
                    pause(3.5);
                    fprintf('N.A.C.S.: "Wow. Just felt a large disturbance in the...\n')
                    pause(3.5);
                    fprintf('electromagnetic field? No, wasn''t there. The gravitational\n')
                    pause(3.5);
                    fprintf('field. No, wasn''t there either. I''m not sure where\n')
                    pause(3.5);
                    fprintf('that came from, but it was certainly a large change."\n\n')
                    pause(3.5);
                    go=input('--Press ''Enter'' when ready to continue--\n');
                    fprintf('N.A.C.S.: "Transmission from the ship..."\n\n')
                    pause(3.5);
                    fprintf('N.N.A.C.S.: "Good news everyone! The repairs are completed.\n')
                    pause(3.5);
                    fprintf('I''m on my way now. Please stay clear of any danger."\n\n')
                    pause(3.5);
                    fprintf('As you get in the ship, you start to noctice bright orbs\n')
                    pause(3.5);
                    fprintf('of varying light and color floating around the now dark \n')
                    pause(3.5);
                    fprintf('landscape. Are you imagining them?\n\n')
                    pause(3.5);
                    fprintf('N.N.A.C.S.: "No energy detected, yet they''re coming up\n')
                    pause(3.5);
                    fprintf('on the radar. They seem harmless, but let''s get out\n')
                    pause(3.5);
                    fprintf('of here before we provoke them.\n\n')
                    pause(3.5);
                    error('You are done exploring for the day. Search again tomorrow for artifacts.')
                elseif NewLocation==14;
                    % Map_14;
                    fprintf('You continue up the stream, following the floating machine.\n')
                    pause(3.5);
                    fprintf('After a bit of climbing, you find yourself in front of what\n')
                    pause(3.5);
                    fprintf('looks like a research facility built into the side of the\n')
                    pause(3.5);
                    fprintf('mountain. And there appears to be no signs of decay, except \n')
                    pause(3.5);
                    fprintf('the vines and moss growing on the windows. In comparison to\n')
                    pause(3.5);
                    fprintf('the farmhouse, this place appears to be almost new. Which is\n')
                    pause(3.5);
                    fprintf('strange, since this planet hasn''t had intelligent life for\n')
                    pause(3.5);
                    fprintf('decades, if not centuries, based on the surroundings you''ve\n')
                    pause(3.5);
                    fprintf('seen. Unless... no it couldn''t be.\n\n')
                    pause(3.5);
                    fprintf('''Traveller must open door.''\n\n')
                    pause(3.5);
                    fprintf('You noticed the machine was scanning something before, but \n')
                    pause(3.5);
                    fprintf('it seemed to have been looking for the door. Now the machine\n')
                    pause(3.5);
                    fprintf('is in front of you again, with what appears to be a hand scanner.\n\n')
                    pause(3.5);
                    fprintf('N.A.C.S.: "Is that going to work? Does it know we''re not \n')
                    pause(3.5);
                    fprintf('from this planet?"\n\n')
                    pause(3.5);
                    fprintf('You place your hand on the projected screen. A moment later\n')
                    pause(3.5);
                    fprintf('a voice coming from the door states,\n\n')
                    pause(3.5);
                    fprintf('''Vell: ferrt, Foomka ken. Now opening door.''\n\n')
                    pause(3.5);
                    fprintf('N.A.C.S.: "The system adjusted to our language instantly again.\n')
                    pause(3.5);
                    fprintf('Amazing. How can it understand our language so quickly and adjust\n')
                    pause(3.5);
                    fprintf('just as quick?"\n\n')
                    pause(3.5);
                    go=input('--Press ''Enter'' when ready to continue--\n');
                    fprintf('The door opens and you walk inside. The same voice from before\n')
                    pause(3.5);
                    fprintf('starts talking again.\n\n')
                    pause(3.5);
                    fprintf('''Main power still offline. Continuing use of back up power.\n')
                    pause(3.5);
                    fprintf('Lighting room now.''\n\n')
                    pause(3.5);
                    fprintf('The room illuminates to a soft glow, just enough to see around.\n')
                    pause(3.5);
                    fprintf('It appears that not all the lights are on. N.A.C.S. too, switches\n')
                    pause(3.5);
                    fprintf('on its light. As you look around the room, you notice that the \n')
                    pause(3.5);
                    fprintf('floating machine has disappeared and you no longer hear it either.\n\n')
                    pause(3.5);
                    fprintf('N.A.C.S.: "This place could have an unfathomable amount of data\n')
                    pause(3.5);
                    fprintf('and knowledge. Put me in that terminal over there."\n\n')
                    pause(3.5);
                    fprintf('You take N.A.C.S. off of the clip on your shoulder and place it\n')
                    pause(3.5);
                    fprintf('in the terminal on the wall.\n\n')
                    pause(3.5);
                    fprintf('N.A.C.S.: "Wow. I don''t even have to fight to get into this \n')
                    pause(3.5);
                    fprintf('system. Maybe they''re as curious about me as I am of them. And\n')
                    pause(3.5);
                    fprintf('they even have holographic projectors. How convenient."\n\n')
                    pause(3.5);
                    fprintf('The familiar intricate three-dimensional shapes appear and start\n')
                    pause(3.5);
                    fprintf('to fly around the room.\n')
                    pause(3.5);
                    fprintf('N.A.C.S.: "Gathering map data. Wow this facility is...the mountain.\n')
                    pause(3.5);
                    fprintf('The mountain is completely hollowed out and filled with rooms and\n')
                    pause(3.5);
                    fprintf('rooms of various shapes and sizes. Now let''s find that little guy.\n')
                    pause(3.5);
                    fprintf('Ah. It''s on its way back here."\n\n')
                    pause(3.5);
                    go=input('--Press ''Enter'' when ready to continue--\n');
                    fprintf('A moment later the floating machine comes flying into the room.\n\n')
                    pause(3.5);
                    fprintf('''All ''Krats'' gone. Traveller must repair me. I will show you.''\n\n')
                    pause(3.5);
                    fprintf('You follow the floating machine through a series of hallways \n')
                    pause(3.5);
                    fprintf('until you come out into a large room. You notice there are \n')
                    pause(3.5);
                    fprintf('hundreds of the floating machines all over the place, however,\n')
                    pause(3.5);
                    fprintf('none of them are glowing.\n\n')
                    pause(3.5);
                    fprintf('''Here traveller. Hurry!''\n\n')
                    pause(3.5);
                    fprintf('Once again, the holographic scanner appears, requesting your hand.\n')
                    pause(3.5);
                    fprintf('You put your hand to it and the floating machine begins to spin\n')
                    pause(3.5);
                    fprintf('at a high speed, turning into a blur.\n\n')
                    pause(3.5);
                    fprintf('N.A.C.S.: "Hmmm, based on their data, their ''Travellers'' seem to \n')
                    pause(3.5);
                    fprintf('be very similar to us, the Collectors. Interesting. I''ll have to \n')
                    pause(3.5);
                    fprintf('look into this more."\n\n')
                    pause(3.5);
                    fprintf('The floating machine slowed and then stopped. Its light has changed\n')
                    pause(3.5);
                    fprintf('color.\n\n')
                    pause(3.5);
                    go=input('--Press ''Enter'' when ready to continue--\n');
                    fprintf('''Traveller, err, Collector: thank you for your help, but we musn''t\n')
                    pause(3.5);
                    fprintf('stop here. We need to save the past before the ''Skavgers'' find this\n')
                    pause(3.5);
                    fprintf('world. I will help.''\n\n')
                    pause(3.5);
                    fprintf('N.A.C.S.: "It certainly doesn''t have a sense of humor, but okay.\n')
                    pause(3.5);
                    fprintf('Let''s go! Onto the next journey!"\n\n')
                    pause(3.5);
                    warndlg('You have obtained an Artifact of an Ancient Civilization!','Congratulations!')
                    pause(1);
                    error('Congratulations! Come back again tomorrow to search for more artifacts.')
                end
            elseif NewLocation==12;
                % Map_12;
                fprintf('East: You walk towards the lake and see a ginormous fish\n')
                pause(3.5);
                fprintf('in the distance jump out of the water. It appears much\n')
                pause(3.5);
                fprintf('bigger than your ship. As it lands back in the lake, the\n')
                pause(3.5);
                fprintf('splash it creates causes a huge wave, heading for shore.\n\n')
                pause(3);
                error('N.A.C.S.: "Nope! Let''s call it quits for the day and get out of here."')
            end
        end
    end
end
toc

%% some extras

% 2-D Map

figure(1)
mapx=[1,1,2;2,1,3;2,0,3];
mapy=[4,0,8;2,0,0;1,0,2];
mapz=[2,11,3;3,11,3;4,9,1];
Map2=[mapx;mapy;mapz];
contour(Map2,'b')
xlabel('South')
ylabel('West')
title('North')
x=[2,2,2,1.5,1.1,2.5,2.9,2,2,1.5,1.5];
y=[4.5,6,7.5,4.5,4.5,4.5,4,1.5,3,6,3];

hold on
scatter(x,y,50,'k','filled')
text(1,5,'The City','Color','g')
text(2.55,4.5,'The Farmhouse','Color','r')
text(2.95,4,'The Lake','Color','g')
text(2.05,2.9,'The Dirt Road','Color','r')
text(2.05,6,'The Forest','Color','r')
text(1.2,4,'The North-South Road','Color','r')
text(2.05,7.5,'The Cave Entrance','Color','r')
text(2.05,8.5,'The Mountain','Color','g')
text(2.05,4.5,'The Field','Color','r')
text(2.8,6.5,'The Stream','Color','r')
text(2.05,1.5,'The Ship','Color','g')

% 3-D Map

figure(2)
mapx=[1,1,2;2,1,3;2,0,3];
mapy=[-2,1,-6;2,0,0;1,0,2];
mapz=[2,11,3;3,11,3;4,10,1];
Map2=[mapx;mapy;mapz];
contour3(Map2,'b')
xlabel('South')
ylabel('West')
title('North')
x=[2,2,2,1.5,1.1,2.5,2.9,2,2,1.5,1.5];
y=[4.5,6,7.5,4.5,4.5,4.5,4,1.5,3,6,3];
z=[0,0.5,5,-0.15,0,0,-4,-0.05,0,0,0];
hold on
scatter3(x,y,z,50,'k','filled')
text(1,5,0,'The City','Color','g')
text(2.55,4.5,0,'The Farmhouse','Color','r')
text(2.95,4,-4,'The Lake','Color','g')
text(2.05,2.9,0,'The Dirt Road','Color','r')
text(2.05,6,0.5,'The Forest','Color','r')
text(1.2,4,0,'The North-South Road','Color','r')
text(2.05,7.5,5,'The Cave Entrance','Color','r')
text(2.05,8.5,10,'The Mountain','Color','g')
text(2.05,4.5,0,'The Field','Color','r')
text(2.8,6.5,0,'The Stream','Color','r')
text(2.05,1.5,'The Ship','Color','g')

warndlg('Here''s an attempt at a 2-D topographic and 3-D terrain map for the game, in the early stages of the game. There''s a reason they weren''t included.','Have some extra stuff.') 