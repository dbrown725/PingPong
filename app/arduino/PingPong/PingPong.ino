
// We'll use SoftwareSerial to communicate with the XBee:
#include <SoftwareSerial.h>
// XBee's DOUT (TX) is connected to pin 2 (Arduino's Software RX)
// XBee's DIN (RX) is connected to pin 3 (Arduino's Software TX)
SoftwareSerial XBee(2, 3); // RX, TX

const byte reset = 8;
const byte playerOneIncrease = 5;
const byte playerOneDecrease = 7;
const byte playerTwoIncrease = 6;
const byte playerTwoDecrease = 9;


void setup()
{
  XBee.begin(9600);
  pinMode (reset, INPUT);
  pinMode (playerOneIncrease, INPUT);
  pinMode (playerOneDecrease, INPUT);
  pinMode (playerTwoIncrease, INPUT);
  pinMode (playerTwoDecrease, INPUT);

}

void loop()
{ 
  if (digitalRead (reset) == HIGH)
  {   
    //delay (1000);
    XBee.write("RESETTT");
  }

  if (digitalRead (playerOneIncrease) == HIGH)
  {   
    //delay (1000);
    XBee.write("ONEINCRE");
  }    


  if (digitalRead (playerOneDecrease) == HIGH)
  {   
    //delay (1000);
    XBee.write("ONEDECRE");
  } 
  
  if (digitalRead (playerTwoIncrease) == HIGH)
  {   
    //delay (1000);
    XBee.write("TWOINCRE");
  } 

  if (digitalRead (playerTwoDecrease) == HIGH)
  {   
    //delay (1000);
    XBee.write("TWODECRE");
  } 

  delay(100);
}
