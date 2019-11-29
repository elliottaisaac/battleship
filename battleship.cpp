#include <cstdio>
#include <iostream>
#include <vector>
#include <string>

using namespace std;

vector<int> hitSquaresXcoords = {0,0,0,0,0,0,0,0,0,0};
vector<int> hitSquaresYcoords = {0,0,0,0,0,0,0,0,0,0};

int guessXcoord;
int guessYcoord;
int numOfShots =  50;
int shotsFired = 0;
int score = 0;


void HideSailBoats(){
  for(int i = 0; i < 10; i++){
    int X = rand() % 10;
    int Y = rand() % 10;
    hitSquaresXcoords[i] = X;
    hitSquaresYcoords[i] = Y;
  }
}

bool CheckForHit(){
    bool hit = false;
      for(int j = 0; j < 10; j++){
          if( hitSquaresXcoords[j] == guessXcoord && hitSquaresYcoords[j] == guessYcoord){
            puts("HIT!!");
            score++;
            cout << "Your score is " << score << "\n" << endl;
            hit = true;
          }
  }
    return hit;
}

void NearHit(){
  puts("Near hit!");
}
bool CheckForNearHit(){
  bool nearhit = false;
  for(int k = 0; k < 10; k++){
      if(hitSquaresXcoords[k] + 1 == guessXcoord && hitSquaresYcoords[k] == guessYcoord){
        NearHit();
        nearhit = true;
      }
      if(hitSquaresXcoords[k] - 1 == guessXcoord && hitSquaresYcoords[k] == guessYcoord){
        NearHit();
        nearhit = true;
      }
      if(hitSquaresYcoords[k] + 1 == guessYcoord && hitSquaresXcoords[k] == guessXcoord){
        NearHit();
        nearhit = true;
      }
      if(hitSquaresYcoords[k] - 1 == guessYcoord && hitSquaresXcoords[k] == guessXcoord){
        NearHit();
        nearhit = true;
      }
    }
    return nearhit;
  }

void CheckForEndOfGame(){
    if(shotsFired == numOfShots && score < 10) puts("You lose.");
    if(score == 10) puts("You win!");
}

void PlayRound(){
    cout << "\nEnter the X coordinate of your shot (1 - 10)\n" << endl;
    cin >> guessXcoord;
    
    cout << "\nEnter the Y coordinate of your shot (1 - 10)\n" << endl;
    cin >> guessYcoord;
    
    if (CheckForHit() == true) puts("Nice shot!\n");
    else if (CheckForNearHit() == true) puts("So close!\n");
    else puts("Miss. Try again.\n");
    
    CheckForEndOfGame();
}

int main()
{
    puts("Welcome to Battleship\n");
    HideSailBoats();
    
    while(1 == 1){
        PlayRound();
    }

    return 0;
}
